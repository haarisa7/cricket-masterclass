import { RevealHeading } from "@/components/ui/reveal";
import { BOOKING, whatsappFor } from "@/data/site";

const routes = [
  {
    label: "Book a Session",
    note: "1-2-1 and small groups",
    href: whatsappFor("a 1-2-1 or small group session"),
  },
  { label: "Register for Camps", note: "Holiday camps via ClassForKids", href: BOOKING.camps },
  { label: "Message on WhatsApp", note: "Questions answered same day", href: BOOKING.whatsapp },
];

export function BookingBand() {
  return (
    <section aria-labelledby="booking-heading" className="bg-red-600">
      <div className="shell flex flex-col gap-12 py-24 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <RevealHeading
            as="h2"
            id="booking-heading"
            className="text-display-lg text-bone-50"
            lines={["Ready to start?"]}
          />
          <p className="text-body-lg mt-6 text-bone-50/85">
            Three routes in. Pick the one that matches what you need.
          </p>
        </div>

        <ul className="grid w-full gap-px bg-bone-50/25 sm:grid-cols-3 lg:max-w-2xl">
          {routes.map((route) => (
            <li key={route.label} className="bg-red-600">
              <a
                href={route.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-full flex-col justify-between gap-6 p-6 transition-colors duration-200 ease-brand hover:bg-bone-50 hover:text-red-600"
              >
                <span className="font-display text-xl leading-tight">{route.label}</span>
                <span className="text-label opacity-80">{route.note}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
