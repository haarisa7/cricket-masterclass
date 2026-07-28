import partnerMre from "@/assets/partner-mre.png";
import partnerSsdev from "@/assets/partner-ssdev.png";

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialAccount {
  platform: string;
  handle: string;
  followers: string;
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

export const site = {
  name: "Masterclass Cricket",
  tagline: "For every skill, we've got the drill.",
  positioning: "Professional cricket coaching. Chiswick, West London.",
  address: "Kings House Sports Grounds, Riverside Dr, Chiswick, London W4 2SH",
  phone: "+44 7961 692226",
  email: "info@masterclasscricket.co.uk",
  hours: "Mon–Sun, 8am–8pm",
  founded: "2015",
} as const;

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "The Founder", href: "/founder" },
  { label: "Elite Academy", href: "/elite-academy" },
  { label: "Coaches", href: "/coaches" },
  { label: "Contact", href: "/contact" },
];

export const tickerItems: string[] = [
  "Summer Performance Camps — booking now",
  "2026 Elite Academy — places open",
  "1-2-1 Winter Nets — Thursdays",
  "Online Batting Assessments — 48hr turnaround",
];

export const socials: SocialAccount[] = [
  {
    platform: "Instagram",
    handle: "@masterclasscricket",
    followers: "34.2K",
    href: "https://www.instagram.com/masterclasscricket?igsh=MWJ4eDJqaHhkN2x3NQ%3D%3D",
  },
  {
    platform: "TikTok",
    handle: "@masterclasscricket",
    followers: "18.6K",
    href: "https://www.tiktok.com/@masterclasscricket?_t=8lxebZRkhxA&_r=1",
  },
  {
    platform: "YouTube",
    handle: "Masterclass Cricket Coaching",
    followers: "9.1K",
    href: "https://youtube.com/@masterclasscricketcoaching.?si=BJ3Nya11Em2ZIgBE",
  },
  {
    platform: "Facebook",
    handle: "Masterclass Cricket",
    followers: "4.8K",
    href: "https://www.facebook.com/masterclasscricket",
  },
  {
    platform: "LinkedIn",
    handle: "Uzi Arif",
    followers: "1.2K",
    href: "https://www.linkedin.com/in/uzi-arif-946674203/",
  },
];

export type PartnerTier = "Gold Partner" | "Silver Partner";

export type Partner = {
  name: string;
  descriptor: string;
  tier: PartnerTier;
  logo?: string;
  href?: string;
};

/** Mirrors the partner wall on masterclasscricket.co.uk. */
export const partnersIntro =
  "We build long partnerships with businesses that share our standards. They give our players top-tier equipment, world-class facilities and opportunities that coaching alone cannot buy.";

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
    name: "Partner slot open",
    descriptor: "Coming soon",
    tier: "Silver Partner",
  },
];
