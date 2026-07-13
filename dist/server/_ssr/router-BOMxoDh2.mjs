import { o as __toESM } from "../_runtime.mjs";
import { a as LOGOS, o as waUrl, r as CERTS, t as BRAND } from "./brand-Cdcs6iHz.mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Image } from "./image-B6cf7Hyo.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as AnimatePresence, i as motion, n as useTransform, r as useScroll, t as useSpring } from "../_libs/framer-motion.mjs";
import { C as ChevronDown, D as ArrowUp, h as Mail, l as Phone, m as MapPin, p as Menu, t as X } from "../_libs/lucide-react.mjs";
import { n as PRODUCTS, t as CATEGORIES } from "./products-DxXtmdB1.mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route$7 } from "./product._slug-DlFDBIsR.mjs";
import { t as Route$8 } from "./products._category-BpLhq3jQ.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as require_aos } from "../_libs/aos.mjs";
import { t as Lenis } from "../_libs/lenis.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BOMxoDh2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_aos = /* @__PURE__ */ __toESM(require_aos());
var styles_default = "/assets/styles-Cy9CnqgT.css";
var LINKS = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/products",
		label: "Products",
		hasDropdown: true
	},
	{
		to: "/export-inquiries",
		label: "Export"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
var DARK_HERO_ROUTES = (path) => path === "/" || path === "/export-inquiries" || path.startsWith("/products/") && !path.endsWith("/products");
function Nav() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [productsOpen, setProductsOpen] = (0, import_react.useState)(false);
	const [mobileProductsOpen, setMobileProductsOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const { scrollY } = useScroll();
	const isDarkHeroPage = DARK_HERO_ROUTES(pathname);
	const bgOp = useTransform(scrollY, [0, 80], [0, .72]);
	const backdrop = useTransform(scrollY, [0, 80], ["saturate(100%) blur(0px)", "saturate(180%) blur(22px)"]);
	const borderOp = useTransform(scrollY, [
		0,
		40,
		80
	], [
		0,
		.3,
		.6
	]);
	const shadowOp = useTransform(scrollY, [0, 80], [0, .12]);
	const paddingAnim = useTransform(scrollY, [0, 80], [0, 12]);
	const radiusAnim = useTransform(scrollY, [0, 80], [0, 999]);
	const maxWAnim = useTransform(scrollY, [0, 80], [1400, 1152]);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const threshold = 40;
		setScrolled(scrollY.get() > threshold);
		const unsub = scrollY.on("change", (v) => setScrolled(v > threshold));
		return () => unsub();
	}, [scrollY]);
	(0, import_react.useEffect)(() => {
		setOpen(false);
		setProductsOpen(false);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		if (open) document.body.style.overflow = "hidden";
		else document.body.style.overflow = "unset";
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [open]);
	const onDarkHero = isDarkHeroPage && !scrolled;
	const textColor = onDarkHero ? "text-white/95" : "text-clove/85";
	const textHover = onDarkHero ? "hover:text-saffron" : "hover:text-terracotta";
	const logoSrc = onDarkHero ? LOGOS.white3x1 : LOGOS.color3x1;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.header, {
		style: {
			paddingTop: paddingAnim,
			paddingLeft: paddingAnim,
			paddingRight: paddingAnim
		},
		className: "fixed left-0 right-0 top-0 z-50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			style: {
				maxWidth: maxWAnim,
				borderRadius: radiusAnim,
				backgroundColor: useTransform(bgOp, (o) => `rgba(255,255,255,${o})`),
				backdropFilter: backdrop,
				WebkitBackdropFilter: backdrop,
				borderColor: useTransform(borderOp, (o) => `rgba(255,255,255,${o})`),
				boxShadow: useTransform(shadowOp, (o) => `0 20px 60px -20px rgba(62,39,35,${o})`)
			},
			className: "mx-auto flex items-center justify-between border px-4 sm:px-6 py-3 transition-[padding,max-width,border-radius] duration-500",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "flex items-center gap-2 shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						transition: {
							duration: .45,
							ease: [
								.16,
								1,
								.3,
								1
							]
						},
						className: "h-8 sm:h-9 w-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
							src: logoSrc,
							alt: "Elfurat Spices",
							className: "h-full w-auto object-contain",
							priority: true
						})
					}, logoSrc)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden md:flex items-center gap-1",
					children: LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						onMouseEnter: () => l.hasDropdown && setProductsOpen(true),
						onMouseLeave: () => l.hasDropdown && setProductsOpen(false),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: l.to,
							className: `relative inline-flex items-center gap-1 px-4 py-2 text-sm font-medium ${textColor} ${textHover} transition-colors duration-500`,
							activeProps: { className: `${onDarkHero ? "text-saffron" : "text-terracotta"} font-semibold` },
							activeOptions: { exact: l.to === "/" },
							children: [l.label, l.hasDropdown && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-3.5 w-3.5 transition-transform duration-300 ${productsOpen ? "rotate-180" : ""}` })]
						}), l.hasDropdown && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: productsOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								opacity: 0,
								y: 8,
								scale: .98
							},
							animate: {
								opacity: 1,
								y: 0,
								scale: 1
							},
							exit: {
								opacity: 0,
								y: 4,
								scale: .98
							},
							transition: {
								duration: .25,
								ease: [
									.16,
									1,
									.3,
									1
								]
							},
							className: "absolute left-1/2 top-full -translate-x-1/2 pt-4 w-[560px]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative rounded-3xl border border-white/60 bg-white p-3 shadow-[0_30px_60px_-15px_rgba(62,39,35,0.25)]",
								style: {
									backdropFilter: "saturate(180%) blur(22px)",
									WebkitBackdropFilter: "saturate(180%) blur(22px)"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-2 gap-1.5",
									children: CATEGORIES.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
										initial: {
											opacity: 0,
											x: -8
										},
										animate: {
											opacity: 1,
											x: 0
										},
										transition: { delay: i * .03 },
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/products/$category",
											params: { category: c.slug },
											className: "group flex items-center gap-3 rounded-2xl p-2.5 hover:bg-terracotta/10 transition-colors duration-300",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "h-11 w-11 shrink-0 overflow-hidden rounded-xl bg-muted/20",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
													src: c.hero,
													alt: c.name,
													className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "min-w-0",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "font-display text-sm font-semibold text-clove group-hover:text-terracotta transition-colors truncate",
													children: c.name
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-[11px] text-clove/55 truncate",
													children: c.tagline
												})]
											})]
										})
									}, c.slug))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/products",
									className: "mt-2 flex items-center justify-center gap-2 rounded-2xl bg-clove px-4 py-2.5 text-xs font-semibold uppercase tracking-widest text-white hover:bg-terracotta transition-colors duration-300",
									children: "View complete catalogue"
								})]
							})
						}) })]
					}, l.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden md:flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "tel:+917011921692",
						className: `hidden lg:inline-flex items-center gap-2 text-sm font-medium ${textColor} ${textHover} transition-colors duration-500`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), "+91 70119 21692"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/export-inquiries",
						className: "btn-magnetic inline-flex items-center rounded-full bg-terracotta px-5 py-2.5 text-sm font-semibold text-white",
						children: "Get a Quote"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: `md:hidden inline-flex items-center justify-center rounded-full p-2 ${onDarkHero ? "bg-white/15 text-white border border-white/25" : "bg-white/70 text-clove border border-clove/10"}`,
					onClick: () => setOpen((v) => !v),
					"aria-label": "Toggle menu",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			transition: { duration: .3 },
			className: "fixed inset-0 z-[60] md:hidden bg-clove/40 backdrop-blur-sm",
			onClick: () => setOpen(false),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: { x: "100%" },
				animate: { x: 0 },
				exit: { x: "100%" },
				transition: {
					duration: .4,
					ease: [
						.16,
						1,
						.3,
						1
					]
				},
				className: "absolute top-0 right-0 bottom-0 w-[85vw] max-w-sm bg-surface p-6 shadow-2xl flex flex-col",
				onClick: (e) => e.stopPropagation(),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-6 shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-6 w-auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
								src: LOGOS.color3x1,
								alt: "Elfurat Spices",
								className: "h-full w-auto object-contain"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setOpen(false),
							className: "rounded-full bg-black/5 p-2 text-clove shrink-0 ml-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "flex-1 overflow-y-auto flex flex-col gap-2 -mx-2 px-2 pb-6",
						children: LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: l.hasDropdown ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setMobileProductsOpen(!mobileProductsOpen),
							className: "flex w-full items-center justify-between rounded-2xl px-4 py-3 text-base font-semibold text-clove hover:bg-black/5 transition-colors",
							children: [l.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-4 w-4 transition-transform duration-300 ${mobileProductsOpen ? "rotate-180" : ""}` })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: mobileProductsOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								height: 0,
								opacity: 0
							},
							animate: {
								height: "auto",
								opacity: 1
							},
							exit: {
								height: 0,
								opacity: 0
							},
							className: "overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 gap-1.5 pt-2 pb-4 pl-4",
								children: [CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/products/$category",
									params: { category: c.slug },
									className: "flex items-center gap-3 rounded-2xl p-2 hover:bg-terracotta/10 transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-10 w-10 shrink-0",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
											src: c.hero,
											alt: c.name,
											className: "h-full w-full object-cover rounded-xl"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm font-semibold text-clove truncate",
											children: c.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[10px] text-clove/60 truncate",
											children: c.tagline
										})]
									})]
								}, c.slug)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/products",
									className: "mt-2 flex items-center justify-center rounded-xl bg-clove/5 px-4 py-3 text-xs font-semibold uppercase tracking-widest text-clove transition-colors hover:bg-clove/10",
									children: "View all products"
								})]
							})
						}) })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: l.to,
							className: "block rounded-2xl px-4 py-3 text-base font-semibold text-clove hover:bg-black/5 transition-colors",
							activeProps: { className: "bg-terracotta/10 text-terracotta" },
							activeOptions: { exact: l.to === "/" },
							children: l.label
						}) }, l.to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "shrink-0 pt-4 mt-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/export-inquiries",
							className: "flex w-full items-center justify-center rounded-full bg-terracotta px-5 py-4 text-sm font-semibold text-white transition-transform active:scale-95",
							children: "Get a Quote"
						})
					})
				]
			})
		}) })]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative mt-24 overflow-hidden bg-clove text-white/85",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pattern-dots absolute inset-0 opacity-30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 md:grid-cols-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-4 space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: LOGOS.white3x1,
								alt: "Elfurat Spices",
								className: "h-10 w-auto"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm leading-relaxed text-white/70 max-w-sm",
								children: "Elfurat Spices is a global exporter of premium Indian spices, aromatics, nuts and pantry staples - engineered for retail brands, HORECA and industrial food manufacturers worldwide."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-3",
								children: CERTS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white/80",
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
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-white font-display font-semibold mb-4",
							children: "Explore"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-2 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									className: "hover:text-terracotta ease-elfurat transition duration-500",
									children: "Home"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/about",
									className: "hover:text-terracotta ease-elfurat transition duration-500",
									children: "About"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/products",
									className: "hover:text-terracotta ease-elfurat transition duration-500",
									children: "Products"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/export-inquiries",
									className: "hover:text-terracotta ease-elfurat transition duration-500",
									children: "Export"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "hover:text-terracotta ease-elfurat transition duration-500",
									children: "Contact"
								}) })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-white font-display font-semibold mb-4",
							children: "Categories"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-2 text-sm",
							children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/products/$category",
								params: { category: c.slug },
								className: "hover:text-terracotta ease-elfurat transition duration-500",
								children: c.name
							}) }, c.slug))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-white font-display font-semibold mb-4",
							children: "Contact"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-3 text-sm text-white/75",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 mt-0.5 shrink-0 text-terracotta" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: BRAND.address })]
								}),
								BRAND.phones.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 shrink-0 text-terracotta" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `tel:${p.replace(/\s/g, "")}`,
										children: p
									})]
								}, p)),
								BRAND.emails.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 shrink-0 text-terracotta" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `mailto:${e}`,
										className: "break-all",
										children: e
									})]
								}, e))
							]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					BRAND.name,
					". All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [BRAND.domain, " • Premium spices, globally shipped."] })]
			})]
		})]
	});
}
function BackToTop() {
	const { scrollYProgress } = useScroll();
	const smoothProgress = useSpring(scrollYProgress, {
		stiffness: 400,
		damping: 40,
		mass: .1
	});
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			setVisible(window.scrollY > 400);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const R = 22;
	const C = 2 * Math.PI * R;
	const offset = useTransform(smoothProgress, [0, 1], [C, 0]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		onClick: () => window.scrollTo({
			top: 0,
			behavior: "smooth"
		}),
		"aria-label": "Back to top",
		className: `group cursor-pointer fixed bottom-24 right-5 sm:right-8 z-40 h-14 w-14 rounded-full glass shadow-deep flex items-center justify-center ease-elfurat transition-all duration-500 hover:scale-110 hover:shadow-float ${visible ? "opacity-100 translate-y-0 pointer-events-auto" : "pointer-events-none opacity-0 translate-y-4"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 50 50",
			className: "absolute inset-0 -rotate-90 h-full w-full pointer-events-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "25",
				cy: "25",
				r: R,
				stroke: "rgba(62,39,35,0.1)",
				strokeWidth: "2",
				fill: "none"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
				cx: "25",
				cy: "25",
				r: R,
				stroke: "#bf6040",
				strokeWidth: "2.5",
				strokeLinecap: "round",
				fill: "none",
				strokeDasharray: C,
				style: { strokeDashoffset: offset }
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "h-5 w-5 text-clove" })]
	});
}
var WA_ICON = LOGOS.whatsapp;
function WhatsAppFloat() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
		href: waUrl("Hello Elfurat Spices, I'd like to make an inquiry."),
		target: "_blank",
		rel: "noopener noreferrer",
		"aria-label": "Chat on WhatsApp",
		initial: {
			opacity: 0,
			scale: .6,
			y: 20
		},
		animate: {
			opacity: 1,
			scale: 1,
			y: 0
		},
		transition: {
			delay: 1.2,
			type: "spring",
			stiffness: 260,
			damping: 20
		},
		whileHover: {
			scale: 1.08,
			rotate: -4
		},
		whileTap: { scale: .95 },
		className: "fixed bottom-6 right-5 sm:right-8 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full shadow-deep",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: WA_ICON,
			alt: "WhatsApp",
			className: "relative h-14 w-14 drop-shadow-lg",
			loading: "lazy"
		})]
	});
}
function Preloader() {
	const [done, setDone] = (0, import_react.useState)(false);
	const [hidden, setHidden] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const start = Date.now();
		const finish = () => {
			const elapsed = Date.now() - start;
			const wait = Math.max(0, 150 - elapsed);
			setTimeout(() => {
				setDone(true);
				setTimeout(() => setHidden(true), 300);
			}, wait);
		};
		if (document.readyState === "complete") finish();
		else window.addEventListener("load", finish, { once: true });
		const t = setTimeout(finish, 2500);
		return () => clearTimeout(t);
	}, []);
	if (hidden) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `fixed inset-0 z-[100] flex items-center justify-center bg-background ease-elfurat transition-all duration-300 ${done ? "opacity-0 pointer-events-none" : "opacity-100"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pattern-dots absolute inset-0 opacity-40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex flex-col items-center gap-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative flex items-center gap-2",
					children: [
						0,
						1,
						2,
						3,
						4
					].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "h-2.5 w-2.5 rounded-full bg-terracotta animate-spice-pulse",
						style: { animationDelay: `${i * 140}ms` }
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: LOGOS.color3x1,
					alt: "Elfurat Spices",
					className: "h-9 w-auto opacity-90"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[11px] uppercase tracking-[0.35em] text-clove/60 font-medium",
					children: "Premium Indian Spices"
				})
			]
		})]
	});
}
function ScrollReset() {
	(0, import_react.useEffect)(() => {
		setTimeout(() => {
			if (window.lenis) window.lenis.scrollTo(0, { immediate: true });
			else window.scrollTo({
				top: 0,
				left: 0,
				behavior: "instant"
			});
		}, 10);
	}, [useRouterState({ select: (s) => s.location.pathname })]);
	return null;
}
function AosInit() {
	(0, import_react.useEffect)(() => {
		import_aos.default.init({
			duration: 900,
			easing: "ease-out-cubic",
			once: true,
			offset: 80,
			disable: () => window.matchMedia("(prefers-reduced-motion: reduce)").matches
		});
	}, []);
	return null;
}
function SmoothScroll() {
	(0, import_react.useEffect)(() => {
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			direction: "vertical",
			gestureDirection: "vertical",
			smooth: true,
			mouseMultiplier: 1,
			smoothTouch: false,
			touchMultiplier: 2,
			infinite: false
		});
		window.lenis = lenis;
		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
		return () => {
			lenis.destroy();
			delete window.lenis;
		};
	}, []);
	return null;
}
var ORG_JSONLD = {
	"@context": "https://schema.org",
	"@type": "Organization",
	name: "Elfurat Spices",
	url: "https://elfuratspices.com",
	logo: "https://elfuratspices.com/assets/Multicolor%203x1%20Logo.webp",
	description: "Global exporter of premium Indian spices, aromatics, nuts and pantry staples to 40+ countries.",
	address: {
		"@type": "PostalAddress",
		streetAddress: "RZ-3285 Third Floor, Gali No-37, Tughlakabad Extn, Kalkaji",
		addressLocality: "South Delhi",
		addressRegion: "Delhi",
		postalCode: "110019",
		addressCountry: "IN"
	},
	contactPoint: [{
		"@type": "ContactPoint",
		telephone: "+91-70119-21692",
		contactType: "sales",
		areaServed: "Worldwide",
		availableLanguage: ["English", "Hindi"]
	}],
	sameAs: []
};
var WEBSITE_JSONLD = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	name: "Elfurat Spices",
	url: "https://elfuratspices.com",
	potentialAction: {
		"@type": "SearchAction",
		target: "https://elfuratspices.com/products?q={search_term_string}",
		"query-input": "required name=search_term_string"
	}
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4 pt-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-7xl font-bold text-clove",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-xl font-semibold text-clove",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-clove/60",
					children: "This aromatic trail doesn't lead anywhere. Let's get you back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "btn-magnetic inline-flex items-center justify-center rounded-full bg-terracotta px-5 py-2.5 text-sm font-semibold text-white",
						children: "Return home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-xl font-semibold text-clove",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-clove/60",
					children: "Something went wrong on our end. Try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "btn-magnetic inline-flex items-center rounded-full bg-terracotta px-5 py-2.5 text-sm font-semibold text-white",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center rounded-full border border-clove/15 bg-white px-5 py-2.5 text-sm font-semibold text-clove",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$6 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Elfurat Spices - Premium Indian Spices, Globally Exported" },
			{
				name: "description",
				content: "From single-origin farms in India to importers worldwide - Elfurat Spices delivers premium whole spices, powders, masala blends, aromatics, and nuts at export scale."
			},
			{
				name: "author",
				content: "Elfurat Spices"
			},
			{
				name: "theme-color",
				content: "#BF6040"
			},
			{
				name: "apple-mobile-web-app-title",
				content: "Elfurat"
			},
			{
				property: "og:title",
				content: "Elfurat Spices - Premium Indian Spices, Globally Exported"
			},
			{
				property: "og:description",
				content: "From single-origin farms in India to importers worldwide - Elfurat Spices delivers premium whole spices, powders, masala blends, aromatics, and nuts at export scale."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://elfuratspices.com"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Elfurat Spices - Premium Indian Spices, Globally Exported"
			},
			{
				name: "twitter:description",
				content: "From single-origin farms in India to importers worldwide - Elfurat Spices delivers premium whole spices, powders, masala blends, aromatics, and nuts at export scale."
			},
			{
				property: "og:image",
				content: "https://elfuratspices.com/og-image.png"
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				name: "twitter:image",
				content: "https://elfuratspices.com/og-image.png"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/png",
				href: "/favicons/favicon-96x96.png",
				sizes: "96x96"
			},
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicons/favicon.svg"
			},
			{
				rel: "shortcut icon",
				href: "/favicons/favicon.ico"
			},
			{
				rel: "apple-touch-icon",
				sizes: "180x180",
				href: "/favicons/apple-touch-icon.png"
			},
			{
				rel: "manifest",
				href: "/favicons/site.webmanifest"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$6.useRouteContext();
	(0, import_react.useEffect)(() => {
		if (typeof navigator !== "undefined" && "modelContext" in navigator) navigator.modelContext?.provideContext({ tools: [{
			name: "search_spices",
			description: "Search for spices in the catalog",
			inputSchema: {
				type: "object",
				properties: { query: { type: "string" } },
				required: ["query"]
			},
			execute: async (args) => {
				return `Results for ${args.query}: Visit https://elfuratspices.com/products?q=${encodeURIComponent(args.query)}`;
			}
		}] });
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
				type: "application/ld+json",
				dangerouslySetInnerHTML: { __html: JSON.stringify(ORG_JSONLD) }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
				type: "application/ld+json",
				dangerouslySetInnerHTML: { __html: JSON.stringify(WEBSITE_JSONLD) }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: `if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
              navigator.serviceWorker.register('/sw.js');
            });
          }` } }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmoothScroll, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AosInit, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Preloader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackToTop, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReset, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "min-h-screen",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppFloat, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackToTop, {})
		]
	});
}
var BASE_URL = "https://elfuratspices.com";
var Route$5 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[
		{
			path: "/",
			changefreq: "weekly",
			priority: "1.0"
		},
		{
			path: "/about",
			changefreq: "monthly",
			priority: "0.8"
		},
		{
			path: "/products",
			changefreq: "weekly",
			priority: "0.9"
		},
		{
			path: "/export-inquiries",
			changefreq: "monthly",
			priority: "0.8"
		},
		{
			path: "/contact",
			changefreq: "monthly",
			priority: "0.6"
		},
		...CATEGORIES.map((c) => ({
			path: `/products/${c.slug}`,
			changefreq: "weekly",
			priority: "0.7"
		})),
		...PRODUCTS.map((p) => ({
			path: `/product/${p.slug}`,
			changefreq: "monthly",
			priority: "0.6"
		}))
	].map((e) => `  <url>
    <loc>${BASE_URL}${e.path}</loc>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`).join("\n")}
</urlset>`;
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$4 = () => import("./export-inquiries-DPYK2nCu.mjs");
var Route$4 = createFileRoute("/export-inquiries")({
	head: () => ({ meta: [
		{ title: "Export Inquiries - B2B & Bulk Orders | Elfurat Spices" },
		{
			name: "description",
			content: "Submit an export inquiry for bulk B2B orders, private label, and contract manufacturing. Global shipping, certifications, and 72-hour sample dispatch."
		},
		{
			property: "og:title",
			content: "Elfurat Spices - Export & B2B Inquiries"
		},
		{
			property: "og:description",
			content: "Bulk orders, private label, contract manufacturing."
		},
		{
			property: "og:image",
			content: "https://elfuratspices.com/assets/04D.webp"
		},
		{
			property: "og:image:width",
			content: "1920"
		},
		{
			property: "og:image:height",
			content: "1080"
		},
		{
			property: "og:url",
			content: "https://elfuratspices.com/export-inquiries"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		},
		{
			name: "twitter:image",
			content: "https://elfuratspices.com/assets/04D.webp"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./contact-CDev3gda.mjs");
var Route$3 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact Elfurat Spices - Delhi, India" },
		{
			name: "description",
			content: "Reach the Elfurat Spices team in New Delhi. Phone, email, WhatsApp and headquarters address for B2B, export and retail inquiries."
		},
		{
			property: "og:title",
			content: "Contact Elfurat Spices"
		},
		{
			property: "og:description",
			content: "Delhi HQ · Global exporter of premium Indian spices."
		},
		{
			property: "og:image",
			content: "https://elfuratspices.com/assets/16A.webp"
		},
		{
			property: "og:image:width",
			content: "1920"
		},
		{
			property: "og:image:height",
			content: "1080"
		},
		{
			property: "og:url",
			content: "https://elfuratspices.com/contact"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		},
		{
			name: "twitter:image",
			content: "https://elfuratspices.com/assets/16A.webp"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./about-Chq4jtp8.mjs");
var Route$2 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About Elfurat Spices - Global Indian Spice Exporter" },
		{
			name: "description",
			content: "Meet Elfurat Spices - a globally trusted exporter of premium Indian spices, aromatics, nuts and staples, with certified sourcing, processing and packaging infrastructure."
		},
		{
			property: "og:title",
			content: "About Elfurat Spices"
		},
		{
			property: "og:description",
			content: "A global Indian spice exporter with certified sourcing, processing and packaging infrastructure."
		},
		{
			property: "og:image",
			content: "https://elfuratspices.com/assets/18A.webp"
		},
		{
			property: "og:image:width",
			content: "1920"
		},
		{
			property: "og:image:height",
			content: "1080"
		},
		{
			property: "og:url",
			content: "https://elfuratspices.com/about"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		},
		{
			name: "twitter:image",
			content: "https://elfuratspices.com/assets/18A.webp"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./routes-DsnTMxjC.mjs");
var Route$1 = createFileRoute("/")({
	head: () => ({ meta: [{ title: "Elfurat Spices - Premium Indian Spices, Globally Exported" }, {
		name: "description",
		content: "From single-origin farms in India to importers worldwide - Elfurat Spices delivers premium whole spices, powders, masala blends, aromatics, and nuts at export scale."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./products.index-CWVM0r8_.mjs");
var Route = createFileRoute("/products/")({
	head: () => ({ meta: [
		{ title: "Products - Complete Catalogue | Elfurat Spices" },
		{
			name: "description",
			content: "Browse the complete Elfurat Spices catalogue - 180+ SKUs across whole spices, ground powders, masala blends, aromatics, nuts, dried fruits, makhana and dairy staples."
		},
		{
			property: "og:title",
			content: "Elfurat Spices - Complete Product Catalogue"
		},
		{
			property: "og:description",
			content: "180+ export-grade SKUs across eight categories."
		},
		{
			property: "og:image",
			content: "https://elfuratspices.com/assets/05A.webp"
		},
		{
			property: "og:image:width",
			content: "1920"
		},
		{
			property: "og:image:height",
			content: "1080"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		},
		{
			name: "twitter:image",
			content: "https://elfuratspices.com/assets/05A.webp"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var SitemapDotxmlRoute = Route$5.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$6
});
var ExportInquiriesRoute = Route$4.update({
	id: "/export-inquiries",
	path: "/export-inquiries",
	getParentRoute: () => Route$6
});
var ContactRoute = Route$3.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$6
});
var AboutRoute = Route$2.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$6
});
var IndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$6
});
var ProductsIndexRoute = Route.update({
	id: "/products/",
	path: "/products/",
	getParentRoute: () => Route$6
});
var ProductsCategoryRoute = Route$8.update({
	id: "/products/$category",
	path: "/products/$category",
	getParentRoute: () => Route$6
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ContactRoute,
	ExportInquiriesRoute,
	SitemapDotxmlRoute,
	ProductSlugRoute: Route$7.update({
		id: "/product/$slug",
		path: "/product/$slug",
		getParentRoute: () => Route$6
	}),
	ProductsCategoryRoute,
	ProductsIndexRoute
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
