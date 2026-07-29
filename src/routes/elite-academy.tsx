import { createFileRoute, redirect } from "@tanstack/react-router";

/**
 * ELIT-01 — the Elite Academy is gone, but /elite-academy was indexed.
 *
 * This route exists only to 301 to the section that replaced it on the
 * homepage. Deleting the route outright would have handed search engines a 404
 * and thrown away whatever ranking the page carried.
 *
 * The redirect lives in the router rather than a host config file because this
 * app deploys to Cloudflare Workers, which never reads a `_redirects` file.
 */
export const Route = createFileRoute("/elite-academy")({
  loader: () => {
    throw redirect({ to: "/", hash: "indoor-programme", statusCode: 301 });
  },
});
