import { useEffect, useState } from "react";

import { BOOKING } from "@/data/site";
import { cn } from "@/lib/utils";

/**
 * Mobile-only persistent booking. Appears once the hero has scrolled out and
 * hides again over the footer so it never covers the footer's own content.
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
        href={BOOKING.session}
        target="_blank"
        rel="noreferrer"
        tabIndex={visible ? 0 : -1}
        className="flex h-14 flex-1 items-center justify-center bg-red-600 text-base font-medium text-bone-50"
      >
        Book a Session
      </a>
      <a
        href={BOOKING.whatsapp}
        target="_blank"
        rel="noreferrer"
        tabIndex={visible ? 0 : -1}
        aria-label="Message Masterclass Cricket on WhatsApp"
        className="flex h-14 w-14 items-center justify-center bg-red-600 text-bone-50"
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true">
          <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.2 14.1c-.2.6-1.2 1.2-1.7 1.2-.4 0-1 .1-3.1-.8-2.6-1.1-4.3-3.8-4.4-4-.1-.2-1-1.4-1-2.6s.6-1.8.9-2c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6c-.1.2-.3.3-.1.6.2.3.7 1.2 1.6 1.9 1.1.9 1.9 1.2 2.2 1.3.2.1.4.1.6-.1l.7-.9c.2-.2.4-.2.6-.1l1.9.9c.2.1.4.2.4.3.1.2.1.7-.1 1.3Z" />
        </svg>
      </a>
    </div>
  );
}
