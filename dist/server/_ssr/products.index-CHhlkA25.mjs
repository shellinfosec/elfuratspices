import { o as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as Reveal } from "./Reveal-CJqfK1fL.mjs";
import { i as AnimatePresence, r as motion } from "../_libs/framer-motion.mjs";
import { c as Search, i as SlidersHorizontal, t as X, w as Check } from "../_libs/lucide-react.mjs";
import { n as PRODUCTS, t as CATEGORIES } from "./products-BSJ78AEw.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as ProductCard } from "./ProductCard-D5f07Igs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products.index-CHhlkA25.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductsIndex() {
	const [cat, setCat] = (0, import_react.useState)("all");
	const [q, setQ] = (0, import_react.useState)("");
	const [drawerOpen, setDrawerOpen] = (0, import_react.useState)(false);
	cat === "all" || CATEGORIES.find((c) => c.slug === cat)?.name;
	const filtered = (0, import_react.useMemo)(() => {
		return PRODUCTS.filter((p) => {
			const okCat = cat === "all" || p.category === cat;
			const okQ = !q.trim() || p.name.toLowerCase().includes(q.toLowerCase()) || p.origin.toLowerCase().includes(q.toLowerCase());
			return okCat && okQ;
		});
	}, [cat, q]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative pt-32 pb-14 lg:pt-40 overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pattern-dots absolute inset-0 opacity-40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto max-w-7xl px-6 lg:px-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold uppercase tracking-[0.3em] text-terracotta",
						children: "Catalogue"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-4 h-fluid-hero font-display font-bold max-w-4xl",
						children: [
							"The complete ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-spice-gradient italic",
								children: "Elfurat"
							}),
							" range."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 max-w-2xl text-lg text-clove/70 leading-relaxed",
						children: [
							PRODUCTS.length,
							" export-grade SKUs across ",
							CATEGORIES.length,
							" categories. Filter by category or search by name to build your inquiry."
						]
					})
				] })
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed left-0 top-[120px] z-40 flex items-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => setDrawerOpen(true),
				className: "group flex items-center rounded-r-2xl bg-clove text-white shadow-float transition-all duration-500 hover:pr-5",
				"aria-label": "Open filters",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-14 w-14 grid place-items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { className: "h-5 w-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "max-w-0 overflow-hidden whitespace-nowrap text-xs font-semibold uppercase tracking-widest opacity-0 transition-all duration-500 group-hover:max-w-xs group-hover:opacity-100",
					children: "Filter"
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: drawerOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			transition: { duration: .3 },
			onClick: () => setDrawerOpen(false),
			className: "fixed inset-0 z-[60] bg-clove/60 backdrop-blur-sm"
		}, "backdrop"), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.aside, {
			initial: { x: "100%" },
			animate: { x: 0 },
			exit: { x: "100%" },
			transition: {
				type: "spring",
				stiffness: 260,
				damping: 32
			},
			className: "fixed right-0 top-0 bottom-0 z-[61] w-full sm:w-[420px] bg-background shadow-deep flex flex-col",
			role: "dialog",
			"aria-label": "Filter products",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4 p-6 border-b border-clove/10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs font-semibold uppercase tracking-[0.3em] text-terracotta",
								children: "Filter"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl font-bold mt-1",
								children: "Search & Categories"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setDrawerOpen(false),
								"aria-label": "Close filter",
								className: "h-10 w-10 grid place-items-center rounded-full bg-white border border-clove/10 hover:bg-muted transition-colors",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative w-full",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-clove/40" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: q,
									onChange: (e) => setQ(e.target.value),
									placeholder: "Search products…",
									className: "w-full rounded-full bg-white border border-clove/10 pl-11 pr-10 py-3 text-sm text-clove placeholder:text-clove/40 focus:outline-none focus:ring-2 focus:ring-terracotta/40"
								}),
								q && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setQ(""),
									className: "absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-clove/50 hover:text-clove",
									"aria-label": "Clear search",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs font-medium text-clove/60",
							children: [
								"Showing ",
								filtered.length,
								" of ",
								PRODUCTS.length,
								" products"
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1 overflow-y-auto p-4 space-y-1",
					children: [{
						slug: "all",
						name: "All Categories",
						count: PRODUCTS.length
					}].concat(CATEGORIES.map((c) => ({
						slug: c.slug,
						name: c.name,
						count: PRODUCTS.filter((p) => p.category === c.slug).length
					}))).map((c) => {
						const active = cat === c.slug;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => {
								setCat(c.slug);
								setDrawerOpen(false);
							},
							className: `w-full flex items-center justify-between rounded-2xl px-4 py-3.5 text-left text-sm font-medium transition-colors duration-300 ${active ? "bg-terracotta text-white" : "hover:bg-white text-clove"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-3",
								children: [active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }), c.name]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `text-xs ${active ? "text-white/80" : "text-clove/50"}`,
								children: c.count
							})]
						}, c.slug);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6 border-t border-clove/10 flex gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							setCat("all");
							setQ("");
						},
						className: "flex-1 rounded-full border border-clove/15 py-3 text-sm font-semibold text-clove hover:bg-white",
						children: "Reset"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setDrawerOpen(false),
						className: "flex-1 rounded-full bg-clove py-3 text-sm font-semibold text-white",
						children: ["Show ", filtered.length]
					})]
				})
			]
		}, "drawer")] }) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-6 lg:px-10 py-14",
			children: filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-3xl bg-white p-16 text-center shadow-float",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-clove/70",
					children: "No products match your search."
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5",
				children: filtered.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: Math.min(i * 30, 300),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { p })
				}, p.slug))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-6 lg:px-10 py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "h-fluid-section font-display font-bold mb-8",
				children: "Browse by category"
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 md:grid-cols-4 gap-4",
				children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/products/$category",
					params: { category: c.slug },
					className: "card-lift group relative overflow-hidden rounded-3xl aspect-[4/5]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: c.hero,
							alt: c.name,
							loading: "lazy",
							className: "h-full w-full object-cover ease-elfurat transition-transform duration-[900ms] group-hover:scale-110"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-clove/95 via-clove/30 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute bottom-0 p-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-xl font-semibold text-white",
								children: c.name
							})
						})
					]
				}, c.slug))
			})]
		})
	] });
}
//#endregion
export { ProductsIndex as component };
