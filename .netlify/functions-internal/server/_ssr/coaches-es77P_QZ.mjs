import { n as coaches } from "./pages-xiZvhNjg.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as FieldDecor, c as Reveal, t as ActionAnchor, u as RevealImage, y as whatsappFor } from "./whatsapp-float-O1FmHRNT.mjs";
import { n as PageShell, t as PageHero } from "./page-shell-59S2oWGJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/coaches-es77P_QZ.js
var import_jsx_runtime = require_jsx_runtime();
/** Fallback for coaches without a portrait — initials on the ink canvas. */
function InitialsPlate({ name }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex size-full items-center justify-center bg-ink-900",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display text-[clamp(3rem,7vw,5.5rem)] font-black leading-none tracking-[-0.03em] text-bone-600",
			children: name.split(" ").map((part) => part[0]).join("")
		})
	});
}
function Coaches() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			index: "01",
			label: "Coaches",
			lines: ["The people", "on the grass"],
			intro: "Professional playing experience, ECB qualifications and a decade of working together. Every coach here is DBS-checked and safeguarding trained."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			"aria-labelledby": "team-heading",
			className: "section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					id: "team-heading",
					className: "text-label text-bone-400",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-red-400",
						children: "02"
					}), " / The Team"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-12 grid gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-4",
					children: coaches.map((coach, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .05,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "group flex h-full flex-col",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative aspect-[4/5] overflow-hidden",
									children: [coach.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealImage, {
										src: coach.image,
										alt: coach.imageAlt ?? coach.name,
										width: 800,
										height: 1e3,
										className: "size-full",
										imgClassName: "object-top transition-transform duration-700 ease-brand group-hover:scale-[1.04]"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InitialsPlate, { name: coach.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-label absolute right-3 top-3 bg-ink-950/80 px-2 py-1 text-bone-400 backdrop-blur-sm",
										children: coach.experience
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-display-md mt-6 text-bone-100",
									children: coach.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-label mt-3 text-red-400",
									children: coach.role
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-body mt-4 text-bone-400",
									children: coach.bio
								})
							]
						})
					}) }, coach.name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			"aria-labelledby": "coaches-cta-heading",
			className: "relative overflow-hidden border-y border-line",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldDecor, { preset: "field" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell section-y relative z-10 flex flex-col items-start gap-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "coaches-cta-heading",
						className: "text-display-lg max-w-[16ch] text-bone-100",
						children: "Train with the people who have done it."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-body-lg text-bone-400",
						children: "Tell us the player’s age, club and discipline. We’ll tell you honestly which coach and which programme fits."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionAnchor, {
						href: whatsappFor("which coach and programme would suit my player"),
						target: "_blank",
						rel: "noreferrer",
						children: "Message a Coach"
					})
				]
			})]
		})
	] });
}
//#endregion
export { Coaches as component };
