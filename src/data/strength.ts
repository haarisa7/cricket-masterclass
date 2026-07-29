/**
 * SC-01 to SC-12 — the Strength & Conditioning performance programme.
 *
 * Positioned as a core service with its own route and nav entry, per SC-01,
 * rather than a sub-page footnote.
 *
 * OUTSTANDING:
 *  - SC-02: the bio copy is now the client's, verbatim, but Anshul still has no
 *    headshot. Every other coach on the site has a portrait, so a photo-less
 *    S&C coach stands out on the page.
 *  - SC-03: the Vault Performance partnership, and permission to use their name
 *    and the ForceDecks / Dynamo / Speed Gates product names, must be confirmed
 *    in writing before this page goes live.
 */

export const strength = {
  title: "Masterclass Strength & Conditioning Performance Programme",
  intro: [
    "Cricket performance isn't just about technical coaching. To perform at your highest level, your body must be capable of producing the movement patterns your technique demands.",
    "The Masterclass Strength & Conditioning Performance Programme combines cricket coaching, biomechanics and sports science to develop stronger, faster and more resilient athletes.",
    "Every programme is completely bespoke, designed around the individual player's age, physical development, playing position and long-term goals.",
  ],

  /**
   * SC-02 — the client's three paragraphs from Part 2 Section 29, verbatim.
   *
   * Rendered as prose rather than a numbered list: the brief presents them 1–3,
   * but that is its own auto-numbering, not a three-step sequence. Same
   * treatment as UZI-01 and ANI-01.
   */
  coach: {
    name: "Anshul Vats",
    role: "Lead Strength & Conditioning Coach",
    sectionHeading: "Meet Our Strength & Conditioning Coach",
    bio: [
      "Anshul Vats holds a Master's degree in Strength & Conditioning and has worked within the Delhi Capitals IPL Pathway Programme, helping develop young cricketers through elite physical preparation.",
      "Working with batters, fast bowlers, spin bowlers and fielders, Anshul designs individual strength and conditioning programmes that improve athletic performance while reducing injury risk.",
      "His coaching philosophy is simple: identify each athlete's physical limitations, then build a structured programme that develops strength, movement quality, speed and power specific to cricket.",
    ],
  },

  /** SC-03 to SC-06 — the four assessment stages. */
  stages: [
    {
      index: "01",
      name: "Performance Screening",
      body: "In partnership with Vault Performance, players undergo sports-science testing using industry-leading technology. These assessments help identify physical strengths, asymmetries and areas requiring development.",
      items: ["ForceDecks", "Dynamo strength testing", "Speed Gates", "GPS Performance Tracking"],
    },
    {
      index: "02",
      name: "Physical Movement Assessment",
      body: "Players complete a comprehensive physical screening. This allows us to understand how the athlete moves and where physical limitations may be affecting performance.",
      items: [
        "Mobility",
        "Stability",
        "Strength",
        "Balance",
        "Movement quality",
        "Athletic control",
        "Force production",
      ],
    },
    {
      index: "03",
      name: "Cricket Performance Assessment",
      body: "This ensures the strength programme directly supports improvements within the player's cricket technique.",
      splits: [
        {
          heading: "Fast Bowlers",
          detail:
            "Head Coach Uzi Arif reviews bowling mechanics to identify technical inefficiencies, movement leakages and areas limiting pace, consistency and performance.",
        },
        {
          heading: "Batters",
          detail:
            "Assistant Head Coach Ani Reddy reviews batting technique, movement patterns, power generation and efficiency to identify physical limitations affecting performance.",
        },
      ],
    },
    {
      index: "04",
      name: "Bespoke Performance Plan",
      body: "Once every assessment is complete, Anshul analyses all available data before creating a completely individual S&C programme. No two players receive the same programme.",
      items: [
        "Age",
        "Playing role",
        "Physical strengths",
        "Physical weaknesses",
        "Injury history",
        "Cricket calendar",
        "Performance goals",
      ],
    },
  ],

  /**
   * SC-07 — memberships.
   *
   * `price` is deliberately absent. Pricing is not confirmed (pre-launch check
   * 21), and the card renders "Enquire for pricing" rather than collapsing to
   * an empty slot — a visibly blank price reads as a broken page.
   */
  memberships: [
    { term: "One Month" },
    { term: "Three Months" },
    { term: "Six Months" },
    { term: "Twelve Months" },
  ],
  membershipNote: "Each membership includes ongoing programme updates as the athlete develops.",

  /** SC-08 / SC-09 — presented as one choice, not two sections. */
  programmes: [
    {
      name: "Home Performance Programme",
      detail:
        "Designed for players without gym access. Programmes use available space and equipment. Ideal for younger athletes or players training from home.",
      items: ["Strength", "Mobility", "Stability", "Speed", "Power", "Injury resilience"],
    },
    {
      name: "Gym Performance Programme",
      detail:
        "Designed for athletes with access to a commercial or home gym. Structured resistance training to maximise performance across the board.",
      items: [
        "Strength",
        "Explosive power",
        "Sprint performance",
        "Jump performance",
        "Force production",
        "Bowling speed",
        "Batting power",
        "Overall athletic development",
      ],
    },
  ],

  /** SC-10 */
  oneToOne: {
    heading: "One-to-One Strength & Conditioning",
    body: "Private one-to-one S&C sessions with Anshul Vats.",
    items: [
      "Individual coaching",
      "Exercise technique correction",
      "Gym confidence",
      "Physical assessments",
      "Performance testing",
      "Programme reviews",
    ],
    // Shortened from the brief's "Book a Strength & Conditioning Assessment"
    // (41 characters). The full phrase is kept as the accessible label.
    ctaLabel: "Book an S&C Assessment",
    ctaAria: "Book a Strength and Conditioning Assessment on WhatsApp",
  },

  /** SC-11 — deliberately subordinate: a different audience from every other
   *  page on the site, and it must not read as the academy's main offer. */
  parentTraining: {
    heading: "Personal Training for Parents",
    body: "Masterclass Cricket also offers Personal Training for parents. While children attend coaching at King's House Sports Ground, parents can work with Anshul Vats on their own goals.",
    items: [
      "Weight loss",
      "General fitness",
      "Strength training",
      "Mobility",
      "Injury prevention",
      "Lifestyle improvement",
    ],
    ctaLabel: "Enquire About Personal Training",
  },

  /** SC-12 */
  why: {
    heading: "Why Choose the Masterclass Performance Programme",
    body: "Rather than separating technical coaching from physical development, Masterclass Cricket combines both into one integrated system.",
    items: [
      "Better movement efficiency",
      "Greater strength and power",
      "Reduced injury risk",
      "Improved speed and athleticism",
      "More effective batting and bowling mechanics",
      "Long-term physical development tailored specifically to cricket",
    ],
  },
} as const;
