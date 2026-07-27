import { createFileRoute } from "@tanstack/react-router";

import { StubPage } from "@/components/sections/stub-page";

const title = "Masterclass Elite Cricket Academy — Masterclass Cricket";
const description = "Masterclass Elite Cricket Academy — Masterclass Cricket, professional cricket coaching in Chiswick, West London.";

export const Route = createFileRoute("/elite-academy")({
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
  component: () => <StubPage label="Elite Academy" title="Masterclass Elite Cricket Academy" />,
});
