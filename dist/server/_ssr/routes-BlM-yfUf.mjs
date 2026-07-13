import { o as __toESM } from "../_runtime.mjs";
import { a as LOGOS, i as HERO_IMAGES, o as waUrl, r as CERTS, t as BRAND } from "./brand-DOimiTyY.mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Image } from "./image-B6cf7Hyo.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as Reveal } from "./Reveal-CJqfK1fL.mjs";
import { i as motion, n as useTransform, r as useScroll } from "../_libs/framer-motion.mjs";
import { E as Award, S as ChevronLeft, d as PackageCheck, g as Leaf, k as ArrowRight, n as Truck, s as Send, v as Earth, x as ChevronRight } from "../_libs/lucide-react.mjs";
import { n as PRODUCTS, t as CATEGORIES } from "./products-3KWk4KYT.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-Dg1urBTx.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as ProductCard } from "./ProductCard-D5f07Igs.mjs";
import { t as useEmblaCarousel } from "../_libs/embla-carousel-react+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BlM-yfUf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactSection() {
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
		const msg = `Hello Elfurat Spices, inquiry:\n\nName: ${form.name}\nCompany: ${form.company}\nCountry: ${form.country}\nEmail: ${form.email}\nPhone: ${form.phone}\nCategory: ${cat}\nEstimated Volume: ${form.volume}\n\nDetails:\n${form.details}`;
		window.open(waUrl(msg), "_blank", "noopener,noreferrer");
		setSent(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "py-24 lg:py-32 overflow-hidden bg-surface relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6 lg:px-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-2 items-stretch",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-4xl lg:text-5xl font-bold text-clove",
							children: "Contact Us"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 text-2xl font-semibold text-terracotta",
							children: "Get in touch with our team."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-lg text-clove/70",
							children: "Fill out the form below and our export specialists will get back to you within 4 business hours."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 200,
						className: "mt-12 lg:mt-auto flex-1 flex flex-col justify-end items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-full flex items-center justify-center p-8 bg-white/50 rounded-3xl shadow-sm border border-black/5 h-full min-h-[200px]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
								src: LOGOS.color3x1,
								alt: "Elfurat Spices",
								className: "w-full max-w-sm object-contain"
							})
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit,
						className: "rounded-3xl bg-white p-8 md:p-10 shadow-float border border-black/5 h-full flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
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
										rows: 4,
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
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
						})]
					})
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
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
        .input:focus, .input[data-state="open"] { outline: none; border-color: #bf6040; box-shadow: 0 0 0 3px rgba(191,96,64,0.15); background: #fff; }
      ` })]
	});
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
function Marquee({ items, speed = "normal", className = "", separator }) {
	const doubled = [...items, ...items];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `relative overflow-hidden ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `flex w-max items-center ${speed === "slow" ? "animate-marquee-slow" : "animate-marquee"}`,
			children: doubled.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "px-6",
					children: it
				}), separator ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-terracotta/70" })]
			}, i))
		})
	});
}
function HeroParallax({ image, alt, children, className = "", priority = false }) {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
	const scale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
	const opacity = useTransform(scrollYProgress, [0, .7], [1, 0]);
	const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref,
		className: `relative isolate min-h-[100svh] w-full overflow-hidden ${className}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				style: {
					y,
					scale,
					willChange: "transform"
				},
				className: "absolute inset-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
					src: image,
					alt,
					className: "h-[115%] w-full object-cover",
					priority
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-clove/80 via-clove/40 to-transparent z-[1]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-b from-clove/60 via-clove/55 to-clove/95 z-[1]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(62,39,35,0.35)_100%)] z-[1]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				style: {
					opacity,
					y: contentY
				},
				className: "relative z-10 h-full",
				children
			})
		]
	});
}
function DragSlider({ items, slideClass = "basis-[78%] sm:basis-[45%] md:basis-[32%] lg:basis-[24%]" }) {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		align: "start",
		dragFree: true,
		containScroll: "trimSnaps",
		loop: false
	});
	const [canPrev, setCanPrev] = (0, import_react.useState)(false);
	const [canNext, setCanNext] = (0, import_react.useState)(true);
	const onSelect = (0, import_react.useCallback)(() => {
		if (!emblaApi) return;
		setCanPrev(emblaApi.canScrollPrev());
		setCanNext(emblaApi.canScrollNext());
	}, [emblaApi]);
	(0, import_react.useEffect)(() => {
		if (!emblaApi) return;
		onSelect();
		emblaApi.on("select", onSelect);
		emblaApi.on("reInit", onSelect);
		emblaApi.on("scroll", onSelect);
	}, [emblaApi, onSelect]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden",
			ref: emblaRef,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-5 -ml-2 pl-2 select-none cursor-grab active:cursor-grabbing",
				children: items.map((child, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-80px"
					},
					transition: {
						duration: .6,
						delay: i % 4 * .06,
						ease: [
							.16,
							1,
							.3,
							1
						]
					},
					className: `shrink-0 ${slideClass}`,
					children: child
				}, i))
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 flex items-center justify-end gap-3 pr-6 lg:pr-[max(2.5rem,calc((100%-80rem)/2))]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => emblaApi?.scrollPrev(),
				disabled: !canPrev,
				"aria-label": "Previous",
				className: "group inline-flex h-12 w-12 items-center justify-center rounded-full border border-clove/15 bg-white text-clove transition-all duration-500 hover:bg-clove hover:text-white hover:-translate-x-0.5 disabled:opacity-30 disabled:cursor-not-allowed",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-5 w-5" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => emblaApi?.scrollNext(),
				disabled: !canNext,
				"aria-label": "Next",
				className: "group inline-flex h-12 w-12 items-center justify-center rounded-full bg-terracotta text-white transition-all duration-500 hover:bg-clove hover:translate-x-0.5 disabled:opacity-30 disabled:cursor-not-allowed",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5" })
			})]
		})]
	});
}
function Home() {
	const featured = [
		"green-cardamom",
		"saffron",
		"turmeric-powder",
		"red-chilli-powder",
		"black-cardamom",
		"mamra-almonds",
		"garam-masala",
		"foxnut",
		"honey"
	].map((s) => PRODUCTS.find((p) => p.slug === s)).filter(Boolean);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroParallax, {
			image: HERO_IMAGES.spicesHero,
			alt: "Premium whole Indian spices arranged in brass bowls on textured artisan surface, saffron, cardamom, cloves, cinnamon, dramatic but elegant lighting, shallow depth of field, export-catalog quality",
			priority: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-24 pt-40 lg:px-10 lg:pb-32",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
						initial: {
							opacity: 0,
							y: 30
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							delay: .1,
							duration: .9,
							ease: [
								.16,
								1,
								.3,
								1
							]
						},
						className: "mt-6 h-fluid-hero font-display font-bold text-white max-w-5xl drop-shadow-[0_4px_20px_rgba(0,0,0,0.35)]",
						children: [
							"The world's pantry,",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-saffron",
								children: "crafted"
							}),
							" in India."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							delay: .25,
							duration: .8
						},
						className: "mt-6 max-w-2xl text-lg text-white/90 leading-relaxed",
						children: "Elfurat Spices delivers farm-to-fork purity at export scale - premium whole spices, cold-milled powders, master-blended masalas, aromatics, nuts and pantry staples for retail brands, HORECA and industrial food manufacturers in over 40 countries."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							delay: .4,
							duration: .8
						},
						className: "mt-10 flex flex-wrap items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/products",
							className: "btn-magnetic inline-flex items-center gap-2 rounded-full bg-terracotta px-7 py-4 text-sm font-semibold text-white",
							children: ["Explore the Catalogue", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: waUrl("Hello Elfurat Spices, I'd like a bulk export quote."),
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur transition-all duration-500 hover:bg-white hover:text-clove",
							children: "Request an Export Quote"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							delay: .55,
							duration: .8
						},
						className: "mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 border-t border-white/20 pt-8",
						children: [
							{
								n: "40+",
								l: "Export Countries"
							},
							{
								n: "180+",
								l: "SKUs in Catalogue"
							},
							{
								n: "5",
								l: "Certifications"
							},
							{
								n: "24/7",
								l: "B2B Support"
							}
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-3xl md:text-5xl font-bold text-white",
							children: s.n
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-xs md:text-sm uppercase tracking-wider text-white/70",
							children: s.l
						})] }, s.l))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-16 lg:grid-cols-12 items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "lg:col-span-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold uppercase tracking-[0.3em] text-terracotta",
						children: "Farm to Fork · Traceable"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 h-fluid-display font-display font-bold",
						children: [
							"A supply chain",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-spice-gradient",
								children: "obsessed with purity."
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "lg:col-span-6 lg:col-start-7",
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg text-clove/70 leading-relaxed",
						children: "We control every touchpoint - from selecting farmer collectives across India's spice-growing belts, to precision cleaning, cold milling, in-house lab testing and export-grade packaging. Every lot ships with full traceability, certificates of analysis, and phytosanitary documentation."
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "md:col-span-4 md:row-span-2 relative overflow-hidden rounded-3xl bg-surface shadow-float card-lift min-h-[420px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
								src: HERO_IMAGES.farmSourcing,
								alt: "Early morning Indian agricultural field with workers selecting fresh produce, cinematic horizon, warm sunlight, authenticity and traceability mood",
								className: "absolute inset-0 h-full w-full object-cover ease-elfurat transition-transform duration-[1200ms] hover:scale-105"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-clove/95 via-clove/30 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute bottom-0 left-0 right-0 p-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-3 py-1.5 text-[10px] uppercase tracking-widest text-white",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { className: "h-3 w-3 text-saffron" }), " Sourcing"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-3xl md:text-4xl font-semibold text-white max-w-md",
									children: "Direct partnerships with 200+ farmer collectives."
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "md:col-span-2 relative overflow-hidden rounded-3xl shadow-float card-lift min-h-[200px]",
						delay: 80,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
								src: HERO_IMAGES.processing,
								alt: "Hygienic spice processing line with stainless-steel equipment, workers in clean uniforms, precision workflow",
								className: "absolute inset-0 h-full w-full object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-clove/90 to-clove/20" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute bottom-0 p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] uppercase tracking-widest text-saffron mb-1",
									children: "Processing"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-xl text-white font-semibold",
									children: "HACCP-grade lines"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "md:col-span-2 relative overflow-hidden rounded-3xl shadow-float card-lift min-h-[200px]",
						delay: 140,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
								src: HERO_IMAGES.packaging,
								alt: "Export-grade food packaging station with sealed pouches and lot coding visible, organized and clean",
								className: "absolute inset-0 h-full w-full object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-clove/90 to-clove/20" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute bottom-0 p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] uppercase tracking-widest text-saffron mb-1",
									children: "Packaging"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-xl text-white font-semibold",
									children: "Lot-coded, sealed"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "md:col-span-3 relative overflow-hidden rounded-3xl shadow-float card-lift min-h-[240px]",
						delay: 200,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
								src: HERO_IMAGES.export,
								alt: "Cargo containers at inland logistics yard, golden-hour light, global dispatch readiness",
								className: "absolute inset-0 h-full w-full object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-clove/90 via-clove/30 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute bottom-0 p-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] uppercase tracking-widest text-saffron mb-1",
									children: "Global Export"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-2xl text-white font-semibold",
									children: "40+ countries, FCL & LCL ready"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "md:col-span-3 relative overflow-hidden rounded-3xl bg-spice-gradient shadow-float card-lift min-h-[240px]",
						delay: 260,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pattern-dots absolute inset-0 opacity-30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex h-full flex-col justify-between p-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackageCheck, { className: "h-10 w-10 text-saffron" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] uppercase tracking-widest text-white/70 mb-1",
								children: "Compliance"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-2xl text-white font-semibold max-w-xs",
								children: "APEDA · FSSAI · ISO · FDA · Spice Board of India"
							})] })]
						})]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-earth-gradient",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "max-w-3xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold uppercase tracking-[0.3em] text-terracotta",
						children: "The Catalogue"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 h-fluid-display font-display font-bold",
						children: [
							"Eight categories.",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-clove/50",
								children: "One promise."
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5",
					children: CATEGORIES.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 60,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/products/$category",
							params: { category: c.slug },
							className: "card-lift group block overflow-hidden rounded-3xl bg-surface shadow-float h-full",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative aspect-[4/3] overflow-hidden bg-[#f2ece4]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
									src: c.hero,
									alt: c.name,
									loading: "lazy",
									className: "h-full w-full object-cover ease-elfurat transition-transform duration-[900ms] group-hover:scale-[1.08]"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-lg font-semibold text-clove",
										children: c.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-clove/60 line-clamp-2",
										children: c.tagline
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-terracotta",
										children: ["View range ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
									})
								]
							})]
						})
					}, c.slug))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "py-24 lg:py-32 overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6 lg:px-10 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-semibold uppercase tracking-[0.3em] text-terracotta",
					children: "Signature SKUs"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 h-fluid-display font-display font-bold max-w-2xl",
					children: "The best of every field."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/products",
						className: "inline-flex items-center gap-2 rounded-full border border-clove/15 bg-white px-6 py-3 text-sm font-semibold text-clove ease-elfurat transition-all duration-500 hover:bg-clove hover:text-white",
						children: ["Full catalogue ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pl-6 lg:pl-[max(2.5rem,calc((100vw-80rem)/2))] pb-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DragSlider, { items: featured.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { p }, p.slug)) })
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "pb-8 overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pl-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DragSlider, {
					slideClass: "basis-[70%] sm:basis-[42%] md:basis-[30%] lg:basis-[22%]",
					items: [
						HERO_IMAGES.wholeSpicesA,
						HERO_IMAGES.wholeSpicesB,
						HERO_IMAGES.wholeSpicesC,
						HERO_IMAGES.wholeSpicesD,
						HERO_IMAGES.turmericVisual,
						HERO_IMAGES.chilliVisual,
						HERO_IMAGES.corianderVisual,
						HERO_IMAGES.masalaVisual
					].map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative overflow-hidden rounded-3xl aspect-[4/5] bg-muted shadow-float mr-3 md:mr-6 lg:mr-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
							src,
							alt: "Elfurat product",
							loading: "lazy",
							className: "h-full w-full object-cover ease-elfurat transition-transform duration-[900ms] hover:scale-110"
						})
					}, i))
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 lg:grid-cols-3",
				children: [
					{
						title: "Aromatics",
						img: HERO_IMAGES.aromaticsA,
						copy: "Bay leaves, saffron, kokum, asafoetida and rare botanicals from indigenous belts.",
						to: "aromatics"
					},
					{
						title: "Premium Nuts",
						img: HERO_IMAGES.nutsA,
						copy: "Mamra almonds, W180 cashews, Kashmiri walnuts and jumbo pistachios.",
						to: "nuts"
					},
					{
						title: "Makhana",
						img: HERO_IMAGES.makhanaA,
						copy: "Bihar-sourced fox nuts, grade-tested for uniform pop and shelf life.",
						to: "makhana"
					}
				].map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/products/$category",
						params: { category: b.to },
						className: "card-lift group relative block overflow-hidden rounded-3xl min-h-[420px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
								src: b.img,
								alt: b.title,
								loading: "lazy",
								className: "absolute inset-0 h-full w-full object-cover ease-elfurat transition-transform duration-[1200ms] group-hover:scale-110"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-clove via-clove/40 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-0 p-8 flex flex-col justify-end",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-3xl font-semibold text-white",
										children: b.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-white/75 max-w-xs",
										children: b.copy
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-saffron",
										children: ["Explore ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
									})
								]
							})
						]
					})
				}, b.title))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-clove text-white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold uppercase tracking-[0.3em] text-saffron",
						children: "Infrastructure"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 h-fluid-display font-display font-bold text-white max-w-3xl",
						children: ["Warehousing, milling & QC - ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-saffron/90",
							children: "purpose built for export."
						})]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-14 grid grid-cols-1 md:grid-cols-3 gap-5",
						children: [
							HERO_IMAGES.warehouse1,
							HERO_IMAGES.warehouse2,
							HERO_IMAGES.warehouse3
						].map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * 100,
							className: "relative overflow-hidden rounded-3xl aspect-[4/5]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
								src,
								alt: "Elfurat facility",
								loading: "lazy",
								className: "absolute inset-0 h-full w-full object-cover ease-elfurat transition-transform duration-[1200ms] hover:scale-110"
							})
						}, src))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-14 grid gap-8 md:grid-cols-4",
						children: [
							{
								icon: Leaf,
								t: "Farmer Collectives",
								d: "Direct sourcing from 200+ farms across India"
							},
							{
								icon: Award,
								t: "In-house QC Labs",
								d: "Every lot lab-tested for purity, moisture, ASTA color"
							},
							{
								icon: Earth,
								t: "40+ Countries",
								d: "US, UK, EU, GCC, ASEAN, Africa export corridors"
							},
							{
								icon: Truck,
								t: "FCL & LCL Ready",
								d: "Bulk 25kg sacks to consumer-ready retail SKUs"
							}
						].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl bg-white/5 backdrop-blur p-6 border border-white/10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "h-6 w-6 text-saffron mb-4" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-lg font-semibold text-white",
									children: f.t
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 text-sm text-white/60",
									children: f.d
								})
							]
						}, f.t))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "py-14 bg-earth-gradient",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-8 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-semibold uppercase tracking-[0.3em] text-terracotta",
					children: "Certifications & Compliance"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {
				speed: "slow",
				items: CERTS.concat(CERTS).map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 rounded-full bg-white px-6 py-3 shadow-float",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
						src: c.src,
						alt: c.name,
						className: "h-8 w-auto"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display font-semibold text-clove",
						children: c.name
					})]
				}, i))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-6 py-24 lg:px-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-3xl bg-spice-gradient p-10 md:p-16 shadow-deep",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pattern-dots absolute inset-0 opacity-25" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "h-fluid-section font-display font-bold text-white",
							children: "Ready to build your brand with premium Indian spices?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-white/80 text-lg",
							children: "Bulk export, private label, and contract manufacturing - our B2B team ships samples within 72 hours."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/export-inquiries",
							className: "btn-magnetic inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-clove",
							children: ["Start an Inquiry ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: waUrl("Hello Elfurat Spices, I'd like to request samples."),
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 text-sm font-semibold text-white ease-elfurat transition duration-500 hover:bg-white/10",
							children: "WhatsApp us"
						})]
					})]
				})]
			}) })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactSection, {})
	] });
}
//#endregion
export { Home as component };
