import { createFileRoute } from "@tanstack/react-router";

import {
  LogoHorizontal,
  LogoMark,
  LogoStacked,
  LogoWordmark,
  type BrandTone,
} from "@/components/brand/logo";

export const Route = createFileRoute("/brand")({
  component: BrandPage,
  head: () => ({
    meta: [
      { title: "Brand Marks — Masterclass Cricket" },
      {
        name: "description",
        content:
          "Every Masterclass Cricket logo variant on light and dark surfaces, checked from 20px to 160px.",
      },
      { property: "og:title", content: "Brand Marks — Masterclass Cricket" },
      {
        property: "og:description",
        content: "The Masterclass Cricket logo system: mark, horizontal, stacked and wordmark.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/brand" },
    ],
    links: [{ rel: "canonical", href: "/brand" }],
  }),
});

const SIZES = [20, 32, 64, 160] as const;

const VARIANTS = [
  { name: "LogoMark", Comp: LogoMark, use: "Favicon, avatars, collapsed rail" },
  { name: "LogoHorizontal", Comp: LogoHorizontal, use: "Navbar, topbar, sidebar" },
  { name: "LogoStacked", Comp: LogoStacked, use: "Footer, auth, splash" },
  { name: "LogoWordmark", Comp: LogoWordmark, use: "Tight spaces, print" },
] as const;

function Surface({
  tone,
  label,
  className,
}: {
  tone: BrandTone;
  label: string;
  className: string;
}) {
  return (
    <section className={className}>
      <div className="shell section-y flex flex-col gap-16">
        <h2 className="text-display-md">{label}</h2>
        {VARIANTS.map(({ name, Comp, use }) => (
          <div key={name} className="flex flex-col gap-6 border-t border-current/15 pt-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-label">{name}</h3>
              <p className="text-label opacity-60">{use}</p>
            </div>
            <div className="flex flex-wrap items-end gap-12">
              {SIZES.map((size) => (
                <div key={size} className="flex flex-col items-start gap-3">
                  <Comp tone={tone} className="w-auto" style={{ height: size }} />
                  <span className="text-label opacity-60 tnum">{size}px</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function BrandPage() {
  return (
    <main>
      <div className="shell pt-32">
        <p className="text-label text-red-400">Brand system</p>
        <h1 className="text-display-lg mt-6">Logo variants</h1>
      </div>

      <Surface tone="dark" label="Dark surface" className="bg-ink-950 text-bone-100" />
      <Surface tone="light" label="Light surface" className="bg-bone-50 text-ink-950" />

      <section className="bg-ink-900">
        <div className="shell section-y flex flex-col gap-10">
          <h2 className="text-display-md text-bone-100">Single-colour fallbacks</h2>
          <div className="flex flex-wrap items-end gap-16">
            <div className="flex items-end gap-8 bg-bone-50 p-8">
              <LogoMark tone="ink" className="h-16 w-16" />
              <LogoHorizontal tone="ink" className="h-10" />
            </div>
            <div className="flex items-end gap-8 bg-ink-950 p-8">
              <LogoMark tone="white" className="h-16 w-16" />
              <LogoHorizontal tone="white" className="h-10" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
