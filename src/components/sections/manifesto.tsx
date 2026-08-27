import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import portrait from "@/assets/coach-uzi.jpg";
import { Reveal, RevealHeading, RevealImage } from "@/components/ui/reveal";
import { philosophy } from "@/data/content";
import { sectionNumber } from "@/data/sections";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

/**
 * PHIL-01 — the coaching philosophy.
 *
 * The client's copy is two prose paragraphs with no pull-quote, but this
 * section is built around a display-size statement and loses its anchor
 * without one. The opening clause of the client's own first sentence is pulled
 * up as the heading and the argument runs beneath it as body copy, so nothing
 * is invented and nothing is dropped.
 */
export function Manifesto() {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  // Restrained portrait parallax plus a red technical rule that completes as
  // the statement passes through — the biomechanical annotation, not decoration.
  const portraitY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);
  const ruleScale = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);

  return (
    <section ref={ref} id="approach" aria-labelledby="approach-heading" className="section-y">
      {/* items-start so the portrait and the quote share row 2 and both hang
          from the same top edge. DOM order is quote-then-portrait, which is the
          right reading order stacked on mobile; the explicit column/row
          placement flips the portrait to the left from lg up. */}
      <div className="shell grid-12 items-start gap-y-12">
        <p className="text-label col-span-12 text-bone-400">
          <span className="text-red-400">{sectionNumber("approach")}</span> / {philosophy.label}
        </p>

        <div className="col-span-12 lg:col-span-7 lg:col-start-6 lg:row-start-2">
          <RevealHeading
            as="h2"
            id="approach-heading"
            className="text-display-lg text-bone-100"
            lines={[
              philosophy.headline[0],
              philosophy.headline[1],
              <span key="emphasis" className="text-red-500">
                {philosophy.headline[2]}
              </span>,
            ]}
          />

          <div className="mt-8 flex items-center gap-4">
            <motion.span
              aria-hidden="true"
              className="h-px w-24 origin-left bg-red-500"
              style={reduced ? { transform: "scaleX(1)" } : { scaleX: ruleScale }}
            />
            <Reveal delay={0.1}>
              <p className="text-label text-bone-500">— {philosophy.attribution}</p>
            </Reveal>
          </div>

          {/* Single column, not two: the second paragraph is nearly three times
              the length of the first, so side by side one column ended level
              with the fold and the other ran well past it. */}
          <div className="mt-16 flex max-w-[62ch] flex-col gap-6">
            {philosophy.columns.map((column, i) => (
              <Reveal key={column} delay={0.05 * i}>
                <p className="text-body text-bone-400">{column}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <Link to={philosophy.link.href} className="link-wipe mt-10 text-sm">
              {philosophy.link.label} <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>

        {/* 2/3 on lg is the portrait's native 768x1180 ratio, so it fills more
            of the column beside the quote and crops essentially nothing. */}
        <motion.div
          className="col-span-12 sm:col-span-8 lg:col-span-4 lg:col-start-1 lg:row-start-2"
          style={reduced ? undefined : { y: portraitY }}
        >
          <RevealImage
            src={portrait}
            alt="Head coach Uzi Arif in Masterclass Cricket coaching jacket"
            width={768}
            height={1180}
            className="aspect-[4/5] lg:aspect-[2/3]"
            imgClassName="object-top"
          />
        </motion.div>
      </div>
    </section>
  );
}
