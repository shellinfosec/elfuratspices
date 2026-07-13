import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { getCategory, getProduct, productsByCategory } from "@/lib/products";
import { BRAND, waUrl, LOGOS } from "@/lib/brand";
import { ProductCard } from "@/components/site/ProductCard";
import { Reveal } from "@/components/site/Reveal";
import { ZoomImage } from "@/components/site/ZoomImage";
import { QATimeline } from "@/components/site/QATimeline";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const p = getProduct(params.slug);
    if (!p) throw notFound();
    const cat = getCategory(p.category)!;
    return { p, cat };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Product - Elfurat Spices" }, { name: "robots", content: "noindex" }] };
    const { p } = loaderData;
    return {
      meta: [
        { title: `${p.name} - ${p.origin} | Elfurat Spices` },
        { name: "description", content: p.description },
        { property: "og:title", content: `${p.name} - Elfurat Spices` },
        { property: "og:description", content: p.description },
        { property: "og:image", content: p.image },
        { property: "og:type", content: "product" },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: p.name,
            image: p.image,
            description: p.description,
            category: loaderData.cat.name,
            brand: { "@type": "Brand", name: "Elfurat Spices" },
            countryOfOrigin: p.origin,
            offers: {
              "@type": "AggregateOffer",
              availability: "https://schema.org/InStock",
              priceCurrency: "USD",
              priceSpecification: { "@type": "PriceSpecification", eligibleQuantity: { "@type": "QuantitativeValue", minValue: p.moq } },
              seller: { "@type": "Organization", name: "Elfurat Spices" },
            },
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center pt-24 px-6">
      <div className="text-center">
        <h1 className="font-display text-4xl font-bold">Product not found</h1>
        <Link to="/products" className="mt-6 inline-block text-terracotta font-semibold">← Back to catalogue</Link>
      </div>
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { p, cat } = Route.useLoaderData();
  const related = productsByCategory(p.category).filter((x) => x.slug !== p.slug).slice(0, 4);
  const inquiryMsg = `Hello Elfurat Spices, I'd like to inquire about ${p.name} (${cat.name}). Please share export pricing, MOQ, and packaging options.`;

  return (
    <>
      <section className="pt-32 lg:pt-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <Link to="/products/$category" params={{ category: cat.slug }} className="inline-flex items-center gap-2 text-sm text-clove/60 hover:text-terracotta">
              <ArrowLeft className="h-4 w-4" /> {cat.name}
            </Link>
          </Reveal>

          <div className="mt-8 grid gap-12 lg:grid-cols-12">
            {/* Image */}
            <div className="lg:col-span-6">
              <Reveal>
                <div className="sticky top-32">
                  <ZoomImage src={p.image} alt={p.name} className="aspect-[4/5] shadow-deep" />
                </div>
              </Reveal>
            </div>

            {/* Info */}
            <div className="lg:col-span-6">
              <Reveal>
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-terracotta">
                  {cat.name} · {p.form}
                </span>
                <h1 className="mt-3 h-fluid-display font-display font-bold">{p.name}</h1>
                <p className="mt-2 text-clove/60 text-sm">Origin: {p.origin}</p>
              </Reveal>

              <Reveal delay={100}>
                <p className="mt-6 text-lg text-clove/75 leading-relaxed">{p.description}</p>
              </Reveal>

              <Reveal delay={150}>
                <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {p.highlights.map((h: string) => (
                    <li key={h} className="flex items-start gap-2 rounded-2xl bg-surface p-4 shadow-float">
                      <CheckCircle2 className="h-5 w-5 text-bayleaf shrink-0 mt-0.5" />
                      <span className="text-sm text-clove/80">{h}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={200}>
                <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <Spec label="Form" value={p.form} />
                  <Spec label="Shelf Life" value={p.shelfLife} />
                  <Spec label="MOQ" value={p.moq} />
                </div>
              </Reveal>

              <Reveal delay={240}>
                <div className="mt-6 rounded-3xl bg-surface p-6 shadow-float">
                  <div className="text-xs font-semibold uppercase tracking-[0.3em] text-clove/50 mb-3">
                    Available Pack Sizes
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {p.packSizes.map((s: string) => (
                      <span key={s} className="rounded-full bg-muted px-4 py-2 text-sm font-medium text-clove">{s}</span>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={280}>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href={waUrl(inquiryMsg)}
                    target="_blank" rel="noopener noreferrer"
                    className="btn-magnetic inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[#25D366] bg-white px-7 py-4 text-sm font-semibold text-[#25D366] transition-all hover:bg-black/5"
                  >
                    <img src={LOGOS.whatsapp} alt="WhatsApp" className="h-5 w-5" />
                    Inquire about {p.name} via WhatsApp
                  </a>
                  <a
                    href={`tel:${BRAND.phones[0].replace(/\s/g, "")}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-clove/15 bg-white px-7 py-4 text-sm font-semibold text-clove ease-elfurat transition duration-500 hover:bg-clove hover:text-white"
                  >
                    <Phone className="h-4 w-4" />
                    Call sales
                  </a>
                </div>
              </Reveal>

              <Reveal delay={320}>
                <div className="mt-6 flex items-start gap-3 text-xs text-clove/60">
                  <ShieldCheck className="h-4 w-4 shrink-0 mt-0.5 text-bayleaf" />
                  Every lot ships with a Certificate of Analysis, phytosanitary
                  documentation, and lot-code traceability.
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 mt-8">
          <Reveal>
            <h2 className="h-fluid-section font-display font-bold mb-10">You may also like</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={i * 60}>
                <ProductCard p={r} />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <QATimeline />
    </>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-surface p-4 shadow-float">
      <div className="text-[10px] font-semibold uppercase tracking-widest text-clove/50">{label}</div>
      <div className="mt-1 font-display font-semibold text-clove text-sm">{value}</div>
    </div>
  );
}
