/**
 * JRN / VEN — the journey stops, ordered as the route the academy actually
 * travelled: Richmond origin, growth across West London, King's House as the
 * current main base, then the indoor venue and the partner clubs.
 *
 * Every fact here is drawn from the approved journey copy and the venue list in
 * pages.ts — nothing new is claimed. `status` is the important field: it is
 * what stops a specialist-coaching partner reading as a venue where our
 * regular sessions run.
 */
export type JourneyStatus = "Current" | "Partner" | "History";

export interface JourneyStop {
  name: string;
  period: string;
  status: JourneyStatus;
  relationship: string;
  detail: string;
}

export const journeyStops: JourneyStop[] = [
  {
    name: "Richmond Cricket Club",
    period: "Where we began",
    status: "History",
    relationship: "Academy history",
    detail:
      "Head Coach Uzi Arif spent over 10 years at Richmond CC supporting the development of its Colts section, raising coaching standards and helping players progress through the club pathway.",
  },
  {
    name: "King's House Sports Ground, Chiswick",
    period: "Main base",
    status: "Current",
    relationship: "Home of one-to-one coaching, group programmes and holiday camps",
    detail:
      "As the academy grew it needed a larger, more professional environment. King's House is now the home of Masterclass Cricket coaching.",
  },
  {
    name: "St Paul's School",
    period: "October–April",
    status: "Current",
    relationship: "Indoor programme venue",
    detail: "Where the winter indoor programme runs through the off-season.",
  },
  {
    name: "Chiswick Cricket Club",
    period: "Partnership",
    status: "Partner",
    relationship: "Partner club",
    detail: "We work in partnership with Chiswick CC across its junior age groups and adult teams.",
  },
  {
    name: "Sheen Cricket Club",
    period: "Partnership",
    status: "Partner",
    relationship: "Specialist coaching support",
    detail:
      "Our coaches strengthen club coaching structures and deliver targeted batting, bowling and fielding masterclasses.",
  },
  {
    name: "Hampton Hill Cricket Club",
    period: "Partnership",
    status: "Partner",
    relationship: "Specialist coaching support",
    detail:
      "Junior and adult specialist sessions delivered alongside the club's own coaching programme.",
  },
];
