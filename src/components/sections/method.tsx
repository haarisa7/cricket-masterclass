import { methodHeading, methodSteps } from "@/data/content";
import { sectionNumber } from "@/data/sections";

/**
 * MTH-01 — the four-step development process.
 *
 * This section used to pin and scroll its four steps horizontally through
 * fixed 38vw panels. That worked when each step carried eight words. The
 * client's copy runs 40–60 words per step, which at 38vw overflowed the panel
 * and collided with the ~144px step numeral inside a 100svh frame.
 *
 * Widening the panels was tried first and pushed the horizontal track past
 * three viewport widths of scroll for four cards, which made the section feel
 * broken. So the pin is gone and the steps stack vertically: the numeral drops
 * to a size that sits beside the text rather than above it, every step is
 * readable at every breakpoint, and there is no motion to reason about for
 * reduced-motion users. The `usePrefersReducedMotion` branch is no longer
 * needed here for that reason.
 *
 * The trade is that the homepage loses a piece of signature motion. If that
 * matters to the client, the alternative is to shorten each step to a single
 * sentence and restore the horizontal scroll — that is a copy decision, not a
 * layout one.
 */
export function Method() {
  return (
    <section
      id="method"
      aria-labelledby="method-heading"
      className="section-y border-t border-line bg-ink-900"
    >
      <div className="shell">
        <p className="text-label text-bone-400">
          <span className="text-red-400">{sectionNumber("method")}</span> / The Method
        </p>

        <h2 id="method-heading" className="text-display-md mt-6 max-w-[20ch] text-bone-100">
          {methodHeading}
        </h2>

        <ol className="mt-16 border-t border-line">
          {methodSteps.map((step) => (
            <li
              key={step.index}
              className="grid gap-4 border-b border-line py-10 md:grid-cols-[auto_minmax(0,1fr)] md:gap-12 md:py-14"
            >
              {/* Numeral shrinks hard below md. At the old clamp it took a
                  third of a 375px screen on its own row. */}
              <span className="font-display text-4xl leading-none text-red-500 tnum md:text-[clamp(3.5rem,6vw,6rem)]">
                {step.index}
              </span>

              <div className="max-w-[62ch]">
                <h3 className="text-display-md text-bone-100">{step.name}</h3>
                <p className="text-body mt-4 text-bone-400">{step.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
