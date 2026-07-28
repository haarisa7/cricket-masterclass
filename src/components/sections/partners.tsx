import { Link } from "@tanstack/react-router";

import { Reveal } from "@/components/ui/reveal";
import { partners, partnersIntro } from "@/data/site";

/**
 * Partner wall, carried over from the live site: a short statement of intent
 * plus tiered partner tiles. Logos are dark-on-transparent artwork, so each
 * one sits on a bone tile rather than the ink canvas — inverting third-party
 * marks would break their brand rules.
 */
export function Partners() {
  return (
    <section aria-labelledby="partners-heading" className="border-y border-line">
      <div className="shell flex flex-col gap-12 py-20">
        <div className="grid gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-end">
          <div>
            <p className="text-label text-bone-400">Elite Sponsorships</p>
            <h2 id="partners-heading" className="text-display-md mt-6 max-w-[14ch] text-bone-100">
              Our trusted cricket partners
            </h2>
          </div>
          <p className="text-body text-bone-400">{partnersIntro}</p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner) => {
            const inner = (
              <div className="flex h-full flex-col gap-6 border border-line bg-ink-900 p-6 transition-colors duration-200 ease-brand group-hover:border-red-500">
                <div className="flex h-32 items-center justify-center bg-bone-100 px-8">
                  {partner.logo ? (
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      loading="lazy"
                      className="max-h-20 w-auto max-w-full object-contain"
                    />
                  ) : (
                    <span className="text-label text-ink-950">Your logo here</span>
                  )}
                </div>

                <div className="mt-auto grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4">
                  <div className="min-w-0">
                    <p className="truncate text-sm text-bone-100">{partner.name}</p>
                    <p className="text-label mt-1 text-bone-600">{partner.descriptor}</p>
                  </div>
                  <p
                    className={
                      partner.tier === "Gold Partner"
                        ? "text-label shrink-0 text-gold-400"
                        : "text-label shrink-0 text-bone-400"
                    }
                  >
                    {partner.tier}
                  </p>
                </div>
              </div>
            );

            return (
              <li key={partner.name}>
                <Reveal>
                  {partner.href ? (
                    <a
                      href={partner.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group block h-full"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="group h-full">{inner}</div>
                  )}
                </Reveal>
              </li>
            );
          })}
        </ul>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8">
          <p className="text-body text-bone-400">
            Want to be part of the journey? We&rsquo;d love to hear from you.
          </p>
          <Link to="/contact" className="link-wipe text-sm">
            Partner with us <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
