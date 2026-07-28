import { useEffect } from "react";

import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

/** Lenis smooth scroll. Disabled entirely under prefers-reduced-motion. */
export function SmoothScroll() {
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    let raf = 0;
    let lenis: { raf: (t: number) => void; destroy: () => void } | null = null;

    void import("lenis").then(({ default: Lenis }) => {
      lenis = new Lenis({ lerp: 0.09 });
      (window as unknown as { lenis?: unknown }).lenis = lenis;
      const tick = (time: number) => {
        lenis?.raf(time);
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    });

    return () => {
      cancelAnimationFrame(raf);
      lenis?.destroy();
      delete (window as unknown as { lenis?: unknown }).lenis;
    };
  }, [reduced]);

  return null;
}
