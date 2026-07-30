import * as Tabs from "@radix-ui/react-tabs";
import { Link } from "@tanstack/react-router";

import campsImage from "@/assets/service-camps.jpg";
import groupImage from "@/assets/service-group.jpg";
import scImage from "@/assets/elite-academy.jpg";
import oneToOneImage from "@/assets/service-one-to-one.jpg";
import { HomepageProgrammeUpdates } from "@/components/sections/live-programmes";
import { LiveCampDetails } from "@/components/sections/live-camp-details";
import { ActionAnchor } from "@/components/ui/action";
import { Reveal, RevealHeading, RevealImage } from "@/components/ui/reveal";
import { availability, type EventStatus } from "@/data/events";
import type { ProgrammeType } from "@/data/live-programmes";
import { sectionNumber } from "@/data/sections";
import { strength } from "@/data/strength";
import { whatsappFor } from "@/data/site";
import { cn } from "@/lib/utils";

const STATUS_LABEL: Record<EventStatus, string> = {
  open: "Booking now",
  limited: "Limited places",
  closed: "Closed",
  soon: "Coming soon",
};

const STATUS_CLASS: Record<EventStatus, string> = {
  open: "border-red-500 text-red-400",
  limited: "border-gold-400 text-gold-400",
  closed: "border-line text-bone-600",
  soon: "border-line-str text-bone-400",
};

type Slug = keyof typeof availability;

interface Tab {
  slug: Slug;
  eventType?: ProgrammeType;
  /** Full name, shown from sm up. */
  label: string;
  /** Short name, so four tabs fit a 375px screen. */
  short: string;
  tier: string;
  name: string;
  promise: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  detailsHref: string;
  /** Falls back to the availability CTA label. */
  defaultCta: string;
}

/**
 * The four core programmes.
 *
 * Defined explicitly here rather than derived from `coreServices`, because
 * Strength & Conditioning was promoted to a core programme (client decision,
 * 30 July) and it is not a `/programmes/` route — it has its own top-level page.
 * Deriving the tabs from one array would have meant bending that array's shape to
 * fit an exception; listing the four plainly is shorter and easier to reorder.
 */
const TABS: Tab[] = [
  {
    slug: "one-to-one",
    label: "One-to-One",
    short: "1-2-1",
    tier: "Private",
    name: "Masterclass One-to-One Coaching",
    promise: "Every session is built entirely around one player.",
    bullets: [
      "Initial technical assessment and video analysis",
      "Individual coaching programme",
      "WhatsApp support group with player, parents and coaches",
      "Session reports after every lesson",
    ],
    image: oneToOneImage,
    imageAlt: "Young cricketer crouched with a bat inside a floodlit indoor net",
    detailsHref: "/programmes/one-to-one",
    eventType: "one_to_one",
    defaultCta: "Book a Session",
  },
  {
    slug: "group-sessions",
    label: "Group Sessions",
    short: "Group",
    tier: "Group",
    name: "Masterclass Group Sessions",
    promise: "The same coaching philosophy, delivered in a group.",
    bullets: [
      "Ability-based coaching groups",
      "Bespoke coaching plans",
      "Tactical match awareness",
      "Confidence and mindset coaching",
    ],
    image: groupImage,
    imageAlt: "Three teenage cricketers waiting to bat in a dark indoor net",
    detailsHref: "/programmes/group-sessions",
    eventType: "group",
    defaultCta: "Join a Group",
  },
  {
    slug: "cricket-camps",
    label: "Cricket Camps",
    short: "Camps",
    tier: "Holiday",
    name: "Masterclass Cricket Camps",
    promise: "Professional coaching, outstanding facilities, genuine enjoyment.",
    bullets: [
      "Professional cricket facilities",
      "Structured batting, bowling and fielding",
      "Competitive challenges and match scenarios",
      "Parent feedback at the end of every day",
    ],
    image: campsImage,
    imageAlt: "Cricket ground under a single floodlight with players training at dusk",
    detailsHref: "/programmes/cricket-camps",
    eventType: "camp",
    defaultCta: "Reserve a Place",
  },
  {
    slug: "strength-conditioning",
    label: "Strength & Conditioning",
    short: "S&C",
    tier: "Performance",
    name: strength.title,
    promise: "Your body has to be capable of the movement your technique demands.",
    bullets: [
      "Sports-science performance screening",
      "Full physical movement assessment",
      "Cricket performance assessment with your coach",
      "A bespoke plan — no two players get the same",
    ],
    // Reusing the floodlit ground shot. It is the weakest of the four images for
    // this tab — S&C wants a gym or a screening session, not a cricket ground.
    // Swap it when the client supplies a photograph of Anshul working with a
    // player, which is also outstanding for SC-02.
    image: scImage,
    imageAlt: "Cricketers training under floodlights",
    detailsHref: "/strength-conditioning",
    defaultCta: "Book an S&C Assessment",
  },
];

function StatusBadge({ status }: { status: EventStatus }) {
  return (
    <span className={cn("text-label shrink-0 border px-2 py-1", STATUS_CLASS[status])}>
      {STATUS_LABEL[status]}
    </span>
  );
}

/**
 * 01 — Coaching.
 *
 * MERGES WHAT WERE FOUR SEPARATE BLOCKS: a "What's On" availability section, a
 * three-card services section selling the same programmes, and two indoor
 * programme sections. Two of them competed to be where a parent decides, and the
 * indoor programme had three appearances for something with no confirmed dates.
 *
 * Now one section, one tab per programme, each carrying what it is, what is
 * included, whether it is currently running, and where to book — so availability
 * and offer are read together instead of a screen apart.
 *
 * The heading and tagline moved up from the closing "Ready to start?" band, which
 * has been removed from the homepage: it offered three routes into the same four
 * programmes these tabs already cover, one screen after the WhatsApp float and
 * the header's Book Now had both been on screen the whole way down.
 *
 * ALL FOUR PANELS ARE FORCE-MOUNTED. Radix unmounts inactive panels by default,
 * which would hide three-quarters of the coaching copy from search engines and
 * from in-page find. They are all in the DOM, hidden with CSS.
 */
export function Coaching() {
  return (
    <section
      id="coaching"
      aria-labelledby="coaching-heading"
      className="section-y border-t border-line"
    >
      <div className="shell">
        <p className="text-label text-bone-400">
          <span className="text-red-400">{sectionNumber("coaching")}</span> / Coaching
        </p>

        <RevealHeading
          as="h2"
          id="coaching-heading"
          className="text-display-lg mt-6 text-bone-100"
          lines={["Ready to start?"]}
        />

        <p className="text-body-lg mt-6 max-w-[62ch] text-bone-400">
          Four ways to train with us. Pick the one that matches what you need.
        </p>

        <Tabs.Root defaultValue="one-to-one" className="mt-12">
          {/* Scrollable, not wrapped. Four tabs are tight at 375px even with the
              short labels, and a wrapped tab row reads as two rows of unrelated
              buttons. Horizontal scroll with snap keeps it one row. */}
          <Tabs.List
            aria-label="Coaching programmes"
            className="flex snap-x gap-1 overflow-x-auto border-b border-line pb-px sm:gap-2"
          >
            {TABS.map((tab) => (
              <Tabs.Trigger
                key={tab.slug}
                value={tab.slug}
                className={cn(
                  "text-label -mb-px shrink-0 snap-start border-b-2 px-3 py-3 outline-none transition-colors duration-200 ease-brand sm:px-4",
                  "border-transparent text-bone-400 hover:text-bone-100",
                  "data-[state=active]:border-red-500 data-[state=active]:text-bone-100",
                )}
              >
                <span className="sm:hidden">{tab.short}</span>
                <span className="hidden sm:inline">{tab.label}</span>
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {TABS.map((tab) => {
            const avail = tab.eventType ? undefined : availability[tab.slug];

            return (
              <Tabs.Content
                key={tab.slug}
                value={tab.slug}
                forceMount
                className="data-[state=inactive]:hidden focus-visible:outline-none"
              >
                <div className="grid items-start gap-8 pt-10 lg:grid-cols-2 lg:gap-16">
                  <figure className="relative aspect-[4/3] overflow-hidden lg:aspect-[4/5]">
                    <RevealImage
                      src={tab.image}
                      alt={tab.imageAlt}
                      width={1280}
                      height={1600}
                      className="size-full"
                    />
                  </figure>

                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="text-label text-red-400">{tab.tier}</p>
                      {avail && <StatusBadge status={avail.status} />}
                    </div>

                    <h3 className="text-display-md mt-5 text-bone-100">{tab.name}</h3>
                    <p className="text-body-lg mt-4 text-bone-400">{tab.promise}</p>

                    {/* Availability sits with the offer — the point of the merge. */}
                    {avail && (
                      <p className="text-label mt-6 border-y border-line py-3 text-bone-100">
                        {avail.when}
                      </p>
                    )}

                    <ul className="mt-6">
                      {tab.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="text-body flex items-baseline gap-3 border-b border-line py-3 text-bone-100"
                        >
                          <span aria-hidden="true" className="shrink-0 text-red-400">
                            —
                          </span>
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    {/* The winter indoor programme: the detail behind Group
                        Sessions' "from October", not a separate offer with its
                        own button. */}
                    {tab.eventType === "one_to_one" ? (
                      <HomepageProgrammeUpdates type={tab.eventType} />
                    ) : null}

                    <Reveal delay={0.05}>
                      <div className="mt-8 flex flex-wrap items-center gap-6">
                        {/* Label and topic come from `availability`, so a
                            programme that is not currently bookable says
                            "Register Your Interest" rather than promising a
                            place that does not exist. */}
                        {(avail || tab.slug === "one-to-one") && (
                          <ActionAnchor
                            href={whatsappFor(avail?.whatsappTopic ?? tab.name)}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {avail?.ctaLabel ?? tab.defaultCta}
                          </ActionAnchor>
                        )}
                        <Link to={tab.detailsHref} className="link-wipe text-sm">
                          Full details <span aria-hidden="true">→</span>
                        </Link>
                      </div>
                    </Reveal>
                  </div>
                </div>
                {tab.eventType === "camp" && (
                  <div className="mt-10 border-t border-line pt-10">
                    <LiveCampDetails />
                  </div>
                )}
                {tab.eventType === "group" && (
                  <div className="mt-10 border-t border-line pt-10">
                    <HomepageProgrammeUpdates type="group" />
                  </div>
                )}
              </Tabs.Content>
            );
          })}
        </Tabs.Root>
      </div>
    </section>
  );
}
