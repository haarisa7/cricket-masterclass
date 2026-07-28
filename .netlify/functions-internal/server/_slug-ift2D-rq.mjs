import { a as programmes } from "./_ssr/pages-DXtNne_f.mjs";
import { n as require_jsx_runtime } from "./_libs/react+tanstack__react-query.mjs";
import { h as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./_slug-qiLgkn4m.mjs";
import { a as FieldDecor, c as Reveal, l as RevealHeading, r as BOOKING, t as ActionAnchor, u as RevealImage, y as whatsappFor } from "./_ssr/whatsapp-float-CCew7q8s.mjs";
import { n as PageShell } from "./_ssr/page-shell-BXfE-1IR.mjs";
import { t as coreServices } from "./_ssr/services-C5fQ_dqp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-ift2D-rq.js
var import_jsx_runtime = require_jsx_runtime();
/** Camps have a real checkout; every other programme opens WhatsApp. */
function bookingHref(programme) {
	return programme.booking === "camps" ? BOOKING.camps : whatsappFor(programme.name);
}
/** Reuse the homepage photography where a programme has a matching card. */
function imageFor(slug) {
	return coreServices.find((service) => service.detailsHref === `/programmes/${slug}`);
}
function ProgrammePage() {
	const { programme } = Route.useLoaderData();
	const hero = imageFor(programme.slug);
	const others = programmes.filter((p) => p.slug !== programme.slug).slice(0, 4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden border-b border-line",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldDecor, { preset: "quiet" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell relative z-10 pb-24 pt-40 md:pt-48",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-label text-bone-400",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-red-400",
							children: programme.tier
						}), " / Programme"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealHeading, {
						as: "h1",
						className: "text-display-lg mt-8 max-w-[14ch] text-bone-100",
						lines: [programme.name]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-body-lg mt-8 text-bone-400",
						children: programme.intro
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-wrap items-center gap-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionAnchor, {
							href: bookingHref(programme),
							target: "_blank",
							rel: "noreferrer",
							children: programme.ctaLabel
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							className: "link-wipe text-sm",
							children: ["Ask a question first ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								children: "→"
							})]
						})]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			"aria-labelledby": "included-heading",
			className: "section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						id: "included-heading",
						className: "text-label text-bone-400",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-red-400",
							children: "01"
						}), " / What’s Included"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 border-t border-line",
						children: programme.includes.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "text-body flex items-baseline gap-4 border-b border-line py-5 text-bone-100",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								className: "text-red-400",
								children: "—"
							}), item]
						}, item))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-label mt-16 text-bone-400",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-red-400",
							children: "02"
						}), " / Who It Suits"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-body-lg mt-8 text-bone-400",
						children: programme.suitedTo
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-label text-bone-400",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-red-400",
						children: "03"
					}), " / Format"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-8 border-t border-line",
					children: programme.format.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-[minmax(0,auto)_minmax(0,1fr)] items-baseline gap-4 border-b border-line py-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-label text-bone-400",
							children: row.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "text-right text-sm text-bone-100",
							children: row.value
						})]
					}, row.label))
				})] })]
			})
		}),
		hero && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealImage, {
			src: hero.image,
			alt: hero.imageAlt,
			width: 1920,
			height: 1080,
			className: "h-[45svh] border-y border-line lg:h-[65svh]"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			"aria-labelledby": "more-heading",
			className: "section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					id: "more-heading",
					className: "text-label text-bone-400",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-red-400",
						children: "04"
					}), " / Other Programmes"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-12 border-t border-line",
					children: others.map((other, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .04,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/programmes/$slug",
							params: { slug: other.slug },
							className: "group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 border-b border-line py-6 md:grid-cols-[minmax(0,26ch)_minmax(0,1fr)_auto]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-display-md text-bone-100 transition-colors duration-200 ease-brand group-hover:text-red-400",
									children: other.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-label hidden text-bone-400 md:block",
									children: other.promise
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									className: "text-bone-400 transition-transform duration-300 ease-brand group-hover:translate-x-1",
									children: "→"
								})
							]
						})
					}) }, other.slug))
				})]
			})
		})
	] });
}
//#endregion
export { ProgrammePage as component };
