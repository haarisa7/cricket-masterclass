import { createFileRoute } from "@tanstack/react-router";

import { sendEnquiryEmail } from "@/lib/email";

/**
 * IND-02 — handler for the indoor programme interest form.
 *
 * ────────────────────────────────────────────────────────────────────────────
 * CURRENTLY HAS NO CALLER. KEPT ON PURPOSE — DO NOT DELETE AS DEAD CODE.
 * ────────────────────────────────────────────────────────────────────────────
 *
 * The homepage restructure removed the indoor interest form: the indoor
 * programme is now one line inside the Group Sessions tab with a WhatsApp CTA,
 * because it was occupying two full sections plus a card for something with no
 * confirmed dates or prices. WhatsApp still satisfies IND-03 — it registers
 * interest rather than taking a booking.
 *
 * This route, and src/lib/email.ts with it, is retained because FOOT-03 still
 * requires a general coaching enquiry form that the site does not yet have, and
 * this is the tested handler it should use. Point a new form at it rather than
 * writing a second one. The old form markup is recoverable with:
 *   git show 06d7803:src/components/sections/indoor-programme.tsx
 *
 * A form posts JSON here; this validates it and emails the club inbox.
 *
 * Done as a first-party server route rather than a managed form service so it
 * is host-agnostic, covered by the typecheck, and testable locally. This app
 * deploys to Cloudflare Workers, so the handler stays on the platform's own
 * runtime with no third-party form product in the path.
 *
 * WHATSAPP NOTIFICATION — NOT BUILT. The brief asks for one "if possible". It
 * needs the Meta WhatsApp Cloud API or Twilio: a business verification, an
 * approved message template, and a per-message cost. Not difficult, but it is a
 * separate paid integration rather than something to slip in here. The email
 * lands on a phone anyway, which covers most of the intent.
 */

/** Field name -> label used in the notification email. Order matters: it is the
 *  order the coach reads them in. */
const FIELDS: [string, string][] = [
  ["player-name", "Player's name"],
  ["player-age", "Player's age"],
  ["player-club", "Current school or cricket club"],
  ["player-level", "Current playing level"],
  ["player-discipline", "Batting / bowling / all-rounder"],
  ["day-preference", "Saturday or Sunday"],
  ["time-preference", "Preferred time"],
  ["parent-name", "Parent or guardian's name"],
  ["contact-number", "Contact number"],
  ["email", "Email address"],
];

const REQUIRED = ["player-name", "player-age", "parent-name", "email"];

/** Generous but finite. Longest legitimate answer here is a school name. */
const MAX_FIELD_LENGTH = 200;

function json(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export const Route = createFileRoute("/api/indoor-interest")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let data: Record<string, unknown>;
        try {
          data = (await request.json()) as Record<string, unknown>;
        } catch {
          return json({ error: "Malformed request." }, 400);
        }

        const get = (key: string) =>
          typeof data[key] === "string" ? (data[key] as string).trim() : "";

        // Honeypot. A real person never sees this field, so anything in it is a
        // bot. Return 200 rather than an error — telling a bot it was detected
        // just teaches it to try again differently.
        if (get("bot-field")) {
          return json({ ok: true }, 200);
        }

        // GDPR consent is a hard gate, not a nicety. Without it we have no
        // lawful basis to store the child's details at all.
        if (data["gdpr-consent"] !== true) {
          return json({ error: "Please agree to us storing your details so we can reply." }, 400);
        }

        const missing = REQUIRED.filter((key) => !get(key));
        if (missing.length > 0) {
          return json({ error: "Please fill in every required field." }, 400);
        }

        const email = get("email");
        // Deliberately loose. Strict email regexes reject valid addresses far
        // more often than they catch typos, and a bounced reply is recoverable
        // whereas a rejected enquiry is a lost customer.
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          return json({ error: "That email address does not look right." }, 400);
        }

        const oversized = FIELDS.some(([key]) => get(key).length > MAX_FIELD_LENGTH);
        if (oversized) {
          return json({ error: "One of those answers is too long." }, 400);
        }

        const lines = FIELDS.map(([key, label]) => `${label}: ${get(key) || "—"}`);
        const text = [
          "New indoor programme interest registration.",
          "",
          ...lines,
          "",
          "GDPR consent: given",
          "Source: masterclasscricket.co.uk — Masterclass Indoor Cricket Programme",
        ].join("\n");

        try {
          await sendEnquiryEmail({
            subject: `Indoor programme interest — ${get("player-name")}`,
            text,
            // Reply goes to the parent, not back to the site.
            replyTo: email,
          });
        } catch (error) {
          // Logged so a misconfigured key shows up in Worker logs rather than
          // vanishing. The visitor gets the WhatsApp fallback, not a dead end.
          console.error("Indoor interest email failed:", error);
          return json(
            {
              error:
                "We could not send that just now. Please message us on WhatsApp and we will register your interest.",
            },
            502,
          );
        }

        return json({ ok: true }, 200);
      },
    },
  },
});
