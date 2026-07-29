import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/sections/page-shell";
import { ActionAnchor } from "@/components/ui/action";
import { FieldDecor } from "@/components/ui/field-decor";
import { RevealHeading } from "@/components/ui/reveal";
import { WhatsAppIcon } from "@/components/ui/whatsapp-float";
import { BOOKING, site, socials, whatsappFor } from "@/data/site";

const title = "Contact — Kings House Sports Grounds, Chiswick | Masterclass Cricket";
const description =
  "Message Masterclass Cricket on WhatsApp, call +44 7961 692226, or find us at King's House Sports Ground, Riverside Drive, Chiswick, London W4 2SP.";

export const Route = createFileRoute("/contact")({
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
  component: Contact,
});

const MAP_QUERY = encodeURIComponent(site.address);
/** Pre-launch check 12: the address itself must link out to Google Maps, not
 *  just sit above an embedded map. Same link is used in the footer. */
const MAP_HREF = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;

function Contact() {
  return (
    <PageShell>
      {/* ---- masthead: WhatsApp is the one filled action ---- */}
      <section className="relative overflow-hidden border-b border-line">
        <FieldDecor preset="quiet" />

        <div className="shell relative z-10 pb-24 pt-40 md:pt-48">
          <p className="text-label text-bone-400">Contact</p>

          <RevealHeading
            as="h1"
            className="text-display-xl mt-8 max-w-[13ch] text-bone-100"
            lines={["Message us.", "We answer fast."]}
          />

          <p className="text-body-lg mt-8 text-bone-400">
            WhatsApp is the quickest way to reach the coaching team — tell us the player&rsquo;s
            age, club and what you want to work on, and we&rsquo;ll come back with the right
            programme.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-8">
            <ActionAnchor
              href={whatsappFor("cricket coaching")}
              target="_blank"
              rel="noreferrer"
              className="gap-3"
            >
              <WhatsAppIcon className="size-5" />
              Message on WhatsApp
            </ActionAnchor>
            <a href={BOOKING.camps} target="_blank" rel="noreferrer" className="link-wipe text-sm">
              Book a holiday camp online <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ---- details ---- */}
      <section aria-labelledby="details-heading" className="section-y">
        <div className="shell">
          <h2 id="details-heading" className="text-label text-bone-400">
            <span className="text-red-400">01</span> / Details
          </h2>

          <div className="mt-12 grid gap-12 border-t border-line pt-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-16">
            <address className="flex flex-col gap-8 not-italic">
              <div>
                <p className="text-label text-red-400">Ground</p>
                <a
                  href={MAP_HREF}
                  target="_blank"
                  rel="noreferrer"
                  className="link-wipe text-body-lg mt-3 block text-bone-100"
                >
                  {site.address}
                  <span aria-hidden="true"> →</span>
                </a>
              </div>

              <div>
                <p className="text-label text-red-400">Phone</p>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="link-wipe mt-3 text-base"
                >
                  {site.phone}
                </a>
              </div>

              <div>
                <p className="text-label text-red-400">Email</p>
                <a href={`mailto:${site.email}`} className="link-wipe mt-3 text-base">
                  {site.email}
                </a>
              </div>

              <div>
                <p className="text-label text-red-400">Hours</p>
                <p className="text-body mt-3 text-bone-100">{site.hours}</p>
              </div>

              <div>
                <p className="text-label text-red-400">Follow</p>
                <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                  {socials.map((social) => (
                    <li key={social.platform}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="link-wipe text-sm"
                      >
                        {social.platform}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </address>

            <div className="min-h-[22rem] overflow-hidden border border-line bg-ink-900 lg:min-h-[30rem]">
              <iframe
                title="Map to Kings House Sports Grounds, Chiswick"
                src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="size-full border-0 grayscale-[0.6] contrast-125"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
