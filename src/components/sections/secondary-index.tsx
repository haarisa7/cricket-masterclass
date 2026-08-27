import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

import campsImage from "@/assets/service-camps.jpg";
import groupImage from "@/assets/service-group.jpg";
import eliteImage from "@/assets/elite-academy.jpg";
import netsImage from "@/assets/hero-nets-batsman.jpg";
import oneToOneImage from "@/assets/service-one-to-one.jpg";
import { secondaryServices } from "@/data/services";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Contextual preview art, cycled from the photography we already ship. */
const previews = [netsImage, groupImage, campsImage, eliteImage, oneToOneImage];

/**
 * OTH-01 — the editorial index of everything beyond the four core programmes.
 *
 * Deliberately still a list, not a card grid. The upgrade is behavioural: a
 * large index numeral, a contextual preview that follows the pointer row on
 * desktop, dimmed inactive rows and a red active rule. Every row is one <Link>
 * covering the whole row, and the name and descriptor are always visible — the
 * preview image is decoration, so nothing is hidden behind hover.
 */
export function SecondaryIndex() {
  const reduced = usePrefersReducedMotion();
  const [active, setActive] = useState<number | null>(null);

  return (
    <section aria-labelledby="also-offered" className="section-y">
      <div className="shell">
        <h2 id="also-offered" className="text-label text-bone-600">
          Also Offered
        </h2>

        <div className="mt-10 lg:grid lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start lg:gap-12">
          <ul
            className="border-t border-line"
            onMouseLeave={() => setActive(null)}
            onBlur={() => setActive(null)}
          >
            {secondaryServices.map((service, i) => {
              const isActive = active === i;
              const dimmed = active !== null && !isActive;

              return (
                <li key={service.name} className="relative border-b border-line">
                  {/* the active rule */}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-x-0 bottom-[-1px] h-px origin-left bg-red-500 transition-transform duration-300 ease-brand",
                      isActive ? "scale-x-100" : "scale-x-0",
                    )}
                  />

                  <Link
                    to={service.href}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    className={cn(
                      "group grid grid-cols-[auto_minmax(0,1fr)_auto] items-baseline gap-x-4 gap-y-1 py-5 transition-[opacity,padding] duration-300 ease-brand md:grid-cols-[auto_minmax(0,24rem)_minmax(0,1fr)_auto] md:px-2",
                      isActive && "md:py-7",
                      dimmed && "opacity-45",
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        "font-mono text-xs tnum transition-colors duration-200 ease-brand",
                        isActive ? "text-red-400" : "text-bone-600",
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <span className="text-body-lg min-w-0 text-bone-100">{service.name}</span>

                    <span className="text-label col-start-2 text-bone-500 md:col-start-3">
                      {service.descriptor}
                    </span>

                    <span
                      aria-hidden="true"
                      className={cn(
                        "shrink-0 transition-[transform,color] duration-200 ease-brand",
                        isActive ? "translate-x-1 text-red-400" : "text-bone-500",
                      )}
                    >
                      →
                    </span>
                  </Link>

                  {/* Mobile: the preview expands below the row that is focused,
                      rather than depending on a hover state that never fires. */}
                  {isActive && !reduced && (
                    <div className="overflow-hidden pb-5 lg:hidden">
                      <img
                        src={previews[i % previews.length]}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="h-32 w-full object-cover"
                      />
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="sticky top-28 hidden aspect-[4/5] overflow-hidden border border-line bg-ink-900 lg:block">
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={active ?? "idle"}
                src={previews[(active ?? 0) % previews.length]}
                alt=""
                loading="lazy"
                decoding="async"
                className="size-full object-cover"
                initial={reduced ? undefined : { clipPath: "inset(0 0 100% 0)", scale: 1.06 }}
                animate={reduced ? undefined : { clipPath: "inset(0 0 0% 0)", scale: 1 }}
                exit={reduced ? undefined : { opacity: 0 }}
                transition={{ duration: 0.55, ease: EASE }}
              />
            </AnimatePresence>
            <div
              aria-hidden="true"
              className={cn(
                "absolute inset-0 transition-colors duration-300 ease-brand",
                active === null ? "bg-ink-950/60" : "bg-ink-950/20",
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
