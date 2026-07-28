import { FieldDecor } from "@/components/ui/field-decor";
import { ReelCard } from "@/components/ui/reel-card";
import { reels } from "@/data/content";
import { socials } from "@/data/site";

export function SocialProof() {
  return (
    <section aria-labelledby="social-heading" className="section-y relative overflow-hidden">
      {/* Same drifting bats and balls the original site ran behind this section. */}
      <FieldDecor preset="field" />

      <div className="shell relative z-10">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-6 sm:flex sm:justify-between">
          <div className="min-w-0">
            <p className="text-label text-bone-400">
              <span className="text-red-400">05</span> / Reels
            </p>
            <h2 id="social-heading" className="text-display-md mt-6 text-bone-100">
              Check out our social media
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

        <ul className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {reels.map((reel, i) => (
            <li key={reel.caption}>
              <ReelCard reel={reel} index={i} />
            </li>
          ))}
        </ul>

        <dl className="mt-12 grid grid-cols-2 border-t border-line sm:grid-cols-3 lg:grid-cols-5">
          {socials.map((social) => (
            <div key={social.platform} className="border-b border-line py-5 pr-6">
              <dt className="text-label text-bone-400">{social.platform}</dt>
              <dd className="mt-2 font-mono text-lg text-bone-100 tnum">{social.followers}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
