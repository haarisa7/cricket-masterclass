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
 * TO EDIT ANYTHING ELSE:
 *   - Change the text inside the quote marks. Do not remove the quote marks,
 *     the commas, or the curly brackets.
 *   - `status` accepts only: "open", "limited", "closed", "soon".
 *   - To hide a card, set `show: false` rather than deleting it.
 *   - Leave `href` empty ("") and the card renders without a button.
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

export interface LiveEvent {
  category: string;
  title: string;
  detail: string;
  when: string;
  status: EventStatus;
  show: boolean;
  ctaLabel?: string;
  /**
   * Where the button goes. Set exactly ONE of these three:
   *   href          — an external link (a checkout, Instagram, anything off-site)
   *   whatsappTopic — opens WhatsApp with "I'd like to enquire about <topic>."
   *                   already typed. Easiest option, and the one to use unless
   *                   there is a real booking page.
   *   hash          — scrolls to a section on this page, e.g. "indoor-programme"
   * Set none of them and the card renders without a button.
   */
  href?: string;
  whatsappTopic?: string;
  hash?: string;
}

export const eventsIntro =
  "Everything currently running at Masterclass Cricket, in one place. Dates and availability are updated as places are taken.";

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
   * POSTER ARTWORK — FILE NOT YET IN THE REPO.
   *
   * The poster was supplied as an image in conversation, which cannot be written
   * to disk from here. Save it as public/posters/summer-camp-2026.jpg and this
   * starts rendering. Until the file exists the block shows the camp details as
   * text and simply omits the image, so nothing breaks in the meantime.
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

export const liveEvents: LiveEvent[] = [
  {
    category: "Group Coaching",
    title: "Masterclass Group Sessions",
    detail: "Ability-based groups following a progressive coaching curriculum.",
    when: "Places available — enquire for current blocks",
    status: "limited",
    whatsappTopic: "a place in a Masterclass Group Session",
    ctaLabel: "Book a Place",
    show: true,
  },
  {
    category: "One-to-One",
    title: "One-to-One Coaching Availability",
    detail: "1 Hour, 90 Minutes, 2 Hour and 3 Hour sessions, ages 4 to adult.",
    when: "Indoor October–April · Outdoor April–October",
    status: "open",
    whatsappTopic: "booking a one-to-one coaching session",
    ctaLabel: "Book a Session",
    show: true,
  },
  {
    category: "Upcoming Events",
    title: "Indoor Programme at St Paul's School",
    detail: "Ages 6–14, Saturday and Sunday sessions across ten-week coaching blocks.",
    when: "Dates, times and prices to be confirmed",
    // IND-03: "soon", never "open" — this must not read as a confirmed booking
    // until the client finalises dates, times and prices.
    status: "soon",
    /*
     * DELIBERATELY NOT A BOOKING CTA, and it must stay that way.
     *
     * Every other card here books. This one registers interest, because IND-03
     * is an explicit client constraint: the indoor programme must not be
     * presented as a confirmed booking until dates, times and prices are
     * finalised. "Book" wording plus a "Coming soon" badge would take a
     * deposit-shaped promise on a programme that has no dates — exactly what
     * that row exists to prevent.
     *
     * Change the label to "Book" ONLY once the client confirms the schedule and
     * pricing, and flip `status` to "open" at the same time.
     */
    hash: "indoor-programme",
    ctaLabel: "Register Your Interest",
    show: true,
  },
  /*
   * The "Latest Coaching Posters" card has been REMOVED, deliberately.
   *
   * BAN-02 lists "Coaching Posters" as one of the five categories this block
   * should cover, and it is still covered — better than before. That card was
   * only ever a link out to Instagram; the current poster is now displayed in
   * full inside the camp block above, which is what a parent actually wanted
   * from it. Sending them off-site to hunt for the same image was the weaker
   * version.
   *
   * If a poster ever needs showing that is NOT the current camp, add it back
   * here rather than stacking images into the camp block.
   */
];
