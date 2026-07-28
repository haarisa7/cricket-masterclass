import { createFileRoute } from "@tanstack/react-router";

import { PageHero, PageShell } from "@/components/sections/page-shell";
import { ActionAnchor } from "@/components/ui/action";
import { Reveal } from "@/components/ui/reveal";
import { safeguarding } from "@/data/pages";
import { site, whatsappFor } from "@/data/site";

const title = "Safeguarding Policy — Masterclass Cricket";
const description =
  "How Masterclass Cricket keeps children and adults at risk safe: vetting, codes of conduct, photography consent and how to report a concern.";

export const Route = createFileRoute("/safeguarding")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Safeguarding,
});

function Safeguarding() {
  return (
    <PageShell>
      <PageHero
        index="01"
        label="Policy"
        lines={["Safeguarding", "Policy"]}
        intro={safeguarding.intro}
      >
        <p className="text-label text-bone-600">Last reviewed {safeguarding.updated}</p>
      </PageHero>

      <section aria-labelledby="policy-heading" className="section-y">
        <div className="shell">
          <h2 id="policy-heading" className="sr-only">
            Policy sections
          </h2>

          <div className="border-t border-line">
            {safeguarding.sections.map((section) => (
              <Reveal key={section.index}>
                <article className="grid items-start gap-6 border-b border-line py-10 md:grid-cols-[6rem_minmax(0,22ch)_minmax(0,1fr)] md:gap-10 md:py-12">
                  <p className="text-label text-red-400 tnum">{section.index}</p>
                  <h3 className="font-display text-[clamp(1.25rem,2vw,1.625rem)] font-bold leading-tight text-bone-100">
                    {section.name}
                  </h3>
                  <p className="text-body text-bone-400">{section.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="report-heading" className="border-t border-line">
        <div className="shell section-y flex flex-col items-start gap-8">
          <h2 id="report-heading" className="text-display-md max-w-[18ch] text-bone-100">
            Worried about a child? Tell us today.
          </h2>
          <p className="text-body-lg text-bone-400">
            If a child is in immediate danger, call 999. Otherwise reach the head coach directly on{" "}
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="link-wipe">
              {site.phone}
            </a>{" "}
            or by email at{" "}
            <a href={`mailto:${site.email}`} className="link-wipe">
              {site.email}
            </a>
            .
          </p>
          <ActionAnchor
            href={whatsappFor("a safeguarding concern")}
            target="_blank"
            rel="noreferrer"
          >
            Report a Concern
          </ActionAnchor>
        </div>
      </section>
    </PageShell>
  );
}
