import { useEffect, useState } from "react";

import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

/** Dot cursor that swells to a ring over interactive elements. Fine pointers only. */
export function CustomCursor() {
  const reduced = usePrefersReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    if (reduced) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    setEnabled(true);

    const onMove = (event: MouseEvent) => {
      setPos({ x: event.clientX, y: event.clientY });
      const target = event.target as HTMLElement | null;
      setActive(Boolean(target?.closest("a, button, [role='button'], input, summary")));
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduced]);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
      style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }}
    >
      <span
        className="block -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-200 ease-brand"
        style={{
          width: active ? 34 : 8,
          height: active ? 34 : 8,
          backgroundColor: active ? "transparent" : "var(--color-bone-100)",
          borderColor: active ? "var(--color-bone-100)" : "transparent",
        }}
      />
    </div>
  );
}
