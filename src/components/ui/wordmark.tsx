import { cn } from "@/lib/utils";

type Tone = "dark" | "light";

/**
 * Ball mark — rebuilt as vector from the original raster logo.
 * No black keyline (it dies on the ink canvas); seam is knocked out in bone.
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
      <circle cx="32" cy="32" r="30" className="fill-red-500" />
      {/* seam: two swept stitch lines, thick enough to survive 20px */}
      <path
        d="M20.5 6.5C25 20 27.5 39 26.5 60"
        className="stroke-bone-50"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <path
        d="M33.5 9.5C38 22.5 40.5 40 39.5 58.5"
        className="stroke-bone-50"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
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

/** Back-compat alias used by the nav and footer. */
export function Wordmark({ className }: { className?: string }) {
  return <Logo className={cn("text-[15px]", className)} />;
}
