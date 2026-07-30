import heroImage from "@/assets/hero-nets-batsman.jpg";
import { ActionAnchor, ActionLink } from "@/components/ui/action";
import { RevealHeading } from "@/components/ui/reveal";
import { serviceAreas, site, tickerItems, whatsappFor } from "@/data/site";

export function Hero() {
  // min-h, not h: with a fixed height plus justify-end, any content taller than
  // the viewport overflows upward and overflow-hidden clips the first heading
  // line. min-h lets the section grow instead.
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden">
      <div className="absolute inset-0">
        <video
          className="size-full object-cover"
          poster={heroImage}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
        >
          {/* Drop the supplied coaching loop at /media/hero-coaching-loop.mp4
              and add it back as a <source>. The poster below is the fallback. */}
        </video>
        <img
          src={heroImage}
          alt="Cricketer facing a red ball in a dark indoor net"
          width={1920}
          height={1280}
          fetchPriority="high"
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div className="absolute inset-0 bg-ink-950/55" />
        <div className="scrim absolute inset-x-0 bottom-0 h-2/3" />
      </div>

      {/* pt clears the fixed header so the first line can never tuck under it. */}
      <div className="relative z-10 pb-20 pt-28 md:pb-24 md:pt-32">
        <div className="shell">
          <ul className="text-label mb-4 flex flex-wrap items-center gap-x-2 gap-y-1 tracking-[0.12em] text-bone-400 sm:mb-6 sm:gap-x-3 sm:tracking-[0.18em]">
            {[...serviceAreas, `Est. ${site.founded}`].map((area, i) => (
              <li key={area} className="flex items-center gap-x-2 sm:gap-x-3">
                {i > 0 && (
                  <span aria-hidden="true" className="text-bone-600">
                    ·
                  </span>
                )}
                {area}
              </li>
            ))}
          </ul>

          <RevealHeading
            as="h1"
            className="text-display-xl text-bone-100"
            lines={[
              "Professional Cricket",
              "Coaching for Players",
              <>
                of Every <span className="text-red-500">Ability</span>
              </>,
            ]}
          />

          {/* HERO-03. The client's paragraph is 74 words and must appear
              verbatim, but at body-lg on a 375x812 phone it runs to roughly
              fifteen lines. In a min-h-100svh hero with justify-end that
              pushed BOTH calls to action and the ticker below the fold — the
              single worst layout problem on the page.

              Nothing is cut. The first two sentences carry the promise and
              show immediately; the third is disclosed behind a native
              <details> on small screens only. Every word is still in the DOM
              on every breakpoint, so SEO and screen readers are unaffected,
              and from sm up the full paragraph renders as one block exactly as
              written.

              Wider than the default 62ch measure: this is fixed copy, and at
              62ch it ran long on desktop too. */}
          <div className="text-body-lg mt-6 max-w-[88ch] text-bone-400">
            <p>
              Masterclass Cricket is a professional cricket coaching academy helping players of all
              abilities, from complete beginners to international performers. Every player receives
              a bespoke coaching programme built around their individual strengths, weaknesses,
              learning style and long-term goals.
            </p>

            <details className="group mt-2 sm:hidden">
              <summary className="text-label cursor-pointer list-none text-bone-100 underline underline-offset-4 group-open:hidden">
                Read more
              </summary>
              <p className="mt-2">
                We combine elite playing experience with biomechanics, technical coaching and
                tactical understanding to help players improve faster.
              </p>
            </details>

            <p className="mt-2 hidden sm:block">
              We combine elite playing experience with biomechanics, technical coaching and tactical
              understanding to help players improve faster.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ActionAnchor href={whatsappFor("cricket coaching")} target="_blank" rel="noreferrer">
              Book a Session
            </ActionAnchor>
            <ActionLink to="/programmes/one-to-one" variant="secondary">
              Explore Coaching
            </ActionLink>
          </div>
        </div>
      </div>

      <div className="absolute bottom-28 right-[var(--gutter)] z-10 hidden flex-col items-center gap-4 md:flex">
        <span className="text-label [writing-mode:vertical-rl] text-bone-400">Scroll</span>
        <span className="scroll-line block h-16 w-px bg-bone-400" />
      </div>

      <div className="relative z-10 flex h-10 items-center overflow-hidden bg-red-500">
        <div className="marquee-track text-label text-bone-50">
          {[0, 1].map((copy) => (
            <span key={copy} className="flex shrink-0">
              {tickerItems.map((item) => (
                <span key={item} className="px-8">
                  {item}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
