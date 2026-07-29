/**
 * INT-01 to INT-05 — the Masterclass International Cricket Coaching Programme.
 *
 * The client's Part 2 Section 30 copy, verbatim throughout. Nothing on this page
 * is a placeholder any more.
 *
 * TWO EDITORIAL NOTES ON THE SOURCE COPY, both handled below:
 *
 *  1. Step 4 ("Continued Development") and the standalone "Continue Your
 *     Development From Anywhere in the World" section cover the same offer with
 *     two different lists. Rendered at full length back to back they read as a
 *     repetition. Step 4 therefore keeps its own copy as the step summary, and
 *     the standalone section carries the detail plus the cross-links to the two
 *     online assessment products — which is exactly how INT-02 describes the
 *     split. Both lists are the client's and neither is dropped.
 *
 *  2. The section has FOUR consecutive bullet lists near the end (Who Is This
 *     For, Why Overseas Players Choose, Continue Your Development, plus Why
 *     Train near the top). Rendering all four identically is the main design
 *     risk on this page — see the component, where each gets a different
 *     treatment so the page does not turn into one long run of bullets.
 */

export const international = {
  title: "Masterclass International Cricket Coaching Programme",

  intro: [
    "The Masterclass International Cricket Coaching Programme is designed for ambitious cricketers from around the world who want to experience world-class coaching in the UK.",
    "Whether you're preparing for representative cricket, professional opportunities or simply want to accelerate your development, our coaching team creates a completely bespoke programme based around your individual goals.",
    "Rather than delivering generic coaching sessions, we assess every player thoroughly, identify the areas limiting performance and build a structured development plan to maximise improvement during your stay.",
  ],

  /** "Why Train at Masterclass Cricket?" */
  whyTrain: {
    heading: "Why Train at Masterclass Cricket?",
    lead: "At Masterclass Cricket, we believe every player develops differently. Before training begins, we take time to understand:",
    items: [
      "Your playing background",
      "Your current strengths",
      "Your technical weaknesses",
      "Your tactical understanding",
      "Your physical capabilities",
      "Your mindset and performance goals",
    ],
    closing:
      "This allows our coaches to build an individual programme that makes the best possible use of your time in the UK.",
  },

  journey: {
    heading: "Your Personal Development Journey",
    lead: "Every international player follows a structured process.",
    steps: [
      {
        index: "01",
        name: "Performance Assessment",
        body: [
          "Your programme begins with a comprehensive assessment of your game. Our coaches analyse your:",
        ],
        items: [
          "Batting technique",
          "Bowling technique",
          "Fielding",
          "Movement patterns",
          "Decision-making",
          "Tactical awareness",
          "Match preparation",
          "Overall performance",
        ],
        closing:
          "Where appropriate, video analysis is used to help explain key findings and priorities.",
      },
      {
        index: "02",
        name: "Bespoke Coaching Programme",
        body: [
          "Based on your assessment, our coaching team creates an individual training programme tailored to the length of your stay.",
          "Whether you are visiting for one week, two weeks or longer, every session has a clear objective and forms part of an overall development plan.",
          "Your programme may include:",
        ],
        items: [
          "One-to-one coaching",
          "Specialist batting coaching",
          "Fast-bowling coaching",
          "Spin-bowling coaching",
          "Fielding development",
          "Tactical planning",
          "Match scenario training",
          "Performance reviews",
        ],
      },
      {
        index: "03",
        name: "Elite Coaching Environment",
        body: [
          "Train alongside Uzi Arif and the Masterclass Cricket coaching team at our UK training venues.",
          "Sessions are designed to challenge players in a professional environment while providing detailed technical feedback and practical solutions that transfer into match performance.",
        ],
      },
      {
        index: "04",
        name: "Continued Development",
        body: [
          "Our support does not end when you return home.",
          "Players continue their development through our online coaching programme, where we remain available to:",
        ],
        items: [
          "Review match footage",
          "Analyse training videos",
          "Set new technical drills",
          "Monitor progress",
          "Provide ongoing mentoring and guidance",
          "Adapt programmes throughout the season",
        ],
        closing:
          "This ensures that improvements made during your visit continue long after you leave the UK.",
      },
    ],
  },

  /**
   * INT-03. The disclaimer must appear verbatim AND stay visible — it is a
   * liability statement, so it is rendered at body size with its own emphasis
   * rather than as small print or behind a disclosure.
   */
  travelSupport: {
    heading: "Travel Support",
    lead: "For overseas players visiting the UK, Masterclass Cricket can provide guidance to help make your visit as smooth as possible. We can assist by recommending:",
    items: [
      "Accommodation options close to our coaching venues",
      "Local transport information",
      "Suitable training locations",
      "Programme scheduling during your stay",
    ],
    disclaimer:
      "Please note that while we are happy to provide recommendations and guidance, accommodation and travel arrangements are booked directly by the player or family.",
  },

  /** INT-04 */
  audience: {
    heading: "Who Is This Programme For?",
    lead: "The International Coaching Programme is suitable for:",
    items: [
      "Junior cricketers",
      "Representative and academy players",
      "County and state-level players",
      "International players",
      "Adults looking to improve their game",
      "Players preparing for trials, tours or professional opportunities",
    ],
    closing: "Every programme is tailored to the player's age, experience and ambitions.",
  },

  why: {
    heading: "Why Overseas Players Choose Masterclass Cricket",
    lead: "Parents and players travel because they want more than traditional cricket coaching. At Masterclass Cricket they receive:",
    items: [
      "A completely bespoke coaching programme",
      "Technical, tactical and biomechanical analysis",
      "Elite coaching from experienced professionals",
      "Clear communication throughout the programme",
      "Structured daily training",
      "Honest feedback and measurable development",
      "Continued online mentoring after returning home",
    ],
    closing:
      "Our goal is not simply to improve a player during their visit — it is to give them a long-term development plan that continues throughout their cricket journey.",
  },

  /** INT-02 — the online continuation offer. */
  online: {
    heading: "Continue Your Development From Anywhere in the World",
    lead: "After returning home, players can continue working with Masterclass Cricket through our online coaching programme. This includes:",
    items: [
      "Online batting assessments",
      "Online bowling assessments",
      "Video analysis",
      "Technical feedback",
      "Monthly development plans",
      "Progress reviews",
      "Ongoing communication with the coaching team",
    ],
    closing:
      "This creates a continuous coaching relationship, allowing players to keep progressing wherever they are in the world.",
    /**
     * INT-02 leaves the video upload route open. A shared link is recommended
     * over on-site upload: uploads mean storage, size limits and virus scanning
     * for what is likely a handful of submissions a month. Easy to change later,
     * but native upload is a real build.
     */
    uploadNote:
      "Footage is shared with your coach by WeTransfer, Google Drive or Dropbox — send us a link and we will do the rest.",
    /** Cross-links to the two assessment products OTH-01 keeps. */
    crossLinks: [
      { name: "Online Batting Assessments", slug: "online-batting" },
      { name: "Online Bowling Assessments", slug: "online-bowling" },
    ],
  },

  /** INT-05 */
  cta: {
    heading: "Train with Masterclass Cricket in the UK",
    body: "Whether you're travelling from Europe, Asia, Australia, Africa or the Americas, our team will create a personalised coaching experience designed around your goals and the time you have available.",
    // Shortened from the brief's "Enquire About the International Coaching
    // Programme" (48 characters), which overflows a button on a phone. The full
    // phrase is kept as the accessible label.
    ctaLabel: "Enquire About the Programme",
    ctaAria: "Enquire About the International Coaching Programme on WhatsApp",
  },
} as const;
