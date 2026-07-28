import { o as __toESM } from "../_runtime.mjs";
import { t as coach_uzi_default } from "./coach-uzi-CHxlO4i2.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as cn } from "./wordmark-Ahjf1Xxm.mjs";
import { n as useTransform, r as useScroll } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { _ as tickerItems, a as FieldDecor, c as Reveal, d as SmoothScroll, f as WhatsAppFloat, g as socials, i as CustomCursor, l as RevealHeading, m as partners, n as ActionLink, o as Footer, r as BOOKING, s as Navigation, t as ActionAnchor, u as RevealImage, v as usePrefersReducedMotion, y as whatsappFor } from "./whatsapp-float-CCew7q8s.mjs";
import { n as secondaryServices, t as coreServices } from "./services-C5fQ_dqp.mjs";
import { t as elite_academy_default } from "./elite-academy-f4fMDupx.mjs";
import { a as stats, i as reels, n as manifesto, r as methodSteps, t as eliteAcademy } from "./content-PHJcfwq-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BW5mKb-b.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var routes = [
	{
		label: "Book a Session",
		note: "1-2-1 and small groups",
		href: whatsappFor("a 1-2-1 or small group session")
	},
	{
		label: "Register for Camps",
		note: "Holiday camps via ClassForKids",
		href: BOOKING.camps
	},
	{
		label: "Message on WhatsApp",
		note: "Questions answered same day",
		href: BOOKING.whatsapp
	}
];
function BookingBand() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-labelledby": "booking-heading",
		className: "bg-red-600",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell flex flex-col gap-12 py-24 lg:flex-row lg:items-end lg:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealHeading, {
				as: "h2",
				id: "booking-heading",
				className: "text-display-lg text-bone-50",
				lines: ["Ready to start?"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-body-lg mt-6 text-bone-50/85",
				children: "Three routes in. Pick the one that matches what you need."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid w-full gap-px bg-bone-50/25 sm:grid-cols-3 lg:max-w-2xl",
				children: routes.map((route) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "bg-red-600",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: route.href,
						target: "_blank",
						rel: "noreferrer",
						className: "flex h-full flex-col justify-between gap-6 p-6 transition-colors duration-200 ease-brand hover:bg-bone-50 hover:text-red-600",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-xl leading-tight",
							children: route.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-label opacity-80",
							children: route.note
						})]
					})
				}, route.label))
			})]
		})
	});
}
function CoreServices() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "coaching",
		"aria-labelledby": "coaching-heading",
		className: "section-y border-t border-line",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "shell",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				id: "coaching-heading",
				className: "text-label text-bone-400",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-red-400",
					children: "02"
				}), " / Start Here"]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 flex flex-col",
			children: coreServices.map((service, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
				className: cn("group border-t border-line", i === coreServices.length - 1 && "border-b"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("shell grid items-center gap-8 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24", i % 2 === 1 && "lg:[&>figure]:order-last"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
						className: "relative aspect-[4/3] overflow-hidden lg:aspect-[4/5]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealImage, {
							src: service.image,
							alt: service.imageAlt,
							width: 1280,
							height: 1600,
							className: "size-full",
							imgClassName: "transition-transform duration-700 ease-brand group-hover:scale-[1.04]"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-label text-bone-400",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-red-400",
										children: service.index
									}),
									" · ",
									service.tier
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-display-md mt-6 text-bone-100",
								children: service.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-body-lg mt-5 text-bone-400",
								children: service.promise
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-8 border-t border-line",
								children: service.bullets.map((bullet) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "text-label border-b border-line py-4 text-bone-100",
									children: bullet
								}, bullet))
							}),
							service.note && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-8 font-display text-2xl leading-tight text-red-500",
								children: service.note
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .05,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-10 flex flex-wrap items-center gap-8",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionAnchor, {
										href: i === 2 ? BOOKING.camps : whatsappFor(service.name),
										target: "_blank",
										rel: "noreferrer",
										children: service.cta.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: service.detailsHref,
										className: "link-wipe text-sm",
										children: ["Full details ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											"aria-hidden": "true",
											children: "→"
										})]
									})]
								})
							})
						]
					})]
				})
			}, service.name))
		})]
	});
}
function EliteAcademy() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "elite",
		"aria-labelledby": "elite-heading",
		className: "grid items-stretch border-y border-line lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealImage, {
			src: elite_academy_default,
			alt: "Coaches and players silhouetted on a floodlit cricket ground at night",
			width: 1600,
			height: 1200,
			className: "min-h-[60svh] lg:min-h-[80svh]"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col justify-center gap-8 px-[var(--gutter)] py-24 lg:py-32",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-label text-red-400",
					children: eliteAcademy.eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealHeading, {
					as: "h2",
					id: "elite-heading",
					className: "text-display-lg max-w-[14ch] text-bone-100",
					lines: ["Masterclass Elite", "Cricket Academy"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-body-lg text-bone-400",
					children: eliteAcademy.copy
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "border-t border-line",
					children: eliteAcademy.points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 border-b border-line py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-label text-bone-100",
							children: point.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "text-label text-bone-400",
							children: point.detail
						})]
					}, point.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionLink, {
					to: eliteAcademy.cta.href,
					children: eliteAcademy.cta.label
				}) })
			]
		})]
	});
}
var hero_nets_batsman_default = "/assets/hero-nets-batsman-BcOQmnPC.jpg";
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative flex min-h-[100svh] flex-col justify-end overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
						className: "size-full object-cover",
						poster: hero_nets_batsman_default,
						autoPlay: true,
						muted: true,
						loop: true,
						playsInline: true,
						preload: "none",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_nets_batsman_default,
						alt: "Cricketer facing a red ball in a dark indoor net",
						width: 1920,
						height: 1280,
						fetchPriority: "high",
						className: "absolute inset-0 -z-10 size-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink-950/55" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "scrim absolute inset-x-0 bottom-0 h-2/3" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 pb-24 pt-32 md:pb-32 md:pt-40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "shell",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-label mb-6 text-bone-400",
							children: "West London · Est. 2015"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealHeading, {
							as: "h1",
							className: "text-display-xl text-bone-100",
							lines: ["FOR EVERY SKILL,", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["WE'VE GOT THE ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-red-500",
								children: "DRILL."
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-body-lg mt-8 text-bone-400",
							children: "Professional cricket coaching for players at every level — from first-ever net to international honours."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionAnchor, {
								href: whatsappFor("cricket coaching"),
								target: "_blank",
								rel: "noreferrer",
								children: "Book a Session"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionLink, {
								to: "/programmes/one-to-one",
								variant: "secondary",
								children: "Explore Coaching"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute bottom-28 right-[var(--gutter)] z-10 hidden flex-col items-center gap-4 md:flex",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-label [writing-mode:vertical-rl] text-bone-400",
					children: "Scroll"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "scroll-line block h-16 w-px bg-bone-400" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 flex h-10 items-center overflow-hidden bg-red-500",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "marquee-track text-label text-bone-50",
					children: [0, 1].map((copy) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex shrink-0",
						children: tickerItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "px-8",
							children: item
						}, item))
					}, copy))
				})
			})
		]
	});
}
function Manifesto() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "approach",
		"aria-labelledby": "approach-heading",
		className: "section-y",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell grid-12 gap-y-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-label col-span-12 text-bone-400 lg:col-span-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-red-400",
							children: manifesto.index
						}),
						" / ",
						manifesto.label
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "col-span-12 lg:col-span-8 lg:col-start-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealHeading, {
							as: "blockquote",
							id: "approach-heading",
							className: "text-display-lg text-bone-100",
							lines: [
								"An accredited certificate",
								"doesn't make a top-level coach.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-red-500",
									children: "Knowledge, experience"
								}), " and insight do."] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .1,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-label mt-8 text-bone-400",
								children: ["— ", manifesto.attribution]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-16 grid gap-8 md:grid-cols-2",
							children: manifesto.columns.map((column, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .05 * i,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-body text-bone-400",
									children: column
								})
							}, column))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .1,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: manifesto.link.href,
								className: "link-wipe mt-10 text-sm",
								children: [
									manifesto.link.label,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": "true",
										children: "→"
									})
								]
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealImage, {
					src: coach_uzi_default,
					alt: "Head coach Uzi Arif in Masterclass Cricket coaching jacket",
					width: 666,
					height: 1110,
					className: "col-span-12 mt-16 aspect-[4/5] lg:col-span-3 lg:col-start-1 lg:row-start-2 lg:-mt-64",
					imgClassName: "object-top"
				})
			]
		})
	});
}
/**
* Desktop: the section pins and the four steps travel horizontally with scroll.
* Mobile and reduced-motion: a plain vertical stack, fully readable.
*/
function Method() {
	const reduced = usePrefersReducedMotion();
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end end"]
	});
	const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
	const steps = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: methodSteps.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex w-[80vw] shrink-0 flex-col justify-between border-l border-line px-8 py-10 md:w-[46vw] lg:w-[38vw]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display text-[clamp(4rem,9vw,9rem)] leading-none text-red-500 tnum",
			children: step.index
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-display-md text-bone-100",
				children: step.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-body mt-4 text-bone-400",
				children: step.detail
			})]
		})]
	}, step.index)) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "method",
		"aria-labelledby": "method-heading",
		className: "border-t border-line bg-ink-900",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell pt-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				id: "method-heading",
				className: "text-label text-bone-400",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-red-400",
					children: "03"
				}), " / The Method"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-body-lg mt-6 text-bone-100",
				children: "Four steps, every 1-2-1 session, every player."
			})]
		}), reduced ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "shell flex flex-col gap-0 py-16 md:flex-row md:overflow-x-auto",
			children: steps
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "page-x flex overflow-x-auto pb-16 pt-12 md:hidden",
			children: steps
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref,
			className: "relative hidden h-[300vh] md:block",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "sticky top-0 flex h-[100svh] items-center overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					style: { x },
					className: "flex pl-[var(--gutter)]",
					children: steps
				})
			})
		})] })]
	});
}
function Partners() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-labelledby": "partners-heading",
		className: "border-y border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell flex flex-col gap-8 py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "partners-heading",
					className: "text-label text-bone-400",
					children: "Partners"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-5",
					children: partners.map((partner) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "text-label text-bone-400 opacity-70 transition-opacity duration-200 ease-brand hover:opacity-100",
						children: partner
					}, partner))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-body text-bone-400",
						children: "Grounds, clubs and equipment partners across West London."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						className: "link-wipe text-sm",
						children: ["Partner with us ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": "true",
							children: "→"
						})]
					})]
				})
			]
		})
	});
}
/**
* Server-renders the FINAL value, then counts up on entry. It can never
* display "0+" if the animation does not fire.
*/
function CountUp({ value, suffix }) {
	const reduced = usePrefersReducedMotion();
	const ref = (0, import_react.useRef)(null);
	const [shown, setShown] = (0, import_react.useState)(value);
	(0, import_react.useEffect)(() => {
		if (reduced || !ref.current) return;
		const node = ref.current;
		const observer = new IntersectionObserver(([entry]) => {
			if (!entry.isIntersecting) return;
			observer.disconnect();
			const start = performance.now();
			const duration = 1200;
			const tick = (now) => {
				const t = Math.min((now - start) / duration, 1);
				const eased = 1 - Math.pow(1 - t, 3);
				setShown(Math.round(value * eased));
				if (t < 1) requestAnimationFrame(tick);
			};
			requestAnimationFrame(tick);
		}, { threshold: .4 });
		observer.observe(node);
		return () => observer.disconnect();
	}, [reduced, value]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		className: "tnum",
		children: [shown, suffix]
	});
}
function ProofBar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-label": "Track record",
		className: "border-y border-line bg-ink-900",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
			className: "shell grid grid-cols-2 lg:grid-cols-4",
			children: stats.map((stat, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 py-12 " + (i % 2 === 1 ? "border-l border-line pl-6 " : "pr-6 ") + (i > 1 ? "border-t border-line lg:border-t-0 " : "") + (i === 2 ? "lg:border-l lg:pl-6 " : ""),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "text-display-md text-bone-100",
					children: stat.display ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[clamp(1.25rem,2.2vw,2rem)]",
						children: stat.display
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, {
						value: stat.value,
						suffix: stat.suffix
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-label text-bone-400",
					children: stat.label
				})]
			}, stat.label))
		})
	});
}
function SecondaryIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-labelledby": "also-offered",
		className: "section-y",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: "also-offered",
				className: "text-label text-bone-400",
				children: "Also Offered"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-10 border-t border-line",
				children: secondaryServices.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "border-b border-line",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: service.href,
						className: "group grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 py-5 transition-colors duration-200 ease-brand hover:bg-ink-900 md:grid-cols-[minmax(0,22rem)_minmax(0,1fr)_auto] md:items-center md:px-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-body-lg min-w-0 text-bone-100",
								children: service.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-label hidden text-bone-400 md:block",
								children: service.descriptor
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								className: "shrink-0 text-bone-400 transition-transform duration-200 ease-brand group-hover:translate-x-1 group-hover:text-red-400",
								children: "→"
							})
						]
					})
				}, service.name))
			})]
		})
	});
}
/** Respect the user's data-saver setting — never pull 10MB+ behind their back. */
function prefersLessData() {
	if (typeof navigator === "undefined") return false;
	const connection = navigator.connection;
	if (!connection) return false;
	return Boolean(connection.saveData) || /2g/.test(connection.effectiveType ?? "");
}
/**
* One reel: a 9:16 card that shows its poster instantly and only fetches the
* video once it scrolls into view.
*
* The original site loaded all four <video> elements up front and toggled them
* behind a play button. Here the poster (~140KB) is all that loads on first
* paint; the video (`preload="none"`, no `src` until observed) is fetched only
* when the card is genuinely on screen, and paused the moment it leaves so
* offscreen cards never decode frames.
*/
function ReelCard({ reel, index }) {
	const reduced = usePrefersReducedMotion();
	const ref = (0, import_react.useRef)(null);
	const videoRef = (0, import_react.useRef)(null);
	const [load, setLoad] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (reduced || prefersLessData()) return;
		const el = ref.current;
		if (!el) return;
		const observer = new IntersectionObserver(([entry]) => {
			const video = videoRef.current;
			if (entry.isIntersecting) {
				setLoad(true);
				video?.play().catch(() => {});
			} else video?.pause();
		}, { threshold: .4 });
		observer.observe(el);
		return () => observer.disconnect();
	}, [reduced]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		ref,
		href: reel.href,
		target: "_blank",
		rel: "noreferrer",
		"aria-label": `${reel.caption} — ${reel.views} views. Watch on Instagram`,
		className: "group relative block aspect-[9/16] overflow-hidden bg-ink-800",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: reel.poster,
				alt: "",
				width: 720,
				height: 1280,
				loading: index < 2 ? "eager" : "lazy",
				decoding: "async",
				className: "absolute inset-0 size-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				ref: videoRef,
				src: load ? reel.src : void 0,
				poster: reel.poster,
				muted: true,
				loop: true,
				playsInline: true,
				preload: "none",
				tabIndex: -1,
				"aria-hidden": "true",
				className: "absolute inset-0 size-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "scrim pointer-events-none absolute inset-x-0 bottom-0 h-1/2" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute inset-0 bg-red-600/0 transition-colors duration-400 ease-brand group-hover:bg-red-600/20" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-[clamp(1.5rem,3vw,2.5rem)] font-extrabold leading-none text-bone-50 tnum",
					children: reel.views
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-label text-bone-50/80",
					children: "Views"
				})]
			})
		]
	});
}
function SocialProof() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"aria-labelledby": "social-heading",
		className: "section-y relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldDecor, { preset: "field" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell relative z-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-[minmax(0,1fr)_auto] items-end gap-6 sm:flex sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-label text-bone-400",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-red-400",
								children: "05"
							}), " / Reels"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "social-heading",
							className: "text-display-md mt-6 text-bone-100",
							children: "Check out our social media"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: socials[0].href,
						target: "_blank",
						rel: "noreferrer",
						className: "link-wipe shrink-0 text-sm",
						children: ["Follow on Instagram ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": "true",
							children: "→"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4",
					children: reels.map((reel, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReelCard, {
						reel,
						index: i
					}) }, reel.caption))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-12 grid grid-cols-2 border-t border-line sm:grid-cols-3 lg:grid-cols-5",
					children: socials.map((social) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-b border-line py-5 pr-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-label text-bone-400",
							children: social.platform
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-2 font-mono text-lg text-bone-100 tnum",
							children: social.followers
						})]
					}, social.platform))
				})
			]
		})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmoothScroll, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomCursor, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProofBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Manifesto, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoreServices, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SecondaryIndex, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Method, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EliteAcademy, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialProof, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Partners, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingBand, {})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppFloat, {})
	] });
}
//#endregion
export { Home as component };
