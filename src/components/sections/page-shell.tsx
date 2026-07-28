import type { ReactNode } from "react";

import { Footer } from "@/components/sections/footer";
import { MobileBookingBar } from "@/components/sections/mobile-booking-bar";
import { Navigation } from "@/components/sections/navigation";
import { CustomCursor } from "@/components/ui/cursor";
import { FieldDecor } from "@/components/ui/field-decor";
import { RevealHeading } from "@/components/ui/reveal";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { WhatsAppFloat } from "@/components/ui/whatsapp-float";

/**
 * Every interior page wears the same chrome: nav, smooth scroll, custom
 * cursor, footer, mobile booking bar and the WhatsApp float. Keeping it in one
 * component means a change to the chrome is a one-file change, not seven.
 */
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SmoothScroll />
      <CustomCursor />
      <Navigation />
      <main>{children}</main>
      <Footer />
      <MobileBookingBar />
      <WhatsAppFloat />
    </>
  );
}

/**
 * Interior page masthead. Deliberately quieter than the homepage hero — no
 * video, no primary CTA — so the page's own single CTA further down keeps its
 * weight.
 */
export function PageHero({
  index,
  label,
  lines,
  intro,
  children,
}: {
  index: string;
  label: string;
  lines: ReactNode[];
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line pb-24 pt-40 md:pt-48">
      <FieldDecor preset="quiet" />

      <div className="shell relative z-10">
        <p className="text-label text-bone-400">
          <span className="text-red-400">{index}</span> / {label}
        </p>

        <RevealHeading
          as="h1"
          className="text-display-lg mt-8 max-w-[16ch] text-bone-100"
          lines={lines}
        />

        {intro && <p className="text-body-lg mt-8 text-bone-400">{intro}</p>}

        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}
