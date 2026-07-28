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

export interface Reel {
  views: string;
  caption: string;
  href: string;
  /** Served from /public — never bundled, so the JS payload stays flat. */
  src: string;
  poster: string;
}

export const stats: Stat[] = [
  { value: 10, suffix: "+", label: "Years Coaching" },
  { value: 500, suffix: "+", label: "Players Coached" },
  { value: 3, suffix: "M+", label: "Video Views" },
  { value: 0, suffix: "", display: "Beginner → International", label: "Every Level" },
];

export const manifesto = {
  index: "01",
  label: "Our Approach",
  quote:
    "An accredited certificate doesn't make a top-level coach. Knowledge, experience and insight do.",
  attribution: "Uzi Arif, Head Coach",
  columns: [
    "Ten years in Chiswick, coaching first-timers and international players in the same week. The method doesn't change — the level does.",
    "Every session is measured, filmed and written up. Players leave knowing what they fixed and what they work on next.",
  ],
  link: { label: "Meet the founder", href: "/founder" },
} as const;

export const methodSteps: MethodStep[] = [
  { index: "01", name: "Assess", detail: "Conversation, then video capture from three angles." },
  { index: "02", name: "Analyse", detail: "Biomechanical breakdown, frame by frame." },
  { index: "03", name: "Drill", detail: "Targeted work in session, corrected live." },
  { index: "04", name: "Report", detail: "Written plan plus homework drills." },
];

export const eliteAcademy = {
  eyebrow: "2026 Intake",
  title: "Masterclass Elite Cricket Academy",
  copy: "The pathway squad for players chasing county, regional or professional selection — assessed entry, year-round training, and match exposure against stronger opposition.",
  points: [
    { label: "Expert Coaching", detail: "Professional and county-level staff" },
    { label: "Match Practice", detail: "Fixtures across three grounds" },
    { label: "All Abilities", detail: "Entry by assessment, not reputation" },
    { label: "Safe & Professional", detail: "DBS-checked, safeguarding trained" },
  ],
  cta: { label: "Apply for a Trial", href: "/elite-academy" },
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
