import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";

import { CampDetail } from "@/components/sections/camp-detail";
import { PageShell } from "@/components/sections/page-shell";
import { ActionAnchor } from "@/components/ui/action";
import { FieldDecor } from "@/components/ui/field-decor";
import { Reveal, RevealHeading, RevealImage } from "@/components/ui/reveal";
import { availability, type Availability, type EventStatus } from "@/data/events";
import { programmes, programmesBySlug, type Programme } from "@/data/pages";
import { coreServices } from "@/data/services";
import { BOOKING, whatsappFor } from "@/data/site";
import { cn } from "@/lib/utils";

/**
 * PROG-01 / GRP-01 — permanent redirects for withdrawn and renamed programmes.
 *
 * Handled in the router, not a host redirects file. This app deploys to
 * Cloudflare Workers via Nitro, where a static `_redirects` file is never read
 * — it would have silently done nothing. Doing it here works on any host and,
 * unlike a config file, is covered by the typecheck and testable locally.
 *
 * Every key below was a live, indexed URL before the client revision pass.
 * Each points at the closest surviving programme so an old link still lands
 * somewhere relevant.
 */
const RETIRED_SLUGS: Record<string, string> = {
  // Renamed.
  "small-group": "group-sessions",
  "performance-camps": "cricket-camps",
  // Withdrawn.
  "academy-sessions": "group-sessions",
  "performance-clinics": "one-to-one",
  "mind-mapping": "one-to-one",
  "approved-coach": "schools",
};

export const Route = createFileRoute("/programmes/$slug")({
  loader: ({ params }) => {
    const retiredTo = RETIRED_SLUGS[params.slug];
    if (retiredTo) {
      throw redirect({
        to: "/programmes/$slug",
        params: { slug: retiredTo },
        statusCode: 301,
      });
    }

    const programme = programmesBySlug.get(params.slug);
    if (!programme) throw notFound();
    return { programme };
  },
  head: ({ loaderData }) => {
    const programme = loaderData?.programme;
    if (!programme) return {};
    const title = `${programme.name} — Masterclass Cricket`;
    // First paragraph only: the full intro is now up to four paragraphs and a
    // meta description is truncated by search engines around 155 characters.
    const description = `${programme.promise} ${programme.intro[0]}`.slice(0, 300);
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProgrammePage,
});

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
 * Current availability for the three core programmes.
 *
 * Read from the same `availability` map the homepage tabs use, so a parent gets
 * the same answer whichever route they arrive by — a page saying "Book a Place"
 * while the homepage says "Coming soon" is the kind of contradiction that costs
 * trust. Returns undefined for the five secondary programmes, which have no
 * scheduled blocks to report.
 */
function availabilityFor(slug: string): Availability | undefined {
  return (availability as Record<string, Availability | undefined>)[slug];
}

/**
 * Camps have a real checkout; every other programme opens WhatsApp.
 *
 * The WhatsApp topic comes from `availability` where it sets one, so an enquiry
 * about a programme that is not currently running arrives saying so.
 */
function bookingHref(programme: Programme): string {
  if (programme.booking === "camps") return BOOKING.camps;
  return whatsappFor(availabilityFor(programme.slug)?.whatsappTopic ?? programme.name);
}

/** Reuse the homepage photography where a programme has a matching card. */
function imageFor(slug: string) {
  return coreServices.find((service) => service.detailsHref === `/programmes/${slug}`);
}

function ProgrammePage() {
  const { programme } = Route.useLoaderData();
  const hero = imageFor(programme.slug);
  const others = programmes.filter((p) => p.slug !== programme.slug).slice(0, 4);
  const avail = availabilityFor(programme.slug);

  return (
    <PageShell>
      {/* ---- masthead ---- */}
      <section className="relative overflow-hidden border-b border-line">
        <FieldDecor preset="quiet" />

        <div className="shell relative z-10 pb-24 pt-40 md:pt-48">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-label text-bone-400">
              <span className="text-red-400">{programme.tier}</span> / Programme
            </p>

            {/* Current status, on the page as well as the homepage tab. A parent
                arriving here from search never sees the homepage, so without
                this they would read a full sales page for a programme that has
                no sessions running. */}
            {avail && (
              <span
                className={cn("text-label shrink-0 border px-2 py-1", STATUS_CLASS[avail.status])}
              >
                {STATUS_LABEL[avail.status]}
              </span>
            )}
          </div>

          <RevealHeading
            as="h1"
            className="text-display-lg mt-8 max-w-[18ch] text-bone-100"
            lines={[programme.heading ?? programme.name]}
          />

          <p className="text-body-lg mt-8 max-w-[62ch] text-bone-100">{programme.promise}</p>

          {/* Up to four paragraphs since 1TO1-01 / GRP-02 / CAMP-02. Capped at
              a 62ch measure — at the section's full width the longer intros
              ran to well over 100 characters a line on a desktop monitor. */}
          <div className="mt-6 flex max-w-[62ch] flex-col gap-4">
            {programme.intro.map((paragraph) => (
              <p key={paragraph} className="text-body text-bone-400">
                {paragraph}
              </p>
            ))}
          </div>

          {/* When it is actually on. Same source as the homepage tab. */}
          {avail && (
            <p className="text-label mt-8 max-w-[62ch] border-y border-line py-3 text-bone-100">
              {avail.when}
            </p>
          )}

          {/* The single filled CTA for this page. Its label comes from
              `availability` where that overrides it, so a programme with no
              sessions running says "Register Your Interest" rather than
              "Join a Group on WhatsApp". */}
          <div className="mt-10 flex flex-wrap items-center gap-8">
            <ActionAnchor href={bookingHref(programme)} target="_blank" rel="noreferrer">
              {avail?.ctaLabel ?? programme.ctaLabel}
            </ActionAnchor>
            <Link to="/contact" className="link-wipe text-sm">
              Ask a question first <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ---- what's included + format ---- */}
      <section aria-labelledby="included-heading" className="section-y">
        <div className="shell grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <h2 id="included-heading" className="text-label text-bone-400">
              <span className="text-red-400">01</span> / What&rsquo;s Included
            </h2>

            <ul className="mt-8 border-t border-line">
              {programme.includes.map((item: string) => (
                <li
                  key={item}
                  className="text-body flex items-baseline gap-4 border-b border-line py-5 text-bone-100"
                >
                  <span aria-hidden="true" className="text-red-400">
                    —
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="text-label mt-16 text-bone-400">
              <span className="text-red-400">02</span> / Who It Suits
            </h2>
            <p className="text-body-lg mt-8 text-bone-400">{programme.suitedTo}</p>
          </div>

          <div>
            <h2 className="text-label text-bone-400">
              <span className="text-red-400">03</span> / Format
            </h2>

            {/* 1TO1-04: a `value` may be a list, which renders as chips.
                "1 Hour / 90 Minutes / 2 Hours / 3 Hours" as a single
                right-aligned string wrapped to three ragged lines on a phone.
                Chips wrap cleanly and read as four selectable options, which
                is what they are. */}
            <dl className="mt-8 border-t border-line">
              {programme.format.map((row) => (
                <div
                  key={row.label}
                  className="grid gap-2 border-b border-line py-5 sm:grid-cols-[minmax(0,auto)_minmax(0,1fr)] sm:items-baseline sm:gap-4"
                >
                  <dt className="text-label text-bone-400">{row.label}</dt>
                  <dd className="text-sm text-bone-100 sm:text-right">
                    {Array.isArray(row.value) ? (
                      <span className="flex flex-wrap gap-2 sm:justify-end">
                        {row.value.map((option) => (
                          <span
                            key={option}
                            className="border border-line-str px-3 py-1 text-xs text-bone-100"
                          >
                            {option}
                          </span>
                        ))}
                      </span>
                    ) : (
                      row.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ---- camps only: dates, prices and the poster ----
           Same component the homepage tab renders, so a parent arriving here
           from search gets the identical dates and prices. Duplicating the
           markup would guarantee the two drift the first time a price changes. */}
      {programme.slug === "cricket-camps" && (
        <section aria-labelledby="camp-detail-heading" className="section-y border-t border-line">
          <div className="shell">
            <h2 id="camp-detail-heading" className="text-label text-bone-400">
              <span className="text-red-400">04</span> / Dates &amp; Prices
            </h2>
            <div className="mt-12 border-t border-line pt-12">
              <CampDetail />
            </div>
          </div>
        </section>
      )}

      {/* ---- photography, when the programme has a homepage card ---- */}
      {hero && (
        <RevealImage
          src={hero.image}
          alt={hero.imageAlt}
          width={1920}
          height={1080}
          className="h-[45svh] border-y border-line lg:h-[65svh]"
        />
      )}

      {/* ---- other programmes ---- */}
      <section aria-labelledby="more-heading" className="section-y">
        <div className="shell">
          <h2 id="more-heading" className="text-label text-bone-400">
            <span className="text-red-400">{programme.slug === "cricket-camps" ? "05" : "04"}</span>{" "}
            / Other Programmes
          </h2>

          <ul className="mt-12 border-t border-line">
            {others.map((other, i) => (
              <li key={other.slug}>
                <Reveal delay={i * 0.04}>
                  <Link
                    to="/programmes/$slug"
                    params={{ slug: other.slug }}
                    className="group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 border-b border-line py-6 md:grid-cols-[minmax(0,26ch)_minmax(0,1fr)_auto]"
                  >
                    <span className="text-display-md text-bone-100 transition-colors duration-200 ease-brand group-hover:text-red-400">
                      {other.name}
                    </span>
                    <span className="text-label hidden text-bone-400 md:block">
                      {other.promise}
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-bone-400 transition-transform duration-300 ease-brand group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
