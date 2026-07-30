/**
 * BAN-02 — the live events block.
 *
 * ────────────────────────────────────────────────────────────────────────────
 * THIS FILE IS THE ONE PLACE TO EDIT WHAT IS CURRENTLY RUNNING.
 * ────────────────────────────────────────────────────────────────────────────
 *
 * It is not yet the admin panel the brief asks for. The app has no CMS, login or
 * database, so an update is a change to this file plus a redeploy. Everything a
 * non-developer needs to change is therefore in plain text here, with no code
 * around it, rather than scattered across four components.
 *
 * WHEN A NEW POSTER ARRIVES (the usual case):
 *   1. Save the artwork to public/posters/ as a .jpg or .webp. Keep it under
 *      about 400KB — posters are large images and this one sits on the homepage.
 *   2. Update `summerCamp` below: the weeks, the prices, the ages, the venue.
 *   3. Point `posterSrc` at the new file.
 *   Nothing else needs touching. Past weeks disappear on their own — see the
 *   note on `endsOn`.
 *
 * TO CHANGE WHETHER A PROGRAMME IS BOOKABLE:
 *   Edit `availability` below. See the note there — a programme that is not
 *   running needs BOTH `status: "soon"` and a `ctaLabel` that registers interest,
 *   or the page shows a Book button for a place that does not exist.
 *
 * TO EDIT ANYTHING ELSE:
 *   - Change the text inside the quote marks. Do not remove the quote marks,
 *     the commas, or the curly brackets.
 *   - `status` accepts only: "open", "limited", "closed", "soon".
 */

export type EventStatus = "open" | "limited" | "closed" | "soon";

export interface CampWeek {
  label: string;
  /** As printed on the poster. */
  dates: string;
  /**
   * ISO date of the LAST day of the week, so finished weeks stop advertising
   * themselves. The block filters on this at render time — which means a poster
   * covering nine weeks does not need a developer every time one ends.
   */
  endsOn: string;
}

/**
 * CURRENT AVAILABILITY, one entry per core programme.
 *
 * This replaced a separate "What's On" section that listed the same three
 * programmes the coaching section already sold — two blocks competing to be
 * where a parent decides. Availability now lives inside each programme's tab,
 * so "what is running" and "what it is" are read together instead of a screen
 * apart.
 *
 * TO EDIT: change `status` and `when`. `status` accepts only "open",
 * "limited", "closed" or "soon".
 *
 * IF A PROGRAMME IS NOT CURRENTLY BOOKABLE, set `status: "soon"` AND set
 * `ctaLabel` to something that registers interest. A "Book" button beside a
 * "Coming soon" badge promises a place that does not exist — that mismatch is
 * the thing to avoid, and it is why the override exists rather than the label
 * being fixed per programme.
 *
 * Used in two places, both reading from here: the homepage coaching tabs and the
 * individual programme pages, so a parent sees the same answer whichever route
 * they arrive by.
 */
export interface Availability {
  status: EventStatus;
  /** Free text — dates, a season, or "enquire for current blocks". */
  when: string;
  /** Overrides the programme's normal CTA label. */
  ctaLabel?: string;
  /** Overrides the WhatsApp topic, so the enquiry arrives with useful context. */
  whatsappTopic?: string;
}

export const availability: Record<
  "one-to-one" | "group-sessions" | "cricket-camps" | "strength-conditioning",
  Availability
> = {
  "one-to-one": {
    status: "open",
    when: "Indoor October–April · Outdoor April–October",
  },
  "group-sessions": {
    // NOTHING IS RUNNING RIGHT NOW. Group coaching next runs indoors from
    // October, and those dates are not confirmed — so this registers interest
    // rather than offering a booking.
    status: "soon",
    when: "No blocks running — next sessions indoors from October",
    ctaLabel: "Register Your Interest",
    whatsappTopic: "registering interest in Masterclass Group Sessions",
  },
  "cricket-camps": {
    status: "open",
    when: "School holidays, Monday to Thursday",
  },
  // Promoted to a core programme on 30 July (client decision) — it is now the
  // fourth coaching tab rather than a separate page reached only from the nav.
  "strength-conditioning": {
    status: "open",
    when: "Year-round · Assessment first, then a bespoke plan",
    ctaLabel: "Book an S&C Assessment",
    whatsappTopic: "a strength and conditioning assessment",
  },
};

/**
 * The winter indoor programme — the detail behind Group Sessions' "from October".
 *
 * It previously had TWO full homepage sections plus a card plus a ticker item,
 * for a programme with no confirmed dates or prices. It is the same
 * ability-based group coaching, moved indoors for the winter at a second venue,
 * so it now reads as the explanation of when group coaching returns rather than
 * a separate offer.
 *
 * NO CTA OF ITS OWN. It used to carry its own "Register Your Interest" button,
 * which sat directly above the Group Sessions button doing the identical thing —
 * two buttons, one action. The tab's single CTA covers both.
 *
 * IND-03 still holds: no dates, no prices, and nothing that reads as a booking.
 */
export const indoorNote = {
  heading: "What's coming",
  detail:
    "Group coaching moves indoors to St Paul's School from October to April — ages 6–14, Saturday and Sunday sessions in ten-week blocks. Dates and prices are still being confirmed.",
} as const;

/**
 * The 2026 Summer Cricket Camp, taken from the client's poster.
 *
 * NOTE ON THE VENUE: the poster prints "Near Dukes Meadows, Chiswick" as the
 * strapline and "Kings House Sports Ground, Riverside Drive, Chiswick, W4 2SP"
 * as the location. The postcode there is what settled the W4 2SH / W4 2SP
 * question in FOOT-03 — see src/data/site.ts.
 */
export const summerCamp = {
  title: "Summer Cricket Camp",
  strapline: "Learn. Improve. Play. Enjoy.",
  intro:
    "Top quality coaching, excellent facilities and a fun, safe environment for every cricketer to learn, improve and thrive.",
  ages: "Boys & girls, 6–13 years old",
  times: "10:00am – 4:00pm, Monday to Thursday",
  venue: "King's House Sports Ground, Chiswick",

  /**
   * Poster artwork, in the repo and serving. 1290x1819, 444KB.
   *
   * Shown on the homepage Cricket Camps tab and on /programmes/cricket-camps,
   * both via the shared CampDetail component. Clicking it opens the full-size
   * file, which matters because a poster is dense text and is not legible scaled
   * into a column.
   *
   * If the file is ever missing, the image removes itself rather than leaving a
   * broken-image icon, and the text details carry the section. Export the next
   * one as WebP if you can — it would be roughly a third of the file size.
   */
  posterSrc: "/posters/summer-camp-2026.jpg",
  posterAlt:
    "Masterclass Cricket Academy Summer Cricket Camp 2026 poster — near Dukes Meadows, Chiswick, ages 6 to 13, 10am to 4pm",

  pricing: [
    { name: "Full Day", detail: "10:00am – 4:00pm", price: "£70", unit: "per day" },
    {
      name: "Half Day",
      detail: "10:00am – 12:30pm or 1:30pm – 4:00pm",
      price: "£40",
      unit: "per session",
    },
    {
      name: "Full Week",
      detail: "Monday – Thursday, 4 full days",
      price: "£250",
      unit: "per week",
      note: "Save £30",
    },
  ],

  extras: [
    "Early drop-off 9:00am – 10:00am, +£10",
    "Late pick-up 4:00pm – 5:00pm, +£10",
    "Lunch break 12:30pm – 1:30pm",
  ],

  discounts: ["Refer a friend and get 10% discount", "Sibling discount available"],

  includes: [
    "Expert coaching led by ex-county player Uzi Arif and his team of professionals",
    "State-of-the-art net facilities, astroturf pitches and grass wicket pitches",
    "A personal report card with key strengths and areas to improve",
    "Daily awards, ice cream treats and certificates for all achievers",
  ],

  /**
   * Nine weeks, Monday to Thursday. `endsOn` is what makes finished weeks
   * disappear without anyone editing this list.
   */
  weeks: [
    { label: "Week 1", dates: "6 – 9 July", endsOn: "2026-07-09" },
    { label: "Week 2", dates: "13 – 16 July", endsOn: "2026-07-16" },
    { label: "Week 3", dates: "20 – 23 July", endsOn: "2026-07-23" },
    { label: "Week 4", dates: "27 – 30 July", endsOn: "2026-07-30" },
    { label: "Week 5", dates: "3 – 6 August", endsOn: "2026-08-06" },
    { label: "Week 6", dates: "10 – 13 August", endsOn: "2026-08-13" },
    { label: "Week 7", dates: "17 – 20 August", endsOn: "2026-08-20" },
    { label: "Week 8", dates: "24 – 27 August", endsOn: "2026-08-27" },
    { label: "Bonus week", dates: "31 August – 3 September", endsOn: "2026-09-03" },
  ] satisfies CampWeek[],
} as const;

/*
 * `liveEvents` HAS BEEN REMOVED — with the LiveEvent interface above it.
 *
 * It drove a separate "What's On" section listing Group Sessions, One-to-One and
 * the indoor programme. The first two were the same products the coaching
 * section sold immediately below it, and the indoor programme had two further
 * sections of its own. Counted on the rendered page, that left "indoor"
 * appearing 12 times, "Register Your Interest" 6 times and eleven WhatsApp
 * buttons — when everything is a call to action, nothing is.
 *
 * Availability now lives in `availability` above, inside each programme's tab,
 * and the indoor programme is one line in the Group Sessions tab
 * (`indoorNote`). The camp keeps its full block because it is the only thing
 * with real dates, prices and a checkout.
 *
 * The old cards' CTAs are preserved: each tab opens WhatsApp with the same
 * pre-typed enquiry.
 */
