import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
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
      animate={{ opacity: active ? 1 : 0, y: active ? 0 : 28, filter: active ? "blur(0px)" : "blur(6px)" }}
      transition={{ duration: 0.6, ease: EASE }}
      aria-hidden={!active}
    >
      <div className="overflow-hidden">
        <motion.h3
          className="text-display-md text-bone-100"
          initial={false}
          animate={{ y: active ? "0%" : "110%" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          {step.name}
        </motion.h3>
      </div>
      <motion.p
        className="text-body mt-5 max-w-[46ch] text-bone-400"
        initial={false}
        animate={{ opacity: active ? 1 : 0, y: active ? 0 : 16 }}
        transition={{ duration: 0.6, delay: active ? 0.12 : 0, ease: EASE }}
      >
        {step.detail}
      </motion.p>
    </motion.div>
  );
}

function PinnedMethod() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [step, setStep] = useState(0);

  /** Spring-smoothed progress: the rail and the stage glide instead of jittering
   *  frame-by-frame with the wheel. */
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });
  const railScale = useTransform(smooth, [0, 1], [0.04, 1]);

  /** Stage motion: slow counter-drift plus a breathing scale so the pinned frame
   *  never feels static, and a clip wipe that opens as the section takes over. */
  const stageY = useTransform(smooth, [0, 1], ["3%", "-3%"]);
  const stageScale = useTransform(smooth, [0, 0.5, 1], [1.06, 1.01, 1.05]);
  const stageRotate = useTransform(smooth, [0, 1], [-0.6, 0.6]);

  /** Oversized ghost numeral drifting behind the copy column. */
  const ghostY = useTransform(smooth, [0, 1], ["12%", "-12%"]);
  const percent = useTransform(smooth, (p) => Math.round(p * 100));
  const dash = useMotionTemplate`${percent}`;

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const next = Math.min(methodSteps.length - 1, Math.max(0, Math.floor(p * methodSteps.length)));
    setStep((current) => (current === next ? current : next));
  });

  return (
    <div ref={ref} className="relative h-[420vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* drifting ghost numeral — pure decoration, never read out */}
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute -left-6 top-1/2 -translate-y-1/2 select-none font-display text-[38vw] leading-none text-bone-100/[0.03] tnum"
          style={{ y: ghostY }}
        >
          {methodSteps[step]?.index}
        </motion.span>

        <div className="shell relative grid w-full grid-cols-12 items-center gap-x-6">
          <div className="col-span-5 flex flex-col">
            <div className="flex items-baseline justify-between">
              <p className="text-label text-bone-600">
                <span className="text-red-400">{sectionNumber("method")}</span> / The Method
              </p>
              <p className="text-label text-bone-600 tnum">
                <motion.span>{dash}</motion.span>%
              </p>
            </div>
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
                    <motion.span
                      className={cn(
                        "text-label tnum flex items-center gap-3 transition-colors duration-300 ease-brand",
                        i === step ? "text-red-400" : "text-bone-600",
                      )}
                      initial={false}
                      animate={{ x: i === step ? 6 : 0 }}
                      transition={{ duration: 0.4, ease: EASE }}
                    >
                      <motion.span
                        aria-hidden="true"
                        className={cn("h-px", i === step ? "bg-red-500" : "bg-bone-600/50")}
                        initial={false}
                        animate={{ width: i === step ? 24 : 8 }}
                        transition={{ duration: 0.4, ease: EASE }}
                      />
                      {item.index} — {item.name}
                    </motion.span>
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

          <motion.div
            className="col-span-7 self-center"
            style={{ y: stageY, scale: stageScale, rotate: stageRotate }}
          >
            <StageVisual step={step} className="aspect-[4/3] max-h-[78vh] w-full" />
          </motion.div>
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
