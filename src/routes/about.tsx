import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHero, PageShell } from "@/components/sections/page-shell";
import { ActionAnchor } from "@/components/ui/action";
import { FieldDecor } from "@/components/ui/field-decor";
import { Reveal, RevealHeading, RevealImage } from "@/components/ui/reveal";
import eliteImage from "@/assets/elite-academy.jpg";
import { about } from "@/data/pages";
import { stats } from "@/data/content";
import { whatsappFor } from "@/data/site";

const title = "About — Ten years of coaching in Chiswick | Masterclass Cricket";
const description =
  "Masterclass Cricket combines advanced biomechanics with professional playing experience to develop elite cricketers in Chiswick, West London.";

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
      <PageHero
        index="01"
        label="About"
        lines={["Ten years of", "coaching in Chiswick"]}
        intro={about.intro}
      />

      {/* ---- what we specialise in ---- */}
      <section aria-labelledby="specialise-heading" className="section-y">
        <div className="shell">
          <h2 id="specialise-heading" className="text-label text-bone-400">
            <span className="text-red-400">02</span> / What We Specialise In
          </h2>

          <div className="mt-12 border-t border-line">
            {about.pillars.map((pillar) => (
              <Reveal key={pillar.index}>
                <article className="grid items-start gap-6 border-b border-line py-10 md:grid-cols-[6rem_minmax(0,22ch)_minmax(0,1fr)] md:gap-10 md:py-14">
                  <p className="text-label text-red-400 tnum">{pillar.index}</p>
                  <h3 className="text-display-md text-bone-100">{pillar.name}</h3>
                  <p className="text-body text-bone-400">{pillar.detail}</p>
                </article>
              </Reveal>
            ))}
          </div>
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
            <span className="text-red-400">03</span> / The Record
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
          <p className="text-label text-red-400">04 / The System</p>

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
