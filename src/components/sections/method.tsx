import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import { methodSteps } from "@/data/content";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

/**
 * Desktop: the section pins and the four steps travel horizontally with scroll.
 * Mobile and reduced-motion: a plain vertical stack, fully readable.
 */
export function Method() {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  const steps = (
    <>
      {methodSteps.map((step) => (
        <div
          key={step.index}
          className="flex w-[80vw] shrink-0 flex-col justify-between border-l border-line px-8 py-10 md:w-[46vw] lg:w-[38vw]"
        >
          <span className="font-display text-[clamp(4rem,9vw,9rem)] leading-none text-red-500 tnum">
            {step.index}
          </span>
          <div className="mt-16">
            <h3 className="text-display-md text-bone-100">{step.name}</h3>
            <p className="text-body mt-4 text-bone-400">{step.detail}</p>
          </div>
        </div>
      ))}
    </>
  );

  return (
    <section
      id="method"
      aria-labelledby="method-heading"
      className="border-t border-line bg-ink-900"
    >
      {/* pt-16, not pt-24: this section already separates itself with a top
          border and a lighter background, so it needs less breathing room
          above the heading than an unbordered section would. */}
      <div className="shell pt-16">
        <h2 id="method-heading" className="text-label text-bone-400">
          <span className="text-red-400">03</span> / The Method
        </h2>
        <p className="text-body-lg mt-6 text-bone-100">
          Four steps, every 1-2-1 session, every player.
        </p>
      </div>

      {reduced ? (
        <div className="shell flex flex-col gap-0 py-16 md:flex-row md:overflow-x-auto">
          {steps}
        </div>
      ) : (
        <>
          <div className="page-x flex overflow-x-auto pb-16 pt-12 md:hidden">{steps}</div>
          <div ref={ref} className="relative hidden h-[300vh] md:block">
            <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
              <motion.div style={{ x }} className="flex pl-[var(--gutter)]">
                {steps}
              </motion.div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
