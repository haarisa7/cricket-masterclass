/**
 * The opening curtain: a solid ink panel that lifts once, on first paint of
 * the homepage, so the hero reveals rather than pops in.
 *
 * Deliberately CSS-only. An earlier version unmounted itself from a React
 * timer; when that effect did not run (hydration timing), the panel stayed up
 * and hid the entire page. A keyframe with `forwards` cannot fail that way:
 * the final frame is fully clipped away, it is pointer-events-none from the
 * start, nothing waits on it, and prefers-reduced-motion collapses it
 * instantly via the global reduced-motion rule.
 */
export function Curtain() {
  return <div aria-hidden="true" className="curtain-lift pointer-events-none fixed inset-0 z-[60]" />;
}
