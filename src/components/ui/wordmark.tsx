import { cn } from "@/lib/utils";

type Tone = "dark" | "light";

/**
 * Ball mark — rebuilt as vector from the original raster logo.
 * No black keyline (it dies on the ink canvas); seam knocked out in bone.
 * Subtle sphere shading + specular highlight for depth; seam weight is tuned
 * to stay readable down to 20px.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      aria-label="Masterclass Cricket"
      className={cn("size-8 shrink-0", className)}
      fill="none"
    >
      <defs>
        <radialGradient id="mc-ball" cx="36%" cy="30%" r="78%">
          <stop offset="0%" stopColor="#e8455c" />
          <stop offset="52%" stopColor="#d7263d" />
          <stop offset="100%" stopColor="#8e1524" />
        </radialGradient>
        <linearGradient id="mc-gloss" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.34" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <clipPath id="mc-clip">
          <circle cx="32" cy="32" r="30" />
        </clipPath>
      </defs>

      <circle cx="32" cy="32" r="30" fill="url(#mc-ball)" />

      <g clipPath="url(#mc-clip)">
        {/* specular sheen across the upper-left shoulder */}
        <ellipse
          cx="24"
          cy="17"
          rx="19"
          ry="11"
          transform="rotate(-24 24 17)"
          fill="url(#mc-gloss)"
        />
        {/* seam: two swept stitch lines traced from the mark — parallel
            curves entering top-right, sweeping down-left off the edge */}
        <path
          d="M47.2 6.8C40.8 10.2 34.2 14.6 28.4 20.8C23.2 26.6 17.2 34.8 13.6 43C11.6 47.6 10.6 50 10.6 53.2"
          stroke="#F7F5F2"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M56.8 16.4C50.9 19.9 45.2 23.9 40.2 28.6C35.4 33.2 30.9 38.9 27.6 45.6C25.4 50.4 23.2 54.4 22.2 60.4"
          stroke="#F7F5F2"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

/** Horizontal lockup: ball left, MASTERCLASS / CRICKET right. */
export function Logo({
  className,
  tone = "dark",
  markClassName,
}: {
  className?: string;
  tone?: Tone;
  markClassName?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className={cn("size-9", markClassName)} />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.05em] font-black leading-[0.9] tracking-[-0.03em]",
            tone === "dark" ? "text-gold-400" : "text-ink-950",
          )}
        >
          MASTERCLASS
        </span>
        <span
          className={cn(
            "font-display text-[0.92em] font-black leading-[0.95] tracking-[0.02em]",
            tone === "dark" ? "text-bone-50" : "text-ink-950",
          )}
        >
          CRICKET
        </span>
      </span>
    </span>
  );
}
