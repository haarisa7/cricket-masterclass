import { Link } from "@tanstack/react-router";

import { SocialIcon } from "@/components/ui/social-icons";
import { Logo } from "@/components/ui/wordmark";
import { navLinks, site, socials } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink-950">
      <div className="shell grid gap-12 py-24 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-6">
          <Logo className="text-[17px]" />
          <p className="text-body text-bone-400">{site.positioning}</p>

          <ul className="flex flex-wrap gap-3">
            {socials.map((social) => (
              <li key={social.platform}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${site.name} on ${social.platform}`}
                  className="flex size-10 items-center justify-center border border-line text-bone-400 transition-colors duration-200 ease-brand hover:border-red-500 hover:text-bone-100"
                >
                  <SocialIcon platform={social.platform} className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-3">
          <h2 className="text-label text-bone-400">Explore</h2>
          {navLinks.map((link) => (
            <Link key={link.href} to={link.href} className="link-wipe text-sm">
              {link.label}
            </Link>
          ))}
        </nav>

        <address className="flex flex-col gap-3 not-italic">
          <h2 className="text-label text-bone-400">Contact</h2>
          <p className="text-sm text-bone-100">{site.address}</p>
          <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="link-wipe text-sm">
            {site.phone}
          </a>
          <a href={`mailto:${site.email}`} className="link-wipe text-sm">
            {site.email}
          </a>
          <p className="text-label text-bone-400">{site.hours}</p>
        </address>

        <div className="flex flex-col gap-3">
          <h2 className="text-label text-bone-400">Follow</h2>
          <p className="text-sm text-bone-100">New drills every week across every channel.</p>
          {socials.map((social) => (
            <a
              key={social.platform}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="link-wipe text-sm"
            >
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
