import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { PageShell } from "@/components/sections/page-shell";
import { ActionAnchor } from "@/components/ui/action";
import { FieldDecor } from "@/components/ui/field-decor";
import { Reveal, RevealHeading, RevealImage } from "@/components/ui/reveal";
import { programmes, programmesBySlug, type Programme } from "@/data/pages";
import { coreServices } from "@/data/services";
import { BOOKING, whatsappFor } from "@/data/site";

export const Route = createFileRoute("/programmes/$slug")({
  loader: ({ params }) => {
    const programme = programmesBySlug.get(params.slug);
    if (!programme) throw notFound();
    return { programme };
  },
  head: ({ loaderData }) => {
    const programme = loaderData?.programme;
    if (!programme) return {};
    const title = `${programme.name} — Masterclass Cricket`;
    const description = `${programme.promise} ${programme.intro}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProgrammePage,
});

/** Camps have a real checkout; every other programme opens WhatsApp. */
function bookingHref(programme: Programme): string {
  return programme.booking === "camps" ? BOOKING.camps : whatsappFor(programme.name);
}

/** Reuse the homepage photography where a programme has a matching card. */
function imageFor(slug: string) {
  return coreServices.find((service) => service.detailsHref === `/programmes/${slug}`);
}

function ProgrammePage() {
  const { programme } = Route.useLoaderData();
  const hero = imageFor(programme.slug);
  const others = programmes.filter((p) => p.slug !== programme.slug).slice(0, 4);

  return (
    <PageShell>
      {/* ---- masthead ---- */}
      <section className="relative overflow-hidden border-b border-line">
        <FieldDecor preset="quiet" />

        <div className="shell relative z-10 pb-24 pt-40 md:pt-48">
          <p className="text-label text-bone-400">
            <span className="text-red-400">{programme.tier}</span> / Programme
          </p>

          <RevealHeading
            as="h1"
            className="text-display-lg mt-8 max-w-[14ch] text-bone-100"
            lines={[programme.name]}
          />

          <p className="text-body-lg mt-8 text-bone-400">{programme.intro}</p>

          {/* The single filled CTA for this page. */}
          <div className="mt-10 flex flex-wrap items-center gap-8">
            <ActionAnchor href={bookingHref(programme)} target="_blank" rel="noreferrer">
              {programme.ctaLabel}
            </ActionAnchor>
            <Link to="/contact" className="link-wipe text-sm">
              Ask a question first <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ---- what's included + format ---- */}
      <section aria-labelledby="included-heading" className="section-y">
        <div className="shell grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <h2 id="included-heading" className="text-label text-bone-400">
              <span className="text-red-400">01</span> / What&rsquo;s Included
            </h2>

            <ul className="mt-8 border-t border-line">
              {programme.includes.map((item) => (
                <li
                  key={item}
                  className="text-body flex items-baseline gap-4 border-b border-line py-5 text-bone-100"
                >
                  <span aria-hidden="true" className="text-red-400">
                    —
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="text-label mt-16 text-bone-400">
              <span className="text-red-400">02</span> / Who It Suits
            </h2>
            <p className="text-body-lg mt-8 text-bone-400">{programme.suitedTo}</p>
          </div>

          <div>
            <h2 className="text-label text-bone-400">
              <span className="text-red-400">03</span> / Format
            </h2>

            <dl className="mt-8 border-t border-line">
              {programme.format.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[minmax(0,auto)_minmax(0,1fr)] items-baseline gap-4 border-b border-line py-5"
                >
                  <dt className="text-label text-bone-400">{row.label}</dt>
                  <dd className="text-right text-sm text-bone-100">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ---- photography, when the programme has a homepage card ---- */}
      {hero && (
        <RevealImage
          src={hero.image}
          alt={hero.imageAlt}
          width={1920}
          height={1080}
          className="h-[45svh] border-y border-line lg:h-[65svh]"
        />
      )}

      {/* ---- other programmes ---- */}
      <section aria-labelledby="more-heading" className="section-y">
        <div className="shell">
          <h2 id="more-heading" className="text-label text-bone-400">
            <span className="text-red-400">04</span> / Other Programmes
          </h2>

          <ul className="mt-12 border-t border-line">
            {others.map((other, i) => (
              <li key={other.slug}>
                <Reveal delay={i * 0.04}>
                  <Link
                    to="/programmes/$slug"
                    params={{ slug: other.slug }}
                    className="group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 border-b border-line py-6 md:grid-cols-[minmax(0,26ch)_minmax(0,1fr)_auto]"
                  >
                    <span className="text-display-md text-bone-100 transition-colors duration-200 ease-brand group-hover:text-red-400">
                      {other.name}
                    </span>
                    <span className="text-label hidden text-bone-400 md:block">
                      {other.promise}
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-bone-400 transition-transform duration-300 ease-brand group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
