import { Reveal, RevealHeading } from "@/components/ui/reveal";
import { journey, venues } from "@/data/pages";
import { sectionNumber } from "@/data/sections";

/**
 * JRN-01 to JRN-03 and VEN-01 — a new section. Nothing equivalent existed.
 *
 * The venues are grouped rather than listed flat, which is the whole point of
 * VEN-01: one undifferentiated list of clubs implies we run regular sessions
 * at all of them. "Academy history" keeps Richmond CC visible without claiming
 * an active partnership.
 */
export function Journey() {
  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      className="section-y border-t border-line"
    >
      <div className="shell">
        <p className="text-label text-bone-400">
          <span className="text-red-400">{sectionNumber("journey")}</span> / Our Journey and
          Locations
        </p>

        <RevealHeading
          as="h2"
          id="journey-heading"
          className="text-display-lg mt-6 max-w-[18ch] text-bone-100"
          lines={["Over a Decade of Coaching", "Across West London"]}
        />

        {/* Two columns from lg so 190 words of body copy do not run as one
            very long single column on a wide monitor. */}
        <div className="mt-12 grid gap-x-16 gap-y-6 border-t border-line pt-12 lg:grid-cols-2">
          {journey.body.map((paragraph, i) => (
            <Reveal key={paragraph} delay={i * 0.04}>
              <p className="text-body max-w-[62ch] text-bone-400">{paragraph}</p>
            </Reveal>
          ))}
        </div>

        {/* JRN-03. As one sentence this is ~95 characters and wraps to four
            lines on a phone, which defeats the point of a highlight strip.
            Three items stack on mobile and sit inline from md up. */}
        <ul className="mt-12 flex flex-col gap-3 border-y border-line py-6 md:flex-row md:flex-wrap md:items-center md:gap-x-8">
          {journey.highlight.map((item) => (
            <li key={item} className="text-body-lg text-bone-100">
              {item}
            </li>
          ))}
        </ul>

        {/* VEN-01 */}
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {venues.map((group) => (
            <Reveal key={group.group}>
              <div>
                <h3 className="text-label text-red-400">{group.group}</h3>
                <p className="text-label mt-2 text-bone-600">{group.note}</p>

                <ul className="mt-6 border-t border-line">
                  {group.items.map((venue) => (
                    <li key={venue.name} className="border-b border-line py-4">
                      <p className="text-body text-bone-100">{venue.name}</p>
                      <p className="text-label mt-1 text-bone-400">{venue.detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
