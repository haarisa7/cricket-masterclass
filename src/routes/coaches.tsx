import { createFileRoute } from "@tanstack/react-router";

import { StubPage } from "@/components/sections/stub-page";

const title = "The people on the grass — Masterclass Cricket";
const description = "The people on the grass — Masterclass Cricket, professional cricket coaching in Chiswick, West London.";

export const Route = createFileRoute("/coaches")({
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
  component: () => <StubPage label="Coaches" title="The people on the grass" />,
});
