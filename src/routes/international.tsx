import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHero, PageShell } from "@/components/sections/page-shell";
import { ActionAnchor } from "@/components/ui/action";
import { FieldDecor } from "@/components/ui/field-decor";
import { Reveal } from "@/components/ui/reveal";
import { international } from "@/data/international";
import { whatsappFor } from "@/data/site";

const title = "International Cricket Coaching Programme — Masterclass Cricket";
const description =
  "Train with Masterclass Cricket in the UK. A bespoke coaching programme for overseas players, built around your goals and the time you have available.";

export const Route = createFileRoute("/international")({
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
  component: International,
});

/**
 * INT-01 to INT-05 — the client's Section 30 copy in full.
 *
 * THE DESIGN PROBLEM THIS PAGE POSES: the source copy is four consecutive
 * bullet lists near the end (Why Train, Who Is This For, Why Overseas Players
 * Choose, Continue Your Development) plus two eight-item lists inside the
 * journey steps. Rendered identically that is roughly forty bullets in a row and
 * the reader stops seeing any of them.
 *
 * So each list gets a deliberately different treatment — chips, then numbered
 * steps, then a bordered list, then a two-column split, then marker rows on a
 * darker panel, then a card. Same content, but the eye gets a reason to keep
 * moving.
 */
function International() {
  const { whyTrain, journey, travelSupport, audience, why, online, cta } = international;

  return (
    <PageShell>
      <PageHero label="International" lines={["Train with Masterclass", "Cricket in the UK"]}>
        <div className="flex max-w-[62ch] flex-col gap-4">
          {international.intro.map((paragraph) => (
            <p key={paragraph} className="text-body text-bone-400">
              {paragraph}
            </p>
          ))}
        </div>

        {/* A CTA up here, not only in the closing band.
            This page carries the whole of the client's Section 30 — measured at
            375px it is nearly 13 screens tall, and with the only enquiry button
            at the very bottom the first one sat at screen 11. Someone convinced
            by the third screen had to scroll eight more to act.
            Secondary variant so the closing red band stays the primary call. */}
        <div className="mt-8">
          <ActionAnchor
            href={whatsappFor("the International Coaching Programme")}
            target="_blank"
            rel="noreferrer"
            variant="secondary"
            aria-label={international.cta.ctaAria}
          >
            Enquire About the Programme
          </ActionAnchor>
        </div>
      </PageHero>

      {/* ---- 01 Why train here — CHIPS, so six short phrases stay compact ---- */}
      <section aria-labelledby="int-why-train-heading" className="section-y">
        <div className="shell">
          <p className="text-label text-bone-400">
            <span className="text-red-400">01</span> / Before You Arrive
          </p>

          <h2
            id="int-why-train-heading"
            className="text-display-md mt-6 max-w-[22ch] text-bone-100"
          >
            {whyTrain.heading}
          </h2>

          <p className="text-body mt-6 max-w-[62ch] text-bone-400">{whyTrain.lead}</p>

          <ul className="mt-8 flex flex-wrap gap-2">
            {whyTrain.items.map((item) => (
              <li key={item} className="border border-line-str px-3 py-1.5 text-sm text-bone-100">
                {item}
              </li>
            ))}
          </ul>

          <p className="text-body-lg mt-8 max-w-[62ch] text-bone-100">{whyTrain.closing}</p>
        </div>
      </section>

      {/* ---- 02 The four steps ---- */}
      <section
        aria-labelledby="int-journey-heading"
        className="section-y border-t border-line bg-ink-900"
      >
        <div className="shell">
          <p className="text-label text-bone-400">
            <span className="text-red-400">02</span> / The Process
          </p>

          <h2 id="int-journey-heading" className="text-display-md mt-6 max-w-[20ch] text-bone-100">
            {journey.heading}
          </h2>

          <p className="text-body mt-6 text-bone-400">{journey.lead}</p>

          <ol className="mt-12 border-t border-line">
            {journey.steps.map((step) => (
              <li key={step.index}>
                <Reveal>
                  <div className="grid gap-4 border-b border-line py-10 md:grid-cols-[auto_minmax(0,1fr)] md:gap-12 md:py-14">
                    {/* Numeral shrinks hard below md — at the desktop clamp it
                        took a third of a 375px screen on its own row. */}
                    <span className="font-display text-4xl leading-none text-red-500 tnum md:text-[clamp(3rem,5vw,5rem)]">
                      {step.index}
                    </span>

                    <div>
                      <h3 className="text-display-md text-bone-100">{step.name}</h3>

                      <div className="mt-4 flex max-w-[62ch] flex-col gap-3">
                        {step.body.map((paragraph) => (
                          <p key={paragraph} className="text-body text-bone-400">
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      {/* Two columns: steps 1 and 2 carry eight items each, and
                          a single eight-high stack inside a step made the step
                          itself look like the whole page. */}
                      {"items" in step && step.items && (
                        <ul className="mt-6 grid gap-x-8 border-t border-line sm:grid-cols-2">
                          {step.items.map((item) => (
                            <li
                              key={item}
                              className="border-b border-line py-3 text-sm text-bone-100"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}

                      {"closing" in step && step.closing && (
                        <p className="text-body mt-6 max-w-[62ch] text-bone-100">{step.closing}</p>
                      )}
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---- 03 Travel support + INT-03 disclaimer ---- */}
      <section aria-labelledby="int-travel-heading" className="section-y">
        <div className="shell grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <p className="text-label text-bone-400">
              <span className="text-red-400">03</span> / Planning Your Stay
            </p>

            <h2 id="int-travel-heading" className="text-display-md mt-6 text-bone-100">
              {travelSupport.heading}
            </h2>

            <p className="text-body mt-6 max-w-[62ch] text-bone-400">{travelSupport.lead}</p>

            <ul className="mt-8 border-t border-line">
              {travelSupport.items.map((item) => (
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

          {/* INT-03. Full body size, its own panel, sitting alongside the travel
              content rather than tucked beneath it. This is a liability
              statement — if it is not read it does not do its job, so it is
              never small print and never behind a disclosure. */}
          <aside className="self-start border border-red-500 bg-ink-900 p-6 md:p-8">
            <p className="text-label text-red-400">Please note</p>
            <p className="text-body-lg mt-4 text-bone-100">{travelSupport.disclaimer}</p>
          </aside>
        </div>
      </section>

      {/* ---- 04 Who it is for — heading left, list right ---- */}
      <section
        aria-labelledby="int-audience-heading"
        className="relative overflow-hidden border-y border-line"
      >
        <FieldDecor preset="quiet" />

        <div className="shell section-y relative z-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-label text-bone-400">
              <span className="text-red-400">04</span> / Suitability
            </p>

            <h2
              id="int-audience-heading"
              className="text-display-lg mt-6 max-w-[14ch] text-bone-100"
            >
              {audience.heading}
            </h2>

            <p className="text-body mt-6 max-w-[46ch] text-bone-400">{audience.lead}</p>
          </div>

          <div>
            <ul className="border-t border-line">
              {audience.items.map((item) => (
                <li key={item} className="text-body border-b border-line py-4 text-bone-100">
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-body mt-6 text-bone-400">{audience.closing}</p>
          </div>
        </div>
      </section>

      {/* ---- 05 Why overseas players choose us — marker rows, darker panel ---- */}
      <section
        aria-labelledby="int-why-heading"
        className="section-y border-b border-line bg-ink-900"
      >
        <div className="shell">
          <p className="text-label text-bone-400">
            <span className="text-red-400">05</span> / The Difference
          </p>

          <h2 id="int-why-heading" className="text-display-md mt-6 max-w-[24ch] text-bone-100">
            {why.heading}
          </h2>

          <p className="text-body mt-6 max-w-[62ch] text-bone-400">{why.lead}</p>

          {/* Seven items across two columns. An odd count leaves a gap in the
              last row either way, so the closing sentence sits in it rather
              than below the grid — which also stops it reading as an eighth
              bullet. */}
          <ul className="mt-10 grid gap-x-10 sm:grid-cols-2">
            {why.items.map((item) => (
              <li key={item} className="flex items-baseline gap-4 border-b border-line py-4">
                <span aria-hidden="true" className="text-label shrink-0 text-red-400">
                  ✓
                </span>
                <span className="text-body text-bone-100">{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-body-lg mt-10 max-w-[72ch] border-l-2 border-red-500 pl-6 text-bone-100">
            {why.closing}
          </p>
        </div>
      </section>

      {/* ---- 06 INT-02: online continuation, as a card ---- */}
      <section aria-labelledby="int-online-heading" className="section-y">
        <div className="shell">
          <p className="text-label text-bone-400">
            <span className="text-red-400">06</span> / After You Leave
          </p>

          <div className="mt-6 grid gap-10 border border-line bg-ink-900 p-6 md:p-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-16">
            <div>
              <h2 id="int-online-heading" className="text-display-md max-w-[20ch] text-bone-100">
                {online.heading}
              </h2>

              <p className="text-body mt-6 max-w-[62ch] text-bone-400">{online.lead}</p>

              <p className="text-body mt-6 max-w-[62ch] text-bone-400">{online.uploadNote}</p>

              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                {online.crossLinks.map((link) => (
                  <Link
                    key={link.slug}
                    to="/programmes/$slug"
                    params={{ slug: link.slug }}
                    className="link-wipe text-sm"
                  >
                    {link.name} <span aria-hidden="true">→</span>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <ul className="border-t border-line">
                {online.items.map((item) => (
                  <li key={item} className="border-b border-line py-3 text-sm text-bone-100">
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-body mt-6 text-bone-400">{online.closing}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- INT-05: call to action ---- */}
      <section aria-labelledby="int-cta-heading" className="border-t border-line bg-red-600">
        <div className="shell flex flex-col items-start gap-8 py-24">
          <h2 id="int-cta-heading" className="text-display-lg max-w-[16ch] text-bone-50">
            {cta.heading}
          </h2>

          <p className="text-body-lg max-w-[62ch] text-bone-50/85">{cta.body}</p>

          {/* Outline variant: the band is already red, so a red primary button
              would disappear into it. */}
          <ActionAnchor
            href={whatsappFor("the International Coaching Programme")}
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
