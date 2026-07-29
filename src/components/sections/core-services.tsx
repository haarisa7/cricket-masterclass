import { Link } from "@tanstack/react-router";

import { ActionAnchor } from "@/components/ui/action";
import { Reveal, RevealImage } from "@/components/ui/reveal";
import { sectionNumber } from "@/data/sections";
import { coreServices } from "@/data/services";
import { BOOKING, whatsappFor } from "@/data/site";
import { cn } from "@/lib/utils";

export function CoreServices() {
  return (
    <section
      id="coaching"
      aria-labelledby="coaching-heading"
      className="section-y border-t border-line"
    >
      <div className="shell">
        <h2 id="coaching-heading" className="text-label text-bone-400">
          <span className="text-red-400">{sectionNumber("coaching")}</span> / Start Here
        </h2>
      </div>

      <div className="mt-12 flex flex-col">
        {coreServices.map((service, i) => (
          <article
            key={service.name}
            className={cn(
              "group border-t border-line",
              i === coreServices.length - 1 && "border-b",
            )}
          >
            <div
              className={cn(
                "shell grid items-center gap-8 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24",
                i % 2 === 1 && "lg:[&>figure]:order-last",
              )}
            >
              <figure className="relative aspect-[4/3] overflow-hidden lg:aspect-[4/5]">
                <RevealImage
                  src={service.image}
                  alt={service.imageAlt}
                  width={1280}
                  height={1600}
                  className="size-full"
                  imgClassName="transition-transform duration-700 ease-brand group-hover:scale-[1.04]"
                />
              </figure>

              <div className="max-w-xl">
                {/* Tier only, no number: these three are parallel options, not
                    ordered steps, and "02 · Group" sitting under "02 / Start
                    Here" read as the same level. */}
                <p className="text-label text-red-400">{service.tier}</p>

                <h3 className="text-display-md mt-6 text-bone-100">{service.name}</h3>

                <p className="text-body-lg mt-5 text-bone-400">{service.promise}</p>

                <ul className="mt-8 border-t border-line">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="text-label border-b border-line py-4 text-bone-100">
                      {bullet}
                    </li>
                  ))}
                </ul>

                {service.note && (
                  <p className="mt-8 font-display text-2xl leading-tight text-red-500">
                    {service.note}
                  </p>
                )}

                <Reveal delay={0.05}>
                  <div className="mt-10 flex flex-wrap items-center gap-8">
                    <ActionAnchor
                      href={i === 2 ? BOOKING.camps : whatsappFor(service.name)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {service.cta.label}
                    </ActionAnchor>
                    <Link to={service.detailsHref} className="link-wipe text-sm">
                      Full details <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </Reveal>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
