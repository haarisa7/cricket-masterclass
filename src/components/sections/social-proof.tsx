import { FieldDecor } from "@/components/ui/field-decor";
import { ReelCard } from "@/components/ui/reel-card";
import { reels } from "@/data/content";
import { sectionNumber } from "@/data/sections";
import { socialMetrics, socials } from "@/data/site";

export function SocialProof() {
  return (
    <section aria-labelledby="social-heading" className="section-y relative overflow-hidden">
      {/* Same drifting bats and balls the original site ran behind this section. */}
      <FieldDecor preset="field" />

      <div className="shell relative z-10">
        {/* SOC-01: stacked below sm. The new heading is 40 characters, and
            beside a right-aligned link on a 375px screen it was squeezing to
            two words per line. */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <p className="text-label text-bone-400">
              <span className="text-red-400">{sectionNumber("reels")}</span> / Reels
            </p>
            <h2 id="social-heading" className="text-display-md mt-6 max-w-[18ch] text-bone-100">
              Join the Masterclass Cricket Community
            </h2>
          </div>
          <a
            href={socials[0].href}
            target="_blank"
            rel="noreferrer"
            className="link-wipe shrink-0 text-sm"
          >
            Follow on Instagram <span aria-hidden="true">→</span>
          </a>
        </div>

        <p className="text-body mt-8 max-w-[62ch] text-bone-400">
          Follow Masterclass Cricket for professional coaching insights, technical breakdowns,
          player transformations and practical drills viewed by cricketers around the world.
        </p>

        <ul className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {reels.map((reel, i) => (
            <li key={reel.caption}>
              <ReelCard reel={reel} index={i} />
            </li>
          ))}
        </ul>

        {/* SOC-02: three headline metrics, not five per-platform counts. As
            well as being the figures the client asked for, three divides
            cleanly at every breakpoint — the old five-column grid wrapped to
            an awkward 2 + 2 + 1 on tablet. */}
        <dl className="mt-12 grid grid-cols-1 border-t border-line sm:grid-cols-3">
          {socialMetrics.map((metric) => (
            <div key={metric.label} className="border-b border-line py-5 pr-6">
              <dd className="font-mono text-2xl text-bone-100 tnum">{metric.value}</dd>
              <dt className="text-label mt-2 text-bone-400">{metric.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
