import eliteImage from "@/assets/elite-academy.jpg";
import { ActionLink } from "@/components/ui/action";
import { RevealHeading, RevealImage } from "@/components/ui/reveal";
import { indoorPromo } from "@/data/content";

/**
 * ELIT-02 — fills the homepage slot the Elite Academy used to occupy.
 *
 * Deliberately the same 50/50 image-and-list layout as the section it
 * replaces: that shape already worked and the content maps onto it one-for-one,
 * so this stays a content change rather than a rebuild. The CTA points at the
 * interest form further down the page (IND-02) — one form, two entry points.
 *
 * IMAGE STILL WRONG: this is the old elite-academy photograph, a floodlit
 * OUTDOOR ground, on a section about indoor winter cricket. Swap it for indoor
 * footage from St Paul's when the client supplies some.
 */
export function IndoorPromo() {
  return (
    <section
      id="indoor-promo"
      aria-labelledby="indoor-promo-heading"
      className="grid items-stretch border-y border-line lg:grid-cols-2"
    >
      <RevealImage
        src={eliteImage}
        alt="Cricketers training under floodlights"
        width={1600}
        height={1200}
        className="min-h-[60svh] lg:min-h-[80svh]"
      />

      <div className="flex flex-col justify-center gap-8 px-[var(--gutter)] py-24 lg:py-32">
        <p className="text-label text-red-400">{indoorPromo.eyebrow}</p>

        <RevealHeading
          as="h2"
          id="indoor-promo-heading"
          className="text-display-lg max-w-[16ch] text-bone-100"
          lines={["Join the Masterclass", "Indoor Group Programme"]}
        />

        <p className="text-body-lg text-bone-400">{indoorPromo.copy}</p>

        {/* Label left, value right from sm up. Stacked below that: "Covering"
            runs to six words and side-by-side it crushed to one word per line. */}
        <dl className="border-t border-line">
          {indoorPromo.points.map((point) => (
            <div
              key={point.label}
              className="grid grid-cols-1 gap-1 border-b border-line py-4 sm:grid-cols-[minmax(0,auto)_minmax(0,1fr)] sm:items-baseline sm:gap-6"
            >
              <dt className="text-label text-bone-400">{point.label}</dt>
              <dd className="text-sm text-bone-100 sm:text-right">{point.detail}</dd>
            </div>
          ))}
        </dl>

        <div>
          <ActionLink to="/" hash="indoor-programme">
            {indoorPromo.cta.label}
          </ActionLink>
        </div>
      </div>
    </section>
  );
}
