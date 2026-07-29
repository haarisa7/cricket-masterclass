import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHero, PageShell } from "@/components/sections/page-shell";
import { ActionAnchor } from "@/components/ui/action";
import { FieldDecor } from "@/components/ui/field-decor";
import { Reveal, RevealHeading, RevealImage } from "@/components/ui/reveal";
import eliteImage from "@/assets/elite-academy.jpg";
import { about } from "@/data/pages";
import { stats } from "@/data/content";
import { site, whatsappFor } from "@/data/site";

// ABT-01 / FOOT-01: the five-area wording, in the title and the description.
const title = "About — Over 10 Years of Cricket Coaching | Masterclass Cricket";
const description = site.positioningShort;

export const Route = createFileRoute("/about")({
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
  component: About,
});

function About() {
  return (
    <PageShell>
      {/* ABT-01. The client's heading is 76 characters and at display-xl runs
          to four lines on a phone. The short form leads and the county list
          sits beneath it as a sub-line — same words, readable at 375px. */}
      <PageHero label="About" lines={[...about.headingLines]} intro={about.intro}>
        <p className="text-body-lg max-w-[46ch] text-bone-400">{about.headingSub}</p>
      </PageHero>

      {/* ---- ABT-02: coaching philosophy ---- */}
      <section aria-labelledby="philosophy-heading" className="section-y">
        <div className="shell">
          <h2 id="philosophy-heading" className="text-label text-bone-400">
            <span className="text-red-400">01</span> / Our Coaching Philosophy
          </h2>

          <div className="mt-12 grid gap-12 border-t border-line pt-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-16">
            <div className="flex max-w-[62ch] flex-col gap-6">
              {about.philosophy.map((paragraph) => (
                <Reveal key={paragraph}>
                  <p className="text-body text-bone-400">{paragraph}</p>
                </Reveal>
              ))}
            </div>

            {/* ABT-03 — highlight block, sitting alongside the philosophy from
                lg up and beneath it on smaller screens. */}
            <div>
              <h3 className="text-label text-red-400">Why Families Choose Masterclass Cricket</h3>
              <ul className="mt-6 border-t border-line">
                {about.whyFamiliesChoose.map((item) => (
                  <li key={item} className="text-body border-b border-line py-4 text-bone-100">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ABT-04 — credibility through player development. */}
          <Reveal>
            <p className="text-body-lg mt-16 max-w-[72ch] border-l-2 border-red-500 pl-6 text-bone-100">
              {about.credibility}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---- proof ---- */}
      <section
        aria-labelledby="record-heading"
        className="relative overflow-hidden border-y border-line"
      >
        <FieldDecor preset="field" />

        <div className="shell relative z-10 section-y">
          <h2 id="record-heading" className="text-label text-bone-400">
            <span className="text-red-400">02</span> / The Record
          </h2>

          <dl className="mt-12 grid grid-cols-2 border-t border-line lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="border-b border-line py-8 pr-6">
                <dd className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold leading-none text-bone-100 tnum">
                  {stat.display ?? `${stat.value}${stat.suffix}`}
                </dd>
                <dt className="text-label mt-4 text-bone-400">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---- complete development system ---- */}
      <section
        aria-labelledby="system-heading"
        className="grid items-stretch border-b border-line lg:grid-cols-2"
      >
        <RevealImage
          src={eliteImage}
          alt="Coaches and players on a floodlit cricket ground at dusk"
          width={1600}
          height={1200}
          className="min-h-[50svh] lg:min-h-[70svh]"
        />

        <div className="flex flex-col justify-center gap-8 px-[var(--gutter)] py-24 lg:py-32">
          <p className="text-label text-red-400">03 / The System</p>

          <RevealHeading
            as="h2"
            id="system-heading"
            className="text-display-lg max-w-[14ch] text-bone-100"
            lines={["A complete player", "development system"]}
          />

          <p className="text-body-lg text-bone-400">{about.closing}</p>

          <div className="flex flex-wrap items-center gap-8">
            <ActionAnchor
              href={whatsappFor("coaching at Masterclass Cricket")}
              target="_blank"
              rel="noreferrer"
            >
              Talk to a Coach
            </ActionAnchor>
            <Link to="/founder" className="link-wipe text-sm">
              Meet the founder <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
