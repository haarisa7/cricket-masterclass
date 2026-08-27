import { motion } from "motion/react";
import { useEffect, useState } from "react";

import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

/**
 * The opening curtain: a solid ink panel that lifts once, on first paint of
 * the homepage, so the hero reveals rather than pops in.
 *
 * It is deliberately NOT a loading gate — nothing waits on it, it is
 * pointer-events-none from the start, and it is removed from the tree after
 * ~1s. Under prefers-reduced-motion it never renders at all, so no user ever
 * sits in front of a black rectangle waiting for content.
 */
export function Curtain() {
  const reduced = usePrefersReducedMotion();
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setDone(true), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  if (reduced || done) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[60] bg-ink-950"
      initial={{ clipPath: "inset(0 0 0% 0)" }}
      animate={{ clipPath: "inset(0 0 100% 0)" }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={() => setDone(true)}
    />
  );
}
