import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import { Reveal, RevealHeading } from "@/components/ui/reveal";
import { journey } from "@/data/pages";
import { journeyStops, type JourneyStatus } from "@/data/journey";
import { sectionNumber } from "@/data/sections";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

const statusStyle: Record<JourneyStatus, string> = {
  Current: "border-red-500 text-red-400",
  Partner: "border-line-str text-bone-400",
  History: "border-line text-bone-600",
};

/**
 * JRN-01 to JRN-03 and VEN-01 — the journey, as a schematic route rather than
 * four paragraphs of continuous prose.
 *
 * The route is deliberately SCHEMATIC, not geographic: we have no accurate
 * coordinates for these grounds, and a wrong map is worse than no map. A red
 * rail draws down the stops as the visitor scrolls, and every stop is tagged
 * Current / Partner / History so nobody can mistake a specialist-coaching club
 * for a venue where our regular sessions run.
 *
 * The client's original four paragraphs are retained verbatim underneath as the
 * accessible text summary — nothing that was approved has been removed.
 */
export function Journey() {
  const reduced = usePrefersReducedMotion();
  const railRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start 80%", "end 60%"],
  });
  const railScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      className="section-y border-t border-line"
    >
      <div className="shell">
        <p className="text-label text-bone-600">
          <span className="text-red-400">{sectionNumber("journey")}</span> / Our Journey and
          Locations
        </p>

        <RevealHeading
          as="h2"
          id="journey-heading"
          className="text-display-lg mt-6 max-w-[18ch] text-bone-100"
          lines={["Over a Decade of Coaching", "Across West London"]}
        />

        {/* JRN-03 — the three-beat summary of the route below. */}
        <ul className="mt-10 flex flex-col gap-3 border-y border-line py-6 md:flex-row md:flex-wrap md:items-center md:gap-x-8">
          {journey.highlight.map((item) => (
            <li key={item} className="text-body-lg text-bone-100">
              {item}
            </li>
          ))}
        </ul>

        {/* ---- the schematic route ---- */}
        <div ref={railRef} className="relative mt-16">
          {/* rail */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[7px] top-2 w-px bg-line md:left-[calc(9rem+7px)]"
          >
            <motion.div
              className="h-full w-px origin-top bg-red-500"
              style={reduced ? { transform: "scaleY(1)" } : { scaleY: railScale }}
            />
          </div>

          <ol className="flex flex-col">
            {journeyStops.map((stop, i) => (
              <li key={stop.name} className="relative pb-12 last:pb-0">
                <div className="grid gap-x-8 gap-y-2 md:grid-cols-[9rem_minmax(0,1fr)]">
                  <p className="text-label order-2 pl-8 text-bone-600 md:order-none md:pl-0 md:pr-8 md:text-right">
                    {stop.period}
                  </p>

                  <Reveal delay={i * 0.04} className="order-1 md:order-none">
                    <div className="relative pl-8">
                      {/* node */}
                      <span
                        aria-hidden="true"
                        className={cn(
                          "absolute left-0 top-[7px] size-[15px] rounded-full border-2 bg-ink-950",
                          stop.status === "Current" ? "border-red-500" : "border-line-str",
                        )}
                      >
                        {stop.status === "Current" && (
                          <span className="absolute inset-[3px] rounded-full bg-red-500" />
                        )}
                      </span>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                        <h3 className="text-display-md text-bone-100">{stop.name}</h3>
                        <span
                          className={cn("text-label border px-2 py-1", statusStyle[stop.status])}
                        >
                          {stop.status}
                        </span>
                      </div>

                      <p className="text-label mt-3 text-bone-500">{stop.relationship}</p>
                      <p className="text-body mt-3 max-w-[52ch] text-bone-400">{stop.detail}</p>
                    </div>
                  </Reveal>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Accessible text summary — the client's approved copy, unchanged. */}
        <div className="mt-16 border-t border-line pt-10">
          <h3 className="text-label text-bone-600">The full story</h3>
          <div className="mt-6 grid gap-x-16 gap-y-6 lg:grid-cols-2">
            {journey.body.map((paragraph) => (
              <p key={paragraph} className="text-body max-w-[62ch] text-bone-500">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
