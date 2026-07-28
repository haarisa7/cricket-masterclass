import { createFileRoute } from "@tanstack/react-router";

import { PageHero, PageShell } from "@/components/sections/page-shell";
import { ActionAnchor } from "@/components/ui/action";
import { FieldDecor } from "@/components/ui/field-decor";
import { Reveal, RevealImage } from "@/components/ui/reveal";
import { coaches } from "@/data/pages";
import { whatsappFor } from "@/data/site";

const title = "Meet the Coaches — Masterclass Cricket";
const description =
  "The coaching team at Masterclass Cricket: Uzi Arif, Anirudh Reddy, Ollie Sheen and Patrick Littlemore. Chiswick, West London.";

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
        index="01"
        label="Coaches"
        lines={["The people", "on the grass"]}
        intro="Professional playing experience, ECB qualifications and a decade of working together. Every coach here is DBS-checked and safeguarding trained."
      />

      <section aria-labelledby="team-heading" className="section-y">
        <div className="shell">
          <h2 id="team-heading" className="text-label text-bone-400">
            <span className="text-red-400">02</span> / The Team
          </h2>

          <ul className="mt-12 grid gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
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
                    <p className="text-body mt-4 text-bone-400">{coach.bio}</p>
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
          <h2 id="coaches-cta-heading" className="text-display-lg max-w-[16ch] text-bone-100">
            Train with the people who have done it.
          </h2>
          <p className="text-body-lg text-bone-400">
            Tell us the player&rsquo;s age, club and discipline. We&rsquo;ll tell you honestly which
            coach and which programme fits.
          </p>
          <ActionAnchor
            href={whatsappFor("which coach and programme would suit my player")}
            target="_blank"
            rel="noreferrer"
          >
            Message a Coach
          </ActionAnchor>
        </div>
      </section>
    </PageShell>
  );
}
