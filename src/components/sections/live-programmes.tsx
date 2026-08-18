import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

import { ActionAnchor } from "@/components/ui/action";
import { whatsappFor } from "@/data/site";
import {
  type LiveProgramme,
  type Price,
  type ProgrammeType,
  dateLabel,
  genderLabel,
  getLiveProgrammes,
  money,
  nearestSlot,
  posterUrl,
  typeLabel,
} from "@/data/live-programmes";

function Status({ status }: { status: LiveProgramme["status"] }) {
  return (
    <span className="text-label border border-line px-2 py-1 text-bone-400">
      {status === "live" ? "Booking now" : status === "sold_out" ? "Sold out" : "Coming soon"}
    </span>
  );
}
function Cta({ event }: { event: LiveProgramme }) {
  if (event.status !== "live")
    return (
      <span className="text-label text-bone-400">
        {event.status === "sold_out" ? "Sold out" : "Opening soon"}
      </span>
    );
  return (
    <ActionAnchor
      href={event.cta_url || whatsappFor(`a place on ${event.title}`)}
      target="_blank"
      rel="noreferrer"
    >
      {event.cta_label || "Book now"}
    </ActionAnchor>
  );
}
function Poster({ event, priority = false }: { event: LiveProgramme; priority?: boolean }) {
  const desktop = posterUrl(event.poster_path);
  const mobile = posterUrl(event.mobile_poster_path);
  if (!desktop) return null;
  return (
    <picture className="block overflow-hidden border border-line bg-ink-950">
      <source media="(max-width: 767px)" srcSet={mobile ?? desktop} />
      <img
        src={desktop}
        alt=""
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="aspect-[4/5] w-full object-contain"
      />
    </picture>
  );
}
function SpaceNote({ event }: { event: LiveProgramme }) {
  const value =
    event.spaces_note ??
    (event.spaces_available !== null
      ? `${event.spaces_available}${event.spaces_total !== null ? ` of ${event.spaces_total}` : ""} spaces available`
      : null);
  return value ? <p className="text-label text-gold-400">{value}</p> : null;
}
function Dates({ event }: { event: LiveProgramme }) {
  if (!event.time_slots?.length) return null;
  return (
    <section className="mt-10">
      <h3 className="text-label text-bone-400">Dates &amp; times</h3>
      <ul className="mt-4 border-t border-line">
        {event.time_slots.map((slot, i) => (
          <li
            key={`${slot.date}-${slot.start_time}-${i}`}
            className="grid gap-1 border-b border-line py-3 sm:grid-cols-[1fr_auto]"
          >
            <span className="text-sm text-bone-100">
              {slot.label || dateLabel(slot.date, slot.date)}
            </span>
            <span className="text-sm text-bone-400">
              {[
                slot.date && dateLabel(slot.date, slot.date),
                slot.start_time && `${slot.start_time}${slot.end_time ? `–${slot.end_time}` : ""}`,
              ]
                .filter(Boolean)
                .join(" · ")}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function GroupSummary({ event }: { event: LiveProgramme }) {
  if (event.programme_type !== "group") return null;
  const dates = event.group_dates_note || dateLabel(event.starts_on, event.ends_on);
  const schedule = event.group_schedule
    .map(
      (slot) =>
        `${slot.day}: ${slot.start_time}–${slot.end_time}${slot.note ? ` · ${slot.note}` : ""}`,
    )
    .join(" / ");
  const details = [dates && `Coaching block: ${dates}`, schedule, event.group_age_ability].filter(
    Boolean,
  );
  const needsConfirmation =
    !event.starts_on && !event.ends_on && !event.time_slots.length && !event.group_schedule.length;
  if (!details.length)
    return <p className="text-body mt-4 text-bone-400">Dates, times and prices to be confirmed</p>;
  return (
    <>
      <ul className="mt-4 border-t border-line">
        {details.map((detail) => (
          <li key={detail} className="text-sm border-b border-line py-3 text-bone-100">
            {detail}
          </li>
        ))}
      </ul>
      {needsConfirmation && (
        <p className="text-body mt-4 text-bone-400">Dates, times and prices to be confirmed</p>
      )}
    </>
  );
}

export function LiveProgrammeCard({
  event,
  priority,
}: {
  event: LiveProgramme;
  priority?: boolean;
}) {
  const slot = nearestSlot(event.time_slots ?? []);
  const when = slot
    ? [
        dateLabel(slot.date, slot.date),
        slot.start_time && `${slot.start_time}${slot.end_time ? `–${slot.end_time}` : ""}`,
      ]
        .filter(Boolean)
        .join(" · ")
    : dateLabel(event.starts_on, event.ends_on);
  return (
    <article className="grid gap-6 border-t border-line pt-6 md:grid-cols-[220px_1fr]">
      <Poster event={event} priority={priority} />
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <p className="text-label text-red-400">{typeLabel(event.programme_type)}</p>
          <Status status={event.status} />
        </div>
        <h3 className="text-display-md mt-4 text-bone-100">{event.title}</h3>
        {event.short_summary && (
          <p className="text-body mt-3 text-bone-400">{event.short_summary}</p>
        )}
        <GroupSummary event={event} />
        <dl className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-bone-100">
          {when && (
            <div>
              <dt className="sr-only">Dates</dt>
              <dd>{when}</dd>
            </div>
          )}
          {event.venue && (
            <div>
              <dt className="sr-only">Venue</dt>
              <dd>{event.venue}</dd>
            </div>
          )}
          {event.ages && (
            <div>
              <dt className="sr-only">Ages</dt>
              <dd>Ages {event.ages}</dd>
            </div>
          )}
          {genderLabel(event.gender) && (
            <div>
              <dt className="sr-only">Eligibility</dt>
              <dd>{genderLabel(event.gender)}</dd>
            </div>
          )}
        </dl>
        <div className="mt-5 flex flex-wrap items-center gap-6">
          <Cta event={event} />
          <SpaceNote event={event} />
        </div>
      </div>
    </article>
  );
}

export function ProgrammeEvents({ type }: { type: ProgrammeType }) {
  const query = useQuery({
    queryKey: ["live-programmes", type],
    queryFn: () => getLiveProgrammes(type),
  });
  if (query.isLoading) return <p className="text-body text-bone-400">Loading current events…</p>;
  if (query.isError)
    return (
      <p className="text-body text-bone-400">
        Current events are unavailable right now. Please try again shortly.
      </p>
    );
  if (!query.data?.length)
    return type === "group" ? (
      <div className="border-l-2 border-red-500 pl-5">
        <p className="text-label text-red-400">What’s coming</p>
        <p className="text-body mt-2 text-bone-400">
          New group coaching blocks will be announced here. Register your interest and we’ll let you
          know when dates open.
        </p>
      </div>
    ) : (
      <p className="text-body text-bone-400">No current events are listed at the moment.</p>
    );
  return (
    <div className="grid gap-10">
      {query.data.map((event, i) => (
        <LiveProgrammeCard key={event.id} event={event} priority={i === 0} />
      ))}
    </div>
  );
}

/** Compact CRM-powered updates for the homepage programme tabs. */
export function HomepageProgrammeUpdates({ type }: { type: ProgrammeType }) {
  const query = useQuery({
    queryKey: ["live-programmes", "homepage", type],
    queryFn: () => getLiveProgrammes(type),
  });

  if (query.isLoading) return <p className="text-label mt-8 text-bone-400">Loading updates…</p>;
  if (query.isError)
    return <p className="text-label mt-8 text-bone-400">Updates are unavailable right now.</p>;
  if (!query.data?.length)
    return type === "group" ? (
      <div className="mt-8 border-l-2 border-red-500 pl-5">
        <p className="text-label text-red-400">What’s coming</p>
        <p className="text-body mt-2 text-bone-400">
          New group sessions will be published here when dates are confirmed.
        </p>
      </div>
    ) : null;

  return (
    <section className="mt-8 border-t border-line pt-6" aria-label="Current programme updates">
      <p className="text-label text-bone-400">Current updates</p>
      <ul className="mt-3 grid gap-3">
        {query.data.map((event) => {
          const slot = nearestSlot(event.time_slots ?? []);
          const when = slot
            ? [
                dateLabel(slot.date, slot.date),
                slot.start_time && `${slot.start_time}${slot.end_time ? `–${slot.end_time}` : ""}`,
              ]
                .filter(Boolean)
                .join(" · ")
            : dateLabel(event.starts_on, event.ends_on);
          return (
            <li key={event.id} className="border border-line bg-ink-950 p-4">
              <div className="flex flex-wrap items-center gap-3">
                <Status status={event.status} />
                {when && <span className="text-label text-bone-400">{when}</span>}
              </div>
              <h4 className="mt-3 text-lg font-medium text-bone-100">{event.title}</h4>
              {event.short_summary && (
                <p className="mt-2 text-sm text-bone-400">{event.short_summary}</p>
              )}
              <GroupSummary event={event} />
              {(event.venue || event.ages || genderLabel(event.gender)) && (
                <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-3 text-sm text-bone-100">
                  {event.venue && (
                    <div>
                      <dt className="sr-only">Venue</dt>
                      <dd>{event.venue}</dd>
                    </div>
                  )}
                  {event.ages && (
                    <div>
                      <dt className="sr-only">Ages</dt>
                      <dd>Ages {event.ages}</dd>
                    </div>
                  )}
                  {genderLabel(event.gender) && (
                    <div>
                      <dt className="sr-only">Eligibility</dt>
                      <dd>{genderLabel(event.gender)}</dd>
                    </div>
                  )}
                </dl>
              )}
              <div className="mt-4 flex flex-wrap items-center gap-5">
                <Cta event={event} />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export function LiveProgrammeDetail({ event }: { event: LiveProgramme }) {
  useEffect(() => {
    document.title = `${event.seo_title || event.title} — Masterclass Cricket`;
    const tag = document.querySelector('meta[name="description"]');
    if (tag)
      tag.setAttribute("content", event.seo_description || event.short_summary || event.title);
  }, [event]);
  const details = [
    ["Venue", event.venue],
    ["Ages", event.ages],
    ["Eligibility", genderLabel(event.gender)],
    ["Dates", dateLabel(event.starts_on, event.ends_on)],
  ].filter((row): row is [string, string] => Boolean(row[1]));
  return (
    <>
      <section className="section-y border-b border-line">
        <div className="shell grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <div>
            <p className="text-label text-red-400">{typeLabel(event.programme_type)}</p>
            <div className="mt-4">
              <Status status={event.status} />
            </div>
            <h1 className="text-display-lg mt-6 text-bone-100">{event.title}</h1>
            {event.short_summary && (
              <p className="text-body-lg mt-6 text-bone-400">{event.short_summary}</p>
            )}
            <div className="mt-8">
              <Cta event={event} />
            </div>
          </div>
          <Poster event={event} priority />
        </div>
      </section>
      <section className="section-y">
        <div className="shell grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
          <div>
            <dl className="border-t border-line">
              {details.map(([label, value]) => (
                <div
                  key={label}
                  className="grid gap-1 border-b border-line py-3 sm:grid-cols-[auto_1fr] sm:gap-6"
                >
                  <dt className="text-label text-bone-400">{label}</dt>
                  <dd className="text-sm text-bone-100 sm:text-right">{value}</dd>
                </div>
              ))}
            </dl>
            <SpaceNote event={event} />
            <Dates event={event} />
            <TypeDetails event={event} />
          </div>
          <aside>
            <List title="Included" values={event.included_items} />
            <List
              title="Coaches"
              values={event.coaches.map(
                (coach) => `${coach.name}${coach.role ? ` — ${coach.role}` : ""}`,
              )}
            />
          </aside>
        </div>
      </section>
    </>
  );
}
function List({ title, values }: { title: string; values: string[] }) {
  if (!values.length) return null;
  return (
    <section className="mb-10">
      <h2 className="text-label text-bone-400">{title}</h2>
      <ul className="mt-4 border-t border-line">
        {values.map((value) => (
          <li key={value} className="text-body border-b border-line py-3 text-bone-100">
            {value}
          </li>
        ))}
      </ul>
    </section>
  );
}
function TypeDetails({ event }: { event: LiveProgramme }) {
  if (event.programme_type === "camp")
    return (
      <>
        <PriceList title="Pricing" values={event.camp_pricing_tiers} />
        <List
          title="Extras"
          values={event.camp_extras.map((x) =>
            [x.label, money(x.price_pence), x.note].filter(Boolean).join(" · "),
          )}
        />
        <List
          title="Discounts"
          values={event.camp_discounts.map((x) =>
            [
              x.label,
              x.description,
              money(x.amount_pence),
              x.percent !== null ? `${x.percent}%` : null,
            ]
              .filter(Boolean)
              .join(" · "),
          )}
        />
      </>
    );
  if (event.programme_type === "group")
    return (
      <>
        <List
          title="Group schedule"
          values={event.group_schedule.map(
            (x) => `${x.day}: ${x.start_time}–${x.end_time}${x.note ? ` · ${x.note}` : ""}`,
          )}
        />
        <List
          title="Group details"
          values={[
            ["Block", event.group_block_name],
            ["Schedule", event.group_dates_note],
            ["Age & ability", event.group_age_ability],
            ["Price", money(event.group_price_pence)],
          ]
            .filter((x): x is [string, string] => Boolean(x[1]))
            .map(([a, b]) => `${a}: ${b}`)}
        />
      </>
    );
  return (
    <>
      <List
        title="Availability"
        values={event.oto_availability.map(
          (x) => `${x.day}: ${x.window}${x.note ? ` · ${x.note}` : ""}`,
        )}
      />
      <List
        title="One-to-one details"
        values={[
          ["Season", event.oto_seasonal_availability],
          ["Ages", event.oto_age_range],
          ["From", money(event.oto_from_price_pence)],
          ["Enquiries", event.oto_enquiry_text],
          [
            "Venues",
            event.oto_venues.map((x) => `${x.name}${x.note ? ` (${x.note})` : ""}`).join(", ") ||
              null,
          ],
        ]
          .filter((x): x is [string, string] => Boolean(x[1]))
          .map(([a, b]) => `${a}: ${b}`)}
      />
      <PriceList
        title="Session formats"
        values={event.oto_session_formats.map((x) => ({
          label: x.name,
          price_pence: x.price_pence,
          note:
            [x.duration_minutes ? `${x.duration_minutes} mins` : null, x.note]
              .filter(Boolean)
              .join(" · ") || null,
        }))}
      />
    </>
  );
}
function PriceList({ title, values }: { title: string; values: Price[] }) {
  if (!values.length) return null;
  return (
    <section className="mt-10">
      <h2 className="text-label text-bone-400">{title}</h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {values.map((value) => (
          <li key={value.label} className="border border-line p-4">
            <p className="text-label text-bone-400">{value.label}</p>
            {money(value.price_pence) && (
              <p className="mt-2 font-display text-2xl text-bone-100">{money(value.price_pence)}</p>
            )}
            {value.note && <p className="mt-2 text-sm text-bone-400">{value.note}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}
