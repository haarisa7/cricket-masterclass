import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as FieldDecor, d as SmoothScroll, f as WhatsAppFloat, i as CustomCursor, l as RevealHeading, o as Footer, s as Navigation } from "./whatsapp-float-CCew7q8s.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-shell-BXfE-1IR.js
var import_jsx_runtime = require_jsx_runtime();
/**
* Every interior page wears the same chrome: nav, smooth scroll, custom
* cursor, footer, mobile booking bar and the WhatsApp float. Keeping it in one
* component means a change to the chrome is a one-file change, not seven.
*/
function PageShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmoothScroll, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomCursor, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppFloat, {})
	] });
}
/**
* Interior page masthead. Deliberately quieter than the homepage hero — no
* video, no primary CTA — so the page's own single CTA further down keeps its
* weight.
*/
function PageHero({ index, label, lines, intro, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden border-b border-line pb-24 pt-40 md:pt-48",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldDecor, { preset: "quiet" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell relative z-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-label text-bone-400",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-red-400",
							children: index
						}),
						" / ",
						label
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealHeading, {
					as: "h1",
					className: "text-display-xl mt-8 max-w-[14ch] text-bone-100",
					lines
				}),
				intro && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-body-lg mt-8 text-bone-400",
					children: intro
				}),
				children && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10",
					children
				})
			]
		})]
	});
}
//#endregion
export { PageShell as n, PageHero as t };
