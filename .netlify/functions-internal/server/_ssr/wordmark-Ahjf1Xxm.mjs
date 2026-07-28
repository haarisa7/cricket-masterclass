import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/wordmark-Ahjf1Xxm.js
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
/**
* Ball mark — rebuilt as vector from the original raster logo.
* No black keyline (it dies on the ink canvas); seam knocked out in bone.
* Subtle sphere shading + specular highlight for depth; seam weight is tuned
* to stay readable down to 20px.
*/
function LogoMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 64 64",
		role: "img",
		"aria-label": "Masterclass Cricket",
		className: cn("size-8 shrink-0", className),
		fill: "none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
					id: "mc-ball",
					cx: "36%",
					cy: "30%",
					r: "78%",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "0%",
							stopColor: "#e8455c"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "52%",
							stopColor: "#d7263d"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "100%",
							stopColor: "#8e1524"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: "mc-gloss",
					x1: "0",
					y1: "0",
					x2: "0.4",
					y2: "1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: "#ffffff",
						stopOpacity: "0.34"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: "#ffffff",
						stopOpacity: "0"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("clipPath", {
					id: "mc-clip",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "32",
						cy: "32",
						r: "30"
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "32",
				cy: "32",
				r: "30",
				fill: "url(#mc-ball)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				clipPath: "url(#mc-clip)",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
						cx: "24",
						cy: "17",
						rx: "19",
						ry: "11",
						transform: "rotate(-24 24 17)",
						fill: "url(#mc-gloss)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M47.2 6.8C40.8 10.2 34.2 14.6 28.4 20.8C23.2 26.6 17.2 34.8 13.6 43C11.6 47.6 10.6 50 10.6 53.2",
						stroke: "#F7F5F2",
						strokeWidth: "3",
						strokeLinecap: "round"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M56.8 16.4C50.9 19.9 45.2 23.9 40.2 28.6C35.4 33.2 30.9 38.9 27.6 45.6C25.4 50.4 23.2 54.4 22.2 60.4",
						stroke: "#F7F5F2",
						strokeWidth: "3",
						strokeLinecap: "round"
					})
				]
			})
		]
	});
}
/** Horizontal lockup: ball left, MASTERCLASS / CRICKET right. */
function Logo({ className, tone = "dark", markClassName }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-2.5", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, { className: cn("size-9", markClassName) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex flex-col leading-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("font-display text-[1.05em] font-black leading-[0.9] tracking-[-0.03em]", tone === "dark" ? "text-gold-400" : "text-ink-950"),
				children: "MASTERCLASS"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("font-display text-[0.92em] font-black leading-[0.95] tracking-[0.02em]", tone === "dark" ? "text-bone-50" : "text-ink-950"),
				children: "CRICKET"
			})]
		})]
	});
}
//#endregion
export { LogoMark as n, cn as r, Logo as t };
