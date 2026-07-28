import eliteImage from "@/assets/elite-academy.jpg";
import { ActionLink } from "@/components/ui/action";
import { RevealHeading, RevealImage } from "@/components/ui/reveal";
import { eliteAcademy } from "@/data/content";

export function EliteAcademy() {
  return (
    <section
      id="elite"
      aria-labelledby="elite-heading"
      className="grid items-stretch border-y border-line lg:grid-cols-2"
    >
      <RevealImage
        src={eliteImage}
        alt="Coaches and players silhouetted on a floodlit cricket ground at night"
        width={1600}
        height={1200}
        className="min-h-[60svh] lg:min-h-[80svh]"
      />

      <div className="flex flex-col justify-center gap-8 px-[var(--gutter)] py-24 lg:py-32">
        <p className="text-label text-red-400">{eliteAcademy.eyebrow}</p>

        <RevealHeading
          as="h2"
          id="elite-heading"
          className="text-display-lg max-w-[14ch] text-bone-100"
          lines={["Masterclass Elite", "Cricket Academy"]}
        />

        <p className="text-body-lg text-bone-400">{eliteAcademy.copy}</p>

        <dl className="border-t border-line">
          {eliteAcademy.points.map((point) => (
            <div
              key={point.label}
              className="grid grid-cols-1 gap-1 border-b border-line py-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-baseline sm:gap-4"
            >
              <dt className="text-label text-bone-100">{point.label}</dt>
              <dd className="text-label text-bone-400">{point.detail}</dd>
            </div>
          ))}
        </dl>

        <div>
          <ActionLink to={eliteAcademy.cta.href}>{eliteAcademy.cta.label}</ActionLink>
        </div>
      </div>
    </section>
  );
}
