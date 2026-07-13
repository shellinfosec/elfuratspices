import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Image } from "./image-CP_LfseE.mjs";
import { O as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProductCard-Q47kmRh0.js
var import_jsx_runtime = require_jsx_runtime();
function ProductCard({ p }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/product/$slug",
		params: { slug: p.slug },
		className: "card-lift group block overflow-hidden rounded-3xl bg-surface shadow-float",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[4/5] overflow-hidden bg-[#f2ece4]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
				src: p.image,
				alt: p.name,
				loading: "lazy",
				className: "ease-elfurat transition-transform duration-[900ms] group-hover:scale-[1.06]"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-3 left-3 rounded-full bg-white/85 backdrop-blur px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-clove",
				children: p.form
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-5 flex items-start justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-lg font-semibold text-clove truncate",
					children: p.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-clove/60 mt-1 truncate",
					children: p.origin
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-full bg-clove text-white ease-elfurat transition-all duration-500 group-hover:bg-terracotta group-hover:rotate-45",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })
			})]
		})]
	});
}
//#endregion
export { ProductCard as t };
