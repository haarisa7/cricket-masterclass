import { useQuery } from "@tanstack/react-query";

import { ActionAnchor } from "@/components/ui/action";
import { whatsappFor } from "@/data/site";
import {
  type LiveProgramme,
  dateLabel,
  genderLabel,
  getLiveProgrammes,
  money,
  posterUrl,
} from "@/data/live-programmes";

function addDays(date: string, days: number) {
  const value = new Date(`${date}T12:00:00`);
  value.setDate(value.getDate() + days);
  return value.toISOString().slice(0, 10);
}

function formatTime(value: string) {
  const [hour, minute = "00"] = value.split(":").map(Number);
  const suffix = hour >= 12 ? "pm" : "am";
  const displayHour = hour % 12 || 12;
  return `${displayHour}${minute === 0 ? "" : `:${String(minute).padStart(2, "0")}`}${suffix}`;
}

function minutes(value: string) {
  const [hour, minute = "0"] = value.split(":").map(Number);
  return hour * 60 + minute;
}

function timeFromMinutes(value: number) {
  return `${String(Math.floor(value / 60)).padStart(2, "0")}:${String(value % 60).padStart(2, "0")}`;
}

function priceTiming(event: LiveProgramme, label: string) {
  const slot = event.time_slots.find((item) => item.start_time && item.end_time);
  if (!slot?.start_time || !slot.end_time) return null;
  const start = minutes(slot.start_time);
  const end = minutes(slot.end_time);
  const full = `${formatTime(slot.start_time)} – ${formatTime(slot.end_time)}`;
  const normalised = label.toLowerCase();
  if (normalised.includes("half")) {
    const midpoint = start + Math.floor((end - start) / 2);
    return `${formatTime(slot.start_time)} – ${formatTime(timeFromMinutes(midpoint))} or ${formatTime(timeFromMinutes(midpoint))} – ${formatTime(slot.end_time)}`;
  }
  if (normalised.includes("week")) {
    const days =
      event.starts_on && event.ends_on
        ? Math.floor(
            (new Date(`${event.ends_on}T12:00:00`).getTime() -
              new Date(`${event.starts_on}T12:00:00`).getTime()) /
              86_400_000,
          ) + 1
        : null;
    const weekdays =
      event.starts_on && event.ends_on
        ? `${new Intl.DateTimeFormat("en-GB", { weekday: "long" }).format(new Date(`${event.starts_on}T12:00:00`))} – ${new Intl.DateTimeFormat("en-GB", { weekday: "long" }).format(new Date(`${event.ends_on}T12:00:00`))}`
        : null;
    return [weekdays, days ? `${days} full day${days === 1 ? "" : "s"}` : null, full]
      .filter(Boolean)
      .join(", ");
  }
  return full;
}

/** Derives the familiar Week 1 / Week 2 list from the CRM event date range. */
function campWeeks(event: LiveProgramme) {
  if (!event.starts_on) return [];
  const lastDay = event.ends_on ?? event.starts_on;
  const now = new Date();
  const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(
    now.getDate(),
  ).padStart(2, "0")}`;
  const weeks: { label: string; dates: string }[] = [];
  let start = event.starts_on;
  let index = 1;
  while (start <= lastDay) {
    const end = addDays(start, 6) > lastDay ? lastDay : addDays(start, 6);
    if (end >= today) weeks.push({ label: `Week ${index}`, dates: dateLabel(start, end) ?? "" });
    start = addDays(start, 7);
    index += 1;
  }
  return weeks;
}

function CampDetails({ event }: { event: LiveProgramme }) {
  const poster = posterUrl(event.poster_path);
  const mobilePoster = posterUrl(event.mobile_poster_path);
  const session = event.time_slots.find((item) => item.start_time && item.end_time);
  const times = event.time_slots
    .map((slot) =>
      [
        slot.label,
        slot.start_time && `${slot.start_time}${slot.end_time ? ` – ${slot.end_time}` : ""}`,
      ]
        .filter(Boolean)
        .join(" · "),
    )
    .filter(Boolean)
    .join(" / ");
  const weeks = campWeeks(event);
  const ages = [genderLabel(event.gender), event.ages].filter(Boolean).join(", ");
  const extras = [
    ...event.camp_extras.map((item) =>
      [item.label, money(item.price_pence), item.note].filter(Boolean).join(", "),
    ),
    event.camp_drop_off.early?.available &&
      [
        "Early drop-off",
        event.camp_drop_off.early.time && session?.start_time
          ? `${formatTime(event.camp_drop_off.early.time)} – ${formatTime(session.start_time)}`
          : event.camp_drop_off.early.time && formatTime(event.camp_drop_off.early.time),
        money(event.camp_drop_off.early.price_pence),
      ]
        .filter(Boolean)
        .join(", "),
    event.camp_drop_off.late?.available &&
      [
        "Late pick-up",
        event.camp_drop_off.late.time && session?.end_time
          ? `${formatTime(session.end_time)} – ${formatTime(event.camp_drop_off.late.time)}`
          : event.camp_drop_off.late.time && formatTime(event.camp_drop_off.late.time),
        money(event.camp_drop_off.late.price_pence),
      ]
        .filter(Boolean)
        .join(", "),
  ].filter(Boolean) as string[];

  return (
    <article className="border-t border-line pt-10 first:border-t-0 first:pt-0">
      <div className="flex flex-wrap items-center gap-3">
        <p className="text-label text-bone-400">Current camps</p>
        <span className="text-label border border-red-500 px-2 py-1 text-red-400">
          {event.status === "live"
            ? "Booking now"
            : event.status === "sold_out"
              ? "Sold out"
              : "Coming soon"}
        </span>
      </div>
      <h3 className="text-display-md mt-6 text-bone-100">{event.title}</h3>
      <p className="text-label mt-3 text-red-400">Learn. Improve. Play. Enjoy.</p>
      <p className="text-body mt-6 text-bone-400">
        Top quality coaching, excellent facilities and a fun, safe environment for every cricketer
        to learn, improve and thrive.
      </p>
      <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-12">
        <div>
          <dl className="border-t border-line">
            {[
              ["Ages", ages],
              ["Times", times || dateLabel(event.starts_on, event.ends_on)],
              ["Venue", event.venue],
            ]
              .filter((row): row is [string, string] => Boolean(row[1]))
              .map(([label, value]) => (
                <div
                  key={label}
                  className="grid gap-1 border-b border-line py-3 sm:grid-cols-[minmax(0,auto)_minmax(0,1fr)] sm:items-baseline sm:gap-6"
                >
                  <dt className="text-label text-bone-400">{label}</dt>
                  <dd className="text-sm text-bone-100 sm:text-right">{value}</dd>
                </div>
              ))}
          </dl>

          {!!event.camp_pricing_tiers.length && (
            <ul className="mt-8 grid gap-3 sm:grid-cols-3">
              {event.camp_pricing_tiers.map((tier) => (
                <li key={tier.label} className="border border-line bg-ink-950 p-4">
                  <p className="text-label text-bone-400">{tier.label}</p>
                  {money(tier.price_pence) && (
                    <p className="mt-2 font-display text-2xl leading-none text-bone-100">
                      {money(tier.price_pence)}
                    </p>
                  )}
                  {tier.note && <p className="text-label mt-3 text-red-400">{tier.note}</p>}
                  {priceTiming(event, tier.label) && (
                    <p className="mt-3 text-xs leading-snug text-bone-400">
                      {priceTiming(event, tier.label)}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          )}

          {!!extras.length && (
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {extras.map((extra) => (
                <li key={extra} className="text-label text-bone-400">
                  {extra}
                </li>
              ))}
            </ul>
          )}
          {!!event.camp_discounts.length && (
            <ul className="mt-6 flex flex-wrap gap-2">
              {event.camp_discounts.map((discount) => (
                <li
                  key={discount.label}
                  className="text-label border border-gold-400 px-3 py-1.5 text-gold-400"
                >
                  {discount.description || discount.label}
                </li>
              ))}
            </ul>
          )}

          {!!event.included_items.length && (
            <ul className="mt-8 border-t border-line">
              {event.included_items.map((item) => (
                <li
                  key={item}
                  className="text-body flex gap-3 border-b border-line py-3 text-bone-100"
                >
                  <span className="text-red-400">—</span>
                  {item}
                </li>
              ))}
            </ul>
          )}
          {event.status === "live" && (
            <div className="mt-8 flex flex-wrap gap-4">
              <ActionAnchor
                href={event.cta_url || whatsappFor(`a place on ${event.title}`)}
                target="_blank"
                rel="noreferrer"
              >
                {event.cta_label || "Reserve a Place"}
              </ActionAnchor>
              {event.cta_url && (
                <ActionAnchor
                  href={whatsappFor(`a place on ${event.title}`)}
                  target="_blank"
                  rel="noreferrer"
                  variant="secondary"
                >
                  Ask on WhatsApp
                </ActionAnchor>
              )}
            </div>
          )}
          {event.status !== "live" && (
            <p className="text-label mt-8 text-bone-400">
              {event.status === "sold_out" ? "Sold out" : "Opening soon"}
              {event.spaces_note ? ` · ${event.spaces_note}` : ""}
            </p>
          )}
          {!!weeks.length && (
            <>
              <p className="text-label mt-8 text-bone-400">Camp weeks</p>
              <ul className="mt-3 border-t border-line">
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
            </>
          )}
        </div>
        <div>
          {poster && (
            <picture className="block">
              <source media="(max-width: 767px)" srcSet={mobilePoster ?? poster} />
              <img
                src={poster}
                alt=""
                loading="lazy"
                decoding="async"
                className="aspect-[210/297] w-full border border-line bg-ink-950 object-contain"
              />
            </picture>
          )}
          {poster && (
            <p className="link-wipe mt-3 text-sm">
              View the full poster <span aria-hidden="true">→</span>
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

export function LiveCampDetails() {
  const query = useQuery({
    queryKey: ["live-programmes", "camp", "details"],
    queryFn: () => getLiveProgrammes("camp"),
  });
  if (query.isLoading) return <p className="text-body text-bone-400">Loading current camps…</p>;
  if (query.isError)
    return <p className="text-body text-bone-400">Current camps are unavailable right now.</p>;
  if (!query.data?.length)
    return <p className="text-body text-bone-400">No current camps are listed at the moment.</p>;
  return (
    <div className="grid gap-16">
      {query.data.map((event) => (
        <CampDetails key={event.id} event={event} />
      ))}
    </div>
  );
}
