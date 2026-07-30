import { createFileRoute } from "@tanstack/react-router";

import { PageHero, PageShell } from "@/components/sections/page-shell";
import { ActionAnchor } from "@/components/ui/action";
import { FieldDecor } from "@/components/ui/field-decor";
import { Reveal } from "@/components/ui/reveal";
import { consultancy } from "@/data/consultancy";
import { whatsappFor } from "@/data/site";

const title = "Cricket Consultancy & Overseas Coaching Services — Masterclass Cricket";
const description =
  "Bespoke cricket consultancy for clubs, schools and academies in the UK and overseas: coach education, clinics, player assessments and performance planning.";

export const Route = createFileRoute("/consultancy")({
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
  component: Consultancy,
});

/** Chip list. Used three times on this page for the short-item lists. */
function Chips({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-8 flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item} className="border border-line-str px-3 py-1.5 text-sm text-bone-100">
          {item}
        </li>
      ))}
    </ul>
  );
}

/**
 * §31 — Consultancy & Overseas Coaching Services.
 *
 * THE ONLY B2B PAGE ON THE SITE. Every other page speaks to a parent choosing
 * coaching for a child; this one speaks to a club chairman, head of cricket or
 * academy director with a budget and a committee. Hence process and outcomes
 * before anything else, no prices at all (every programme is quoted after a
 * consultation), and a CTA that arranges a conversation rather than taking a
 * booking.
 *
 * SAME LIST PROBLEM AS THE INTERNATIONAL PAGE, handled the same way: the copy
 * carries five separate lists totalling ~40 items. Rendered identically they
 * become wallpaper. So each gets a different treatment — chips for the audience,
 * two-column cards for the seven services, oversized display type for the six
 * "Your ..." lines, a bordered list for delivery formats, numbered steps for
 * process, and chips again for the fourteen expertise areas.
 */
function Consultancy() {
  const { audience, services, why, delivery, process, expertise, closing, cta } = consultancy;

  return (
    <PageShell>
      <PageHero
        label="Consultancy & Overseas"
        lines={["Bring Masterclass", "Cricket to your", "organisation"]}
      >
        <div className="flex max-w-[62ch] flex-col gap-4">
          {consultancy.intro.map((paragraph) => (
            <p key={paragraph} className="text-body text-bone-400">
              {paragraph}
            </p>
          ))}
        </div>

        {/* CTA in the hero as well as the closing band. This page runs long, and
            a decision-maker who is already sold should not have to reach the
            bottom — the same problem found on the S&C and International pages. */}
        <div className="mt-8">
          <ActionAnchor
            href={whatsappFor(cta.whatsappTopic)}
            target="_blank"
            rel="noreferrer"
            variant="secondary"
            aria-label={cta.ctaAria}
          >
            {cta.ctaLabel}
          </ActionAnchor>
        </div>
      </PageHero>

      {/* ---- 01 Who we work with — chips ---- */}
      <section aria-labelledby="cons-audience-heading" className="section-y">
        <div className="shell">
          <p className="text-label text-bone-400">
            <span className="text-red-400">01</span> / Who We Work With
          </p>

          <h2
            id="cons-audience-heading"
            className="text-display-md mt-6 max-w-[22ch] text-bone-100"
          >
            {audience.heading}
          </h2>

          <p className="text-body mt-6 max-w-[62ch] text-bone-400">{audience.lead}</p>

          <Chips items={audience.items} />

          <p className="text-body-lg mt-8 max-w-[62ch] text-bone-100">{audience.closing}</p>
        </div>
      </section>

      {/* ---- 02 The seven services — the substance of the page ---- */}
      <section
        aria-labelledby="cons-services-heading"
        className="section-y border-t border-line bg-ink-900"
      >
        <div className="shell">
          <p className="text-label text-bone-400">
            <span className="text-red-400">02</span> / What We Deliver
          </p>

          <h2 id="cons-services-heading" className="text-display-md mt-6 text-bone-100">
            {services.heading}
          </h2>

          <p className="text-body mt-6 max-w-[62ch] text-bone-400">{services.lead}</p>

          {/* Two columns from md, not three: each card carries a ~25 word
              description, and at three across the text column was narrow enough
              to break every service name across two lines. Seven items means an
              odd tile at the end either way, so it simply runs left-aligned. */}
          <ul className="mt-12 grid gap-4 md:grid-cols-2">
            {services.items.map((service, i) => (
              <li key={service.name}>
                <Reveal delay={i * 0.03}>
                  <article className="flex h-full flex-col border border-line bg-ink-950 p-6">
                    <h3 className="font-display text-xl leading-tight text-bone-100">
                      {service.name}
                    </h3>
                    <p className="text-body mt-4 text-bone-400">{service.detail}</p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---- 03 Why organisations choose us — display treatment ---- */}
      <section
        aria-labelledby="cons-why-heading"
        className="relative overflow-hidden border-y border-line"
      >
        <FieldDecor preset="field" />

        <div className="shell section-y relative z-10">
          <p className="text-label text-bone-400">
            <span className="text-red-400">03</span> / Our Approach
          </p>

          <h2 id="cons-why-heading" className="text-display-md mt-6 max-w-[24ch] text-bone-100">
            {why.heading}
          </h2>

          <p className="text-body mt-6 max-w-[62ch] text-bone-400">{why.lead}</p>

          {/* These six are two words each and perfectly parallel — the most
              quotable thing in the whole section. At body size in a bullet list
              they would disappear; at display size they carry the argument on
              their own. */}
          <ul className="mt-10 grid gap-x-10 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
            {why.items.map((item) => (
              <li
                key={item}
                className="font-display text-[clamp(1.5rem,3vw,2.25rem)] leading-tight text-bone-100"
              >
                {item}
              </li>
            ))}
          </ul>

          <p className="text-body-lg mt-12 max-w-[72ch] border-l-2 border-red-500 pl-6 text-bone-100">
            {why.closing}
          </p>
        </div>
      </section>

      {/* ---- 04 UK & international delivery ---- */}
      <section aria-labelledby="cons-delivery-heading" className="section-y">
        <div className="shell grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-label text-bone-400">
              <span className="text-red-400">04</span> / Scope
            </p>

            <h2
              id="cons-delivery-heading"
              className="text-display-md mt-6 max-w-[16ch] text-bone-100"
            >
              {delivery.heading}
            </h2>

            <p className="text-body mt-6 max-w-[52ch] text-bone-400">{delivery.lead}</p>

            <p className="text-body-lg mt-8 max-w-[52ch] text-bone-100">{delivery.closing}</p>
          </div>

          <ul className="border-t border-line">
            {delivery.items.map((item) => (
              <li
                key={item}
                className="text-body flex items-baseline gap-4 border-b border-line py-4 text-bone-100"
              >
                <span aria-hidden="true" className="shrink-0 text-red-400">
                  —
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---- 05 How we work — four steps ---- */}
      <section
        aria-labelledby="cons-process-heading"
        className="section-y border-t border-line bg-ink-900"
      >
        <div className="shell">
          <p className="text-label text-bone-400">
            <span className="text-red-400">05</span> / The Process
          </p>

          <h2 id="cons-process-heading" className="text-display-md mt-6 text-bone-100">
            {process.heading}
          </h2>

          <ol className="mt-12 border-t border-line">
            {process.steps.map((step) => (
              <li key={step.index}>
                <Reveal>
                  <div className="grid gap-4 border-b border-line py-10 md:grid-cols-[auto_minmax(0,1fr)] md:gap-12 md:py-14">
                    <span className="font-display text-4xl leading-none text-red-500 tnum md:text-[clamp(3rem,5vw,5rem)]">
                      {step.index}
                    </span>
                    <div className="max-w-[62ch]">
                      <h3 className="text-display-md text-bone-100">{step.name}</h3>
                      <p className="text-body mt-4 text-bone-400">{step.detail}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---- 06 Areas of expertise — fourteen short items, so chips ---- */}
      <section aria-labelledby="cons-expertise-heading" className="section-y">
        <div className="shell">
          <p className="text-label text-bone-400">
            <span className="text-red-400">06</span> / Expertise
          </p>

          <h2 id="cons-expertise-heading" className="text-display-md mt-6 text-bone-100">
            {expertise.heading}
          </h2>

          <p className="text-body mt-6 max-w-[62ch] text-bone-400">{expertise.lead}</p>

          <Chips items={expertise.items} />
        </div>
      </section>

      {/* ---- 07 Why Masterclass Cricket ---- */}
      <section
        aria-labelledby="cons-closing-heading"
        className="section-y border-t border-line bg-ink-900"
      >
        <div className="shell grid gap-8 lg:grid-cols-[minmax(0,auto)_minmax(0,1fr)] lg:gap-16">
          <h2
            id="cons-closing-heading"
            className="text-display-md max-w-[14ch] text-balance text-bone-100"
          >
            {closing.heading}
          </h2>

          <div className="flex max-w-[68ch] flex-col gap-6">
            {closing.body.map((paragraph) => (
              <Reveal key={paragraph}>
                <p className="text-body-lg text-bone-400">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- call to action ---- */}
      <section aria-labelledby="cons-cta-heading" className="border-t border-line bg-red-600">
        <div className="shell flex flex-col items-start gap-8 py-24">
          <h2 id="cons-cta-heading" className="text-display-lg max-w-[20ch] text-bone-50">
            {cta.heading}
          </h2>

          <div className="flex max-w-[62ch] flex-col gap-4">
            {cta.body.map((paragraph) => (
              <p key={paragraph} className="text-body-lg text-bone-50/85">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Outline variant: the band is already red, so a red primary button
              would disappear into it. */}
          <ActionAnchor
            href={whatsappFor(cta.whatsappTopic)}
            target="_blank"
            rel="noreferrer"
            variant="secondary"
            aria-label={cta.ctaAria}
            className="border-bone-50 text-bone-50 hover:bg-bone-50 hover:text-red-600"
          >
            {cta.ctaLabel}
          </ActionAnchor>
        </div>
      </section>
    </PageShell>
  );
}
