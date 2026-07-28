import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as FieldDecor, g as socials, h as site, l as RevealHeading, p as WhatsAppIcon, r as BOOKING, t as ActionAnchor, y as whatsappFor } from "./whatsapp-float-CCew7q8s.mjs";
import { n as PageShell } from "./page-shell-BXfE-1IR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-vo6KD00f.js
var import_jsx_runtime = require_jsx_runtime();
var MAP_QUERY = encodeURIComponent(site.address);
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden border-b border-line",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldDecor, { preset: "quiet" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell relative z-10 pb-24 pt-40 md:pt-48",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-label text-bone-400",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-red-400",
						children: "01"
					}), " / Contact"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealHeading, {
					as: "h1",
					className: "text-display-xl mt-8 max-w-[13ch] text-bone-100",
					lines: ["Message us.", "We answer fast."]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-body-lg mt-8 text-bone-400",
					children: "WhatsApp is the quickest way to reach the coaching team — tell us the player’s age, club and what you want to work on, and we’ll come back with the right programme."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex flex-wrap items-center gap-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ActionAnchor, {
						href: whatsappFor("cricket coaching"),
						target: "_blank",
						rel: "noreferrer",
						className: "gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-5" }), "Message on WhatsApp"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: BOOKING.camps,
						target: "_blank",
						rel: "noreferrer",
						className: "link-wipe text-sm",
						children: ["Book a holiday camp online ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": "true",
							children: "→"
						})]
					})]
				})
			]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-labelledby": "details-heading",
		className: "section-y",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				id: "details-heading",
				className: "text-label text-bone-400",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-red-400",
					children: "02"
				}), " / Details"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-12 border-t border-line pt-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("address", {
					className: "flex flex-col gap-8 not-italic",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-label text-red-400",
							children: "Ground"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-body-lg mt-3 text-bone-100",
							children: site.address
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-label text-red-400",
							children: "Phone"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `tel:${site.phone.replace(/\s/g, "")}`,
							className: "link-wipe mt-3 text-base",
							children: site.phone
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-label text-red-400",
							children: "Email"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${site.email}`,
							className: "link-wipe mt-3 text-base",
							children: site.email
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-label text-red-400",
							children: "Hours"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-body mt-3 text-bone-100",
							children: site.hours
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-label text-red-400",
							children: "Follow"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 flex flex-wrap gap-x-6 gap-y-2",
							children: socials.map((social) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: social.href,
								target: "_blank",
								rel: "noreferrer",
								className: "link-wipe text-sm",
								children: social.platform
							}) }, social.platform))
						})] })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "min-h-[22rem] overflow-hidden border border-line bg-ink-900 lg:min-h-[30rem]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: "Map to Kings House Sports Grounds, Chiswick",
						src: `https://www.google.com/maps?q=${MAP_QUERY}&output=embed`,
						loading: "lazy",
						referrerPolicy: "no-referrer-when-downgrade",
						className: "size-full border-0 grayscale-[0.6] contrast-125",
						allowFullScreen: true
					})
				})]
			})]
		})
	})] });
}
//#endregion
export { Contact as component };
