import { motion, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { StageVisual } from "@/components/sections/method-stage";
import { RevealHeading } from "@/components/ui/reveal";
import { methodHeading, methodSteps } from "@/data/content";
import { sectionNumber } from "@/data/sections";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * MTH-01 — the signature scroll sequence.
 *
 * DESKTOP: the section is four viewport heights tall with a sticky 100vh
 * stage. Scroll progress drives one active chapter at a time, a red progress
 * rail down the 01–04 index, and a single visual that is progressively
 * instrumented (see method-stage.tsx) from raw footage through biomechanical
 * analysis and a corrective drill to the session report.
 *
 * MOBILE / REDUCED MOTION: no pin, no scroll hijack. The same four chapters
 * stack, each with its own sticky numeral and its own stage frame, and every
 * word of copy is in the flow and readable immediately. The desktop path is
 * only entered when the viewport is genuinely wide AND the user has not asked
 * for reduced motion, so nothing depends on an animation running.
 */
function useIsPinned() {
  const reduced = usePrefersReducedMotion();
  const [wide, setWide] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px) and (min-height: 640px)");
    const sync = () => setWide(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  return wide && !reduced;
}

function Chapter({ step, active }: { step: (typeof methodSteps)[number]; active: boolean }) {
  return (
    <motion.div
      className="absolute inset-0"
      initial={false}
      animate={{ opacity: active ? 1 : 0, y: active ? 0 : 18 }}
      transition={{ duration: 0.5, ease: EASE }}
      aria-hidden={!active}
    >
      <h3 className="text-display-md text-bone-100">{step.name}</h3>
      <p className="text-body mt-5 max-w-[46ch] text-bone-400">{step.detail}</p>
    </motion.div>
  );
}

function PinnedMethod() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [step, setStep] = useState(0);
  const railScale = useTransform(scrollYProgress, [0, 1], [0.04, 1]);

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const next = Math.min(methodSteps.length - 1, Math.max(0, Math.floor(p * methodSteps.length)));
    setStep((current) => (current === next ? current : next));
  });

  return (
    <div ref={ref} className="relative h-[400vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="shell grid w-full grid-cols-12 items-center gap-x-6">
          <div className="col-span-5 flex flex-col">
            <p className="text-label text-bone-600">
              <span className="text-red-400">{sectionNumber("method")}</span> / The Method
            </p>
            <h2 id="method-heading" className="text-display-md mt-5 max-w-[20ch] text-bone-100">
              {methodHeading}
            </h2>

            {/* progress rail */}
            <div className="mt-10 flex gap-8">
              <div className="relative w-px shrink-0 bg-line">
                <motion.div
                  className="absolute inset-x-0 top-0 h-full origin-top bg-red-500"
                  style={{ scaleY: railScale }}
                />
              </div>

              <ol className="flex flex-col gap-4">
                {methodSteps.map((item, i) => (
                  <li key={item.index}>
                    <span
                      className={cn(
                        "text-label tnum transition-colors duration-300 ease-brand",
                        i === step ? "text-red-400" : "text-bone-600",
                      )}
                    >
                      {item.index} — {item.name}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="relative mt-12 h-56">
              {methodSteps.map((item, i) => (
                <Chapter key={item.index} step={item} active={i === step} />
              ))}
            </div>
          </div>

          <StageVisual
            step={step}
            className="col-span-7 aspect-[4/3] max-h-[78vh] w-full self-center"
          />
        </div>
      </div>
    </div>
  );
}

function StackedMethod() {
  return (
    <div className="shell">
      <p className="text-label text-bone-600">
        <span className="text-red-400">{sectionNumber("method")}</span> / The Method
      </p>

      <RevealHeading
        as="h2"
        id="method-heading"
        className="text-display-md mt-5 max-w-[20ch] text-bone-100"
        lines={["Four Steps.", "One Clear Development Process."]}
      />

      <ol className="mt-12 border-t border-line">
        {methodSteps.map((item, i) => (
          <li key={item.index} className="border-b border-line py-10">
            <div className="flex items-baseline gap-4">
              <span className="font-display text-3xl leading-none text-red-500 tnum">
                {item.index}
              </span>
              <h3 className="text-display-md text-bone-100">{item.name}</h3>
            </div>

            <StageVisual step={i} className="mt-6 aspect-[4/3] w-full" />

            <p className="text-body mt-6 max-w-[62ch] text-bone-400">{item.detail}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function Method() {
  const pinned = useIsPinned();

  return (
    <section
      id="method"
      aria-labelledby="method-heading"
      className={cn("border-t border-line bg-ink-900", pinned ? "" : "section-y")}
    >
      {pinned ? <PinnedMethod /> : <StackedMethod />}
    </section>
  );
}
