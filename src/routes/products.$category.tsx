import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { CATEGORIES, getCategory, productsByCategory } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/products/$category")({
  loader: ({ params }) => {
    const c = getCategory(params.category);
    if (!c) throw notFound();
    return { c };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Category - Elfurat Spices" }, { name: "robots", content: "noindex" }] };
    const { c } = loaderData;
    return {
      meta: [
        { title: `${c.name} - Elfurat Spices` },
        { name: "description", content: `${c.tagline} ${c.description}` },
        { property: "og:title", content: `${c.name} - Elfurat Spices` },
        { property: "og:description", content: c.tagline },
        { property: "og:image", content: c.hero },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center pt-24 px-6">
      <div className="text-center">
        <h1 className="font-display text-4xl font-bold">Category not found</h1>
        <Link to="/products" className="mt-6 inline-block text-terracotta font-semibold">← Back to catalogue</Link>
      </div>
    </div>
  ),
  component: CategoryPage,
});

function CategoryPage() {
  const { c } = Route.useLoaderData();
  const items = productsByCategory(c.slug);

  return (
    <>
      <section className="relative pt-32 pb-16 lg:pt-40 overflow-hidden">
        <div className="absolute inset-0">
          <img src={c.hero} alt={c.name} className="ken-burns h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-clove/70 via-clove/60 to-background" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <Link to="/products" className="inline-flex items-center gap-2 text-white/80 text-sm hover:text-white">
              <ArrowLeft className="h-4 w-4" /> All products
            </Link>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 h-fluid-hero font-display font-bold text-white max-w-4xl">{c.name}</h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-lg text-white/85 leading-relaxed">{c.description}</p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-14">
        {items.length === 0 ? (
          <p className="text-clove/70">Products coming soon.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {items.map((p, i) => (
              <Reveal key={p.slug} delay={i * 40}>
                <ProductCard p={p} />
              </Reveal>
            ))}
          </div>
        )}
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-14">
        <Reveal>
          <h2 className="h-fluid-section font-display font-bold mb-8">Other categories</h2>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {CATEGORIES.filter((x) => x.slug !== c.slug).map((x) => (
            <Link key={x.slug} to="/products/$category" params={{ category: x.slug }}
              className="card-lift group relative overflow-hidden rounded-3xl aspect-[4/5]">
              <img src={x.hero} alt={x.name} loading="lazy" className="h-full w-full object-cover ease-elfurat transition-transform duration-[900ms] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-clove/95 via-clove/30 to-transparent" />
              <div className="absolute bottom-0 p-5">
                <div className="font-display text-lg font-semibold text-white">{x.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
