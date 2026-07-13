import { o as waUrl, t as BRAND } from "./brand-C151bFRS.mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Reveal } from "./Reveal-CJqfK1fL.mjs";
import { f as MessageCircle, h as Mail, l as Phone, m as MapPin } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-DU1_ntOa.js
var import_jsx_runtime = require_jsx_runtime();
function Contact() {
	const mapQuery = encodeURIComponent(BRAND.address);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative pt-32 pb-16 lg:pt-40 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pattern-dots absolute inset-0 opacity-40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative mx-auto max-w-7xl px-6 lg:px-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-semibold uppercase tracking-[0.3em] text-terracotta",
					children: "Get in touch"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-4 h-fluid-hero font-display font-bold max-w-4xl",
					children: ["Let's start a ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-spice-gradient italic",
						children: "conversation."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-2xl text-lg text-clove/70 leading-relaxed",
					children: "Sales, sampling, private label, or partnership - reach the Elfurat team directly. Average response time: under 4 business hours."
				})
			] })
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-7xl px-6 lg:px-10 pb-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 md:grid-cols-3",
			children: [
				{
					icon: Phone,
					label: "Call us",
					lines: BRAND.phones.map((p) => ({
						text: p,
						href: `tel:${p.replace(/\s/g, "")}`
					}))
				},
				{
					icon: Mail,
					label: "Email us",
					lines: BRAND.emails.map((e) => ({
						text: e,
						href: `mailto:${e}`
					}))
				},
				{
					icon: MessageCircle,
					label: "WhatsApp",
					lines: [{
						text: "Chat with sales",
						href: waUrl("Hello Elfurat Spices, I'd like to get in touch.")
					}]
				}
			].map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card-lift rounded-3xl bg-surface p-8 shadow-float h-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-12 w-12 rounded-2xl bg-terracotta/10 text-terracotta grid place-items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card.icon, { className: "h-6 w-6" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 text-xs font-semibold uppercase tracking-widest text-clove/50",
						children: card.label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 space-y-1",
						children: card.lines.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: l.href,
							target: l.href.startsWith("http") ? "_blank" : void 0,
							rel: "noopener noreferrer",
							className: "block font-display text-lg font-semibold text-clove hover:text-terracotta ease-elfurat transition duration-500 break-all",
							children: l.text
						}, l.text))
					})
				]
			}) }, card.label))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 grid gap-5 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "lg:col-span-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl bg-clove text-white p-8 shadow-float h-full",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-8 w-8 text-saffron" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 text-xs font-semibold uppercase tracking-widest text-saffron",
							children: "Headquarters"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 font-display text-2xl font-semibold text-white",
							children: "Elfurat Spices, New Delhi"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-white/80 leading-relaxed",
							children: BRAND.address
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `https://www.google.com/maps/search/?api=1&query=${mapQuery}`,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white hover:text-clove ease-elfurat transition duration-500",
							children: "Open in Google Maps"
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "lg:col-span-7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-3xl overflow-hidden shadow-float h-[420px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: "Elfurat Spices HQ",
						src: `https://www.google.com/maps?q=${mapQuery}&output=embed`,
						className: "h-full w-full border-0",
						loading: "lazy",
						referrerPolicy: "no-referrer-when-downgrade"
					})
				})
			})]
		})]
	})] });
}
//#endregion
export { Contact as component };
