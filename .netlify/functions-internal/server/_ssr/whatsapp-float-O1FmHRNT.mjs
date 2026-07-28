import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { r as cn, t as Logo } from "./wordmark-Ahjf1Xxm.mjs";
import { a as AnimatePresence, t as useInView } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/whatsapp-float-O1FmHRNT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Brand glyphs for the footer social row. Single-path each, drawn on a 24
* viewBox and filled with `currentColor`, so colour and size are the caller's
* decision and nothing here needs a second network request.
*/
var PATHS = {
	Instagram: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.15-3.23 1.66-4.77 4.92-4.92C8.42 2.17 8.8 2.16 12 2.16Zm0-2.16C8.74 0 8.33.01 7.05.07 2.69.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95C23.73 2.7 21.31.27 16.95.07 15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z" }),
	TikTok: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 1 1-1.79-2.46V9.79a5.77 5.77 0 1 0 5.05 5.72V9.01a7.35 7.35 0 0 0 4.29 1.38V7.3a4.29 4.29 0 0 1-3.4-1.48Z" }),
	YouTube: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.08 0 12 0 12s0 3.92.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.92 24 12 24 12s0-3.92-.5-5.81ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z" }),
	Facebook: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.96h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.09 24 18.1 24 12.07Z" }),
	LinkedIn: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" })
};
function SocialIcon({ platform, className }) {
	const path = PATHS[platform];
	if (!path) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		className,
		fill: "currentColor",
		"aria-hidden": "true",
		children: path
	});
}
/** Live WhatsApp business line. Digits only — wa.me rejects spaces and `+`. */
var WHATSAPP_NUMBER = "447961692226";
/**
* Booking routes.
*  camps    — the only third-party checkout (ClassForKids handles holiday camps)
*  whatsapp — every other enquiry goes straight to the coaching line
*/
var BOOKING = {
	camps: "https://masterclass-cricket.classforkids.io/",
	whatsapp: `https://wa.me/${WHATSAPP_NUMBER}`
};
/**
* WhatsApp deep link with the enquiry pre-typed, so Uzi opens a chat that
* already says which programme the player came from.
*/
function whatsappFor(topic) {
	const text = `Hi Masterclass Cricket — I'd like to enquire about ${topic}.`;
	return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
var site = {
	name: "Masterclass Cricket",
	tagline: "For every skill, we've got the drill.",
	positioning: "Professional cricket coaching. Chiswick, West London.",
	address: "Kings House Sports Grounds, Riverside Dr, Chiswick, London W4 2SH",
	phone: "+44 7961 692226",
	email: "info@masterclasscricket.co.uk",
	hours: "Mon–Sun, 8am–8pm",
	founded: "2015"
};
var navLinks = [
	{
		label: "Home",
		href: "/"
	},
	{
		label: "About",
		href: "/about"
	},
	{
		label: "The Founder",
		href: "/founder"
	},
	{
		label: "Elite Academy",
		href: "/elite-academy"
	},
	{
		label: "Coaches",
		href: "/coaches"
	},
	{
		label: "Contact",
		href: "/contact"
	}
];
var tickerItems = [
	"Summer Performance Camps — booking now",
	"2026 Elite Academy — places open",
	"1-2-1 Winter Nets — Thursdays",
	"Online Batting Assessments — 48hr turnaround"
];
var socials = [
	{
		platform: "Instagram",
		handle: "@masterclasscricket",
		followers: "34.2K",
		href: "https://www.instagram.com/masterclasscricket?igsh=MWJ4eDJqaHhkN2x3NQ%3D%3D"
	},
	{
		platform: "TikTok",
		handle: "@masterclasscricket",
		followers: "18.6K",
		href: "https://www.tiktok.com/@masterclasscricket?_t=8lxebZRkhxA&_r=1"
	},
	{
		platform: "YouTube",
		handle: "Masterclass Cricket Coaching",
		followers: "9.1K",
		href: "https://youtube.com/@masterclasscricketcoaching.?si=BJ3Nya11Em2ZIgBE"
	},
	{
		platform: "Facebook",
		handle: "Masterclass Cricket",
		followers: "4.8K",
		href: "https://www.facebook.com/masterclasscricket"
	},
	{
		platform: "LinkedIn",
		handle: "Uzi Arif",
		followers: "1.2K",
		href: "https://www.linkedin.com/in/uzi-arif-946674203/"
	}
];
var partners = [
	"Kings House Sports Grounds",
	"Chiswick & Whitton CC",
	"Middlesex Cricket",
	"Ealing CC",
	"Gunn & Moore"
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-line bg-ink-950",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell grid gap-12 py-24 md:grid-cols-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "text-[17px]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-body text-bone-400",
							children: site.positioning
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "flex flex-wrap gap-3",
							children: socials.map((social) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: social.href,
								target: "_blank",
								rel: "noreferrer",
								"aria-label": `${site.name} on ${social.platform}`,
								className: "flex size-10 items-center justify-center border border-line text-bone-400 transition-colors duration-200 ease-brand hover:border-red-500 hover:text-bone-100",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialIcon, {
									platform: social.platform,
									className: "size-4"
								})
							}) }, social.platform))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					"aria-label": "Footer",
					className: "flex flex-col gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-label text-bone-400",
						children: "Explore"
					}), navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: link.href,
						className: "link-wipe text-sm",
						children: link.label
					}, link.href))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("address", {
					className: "flex flex-col gap-3 not-italic",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-label text-bone-400",
							children: "Contact"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-bone-100",
							children: site.address
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `tel:${site.phone.replace(/\s/g, "")}`,
							className: "link-wipe text-sm",
							children: site.phone
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${site.email}`,
							className: "link-wipe text-sm",
							children: site.email
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-label text-bone-400",
							children: site.hours
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-label text-bone-400",
							children: "Follow"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-bone-100",
							children: "New drills every week across every channel."
						}),
						socials.map((social) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: social.href,
							target: "_blank",
							rel: "noreferrer",
							className: "link-wipe text-sm",
							children: social.platform
						}, social.platform))
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell flex flex-wrap items-center justify-between gap-4 border-t border-line py-6 pb-24 lg:pb-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-label text-bone-400",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" ",
						site.name
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/safeguarding",
					className: "link-wipe text-label",
					children: "Safeguarding Policy"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-label text-bone-600",
					children: "Designed & built in London"
				})
			]
		})]
	});
}
/**
* Three-tier CTA system. Exactly one `primary` should be visible per viewport.
*  primary   — filled red-600, the only filled action in a viewport
*  secondary — hairline ghost, same height as primary
*  tertiary  — quiet text link with a wiping red underline ("Full details →")
*/
var actionVariants = cva("inline-flex items-center justify-center gap-3 font-body transition-colors duration-200 ease-brand disabled:pointer-events-none disabled:text-bone-600", {
	variants: {
		variant: {
			primary: "h-[52px] md:h-14 rounded-hard bg-red-600 px-6 text-base font-medium text-bone-50 hover:bg-red-500",
			secondary: "h-[52px] md:h-14 rounded-hard border border-line-str px-6 text-base font-medium text-bone-100 hover:border-bone-100",
			tertiary: "link-wipe text-sm"
		},
		block: {
			true: "w-full",
			false: ""
		}
	},
	defaultVariants: {
		variant: "primary",
		block: false
	}
});
function ActionLink({ to, variant, block, className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		className: cn(actionVariants({
			variant,
			block
		}), className),
		...props
	});
}
function ActionAnchor({ variant, block, className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		className: cn(actionVariants({
			variant,
			block
		}), className),
		...props
	});
}
var EASE$1 = [
	.22,
	1,
	.36,
	1
];
function Navigation() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 80);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-colors duration-400 ease-brand", scrolled && !open ? "border-b border-line bg-ink-950/80 backdrop-blur-xl" : "border-b border-transparent bg-transparent"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell grid grid-cols-[auto_1fr_auto] items-center gap-6 py-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					"aria-label": "Masterclass Cricket — home",
					className: "text-bone-100",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "text-[15px]" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Primary",
					className: "hidden justify-center gap-8 lg:flex",
					children: navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: link.href,
						className: "link-wipe text-label",
						activeProps: { className: "text-bone-100" },
						children: link.label
					}, link.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 justify-self-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionAnchor, {
						href: whatsappFor("cricket coaching"),
						target: "_blank",
						rel: "noreferrer",
						className: "h-11! px-5! text-sm! md:h-11!",
						children: "Book Now"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setOpen((v) => !v),
						"aria-expanded": open,
						"aria-controls": "mobile-menu",
						"aria-label": open ? "Close menu" : "Open menu",
						className: "flex size-11 items-center justify-center border border-line-str text-bone-100 lg:hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative block h-3 w-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("absolute left-0 h-px w-full bg-current transition-transform duration-200 ease-brand", open ? "top-1/2 rotate-45" : "top-0") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("absolute left-0 h-px w-full bg-current transition-transform duration-200 ease-brand", open ? "top-1/2 -rotate-45" : "bottom-0") })]
						})
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			id: "mobile-menu",
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			transition: {
				duration: .3,
				ease: EASE$1
			},
			className: "fixed inset-0 top-0 z-40 flex h-[100svh] flex-col justify-between bg-ink-950 pb-24 pt-28 lg:hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				"aria-label": "Mobile",
				className: "shell flex flex-col gap-4",
				children: navLinks.map((link, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						y: 24,
						opacity: 0
					},
					animate: {
						y: 0,
						opacity: 1
					},
					transition: {
						duration: .4,
						delay: .08 + i * .05,
						ease: EASE$1
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: link.href,
						onClick: () => setOpen(false),
						className: "text-display-md block text-bone-100",
						children: link.label
					})
				}, link.href))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `tel:${site.phone.replace(/\s/g, "")}`,
						className: "text-label text-bone-400",
						children: site.phone
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `mailto:${site.email}`,
						className: "text-label text-bone-400",
						children: site.email
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 flex flex-wrap gap-3",
						children: socials.map((social) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: social.href,
							target: "_blank",
							rel: "noreferrer",
							onClick: () => setOpen(false),
							"aria-label": `${site.name} on ${social.platform}`,
							className: "flex size-11 items-center justify-center border border-line text-bone-400 transition-colors duration-200 ease-brand hover:border-red-500 hover:text-bone-100",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialIcon, {
								platform: social.platform,
								className: "size-4"
							})
						}) }, social.platform))
					})
				]
			})]
		}) })]
	});
}
/** True when the user has asked the OS to reduce motion. SSR-safe (false first paint). */
function usePrefersReducedMotion() {
	const [reduced, setReduced] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const query = window.matchMedia("(prefers-reduced-motion: reduce)");
		setReduced(query.matches);
		const onChange = (event) => setReduced(event.matches);
		query.addEventListener("change", onChange);
		return () => query.removeEventListener("change", onChange);
	}, []);
	return reduced;
}
/** Dot cursor that swells to a ring over interactive elements. Fine pointers only. */
function CustomCursor() {
	const reduced = usePrefersReducedMotion();
	const [enabled, setEnabled] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)(false);
	const [pos, setPos] = (0, import_react.useState)({
		x: -100,
		y: -100
	});
	(0, import_react.useEffect)(() => {
		if (reduced) return;
		if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
		setEnabled(true);
		const onMove = (event) => {
			setPos({
				x: event.clientX,
				y: event.clientY
			});
			const target = event.target;
			setActive(Boolean(target?.closest("a, button, [role='button'], input, summary")));
		};
		window.addEventListener("mousemove", onMove, { passive: true });
		return () => window.removeEventListener("mousemove", onMove);
	}, [reduced]);
	if (!enabled) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": "true",
		className: "pointer-events-none fixed left-0 top-0 z-[100] hidden md:block",
		style: { transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-200 ease-brand",
			style: {
				width: active ? 34 : 8,
				height: active ? 34 : 8,
				backgroundColor: active ? "transparent" : "var(--color-bone-100)",
				borderColor: active ? "var(--color-bone-100)" : "transparent"
			}
		})
	});
}
var PRESETS = {
	/** Full arrangement — matches the original homepage social section. */
	field: [
		{
			shape: "bat",
			style: {
				top: "6%",
				left: "2%",
				height: "clamp(110px, 18vw, 260px)"
			},
			tilt: -8,
			opacity: .3
		},
		{
			shape: "ball",
			style: {
				bottom: "8%",
				right: "4%",
				height: "clamp(52px, 9vw, 130px)"
			},
			delay: -1.6,
			opacity: .3,
			bounce: true
		},
		{
			shape: "ball",
			style: {
				top: "50%",
				left: "1.5%",
				height: "clamp(30px, 5vw, 66px)"
			},
			delay: -3.2,
			opacity: .2,
			bounce: true
		},
		{
			shape: "bat",
			style: {
				top: "22%",
				right: "2%",
				height: "clamp(74px, 12vw, 160px)"
			},
			tilt: 45,
			delay: -4.5,
			opacity: .2
		}
	],
	/** Two shapes only — for interior pages where copy is the whole point. */
	quiet: [{
		shape: "bat",
		style: {
			top: "12%",
			right: "3%",
			height: "clamp(90px, 14vw, 200px)"
		},
		tilt: 32,
		opacity: .18
	}, {
		shape: "ball",
		style: {
			bottom: "12%",
			left: "3%",
			height: "clamp(34px, 6vw, 78px)"
		},
		delay: -2.4,
		opacity: .18,
		bounce: true
	}]
};
/** Willow blade + taped handle. `currentColor` drives the blade. */
function Bat() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 100 400",
		className: "size-full",
		fill: "none",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "43",
				y: "10",
				width: "14",
				height: "100",
				rx: "7",
				fill: "var(--color-ink-700)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M50 18v88",
				stroke: "currentColor",
				strokeOpacity: "0.4",
				strokeWidth: "14",
				strokeDasharray: "5 4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M43 110c-3 5-13 10-13 15v10h40v-10c0-5-10-10-13-15Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M30 135v215c0 30 20 40 20 40s20-10 20-40V135Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M50 140v248",
				stroke: "var(--color-ink-950)",
				strokeOpacity: "0.35",
				strokeWidth: "2"
			})
		]
	});
}
/** Six-stitch cricket ball. Seam knocked out in bone, like the logo mark. */
function Ball() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 100 100",
		className: "size-full",
		fill: "none",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "50",
				cy: "50",
				r: "45",
				fill: "var(--color-red-500)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				stroke: "var(--color-bone-100)",
				strokeWidth: "2.5",
				strokeLinecap: "round",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M50 5v90" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M50 5c15 15 15 75 0 90" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M50 5c-15 15-15 75 0 90" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "35",
				cy: "35",
				r: "9",
				fill: "var(--color-bone-50)",
				fillOpacity: "0.18"
			})
		]
	});
}
function FieldDecor({ preset = "field", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("decor-layer", className),
		"aria-hidden": "true",
		children: PRESETS[preset].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("decor-item", item.bounce && "decor-item-bounce"),
			style: {
				...item.style,
				opacity: item.opacity,
				aspectRatio: item.shape === "bat" ? "100 / 400" : "1 / 1",
				"--decor-tilt": `${item.tilt ?? 0}deg`,
				"--decor-delay": `${item.delay ?? 0}s`
			},
			children: item.shape === "bat" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bat, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ball, {})
		}, i))
	});
}
var EASE = [
	.22,
	1,
	.36,
	1
];
/** Generic in-view reveal: mask wipe up. */
function Reveal({ children, delay = 0, className }) {
	const reduced = usePrefersReducedMotion();
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		amount: .05
	});
	if (reduced) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className,
		children
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				y: "18%",
				opacity: 0,
				clipPath: "inset(0 0 100% 0)"
			},
			animate: {
				y: inView ? "0%" : "18%",
				opacity: inView ? 1 : 0,
				clipPath: inView ? "inset(0 0 -10% 0)" : "inset(0 0 100% 0)"
			},
			transition: {
				duration: .7,
				delay,
				ease: EASE
			},
			children
		})
	});
}
/**
* Heading revealed line by line under a clip mask. Split by LINE, never by
* character — pass an array of lines.
*/
function RevealHeading({ lines, className, lineClassName, as: Tag = "h2", delay = 0, id }) {
	const reduced = usePrefersReducedMotion();
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		amount: .05
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		className,
		id,
		ref,
		children: lines.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block overflow-hidden pb-[0.08em]",
			children: reduced ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("block", lineClassName),
				children: line
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
				className: cn("block", lineClassName),
				initial: { y: "110%" },
				animate: inView ? { y: "0%" } : { y: "110%" },
				transition: {
					duration: .7,
					delay: delay + i * .06,
					ease: EASE
				},
				children: line
			})
		}, i))
	});
}
/** Image revealed with a clip-path wipe plus a 1.08 → 1 scale. */
function RevealImage({ src, alt, width, height, className, imgClassName, priority = false }) {
	const reduced = usePrefersReducedMotion();
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		amount: .05
	});
	const image = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src,
		alt,
		width,
		height,
		loading: priority ? "eager" : "lazy",
		decoding: priority ? "sync" : "async",
		className: cn("size-full object-cover", imgClassName)
	});
	if (reduced) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("overflow-hidden", className),
		children: image
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: cn("overflow-hidden", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			"data-inview": inView ? "true" : "false",
			className: "size-full",
			initial: {
				clipPath: "inset(0 0 100% 0)",
				opacity: 0
			},
			animate: {
				clipPath: inView ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)",
				opacity: inView ? 1 : 0
			},
			transition: {
				duration: .9,
				ease: EASE
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "size-full",
				initial: { scale: 1.08 },
				animate: { scale: inView ? 1 : 1.08 },
				transition: {
					duration: 1.1,
					ease: EASE
				},
				children: image
			})
		})
	});
}
/** Lenis smooth scroll. Disabled entirely under prefers-reduced-motion. */
function SmoothScroll() {
	const reduced = usePrefersReducedMotion();
	(0, import_react.useEffect)(() => {
		if (reduced) return;
		let raf = 0;
		let lenis = null;
		import("../_libs/lenis.mjs").then((n) => n.t).then(({ default: Lenis }) => {
			lenis = new Lenis({ lerp: .09 });
			const tick = (time) => {
				lenis?.raf(time);
				raf = requestAnimationFrame(tick);
			};
			raf = requestAnimationFrame(tick);
		});
		return () => {
			cancelAnimationFrame(raf);
			lenis?.destroy();
		};
	}, [reduced]);
	return null;
}
function WhatsAppIcon({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className,
		fill: "currentColor",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.08-.3-.15-1.26-.47-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.61-.92-2.2-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2a10 10 0 0 0-8.53 15.24L2.05 22.5l5.4-1.4A10 10 0 1 0 12 2Zm0 18.2a8.16 8.16 0 0 1-4.16-1.14l-.3-.18-3.2.83.85-3.12-.2-.32A8.2 8.2 0 1 1 12 20.2Z" })]
	});
}
/**
* Persistent WhatsApp entry point, as on the original site.
*
* Shown at every breakpoint. It is the only fixed control besides the header,
* so there is no thumb-zone collision to design around — the sticky booking
* bar that used to sit here has been removed.
*
* Stays WhatsApp green (#25D366): recolouring the mark breaks WhatsApp's brand
* rules, and a red float would fight the red "Book Now" in the header.
*/
function WhatsAppFloat({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: BOOKING.whatsapp,
		target: "_blank",
		rel: "noreferrer",
		"aria-label": "Chat to Masterclass Cricket on WhatsApp",
		className: cn("group fixed right-[var(--gutter)] z-40 flex size-14 items-center justify-center rounded-full", "bottom-[calc(1.5rem+env(safe-area-inset-bottom))] lg:bottom-8", "bg-[#25D366] text-ink-950 shadow-[0_8px_30px_rgba(0,0,0,0.45)]", "transition-transform duration-300 ease-brand hover:scale-110 focus-visible:scale-110", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-7" })
	});
}
//#endregion
export { tickerItems as _, FieldDecor as a, Reveal as c, SmoothScroll as d, WhatsAppFloat as f, socials as g, site as h, CustomCursor as i, RevealHeading as l, partners as m, ActionLink as n, Footer as o, WhatsAppIcon as p, BOOKING as r, Navigation as s, ActionAnchor as t, RevealImage as u, usePrefersReducedMotion as v, whatsappFor as y };
