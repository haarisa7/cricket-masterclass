import { useEffect, useState } from "react";

import { summerCamp, type CampWeek } from "@/data/events";

/**
 * The camp's ages, times, venue, prices, week dates and poster.
 *
 * SHARED BY TWO PLACES — the Cricket Camps tab on the homepage and the
 * /programmes/cricket-camps page. It lives here rather than in either of them
 * because a parent who lands on the programme page from search needs the same
 * dates and prices as one who found the homepage; duplicating the markup would
 * guarantee the two drift apart the first time a price changes.
 *
 * Everything comes from `summerCamp` in src/data/events.ts, which is also the
 * file to edit when a new poster arrives.
 */

/** Camp weeks still to come. */
function useUpcomingWeeks(): readonly CampWeek[] {
  const [today, setToday] = useState<string | null>(null);

  useEffect(() => {
    // Local date, not UTC — a camp in Chiswick ends at the end of the day in
    // Chiswick, and toISOString() would roll over an hour early through BST.
    const now = new Date();
    setToday(
      `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(
        now.getDate(),
      ).padStart(2, "0")}`,
    );
  }, []);

  // Read after mount, not during render: server and browser can disagree about
  // today's date, and a markup difference between them is a hydration error.
  // First paint shows every week; the list narrows a tick later. Finished weeks
  // therefore retire without anyone editing anything.
  if (today === null) return summerCamp.weeks;
  return summerCamp.weeks.filter((week) => week.endsOn >= today);
}

export function CampDetail() {
  const weeks = useUpcomingWeeks();
  const [posterFailed, setPosterFailed] = useState(false);

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-12">
      <div>
        {/* Ages / Times / Venue first. These are the three things a parent
            checks before anything else — right age, do the hours work around a
            working day, how far is it. A price is no use if any answer is no. */}
        <dl className="border-t border-line">
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

        {/* Prices as tiles, not a table — a three-row, four-column table is
            unreadable at 375px. */}
        <ul className="mt-8 grid gap-3 sm:grid-cols-3">
          {summerCamp.pricing.map((tier) => (
            <li key={tier.name} className="border border-line bg-ink-950 p-4">
              <p className="text-label text-bone-400">{tier.name}</p>
              <p className="mt-2 font-display text-2xl leading-none text-bone-100">{tier.price}</p>
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

        {weeks.length > 0 && (
          <>
            <p className="text-label mt-8 text-bone-400">Camp weeks</p>
            <ul className="mt-3 grid border-t border-line sm:grid-cols-2">
              {weeks.map((week) => (
                <li
                  key={week.label}
                  className="grid grid-cols-[minmax(0,auto)_minmax(0,1fr)] items-baseline gap-4 border-b border-line py-3 sm:pr-6"
                >
                  <span className="text-label text-red-400">{week.label}</span>
                  <span className="text-right text-sm text-bone-100">{week.dates}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      {!posterFailed && (
        <a href={summerCamp.posterSrc} target="_blank" rel="noreferrer" className="group block">
          {/* aspect-[210/297] reserves A4 space so nothing jumps as it loads.
              Linked because a camp poster is dense text — prices, nine week
              ranges, an address — and is not legible scaled into a column. */}
          <img
            src={summerCamp.posterSrc}
            alt={summerCamp.posterAlt}
            width={1290}
            height={1819}
            loading="lazy"
            decoding="async"
            onError={() => setPosterFailed(true)}
            className="aspect-[210/297] w-full border border-line bg-ink-950 object-contain transition-colors duration-200 ease-brand group-hover:border-red-500"
          />
          <span className="link-wipe mt-3 inline-block text-sm">
            View the full poster <span aria-hidden="true">→</span>
          </span>
        </a>
      )}
    </div>
  );
}
