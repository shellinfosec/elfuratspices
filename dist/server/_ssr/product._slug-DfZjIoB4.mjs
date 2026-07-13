import { o as __toESM } from "../_runtime.mjs";
import { a as LOGOS, o as waUrl, t as BRAND } from "./brand-DOimiTyY.mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Image } from "./image-B6cf7Hyo.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as Reveal } from "./Reveal-CJqfK1fL.mjs";
import { i as motion } from "../_libs/framer-motion.mjs";
import { A as ArrowLeft, T as BadgeCheck, _ as FlaskConical, a as Ship, l as Phone, o as ShieldCheck, r as Sprout, u as Package, y as CircleCheck } from "../_libs/lucide-react.mjs";
import { a as productsByCategory } from "./products-3KWk4KYT.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./product._slug-Bsqka5OX.mjs";
import { t as ProductCard } from "./ProductCard-D5f07Igs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._slug-DfZjIoB4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ZoomImage({ src, alt, zoom = 2.2, className = "" }) {
	const ref = (0, import_react.useRef)(null);
	const [pos, setPos] = (0, import_react.useState)({
		x: 50,
		y: 50
	});
	const [active, setActive] = (0, import_react.useState)(false);
	const onMove = (e) => {
		const r = ref.current?.getBoundingClientRect();
		if (!r) return;
		const x = (e.clientX - r.left) / r.width * 100;
		const y = (e.clientY - r.top) / r.height * 100;
		setPos({
			x,
			y
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		onMouseEnter: () => setActive(true),
		onMouseLeave: () => setActive(false),
		onMouseMove: onMove,
		className: `relative overflow-hidden rounded-3xl bg-[#f2ece4] cursor-zoom-in ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
			src,
			alt,
			loading: "eager",
			style: {
				transformOrigin: `${pos.x}% ${pos.y}%`,
				transform: active ? `scale(${zoom})` : "scale(1)"
			},
			className: "absolute inset-0 block h-full w-full object-cover transition-transform duration-500 ease-out"
		}), active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute top-4 right-4 rounded-full bg-white/85 backdrop-blur px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-clove shadow-float",
			children: "Move to zoom"
		})]
	});
}
var STEPS = [
	{
		icon: Sprout,
		title: "Sourcing",
		copy: "Farmer collective selection & seasonal lot booking."
	},
	{
		icon: ShieldCheck,
		title: "Inbound QC",
		copy: "Sortex, de-stoning, magnetic & metal separation."
	},
	{
		icon: FlaskConical,
		title: "Lab Test",
		copy: "Moisture, ASTA color, oil %, aflatoxin & pesticide residues."
	},
	{
		icon: Package,
		title: "Packaging",
		copy: "Lot-coded, nitrogen-flushed export-grade packaging."
	},
	{
		icon: Ship,
		title: "Logistics",
		copy: "FCL / LCL export with full compliance documentation."
	},
	{
		icon: BadgeCheck,
		title: "Certified Delivery",
		copy: "Certificate of Analysis, phytosanitary & traceability."
	}
];
function QATimeline() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-earth-gradient py-20 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-3xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-semibold uppercase tracking-[0.3em] text-terracotta",
					children: "Quality Assurance"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-4 h-fluid-section font-display font-bold",
					children: [
						"Every lot passes through our",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-spice-gradient italic",
							children: "six-step QA gauntlet."
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden md:block absolute top-8 left-8 right-8 h-px",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						width: "100%",
						height: "2",
						className: "overflow-visible",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
							x1: "0",
							y1: "1",
							x2: "100%",
							y2: "1",
							stroke: "rgba(191,96,64,0.4)",
							strokeWidth: "2",
							strokeDasharray: "2 8"
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 md:grid-cols-6 gap-6",
					children: STEPS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 24
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-60px"
						},
						transition: {
							delay: i * .08,
							duration: .6,
							ease: [
								.16,
								1,
								.3,
								1
							]
						},
						className: "relative flex flex-col items-center text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative z-10 grid h-16 w-16 place-items-center rounded-full bg-white shadow-float border border-terracotta/20",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-6 w-6 text-terracotta" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 font-display text-sm font-semibold text-clove uppercase tracking-wider",
								children: [
									i + 1,
									". ",
									s.title
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs text-clove/60 leading-relaxed",
								children: s.copy
							})
						]
					}, s.title))
				})]
			})]
		})
	});
}
function ProductPage() {
	const { p, cat } = Route.useLoaderData();
	const related = productsByCategory(p.category).filter((x) => x.slug !== p.slug).slice(0, 4);
	const inquiryMsg = `Hello Elfurat Spices, I'd like to inquire about ${p.name} (${cat.name}). Please share export pricing, MOQ, and packaging options.`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "pt-32 lg:pt-40",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6 lg:px-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/products/$category",
					params: { category: cat.slug },
					className: "inline-flex items-center gap-2 text-sm text-clove/60 hover:text-terracotta",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }),
						" ",
						cat.name
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-12 lg:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sticky top-32",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoomImage, {
								src: p.image,
								alt: p.name,
								className: "aspect-[4/5] shadow-deep"
							})
						}) })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs font-semibold uppercase tracking-[0.3em] text-terracotta",
									children: [
										cat.name,
										" · ",
										p.form
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-3 h-fluid-display font-display font-bold",
									children: p.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-clove/60 text-sm",
									children: ["Origin: ", p.origin]
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: 100,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 text-lg text-clove/75 leading-relaxed",
									children: p.description
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: 150,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3",
									children: p.highlights.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-2 rounded-2xl bg-surface p-4 shadow-float",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 text-bayleaf shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm text-clove/80",
											children: h
										})]
									}, h))
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: 200,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spec, {
											label: "Form",
											value: p.form
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spec, {
											label: "Shelf Life",
											value: p.shelfLife
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spec, {
											label: "MOQ",
											value: p.moq
										})
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: 240,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 rounded-3xl bg-surface p-6 shadow-float",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs font-semibold uppercase tracking-[0.3em] text-clove/50 mb-3",
										children: "Available Pack Sizes"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-wrap gap-2",
										children: p.packSizes.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full bg-muted px-4 py-2 text-sm font-medium text-clove",
											children: s
										}, s))
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: 280,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex flex-col sm:flex-row gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: waUrl(inquiryMsg),
										target: "_blank",
										rel: "noopener noreferrer",
										className: "btn-magnetic inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[#25D366] bg-white px-7 py-4 text-sm font-semibold text-[#25D366] transition-all hover:bg-black/5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: LOGOS.whatsapp,
												alt: "WhatsApp",
												className: "h-5 w-5"
											}),
											"Inquire about ",
											p.name,
											" via WhatsApp"
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `tel:${BRAND.phones[0].replace(/\s/g, "")}`,
										className: "inline-flex items-center justify-center gap-2 rounded-full border border-clove/15 bg-white px-7 py-4 text-sm font-semibold text-clove ease-elfurat transition duration-500 hover:bg-clove hover:text-white",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), "Call sales"]
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: 320,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex items-start gap-3 text-xs text-clove/60",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 shrink-0 mt-0.5 text-bayleaf" }), "Every lot ships with a Certificate of Analysis, phytosanitary documentation, and lot-code traceability."]
								})
							})
						]
					})]
				})]
			})
		}),
		related.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-6 lg:px-10 py-24 mt-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "h-fluid-section font-display font-bold mb-10",
				children: "You may also like"
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 md:grid-cols-4 gap-5",
				children: related.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 60,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { p: r })
				}, r.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QATimeline, {})
	] });
}
function Spec({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl bg-surface p-4 shadow-float",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[10px] font-semibold uppercase tracking-widest text-clove/50",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1 font-display font-semibold text-clove text-sm",
			children: value
		})]
	});
}
//#endregion
export { ProductPage as component };
