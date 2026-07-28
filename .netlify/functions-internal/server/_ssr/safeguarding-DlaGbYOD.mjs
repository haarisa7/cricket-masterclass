import { s as safeguarding } from "./pages-DXtNne_f.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { c as Reveal, h as site, t as ActionAnchor, y as whatsappFor } from "./whatsapp-float-CCew7q8s.mjs";
import { n as PageShell, t as PageHero } from "./page-shell-BXfE-1IR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/safeguarding-DlaGbYOD.js
var import_jsx_runtime = require_jsx_runtime();
function Safeguarding() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			index: "01",
			label: "Policy",
			lines: ["Safeguarding", "Policy"],
			intro: safeguarding.intro,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-label text-bone-600",
				children: ["Last reviewed ", safeguarding.updated]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			"aria-labelledby": "policy-heading",
			className: "section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "policy-heading",
					className: "sr-only",
					children: "Policy sections"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-line",
					children: safeguarding.sections.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "grid items-start gap-6 border-b border-line py-10 md:grid-cols-[4rem_minmax(0,1fr)_minmax(0,1.3fr)] md:gap-10 md:py-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-label text-red-400 tnum",
								children: section.index
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-[clamp(1.25rem,2vw,1.625rem)] font-bold leading-tight text-bone-100",
								children: section.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-body text-bone-400",
								children: section.body
							})
						]
					}) }, section.index))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			"aria-labelledby": "report-heading",
			className: "border-t border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell section-y flex flex-col items-start gap-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "report-heading",
						className: "text-display-md max-w-[18ch] text-bone-100",
						children: "Worried about a child? Tell us today."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-body-lg text-bone-400",
						children: [
							"If a child is in immediate danger, call 999. Otherwise reach the head coach directly on",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `tel:${site.phone.replace(/\s/g, "")}`,
								className: "link-wipe",
								children: site.phone
							}),
							" ",
							"or by email at",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${site.email}`,
								className: "link-wipe",
								children: site.email
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionAnchor, {
						href: whatsappFor("a safeguarding concern"),
						target: "_blank",
						rel: "noreferrer",
						children: "Report a Concern"
					})
				]
			})
		})
	] });
}
//#endregion
export { Safeguarding as component };
