import anirudhImage from "@/assets/coach-anirudh.png";
import ollieImage from "@/assets/coach-ollie.png";
import uziImage from "@/assets/coach-uzi.jpg";

/* ------------------------------------------------------------------ people */

export interface Coach {
  name: string;
  role: string;
  experience: string;
  qualification?: string;
  /** One or more paragraphs. Cards clamp to the first; profiles show them all. */
  bio: string[];
  specialisms?: string[];
  image?: string;
  imageAlt?: string;
}

/**
 * TEAM-01 to TEAM-05.
 *
 * Patrick Littlemore has been removed entirely (TEAM-05) — his card, his
 * portrait import and the mention of him in the /coaches meta description are
 * all gone. The asset file src/assets/coach-patrick.png is now unreferenced
 * and can be deleted from the repo.
 *
 * The grid that renders these drops to three columns to match. Leaving it at
 * four would put an empty quarter on every desktop viewport.
 *
 * OPEN QUESTIONS still attached to this array:
 *  - TEAM-04: "Oliver" is used below because that is the brief's spelling; the
 *    site previously said "Ollie". The brief also says "ECB Super 4s" and
 *    "Durham University Cricket Club" where the site said "ECB Young Lions
 *    Super 4s" and "Durham University UCCE". The brief's wording is used, but
 *    the row itself asks for client verification before publishing.
 *  - ANI-01 vs TEAM-03: Anirudh's experience was stated three different ways
 *    (5, 6 and 7 years). TEAM-03 is the more specific instruction, so 7+ is
 *    used consistently here and in the bio.
 */
export const coaches: Coach[] = [
  {
    name: "Uzi Arif",
    role: "Founder and Head Coach",
    experience: "10+ seasons",
    bio: [
      "Former county cricketer and international franchise coach with over 10 seasons in the professional game. Officially recorded bowling at 92.4mph at Loughborough University.",
    ],
    image: uziImage,
    imageAlt: "Uzi Arif, founder and head coach at Masterclass Cricket",
  },
  {
    name: "Anirudh Reddy",
    role: "Assistant Head Coach & Lead Batting Coach",
    experience: "7+ Years",
    qualification: "ECB-Qualified Coach",
    /**
     * ANI-01 — the client's five-paragraph bio from Part 2 Section 3, verbatim
     * with ONE deliberate change: paragraph 1 reads "more than seven years"
     * where the brief says "more than six". The years figure was stated three
     * different ways across the brief and the old site (5, 6 and 7); TEAM-03 is
     * the more specific instruction, so 7+ is used everywhere — the badge, the
     * card and this bio. Leaving the brief's "six" here would have put the
     * conflict back inside the bio itself.
     *
     * This replaces the three shorter paragraphs TEAM-03 supplies for the card.
     * The two passages describe the same person in near-identical terms, and
     * running both would have printed the same claims twice on one card. Section
     * 3 is the fuller version, so it is the one kept; TEAM-03's other two
     * requirements (the 7+ figure and "ECB-Qualified Coach") are separate fields
     * above and are unaffected.
     */
    bio: [
      "Anirudh Reddy has worked alongside Uzi Arif at Masterclass Cricket for more than seven years, developing an advanced understanding of the technical, tactical and psychological demands of batting.",
      "Through years of practical coaching, player analysis and mentoring under Uzi, Ani has developed into a highly accomplished batting coach. His strength lies in breaking complicated technical problems into simple explanations, practical drills and clear movements that players can understand and repeat.",
      "Ani works with batters of different ages and abilities, helping them improve their foundations, scoring options, decision-making, confidence and ability to perform under pressure.",
      "He has supported hundreds of Masterclass Cricket players, including batters who have gone on to score significant match-winning innings, represent county programmes and progress into higher-performance environments.",
      "His approach reflects the Masterclass philosophy: understand the player first, diagnose the real problem and create the simplest effective solution.",
    ],
    specialisms: [
      "Technical batting development",
      "Movement and alignment",
      "Scoring options and strike rotation",
      "Playing pace and spin",
      "Batting plans and decision-making",
      "Confidence and performance under pressure",
    ],
    image: anirudhImage,
    imageAlt: "Anirudh Reddy, assistant head coach at Masterclass Cricket",
  },
  {
    name: "Oliver Sheen",
    role: "Masterclass Coach",
    experience: "7+ Years",
    bio: [
      "Oliver Sheen is a product of the Masterclass Cricket Academy and began training under Uzi Arif at the age of 13.",
      "He has represented Surrey age-group cricket, the ECB Super 4s and Durham University Cricket Club.",
      "Oliver also brings international playing experience from Australia, Sri Lanka, South Africa and India, giving him a broad understanding of different conditions, cultures and approaches to the game.",
      "Having developed through the Masterclass system himself, Oliver understands the standards, coaching methods and expectations required to help the next generation of players improve.",
    ],
    image: ollieImage,
    imageAlt: "Oliver Sheen, coach at Masterclass Cricket",
  },
];

/**
 * UZI-01 / UZI-02 — the founder page.
 *
 * `story` is the client's six-paragraph bio from Part 2 Section 2, verbatim.
 *
 * The brief presents these six as a numbered list, but that is its own
 * auto-numbering rather than meaningful sequence — they are prose paragraphs of
 * one continuous biography, so they render as paragraphs. Numbering them would
 * imply a six-step process, which is not what they are. (Same auto-numbering
 * artefact the change log flags on MTH-01.)
 *
 * `highlights` (UZI-02) is the eight-item career list, which replaced the old
 * four-cell facts grid.
 */
export const founder = {
  name: "Uzi Arif",
  nickname: "The Rocketman",
  role: "Founder and Head Coach",
  intro:
    "Over a decade in the professional game, a ball officially recorded at 92.4mph at Loughborough University, and a coaching method built on everything that career taught him about pace, pressure and repeatable technique.",
  story: [
    "Uzi Arif is a former county cricketer, international franchise coach and one of the UK's leading private cricket coaches.",
    "During his playing career, Uzi represented several county organisations and was officially clocked bowling at 92.4mph at Loughborough University. His best match bowling performance was 11 wickets for 73 runs against Northamptonshire.",
    "His professional experience also includes working as a net bowler with Sunrisers Hyderabad in the Indian Premier League and serving as Assistant Bowling and Fielding Coach for the Chattogram Challengers in the Bangladesh Premier League.",
    "Uzi now combines more than a decade of high-level playing experience with an advanced understanding of biomechanics, technique, tactics and player development.",
    "Through Masterclass Cricket, he has helped thousands of players improve their game, with students progressing into representative county cricket, academy programmes and professional environments.",
    "His coaching philosophy is built around identifying the cause of a performance problem — not simply treating what can be seen on the surface — and then creating a clear, individual pathway for improvement.",
  ],
  quote:
    "Playing experience alone doesn't create great coaches, and neither do coaching qualifications.",
  /** UZI-02 — eight items, rendered as a list rather than a four-cell grid. */
  highlights: [
    "Former county fast bowler",
    "Officially clocked at 92.4mph",
    "Best bowling figures: 11–73 against Northamptonshire",
    "Sunrisers Hyderabad IPL net bowler",
    "Assistant Bowling and Fielding Coach in the Bangladesh Premier League",
    "More than a decade of professional playing experience",
    "Founder and Head Coach of Masterclass Cricket",
    "Specialist batting, bowling and fast-bowling coach",
  ],
  mission:
    "To create well-rounded cricketers who excel in skill, mindset, and resilience, both on and off the field.",
  vision:
    "To empower the next generation of cricketers with innovative coaching, tailored to each individual's journey.",
} as const;

/* ---------------------------------------------------- journey and venues */

/**
 * JRN-01 to JRN-03 — a new section. Nothing equivalent existed in this build.
 *
 * The highlight strip is stored as three items rather than the brief's single
 * sentence. As one line it is ~95 characters and wraps to four lines on a
 * phone, which is the opposite of a highlight; as three items it stacks on
 * mobile and joins into one line from md up. The words are unchanged.
 */
export const journey = {
  heading: "Over a Decade of Coaching Across West London",
  body: [
    "Masterclass Cricket was established after more than a decade of coaching and developing players within the Richmond and Chiswick cricket community.",
    "Head Coach Uzi Arif spent over 10 years working at Richmond Cricket Club, supporting the development of its Colts section, improving coaching standards and helping players progress through the club pathway.",
    "As Masterclass Cricket continued to grow, the academy required a larger and more professional environment. We therefore moved our main coaching base to King's House Sports Ground in Chiswick, which is now the home of our one-to-one coaching, group programmes and holiday camps.",
    "Masterclass Cricket also works in partnership with Chiswick Cricket Club and delivers specialist coaching support at Sheen Cricket Club and Hampton Hill Cricket Club. Our coaches work with junior age groups and adult teams to strengthen coaching structures and deliver targeted batting, bowling and fielding masterclasses.",
  ],
  highlight: [
    "Founded in Richmond.",
    "Developed across West London.",
    "Now based at King's House Sports Ground, Chiswick.",
  ],
} as const;

/**
 * VEN-01 — venues split into three explicit groups.
 *
 * The grouping is the point of the row: listing every club in one flat list
 * implies regular sessions run at all of them. "Academy history" keeps
 * Richmond CC visible without claiming an active partnership.
 *
 * OPEN QUESTIONS: (a) whether Richmond CC is still an active partner or
 * history only — it is listed as history here, which is the safer reading of
 * the brief; (b) the Sheen CC / Sheen Park CC naming conflict, which also
 * affects the partner wall in site.ts.
 */
export const venues = [
  {
    group: "Current coaching venues",
    note: "Where our sessions actually run.",
    items: [
      { name: "King's House Sports Ground, Chiswick", detail: "Main coaching base" },
      { name: "St Paul's School", detail: "Indoor programme, October–April" },
    ],
  },
  {
    group: "Partner clubs",
    note: "Clubs we work with to deliver specialist coaching support.",
    items: [
      { name: "Chiswick Cricket Club", detail: "Partnership" },
      { name: "Sheen Cricket Club", detail: "Specialist coaching support" },
      { name: "Hampton Hill Cricket Club", detail: "Specialist coaching support" },
    ],
  },
  {
    group: "Academy history",
    note: "Where Masterclass Cricket came from.",
    items: [{ name: "Richmond Cricket Club", detail: "10+ years developing the Colts section" }],
  },
] as const;

/* ------------------------------------------------------------------- about */

/**
 * ABT-01 to ABT-04.
 *
 * `headingLines` is split for the page masthead rather than stored as one
 * string: the client's heading is 76 characters and at display-xl it runs to
 * four lines on a phone. Splitting it lets the short form lead and the county
 * list sit beneath as a sub-line, without changing a word.
 *
 * `philosophy` here is the LONG version (ABT-02). The homepage carries the
 * shorter PHIL-01 version from content.ts. They are deliberately different so
 * the two pages do not read as duplicates.
 */
export const about = {
  headingLines: ["Over 10 Years of Coaching"],
  headingSub: "Across Richmond, Chiswick, Berkshire and Buckinghamshire",
  intro:
    "Masterclass Cricket combines advanced biomechanics with professional playing experience to develop cricketers of every ability. We identify the technical adjustment that matters and design the drill that makes it stick.",
  philosophy: [
    "At Masterclass Cricket, our greatest strength isn't simply identifying what looks wrong — it's understanding why it's happening.",
    "Rather than treating visible symptoms, we identify the root cause of a player's technical or tactical problem. By understanding the movement patterns, biomechanics and decision-making behind each skill, we're able to make precise coaching interventions that lead to faster, more lasting improvement.",
    "Every drill we design has a purpose. We don't believe in generic coaching or repetitive practice without direction. Each exercise is selected to solve a specific problem and help players transfer those improvements into match performance.",
    "This ability to diagnose problems accurately and create simple, effective solutions is one of the reasons families trust Masterclass Cricket with their long-term development.",
  ],
  /** ABT-03 — highlight block sitting directly under the philosophy copy. */
  whyFamiliesChoose: [
    "Root-cause coaching rather than symptom-based coaching",
    "Bespoke technical programmes for every individual",
    "Strong understanding of biomechanics and movement",
    "Simple drills that create lasting technical changes",
    "Clear development plans with measurable progression",
  ],
  /**
   * ABT-04 — credibility through player development.
   *
   * COMPLIANCE NOTE: this is a comparative performance claim about identifiable
   * children ("among the fastest in their age groups"). Confirm the client can
   * evidence it and that parental consent exists before this goes live.
   */
  credibility:
    "Our coaching methods have helped develop some of the country's most exciting young fast bowlers, including players recognised among the fastest in their age groups at Under-7, Under-9, Under-11 and Under-13 level. Their success reflects our ability to build efficient movement patterns, strong technical foundations and long-term athletic development from an early age.",
  closing:
    "No matter whether you're a coach, a parent, a student or a cricket enthusiast — the work we publish is designed to give you information you can actually use.",
} as const;

/* --------------------------------------------------------------- programmes */
/*
 * ELIT-01: the Elite Academy is gone. Its data object, its homepage section,
 * its /elite-academy route and its trial application CTA have all been
 * removed, along with the only mention of Fahim Qureshi anywhere on the site.
 * The URL was indexed, so it is 301'd in public/_redirects rather than left to
 * 404. The slot it occupied on the homepage is now the indoor programme
 * promotion (ELIT-02), which is now a line inside the Group Sessions tab.
 */

export interface Programme {
  slug: string;
  tier: string;
  name: string;
  /** Optional display heading, where the brief supplies one (CAMP-01). */
  heading?: string;
  promise: string;
  /**
   * One or more paragraphs. This was a single string until 1TO1-01/GRP-02/
   * CAMP-02, all of which supply three or four paragraphs — as one string they
   * collapsed into a single unreadable block.
   */
  intro: string[];
  includes: string[];
  suitedTo: string;
  /**
   * Label/value rows. `value` may be an array, which renders as separate chips
   * rather than one long string — "1 Hour / 90 Minutes / 2 Hours / 3 Hours"
   * wraps to three lines on a phone as a single value (1TO1-04).
   */
  format: { label: string; value: string | string[] }[];
  /** Camps check out through ClassForKids; everything else opens WhatsApp. */
  booking: "camps" | "whatsapp";
  ctaLabel: string;
}

export const programmes: Programme[] = [
  {
    slug: "one-to-one",
    tier: "Private",
    name: "Masterclass One-to-One Coaching",
    heading: "Individual Coaching. Clear Diagnosis. Measurable Progress.",
    promise: "Every session is built entirely around one player.",
    intro: [
      "We film, analyse and assess every aspect of your game, including technique, movement patterns, tactical understanding and mindset. During the session we explain exactly what is happening, identify the key areas limiting performance and begin correcting those faults immediately.",
      "After the session our coaches review everything in greater detail before producing an individual development plan based around your availability, training frequency and long-term goals.",
      "Every session has a clear purpose. We identify the main areas restricting performance, explain them through video and practical demonstrations, and use targeted Masterclass drills to create lasting improvement.",
    ],
    includes: [
      "Initial technical assessment and video analysis",
      "Individual coaching programme",
      "WhatsApp support group with player, parents and coaches",
      "Session reports after every lesson",
      "Homework drills to complete between sessions",
      "Technical videos where required",
      "Indoor coaching (October–April)",
      "Outdoor coaching (April–October)",
    ],
    suitedTo:
      "Suitable for players aged 4 to adult who genuinely want to improve their cricket. Whether you're learning the basics, preparing for county trials or refining elite performance, every programme is tailored specifically to your needs.",
    format: [
      { label: "Format", value: ["1 Hour", "90 Minutes", "2 Hours", "3 Hours"] },
      { label: "Ratio", value: "1 Coach : 1 Player" },
      { label: "Venue", value: "King's House Sports Ground (plus seasonal indoor venues)" },
      { label: "Ages", value: "4+" },
    ],
    booking: "whatsapp",
    ctaLabel: "Book a Session on WhatsApp",
  },
  {
    slug: "group-sessions",
    tier: "Group",
    name: "Masterclass Group Sessions",
    heading: "Masterclass Group Coaching Sessions",
    promise: "Structured cricket development delivered in an engaging group environment.",
    intro: [
      "Our group sessions follow the same Masterclass coaching philosophy as our one-to-one programme.",
      "Every session is tailored to the group's ability rather than delivering generic drills. Coaches assess the players before creating structured coaching programmes focusing on technical development, tactical awareness, mindset and decision making.",
      "Masterclass group sessions are not conventional net sessions. Every coaching block follows a planned curriculum based on the age, ability and development needs of the group.",
      "Players learn through technical coaching, pressure-based drills, competitive scenarios and tactical challenges. The sessions remain enjoyable, but every activity has a clear coaching purpose.",
    ],
    includes: [
      "Ability-based coaching groups",
      "Bespoke coaching plans",
      "Batting, bowling and fielding development",
      "Tactical match awareness",
      "Decision-making under pressure",
      "Competitive game scenarios",
      "Confidence and mindset coaching",
      "Regular progress feedback",
    ],
    suitedTo:
      "Ideal for players who enjoy learning in a group environment whilst still receiving structured coaching. Sessions combine enjoyment, competition and technical improvement rather than simply providing net practice.",
    format: [
      { label: "Ratio", value: "Ability-based groups" },
      { label: "Venue", value: "King's House Sports Ground, Chiswick" },
      { label: "Structure", value: "Progressive coaching blocks" },
    ],
    booking: "whatsapp",
    ctaLabel: "Join a Group on WhatsApp",
  },
  {
    slug: "cricket-camps",
    tier: "Holiday",
    name: "Masterclass Cricket Camps",
    heading: "Invest in Proper Coaching, Not Babysitting",
    promise: "Professional coaching, outstanding facilities and purposeful learning.",
    intro: [
      "Masterclass Cricket Camps combine professional coaching, outstanding facilities and purposeful learning with the enjoyment every child should experience during the school holidays.",
      "Children train on proper cricket squares, artificial pitches and dedicated cricket facilities at King's House Sports Ground, not an unprepared patch of grass.",
      "Each day includes structured batting, bowling and fielding development, competitive challenges and match scenarios delivered by experienced professional coaches.",
      "Our coaches make every activity enjoyable, but every drill has a purpose. Children leave having learned something meaningful that they can take into their next training session or match.",
    ],
    includes: [
      "Professional cricket facilities — nets, astroturf and grass wicket pitches",
      "Structured batting, bowling and fielding development",
      "Competitive challenges and match scenarios",
      "A personal report card with key strengths and areas to improve",
      "Daily awards, ice cream treats and certificates for all achievers",
      "Parent feedback at the end of every day",
    ],
    suitedTo:
      "Boys and girls aged 6 to 13 who want a genuine week of cricket in the school holidays, coached properly rather than simply supervised.",
    /* Concrete figures taken from the client's 2026 Summer Camp poster, which is
       also the source for the live events block — see src/data/events.ts. Keep
       the two in step: a parent who sees £70 on the homepage and something else
       here will not trust either number. */
    format: [
      { label: "Times", value: "10:00am – 4:00pm, Monday to Thursday" },
      { label: "Ages", value: "6 to 13" },
      { label: "Options", value: ["Full day £70", "Half day £40", "Full week £250"] },
      { label: "Venue", value: "King's House Sports Ground, Chiswick" },
    ],
    booking: "camps",
    ctaLabel: "Reserve a Place",
  },
  {
    slug: "schools",
    tier: "Schools",
    name: "School Teacher Cricket Coaching Programmes",
    promise:
      "Professional training to improve teachers' cricket knowledge, session delivery and confidence when coaching pupils.",
    intro: [
      "We deliver cricket into the school timetable and leave the staff more capable than we found them — so the programme keeps running when we're not there.",
    ],
    includes: [
      "In-curriculum PE delivery",
      "After-school clubs and squad training",
      "CPD and teacher upskilling sessions",
      "Full risk assessments and DBS-checked staff",
    ],
    suitedTo:
      "Primary and secondary schools across West London wanting credible cricket provision rather than a supply session.",
    format: [
      { label: "Format", value: "Half-day or full-day blocks" },
      { label: "Term", value: "Half-term, termly or annual" },
      { label: "Venue", value: "On site at your school" },
      { label: "Staff", value: "DBS-checked, safeguarding trained" },
    ],
    booking: "whatsapp",
    ctaLabel: "Talk to Us on WhatsApp",
  },
  {
    slug: "tours",
    tier: "Tours",
    name: "Tours for Clubs and Members",
    promise:
      "Tailored cricket tours and development experiences for teams, clubs and individual members.",
    intro: [
      "Fixtures, grounds, travel, accommodation and coaching support arranged end to end. You turn up and play.",
    ],
    includes: [
      "Fixture programme arranged against local sides",
      "Travel, accommodation and ground logistics",
      "Coaching staff travelling with the squad",
      "Parent and player briefing pack before departure",
    ],
    suitedTo:
      "Clubs, school squads and member groups wanting a tour that is a genuine cricket trip rather than a holiday with pads.",
    format: [
      { label: "Destinations", value: "UK and overseas" },
      { label: "Duration", value: "Long weekend to two weeks" },
      { label: "Group size", value: "12 to 30" },
      { label: "Lead time", value: "6 months recommended" },
    ],
    booking: "whatsapp",
    ctaLabel: "Plan a Tour on WhatsApp",
  },
  {
    slug: "corporate",
    tier: "Corporate",
    name: "Corporate Cricket and Team Building",
    promise:
      "Inclusive cricket activities designed to improve communication, teamwork and engagement within organisations.",
    intro: [
      "A half day of cricket built for mixed ability — genuinely competitive, genuinely inclusive, and run by coaches who can teach someone the game in ten minutes.",
    ],
    includes: [
      "All equipment provided",
      "Complete beginners fully catered for",
      "Structured competition format",
      "Indoor or outdoor depending on season",
    ],
    suitedTo:
      "Company away days, client events and team socials that want an activity people actually remember.",
    format: [
      { label: "Duration", value: "Half day" },
      { label: "Group size", value: "10 to 40" },
      { label: "Venue", value: "Chiswick, or a venue of your choosing" },
      { label: "Equipment", value: "Everything supplied" },
    ],
    booking: "whatsapp",
    ctaLabel: "Enquire on WhatsApp",
  },
  {
    slug: "online-batting",
    tier: "Remote",
    name: "Online Batting Assessments",
    promise:
      "Submit footage and receive professional technical analysis, key findings and practical recommendations from a Masterclass coach.",
    intro: [
      "Send us video from three angles. You get back an annotated breakdown of your technique and a corrective drill plan — wherever in the world you are.",
    ],
    includes: [
      "Frame-by-frame annotated analysis",
      "Three prioritised technical corrections",
      "Drill plan with video demonstrations",
      "48-hour turnaround",
    ],
    suitedTo:
      "Players outside West London, or anyone wanting a second opinion on their technique between in-person sessions.",
    format: [
      { label: "Turnaround", value: "48 hours" },
      { label: "You send", value: "Video from three angles" },
      { label: "You get", value: "Annotated report + drill plan" },
      { label: "Location", value: "Anywhere" },
    ],
    booking: "whatsapp",
    ctaLabel: "Start on WhatsApp",
  },
  {
    slug: "online-bowling",
    tier: "Remote",
    name: "Online Bowling Assessments",
    promise:
      "Receive detailed analysis of your bowling action, movement patterns and priority areas for improvement.",
    intro: [
      "A full breakdown of your bowling action — alignment, front-arm, hip-shoulder separation, release — with the drills to change it and the reasoning behind each one.",
    ],
    includes: [
      "Full action breakdown, phase by phase",
      "Injury-risk flags on alignment and load",
      "Corrective drill plan with demonstrations",
      "48-hour turnaround",
    ],
    suitedTo: "Seam and spin bowlers wanting expert eyes on an action without travelling for it.",
    format: [
      { label: "Turnaround", value: "48 hours" },
      { label: "You send", value: "Video from three angles" },
      { label: "You get", value: "Action report + drill plan" },
      { label: "Location", value: "Anywhere" },
    ],
    booking: "whatsapp",
    ctaLabel: "Start on WhatsApp",
  },
  /*
   * PROG-01 / OTH-01: "Mental Mind Mapping" and the "Masterclass Approved
   * Coach Programme" have been removed, along with "Masterclass Academy
   * Sessions" and "Elite Performance Clinics" above. All four slugs were live
   * and in the sitemap, so each is 301'd in public/_redirects.
   */
];

export const programmesBySlug = new Map(programmes.map((p) => [p.slug, p]));

/* ------------------------------------------------------------ safeguarding */

export const safeguarding = {
  intro:
    "Every child and adult at risk who trains with Masterclass Cricket has the right to be safe. This policy sets out how we make that happen and who to contact if something is wrong.",
  updated: "January 2026",
  sections: [
    {
      index: "01",
      name: "Our commitment",
      body: "The welfare of the child is paramount. All children, regardless of age, disability, gender, racial heritage, religious belief, sexual orientation or identity, have the right to protection from all forms of harm and abuse. We work in partnership with children, parents and carers to promote their welfare, health and development.",
    },
    {
      index: "02",
      name: "Staff and vetting",
      body: "All coaches and volunteers working with under-18s hold an in-date enhanced DBS check and have completed ECB-recognised safeguarding training. References are taken up before any coach works unsupervised, and training is refreshed on the ECB's stated cycle.",
    },
    {
      index: "03",
      name: "Codes of conduct",
      body: "Coaches do not have one-to-one unobserved contact with a child. Sessions take place in open, visible spaces. Physical contact is limited to what is necessary to demonstrate a technique safely, is explained first, and is never used where a verbal or visual demonstration would do.",
    },
    {
      index: "04",
      name: "Photography and video",
      body: "We film sessions for coaching analysis. Parents and carers are asked for written consent before any footage of a child is captured, and consent can be withdrawn at any time. Footage used for analysis is shared only with the player and their parent or carer.",
    },
    {
      index: "05",
      name: "Reporting a concern",
      body: "If you are worried about a child's safety, tell us. Concerns are taken seriously, recorded, and referred to the relevant statutory agency where required. You do not need to be certain — reporting a concern is not making an accusation.",
    },
    {
      index: "06",
      name: "In an emergency",
      body: "If a child is in immediate danger, call 999. For non-emergency concerns you can also contact the NSPCC Helpline on 0808 800 5000, or the ECB Safeguarding Team.",
    },
  ],
} as const;
