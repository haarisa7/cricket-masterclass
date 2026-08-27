import { ActionLink } from "@/components/ui/action";
import { Reveal } from "@/components/ui/reveal";
import { partners, partnersIntro } from "@/data/site";

/**
 * PART-01 / PART-02 — the commercial partner wall.
 *
 * Sponsors only. The grounds and clubs the brief originally listed here live in
 * the venues section instead: a venue and a paying sponsor are different kinds
 * of relationship, and a "Gold Partner" badge against a cricket ground says
 * nothing. Rocket Bats belongs here because it genuinely is a sponsor.
 *
 * Four across on desktop, not three. With four tiles, lg:grid-cols-3 dropped the
 * fourth onto its own row where it read as an afterthought.
 *
 * Logos are dark-on-transparent artwork, so each sits on a bone tile rather than
 * the ink canvas — inverting third-party marks would break their brand rules.
 * Tiles without artwork fall back to the partner name set in the display face,
 * which is presentable but is not the intended finish.
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

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner, i) => {
            const inner = (
              <div className="flex h-full flex-col gap-6 border border-line bg-ink-900 p-6 transition-colors duration-200 ease-brand group-hover:border-red-500">
                {/* One tile geometry for every partner: same aspect, same
                    padding, same optical cap on logo height, so no mark reads
                    as larger than another. Marks start desaturated and take
                    their brand colour on hover/focus. */}
                <div className="flex aspect-[3/2] items-center justify-center bg-bone-100 px-6 py-5">
                  {partner.logo ? (
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      loading="lazy"
                      decoding="async"
                      className="max-h-16 w-auto max-w-[80%] object-contain grayscale transition-[filter,transform] duration-200 ease-brand group-hover:scale-[1.03] group-hover:grayscale-0 group-focus-visible:grayscale-0"
                    />
                  ) : (
                    /* The open slot is intentional, and dressed as an
                       invitation rather than a hole in the grid. */
                    <span className="text-center font-display text-base leading-tight text-ink-950/70">
                      {partner.name}
                    </span>
                  )}
                </div>

                {/* Stacked, not the old name-left / tier-right row. At four
                    columns each tile is ~270px, and "Official Partner" beside
                    "Marshall Real Estate" left roughly 90px for the name, which
                    truncated it mid-word. No truncate either — the names wrap. */}
                <div className="mt-auto">
                  <p className="text-sm leading-snug text-bone-100">{partner.name}</p>
                  <p className="text-label mt-2 text-bone-600">{partner.descriptor}</p>
                  <p
                    className={
                      partner.tier === "Silver Partner"
                        ? "text-label mt-3 text-bone-500"
                        : "text-label mt-3 text-gold-400"
                    }
                  >
                    {partner.tier}
                  </p>
                </div>
              </div>
            );

            return (
              <li key={partner.name}>
                <Reveal delay={i * 0.06}>
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
          <p className="text-body-lg max-w-[42ch] text-bone-100">
            Want to be part of the journey? We&rsquo;d love to hear from you.
          </p>
          <ActionLink to="/contact" variant="secondary">
            Partner with us
          </ActionLink>
        </div>
      </div>
    </section>
  );
}
