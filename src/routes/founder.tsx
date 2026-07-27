import { createFileRoute } from "@tanstack/react-router";

import { StubPage } from "@/components/sections/stub-page";

const title = "Uzi Arif, Head Coach — Masterclass Cricket";
const description = "Uzi Arif, Head Coach — Masterclass Cricket, professional cricket coaching in Chiswick, West London.";

export const Route = createFileRoute("/founder")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <StubPage label="The Founder" title="Uzi Arif, Head Coach" />,
});
