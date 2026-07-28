import { useEffect, useRef, useState } from "react";

import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import type { Reel } from "@/data/content";

/** Respect the user's data-saver setting — never pull 10MB+ behind their back. */
function prefersLessData(): boolean {
  if (typeof navigator === "undefined") return false;
  const connection = (
    navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }
  ).connection;
  if (!connection) return false;
  return Boolean(connection.saveData) || /2g/.test(connection.effectiveType ?? "");
}

/**
 * One reel: a 9:16 card that shows its poster instantly and only fetches the
 * video once it scrolls into view.
 *
 * The original site loaded all four <video> elements up front and toggled them
 * behind a play button. Here the poster (~140KB) is all that loads on first
 * paint; the video (`preload="none"`, no `src` until observed) is fetched only
 * when the card is genuinely on screen, and paused the moment it leaves so
 * offscreen cards never decode frames.
 */
export function ReelCard({ reel, index }: { reel: Reel; index: number }) {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    // Reduced motion or data-saver: the poster is the whole experience.
    if (reduced || prefersLessData()) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;
        if (entry.isIntersecting) {
          setLoad(true);
          void video?.play().catch(() => {
            /* autoplay refused (e.g. low-power mode) — poster stays, no error */
          });
        } else {
          video?.pause();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reduced]);

  return (
    <a
      ref={ref}
      href={reel.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${reel.caption} — ${reel.views} views. Watch on Instagram`}
      className="group relative block aspect-[9/16] overflow-hidden bg-ink-800"
    >
      <img
        src={reel.poster}
        alt=""
        width={720}
        height={1280}
        loading={index < 2 ? "eager" : "lazy"}
        decoding="async"
        className="absolute inset-0 size-full object-cover"
      />

      <video
        ref={videoRef}
        src={load ? reel.src : undefined}
        poster={reel.poster}
        muted
        loop
        playsInline
        preload="none"
        tabIndex={-1}
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover"
      />

      {/* Legibility scrim for the numerals, and the brand wash on hover. */}
      <span className="scrim pointer-events-none absolute inset-x-0 bottom-0 h-1/2" />
      <span className="pointer-events-none absolute inset-0 bg-red-600/0 transition-colors duration-400 ease-brand group-hover:bg-red-600/20" />

      <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
        <span className="font-display text-[clamp(1.5rem,3vw,2.5rem)] font-extrabold leading-none text-bone-50 tnum">
          {reel.views}
        </span>
        <span className="text-label text-bone-50/80">Views</span>
      </span>
    </a>
  );
}
