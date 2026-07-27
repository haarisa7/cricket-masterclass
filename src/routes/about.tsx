import { createFileRoute } from "@tanstack/react-router";

import { StubPage } from "@/components/sections/stub-page";

const title = "Ten years of coaching in Chiswick — Masterclass Cricket";
const description = "Ten years of coaching in Chiswick — Masterclass Cricket, professional cricket coaching in Chiswick, West London.";

export const Route = createFileRoute("/about")({
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
  component: () => <StubPage label="About" title="Ten years of coaching in Chiswick" />,
});
