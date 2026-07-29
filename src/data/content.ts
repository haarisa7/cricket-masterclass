export interface Stat {
  value: number;
  suffix: string;
  display?: string;
  label: string;
}

export interface MethodStep {
  index: string;
  name: string;
  detail: string;
}

export interface Philosophy {
  label: string;
  /** Pulled to display size. The rest of the argument follows as body copy. */
  headline: string[];
  attribution: string;
  columns: string[];
  link: { label: string; href: string };
}

export interface Reel {
  views: string;
  caption: string;
  href: string;
  /** Served from /public — never bundled, so the JS payload stays flat. */
  src: string;
  poster: string;
}

/**
 * STAT-01.
 *
 * The value/label split matters here. The brief supplies the county figure as
 * a full sentence — "80%+ of our long-term students represent County Cricket
 * or higher" — and rendering a twelve-word sentence at stat size destroys the
 * tile on a phone. It is split so "80%+" is the number and the claim is the
 * label beneath it, which is also how the other three already work.
 *
 * EVIDENCE REQUIRED BEFORE LAUNCH (STAT-01): the 80% figure, the 2,000 players
 * and the 10M views are all advertising claims under CAP 3.7 and need
 * documentary support. "Long-term student" also needs a definition the client
 * can stand behind. Do not publish on assumption.
 */
export const stats: Stat[] = [
  { value: 0, suffix: "", display: "Est. 2015", label: "Coaching Since" },
  { value: 2000, suffix: "+", label: "Players Coached" },
  {
    value: 80,
    suffix: "%+",
    label: "Of our long-term students represent County Cricket or higher",
  },
  { value: 10, suffix: "M+", label: "Social Media Views" },
];

/**
 * PHIL-01 — the homepage coaching philosophy.
 *
 * The brief supplies two prose paragraphs with no pull-quote, but this section
 * is built around a display-size statement and would lose its anchor without
 * one. The first clause of the client's own copy is pulled up as the headline
 * and the rest runs as body, so nothing is invented and nothing is lost.
 *
 * Kept deliberately distinct from the longer About-page philosophy (ABT-02) so
 * the two do not read as duplicates.
 */
export const philosophy: Philosophy = {
  label: "Our Approach",
  headline: [
    "Playing experience alone",
    "doesn't create great coaches.",
    "Neither do qualifications.",
  ],
  attribution: "Uzi Arif, Founder & Head Coach",
  columns: [
    "The difference comes from combining elite playing experience with biomechanics, technical understanding and tactical knowledge.",
    "Our Head Coach, Uzi Arif, combines over a decade of professional cricket experience with years of biomechanical research and thousands of coaching case studies. This allows Masterclass Cricket to identify problems faster, explain them clearly and build bespoke solutions that genuinely improve performance.",
  ],
  link: { label: "Meet the founder", href: "/founder" },
};

/**
 * MTH-01 — four steps, one process.
 *
 * Each step carries a short `detail` for the pinned horizontal panels and a
 * longer `full` for the vertical layout. The client's copy runs 40–60 words
 * per step, which will not fit the 38vw panels the horizontal scroll uses, so
 * the section now renders vertically and `detail` is the summary line. Both
 * are kept because both are the client's words, trimmed rather than rewritten.
 */
export const methodSteps: MethodStep[] = [
  {
    index: "01",
    name: "Assess",
    detail:
      "We begin by understanding the player, their experiences, their goals and the areas of their game they want to improve. Video footage is then used to assess their movement, technique and current performance.",
  },
  {
    index: "02",
    name: "Analyse",
    detail:
      "A Masterclass coach breaks the skill down using technical knowledge, tactical understanding and biomechanics to identify the main cause of the problem.",
  },
  {
    index: "03",
    name: "Develop",
    detail:
      "The player completes targeted Masterclass drills designed to simplify the required movement, improve understanding and create a more effective technique.",
  },
  {
    index: "04",
    name: "Report",
    detail:
      "At the end of the session, the player records what they have learned in their private WhatsApp coaching group. The coach then adds professional feedback, homework and the next areas of focus so that both the player and parent understand the development process.",
  },
];

export const methodHeading = "Four Steps. One Clear Development Process.";

/**
 * ELIT-02 — replaces the Elite Academy block that ELIT-01 removed.
 *
 * Reuses that section's 50/50 image-and-list layout unchanged, so this is a
 * content swap rather than a rebuild. The CTA points at the same interest form
 * as the indoor section (IND-02) — one form, two entry points.
 */
export const indoorPromo = {
  eyebrow: "Autumn & Winter 2026",
  title: "Join the Masterclass Indoor Group Programme",
  copy: "Structured indoor coaching at St Paul's School through the winter months, built around ability-based groups and a progressive ten-week curriculum.",
  points: [
    { label: "Ages", detail: "6 to 14" },
    { label: "When", detail: "Saturday and Sunday sessions" },
    { label: "Structure", detail: "Ten-week coaching blocks" },
    { label: "Covering", detail: "Batting, bowling, fielding, match awareness" },
    { label: "Groups", detail: "Ability-based, not age-based" },
  ],
  cta: { label: "Register Your Interest", href: "/#indoor-programme" },
} as const;

const INSTAGRAM = "https://www.instagram.com/masterclasscricket?igsh=MWJ4eDJqaHhkN2x3NQ%3D%3D";

export const reels: Reel[] = [
  {
    views: "1M",
    caption: "Front-foot drive, slowed",
    href: INSTAGRAM,
    src: "/reels/reel-1.mp4",
    poster: "/reels/reel-1.jpg",
  },
  {
    views: "717K",
    caption: "Seam position drill",
    href: INSTAGRAM,
    src: "/reels/reel-2.mp4",
    poster: "/reels/reel-2.jpg",
  },
  {
    views: "1M",
    caption: "Trigger movement fix",
    href: INSTAGRAM,
    src: "/reels/reel-3.mp4",
    poster: "/reels/reel-3.jpg",
  },
  {
    views: "92.7K",
    caption: "Junior camp highlights",
    href: INSTAGRAM,
    src: "/reels/reel-4.mp4",
    poster: "/reels/reel-4.jpg",
  },
];
