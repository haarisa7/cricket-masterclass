import { createFileRoute } from "@tanstack/react-router";

import { Coaching } from "@/components/sections/coaching";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Journey } from "@/components/sections/journey";
import { Manifesto } from "@/components/sections/manifesto";
import { Method } from "@/components/sections/method";
import { Navigation } from "@/components/sections/navigation";
import { Partners } from "@/components/sections/partners";
import { ProofBar } from "@/components/sections/proof-bar";
import { SecondaryIndex } from "@/components/sections/secondary-index";
import { SocialProof } from "@/components/sections/social-proof";
import { CustomCursor } from "@/components/ui/cursor";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { WhatsAppFloat } from "@/components/ui/whatsapp-float";

const title = "Masterclass Cricket — Professional Cricket Coaching in Chiswick & Richmond";
// FOOT-01: the five-area wording, kept under 155 characters.
const description =
  "Professional cricket coaching across Chiswick, Richmond, Berkshire and Buckinghamshire. One-to-one, group sessions, holiday camps and S&C, ages 4+.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <SmoothScroll />
      <CustomCursor />
      <Navigation />
      {/*
        Order matters here. BAN-02 requires the live events block to be "the
        first place parents look for current bookings", so LiveEvents sits
        directly under the stats bar — before the philosophy, the programmes and
        everything else. IndoorProgramme (the form) follows IndoorPromo so the
        promo's CTA scrolls a short distance rather than the length of the page.
      */}
      {/*
        HOMEPAGE ORDER — restructured to remove duplication.
        Before this, the page ran: stats → What's On (One-to-One, Group, indoor)
        → Uzi → the same three services again → extra services → method →
        journey → indoor promo → indoor form. Two blocks sold the same three
        programmes, and the indoor programme had three separate appearances for
        something with no confirmed dates. Measured on the rendered page:
        "indoor" 12 times, "Register Your Interest" 6 times, 11 WhatsApp buttons.

        Now: Coaching is one tabbed section carrying both the offer AND current
        availability; the indoor programme is a line inside its Group tab; and
        Uzi moved BELOW the services, so a first-time visitor sees what is sold
        before the philosophy behind it.

        BookingBand is gone too: its heading and tagline moved up to the Coaching
        section, and its three routes into the same programmes duplicated what the
        tabs, the header's Book Now and the WhatsApp float already offer.

        Four components were deleted rather than left unrendered, because dead
        code that cannot compile rots: LiveEvents, IndoorPromo, IndoorProgramme
        (the interest form) and BookingBand. All are preserved in git and restore
        with, for example:
          git show 06d7803:src/components/sections/indoor-programme.tsx
        The form's server route and Resend integration DO remain in the repo —
        FOOT-03 still needs a general enquiry form and should reuse them.
      */}
      <main>
        <Hero />
        <ProofBar />
        <Coaching />
        <Manifesto />
        <Method />
        <SecondaryIndex />
        <Journey />
        <SocialProof />
        <Partners />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
