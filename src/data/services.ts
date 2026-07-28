import oneToOneImage from "@/assets/service-one-to-one.jpg";
import groupImage from "@/assets/service-group.jpg";
import campsImage from "@/assets/service-camps.jpg";

export interface CoreService {
  index: string;
  tier: string;
  name: string;
  promise: string;
  bullets: string[];
  cta: { label: string; href: string };
  detailsHref: string;
  image: string;
  imageAlt: string;
  note?: string;
}

export interface SecondaryService {
  name: string;
  descriptor: string;
  href: string;
}

export const coreServices: CoreService[] = [
  {
    index: "01",
    tier: "Private",
    name: "1-2-1 Coaching",
    promise: "Private sessions built around one player.",
    bullets: ["Video capture every session", "Written plan afterwards", "Indoor and outdoor nets"],
    cta: { label: "Book a Session", href: "/programmes/one-to-one" },
    detailsHref: "/programmes/one-to-one",
    image: oneToOneImage,
    imageAlt: "Young cricketer crouched with a bat inside a floodlit indoor net",
  },
  {
    index: "02",
    tier: "Group",
    name: "Small Group Sessions",
    promise: "Train with peers, compete every session.",
    bullets: ["Six players maximum", "Ability-matched groups", "Weekly progress markers"],
    cta: { label: "Join a Group", href: "/programmes/small-group" },
    detailsHref: "/programmes/small-group",
    image: groupImage,
    imageAlt: "Three teenage cricketers waiting to bat in a dark indoor net",
  },
  {
    index: "03",
    tier: "Holiday",
    name: "Masterclass Performance Camps",
    promise: "Holiday intensives across three cricket grounds.",
    bullets: ["Full match play daily", "Coach-to-player ratio 1:8", "Ages 7 to 16"],
    cta: { label: "Reserve a Place", href: "/programmes/performance-camps" },
    detailsHref: "/programmes/performance-camps",
    image: campsImage,
    imageAlt: "Cricket ground under a single floodlight with players training at dusk",
    note: "Invest in proper coaching, not babysitting.",
  },
];

export const secondaryServices: SecondaryService[] = [
  {
    name: "Masterclass Academy Sessions",
    descriptor: "Term-time squad training at Kings House",
    href: "/programmes/academy-sessions",
  },
  {
    name: "Elite Performance Clinics",
    descriptor: "Single-discipline clinics for advanced players",
    href: "/programmes/performance-clinics",
  },
  {
    name: "School Coaching Programmes",
    descriptor: "Curriculum delivery and teacher training",
    href: "/programmes/schools",
  },
  {
    name: "Tours for Clubs & Members",
    descriptor: "Overseas and UK cricket tours, fully managed",
    href: "/programmes/tours",
  },
  {
    name: "Corporate Team-Building",
    descriptor: "Half-day cricket sessions for company teams",
    href: "/programmes/corporate",
  },
  {
    name: "Online Batting Assessments",
    descriptor: "Upload footage, get a frame-by-frame report",
    href: "/programmes/online-batting",
  },
  {
    name: "Online Bowling Assessments",
    descriptor: "Action analysis and a corrective drill plan",
    href: "/programmes/online-bowling",
  },
  {
    name: "Mental Mind Mapping",
    descriptor: "Decision-making and pressure work for players",
    href: "/programmes/mind-mapping",
  },
  {
    name: "Masterclass Approved Coach Programme",
    descriptor: "Certification for practising cricket coaches",
    href: "/programmes/approved-coach",
  },
];
