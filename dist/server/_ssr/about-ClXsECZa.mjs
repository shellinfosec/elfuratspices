import { i as HERO_IMAGES, r as CERTS } from "./brand-C151bFRS.mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Image } from "./image-B6cf7Hyo.mjs";
import { t as Reveal } from "./Reveal-CJqfK1fL.mjs";
import { r as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-ClXsECZa.js
var import_jsx_runtime = require_jsx_runtime();
var TIMELINE = [
	{
		year: "Sourcing",
		title: "Farmer collectives across India",
		copy: "We partner with 200+ farmer collectives across Kerala, Gujarat, Rajasthan, Kashmir, and the North-East to secure single-origin lots at peak season.",
		image: HERO_IMAGES.farmSourcing
	},
	{
		year: "Cleaning",
		title: "Sortex + de-stoning + magnetic separation",
		copy: "Every incoming lot passes through gravity separators, sortex color grading, and metal detectors before entering our processing floor.",
		image: HERO_IMAGES.fresh
	},
	{
		year: "Processing",
		title: "Cold-milling to preserve essential oils",
		copy: "Cold-milling stations lock in volatile oil content that hot mills destroy - the difference between a shelf spice and an export-grade spice.",
		image: HERO_IMAGES.processing
	},
	{
		year: "Quality Control",
		title: "In-house lab testing for every lot",
		copy: "Moisture, ASTA color, volatile oil %, aflatoxin, pesticide residues - every lot ships with a full Certificate of Analysis.",
		image: HERO_IMAGES.facility2
	},
	{
		year: "Packaging",
		title: "Export-grade lot-coded packaging",
		copy: "Bulk 25kg PP sacks with inner liners, nitrogen-flushed for oxygen-sensitive powders, and consumer-ready retail SKUs on demand.",
		image: HERO_IMAGES.packaging
	},
	{
		year: "Logistics",
		title: "40+ countries, FCL & LCL ready",
		copy: "Direct partnerships with global freight forwarders; full documentation for APEDA, FSSAI, phytosanitary, and destination-country compliance.",
		image: HERO_IMAGES.export
	}
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pattern-dots absolute inset-0 opacity-40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-6 lg:px-10 grid gap-12 lg:grid-cols-12 items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold uppercase tracking-[0.3em] text-terracotta",
							children: "About Elfurat Spices"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 100,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-4 h-fluid-hero font-display font-bold",
								children: ["Built for ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-spice-gradient italic",
									children: "purity, scale, and trust."
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 200,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-2xl text-lg text-clove/70 leading-relaxed",
								children: "Elfurat Spices is a Delhi-headquartered global exporter of premium Indian FMCG ingredients - from farm-fresh whole spices to master-blended masalas, from Kashmiri saffron to Bihari fox nuts. We operate as a single accountable partner from field to freight, serving retail brands, HORECA groups, and industrial food manufacturers across 40+ countries."
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "lg:col-span-5",
					delay: 150,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative overflow-hidden rounded-3xl aspect-[4/5] shadow-deep",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
							src: HERO_IMAGES.farmSourcing,
							alt: "Farm sourcing",
							priority: true,
							className: "h-full w-full object-cover ken-burns"
						})
					})
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-6 lg:px-10 pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 md:grid-cols-3",
				children: [
					{
						t: "Authentic",
						d: "Single-origin, single-lot traceability. No blending across regions unless a client requests it."
					},
					{
						t: "Certified",
						d: "APEDA, FSSAI, ISO 22000, FDA, and Spice Board of India registered - audit-ready at all times."
					},
					{
						t: "Global",
						d: "Export corridors into the US, UK, EU, GCC, ASEAN and Africa - with local partner networks in each."
					}
				].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl bg-surface p-8 shadow-float card-lift h-full",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-semibold uppercase tracking-[0.3em] text-terracotta",
							children: "Pillar"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-display text-2xl font-semibold text-clove",
							children: p.t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-clove/70 leading-relaxed",
							children: p.d
						})
					]
				}) }, p.t))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative bg-clove text-white py-24 lg:py-32 overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pattern-dots absolute inset-0 opacity-20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-6 lg:px-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-semibold uppercase tracking-[0.3em] text-saffron",
					children: "Our Process"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 h-fluid-display font-display font-bold text-white max-w-3xl",
					children: "Six stages, one accountable partner."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-20 relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden md:block absolute left-1/2 top-8 bottom-8 w-0.5 -translate-x-1/2 border-l-2 border-dashed border-saffron/50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-16 md:space-y-24",
						children: TIMELINE.map((t, i) => {
							const right = i % 2 === 1;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 40
								},
								whileInView: {
									opacity: 1,
									y: 0
								},
								viewport: {
									once: true,
									margin: "-100px"
								},
								transition: {
									duration: .8,
									ease: [
										.16,
										1,
										.3,
										1
									]
								},
								className: "relative grid gap-8 md:grid-cols-12 items-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `md:col-span-5 ${right ? "md:text-right" : ""}`,
										children: right ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-xs font-semibold uppercase tracking-[0.3em] text-saffron",
												children: t.year
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-2 font-display text-2xl md:text-3xl font-semibold text-white",
												children: t.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-3 text-white/70 leading-relaxed",
												children: t.copy
											})
										] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
											whileHover: { scale: 1.02 },
											transition: {
												type: "spring",
												stiffness: 200,
												damping: 20
											},
											className: "relative overflow-hidden rounded-3xl aspect-[4/3] shadow-deep border border-white/10",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
													src: t.image,
													alt: t.title,
													loading: "lazy",
													className: "h-full w-full object-cover ease-elfurat transition-transform duration-[1200ms] hover:scale-110"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-clove/40 to-transparent" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "absolute top-4 left-4 h-10 w-10 grid place-items-center rounded-full bg-saffron text-clove font-display font-bold shadow-float",
													children: i + 1
												})
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "hidden md:flex md:col-span-2 items-center justify-center relative z-10",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
											initial: { scale: 0 },
											whileInView: { scale: 1 },
											viewport: { once: true },
											transition: {
												delay: .3,
												type: "spring",
												stiffness: 200
											},
											className: "h-4 w-4 rounded-full bg-saffron ring-4 ring-clove border-2 border-saffron shadow-[0_0_20px_rgba(255,193,7,0.6)]"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `md:col-span-5 ${!right ? "md:text-left" : ""}`,
										children: !right ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-xs font-semibold uppercase tracking-[0.3em] text-saffron",
												children: t.year
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-2 font-display text-2xl md:text-3xl font-semibold text-white",
												children: t.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-3 text-white/70 leading-relaxed",
												children: t.copy
											})
										] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
											whileHover: { scale: 1.02 },
											transition: {
												type: "spring",
												stiffness: 200,
												damping: 20
											},
											className: "relative overflow-hidden rounded-3xl aspect-[4/3] shadow-deep border border-white/10",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
													src: t.image,
													alt: t.title,
													loading: "lazy",
													className: "h-full w-full object-cover ease-elfurat transition-transform duration-[1200ms] hover:scale-110"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-clove/40 to-transparent" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "absolute top-4 right-4 h-10 w-10 grid place-items-center rounded-full bg-saffron text-clove font-display font-bold shadow-float",
													children: i + 1
												})
											]
										})
									})
								]
							}, t.year);
						})
					})]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs font-semibold uppercase tracking-[0.3em] text-terracotta",
				children: "Our Infrastructure"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 h-fluid-display font-display font-bold max-w-3xl",
				children: "Warehousing, milling, and packing - under one certified roof."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid grid-cols-2 md:grid-cols-4 gap-4",
				children: [
					HERO_IMAGES.warehouse1,
					HERO_IMAGES.warehouse2,
					HERO_IMAGES.warehouse3,
					HERO_IMAGES.facility1,
					HERO_IMAGES.facility2,
					HERO_IMAGES.processing,
					HERO_IMAGES.packaging,
					HERO_IMAGES.export
				].map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative overflow-hidden rounded-3xl aspect-[4/5] shadow-float card-lift",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
						src,
						alt: "Facility",
						loading: "lazy",
						className: "h-full w-full object-cover ease-elfurat transition-transform duration-[1200ms] hover:scale-110"
					})
				}, i))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-earth-gradient py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6 lg:px-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "h-fluid-display font-display font-bold max-w-3xl",
					children: [
						"Compliant with the world's",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-spice-gradient italic",
							children: "strictest food standards."
						})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid grid-cols-2 md:grid-cols-5 gap-5",
					children: CERTS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-3xl bg-white p-8 shadow-float card-lift flex flex-col items-center text-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
							src: c.src,
							alt: c.name,
							className: "h-16 w-auto object-contain"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display font-semibold text-clove",
							children: c.name
						})]
					}) }, c.name))
				})]
			})
		})
	] });
}
//#endregion
export { About as component };
