import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://masterclasscricket.co.uk";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

/**
 * PROG-01 / OTH-01 / GRP-01: eight programmes, down from twelve.
 *
 * Removed: academy-sessions, performance-clinics, mind-mapping, approved-coach.
 * Renamed: small-group -> group-sessions, performance-camps -> cricket-camps.
 *
 * Every one of those six URLs was in this sitemap and is therefore indexed, so
 * all six are 301'd in public/_redirects. Do not simply drop a slug from this
 * list without adding the redirect.
 */
const PROGRAMME_SLUGS = [
  "one-to-one",
  "group-sessions",
  "cricket-camps",
  "schools",
  "tours",
  "corporate",
  "online-batting",
  "online-bowling",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.7" },
          { path: "/founder", changefreq: "monthly", priority: "0.7" },
          { path: "/coaches", changefreq: "monthly", priority: "0.6" },
          { path: "/strength-conditioning", changefreq: "monthly", priority: "0.8" },
          { path: "/international", changefreq: "monthly", priority: "0.8" },
          { path: "/consultancy", changefreq: "monthly", priority: "0.8" },
          { path: "/contact", changefreq: "monthly", priority: "0.6" },
          { path: "/safeguarding", changefreq: "yearly", priority: "0.3" },
          ...PROGRAMME_SLUGS.map((slug) => ({
            path: `/programmes/${slug}`,
            changefreq: "monthly" as const,
            priority: "0.7",
          })),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
