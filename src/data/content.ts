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
  copy:
    "The pathway squad for players chasing county, regional or professional selection — assessed entry, year-round training, and match exposure against stronger opposition.",
  points: [
    { label: "Expert Coaching", detail: "Professional and county-level staff" },
    { label: "Match Practice", detail: "Fixtures across three grounds" },
    { label: "All Abilities", detail: "Entry by assessment, not reputation" },
    { label: "Safe & Professional", detail: "DBS-checked, safeguarding trained" },
  ],
  cta: { label: "Apply for a Trial", href: "/elite-academy" },
} as const;

export const reels: Reel[] = [
  { views: "1M", caption: "Front-foot drive, slowed", href: "https://instagram.com/masterclasscricket" },
  { views: "717K", caption: "Seam position drill", href: "https://instagram.com/masterclasscricket" },
  { views: "1M", caption: "Trigger movement fix", href: "https://instagram.com/masterclasscricket" },
  { views: "92.7K", caption: "Junior camp highlights", href: "https://instagram.com/masterclasscricket" },
];
