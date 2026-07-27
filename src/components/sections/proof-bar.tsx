import { useEffect, useRef, useState } from "react";

import { stats } from "@/data/content";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

/**
 * Server-renders the FINAL value, then counts up on entry. It can never
 * display "0+" if the animation does not fire.
 */
function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(value);

  useEffect(() => {
    if (reduced || !ref.current) return;
    const node = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const duration = 1200;
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setShown(Math.round(value * eased));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [reduced, value]);

  return (
    <span ref={ref} className="tnum">
      {shown}
      {suffix}
    </span>
  );
}

export function ProofBar() {
  return (
    <section aria-label="Track record" className="border-y border-line bg-ink-900">
      <dl className="shell grid grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={
              "flex flex-col gap-3 py-12 " +
              (i % 2 === 1 ? "border-l border-line pl-6 " : "pr-6 ") +
              (i > 1 ? "border-t border-line lg:border-t-0 " : "") +
              (i === 2 ? "lg:border-l lg:pl-6 " : "")
            }
          >
            <dd className="text-display-md text-bone-100">
              {stat.display ? (
                <span className="text-[clamp(1.25rem,2.2vw,2rem)]">{stat.display}</span>
              ) : (
                <CountUp value={stat.value} suffix={stat.suffix} />
              )}
            </dd>
            <dt className="text-label text-bone-400">{stat.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
