import partnerMre from "@/assets/partner-mre.png";
import partnerSsdev from "@/assets/partner-ssdev.png";

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialAccount {
  platform: string;
  handle: string;
  href: string;
}

/** Live WhatsApp business line. Digits only — wa.me rejects spaces and `+`. */
const WHATSAPP_NUMBER = "447961692226";

/**
 * Booking routes.
 *  camps    — the only third-party checkout (ClassForKids handles holiday camps)
 *  whatsapp — every other enquiry goes straight to the coaching line
 */
export const BOOKING = {
  camps: "https://masterclass-cricket.classforkids.io/",
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}`,
} as const;

/**
 * WhatsApp deep link with the enquiry pre-typed, so Uzi opens a chat that
 * already says which programme the player came from.
 */
export function whatsappFor(topic: string): string {
  const text = `Hi Masterclass Cricket — I'd like to enquire about ${topic}.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

/**
 * CTA-02: the coach-matching enquiry, pre-typed as a form the parent fills in
 * inside WhatsApp.
 *
 * The newlines matter — encodeURIComponent turns them into %0A, which the iOS
 * and Android apps honour. WhatsApp Web has historically been less reliable
 * with multi-line prefills, so this needs testing on all three (pre-launch
 * check 10) before launch.
 */
export const COACH_MATCH_PREFILL = [
  "Hi Masterclass Cricket, I would like some advice about the most suitable coaching programme.",
  "Player's name:",
  "Age:",
  "Current club or school:",
  "Playing level:",
  "Main discipline:",
  "Main areas they would like to improve:",
].join("\n");

export const whatsappCoachMatch = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  COACH_MATCH_PREFILL,
)}`;

/**
 * The five service areas, in the agreed order. Single source so the hero strip
 * and the footer can never drift apart (HERO-01 / FOOT-01).
 */
export const serviceAreas: string[] = [
  "West London",
  "Chiswick",
  "Richmond",
  "Berkshire",
  "Buckinghamshire",
];

export const site = {
  name: "Masterclass Cricket",
  tagline: "For every skill, we've got the drill.",
  /**
   * FOOT-01: the five-area line, used verbatim in the footer, the About page
   * and every meta description. `positioning` is the sentence form; the hero
   * strip builds its own from `serviceAreas` above.
   */
  positioning:
    "Professional Cricket Coaching Across Chiswick, Richmond, West London, Berkshire and Buckinghamshire",
  /** Shorter form for meta descriptions, which cap out around 155 characters. */
  positioningShort:
    "Professional cricket coaching across Chiswick, Richmond, West London, Berkshire and Buckinghamshire.",
  /**
   * FOOT-03 — RESOLVED to W4 2SP on 29 July 2026.
   *
   * The old site said W4 2SH. Two independent client-authored sources say 2SP:
   * the revision brief, and the 2026 Summer Camp poster, which prints the full
   * address as its venue. One stale value against two current ones, so 2SP wins.
   *
   * This string feeds the footer, the contact page, the Maps link and the Maps
   * embed, so check the pin drops on the right ground after this change.
   */
  address: "King's House Sports Ground, Riverside Drive, Chiswick, London W4 2SP",
  phone: "+44 7961 692226",
  email: "info@masterclasscricket.co.uk",
  hours: "Mon–Sun, 8am–8pm",
  founded: "2015",
} as const;

/**
 * Primary navigation.
 *
 * Eight items is the ceiling this header can carry: the desktop row is centred
 * between the wordmark and the Book Now button, so anything longer collides
 * around 1100px. "S&C" and "International" are deliberately short labels for
 * that reason — the full names live on the pages themselves.
 */
export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "The Founder", href: "/founder" },
  { label: "Coaches", href: "/coaches" },
  { label: "S&C", href: "/strength-conditioning" },
  { label: "International", href: "/international" },
  { label: "Contact", href: "/contact" },
];

/**
 * BAN-01: the red marquee under the hero. Only ever advertise programmes that
 * still exist — the Elite Academy and Performance Camps entries that used to
 * sit here were both removed by ELIT-01 / PROG-01.
 *
 * EDITABLE: safe for a non-developer to change, but it is a code deploy. See
 * the note at the top of src/data/events.ts.
 */
export const tickerItems: string[] = [
  "Masterclass Cricket Camps — booking now",
  "Indoor Programme at St Paul's — register your interest",
  "1-2-1 Coaching — all abilities, ages 4+",
  "Online Batting & Bowling Assessments — worldwide",
];

/**
 * SOC-03 / FOOT-02 — LINKS NOT YET VERIFIED.
 *
 * Every social icon on the site is generated from this one array, so a wrong
 * URL here is wrong in four places at once. Each link must be clicked and
 * confirmed to land on the correct official account before launch
 * (pre-launch check 8). Two to look at first:
 *  - LinkedIn points at Uzi Arif's PERSONAL profile, not a company page.
 *  - The YouTube handle ends in a full stop (@masterclasscricketcoaching.),
 *    which looks like a typo carried over from a copy-paste.
 *
 * Per-platform follower counts have been removed. They were invented
 * placeholders, and SOC-02 replaces the five-platform grid with the three
 * headline metrics below.
 */
export const socials: SocialAccount[] = [
  {
    platform: "Instagram",
    handle: "@masterclasscricket",
    href: "https://www.instagram.com/masterclasscricket?igsh=MWJ4eDJqaHhkN2x3NQ%3D%3D",
  },
  {
    platform: "TikTok",
    handle: "@masterclasscricket",
    href: "https://www.tiktok.com/@masterclasscricket?_t=8lxebZRkhxA&_r=1",
  },
  {
    platform: "YouTube",
    handle: "Masterclass Cricket Coaching",
    href: "https://youtube.com/@masterclasscricketcoaching.?si=BJ3Nya11Em2ZIgBE",
  },
  {
    platform: "Facebook",
    handle: "Masterclass Cricket",
    href: "https://www.facebook.com/masterclasscricket",
  },
  {
    platform: "LinkedIn",
    handle: "Uzi Arif",
    href: "https://www.linkedin.com/in/uzi-arif-946674203/",
  },
];

/**
 * SOC-02: the three headline social figures.
 *
 * Deliberately ROUNDED and deliberately in one place. The brief's instruction
 * was not to hard-code figures that nobody will maintain — live counters need
 * Instagram Graph and YouTube Data API credentials plus a cached endpoint, and
 * TikTok publishes no follower API at all, so rounded figures edited here are
 * the honest option until a CMS exists (see BAN-02).
 *
 * Round DOWN when updating these. A figure that overstates is an advertising
 * claim, not a rounding error.
 */
export const socialMetrics: { label: string; value: string }[] = [
  { label: "Instagram", value: "75K+" },
  { label: "Combined Social Following", value: "120K+" },
  { label: "Content Views", value: "10M+" },
];

/**
 * "Official Partner" sits alongside the commercial tiers for Rocket Bats. It is
 * PART-02's own designation ("Official Bat Partner and Sponsor") rather than an
 * invented sponsorship level, so the wall does not have to guess whether a kit
 * sponsor is Gold or Silver. Styled like Gold, because it is a sponsor.
 */
export type PartnerTier = "Gold Partner" | "Silver Partner" | "Official Partner";

export type Partner = {
  name: string;
  descriptor: string;
  tier: PartnerTier;
  logo?: string;
  href?: string;
};

export const partnersIntro =
  "We build long partnerships with businesses that share our standards. They give our players top-tier equipment, world-class facilities and opportunities that coaching alone cannot buy.";

/**
 * PART-01 / PART-02 — the partner wall: COMMERCIAL SPONSORS ONLY.
 *
 * The brief's PART-01 list mixed two different kinds of relationship — a ground
 * we coach at, two cricket clubs, and a bat brand that pays to sponsor us. Those
 * do not belong in one grid: a venue is where sessions happen, a sponsor is a
 * commercial arrangement, and a "Gold Partner" badge against a cricket ground is
 * meaningless.
 *
 * So the wall keeps the sponsors (SSDEV, Marshall Real Estate, the open Silver
 * slot) and gains Rocket Bats, which is genuinely a sponsor. The grounds and
 * clubs moved to the venues section in the journey block, which already
 * separates current venues from partner clubs from academy history — a far
 * better home for them, and it stops the site implying regular sessions run
 * everywhere listed.
 *
 * Four tiles, rendered four-across, so nothing is orphaned on its own row.
 *
 * SIDE EFFECT WORTH KNOWING: this dissolves the brief's Sheen CC / Sheen Park CC
 * naming conflict rather than resolving it. The clash existed because §12 and
 * §20 named the same club differently; with clubs listed in only one place, only
 * §12's "Sheen Cricket Club" is used. Still worth confirming the legal name.
 */
export const partners: Partner[] = [
  {
    name: "SSDEV",
    descriptor: "Technology & Digital",
    tier: "Gold Partner",
    logo: partnerSsdev,
    href: "https://www.ssdev.tech/",
  },
  {
    name: "Marshall Real Estate",
    descriptor: "Property",
    tier: "Gold Partner",
    logo: partnerMre,
  },
  {
    // PART-02. Still needs artwork and a URL from the client — it is the only
    // sponsor on the wall with neither, so its tile shows the text fallback.
    name: "Rocket Bats",
    descriptor: "Official Bat Partner & Sponsor",
    tier: "Official Partner",
  },
  {
    name: "Partner slot open",
    descriptor: "Coming soon",
    tier: "Silver Partner",
  },
];
