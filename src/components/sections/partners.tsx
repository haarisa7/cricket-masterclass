import { Link } from "@tanstack/react-router";

import { partners } from "@/data/site";

export function Partners() {
  return (
    <section aria-labelledby="partners-heading" className="border-y border-line">
      <div className="shell flex flex-col gap-8 py-16">
        <h2 id="partners-heading" className="text-label text-bone-400">
          Partners
        </h2>

        <ul className="grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-5">
          {partners.map((partner) => (
            <li
              key={partner}
              className="text-label text-bone-400 opacity-70 transition-opacity duration-200 ease-brand hover:opacity-100"
            >
              {partner}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-body text-bone-400">
            Grounds, clubs and equipment partners across West London.
          </p>
          <Link to="/contact" className="link-wipe text-sm">
            Partner with us <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
