import { t as about } from "./pages-DXtNne_f.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as FieldDecor, c as Reveal, l as RevealHeading, t as ActionAnchor, u as RevealImage, y as whatsappFor } from "./whatsapp-float-CCew7q8s.mjs";
import { n as PageShell, t as PageHero } from "./page-shell-BXfE-1IR.mjs";
import { t as elite_academy_default } from "./elite-academy-f4fMDupx.mjs";
import { a as stats } from "./content-PHJcfwq-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-DxmzWoPF.js
var import_jsx_runtime = require_jsx_runtime();
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			index: "01",
			label: "About",
			lines: ["Ten years of", "coaching in Chiswick"],
			intro: about.intro
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			"aria-labelledby": "specialise-heading",
			className: "section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					id: "specialise-heading",
					className: "text-label text-bone-400",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-red-400",
						children: "02"
					}), " / What We Specialise In"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 border-t border-line",
					children: about.pillars.map((pillar) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "grid items-start gap-6 border-b border-line py-10 md:grid-cols-[4rem_minmax(0,1fr)_minmax(0,1.15fr)] md:gap-10 md:py-14",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-label text-red-400 tnum",
								children: pillar.index
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-display-md text-bone-100",
								children: pillar.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-body text-bone-400",
								children: pillar.detail
							})
						]
					}) }, pillar.index))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			"aria-labelledby": "record-heading",
			className: "relative overflow-hidden border-y border-line",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldDecor, { preset: "field" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell relative z-10 section-y",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					id: "record-heading",
					className: "text-label text-bone-400",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-red-400",
						children: "03"
					}), " / The Record"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-12 grid grid-cols-2 border-t border-line lg:grid-cols-4",
					children: stats.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-b border-line py-8 pr-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "font-display text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold leading-none text-bone-100 tnum",
							children: stat.display ?? `${stat.value}${stat.suffix}`
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-label mt-4 text-bone-400",
							children: stat.label
						})]
					}, stat.label))
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			"aria-labelledby": "system-heading",
			className: "grid items-stretch border-b border-line lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealImage, {
				src: elite_academy_default,
				alt: "Coaches and players on a floodlit cricket ground at dusk",
				width: 1600,
				height: 1200,
				className: "min-h-[50svh] lg:min-h-[70svh]"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-center gap-8 px-[var(--gutter)] py-24 lg:py-32",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-label text-red-400",
						children: "04 / The System"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealHeading, {
						as: "h2",
						id: "system-heading",
						className: "text-display-lg max-w-[14ch] text-bone-100",
						lines: ["A complete player", "development system"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-body-lg text-bone-400",
						children: about.closing
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionAnchor, {
							href: whatsappFor("coaching at Masterclass Cricket"),
							target: "_blank",
							rel: "noreferrer",
							children: "Talk to a Coach"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/founder",
							className: "link-wipe text-sm",
							children: ["Meet the founder ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								children: "→"
							})]
						})]
					})
				]
			})]
		})
	] });
}
//#endregion
export { About as component };
