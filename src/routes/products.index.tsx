import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X, SlidersHorizontal, Check } from "lucide-react";
import { CATEGORIES, PRODUCTS } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";
import { Reveal } from "@/components/site/Reveal";
import { HERO_IMAGES } from "@/lib/brand";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products - Complete Catalogue | Elfurat Spices" },
      { name: "description", content: "Browse the complete Elfurat Spices catalogue - 180+ SKUs across whole spices, ground powders, masala blends, aromatics, nuts, dried fruits, makhana and dairy staples." },
      { property: "og:title", content: "Elfurat Spices - Complete Product Catalogue" },
      { property: "og:description", content: "180+ export-grade SKUs across eight categories." },
      { property: "og:image", content: HERO_IMAGES.wholeSpicesA },
    ],
  }),
  component: ProductsIndex,
});

function ProductsIndex() {
  const [cat, setCat] = useState<string>("all");
  const [q, setQ] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const activeCatName =
    cat === "all" ? "All Categories" : CATEGORIES.find((c) => c.slug === cat)?.name ?? "All";


  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const okCat = cat === "all" || p.category === cat;
      const okQ =
        !q.trim() ||
        p.name.toLowerCase().includes(q.toLowerCase()) ||
        p.origin.toLowerCase().includes(q.toLowerCase());
      return okCat && okQ;
    });
  }, [cat, q]);

  return (
    <>
      <section className="relative pt-32 pb-14 lg:pt-40 overflow-hidden">
        <div className="pattern-dots absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-terracotta">Catalogue</span>
            <h1 className="mt-4 h-fluid-hero font-display font-bold max-w-4xl">
              The complete <span className="text-spice-gradient italic">Elfurat</span> range.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-clove/70 leading-relaxed">
              {PRODUCTS.length} export-grade SKUs across {CATEGORIES.length} categories.
              Filter by category or search by name to build your inquiry.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Fixed Fi-ter Button on extreme left */}
      <div className="fixed left-0 top-[120px] z-40 flex items-center">
        <button
          onClick={() => setDrawerOpen(true)}
          className="group flex items-center rounded-r-2xl bg-clove text-white shadow-float transition-all duration-500 hover:pr-5"
          aria-label="Open filters"
        >
          <div className="h-14 w-14 grid place-items-center">
            <SlidersHorizontal className="h-5 w-5" />
          </div>
          <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-semibold uppercase tracking-widest opacity-0 transition-all duration-500 group-hover:max-w-xs group-hover:opacity-100">
            Filter
          </span>
        </button>
      </div>

      {/* Off-canvas drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setDrawerOpen(false)}
              className="fixed inset-0 z-[60] bg-clove/60 backdrop-blur-sm"
            />
            <motion.aside
              key="drawer"
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 32 }}
              className="fixed right-0 top-0 bottom-0 z-[61] w-full sm:w-[420px] bg-background shadow-deep flex flex-col"
              role="dialog"
              aria-label="Filter products"
            >
              <div className="flex flex-col gap-4 p-6 border-b border-clove/10">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.3em] text-terracotta">Filter</div>
                    <h2 className="font-display text-2xl font-bold mt-1">Search & Categories</h2>
                  </div>
                  <button
                    onClick={() => setDrawerOpen(false)}
                    aria-label="Close filter"
                    className="h-10 w-10 grid place-items-center rounded-full bg-white border border-clove/10 hover:bg-muted transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                {/* Live Search inside drawer */}
                <div className="relative w-full">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-clove/40" />
                  <input
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    placeholder="Search products…"
                    className="w-full rounded-full bg-white border border-clove/10 pl-11 pr-10 py-3 text-sm text-clove placeholder:text-clove/40 focus:outline-none focus:ring-2 focus:ring-terracotta/40"
                  />
                  {q && (
                    <button
                      onClick={() => setQ("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-clove/50 hover:text-clove"
                      aria-label="Clear search"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
                <div className="text-xs font-medium text-clove/60">
                  Showing {filtered.length} of {PRODUCTS.length} products
                </div>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-1">
                {[{ slug: "all", name: "All Categories", count: PRODUCTS.length } as const]
                  .concat(
                    CATEGORIES.map((c) => ({
                      slug: c.slug,
                      name: c.name,
                      count: PRODUCTS.filter((p) => p.category === c.slug).length,
                    })) as any
                  )
                  .map((c) => {
                    const active = cat === c.slug;
                    return (
                      <button
                        key={c.slug}
                        onClick={() => { setCat(c.slug); setDrawerOpen(false); }}
                        className={`w-full flex items-center justify-between rounded-2xl px-4 py-3.5 text-left text-sm font-medium transition-colors duration-300 ${active ? "bg-terracotta text-white" : "hover:bg-white text-clove"
                          }`}
                      >
                        <span className="flex items-center gap-3">
                          {active && <Check className="h-4 w-4" />}
                          {c.name}
                        </span>
                        <span className={`text-xs ${active ? "text-white/80" : "text-clove/50"}`}>
                          {c.count}
                        </span>
                      </button>
                    );
                  })}
              </div>
              <div className="p-6 border-t border-clove/10 flex gap-3">
                <button
                  onClick={() => { setCat("all"); setQ(""); }}
                  className="flex-1 rounded-full border border-clove/15 py-3 text-sm font-semibold text-clove hover:bg-white"
                >
                  Reset
                </button>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="flex-1 rounded-full bg-clove py-3 text-sm font-semibold text-white"
                >
                  Show {filtered.length}
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-14">
        {filtered.length === 0 ? (
          <div className="rounded-3xl bg-white p-16 text-center shadow-float">
            <p className="text-clove/70">No products match your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filtered.map((p, i) => (
              <Reveal key={p.slug} delay={Math.min(i * 30, 300)}>
                <ProductCard p={p} />
              </Reveal>
            ))}
          </div>
        )}
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <Reveal>
          <h2 className="h-fluid-section font-display font-bold mb-8">Browse by category</h2>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {CATEGORIES.map((c) => (
            <Link key={c.slug} to="/products/$category" params={{ category: c.slug }}
              className="card-lift group relative overflow-hidden rounded-3xl aspect-[4/5]">
              <img src={c.hero} alt={c.name} loading="lazy" className="h-full w-full object-cover ease-elfurat transition-transform duration-[900ms] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-clove/95 via-clove/30 to-transparent" />
              <div className="absolute bottom-0 p-5">
                <div className="font-display text-xl font-semibold text-white">{c.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
