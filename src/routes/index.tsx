import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, Award, Globe2, Leaf, PackageCheck, Sparkles, Truck } from "lucide-react";
import { motion } from "framer-motion";
import { CERTS, HERO_IMAGES, USPS, waUrl, LOGOS } from "@/lib/brand";
import { CATEGORIES, PRODUCTS } from "@/lib/products";
import { ContactSection } from "@/components/site/ContactSection";
import { Marquee } from "@/components/site/Marquee";
import { Reveal } from "@/components/site/Reveal";
import { ProductCard } from "@/components/site/ProductCard";
import { HeroParallax } from "@/components/site/HeroParallax";
import { DragSlider } from "@/components/site/DragSlider";
import { Image } from "@/components/ui/image";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elfurat Spices - Premium Indian Spices, Globally Exported" },
      {
        name: "description",
        content:
          "From single-origin farms in India to importers worldwide - Elfurat Spices delivers premium whole spices, powders, masala blends, aromatics, and nuts at export scale.",
      },
    ],
  }),
  component: Home,
});

function Home() {

  const featured = [
    "green-cardamom", "saffron", "turmeric-powder", "red-chilli-powder",
    "black-cardamom", "mamra-almonds", "garam-masala", "foxnut", "honey"
  ].map((s) => PRODUCTS.find((p) => p.slug === s)!).filter(Boolean);

  return (
    <>
      {/* ============== HERO - Scroll-linked parallax ============== */}
      <HeroParallax image={HERO_IMAGES.spicesHero} alt="Premium whole Indian spices arranged in brass bowls on textured artisan surface, saffron, cardamom, cloves, cinnamon, dramatic but elegant lighting, shallow depth of field, export-catalog quality" priority={true}>
        <div className="mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-24 pt-40 lg:px-10 lg:pb-32">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 h-fluid-hero font-display font-bold text-white max-w-5xl drop-shadow-[0_4px_20px_rgba(0,0,0,0.35)]"
          >
            The world's pantry,{" "}
            <span className="italic text-saffron">crafted</span> in India.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="mt-6 max-w-2xl text-lg text-white/90 leading-relaxed"
          >
            Elfurat Spices delivers farm-to-fork purity at export scale - premium
            whole spices, cold-milled powders, master-blended masalas, aromatics,
            nuts and pantry staples for retail brands, HORECA and industrial food
            manufacturers in over 40 countries.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/products"
              className="btn-magnetic inline-flex items-center gap-2 rounded-full bg-terracotta px-7 py-4 text-sm font-semibold text-white"
            >
              Explore the Catalogue
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={waUrl("Hello Elfurat Spices, I'd like a bulk export quote.")}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur transition-all duration-500 hover:bg-white hover:text-clove"
            >
              Request an Export Quote
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 border-t border-white/20 pt-8"
          >
            {[
              { n: "40+", l: "Export Countries" },
              { n: "180+", l: "SKUs in Catalogue" },
              { n: "5", l: "Certifications" },
              { n: "24/7", l: "B2B Support" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl md:text-5xl font-bold text-white">{s.n}</div>
                <div className="mt-1 text-xs md:text-sm uppercase tracking-wider text-white/70">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </HeroParallax>



      {/* ============== STORY / FARM TO FORK ============== */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
        <div className="grid gap-16 lg:grid-cols-12 items-end">
          <Reveal className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-terracotta">
              Farm to Fork · Traceable
            </span>
            <h2 className="mt-4 h-fluid-display font-display font-bold">
              A supply chain{" "}
              <span className="text-spice-gradient">obsessed with purity.</span>
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={120}>
            <p className="text-lg text-clove/70 leading-relaxed">
              We control every touchpoint - from selecting farmer collectives across
              India's spice-growing belts, to precision cleaning, cold milling,
              in-house lab testing and export-grade packaging. Every lot ships with
              full traceability, certificates of analysis, and phytosanitary
              documentation.
            </p>
          </Reveal>
        </div>

        {/* BENTO */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5">
          <Reveal className="md:col-span-4 md:row-span-2 relative overflow-hidden rounded-3xl bg-surface shadow-float card-lift min-h-[420px]">
            <Image src={HERO_IMAGES.farmSourcing} alt="Early morning Indian agricultural field with workers selecting fresh produce, cinematic horizon, warm sunlight, authenticity and traceability mood" className="absolute inset-0 h-full w-full object-cover ease-elfurat transition-transform duration-[1200ms] hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-clove/95 via-clove/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-3 py-1.5 text-[10px] uppercase tracking-widest text-white">
                <Leaf className="h-3 w-3 text-saffron" /> Sourcing
              </span>
              <h3 className="mt-4 font-display text-3xl md:text-4xl font-semibold text-white max-w-md">
                Direct partnerships with 200+ farmer collectives.
              </h3>
            </div>
          </Reveal>

          <Reveal className="md:col-span-2 relative overflow-hidden rounded-3xl shadow-float card-lift min-h-[200px]" delay={80}>
            <Image src={HERO_IMAGES.processing} alt="Hygienic spice processing line with stainless-steel equipment, workers in clean uniforms, precision workflow" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-clove/90 to-clove/20" />
            <div className="absolute bottom-0 p-6">
              <div className="text-[10px] uppercase tracking-widest text-saffron mb-1">Processing</div>
              <div className="font-display text-xl text-white font-semibold">HACCP-grade lines</div>
            </div>
          </Reveal>

          <Reveal className="md:col-span-2 relative overflow-hidden rounded-3xl shadow-float card-lift min-h-[200px]" delay={140}>
            <Image src={HERO_IMAGES.packaging} alt="Export-grade food packaging station with sealed pouches and lot coding visible, organized and clean" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-clove/90 to-clove/20" />
            <div className="absolute bottom-0 p-6">
              <div className="text-[10px] uppercase tracking-widest text-saffron mb-1">Packaging</div>
              <div className="font-display text-xl text-white font-semibold">Lot-coded, sealed</div>
            </div>
          </Reveal>

          <Reveal className="md:col-span-3 relative overflow-hidden rounded-3xl shadow-float card-lift min-h-[240px]" delay={200}>
            <Image src={HERO_IMAGES.export} alt="Cargo containers at inland logistics yard, golden-hour light, global dispatch readiness" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-clove/90 via-clove/30 to-transparent" />
            <div className="absolute bottom-0 p-8">
              <div className="text-[10px] uppercase tracking-widest text-saffron mb-1">Global Export</div>
              <div className="font-display text-2xl text-white font-semibold">40+ countries, FCL & LCL ready</div>
            </div>
          </Reveal>

          <Reveal className="md:col-span-3 relative overflow-hidden rounded-3xl bg-spice-gradient shadow-float card-lift min-h-[240px]" delay={260}>
            <div className="pattern-dots absolute inset-0 opacity-30" />
            <div className="relative flex h-full flex-col justify-between p-8">
              <PackageCheck className="h-10 w-10 text-saffron" />
              <div>
                <div className="text-[10px] uppercase tracking-widest text-white/70 mb-1">Compliance</div>
                <div className="font-display text-2xl text-white font-semibold max-w-xs">
                  APEDA · FSSAI · ISO · FDA · Spice Board of India
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============== CATEGORIES ============== */}
      <section className="bg-earth-gradient">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <Reveal className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-terracotta">
              The Catalogue
            </span>
            <h2 className="mt-4 h-fluid-display font-display font-bold">
              Eight categories.{" "}
              <span className="italic text-clove/50">One promise.</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CATEGORIES.map((c, i) => (
              <Reveal key={c.slug} delay={i * 60}>
                <Link
                  to="/products/$category"
                  params={{ category: c.slug }}
                  className="card-lift group block overflow-hidden rounded-3xl bg-surface shadow-float h-full"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#f2ece4]">
                    <Image
                      src={c.hero}
                      alt={c.name}
                      loading="lazy"
                      className="h-full w-full object-cover ease-elfurat transition-transform duration-[900ms] group-hover:scale-[1.08]"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-semibold text-clove">{c.name}</h3>
                    <p className="mt-1 text-sm text-clove/60 line-clamp-2">{c.tagline}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-terracotta">
                      View range <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============== FEATURED PRODUCTS ============== */}
      <section className="py-24 lg:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-terracotta">
              Signature SKUs
            </span>
            <h2 className="mt-4 h-fluid-display font-display font-bold max-w-2xl">
              The best of every field.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full border border-clove/15 bg-white px-6 py-3 text-sm font-semibold text-clove ease-elfurat transition-all duration-500 hover:bg-clove hover:text-white"
            >
              Full catalogue <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="pl-6 lg:pl-[max(2.5rem,calc((100vw-80rem)/2))] pb-10">
          <DragSlider
            items={featured.map((p) => (
              <ProductCard p={p} key={p.slug} />
            ))}
          />
        </div>
      </section>

      {/* ============== VISUAL STRIP - modern drag slider ============== */}
      <section className="pb-8 overflow-hidden">
        <div className="pl-0">
          <DragSlider
            slideClass="basis-[70%] sm:basis-[42%] md:basis-[30%] lg:basis-[22%]"
            items={[
              HERO_IMAGES.wholeSpicesA, HERO_IMAGES.wholeSpicesB, HERO_IMAGES.wholeSpicesC, HERO_IMAGES.wholeSpicesD,
              HERO_IMAGES.turmericVisual, HERO_IMAGES.chilliVisual, HERO_IMAGES.corianderVisual, HERO_IMAGES.masalaVisual,
            ].map((src, i) => (
              <div key={i} className="relative overflow-hidden rounded-3xl aspect-[4/5] bg-muted shadow-float mr-3 md:mr-6 lg:mr-8">
                <Image src={src} alt="Elfurat product" loading="lazy" className="h-full w-full object-cover ease-elfurat transition-transform duration-[900ms] hover:scale-110" />
              </div>
            ))}
          />
        </div>
      </section>



      {/* ============== AROMATICS / NUTS / MAKHANA SPLIT ============== */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            { title: "Aromatics", img: HERO_IMAGES.aromaticsA, copy: "Bay leaves, saffron, kokum, asafoetida and rare botanicals from indigenous belts.", to: "aromatics" },
            { title: "Premium Nuts", img: HERO_IMAGES.nutsA, copy: "Mamra almonds, W180 cashews, Kashmiri walnuts and jumbo pistachios.", to: "nuts" },
            { title: "Makhana", img: HERO_IMAGES.makhanaA, copy: "Bihar-sourced fox nuts, grade-tested for uniform pop and shelf life.", to: "makhana" },
          ].map((b, i) => (
            <Reveal key={b.title} delay={i * 100}>
              <Link to="/products/$category" params={{ category: b.to }} className="card-lift group relative block overflow-hidden rounded-3xl min-h-[420px]">
                <Image src={b.img} alt={b.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover ease-elfurat transition-transform duration-[1200ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-clove via-clove/40 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="font-display text-3xl font-semibold text-white">{b.title}</h3>
                  <p className="mt-2 text-sm text-white/75 max-w-xs">{b.copy}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-saffron">
                    Explore <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============== INFRASTRUCTURE / FACILITY ============== */}
      <section className="bg-clove text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-saffron">
              Infrastructure
            </span>
            <h2 className="mt-4 h-fluid-display font-display font-bold text-white max-w-3xl">
              Warehousing, milling & QC - <span className="italic text-saffron/90">purpose built for export.</span>
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[HERO_IMAGES.warehouse1, HERO_IMAGES.warehouse2, HERO_IMAGES.warehouse3].map((src, i) => (
              <Reveal key={src} delay={i * 100} className="relative overflow-hidden rounded-3xl aspect-[4/5]">
                <Image src={src} alt="Elfurat facility" loading="lazy" className="absolute inset-0 h-full w-full object-cover ease-elfurat transition-transform duration-[1200ms] hover:scale-110" />
              </Reveal>
            ))}
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-4">
            {[
              { icon: Leaf, t: "Farmer Collectives", d: "Direct sourcing from 200+ farms across India" },
              { icon: Award, t: "In-house QC Labs", d: "Every lot lab-tested for purity, moisture, ASTA color" },
              { icon: Globe2, t: "40+ Countries", d: "US, UK, EU, GCC, ASEAN, Africa export corridors" },
              { icon: Truck, t: "FCL & LCL Ready", d: "Bulk 25kg sacks to consumer-ready retail SKUs" },
            ].map((f) => (
              <div key={f.t} className="rounded-3xl bg-white/5 backdrop-blur p-6 border border-white/10">
                <f.icon className="h-6 w-6 text-saffron mb-4" />
                <div className="font-display text-lg font-semibold text-white">{f.t}</div>
                <div className="mt-2 text-sm text-white/60">{f.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== CERTIFICATIONS MARQUEE ============== */}
      <section className="py-14 bg-earth-gradient">
        <div className="mb-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-terracotta">
            Certifications & Compliance
          </span>
        </div>
        <Marquee
          speed="slow"
          items={CERTS.concat(CERTS).map((c, i) => (
            <div key={i} className="flex items-center gap-3 rounded-full bg-white px-6 py-3 shadow-float">
              <Image src={c.src} alt={c.name} className="h-8 w-auto" />
              <span className="font-display font-semibold text-clove">{c.name}</span>
            </div>
          ))}
        />
      </section>

      {/* ============== CTA ============== */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-spice-gradient p-10 md:p-16 shadow-deep">
            <div className="pattern-dots absolute inset-0 opacity-25" />
            <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <h2 className="h-fluid-section font-display font-bold text-white">
                  Ready to build your brand with premium Indian spices?
                </h2>
                <p className="mt-4 text-white/80 text-lg">
                  Bulk export, private label, and contract manufacturing - our B2B
                  team ships samples within 72 hours.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/export-inquiries"
                  className="btn-magnetic inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-clove"
                >
                  Start an Inquiry <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={waUrl("Hello Elfurat Spices, I'd like to request samples.")}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 text-sm font-semibold text-white ease-elfurat transition duration-500 hover:bg-white/10"
                >
                  WhatsApp us
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ============== CONTACT FORM ============== */}
      <ContactSection />
    </>
  );
}
