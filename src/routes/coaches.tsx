import { createFileRoute } from "@tanstack/react-router";

import { PageHero, PageShell } from "@/components/sections/page-shell";
import { ActionAnchor } from "@/components/ui/action";
import { FieldDecor } from "@/components/ui/field-decor";
import { Reveal, RevealImage } from "@/components/ui/reveal";
import { coaches } from "@/data/pages";
import { whatsappCoachMatch } from "@/data/site";

const title = "Meet the Coaches — Masterclass Cricket";
// TEAM-05: Patrick Littlemore removed from the description as well as the
// page. He was in the search snippet, so this only takes effect on redeploy.
const description =
  "The coaching team at Masterclass Cricket: Uzi Arif, Anirudh Reddy and Oliver Sheen. Coaching across Chiswick, Richmond, West London, Berkshire and Buckinghamshire.";

export const Route = createFileRoute("/coaches")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Coaches,
});

/** Fallback for coaches without a portrait — initials on the ink canvas. */
function InitialsPlate({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <div className="flex size-full items-center justify-center bg-ink-900">
      <span className="font-display text-[clamp(3rem,7vw,5.5rem)] font-black leading-none tracking-[-0.03em] text-bone-600">
        {initials}
      </span>
    </div>
  );
}

function Coaches() {
  return (
    <PageShell>
      <PageHero
        label="Coaches"
        lines={["The people", "on the grass"]}
        intro="Professional playing experience, ECB qualifications and a decade of working together. Every coach here is DBS-checked and safeguarding trained."
      />

      <section aria-labelledby="team-heading" className="section-y">
        <div className="shell">
          <h2 id="team-heading" className="text-label text-bone-400">
            <span className="text-red-400">01</span> / The Team
          </h2>

          {/* TEAM-05: three columns, not four. Removing Patrick left the
              fourth column empty on every desktop viewport. */}
          <ul className="mt-12 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {coaches.map((coach, i) => (
              <li key={coach.name}>
                <Reveal delay={i * 0.05}>
                  <article className="group flex h-full flex-col">
                    <div className="relative aspect-[4/5] overflow-hidden">
                      {coach.image ? (
                        <RevealImage
                          src={coach.image}
                          alt={coach.imageAlt ?? coach.name}
                          width={800}
                          height={1000}
                          className="size-full"
                          imgClassName="object-top transition-transform duration-700 ease-brand group-hover:scale-[1.04]"
                        />
                      ) : (
                        <InitialsPlate name={coach.name} />
                      )}
                      <span className="text-label absolute right-3 top-3 bg-ink-950/80 px-2 py-1 text-bone-400 backdrop-blur-sm">
                        {coach.experience}
                      </span>
                    </div>

                    <h3 className="text-display-md mt-6 text-bone-100">{coach.name}</h3>
                    <p className="text-label mt-3 text-red-400">{coach.role}</p>
                    {coach.qualification && (
                      <p className="text-label mt-2 text-bone-400">{coach.qualification}</p>
                    )}

                    {/* TEAM-03 / TEAM-04 give Ani and Oliver three and four
                        paragraphs where Uzi has one, which in a side-by-side
                        grid made two cards roughly twice the height of the
                        third. Cards show the opening paragraph; the rest sits
                        in a native disclosure so the row stays level until a
                        reader asks for more. */}
                    <p className="text-body mt-4 text-bone-400">{coach.bio[0]}</p>

                    {coach.bio.length > 1 && (
                      <details className="group/bio mt-3">
                        <summary className="text-label cursor-pointer list-none text-bone-100 underline underline-offset-4">
                          <span className="group-open/bio:hidden">Read full profile</span>
                          <span className="hidden group-open/bio:inline">Show less</span>
                        </summary>
                        <div className="mt-3 flex flex-col gap-3">
                          {coach.bio.slice(1).map((paragraph) => (
                            <p key={paragraph} className="text-body text-bone-400">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </details>
                    )}

                    {/* ANI-02 — coaching specialisms. */}
                    {coach.specialisms && (
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {coach.specialisms.map((item) => (
                          <li
                            key={item}
                            className="border border-line px-2.5 py-1 text-xs text-bone-400"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---- single CTA ---- */}
      <section
        aria-labelledby="coaches-cta-heading"
        className="relative overflow-hidden border-y border-line"
      >
        <FieldDecor preset="field" />

        <div className="shell section-y relative z-10 flex flex-col items-start gap-8">
          {/* CTA-01: heading unchanged per the brief. */}
          <h2 id="coaches-cta-heading" className="text-display-lg max-w-[16ch] text-bone-100">
            Train With People Who Have Done It
          </h2>
          <p className="text-body-lg max-w-[62ch] text-bone-400">
            Tell us the player&rsquo;s age, current club, playing level and main discipline, and we
            will give you an honest recommendation on which coach and programme best suits their
            development.
          </p>
          {/* CTA-02: opens WhatsApp with the seven-line enquiry pre-typed. */}
          <ActionAnchor href={whatsappCoachMatch} target="_blank" rel="noreferrer">
            Message a Coach
          </ActionAnchor>
        </div>
      </section>
    </PageShell>
  );
}
