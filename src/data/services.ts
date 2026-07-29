import oneToOneImage from "@/assets/service-one-to-one.jpg";
import groupImage from "@/assets/service-group.jpg";
import campsImage from "@/assets/service-camps.jpg";

export interface CoreService {
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

/**
 * PROG-01: three core programmes, nothing else.
 *
 * Elite Performance Clinics, Masterclass Academy Sessions and Masterclass
 * Performance Camps are gone — the last of those was a rename rather than a
 * deletion (Performance Camps -> Cricket Camps), so its slug is redirected in
 * public/_redirects rather than dropped.
 *
 * `bullets` is capped at four on purpose. The full lists from 1TO1-02 and
 * GRP-03 run to eight items each, and eight rows in this card's bordered list
 * make one card roughly 320px taller than the two beside it. The complete
 * lists live on the programme pages, where there is room for them.
 */
export const coreServices: CoreService[] = [
  {
    tier: "Private",
    name: "Masterclass One-to-One Coaching",
    promise: "Every session is built entirely around one player.",
    bullets: [
      "Initial technical assessment and video analysis",
      "Individual coaching programme",
      "WhatsApp support group with player, parents and coaches",
      "Session reports after every lesson",
    ],
    cta: { label: "Book a Session", href: "/programmes/one-to-one" },
    detailsHref: "/programmes/one-to-one",
    image: oneToOneImage,
    imageAlt: "Young cricketer crouched with a bat inside a floodlit indoor net",
  },
  {
    tier: "Group",
    name: "Masterclass Group Sessions",
    promise: "The same coaching philosophy, delivered in a group.",
    bullets: [
      "Ability-based coaching groups",
      "Bespoke coaching plans",
      "Tactical match awareness",
      "Confidence and mindset coaching",
    ],
    cta: { label: "Join a Group", href: "/programmes/group-sessions" },
    detailsHref: "/programmes/group-sessions",
    image: groupImage,
    imageAlt: "Three teenage cricketers waiting to bat in a dark indoor net",
  },
  {
    tier: "Holiday",
    name: "Masterclass Cricket Camps",
    promise: "Professional coaching, outstanding facilities, genuine enjoyment.",
    bullets: [
      "Professional cricket facilities",
      "Structured batting, bowling and fielding",
      "Competitive challenges and match scenarios",
      "Parent feedback at the end of every day",
    ],
    cta: { label: "Reserve a Place", href: "/programmes/cricket-camps" },
    detailsHref: "/programmes/cricket-camps",
    image: campsImage,
    imageAlt: "Cricket ground under a single floodlight with players training at dusk",
  },
];

/**
 * OTH-01: the five remaining services, with the client's wording.
 *
 * `descriptor` is the short form used in the index — the brief's descriptions
 * run to 15-20 words, and the index hides the descriptor entirely below md, so
 * the long versions would be invisible to every mobile visitor. `detail` keeps
 * the client's full sentence for the programme pages.
 */
export const secondaryServices: SecondaryService[] = [
  {
    name: "School Teacher Cricket Coaching Programmes",
    descriptor: "Training teachers to coach cricket with confidence",
    href: "/programmes/schools",
  },
  {
    name: "Tours for Clubs and Members",
    descriptor: "Tailored tours for teams, clubs and members",
    href: "/programmes/tours",
  },
  {
    name: "Corporate Cricket and Team Building",
    descriptor: "Inclusive cricket for teamwork and engagement",
    href: "/programmes/corporate",
  },
  {
    name: "Online Batting Assessments",
    descriptor: "Send footage, receive professional analysis",
    href: "/programmes/online-batting",
  },
  {
    name: "Online Bowling Assessments",
    descriptor: "Detailed analysis of your bowling action",
    href: "/programmes/online-bowling",
  },
];
