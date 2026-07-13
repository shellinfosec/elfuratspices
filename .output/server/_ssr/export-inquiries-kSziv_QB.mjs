import { o as __toESM } from "../_runtime.mjs";
import { i as HERO_IMAGES, o as waUrl, r as CERTS, t as BRAND } from "./brand-C151bFRS.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Reveal } from "./Reveal-CJqfK1fL.mjs";
import { a as Ship, f as MessageCircle, n as Truck, o as ShieldCheck, s as Send, u as Package, v as Earth } from "../_libs/lucide-react.mjs";
import { t as CATEGORIES } from "./products-CJXz9X5J.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-PcGYqjyA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/export-inquiries-kSziv_QB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ExportPage() {
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		company: "",
		country: "",
		email: "",
		phone: "",
		category: "whole-spices",
		volume: "1 MT",
		details: ""
	});
	const [sent, setSent] = (0, import_react.useState)(false);
	function onSubmit(e) {
		e.preventDefault();
		const cat = CATEGORIES.find((c) => c.slug === form.category)?.name ?? form.category;
		const msg = `Hello Elfurat Spices, export inquiry:\n\nName: ${form.name}\nCompany: ${form.company}\nCountry: ${form.country}\nEmail: ${form.email}\nPhone: ${form.phone}\nCategory: ${cat}\nEstimated Volume: ${form.volume}\n\nDetails:\n${form.details}`;
		window.open(waUrl(msg), "_blank", "noopener,noreferrer");
		setSent(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: HERO_IMAGES.export,
					alt: "Global export",
					className: "h-full w-full object-cover ken-burns"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-clove/50" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto max-w-7xl px-6 lg:px-10 text-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold uppercase tracking-[0.3em] text-saffron",
						children: "B2B · Bulk · Private Label"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-4 h-fluid-hero font-display font-bold max-w-4xl text-white drop-shadow-md",
						children: ["Export inquiries, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-saffron",
							children: "globally handled."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-2xl text-lg text-white/80",
						children: "Send us your requirement - category, volume, packaging spec, and destination - and our export desk responds within 24 hours with a detailed quotation, samples timeline, and documentation package."
					})
				] })
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-6 lg:px-10 -mt-16 relative z-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 md:grid-cols-4 gap-4",
				children: [
					{
						icon: Earth,
						t: "40+ Countries"
					},
					{
						icon: Ship,
						t: "FCL & LCL Ready"
					},
					{
						icon: ShieldCheck,
						t: "Full Documentation"
					},
					{
						icon: Package,
						t: "Private Label"
					}
				].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl bg-white p-6 shadow-deep flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-12 w-12 rounded-2xl bg-terracotta/10 text-terracotta grid place-items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "h-6 w-6" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display font-semibold text-clove",
						children: f.t
					})]
				}) }, f.t))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-6 lg:px-10 py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "lg:col-span-7",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit,
						className: "rounded-3xl bg-surface p-8 md:p-10 shadow-deep",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl md:text-3xl font-bold",
								children: "Submit an export inquiry"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-clove/60 text-sm",
								children: "Your inquiry routes directly to our sales team via WhatsApp for the fastest response."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 grid gap-4 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Full name",
										required: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											required: true,
											value: form.name,
											onChange: (e) => setForm({
												...form,
												name: e.target.value
											}),
											className: "input"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Company",
										required: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											required: true,
											value: form.company,
											onChange: (e) => setForm({
												...form,
												company: e.target.value
											}),
											className: "input"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Country",
										required: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											required: true,
											value: form.country,
											onChange: (e) => setForm({
												...form,
												country: e.target.value
											}),
											className: "input"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Business email",
										required: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "email",
											required: true,
											value: form.email,
											onChange: (e) => setForm({
												...form,
												email: e.target.value
											}),
											className: "input"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Phone / WhatsApp",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											value: form.phone,
											onChange: (e) => setForm({
												...form,
												phone: e.target.value
											}),
											className: "input"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Category of interest",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
											value: form.category,
											onValueChange: (val) => setForm({
												...form,
												category: val
											}),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
												className: "input flex h-[46px] w-full items-center justify-between",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select a category" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
												value: c.slug,
												children: c.name
											}, c.slug)) })]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Estimated volume",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
											value: form.volume,
											onValueChange: (val) => setForm({
												...form,
												volume: val
											}),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
												className: "input flex h-[46px] w-full items-center justify-between",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select volume" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: [
												"500 kg",
												"1 MT",
												"5 MT",
												"10 MT",
												"1 FCL (20ft)",
												"1 FCL (40ft)",
												"Multiple FCL / Contract"
											].map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
												value: v,
												children: v
											}, v)) })]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Requirement details",
										className: "sm:col-span-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
											rows: 5,
											value: form.details,
											onChange: (e) => setForm({
												...form,
												details: e.target.value
											}),
											className: "input resize-none",
											placeholder: "Pack size, private label, certifications required, incoterm, destination port…"
										})
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-col sm:flex-row gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "submit",
									className: "btn-magnetic inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-terracotta px-7 py-4 text-sm font-semibold text-white",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" }), sent ? "Reopen WhatsApp" : "Send inquiry via WhatsApp"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `mailto:${BRAND.emails[0]}`,
									className: "inline-flex items-center justify-center gap-2 rounded-full border border-clove/15 bg-white px-7 py-4 text-sm font-semibold text-clove ease-elfurat transition duration-500 hover:bg-clove hover:text-white",
									children: "Email instead"
								})]
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5 space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl bg-spice-gradient p-8 text-white shadow-deep",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-8 w-8 text-saffron" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-2xl font-semibold",
									children: "72-hour sample dispatch"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-white/85 text-sm",
									children: "On confirmation, we dispatch a curated sample kit via DHL/FedEx to your address, along with a full Certificate of Analysis."
								})
							]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 100,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl bg-surface p-8 shadow-float",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-8 w-8 text-terracotta" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-4 font-display text-2xl font-semibold text-clove",
										children: "Documentation package"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
										className: "mt-3 space-y-1.5 text-sm text-clove/70",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Certificate of Analysis (COA)" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Phytosanitary Certificate" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Certificate of Origin" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Fumigation & MSDS on request" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Destination-country compliance docs" })
										]
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 200,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl bg-clove p-8 text-white shadow-float",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl font-semibold text-white",
									children: "Certifications"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 flex flex-wrap gap-3",
									children: CERTS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: c.src,
												alt: c.name,
												className: "h-4 w-auto"
											}),
											" ",
											c.name
										]
									}, c.name))
								})]
							})
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        .input {
          width: 100%;
          border-radius: 12px;
          background: #f5f5f7;
          border: 1px solid #e8e8ed;
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          color: #3e2723;
          transition: all 500ms cubic-bezier(0.16,1,0.3,1);
          font-family: inherit;
        }
        .input:focus { outline: none; border-color: #bf6040; box-shadow: 0 0 0 3px rgba(191,96,64,0.15); background: #fff; }
      ` })
	] });
}
function Field({ label, required, children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: `block ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "text-xs font-semibold uppercase tracking-wider text-clove/60",
			children: [
				label,
				" ",
				required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-terracotta",
					children: "*"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2",
			children
		})]
	});
}
//#endregion
export { ExportPage as component };
