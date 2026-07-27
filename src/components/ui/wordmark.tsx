import { cn } from "@/lib/utils";

/** SVG wordmark. Never a scaled favicon. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 208 26"
      role="img"
      aria-label="Masterclass Cricket"
      className={cn("h-5 w-auto", className)}
      fill="none"
    >
      <circle cx="12" cy="13" r="9" stroke="currentColor" strokeWidth="1.6" opacity="0.5" />
      <path d="M6 6.5c4 3.6 4 9.4 0 13M18 6.5c-4 3.6-4 9.4 0 13" stroke="currentColor" strokeWidth="1.6" />
      <text
        x="32"
        y="18.5"
        fill="currentColor"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "16px",
          fontWeight: 800,
          letterSpacing: "-0.02em",
        }}
      >
        MASTERCLASS
      </text>
      <text
        x="152"
        y="18.5"
        fill="currentColor"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          fontWeight: 500,
          letterSpacing: "0.18em",
        }}
        opacity="0.65"
      >
        CRICKET
      </text>
    </svg>
  );
}
