import { reels } from "@/data/content";
import { socials } from "@/data/site";

export function SocialProof() {
  return (
    <section aria-labelledby="social-heading" className="section-y">
      <div className="shell">
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
          {reels.map((reel) => (
            <li key={reel.caption}>
              <a
                href={reel.href}
                target="_blank"
                rel="noreferrer"
                className="group relative block aspect-[9/16] overflow-hidden bg-ink-800"
              >
                <span className="text-label absolute left-4 top-4 z-10 text-bone-400">
                  [ Reel — {reel.caption} ]
                </span>
                <span className="absolute inset-0 flex items-end p-4">
                  <span className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-none text-bone-100 tnum">
                    {reel.views}
                  </span>
                </span>
                <span className="absolute inset-0 bg-red-600/0 transition-colors duration-400 ease-brand group-hover:bg-red-600/20" />
              </a>
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
