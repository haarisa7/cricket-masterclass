import { useEffect, useState } from "react";

import { ActionAnchor } from "@/components/ui/action";
import { Reveal } from "@/components/ui/reveal";
import {
  eventsIntro,
  liveEvents,
  summerCamp,
  type CampWeek,
  type EventStatus,
  type LiveEvent,
} from "@/data/events";
import { sectionNumber } from "@/data/sections";
import { BOOKING, whatsappFor } from "@/data/site";
import { cn } from "@/lib/utils";

const STATUS_LABEL: Record<EventStatus, string> = {
  open: "Booking now",
  limited: "Limited places",
  closed: "Closed",
  soon: "Coming soon",
};

const STATUS_CLASS: Record<EventStatus, string> = {
  open: "border-red-500 text-red-400",
  limited: "border-gold-400 text-gold-400",
  closed: "border-line text-bone-600",
  soon: "border-line-str text-bone-400",
};

/**
 * Resolves an off-site CTA target for a card.
 *
 * `href` wins over `whatsappTopic` so a real checkout always beats an enquiry if
 * both are ever set by mistake. Returns null when the card has neither, which is
 * how a card renders with no button.
 */
function ctaHref(event: LiveEvent): string | null {
  if (event.href) return event.href;
  if (event.whatsappTopic) return whatsappFor(event.whatsappTopic);
  return null;
}

/**
 * Which camp weeks are still to come.
 *
 * Deliberately computed AFTER mount rather than during render. The server and
 * the browser can disagree about the date — different clocks, different time
 * zones, and midnight lands between the two — and a server/client difference in
 * markup is a hydration error. So the first paint shows every week (which is
 * what the poster says, and is never wrong, just occasionally stale by a day)
 * and the list narrows once the browser confirms today's date.
 *
 * The point of this: a nine-week poster stops needing a developer every time a
 * week finishes. Weeks retire on their own.
 */
function useUpcomingWeeks(): readonly CampWeek[] {
  const [today, setToday] = useState<string | null>(null);

  useEffect(() => {
    // Local date, not UTC — a camp in Chiswick ends at the end of the day in
    // Chiswick, and toISOString() would roll over an hour early through BST.
    const now = new Date();
    const local = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(
      now.getDate(),
    ).padStart(2, "0")}`;
    setToday(local);
  }, []);

  if (today === null) return summerCamp.weeks;
  return summerCamp.weeks.filter((week) => week.endsOn >= today);
}

/**
 * BAN-02 — what is currently running, high on the homepage.
 *
 * Placement: directly under the stats bar, above the coaching sections. The
 * brief calls this "the first place parents look for current bookings", and
 * anything below the philosophy section is two screens down on a phone.
 *
 * The summer camp gets its own full-width block rather than a card in the row:
 * it is the only thing here with real dates, real prices and a real checkout, so
 * squeezing nine weeks and three price tiers into a 270px tile would have buried
 * the one bookable thing on the page. The smaller cards below it carry
 * everything that is enquiry-only.
 *
 * Content comes from src/data/events.ts — see the editing notes at the top of
 * that file, including what to do when a new poster arrives.
 */
export function LiveEvents() {
  const events = liveEvents.filter((event) => event.show);
  const weeks = useUpcomingWeeks();
  const [posterFailed, setPosterFailed] = useState(false);

  return (
    <section
      id="whats-on"
      aria-labelledby="whats-on-heading"
      className="section-y border-b border-line"
    >
      <div className="shell">
        <p className="text-label text-bone-400">
          <span className="text-red-400">{sectionNumber("whats-on")}</span> / What&rsquo;s On
        </p>
        <h2 id="whats-on-heading" className="text-display-md mt-6 max-w-[18ch] text-bone-100">
          Currently running at Masterclass Cricket
        </h2>
        <p className="text-body mt-6 max-w-[62ch] text-bone-400">{eventsIntro}</p>
      </div>

      {/* ---- the camp: the one thing here with a real checkout ---- */}
      {weeks.length > 0 && (
        <div className="shell mt-12">
          <Reveal>
            <article className="border border-line bg-ink-900">
              <div className="grid gap-8 p-6 md:p-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-12">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="text-label text-bone-400">Current Camps</p>
                    <span className={cn("text-label border px-2 py-1", STATUS_CLASS.open)}>
                      {STATUS_LABEL.open}
                    </span>
                  </div>

                  <h3 className="text-display-md mt-6 text-bone-100">{summerCamp.title}</h3>
                  <p className="text-label mt-3 text-red-400">{summerCamp.strapline}</p>

                  <p className="text-body mt-6 max-w-[62ch] text-bone-400">{summerCamp.intro}</p>

                  <dl className="mt-8 border-t border-line">
                    {[
                      ["Ages", summerCamp.ages],
                      ["Times", summerCamp.times],
                      ["Venue", summerCamp.venue],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="grid gap-1 border-b border-line py-3 sm:grid-cols-[minmax(0,auto)_minmax(0,1fr)] sm:items-baseline sm:gap-6"
                      >
                        <dt className="text-label text-bone-400">{label}</dt>
                        <dd className="text-sm text-bone-100 sm:text-right">{value}</dd>
                      </div>
                    ))}
                  </dl>

                  {/* Prices as three tiles rather than a table — a table of
                      three rows and four columns is unreadable at 375px. */}
                  <ul className="mt-8 grid gap-3 sm:grid-cols-3">
                    {summerCamp.pricing.map((tier) => (
                      <li key={tier.name} className="border border-line bg-ink-950 p-4">
                        <p className="text-label text-bone-400">{tier.name}</p>
                        <p className="mt-2 font-display text-2xl leading-none text-bone-100">
                          {tier.price}
                        </p>
                        <p className="text-label mt-1 text-bone-600">{tier.unit}</p>
                        <p className="mt-3 text-xs leading-snug text-bone-400">{tier.detail}</p>
                        {"note" in tier && tier.note && (
                          <p className="text-label mt-2 text-red-400">{tier.note}</p>
                        )}
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                    {summerCamp.extras.map((extra) => (
                      <li key={extra} className="text-label text-bone-400">
                        {extra}
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {summerCamp.discounts.map((discount) => (
                      <li
                        key={discount}
                        className="text-label border border-gold-400 px-3 py-1.5 text-gold-400"
                      >
                        {discount}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <ActionAnchor href={BOOKING.camps} target="_blank" rel="noreferrer">
                      Book a Camp
                    </ActionAnchor>
                    <ActionAnchor
                      href={whatsappFor("the Summer Cricket Camp")}
                      target="_blank"
                      rel="noreferrer"
                      variant="secondary"
                    >
                      Ask on WhatsApp
                    </ActionAnchor>
                  </div>
                </div>

                <div>
                  {/* The poster sits in the right-hand column on desktop but
                      AFTER the details in DOM order, so a phone gets the
                      bookable facts before a large image.

                      Wrapped in a link that opens the full-size file. A camp
                      poster is dense text — prices, nine week-ranges, an
                      address — and scaled into a 335px column on a phone none
                      of it is legible. The link is the difference between the
                      poster being decoration and being readable.

                      aspect-[210/297] reserves A4 space before the image
                      loads so the week list below does not jump down when it
                      arrives. object-contain rather than cover, so artwork at a
                      slightly different ratio letterboxes instead of having its
                      edges cropped off. */}
                  {!posterFailed && (
                    <a
                      href={summerCamp.posterSrc}
                      target="_blank"
                      rel="noreferrer"
                      className="group block"
                    >
                      <img
                        src={summerCamp.posterSrc}
                        alt={summerCamp.posterAlt}
                        width={1290}
                        height={1819}
                        // Lazy, and it sits below the fold, so it never delays
                        // first paint. The file is a 444KB JPEG — acceptable,
                        // but a WebP export would be roughly a third of that.
                        loading="lazy"
                        decoding="async"
                        // The artwork is not in the repo yet. Rather than leave
                        // a broken-image icon on the homepage, the poster
                        // removes itself and the text details carry the section.
                        onError={() => setPosterFailed(true)}
                        className="aspect-[210/297] w-full border border-line bg-ink-950 object-contain transition-colors duration-200 ease-brand group-hover:border-red-500"
                      />
                      <span className="link-wipe mt-3 inline-block text-sm">
                        View the full poster <span aria-hidden="true">→</span>
                      </span>
                    </a>
                  )}

                  {/* A neutral label, not a countdown.
                      This used to read "N weeks remaining". It was computed, so
                      it never needed a manual weekly update — but it read like a
                      promise the site was tracking availability week by week,
                      and a shrinking number nudges toward scarcity for no real
                      benefit. Past weeks still drop off the list silently; the
                      site just no longer narrates it. */}
                  <p className="text-label mt-6 text-bone-400">Camp weeks</p>

                  <ul className="mt-3 grid grid-cols-1 border-t border-line sm:grid-cols-2 lg:grid-cols-1">
                    {weeks.map((week) => (
                      <li
                        key={week.label}
                        className="grid grid-cols-[minmax(0,auto)_minmax(0,1fr)] items-baseline gap-4 border-b border-line py-3"
                      >
                        <span className="text-label text-red-400">{week.label}</span>
                        <span className="text-right text-sm text-bone-100">{week.dates}</span>
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-8 border-t border-line">
                    {summerCamp.includes.map((item) => (
                      <li key={item} className="border-b border-line py-3 text-sm text-bone-400">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      )}

      {/* ---- everything that is enquiry-only ---- */}
      {events.length > 0 && (
        <ul
          className={cn(
            "mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[var(--gutter)] pb-4",
            "lg:shell lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:pb-0",
          )}
        >
          {events.map((event, i) => (
            <li
              key={event.title}
              className="w-[78vw] shrink-0 snap-start sm:w-[46vw] lg:w-auto lg:shrink"
            >
              <Reveal delay={i * 0.04}>
                <article className="flex h-full flex-col gap-4 border border-line bg-ink-900 p-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-label text-bone-400">{event.category}</p>
                    <span
                      className={cn(
                        "text-label shrink-0 border px-2 py-1",
                        STATUS_CLASS[event.status],
                      )}
                    >
                      {STATUS_LABEL[event.status]}
                    </span>
                  </div>

                  <h3 className="font-display text-xl leading-tight text-bone-100">
                    {event.title}
                  </h3>
                  <p className="text-body text-bone-400">{event.detail}</p>

                  <p className="text-label mt-auto border-t border-line pt-4 text-bone-100">
                    {event.when}
                  </p>

                  {/* An on-page hash link must NOT open in a new tab, and must
                      not carry rel="noreferrer" — both only make sense for
                      off-site links. Resolved separately for that reason. */}
                  {event.hash ? (
                    <ActionAnchor href={`#${event.hash}`} variant="secondary" block>
                      {event.ctaLabel ?? "Find out more"}
                    </ActionAnchor>
                  ) : (
                    ctaHref(event) && (
                      <ActionAnchor
                        href={ctaHref(event)!}
                        target="_blank"
                        rel="noreferrer"
                        variant="secondary"
                        block
                      >
                        {event.ctaLabel ?? "Find out more"}
                      </ActionAnchor>
                    )
                  )}
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
