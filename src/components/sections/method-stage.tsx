import { motion } from "motion/react";

import assessImage from "@/assets/hero-nets-batsman.jpg";
import developImage from "@/assets/service-one-to-one.jpg";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

/**
 * The visual stage for the four-step method (MTH-01).
 *
 * One <StageVisual step={0..3} /> renders the whole sequence: the same player
 * frame is progressively instrumented (assess -> analyse), crossfades into
 * coaching footage with a before/after correction (develop), and resolves into
 * a session report (report). Every overlay is SVG drawn over real photography
 * we already ship — no stock footage, no invented assets.
 *
 * Layers are stacked and crossfaded rather than scroll-interpolated per
 * element: it is far easier to reason about, and it degrades to "show the
 * final state" under prefers-reduced-motion with no extra branches.
 */

const EASE = [0.22, 1, 0.36, 1] as const;

/** Analysis viewfinder: corner brackets, frame counter, timeline. */
function Viewfinder({ step, visible }: { step: number; visible: boolean }) {
  const corner = "absolute size-6 border-bone-100/70";
  return (
    <motion.div
      aria-hidden="true"
      className="absolute inset-0"
      initial={false}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.4, ease: EASE }}
    >
      <div className="absolute inset-4 md:inset-6">
        <span className={cn(corner, "left-0 top-0 border-l border-t")} />
        <span className={cn(corner, "right-0 top-0 border-r border-t")} />
        <span className={cn(corner, "bottom-0 left-0 border-b border-l")} />
        <span className={cn(corner, "bottom-0 right-0 border-b border-r")} />

        <div className="absolute left-0 top-0 flex items-center gap-3 pl-8 font-mono text-[11px] uppercase tracking-[0.18em] text-bone-100/80">
          <span className="size-1.5 animate-pulse rounded-full bg-red-500" />
          <span className="tnum">Frame {String(120 + step * 46).padStart(4, "0")}</span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 pb-8">
          <div className="h-px w-full bg-bone-100/25">
            <motion.div
              className="h-px bg-red-500"
              initial={false}
              animate={{ scaleX: 0.2 + step * 0.26 }}
              style={{ transformOrigin: "left" }}
              transition={{ duration: 0.7, ease: EASE }}
            />
          </div>
          <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-bone-100/70 tnum">
            00:0{step + 1} / 00:04 · 240 fps
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/** Biomechanical overlay: bat path, joint markers, alignment guide. */
function Biomechanics({ visible, animate }: { visible: boolean; animate: boolean }) {
  const draw = (delay: number) => ({
    initial: { pathLength: animate ? 0 : 1, opacity: animate ? 0 : 1 },
    animate: { pathLength: visible ? 1 : 0, opacity: visible ? 1 : 0 },
    transition: { duration: 0.9, delay: visible ? delay : 0, ease: EASE },
  });

  return (
    <motion.svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="absolute inset-0 size-full"
      initial={false}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.4, ease: EASE }}
    >
      {/* alignment guide — vertical through the stumps line */}
      <motion.line
        x1="50"
        y1="8"
        x2="50"
        y2="94"
        stroke="rgba(242,239,233,0.35)"
        strokeWidth="0.25"
        strokeDasharray="2 2"
        {...draw(0)}
      />
      {/* bat path arc */}
      <motion.path
        d="M74 24 C 62 40, 52 58, 44 82"
        fill="none"
        stroke="#d7263d"
        strokeWidth="0.6"
        strokeLinecap="round"
        {...draw(0.12)}
      />
      {/* shoulder-hip-knee kinetic chain */}
      <motion.path
        d="M58 34 L 52 52 L 46 72"
        fill="none"
        stroke="rgba(242,239,233,0.8)"
        strokeWidth="0.35"
        {...draw(0.24)}
      />
      {[
        [58, 34],
        [52, 52],
        [46, 72],
      ].map(([cx, cy]) => (
        <motion.circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r="0.9"
          fill="#f2efe9"
          initial={false}
          animate={{ opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.3, ease: EASE }}
        />
      ))}
      {/* highlighted area of concern */}
      <motion.circle
        cx="52"
        cy="52"
        r="7"
        fill="none"
        stroke="#d7263d"
        strokeWidth="0.35"
        strokeDasharray="1.5 1.5"
        {...draw(0.36)}
      />
    </motion.svg>
  );
}

const annotations = [
  { label: "Head position", value: "Stable" },
  { label: "Hip rotation", value: "Early" },
  { label: "Bat path", value: "Across the line" },
];

function AnnotationList({ visible }: { visible: boolean }) {
  return (
    <div aria-hidden="true" className="absolute right-4 top-16 space-y-1.5 md:right-8 md:top-20">
      {annotations.map((row, i) => (
        <motion.p
          key={row.label}
          className="bg-ink-950/70 px-2 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-bone-100"
          initial={false}
          animate={{ opacity: visible ? 1 : 0, x: visible ? 0 : 12 }}
          transition={{ duration: 0.35, delay: visible ? 0.3 + i * 0.06 : 0, ease: EASE }}
        >
          {row.label} <span className="text-red-400">{row.value}</span>
        </motion.p>
      ))}
    </div>
  );
}

/** Before / after correction plus drill progression markers. */
function Correction({ visible }: { visible: boolean }) {
  return (
    <motion.div
      aria-hidden="true"
      className="absolute inset-0"
      initial={false}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.5, ease: EASE }}
    >
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 size-full">
        <motion.path
          d="M70 26 C 60 44, 54 62, 50 84"
          fill="none"
          stroke="rgba(242,239,233,0.3)"
          strokeWidth="0.4"
          strokeDasharray="2 2"
          initial={false}
          animate={{ pathLength: visible ? 1 : 0 }}
          transition={{ duration: 0.7, ease: EASE }}
        />
        <motion.path
          d="M62 24 C 57 44, 54 64, 53 86"
          fill="none"
          stroke="#d7263d"
          strokeWidth="0.7"
          strokeLinecap="round"
          initial={false}
          animate={{ pathLength: visible ? 1 : 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
        />
      </svg>

      <div className="absolute inset-x-4 bottom-4 md:inset-x-8 md:bottom-8">
        <div className="flex items-center gap-3">
          {["Drill 01", "Drill 02", "Drill 03", "Grooved"].map((drill, i) => (
            <motion.span
              key={drill}
              className={cn(
                "flex-1 border-t pt-2 font-mono text-[10px] uppercase tracking-[0.14em] md:text-[11px]",
                i === 3 ? "border-red-500 text-red-400" : "border-bone-100/30 text-bone-100/80",
              )}
              initial={false}
              animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 8 }}
              transition={{ duration: 0.35, delay: visible ? 0.2 + i * 0.07 : 0, ease: EASE }}
            >
              {drill}
            </motion.span>
          ))}
        </div>
        <div className="mt-3 flex gap-6 font-mono text-[11px] uppercase tracking-[0.14em]">
          <span className="text-bone-100/60">Before — across the line</span>
          <span className="text-red-400">After — straight through</span>
        </div>
      </div>
    </motion.div>
  );
}

/**
 * Step 4: the session report. Generic demonstration content only — never a
 * real player, a real parent or a real WhatsApp thread.
 */
const report = [
  {
    label: "What the player learned",
    value: "Weight transfers before the hands, so the head stays over the front knee at contact.",
  },
  {
    label: "Coach feedback",
    value: "Balance at contact is much better. Bat path is straighter through the line of the ball.",
  },
  { label: "Homework", value: "3 × 15 shadow drives, twice this week. Film one set side-on." },
  { label: "Next area of focus", value: "Back-foot punch against the shorter length." },
];

function ReportPanel({ visible }: { visible: boolean }) {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center bg-ink-950 p-4 md:p-8"
      initial={false}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.5, ease: EASE }}
      aria-hidden={!visible}
    >
      <div className="w-full max-w-xl border border-line bg-ink-900">
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <p className="text-label text-bone-600">Session report · Example</p>
          <p className="text-label text-red-400">On track</p>
        </div>

        <dl className="px-5">
          {report.map((row, i) => (
            <motion.div
              key={row.label}
              className="border-b border-line py-4 last:border-b-0"
              initial={false}
              animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 14 }}
              transition={{ duration: 0.45, delay: visible ? 0.15 + i * 0.07 : 0, ease: EASE }}
            >
              <dt className="text-label text-bone-600">{row.label}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-bone-400">{row.value}</dd>
            </motion.div>
          ))}
        </dl>

        <p className="border-t border-line px-5 py-4 font-mono text-[11px] uppercase tracking-[0.14em] text-bone-600">
          Shared in the player&apos;s private WhatsApp coaching group
        </p>
      </div>
    </motion.div>
  );
}

export function StageVisual({ step, className }: { step: number; className?: string }) {
  const reduced = usePrefersReducedMotion();
  const animate = !reduced;

  return (
    <div className={cn("relative overflow-hidden border border-line bg-ink-900", className)}>
      {/* assess + analyse frame */}
      <motion.img
        src={assessImage}
        alt="Batsman playing a front-foot drive in an indoor net, used for video assessment"
        width={1920}
        height={1280}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 size-full object-cover"
        initial={false}
        animate={{ opacity: step <= 1 ? 1 : 0, scale: step === 1 ? 1.04 : 1 }}
        transition={{ duration: 0.8, ease: EASE }}
      />
      {/* develop frame */}
      <motion.img
        src={developImage}
        alt="Coach guiding a player through a targeted batting drill"
        width={1600}
        height={1067}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 size-full object-cover"
        initial={false}
        animate={{ opacity: step === 2 ? 1 : 0, scale: step === 2 ? 1 : 1.04 }}
        transition={{ duration: 0.8, ease: EASE }}
      />
      <div className="absolute inset-0 bg-ink-950/45" />

      <Viewfinder step={step} visible={step <= 1} />
      <Biomechanics visible={step === 1} animate={animate} />
      <AnnotationList visible={step === 1} />
      <Correction visible={step === 2} />
      <ReportPanel visible={step === 3} />
    </div>
  );
}
