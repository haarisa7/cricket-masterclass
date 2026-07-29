import { createFileRoute } from "@tanstack/react-router";

import { BookingBand } from "@/components/sections/booking-band";
import { CoreServices } from "@/components/sections/core-services";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { IndoorProgramme } from "@/components/sections/indoor-programme";
import { IndoorPromo } from "@/components/sections/indoor-promo";
import { Journey } from "@/components/sections/journey";
import { LiveEvents } from "@/components/sections/live-events";
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

const title = "Masterclass Cricket — Professional Cricket Coaching, West London";
// FOOT-01: the five-area wording, kept under 155 characters.
const description =
  "Professional cricket coaching across Chiswick, Richmond, West London, Berkshire and Buckinghamshire. One-to-one, group sessions and holiday camps, ages 4+.";

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
      <main>
        <Hero />
        <ProofBar />
        <LiveEvents />
        <Manifesto />
        <CoreServices />
        <SecondaryIndex />
        <Method />
        <Journey />
        <IndoorPromo />
        <IndoorProgramme />
        <SocialProof />
        <Partners />
        <BookingBand />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
