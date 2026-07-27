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

export const BOOKING = {
  session: "https://masterclass-cricket-booking.vercel.app/",
  camps: "https://classforkids.co.uk/",
  whatsapp: "https://wa.me/447951753003",
} as const;

export const site = {
  name: "Masterclass Cricket",
  tagline: "For every skill, we've got the drill.",
  positioning: "Professional cricket coaching. Chiswick, West London.",
  address: "Kings House Sports Grounds, Riverside Dr, Chiswick, London W4 2SH",
  phone: "+44 7951 753003",
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
  { platform: "Instagram", handle: "@masterclasscricket", followers: "34.2K", href: "https://instagram.com/masterclasscricket" },
  { platform: "TikTok", handle: "@masterclasscricket", followers: "18.6K", href: "https://tiktok.com/@masterclasscricket" },
  { platform: "YouTube", handle: "Masterclass Cricket", followers: "9.1K", href: "https://youtube.com/@masterclasscricket" },
  { platform: "Facebook", handle: "Masterclass Cricket", followers: "4.8K", href: "https://facebook.com/masterclasscricket" },
  { platform: "LinkedIn", handle: "Masterclass Cricket", followers: "1.2K", href: "https://linkedin.com/company/masterclasscricket" },
];

export const partners: string[] = [
  "Kings House Sports Grounds",
  "Chiswick & Whitton CC",
  "Middlesex Cricket",
  "Ealing CC",
  "Gunn & Moore",
];
