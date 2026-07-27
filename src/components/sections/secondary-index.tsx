import { Link } from "@tanstack/react-router";

import { secondaryServices } from "@/data/services";

export function SecondaryIndex() {
  return (
    <section aria-labelledby="also-offered" className="section-y">
      <div className="shell">
        <h2 id="also-offered" className="text-label text-bone-400">
          Also Offered
        </h2>

        <ul className="mt-10 border-t border-line">
          {secondaryServices.map((service) => (
            <li key={service.name} className="border-b border-line">
              <Link
                to={service.href}
                className="group grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 py-5 transition-colors duration-200 ease-brand hover:bg-ink-900 md:grid-cols-[minmax(0,22rem)_minmax(0,1fr)_auto] md:items-center md:px-4"
              >
                <span className="text-body-lg min-w-0 text-bone-100">{service.name}</span>
                <span className="text-label hidden text-bone-400 md:block">
                  {service.descriptor}
                </span>
                <span
                  aria-hidden="true"
                  className="shrink-0 text-bone-400 transition-transform duration-200 ease-brand group-hover:translate-x-1 group-hover:text-red-400"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
