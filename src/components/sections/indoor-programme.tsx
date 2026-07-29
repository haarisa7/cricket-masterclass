import { useState, type FormEvent } from "react";

import { ActionAnchor, ActionButton } from "@/components/ui/action";
import { Reveal, RevealHeading } from "@/components/ui/reveal";
import { sectionNumber } from "@/data/sections";
import { whatsappFor } from "@/data/site";

/**
 * IND-01 / IND-02 / IND-03 — the autumn/winter indoor programme.
 *
 * THE FIRST FORM ON THE SITE. It posts JSON to /api/indoor-interest, which
 * validates it and emails the club inbox through Resend. See
 * src/routes/api/indoor-interest.ts and src/lib/email.ts.
 *
 * ────────────────────────────────────────────────────────────────────────────
 * TWO THINGS STILL OUTSTANDING BEFORE THIS CAN TAKE A REAL SUBMISSION.
 * ────────────────────────────────────────────────────────────────────────────
 *
 * 1. RESEND CREDENTIALS. RESEND_API_KEY must be set as a Worker secret and the
 *    sending domain verified in Resend, or every submission returns the
 *    WhatsApp fallback error. Setup steps are in src/lib/email.ts.
 *
 * 2. THE PRIVACY POLICY. The consent checkbox below references one, and the
 *    site does not have one — only a safeguarding policy. Collecting a child's
 *    name, age, school and a parent's contact details without a privacy notice
 *    is a GDPR gap. The policy has to exist and be linked before this form
 *    accepts a single real submission.
 *
 * IND-03: interest registration only. No dates, no prices, no checkout, and
 * the button says "Register Your Interest" rather than "Book".
 */

interface Field {
  name: string;
  label: string;
  type?: string;
  autoComplete?: string;
  options?: string[];
  required?: boolean;
}

/**
 * Ten fields, grouped into three fieldsets. As one flat list this ran to about
 * two and a half screens on a phone with the submit button stranded at the
 * bottom; grouped, a parent can see where they are in it.
 */
const GROUPS: { legend: string; fields: Field[] }[] = [
  {
    legend: "About the player",
    fields: [
      { name: "player-name", label: "Player's name", required: true },
      { name: "player-age", label: "Player's age", type: "number", required: true },
      { name: "player-club", label: "Current school or cricket club" },
      {
        name: "player-level",
        label: "Current playing level",
        options: ["Beginner", "Club cricket", "District", "County age group", "Representative"],
      },
      {
        name: "player-discipline",
        label: "Batting, bowling or all-rounder",
        options: ["Batting", "Bowling", "All-rounder", "Not sure yet"],
      },
    ],
  },
  {
    legend: "Session preference",
    fields: [
      {
        name: "day-preference",
        label: "Saturday or Sunday",
        options: ["Saturday", "Sunday", "Either"],
      },
      {
        name: "time-preference",
        label: "Preferred time",
        options: ["Early evening", "Later evening", "No preference"],
      },
    ],
  },
  {
    legend: "Your details",
    fields: [
      {
        name: "parent-name",
        label: "Parent or guardian's name",
        autoComplete: "name",
        required: true,
      },
      { name: "contact-number", label: "Contact number", type: "tel", autoComplete: "tel" },
      {
        name: "email",
        label: "Email address",
        type: "email",
        autoComplete: "email",
        required: true,
      },
    ],
  },
];

const inputClass =
  "mt-2 w-full border border-line-str bg-ink-900 px-4 py-3 text-base text-bone-100 outline-none transition-colors duration-200 ease-brand placeholder:text-bone-600 focus:border-red-500";

function FieldControl({ field }: { field: Field }) {
  const id = `indoor-${field.name}`;

  return (
    <div>
      <label htmlFor={id} className="text-label text-bone-400">
        {field.label}
        {field.required && <span className="ml-1 text-red-400">*</span>}
      </label>

      {field.options ? (
        <select id={id} name={field.name} required={field.required} className={inputClass}>
          <option value="">Please choose</option>
          {field.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          name={field.name}
          type={field.type ?? "text"}
          autoComplete={field.autoComplete}
          required={field.required}
          // Ages 6-14 per the section copy. Stops "0" and obvious typos
          // without rejecting a genuine enquiry outside the range.
          min={field.type === "number" ? 4 : undefined}
          max={field.type === "number" ? 18 : undefined}
          className={inputClass}
        />
      )}
    </div>
  );
}

type SubmitState = "idle" | "sending" | "sent";

export function IndoorProgramme() {
  const [state, setState] = useState<SubmitState>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "sending") return;

    const form = event.currentTarget;
    const data = new FormData(form);

    // Sent as JSON rather than form-encoded so the checkbox arrives as a real
    // boolean — an unchecked box is absent from FormData entirely, which is
    // easy to misread server-side as "consent given".
    const payload: Record<string, string | boolean> = {
      "gdpr-consent": data.get("gdpr-consent") === "on",
    };
    for (const [key, value] of data.entries()) {
      if (key !== "gdpr-consent" && typeof value === "string") payload[key] = value;
    }

    setState("sending");
    setError(null);

    try {
      const response = await fetch("/api/indoor-interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const body = (await response.json().catch(() => ({}))) as { error?: string };
        setError(
          body.error ?? "Something went wrong. Please try again, or message us on WhatsApp.",
        );
        setState("idle");
        return;
      }

      setState("sent");
    } catch {
      // Network failure rather than a rejection — offer the route that does not
      // depend on our server being reachable.
      setError("We could not reach the server. Please check your connection or use WhatsApp.");
      setState("idle");
    }
  }

  return (
    <section
      id="indoor-programme"
      aria-labelledby="indoor-heading"
      className="section-y border-t border-line bg-ink-900"
    >
      <div className="shell grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
        <div>
          <p className="text-label text-bone-400">
            <span className="text-red-400">{sectionNumber("indoor")}</span> / Indoor Programme
          </p>

          <RevealHeading
            as="h2"
            id="indoor-heading"
            className="text-display-lg mt-6 max-w-[16ch] text-bone-100"
            lines={["Masterclass Indoor", "Cricket Programme"]}
          />

          {/* Three separate items, not one pipe-separated string. As
              "St Paul's School | Saturdays and Sundays | October–April" it
              broke mid-phrase on a 375px screen. */}
          <ul className="text-label mt-6 flex flex-col gap-2 text-red-400 sm:flex-row sm:flex-wrap sm:gap-x-6">
            <li>St Paul&rsquo;s School</li>
            <li>Saturdays and Sundays</li>
            <li>October–April</li>
          </ul>

          <div className="mt-8 flex max-w-[62ch] flex-col gap-4">
            <p className="text-body text-bone-400">
              Register your interest in the Masterclass autumn and winter indoor cricket programme
              at St Paul&rsquo;s School.
            </p>
            <p className="text-body text-bone-400">
              Our structured indoor programme is designed for players aged 6–14 and will run during
              selected Saturday and Sunday evening time slots.
            </p>
            <p className="text-body text-bone-400">
              Players will follow a progressive coaching curriculum covering batting, pace bowling,
              spin bowling, fielding, game awareness and performance under pressure.
            </p>
          </div>

          {/* IND-03 — stated plainly rather than buried in small print. */}
          <p className="text-body mt-8 border-l-2 border-red-500 pl-6 text-bone-100">
            This is an interest registration, not a booking. Dates, times and prices are still being
            finalised and we will contact you as soon as they are confirmed.
          </p>
        </div>

        <Reveal>
          {state === "sent" ? (
            /* Success replaces the form rather than sitting above it. Leaving a
               filled-in form on screen invites a second identical submission,
               which is the commonest duplicate-enquiry cause. */
            <div
              role="status"
              className="flex flex-col gap-4 border border-red-500 bg-ink-950 p-6 md:p-8"
            >
              <p className="text-label text-red-400">Interest registered</p>
              <h3 className="text-display-md text-bone-100">Thank you — we have your details.</h3>
              <p className="text-body text-bone-400">
                We will be in touch as soon as the indoor programme dates, times and prices are
                confirmed. If you would like to ask something in the meantime, message us on
                WhatsApp.
              </p>
              <div className="mt-2">
                <ActionAnchor
                  href={whatsappFor("the indoor programme at St Paul's School")}
                  target="_blank"
                  rel="noreferrer"
                  variant="secondary"
                >
                  Message on WhatsApp
                </ActionAnchor>
              </div>
            </div>
          ) : (
            <form
              name="indoor-interest"
              onSubmit={handleSubmit}
              noValidate={false}
              className="flex flex-col gap-8 border border-line bg-ink-950 p-6 md:p-8"
            >
              {/* Honeypot: hidden from people, filled in by bots. Not
                  display:none — some bots skip hidden fields — but pushed out of
                  the viewport and out of the tab order. */}
              <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
                <label>
                  Leave this field empty
                  <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>
              </div>

              {GROUPS.map((group) => (
                <fieldset key={group.legend} className="flex flex-col gap-5">
                  <legend className="text-label mb-1 text-red-400">{group.legend}</legend>
                  {group.fields.map((field) => (
                    <FieldControl key={field.name} field={field} />
                  ))}
                </fieldset>
              ))}

              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="gdpr-consent"
                  required
                  className="mt-1 size-5 shrink-0 accent-red-600"
                />
                <span className="text-sm text-bone-400">
                  I agree to Masterclass Cricket storing these details in order to contact me about
                  the indoor programme. We will not share them with anyone else.
                </span>
              </label>

              {error && (
                /* aria-live so a screen reader announces the failure — the
                   button label changing back is not enough on its own. */
                <p role="alert" className="text-body border-l-2 border-red-500 pl-4 text-bone-100">
                  {error}
                </p>
              )}

              {/* Full width on mobile: a centred auto-width button at the end of
                  a ten-field form is a small target to find. */}
              <ActionButton
                type="submit"
                block
                disabled={state === "sending"}
                className="sm:w-auto"
              >
                {state === "sending" ? "Sending…" : "Register Your Interest"}
              </ActionButton>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
