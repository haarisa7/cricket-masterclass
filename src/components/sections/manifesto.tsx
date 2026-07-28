import { Link } from "@tanstack/react-router";

import portrait from "@/assets/coach-uzi.jpg";
import { Reveal, RevealHeading, RevealImage } from "@/components/ui/reveal";
import { manifesto } from "@/data/content";

export function Manifesto() {
  return (
    <section id="approach" aria-labelledby="approach-heading" className="section-y">
      <div className="shell grid-12 gap-y-12">
        <p className="text-label col-span-12 text-bone-400 lg:col-span-3">
          <span className="text-red-400">{manifesto.index}</span> / {manifesto.label}
        </p>

        <div className="col-span-12 lg:col-span-8 lg:col-start-5">
          <RevealHeading
            as="blockquote"
            id="approach-heading"
            className="text-display-lg text-bone-100"
            lines={[
              "An accredited certificate",
              "doesn't make a top-level coach.",
              <>
                <span className="text-red-500">Knowledge, experience</span> and insight do.
              </>,
            ]}
          />

          <Reveal delay={0.1}>
            <p className="text-label mt-8 text-bone-400">— {manifesto.attribution}</p>
          </Reveal>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {manifesto.columns.map((column, i) => (
              <Reveal key={column} delay={0.05 * i}>
                <p className="text-body text-bone-400">{column}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <Link to={manifesto.link.href} className="link-wipe mt-10 text-sm">
              {manifesto.link.label} <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>

        <RevealImage
          src={portraitAsset.url}
          alt="Head coach Uzi Arif in Masterclass Cricket coaching jacket"
          width={666}
          height={1110}
          className="col-span-12 mt-16 aspect-[4/5] lg:col-span-3 lg:col-start-1 lg:row-start-2 lg:-mt-64"
          imgClassName="object-top"
        />
      </div>
    </section>
  );
}
