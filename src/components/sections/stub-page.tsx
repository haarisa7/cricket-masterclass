import { Link } from "@tanstack/react-router";

import { Footer } from "@/components/sections/footer";
import { Navigation } from "@/components/sections/navigation";

/** Placeholder for pages that extend the homepage design system. */
export function StubPage({ label, title }: { label: string; title: string }) {
  return (
    <>
      <Navigation />
      <main className="shell flex min-h-[100svh] flex-col justify-center py-48">
        <p className="text-label text-red-400">{label}</p>
        <h1 className="text-display-lg mt-6 max-w-[16ch] text-bone-100">{title}</h1>
        <p className="text-body-lg mt-6 text-bone-400">
          This page is next in the build. The homepage design system covers everything it needs.
        </p>
        <Link to="/" className="link-wipe mt-10 text-sm">
          Back to home <span aria-hidden="true">→</span>
        </Link>
      </main>
      <Footer />
    </>
  );
}
