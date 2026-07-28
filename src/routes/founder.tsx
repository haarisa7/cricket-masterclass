import { createFileRoute, Link } from "@tanstack/react-router";

import uziImage from "@/assets/coach-uzi.jpg";
import { PageShell } from "@/components/sections/page-shell";
import { ActionAnchor } from "@/components/ui/action";
import { FieldDecor } from "@/components/ui/field-decor";
import { Reveal, RevealHeading, RevealImage } from "@/components/ui/reveal";
import { founder } from "@/data/pages";
import { whatsappFor } from "@/data/site";

const title = "Uzi Arif — Founder & Head Coach | Masterclass Cricket";
const description =
  "Uzi Arif, 'The Rocketman' — a decade of county cricket, 92.4mph, and the coaching method behind Masterclass Cricket in Chiswick, West London.";

export const Route = createFileRoute("/founder")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Founder,
});

function Founder() {
  return (
    <PageShell>
      {/* ---- masthead ---- */}
      <section className="relative overflow-hidden border-b border-line">
        <FieldDecor preset="quiet" />

        <div className="shell relative z-10 pb-24 pt-40 md:pt-48">
          <p className="text-label text-bone-400">
            <span className="text-red-400">01</span> / {founder.role}
          </p>

          <RevealHeading
            as="h1"
            className="text-display-xl mt-8 text-bone-100"
            lines={[
              founder.name,
              <span key="nick" className="text-red-500">
                &ldquo;{founder.nickname}&rdquo;
              </span>,
            ]}
          />

          <p className="text-body-lg mt-8 text-bone-400">{founder.intro}</p>
        </div>
      </section>

      {/* ---- portrait + career facts ---- */}
      <section
        aria-labelledby="career-heading"
        className="grid items-stretch border-b border-line lg:grid-cols-2"
      >
        <RevealImage
          src={uziImage}
          alt="Uzi Arif, founder and head coach of Masterclass Cricket"
          width={1200}
          height={1500}
          className="min-h-[60svh] lg:min-h-[80svh]"
        />

        <div className="flex flex-col justify-center gap-8 px-[var(--gutter)] py-24 lg:py-32">
          <h2 id="career-heading" className="text-label text-red-400">
            02 / The Career
          </h2>

          <blockquote className="font-display text-[clamp(1.5rem,2.6vw,2.25rem)] font-bold leading-[1.15] text-bone-100">
            &ldquo;{founder.quote}&rdquo;
          </blockquote>

          <dl className="border-t border-line">
            {founder.facts.map((fact) => (
              <div
                key={fact.label}
                className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 border-b border-line py-4"
              >
                <dt className="text-label text-bone-400">{fact.label}</dt>
                <dd className="text-label text-right text-bone-100 tnum">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---- in his words ---- */}
      <section aria-labelledby="story-heading" className="section-y">
        <div className="shell">
          <h2 id="story-heading" className="text-label text-bone-400">
            <span className="text-red-400">03</span> / In His Words
          </h2>

          <div className="mt-12 grid gap-10 border-t border-line pt-12 md:grid-cols-3">
            {founder.story.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p className="text-body-lg text-bone-400">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- mission & vision ---- */}
      <section
        aria-labelledby="mission-heading"
        className="relative overflow-hidden border-y border-line"
      >
        <FieldDecor preset="field" />

        <div className="shell section-y relative z-10">
          <h2 id="mission-heading" className="text-label text-bone-400">
            <span className="text-red-400">04</span> / Mission &amp; Vision
          </h2>

          <div className="mt-12 grid gap-px border border-line bg-line md:grid-cols-2">
            <div className="bg-ink-950 p-8 md:p-12">
              <p className="text-label text-red-400">Mission</p>
              <p className="mt-6 font-display text-[clamp(1.375rem,2.2vw,1.875rem)] font-bold leading-[1.2] text-bone-100">
                {founder.mission}
              </p>
            </div>
            <div className="bg-ink-950 p-8 md:p-12">
              <p className="text-label text-red-400">Vision</p>
              <p className="mt-6 font-display text-[clamp(1.375rem,2.2vw,1.875rem)] font-bold leading-[1.2] text-bone-100">
                {founder.vision}
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-8">
            <ActionAnchor href={whatsappFor("coaching with Uzi")} target="_blank" rel="noreferrer">
              Book with Uzi
            </ActionAnchor>
            <Link to="/coaches" className="link-wipe text-sm">
              Meet the coaching team <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
