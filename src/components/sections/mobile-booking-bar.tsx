import { useEffect, useState } from "react";

import { WhatsAppIcon } from "@/components/ui/whatsapp-float";
import { whatsappFor } from "@/data/site";
import { cn } from "@/lib/utils";

/**
 * Mobile-only persistent booking. Appears once the hero has scrolled out and
 * hides again over the footer so it never covers the footer's own content.
 *
 * Deliberately the ONLY sticky element on mobile — the WhatsApp float hides
 * below `lg` so the thumb zone never holds two competing fixed actions. Since
 * booking already opens WhatsApp, a separate float here was pure duplication.
 * The inline glyph tells you where the button lands before you tap it.
 */
export function MobileBookingBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const past = window.scrollY > window.innerHeight * 0.9;
      const nearBottom =
        window.innerHeight + window.scrollY > document.body.scrollHeight - window.innerHeight * 0.5;
      setVisible(past && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 flex gap-px bg-line pb-[env(safe-area-inset-bottom)] transition-transform duration-400 ease-brand lg:hidden",
        visible ? "translate-y-0" : "translate-y-full",
      )}
      aria-hidden={!visible}
    >
      <a
        href={whatsappFor("cricket coaching")}
        target="_blank"
        rel="noreferrer"
        tabIndex={visible ? 0 : -1}
        className="flex h-14 flex-1 items-center justify-center gap-3 bg-red-600 text-base font-medium text-bone-50"
      >
        <WhatsAppIcon className="size-5" />
        Book a Session
      </a>
    </div>
  );
}
