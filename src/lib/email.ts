/**
 * Transactional email via Resend.
 *
 * WHY RESEND, AND WHY NO SDK
 * This app runs on Cloudflare Workers, which is not Node — most email
 * libraries (nodemailer and anything using `net`/`tls`) simply cannot run
 * there. Resend is a single authenticated POST to an HTTPS endpoint, so a
 * bare `fetch` works, adds no dependency and nothing to keep updated.
 *
 * ────────────────────────────────────────────────────────────────────────────
 * CURRENT SETUP: RESEND'S SHARED TEST SENDER. READ THE CONSTRAINT.
 * ────────────────────────────────────────────────────────────────────────────
 *
 * `from` defaults to onboarding@resend.dev, Resend's shared sender, which needs
 * no domain verification and works the moment you have an API key.
 *
 * THE CATCH: while sending from onboarding@resend.dev, Resend will ONLY deliver
 * to the email address the Resend account was registered with. Any other
 * recipient is rejected with a 403. So ENQUIRY_TO_EMAIL must be that account
 * address — NOT info@masterclasscricket.co.uk, unless they happen to be the
 * same. Set it wrong and every enquiry bounces; `describeSendFailure` below
 * turns that specific 403 into a message that says so.
 *
 * Setup as it stands:
 *   1. Create an API key in Resend with "Sending access" only.
 *   2. Locally: copy .env.example to .env and fill in RESEND_API_KEY.
 *      In production: `wrangler secret put RESEND_API_KEY`.
 *      Never commit the key — a key in git is a leaked key.
 *   3. Set ENQUIRY_TO_EMAIL to your Resend account email.
 *
 * TO GO PROPERLY LIVE (do this before launch, not after):
 *   Verify masterclasscricket.co.uk in Resend — three DNS records — then set
 *   ENQUIRY_FROM_EMAIL to something on that domain, e.g.
 *   "Masterclass Cricket <enquiries@masterclasscricket.co.uk>", and point
 *   ENQUIRY_TO_EMAIL at info@masterclasscricket.co.uk. Two env-var changes, no
 *   code change. Until then, mail sent from a shared resend.dev address is far
 *   more likely to land in spam, and the recipient restriction above applies.
 *
 * If RESEND_API_KEY is missing the send fails loudly rather than pretending to
 * succeed. A form that silently swallows enquiries is worse than one that
 * errors, because nobody finds out until a parent complains.
 */

const RESEND_ENDPOINT = "https://api.resend.com/emails";

export interface EmailPayload {
  subject: string;
  /** Plain text. These are internal notification emails — no HTML needed. */
  text: string;
  /** Set to the enquirer's address so a reply goes straight back to them. */
  replyTo?: string;
}

export interface EmailConfig {
  apiKey: string;
  to: string;
  from: string;
}

/**
 * Reads the mail configuration from the environment.
 *
 * Returns null rather than throwing so a caller can distinguish "not
 * configured" (a deployment problem worth logging) from "send failed" (a
 * transient problem worth retrying).
 */
/** Resend's shared test sender. Works without domain verification, but only
 *  delivers to the Resend account holder's own address. */
const RESEND_TEST_SENDER = "Masterclass Cricket <onboarding@resend.dev>";

/**
 * Reads an env var, treating blank as unset.
 *
 * `??` is not enough here: a var declared but left empty in a .env file
 * (`ENQUIRY_FROM_EMAIL=`) arrives as "" rather than undefined, which is not
 * nullish, so a `??` fallback would never fire and the send would go out with
 * an empty From header.
 */
function env(name: string): string | undefined {
  const value = process.env[name];
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed === "" ? undefined : trimmed;
}

function readEmailConfig(): EmailConfig | null {
  const apiKey = env("RESEND_API_KEY");
  if (!apiKey) return null;

  return {
    apiKey,
    // No default. While using the shared test sender, the only address Resend
    // will deliver to is the account holder's, and that is not something this
    // file can guess — a wrong guess means every enquiry silently 403s. An
    // unset value is caught below with an explanation.
    to: env("ENQUIRY_TO_EMAIL") ?? "",
    // Defaults to the shared test sender so the form works as soon as an API
    // key exists. Override with an address on a Resend-verified domain before
    // launch — see the setup notes at the top of this file.
    from: env("ENQUIRY_FROM_EMAIL") ?? RESEND_TEST_SENDER,
  };
}

/**
 * Turns a Resend error response into something actionable.
 *
 * The 403 is the one that matters: it is what you get when using
 * onboarding@resend.dev with any recipient other than your own account email,
 * and Resend's raw message does not make the fix obvious.
 */
function describeSendFailure(status: number, detail: string, config: EmailConfig): string {
  const usingTestSender = config.from.includes("resend.dev");

  if (status === 403 && usingTestSender) {
    return (
      `Resend refused to send to ${config.to}. While sending from the shared ` +
      `onboarding@resend.dev address, Resend only delivers to the email you registered ` +
      `your Resend account with. Either set ENQUIRY_TO_EMAIL to that address, or verify ` +
      `masterclasscricket.co.uk in Resend and set ENQUIRY_FROM_EMAIL to an address on it. ` +
      `Resend said: ${detail}`
    );
  }
  if (status === 401) {
    return `Resend rejected the API key (401). Check RESEND_API_KEY. Resend said: ${detail}`;
  }
  if (status === 422 && !usingTestSender) {
    return (
      `Resend rejected the sender ${config.from} (422) — the domain is probably not ` +
      `verified yet. Resend said: ${detail}`
    );
  }
  return `Resend returned ${status}: ${detail}`;
}

export async function sendEnquiryEmail(payload: EmailPayload): Promise<void> {
  const config = readEmailConfig();
  if (!config) {
    throw new Error(
      "RESEND_API_KEY is not set — the enquiry could not be emailed. Set it as a Worker secret.",
    );
  }
  if (!config.to) {
    throw new Error(
      "ENQUIRY_TO_EMAIL is not set, so there is nowhere to send the enquiry. While using the " +
        "shared onboarding@resend.dev sender this must be the email address your Resend account " +
        "is registered with — Resend will not deliver anywhere else.",
    );
  }

  const response = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: config.from,
      to: [config.to],
      subject: payload.subject,
      text: payload.text,
      ...(payload.replyTo ? { reply_to: payload.replyTo } : {}),
    }),
  });

  if (!response.ok) {
    // Include Resend's own message — its 4xx bodies name the exact problem,
    // which saves a lot of guessing.
    const detail = await response.text().catch(() => "");
    throw new Error(describeSendFailure(response.status, detail.slice(0, 500), config));
  }
}
