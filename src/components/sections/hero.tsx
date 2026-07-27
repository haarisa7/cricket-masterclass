import heroImage from "@/assets/hero-nets-batsman.jpg";
import { ActionAnchor, ActionLink } from "@/components/ui/action";
import { RevealHeading } from "@/components/ui/reveal";
import { BOOKING, tickerItems } from "@/data/site";

export function Hero() {
  return (
    <section className="relative flex h-[100svh] min-h-[620px] flex-col justify-end overflow-hidden">
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
          <source src="/media/hero-coaching-loop.mp4" type="video/mp4" />
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

      <div className="relative z-10 pb-24 md:pb-32">
        <div className="shell">
          <p className="text-label mb-6 text-bone-400">West London · Est. 2015</p>

          <RevealHeading
            as="h1"
            className="text-display-xl text-bone-100"
            lines={[
              "FOR EVERY SKILL,",
              <>
                WE'VE GOT THE <span className="text-red-500">DRILL.</span>
              </>,
            ]}
          />

          <p className="text-body-lg mt-8 text-bone-400">
            Professional cricket coaching for players at every level — from first-ever net to
            international honours.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <ActionAnchor href={BOOKING.session} target="_blank" rel="noreferrer">
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
