/**
 * §31 — Masterclass Cricket Consultancy & Overseas Coaching Services.
 *
 * NEW SCOPE. This section arrived after the revision change log was built, so it
 * has no row in the original 80 — the log covers Part 1 §§1–7 and Part 2 §§1–30.
 * Rows CONS-01 to CONS-10 were added to the workbook to track it.
 *
 * The client's copy, verbatim.
 *
 * WHO THIS PAGE TALKS TO, AND WHY IT MATTERS FOR THE DESIGN: this is the only
 * B2B page on the site. Every other page addresses a parent choosing coaching
 * for their child; this one addresses a club chairman, a head of cricket or an
 * academy director deciding whether to hire us. The tone stays the same, but the
 * page assumes an organisation with a budget and a committee rather than one
 * player — which is why it leads on process and outcomes rather than on prices,
 * and why its CTA is "arrange a consultation" rather than "book".
 */

export const consultancy = {
  title: "Masterclass Cricket Consultancy & Overseas Coaching Services",

  intro: [
    "Every cricket club, school and academy has different goals, different players and different challenges. At Masterclass Cricket, we don't believe in delivering the same coaching programme everywhere we go.",
    "Instead, we work alongside your coaches, players and leadership team to understand your environment before creating a bespoke coaching and development programme tailored to your needs.",
    "Whether you're looking to improve player development, educate your coaches or establish a long-term performance pathway, our experienced coaching team can help build a programme that delivers lasting impact.",
  ],

  audience: {
    heading: "Who We Work With",
    lead: "Our consultancy and coaching services are available to:",
    items: [
      "Cricket clubs",
      "Schools and colleges",
      "Cricket academies",
      "County and regional programmes",
      "International cricket organisations",
      "Representative teams",
      "High-performance centres",
      "Individual professional and aspiring professional players",
    ],
    closing:
      "Whether you're based in the UK or overseas, we can tailor a programme to suit your objectives.",
  },

  /** The seven services. This is the substance of the page. */
  services: {
    heading: "Our Services",
    lead: "Every programme is bespoke and can include one or more of the following:",
    items: [
      {
        name: "Coach Education",
        detail:
          "Support your coaching team through practical workshops, mentoring and on-field demonstrations designed to improve coaching standards and session delivery.",
      },
      {
        name: "Masterclass Coaching Clinics",
        detail:
          "Deliver specialist batting, bowling, wicketkeeping and fielding clinics for players of all ages and abilities.",
      },
      {
        name: "Player Assessments",
        detail:
          "Provide detailed technical and tactical assessments, with individual feedback and development recommendations for players.",
      },
      {
        name: "One-to-One Performance Coaching",
        detail:
          "Offer private coaching sessions for players who require more focused technical development.",
      },
      {
        name: "Club & Academy Development",
        detail:
          "Review your current coaching structure and help design a more effective player development pathway, including age-group planning and long-term progression.",
      },
      {
        name: "Performance Planning",
        detail:
          "Work with your leadership team to create structured coaching programmes aligned with the needs of your players and organisation.",
      },
      {
        name: "Parent & Player Education",
        detail:
          "Deliver seminars covering player development, expectations, communication and long-term growth in cricket.",
      },
    ],
  },

  /**
   * The six "Your ..." lines. Deliberately short and parallel, so they get
   * display treatment rather than becoming another bullet list — they are the
   * most quotable thing on the page.
   */
  why: {
    heading: "Why Organisations Choose Masterclass Cricket",
    lead: "Our approach is based on understanding the underlying causes of performance challenges rather than applying generic coaching methods. Every visit is built around:",
    items: [
      "Your players",
      "Your coaches",
      "Your facilities",
      "Your goals",
      "Your culture",
      "Your long-term vision",
    ],
    closing:
      "This enables us to provide practical recommendations and coaching solutions that can continue benefiting your organisation long after the programme has finished.",
  },

  delivery: {
    heading: "UK & International Delivery",
    lead: "Masterclass Cricket delivers consultancy and coaching programmes both across the UK and internationally. Programmes can range from:",
    items: [
      "One-day masterclasses",
      "Weekend coaching clinics",
      "Coach education workshops",
      "Pre-season programmes",
      "In-season support",
      "High-performance camps",
      "Multi-week development projects",
      "Long-term consultancy partnerships",
    ],
    closing: "Each programme is individually designed following an initial consultation.",
  },

  process: {
    heading: "How We Work",
    steps: [
      {
        index: "01",
        name: "Discovery Call",
        detail:
          "We begin by understanding your organisation, your objectives and the areas where you would like support.",
      },
      {
        index: "02",
        name: "Bespoke Proposal",
        detail:
          "Our team creates a tailored coaching or consultancy proposal based on your players, coaches, facilities, timescales and desired outcomes.",
      },
      {
        index: "03",
        name: "Programme Delivery",
        detail:
          "Masterclass Cricket delivers the agreed programme on-site, working closely with your coaches and players.",
      },
      {
        index: "04",
        name: "Ongoing Support",
        detail:
          "Where appropriate, we continue supporting your organisation through follow-up reviews, online meetings, coach mentoring and future development planning.",
      },
    ],
  },

  expertise: {
    heading: "Areas of Expertise",
    lead: "Our consultancy covers a wide range of cricket performance areas, including:",
    items: [
      "Batting development",
      "Fast bowling development",
      "Spin bowling development",
      "Fielding and catching",
      "Wicketkeeping",
      "Coach education",
      "Session planning",
      "Player pathways",
      "Long-term athlete development",
      "Technical analysis",
      "Biomechanics",
      "Performance planning",
      "Strength and conditioning integration",
      "Match awareness and tactical development",
    ],
  },

  closing: {
    heading: "Why Masterclass Cricket?",
    body: [
      "Masterclass Cricket combines professional playing experience, advanced technical knowledge and a proven coaching methodology to create programmes that are practical, structured and tailored to each organisation.",
      "Our goal is not simply to deliver coaching sessions, but to leave clubs, schools and academies with stronger coaches, better learning environments and clear systems that continue developing players long after our visit.",
    ],
  },

  cta: {
    heading: "Bring Masterclass Cricket to Your Club, School or Academy",
    body: [
      "If your organisation is looking to raise coaching standards, develop players more effectively or build a stronger long-term programme, we'd love to discuss how we can help.",
      "Contact us to arrange an initial consultation, and we'll create a bespoke proposal tailored to your objectives, location and timescale.",
    ],
    // Shortened from the brief's "Enquire About Consultancy & Overseas Coaching
    // Services" (52 characters), which overflows a button on a phone. The full
    // phrase is kept as the accessible label.
    ctaLabel: "Enquire About Consultancy",
    ctaAria: "Enquire About Consultancy and Overseas Coaching Services on WhatsApp",
    /** Longer topic than usual — a club enquiry should arrive distinguishable
     *  from a parent's, because it goes to a different conversation. */
    whatsappTopic: "Consultancy & Overseas Coaching Services for our organisation",
  },
} as const;
