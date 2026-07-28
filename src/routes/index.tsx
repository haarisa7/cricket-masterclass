import { createFileRoute } from "@tanstack/react-router";

import { BookingBand } from "@/components/sections/booking-band";
import { CoreServices } from "@/components/sections/core-services";
import { EliteAcademy } from "@/components/sections/elite-academy";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Manifesto } from "@/components/sections/manifesto";
import { Method } from "@/components/sections/method";
import { MobileBookingBar } from "@/components/sections/mobile-booking-bar";
import { Navigation } from "@/components/sections/navigation";
import { Partners } from "@/components/sections/partners";
import { ProofBar } from "@/components/sections/proof-bar";
import { SecondaryIndex } from "@/components/sections/secondary-index";
import { SocialProof } from "@/components/sections/social-proof";
import { CustomCursor } from "@/components/ui/cursor";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { WhatsAppFloat } from "@/components/ui/whatsapp-float";

const title = "Masterclass Cricket — Professional Coaching in Chiswick";
const description =
  "Elite cricket coaching in West London. 1-2-1 sessions, small groups and performance camps for players from first net to international honours.";

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
      <main>
        <Hero />
        <ProofBar />
        <Manifesto />
        <CoreServices />
        <SecondaryIndex />
        <Method />
        <EliteAcademy />
        <SocialProof />
        <Partners />
        <BookingBand />
      </main>
      <Footer />
      <MobileBookingBar />
      <WhatsAppFloat />
    </>
  );
}
