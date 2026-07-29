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
          <p className="text-label text-bone-400">{founder.role}</p>

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
          width={768}
          height={1180}
          className="min-h-[60svh] lg:min-h-[80svh]"
          imgClassName="object-top"
        />

        <div className="flex flex-col justify-center gap-8 px-[var(--gutter)] py-24 lg:py-32">
          <h2 id="career-heading" className="text-label text-red-400">
            01 / Career Highlights
          </h2>

          <blockquote className="font-display text-[clamp(1.5rem,2.6vw,2.25rem)] font-bold leading-[1.15] text-bone-100">
            &ldquo;{founder.quote}&rdquo;
          </blockquote>

          {/* UZI-02: eight highlights as a single-column list. The old
              four-cell label/value grid could not carry items like "Assistant
              Bowling and Fielding Coach in the Bangladesh Premier League" —
              there is no label/value split in the client's list. */}
          <ul className="border-t border-line">
            {founder.highlights.map((item) => (
              <li
                key={item}
                className="text-body flex items-baseline gap-4 border-b border-line py-4 text-bone-100"
              >
                <span aria-hidden="true" className="shrink-0 text-red-400">
                  —
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---- UZI-01: the full biography ---- */}
      <section aria-labelledby="story-heading" className="section-y">
        <div className="shell">
          {/* Renamed from "In His Words". The previous copy was first-person
              ("I played over 200 county games"); the client's approved bio is
              third-person ("Uzi Arif is a former county cricketer"), so the old
              heading now described the wrong thing. */}
          <h2 id="story-heading" className="text-label text-bone-400">
            <span className="text-red-400">02</span> / Background
          </h2>

          {/* Heading left, prose right — NOT a 3-column grid of paragraphs.
              The old layout held three paragraphs; six paragraphs of varying
              length across three columns left ragged gaps, and any multi-column
              grid breaks continuous reading order (row-major flow means a
              reader jumps 1,2 then 3,4 rather than following the biography
              straight down). One measured column keeps the reading order
              unambiguous, and pairing it with the heading fills the width
              without stretching the line length. */}
          <div className="mt-12 grid gap-8 border-t border-line pt-12 lg:grid-cols-[minmax(0,auto)_minmax(0,1fr)] lg:gap-16">
            <p className="text-display-md max-w-[12ch] text-bone-100">
              Ten years in the professional game.
            </p>

            <div className="flex max-w-[68ch] flex-col gap-6">
              {founder.story.map((paragraph, i) => (
                <Reveal key={paragraph} delay={i * 0.04}>
                  <p className="text-body text-bone-400">{paragraph}</p>
                </Reveal>
              ))}
            </div>
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
            <span className="text-red-400">03</span> / Mission &amp; Vision
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
