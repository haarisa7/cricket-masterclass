import { createFileRoute } from "@tanstack/react-router";

import { PageHero, PageShell } from "@/components/sections/page-shell";
import { ActionAnchor } from "@/components/ui/action";
import { FieldDecor } from "@/components/ui/field-decor";
import { Reveal } from "@/components/ui/reveal";
import { strength } from "@/data/strength";
import { whatsappFor } from "@/data/site";

const title = "Strength & Conditioning — Masterclass Cricket";
const description =
  "The Masterclass Strength & Conditioning Performance Programme: sports-science screening, movement assessment and a bespoke plan for every cricketer.";

export const Route = createFileRoute("/strength-conditioning")({
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
  component: StrengthConditioning,
});

/** Shared chip list — used by four different blocks on this page. */
function Chips({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-6 flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item} className="border border-line px-3 py-1.5 text-sm text-bone-400">
          {item}
        </li>
      ))}
    </ul>
  );
}

/**
 * SC-01 to SC-12.
 *
 * The four assessment stages, the two programme options and the four
 * memberships are all rendered as grids rather than stacks — six of the
 * blocks on this page are lists of six to eight short items, and stacking
 * every one of them would make the page an extremely long scroll on a phone.
 */
function StrengthConditioning() {
  return (
    <PageShell>
      <PageHero
        label="Strength & Conditioning"
        lines={["Stronger, faster,", "more resilient athletes"]}
      >
        <div className="flex max-w-[62ch] flex-col gap-4">
          {strength.intro.map((paragraph) => (
            <p key={paragraph} className="text-body text-bone-400">
              {paragraph}
            </p>
          ))}
        </div>

        {/* A CTA up here as well as at the bottom. Measured at 375px this page
            is nearly 11 screens tall and the first enquiry button sat at screen
            8.4 — too far for someone already convinced by the assessment
            process. Secondary variant so the SC-10 block stays the primary. */}
        <div className="mt-8">
          <ActionAnchor
            href={whatsappFor("a strength and conditioning assessment")}
            target="_blank"
            rel="noreferrer"
            variant="secondary"
            aria-label={strength.oneToOne.ctaAria}
          >
            {strength.oneToOne.ctaLabel}
          </ActionAnchor>
        </div>
      </PageHero>

      {/* ---- SC-02: the coach ---- */}
      <section aria-labelledby="sc-coach-heading" className="section-y">
        <div className="shell">
          <h2 id="sc-coach-heading" className="text-label text-bone-400">
            <span className="text-red-400">01</span> / {strength.coach.sectionHeading}
          </h2>

          <div className="mt-12 grid gap-8 border-t border-line pt-12 md:grid-cols-[minmax(0,auto)_minmax(0,1fr)] md:gap-16">
            <div>
              <h3 className="text-display-md text-bone-100">{strength.coach.name}</h3>
              <p className="text-label mt-3 text-red-400">{strength.coach.role}</p>
            </div>

            <div className="flex max-w-[62ch] flex-col gap-4">
              {strength.coach.bio.map((paragraph) => (
                <p key={paragraph} className="text-body text-bone-400">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---- SC-03 to SC-06: the four stages ---- */}
      <section
        aria-labelledby="sc-stages-heading"
        className="section-y border-t border-line bg-ink-900"
      >
        <div className="shell">
          <h2 id="sc-stages-heading" className="text-label text-bone-400">
            <span className="text-red-400">02</span> / The Assessment Process
          </h2>

          <ol className="mt-12 border-t border-line">
            {strength.stages.map((stage) => (
              <li key={stage.index}>
                <Reveal>
                  <div className="grid gap-4 border-b border-line py-10 md:grid-cols-[auto_minmax(0,1fr)] md:gap-12 md:py-14">
                    <span className="font-display text-4xl leading-none text-red-500 tnum md:text-[clamp(3rem,5vw,5rem)]">
                      {stage.index}
                    </span>

                    <div>
                      <h3 className="text-display-md text-bone-100">{stage.name}</h3>
                      <p className="text-body mt-4 max-w-[62ch] text-bone-400">{stage.body}</p>

                      {"items" in stage && stage.items && <Chips items={stage.items} />}

                      {"splits" in stage && stage.splits && (
                        <div className="mt-8 grid gap-8 md:grid-cols-2">
                          {stage.splits.map((split) => (
                            <div key={split.heading}>
                              <h4 className="text-label text-red-400">{split.heading}</h4>
                              <p className="text-body mt-3 text-bone-400">{split.detail}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---- SC-08 / SC-09: two programme options ---- */}
      <section aria-labelledby="sc-programmes-heading" className="section-y">
        <div className="shell">
          <h2 id="sc-programmes-heading" className="text-label text-bone-400">
            <span className="text-red-400">03</span> / Choose Your Programme
          </h2>

          <div className="mt-12 grid gap-6 border-t border-line pt-12 md:grid-cols-2">
            {strength.programmes.map((programme) => (
              <Reveal key={programme.name}>
                <article className="flex h-full flex-col border border-line bg-ink-900 p-6 md:p-8">
                  <h3 className="text-display-md text-bone-100">{programme.name}</h3>
                  <p className="text-body mt-4 text-bone-400">{programme.detail}</p>
                  <Chips items={programme.items} />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- SC-07: memberships ---- */}
      <section aria-labelledby="sc-membership-heading" className="section-y border-t border-line">
        <div className="shell">
          <h2 id="sc-membership-heading" className="text-label text-bone-400">
            <span className="text-red-400">04</span> / Membership
          </h2>

          {/* 2x2 on tablet: four tiers side by side below lg left each one
              about 150px wide. */}
          <ul className="mt-12 grid grid-cols-1 gap-4 border-t border-line pt-12 sm:grid-cols-2 lg:grid-cols-4">
            {strength.memberships.map((membership) => (
              <li key={membership.term} className="border border-line bg-ink-900 p-6">
                <p className="font-display text-xl text-bone-100">{membership.term}</p>
                {/* SC-07 / pre-launch check 21: no price until confirmed. A
                    placeholder line rather than an empty slot, which would
                    read as a broken card. */}
                <p className="text-label mt-4 text-bone-600">Enquire for pricing</p>
              </li>
            ))}
          </ul>

          <p className="text-body mt-6 text-bone-400">{strength.membershipNote}</p>
        </div>
      </section>

      {/* ---- SC-12: why ---- */}
      <section
        aria-labelledby="sc-why-heading"
        className="relative overflow-hidden border-y border-line"
      >
        <FieldDecor preset="field" />

        <div className="shell section-y relative z-10">
          <h2 id="sc-why-heading" className="text-display-lg max-w-[20ch] text-bone-100">
            {strength.why.heading}
          </h2>
          <p className="text-body-lg mt-6 max-w-[62ch] text-bone-400">{strength.why.body}</p>

          <ul className="mt-10 grid gap-x-8 border-t border-line sm:grid-cols-2">
            {strength.why.items.map((item) => (
              <li key={item} className="text-body border-b border-line py-4 text-bone-100">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---- SC-10 / SC-11: the two CTAs ---- */}
      <section aria-labelledby="sc-cta-heading" className="section-y">
        <div className="shell grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <h2 id="sc-cta-heading" className="text-display-md text-bone-100">
              {strength.oneToOne.heading}
            </h2>
            <p className="text-body mt-4 max-w-[62ch] text-bone-400">{strength.oneToOne.body}</p>
            <Chips items={strength.oneToOne.items} />

            <div className="mt-10">
              <ActionAnchor
                href={whatsappFor("a strength and conditioning assessment")}
                target="_blank"
                rel="noreferrer"
                aria-label={strength.oneToOne.ctaAria}
              >
                {strength.oneToOne.ctaLabel}
              </ActionAnchor>
            </div>
          </div>

          {/* SC-11 — visually subordinate on purpose: this markets to parents,
              a different audience from the rest of the site, and must not read
              as the academy's main offer. */}
          <aside className="border border-line bg-ink-900 p-6 md:p-8">
            <h3 className="text-label text-red-400">{strength.parentTraining.heading}</h3>
            <p className="text-body mt-4 text-bone-400">{strength.parentTraining.body}</p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {strength.parentTraining.items.map((item) => (
                <li key={item} className="border border-line px-3 py-1.5 text-sm text-bone-400">
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <ActionAnchor
                href={whatsappFor("personal training for parents")}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
              >
                {strength.parentTraining.ctaLabel}
              </ActionAnchor>
            </div>
          </aside>
        </div>
      </section>
    </PageShell>
  );
}
