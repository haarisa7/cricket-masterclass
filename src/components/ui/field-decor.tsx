import type { CSSProperties } from "react";

import { cn } from "@/lib/utils";

/**
 * FIELD DECOR — the drifting bats and balls behind a section.
 *
 * Ported from the original site (`.igDecorativeBat` / `.igDecorativeBall` in
 * SocialMediaSection.module.css), which pinned four SVGs at fixed pixel offsets
 * and ran `float 6s` / `bounce 4s` on them. Same look, three fixes:
 *
 *  1. Performance — the shapes are drawn with flat fills and no gradients, so
 *     there are no per-instance SVG ids to collide, and the node count per
 *     shape drops from ~50 (the original stroked every bat grain line) to ~8.
 *     Animation is transform-only, so it stays on the compositor.
 *  2. Responsiveness — the original's `left: 40px; height: 260px` did not move
 *     with the viewport and overlapped the copy under ~600px. Offsets are now
 *     percentages and heights are `clamp()`ed.
 *  3. Maintainability — layout lives in one `PRESETS` table instead of four
 *     near-identical CSS classes.
 *
 * Purely atmospheric: the layer is `aria-hidden` and `pointer-events-none`, so
 * it never intercepts a click meant for the content above it.
 */

type Shape = "bat" | "ball";

interface DecorItem {
  shape: Shape;
  /** Inline position + size. Percentages and clamp() only — never fixed px. */
  style: CSSProperties;
  /** Resting rotation, fed to the keyframes via a custom property. */
  tilt?: number;
  /** Staggered so the four shapes never bob in unison. */
  delay?: number;
  opacity?: number;
  bounce?: boolean;
}

const PRESETS: Record<"field" | "quiet", DecorItem[]> = {
  /** Full arrangement — matches the original homepage social section. */
  field: [
    {
      shape: "bat",
      style: { top: "6%", left: "2%", height: "clamp(110px, 18vw, 260px)" },
      tilt: -8,
      opacity: 0.3,
    },
    {
      shape: "ball",
      style: { bottom: "8%", right: "4%", height: "clamp(52px, 9vw, 130px)" },
      delay: -1.6,
      opacity: 0.3,
      bounce: true,
    },
    {
      shape: "ball",
      style: { top: "50%", left: "1.5%", height: "clamp(30px, 5vw, 66px)" },
      delay: -3.2,
      opacity: 0.2,
      bounce: true,
    },
    {
      shape: "bat",
      style: { top: "22%", right: "2%", height: "clamp(74px, 12vw, 160px)" },
      tilt: 45,
      delay: -4.5,
      opacity: 0.2,
    },
  ],
  /** Two shapes only — for interior pages where copy is the whole point. */
  quiet: [
    {
      shape: "bat",
      style: { top: "12%", right: "3%", height: "clamp(90px, 14vw, 200px)" },
      tilt: 32,
      opacity: 0.18,
    },
    {
      shape: "ball",
      style: { bottom: "12%", left: "3%", height: "clamp(34px, 6vw, 78px)" },
      delay: -2.4,
      opacity: 0.18,
      bounce: true,
    },
  ],
};

/** Willow blade + taped handle. `currentColor` drives the blade. */
function Bat() {
  return (
    <svg viewBox="0 0 100 400" className="size-full" fill="none" aria-hidden="true">
      {/* handle */}
      <rect x="43" y="10" width="14" height="100" rx="7" fill="var(--color-ink-700)" />
      {/* grip bands — one dashed stroke instead of ten stacked rects */}
      <path
        d="M50 18v88"
        stroke="currentColor"
        strokeOpacity="0.4"
        strokeWidth="14"
        strokeDasharray="5 4"
      />
      {/* shoulder */}
      <path d="M43 110c-3 5-13 10-13 15v10h40v-10c0-5-10-10-13-15Z" fill="currentColor" />
      {/* blade */}
      <path d="M30 135v215c0 30 20 40 20 40s20-10 20-40V135Z" fill="currentColor" />
      {/* spine highlight */}
      <path d="M50 140v248" stroke="var(--color-ink-950)" strokeOpacity="0.35" strokeWidth="2" />
    </svg>
  );
}

/** Six-stitch cricket ball. Seam knocked out in bone, like the logo mark. */
function Ball() {
  return (
    <svg viewBox="0 0 100 100" className="size-full" fill="none" aria-hidden="true">
      <circle cx="50" cy="50" r="45" fill="var(--color-red-500)" />
      <g stroke="var(--color-bone-100)" strokeWidth="2.5" strokeLinecap="round">
        <path d="M50 5v90" />
        <path d="M50 5c15 15 15 75 0 90" />
        <path d="M50 5c-15 15-15 75 0 90" />
      </g>
      <circle cx="35" cy="35" r="9" fill="var(--color-bone-50)" fillOpacity="0.18" />
    </svg>
  );
}

export function FieldDecor({
  preset = "field",
  className,
}: {
  preset?: keyof typeof PRESETS;
  className?: string;
}) {
  return (
    <div className={cn("decor-layer", className)} aria-hidden="true">
      {PRESETS[preset].map((item, i) => (
        <div
          key={i}
          className={cn("decor-item", item.bounce && "decor-item-bounce")}
          style={
            {
              ...item.style,
              opacity: item.opacity,
              aspectRatio: item.shape === "bat" ? "100 / 400" : "1 / 1",
              "--decor-tilt": `${item.tilt ?? 0}deg`,
              "--decor-delay": `${item.delay ?? 0}s`,
            } as CSSProperties
          }
        >
          {item.shape === "bat" ? <Bat /> : <Ball />}
        </div>
      ))}
    </div>
  );
}
