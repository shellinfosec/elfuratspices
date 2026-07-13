import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { LOGOS } from "@/lib/brand";
import { CATEGORIES } from "@/lib/products";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products", hasDropdown: true },
  { to: "/export-inquiries", label: "Export" },
  { to: "/contact", label: "Contact" },
];

// Routes that render a dark image hero directly under the header
const DARK_HERO_ROUTES = (path: string) =>
  path === "/" || path === "/export-inquiries" || (path.startsWith("/products/") && !path.endsWith("/products"));

export function Nav() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { scrollY } = useScroll();

  const isDarkHeroPage = DARK_HERO_ROUTES(pathname);

  // We use the same transition points for all pages now (0 to 80px)
  const bgOp = useTransform(scrollY, [0, 80], [0, 0.72]);
  const backdrop = useTransform(scrollY, [0, 80], ["saturate(100%) blur(0px)", "saturate(180%) blur(22px)"]);
  const borderOp = useTransform(scrollY, [0, 40, 80], [0, 0.3, 0.6]);
  const shadowOp = useTransform(scrollY, [0, 80], [0, 0.12]);
  const paddingAnim = useTransform(scrollY, [0, 80], [0, 12]);
  const radiusAnim = useTransform(scrollY, [0, 80], [0, 999]);
  const maxWAnim = useTransform(scrollY, [0, 80], [1400, 1152]);

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const threshold = 40;
    setScrolled(scrollY.get() > threshold);
    const unsub = scrollY.on("change", (v) => setScrolled(v > threshold));
    return () => unsub();
  }, [scrollY]);

  useEffect(() => {
    setOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  const onDarkHero = isDarkHeroPage && !scrolled;

  // dynamic text/logo color
  const textColor = onDarkHero ? "text-white/95" : "text-clove/85";
  const textHover = onDarkHero ? "hover:text-saffron" : "hover:text-terracotta";
  const logoSrc = onDarkHero ? LOGOS.white3x1 : LOGOS.color3x1;

  return (
    <motion.header
      style={{ paddingTop: paddingAnim, paddingLeft: paddingAnim, paddingRight: paddingAnim }}
      className="fixed left-0 right-0 top-0 z-50"
    >
      <motion.div
        style={{
          maxWidth: maxWAnim,
          borderRadius: radiusAnim,
          backgroundColor: useTransform(bgOp, (o) => `rgba(255,255,255,${o})`),
          backdropFilter: backdrop,
          WebkitBackdropFilter: backdrop,
          borderColor: useTransform(borderOp, (o) => `rgba(255,255,255,${o})`),
          boxShadow: useTransform(shadowOp, (o) => `0 20px 60px -20px rgba(62,39,35,${o})`),
        }}
        className="mx-auto flex items-center justify-between border px-4 sm:px-6 py-3 transition-[padding,max-width,border-radius] duration-500"
      >
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <motion.img
            key={logoSrc}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            src={logoSrc}
            alt="Elfurat Spices"
            className="h-8 sm:h-9 w-auto"
            loading="eager"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {LINKS.map((l) => (
            <div
              key={l.to}
              className="relative"
              onMouseEnter={() => l.hasDropdown && setProductsOpen(true)}
              onMouseLeave={() => l.hasDropdown && setProductsOpen(false)}
            >
              <Link
                to={l.to}
                className={`relative inline-flex items-center gap-1 px-4 py-2 text-sm font-medium ${textColor} ${textHover} transition-colors duration-500`}
                activeProps={{
                  className: `${onDarkHero ? "text-saffron" : "text-terracotta"} font-semibold`,
                }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
                {l.hasDropdown && (
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-300 ${productsOpen ? "rotate-180" : ""}`}
                  />
                )}
              </Link>

              {l.hasDropdown && (
                <AnimatePresence>
                  {productsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 4, scale: 0.98 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute left-1/2 top-full -translate-x-1/2 pt-4 w-[560px]"
                    >
                      <div className="relative rounded-3xl border border-white/60 bg-white/70 p-3 shadow-[0_30px_60px_-15px_rgba(62,39,35,0.25)]"
                        style={{ backdropFilter: "saturate(180%) blur(22px)", WebkitBackdropFilter: "saturate(180%) blur(22px)" }}>
                        <div className="grid grid-cols-2 gap-1.5">
                          {CATEGORIES.map((c, i) => (
                            <motion.div
                              key={c.slug}
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.03 }}
                            >
                              <Link
                                to="/products/$category"
                                params={{ category: c.slug }}
                                className="group flex items-center gap-3 rounded-2xl p-2.5 hover:bg-terracotta/10 transition-colors duration-300"
                              >
                                <div className="h-11 w-11 shrink-0 overflow-hidden rounded-xl bg-muted">
                                  <img src={c.hero} alt={c.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                </div>
                                <div className="min-w-0">
                                  <div className="font-display text-sm font-semibold text-clove group-hover:text-terracotta transition-colors truncate">
                                    {c.name}
                                  </div>
                                  <div className="text-[11px] text-clove/55 truncate">{c.tagline}</div>
                                </div>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                        <Link
                          to="/products"
                          className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-clove px-4 py-2.5 text-xs font-semibold uppercase tracking-widest text-white hover:bg-terracotta transition-colors duration-300"
                        >
                          View complete catalogue
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a
            href="tel:+917838263460"
            className={`hidden lg:inline-flex items-center gap-2 text-sm font-medium ${textColor} ${textHover} transition-colors duration-500`}
          >
            <Phone className="h-4 w-4" />
            +91 78382 63460
          </a>
          <Link
            to="/export-inquiries"
            className="btn-magnetic inline-flex items-center rounded-full bg-terracotta px-5 py-2.5 text-sm font-semibold text-white"
          >
            Get a Quote
          </Link>
        </div>

        <button
          className={`md:hidden inline-flex items-center justify-center rounded-full p-2 ${onDarkHero ? "bg-white/15 text-white border border-white/25" : "bg-white/70 text-clove border border-clove/10"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] md:hidden bg-clove/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-0 right-0 bottom-0 w-[85vw] max-w-sm bg-surface p-6 shadow-2xl overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-8">
                <img src={LOGOS.color3x1} alt="Elfurat Spices" className="h-7 w-auto" />
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-black/5 p-2 text-clove"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-2">
                {LINKS.map((l) => (
                  <div key={l.to}>
                    {l.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                          className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-base font-semibold text-clove hover:bg-black/5 transition-colors"
                        >
                          {l.label}
                          <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${mobileProductsOpen ? "rotate-180" : ""}`} />
                        </button>
                        <AnimatePresence>
                          {mobileProductsOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="grid grid-cols-1 gap-1.5 pt-2 pb-4 pl-4">
                                {CATEGORIES.map((c) => (
                                  <Link
                                    key={c.slug}
                                    to="/products/$category"
                                    params={{ category: c.slug }}
                                    className="flex items-center gap-3 rounded-2xl p-2 hover:bg-terracotta/10 transition-colors"
                                  >
                                    <img src={c.hero} alt={c.name} className="h-10 w-10 shrink-0 rounded-xl object-cover" />
                                    <div className="min-w-0">
                                      <div className="text-sm font-semibold text-clove truncate">{c.name}</div>
                                      <div className="text-[10px] text-clove/60 truncate">{c.tagline}</div>
                                    </div>
                                  </Link>
                                ))}
                                <Link
                                  to="/products"
                                  className="mt-2 flex items-center justify-center rounded-xl bg-clove/5 px-4 py-3 text-xs font-semibold uppercase tracking-widest text-clove transition-colors hover:bg-clove/10"
                                >
                                  View all products
                                </Link>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={l.to}
                        className="block rounded-2xl px-4 py-3 text-base font-semibold text-clove hover:bg-black/5 transition-colors"
                        activeProps={{ className: "bg-terracotta/10 text-terracotta" }}
                        activeOptions={{ exact: l.to === "/" }}
                      >
                        {l.label}
                      </Link>
                    )}
                  </div>
                ))}
                
                <Link
                  to="/export-inquiries"
                  className="mt-6 flex items-center justify-center rounded-full bg-terracotta px-5 py-4 text-sm font-semibold text-white transition-transform active:scale-95"
                >
                  Get a Quote
                </Link>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
