import { useId } from "react";

import { cn } from "@/lib/utils";
import {
  WORD_CRICKET,
  WORD_HEIGHT,
  WORD_MASTERCLASS,
  WORD_WIDTH,
} from "./word-paths";

/**
 * Masterclass Cricket brand marks.
 *
 * Flat construction, no keyline, no gradients. Colour is driven by CSS custom
 * properties so one component serves both themes:
 *   --brand-ball | --brand-seam | --brand-word-1 | --brand-word-2
 * Wrap in `.brand-light` (or pass tone="light") on light surfaces — gold is
 * badge-locked to dark surfaces only.
 */
export type BrandTone = "auto" | "dark" | "light" | "ink" | "white";

const TONE_CLASS: Record<BrandTone, string> = {
  auto: "",
  dark: "brand-dark",
  light: "brand-light",
  ink: "brand-ink",
  white: "brand-white",
};

const BALL = "var(--brand-ball)";
const SEAM = "var(--brand-seam)";
const W1 = "var(--brand-word-1)";
const W2 = "var(--brand-word-2)";

/** Ball geometry: r=100 @ (100,100). Parallel seam pair, upper-left → lower-right. */
const SEAM_A = "M-30 -10Q100 70 230 150";
const SEAM_B = "M-30 50Q100 130 230 210";

function Ball({ idPrefix }: { idPrefix: string }) {
  const maskId = `${idPrefix}-ball-mask`;
  const clipId = `${idPrefix}-ball-clip`;
  return (
    <>
      <clipPath id={clipId}>
        <circle cx="100" cy="100" r="100" />
      </clipPath>
      <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width="200" height="200">
        <circle cx="100" cy="100" r="100" fill="#fff" />
        <g stroke="#000" strokeWidth="14" fill="none">
          <path d={SEAM_A} />
          <path d={SEAM_B} />
        </g>
      </mask>
      {/* colour build: solid ball + seams painted on top */}
      <g className="brand-color">
        <circle cx="100" cy="100" r="100" fill={BALL} />
        <g stroke={SEAM} strokeWidth="14" fill="none" clipPath={`url(#${clipId})`}>
          <path d={SEAM_A} />
          <path d={SEAM_B} />
        </g>
      </g>
      {/* mono build: filled circle with knocked-out seams */}
      <circle
        className="brand-mono"
        cx="100"
        cy="100"
        r="100"
        fill={BALL}
        mask={`url(#${maskId})`}
      />
    </>
  );
}


interface LogoProps {
  className?: string;
  tone?: BrandTone;
  title?: string;
  /** decorative marks skip the accessible name */
  decorative?: boolean;
}

function a11y(title: string, decorative?: boolean) {
  return decorative
    ? ({ "aria-hidden": true, focusable: false } as const)
    : ({ role: "img", "aria-label": title } as const);
}

/** Ball only. Favicon, avatars, collapsed rail, app icon. */
export function LogoMark({
  className,
  tone = "auto",
  title = "Masterclass Cricket",
  decorative,
}: LogoProps) {
  const id = useId().replace(/:/g, "");
  return (
    <svg
      viewBox="0 0 200 200"
      className={cn("brand h-8 w-8", TONE_CLASS[tone], className)}
      {...a11y(title, decorative)}
    >
      <Ball idPrefix={id} />
    </svg>
  );
}

/** Type only. Tight horizontal spaces, print. */
export function LogoWordmark({
  className,
  tone = "auto",
  title = "Masterclass Cricket",
  decorative,
}: LogoProps) {
  return (
    <svg
      viewBox={`0 0 ${WORD_WIDTH} ${WORD_HEIGHT}`}
      className={cn("brand h-6 w-auto", TONE_CLASS[tone], className)}
      {...a11y(title, decorative)}
    >
      <path d={WORD_MASTERCLASS} fill={W1} />
      <path d={WORD_CRICKET} fill={W2} />
    </svg>
  );
}

const GAP = 90; // clear space between ball and type

/** Ball left, two-line wordmark right. Navbar, topbar, expanded sidebar. */
export function LogoHorizontal({
  className,
  tone = "auto",
  title = "Masterclass Cricket",
  decorative,
}: LogoProps) {
  const id = useId().replace(/:/g, "");
  const total = 218 + GAP + WORD_WIDTH;
  return (
    <svg
      viewBox={`0 0 ${total} 218`}
      className={cn("brand h-7 w-auto", TONE_CLASS[tone], className)}
      {...a11y(title, decorative)}
    >
      <g transform="translate(9 9)">
        <Ball idPrefix={id} />
      </g>
      <g transform={`translate(${218 + GAP} 0)`}>
        <path d={WORD_MASTERCLASS} fill={W1} />
        <path d={WORD_CRICKET} fill={W2} />
      </g>
    </svg>
  );
}

/** Ball above, wordmark below. Footer, auth screens, splash. */
export function LogoStacked({
  className,
  tone = "auto",
  title = "Masterclass Cricket",
  decorative,
}: LogoProps) {
  const id = useId().replace(/:/g, "");
  const ball = 300;
  const gap = 100;
  const total = WORD_HEIGHT + gap + ball;
  return (
    <svg
      viewBox={`0 0 ${WORD_WIDTH} ${total}`}
      className={cn("brand h-24 w-auto", TONE_CLASS[tone], className)}
      {...a11y(title, decorative)}
    >
      <g transform={`translate(${(WORD_WIDTH - ball) / 2} 0) scale(${ball / 200})`}>
        <Ball idPrefix={id} />
      </g>
      <g transform={`translate(0 ${ball + gap})`}>
        <path d={WORD_MASTERCLASS} fill={W1} />
        <path d={WORD_CRICKET} fill={W2} />
      </g>
    </svg>
  );
}
