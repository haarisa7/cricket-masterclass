import { Link } from "@tanstack/react-router";

import { SocialIcon } from "@/components/ui/social-icons";
import { WhatsAppIcon } from "@/components/ui/whatsapp-float";
import { Logo } from "@/components/ui/wordmark";
import { coreServices, secondaryServices } from "@/data/services";
import { BOOKING, site, socials } from "@/data/site";

/** FOOT-04: Programmes column — the three core programmes plus the two online
 *  assessments the brief calls out by name. Derived from the same arrays the
 *  rest of the site uses so it cannot drift out of step with PROG-01. */
const programmeLinks = [
  ...coreServices.map((s) => ({ name: s.name, href: s.detailsHref })),
  ...secondaryServices
    .filter((s) => s.name.startsWith("Online"))
    .map((s) => ({ name: s.name, href: s.href })),
];

const MAPS_HREF = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  site.address,
)}`;

/**
 * FOOT-01 to FOOT-04.
 *
 * Four columns, in the brief's order: Masterclass Cricket / Programmes /
 * Contact / Follow. The old column 2 was a duplicate of the header navigation,
 * which the brief replaces with Programmes.
 *
 * The social icons that used to sit in column 1 are gone. They were the same
 * five links already listed as text in column 4, so every social account
 * appeared twice in one footer.
 */
export function Footer() {
  return (
    <footer className="border-t border-line bg-ink-950">
      <div className="shell grid gap-12 py-24 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-6">
          <Logo className="text-[17px]" />
          {/* FOOT-01: the five-area line, identical to the hero strip and the
              meta descriptions. */}
          <p className="text-body text-bone-400">{site.positioning}</p>
        </div>

        <nav aria-label="Programmes" className="flex flex-col gap-3">
          <h2 className="text-label text-bone-400">Programmes</h2>
          {programmeLinks.map((programme) => (
            <Link key={programme.href} to={programme.href} className="link-wipe text-sm">
              {programme.name}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <h2 className="text-label text-bone-400">Contact</h2>

          <address className="flex flex-col gap-3 not-italic">
            {/* Pre-launch check 12: the address is a link to Google Maps, not
                plain text. It was previously unlinked in both the footer and
                the contact page. */}
            <a
              href={MAPS_HREF}
              target="_blank"
              rel="noreferrer"
              className="link-wipe text-sm leading-relaxed"
            >
              {site.address}
            </a>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="link-wipe text-sm">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="link-wipe text-sm">
              {site.email}
            </a>
          </address>

          <a
            href={BOOKING.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="link-wipe inline-flex items-center gap-2 text-sm"
          >
            <WhatsAppIcon className="size-4 shrink-0" />
            WhatsApp
          </a>
          <Link to="/contact" className="link-wipe text-sm">
            Enquiry form
          </Link>
          <p className="text-label mt-1 text-bone-600">{site.hours}</p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-label text-bone-400">Follow Masterclass Cricket</h2>
          <p className="text-sm text-bone-100">
            Follow Masterclass Cricket for new drills, technical breakdowns and player-development
            content every week across all our channels.
          </p>
          {socials.map((social) => (
            <a
              key={social.platform}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="link-wipe inline-flex items-center gap-2 text-sm"
            >
              <SocialIcon platform={social.platform} className="size-4 shrink-0" />
              {social.platform}
            </a>
          ))}
        </div>
      </div>

      {/* Extra bottom room on small screens so the WhatsApp float never covers
          the copyright and policy links. */}
      <div className="shell flex flex-wrap items-center justify-between gap-4 border-t border-line py-6 pb-24 lg:pb-8">
        <p className="text-label text-bone-400">
          © {new Date().getFullYear()} {site.name}
        </p>
        <Link to="/safeguarding" className="link-wipe text-label">
          Safeguarding Policy
        </Link>
        <p className="text-label text-bone-600">Designed &amp; built in London</p>
      </div>
    </footer>
  );
}
