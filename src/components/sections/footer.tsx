import { Link } from "@tanstack/react-router";

import { Wordmark } from "@/components/ui/wordmark";
import { navLinks, site, socials } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink-950">
      <div className="shell grid gap-12 py-24 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-6">
          <Wordmark className="h-6 text-bone-100" />
          <p className="text-body text-bone-400">{site.positioning}</p>
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
          <h2 className="text-label text-bone-400">Watch</h2>
          <p className="text-sm text-bone-100">
            New drills every week on YouTube and Instagram.
          </p>
          {socials.slice(0, 3).map((social) => (
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

      <div className="shell flex flex-wrap items-center justify-between gap-4 border-t border-line py-6 pb-24 lg:pb-6">
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
