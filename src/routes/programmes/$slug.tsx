import { createFileRoute } from "@tanstack/react-router";

import { StubPage } from "@/components/sections/stub-page";

export const Route = createFileRoute("/programmes/$slug")({
  head: ({ params }) => {
    const name = params.slug.replace(/-/g, " ");
    const title = `${name} — Masterclass Cricket`;
    const description = `Full details of ${name} coaching at Masterclass Cricket, Chiswick, West London.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProgrammePage,
});

function ProgrammePage() {
  const { slug } = Route.useParams();
  const name = slug.replace(/-/g, " ").replace(/\b\w/g, (c: string) => c.toUpperCase());
  return <StubPage label="Programme" title={name} />;
}
