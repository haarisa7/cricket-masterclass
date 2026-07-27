import { createFileRoute } from "@tanstack/react-router";

import { StubPage } from "@/components/sections/stub-page";

const title = "Kings House Sports Grounds, Chiswick — Masterclass Cricket";
const description = "Kings House Sports Grounds, Chiswick — Masterclass Cricket, professional cricket coaching in Chiswick, West London.";

export const Route = createFileRoute("/contact")({
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
  component: () => <StubPage label="Contact" title="Kings House Sports Grounds, Chiswick" />,
});
