import { BOOKING } from "@/data/site";
import { cn } from "@/lib/utils";

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.08-.3-.15-1.26-.47-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.61-.92-2.2-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
      <path d="M12 2a10 10 0 0 0-8.53 15.24L2.05 22.5l5.4-1.4A10 10 0 1 0 12 2Zm0 18.2a8.16 8.16 0 0 1-4.16-1.14l-.3-.18-3.2.83.85-3.12-.2-.32A8.2 8.2 0 1 1 12 20.2Z" />
    </svg>
  );
}

/**
 * Persistent WhatsApp entry point, as on the original site.
 *
 * Shown at every breakpoint. It is the only fixed control besides the header,
 * so there is no thumb-zone collision to design around — the sticky booking
 * bar that used to sit here has been removed.
 *
 * Stays WhatsApp green (#25D366): recolouring the mark breaks WhatsApp's brand
 * rules, and a red float would fight the red "Book Now" in the header.
 */
export function WhatsAppFloat({ className }: { className?: string }) {
  return (
    <a
      href={BOOKING.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat to Masterclass Cricket on WhatsApp"
      className={cn(
        "group fixed right-[var(--gutter)] z-40 flex size-14 items-center justify-center rounded-full",
        "bottom-[calc(1.5rem+env(safe-area-inset-bottom))] lg:bottom-8",
        "bg-[#25D366] text-ink-950 shadow-[0_8px_30px_rgba(0,0,0,0.45)]",
        "transition-transform duration-300 ease-brand hover:scale-110 focus-visible:scale-110",
        className,
      )}
    >
      {/* No pulse ring: the red primary CTA is the only thing allowed to
          compete for attention. This stays a calm, always-available door. */}
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
