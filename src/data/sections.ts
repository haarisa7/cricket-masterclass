/**
 * NUMBERING CONVENTION
 *
 * One rule, site-wide: a number means "body section". Mastheads carry a label
 * only, never a number, and item-level lists inside a section are not numbered
 * unless the order is genuinely meaningful.
 *
 * The exceptions are deliberate and both survive because their treatment makes
 * the level unmistakable:
 *  - Method's four steps are ordinal (Assess -> Analyse -> Drill -> Report) and
 *    render at ~144px, so they cannot be mistaken for a 12px section eyebrow.
 *  - Safeguarding's clauses are numbered because policy clauses get cited by
 *    number, and that page has no numbered sections to collide with.
 *
 * The homepage's numbers live here rather than in each component because they
 * are spread across four files with no shared ordering — which is exactly how
 * the sequence previously ended up as 01, 02, 03, 05 with no 04 anywhere.
 * Interior pages keep their literals: each is a single file where the whole
 * sequence is visible at a glance.
 */

/**
 * Homepage section order. Numbers are derived from position, so adding or
 * reordering a section here renumbers the page and nothing has to be edited in
 * the components — which is exactly the drift this file exists to prevent.
 *
 * "whats-on", "journey" and "indoor" were added by BAN-02, JRN-01 and IND-01.
 */
const HOMEPAGE_ORDER = [
  "whats-on",
  "approach",
  "coaching",
  "method",
  "journey",
  "indoor",
  "reels",
] as const;

export type HomepageSection = (typeof HOMEPAGE_ORDER)[number];

/** Two-digit section marker, derived from position so it cannot drift. */
export function sectionNumber(key: HomepageSection): string {
  return String(HOMEPAGE_ORDER.indexOf(key) + 1).padStart(2, "0");
}
