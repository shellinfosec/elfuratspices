import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Reveal } from "./Reveal-CJqfK1fL.mjs";
import { A as ArrowLeft } from "../_libs/lucide-react.mjs";
import { a as productsByCategory, t as CATEGORIES } from "./products-CJXz9X5J.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as ProductCard } from "./ProductCard-BW_abbz_.mjs";
import { t as Route } from "./products._category-B1UDZcx_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products._category-CdXFHFH6.js
var import_jsx_runtime = require_jsx_runtime();
function CategoryPage() {
	const { c } = Route.useLoaderData();
	const items = productsByCategory(c.slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative pt-32 pb-16 lg:pt-40 overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: c.hero,
					alt: c.name,
					className: "ken-burns h-full w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-clove/70 via-clove/60 to-background" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-6 lg:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/products",
						className: "inline-flex items-center gap-2 text-white/80 text-sm hover:text-white",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " All products"]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-6 h-fluid-hero font-display font-bold text-white max-w-4xl",
							children: c.name
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 160,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-2xl text-lg text-white/85 leading-relaxed",
							children: c.description
						})
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-6 lg:px-10 py-14",
			children: items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-clove/70",
				children: "Products coming soon."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5",
				children: items.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 40,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { p })
				}, p.slug))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-6 lg:px-10 py-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "h-fluid-section font-display font-bold mb-8",
				children: "Other categories"
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 md:grid-cols-4 gap-4",
				children: CATEGORIES.filter((x) => x.slug !== c.slug).map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/products/$category",
					params: { category: x.slug },
					className: "card-lift group relative overflow-hidden rounded-3xl aspect-[4/5]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: x.hero,
							alt: x.name,
							loading: "lazy",
							className: "h-full w-full object-cover ease-elfurat transition-transform duration-[900ms] group-hover:scale-110"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-clove/95 via-clove/30 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute bottom-0 p-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-lg font-semibold text-white",
								children: x.name
							})
						})
					]
				}, x.slug))
			})]
		})
	] });
}
//#endregion
export { CategoryPage as component };
