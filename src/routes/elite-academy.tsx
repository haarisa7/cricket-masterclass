import { createFileRoute } from "@tanstack/react-router";

import eliteImage from "@/assets/elite-academy.jpg";
import { PageShell } from "@/components/sections/page-shell";
import { ActionAnchor } from "@/components/ui/action";
import { FieldDecor } from "@/components/ui/field-decor";
import { Reveal, RevealHeading, RevealImage } from "@/components/ui/reveal";
import { elite } from "@/data/pages";
import { whatsappFor } from "@/data/site";

const title = "Masterclass Elite Cricket Academy — 2026 Intake";
const description =
  "The pathway squad for players chasing county, regional or professional selection. Assessed entry, year-round training and match exposure. Chiswick, West London.";

export const Route = createFileRoute("/elite-academy")({
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
  component: EliteAcademyPage,
});

function EliteAcademyPage() {
  return (
    <PageShell>
      {/* ---- masthead ---- */}
      <section className="relative overflow-hidden border-b border-line">
        <FieldDecor preset="quiet" />

        <div className="shell relative z-10 pb-24 pt-40 md:pt-48">
          <p className="text-label text-bone-400">
            <span className="text-red-400">01</span> / 2026 Intake
          </p>

          <RevealHeading
            as="h1"
            className="text-display-xl mt-8 text-bone-100"
            lines={[
              "MASTERCLASS ELITE",
              <>
                CRICKET <span className="text-red-500">ACADEMY</span>
              </>,
            ]}
          />

          <p className="text-body-lg mt-8 text-bone-400">{elite.intro}</p>

          {/* The one filled action on this page. */}
          <div className="mt-10">
            <ActionAnchor
              href={whatsappFor("an Elite Academy assessment for the 2026 intake")}
              target="_blank"
              rel="noreferrer"
            >
              Apply for a Trial
            </ActionAnchor>
          </div>
        </div>
      </section>

      {/* ---- positioning image ---- */}
      <section
        aria-labelledby="about-academy-heading"
        className="grid items-stretch border-b border-line lg:grid-cols-2"
      >
        <RevealImage
          src={eliteImage}
          alt="Academy players training under floodlights on a cricket ground at night"
          width={1600}
          height={1200}
          className="min-h-[50svh] lg:min-h-[75svh]"
        />

        <div className="flex flex-col justify-center gap-8 px-[var(--gutter)] py-24 lg:py-32">
          <p className="text-label text-red-400">02 / About the Academy</p>

          <RevealHeading
            as="h2"
            id="about-academy-heading"
            className="text-display-lg max-w-[14ch] text-bone-100"
            lines={["Professional", "intensity, weekly"]}
          />

          <p className="text-body-lg text-bone-400">{elite.positioning}</p>

          <dl className="border-t border-line">
            {elite.expect.map((point) => (
              <div
                key={point.label}
                className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 border-b border-line py-4"
              >
                <dt className="text-label text-bone-100">{point.label}</dt>
                <dd className="text-label text-right text-bone-400">{point.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---- what you can expect ---- */}
      <section aria-labelledby="expect-heading" className="section-y">
        <div className="shell">
          <h2 id="expect-heading" className="text-label text-bone-400">
            <span className="text-red-400">03</span> / What You Can Expect From Us
          </h2>

          <div className="mt-12 border-t border-line">
            {elite.pillars.map((pillar) => (
              <Reveal key={pillar.index}>
                <article className="grid items-start gap-6 border-b border-line py-10 md:grid-cols-[4rem_minmax(0,1fr)_minmax(0,1.15fr)] md:gap-10 md:py-14">
                  <p className="text-label text-red-400 tnum">{pillar.index}</p>
                  <h3 className="text-display-md text-bone-100">{pillar.name}</h3>
                  <p className="text-body text-bone-400">{pillar.detail}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- FAQs ---- */}
      <section
        aria-labelledby="faq-heading"
        className="relative overflow-hidden border-y border-line"
      >
        <FieldDecor preset="field" />

        <div className="shell section-y relative z-10">
          <h2 id="faq-heading" className="text-label text-bone-400">
            <span className="text-red-400">04</span> / Before You Apply
          </h2>

          <div className="mt-12 border-t border-line">
            {elite.faqs.map((faq) => (
              <details key={faq.q} className="group border-b border-line">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-bone-100 [&::-webkit-details-marker]:hidden">
                  <span className="font-display text-[clamp(1.125rem,1.9vw,1.5rem)] font-bold leading-tight">
                    {faq.q}
                  </span>
                  <span
                    aria-hidden="true"
                    className="relative block size-4 shrink-0 text-red-400 transition-transform duration-300 ease-brand group-open:rotate-45"
                  >
                    <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current" />
                    <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current" />
                  </span>
                </summary>
                <p className="text-body pb-8 text-bone-400">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
