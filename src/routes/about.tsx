import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CERTS, HERO_IMAGES } from "@/lib/brand";
import { Reveal } from "@/components/site/Reveal";
import { Image } from "@/components/ui/image";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Elfurat Spices - Global Indian Spice Exporter" },
      { name: "description", content: "Meet Elfurat Spices - a globally trusted exporter of premium Indian spices, aromatics, nuts and staples, with certified sourcing, processing and packaging infrastructure." },
      { property: "og:title", content: "About Elfurat Spices" },
      { property: "og:description", content: "A global Indian spice exporter with certified sourcing, processing and packaging infrastructure." },
      { property: "og:image", content: HERO_IMAGES.facility1 },
    ],
  }),
  component: About,
});

const TIMELINE = [
  { year: "Sourcing", title: "Farmer collectives across India", copy: "We partner with 200+ farmer collectives across Kerala, Gujarat, Rajasthan, Kashmir, and the North-East to secure single-origin lots at peak season.", image: HERO_IMAGES.farmSourcing },
  { year: "Cleaning", title: "Sortex + de-stoning + magnetic separation", copy: "Every incoming lot passes through gravity separators, sortex color grading, and metal detectors before entering our processing floor.", image: HERO_IMAGES.fresh },
  { year: "Processing", title: "Cold-milling to preserve essential oils", copy: "Cold-milling stations lock in volatile oil content that hot mills destroy - the difference between a shelf spice and an export-grade spice.", image: HERO_IMAGES.processing },
  { year: "Quality Control", title: "In-house lab testing for every lot", copy: "Moisture, ASTA color, volatile oil %, aflatoxin, pesticide residues - every lot ships with a full Certificate of Analysis.", image: HERO_IMAGES.facility2 },
  { year: "Packaging", title: "Export-grade lot-coded packaging", copy: "Bulk 25kg PP sacks with inner liners, nitrogen-flushed for oxygen-sensitive powders, and consumer-ready retail SKUs on demand.", image: HERO_IMAGES.packaging },
  { year: "Logistics", title: "40+ countries, FCL & LCL ready", copy: "Direct partnerships with global freight forwarders; full documentation for APEDA, FSSAI, phytosanitary, and destination-country compliance.", image: HERO_IMAGES.export },
];

function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="pattern-dots absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid gap-12 lg:grid-cols-12 items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-terracotta">
                About Elfurat Spices
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-4 h-fluid-hero font-display font-bold">
                Built for <span className="text-spice-gradient italic">purity, scale, and trust.</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-2xl text-lg text-clove/70 leading-relaxed">
                Elfurat Spices is a Delhi-headquartered global exporter of premium
                Indian FMCG ingredients - from farm-fresh whole spices to
                master-blended masalas, from Kashmiri saffron to Bihari fox nuts.
                We operate as a single accountable partner from field to freight,
                serving retail brands, HORECA groups, and industrial food
                manufacturers across 40+ countries.
              </p>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-5" delay={150}>
            <div className="relative overflow-hidden rounded-3xl aspect-[4/5] shadow-deep">
              <Image src={HERO_IMAGES.farmSourcing} alt="Farm sourcing" priority={true} className="h-full w-full object-cover ken-burns" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { t: "Authentic", d: "Single-origin, single-lot traceability. No blending across regions unless a client requests it." },
            { t: "Certified", d: "APEDA, FSSAI, ISO 22000, FDA, and Spice Board of India registered - audit-ready at all times." },
            { t: "Global", d: "Export corridors into the US, UK, EU, GCC, ASEAN and Africa - with local partner networks in each." },
          ].map((p) => (
            <Reveal key={p.t}>
              <div className="rounded-3xl bg-surface p-8 shadow-float card-lift h-full">
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-terracotta">Pillar</div>
                <h3 className="mt-3 font-display text-2xl font-semibold text-clove">{p.t}</h3>
                <p className="mt-3 text-clove/70 leading-relaxed">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Timeline - curved dotted path + images per step */}
      <section className="relative bg-clove text-white py-24 lg:py-32 overflow-hidden">
        <div className="pattern-dots absolute inset-0 opacity-20" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-saffron">
              Our Process
            </span>
            <h2 className="mt-4 h-fluid-display font-display font-bold text-white max-w-3xl">
              Six stages, one accountable partner.
            </h2>
          </Reveal>

          <div className="mt-20 relative">
            {/* Center dashed line */}
            <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-0.5 -translate-x-1/2 border-l-2 border-dashed border-saffron/50" />

            <div className="space-y-16 md:space-y-24">
              {TIMELINE.map((t, i) => {
                const right = i % 2 === 1; // if right, text is on the left and image is on the right
                return (
                  <motion.div
                    key={t.year}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative grid gap-8 md:grid-cols-12 items-center"
                  >
                    {/* LEFT COLUMN */}
                    <div className={`md:col-span-5 ${right ? "md:text-right" : ""}`}>
                      {right ? (
                        <>
                          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-saffron">{t.year}</div>
                          <h3 className="mt-2 font-display text-2xl md:text-3xl font-semibold text-white">{t.title}</h3>
                          <p className="mt-3 text-white/70 leading-relaxed">{t.copy}</p>
                        </>
                      ) : (
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 200, damping: 20 }}
                          className="relative overflow-hidden rounded-3xl aspect-[4/3] shadow-deep border border-white/10"
                        >
                          <Image src={t.image} alt={t.title} loading="lazy" className="h-full w-full object-cover ease-elfurat transition-transform duration-[1200ms] hover:scale-110" />
                          <div className="absolute inset-0 bg-gradient-to-t from-clove/40 to-transparent" />
                          <div className="absolute top-4 left-4 h-10 w-10 grid place-items-center rounded-full bg-saffron text-clove font-display font-bold shadow-float">
                            {i + 1}
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* CENTER DOT */}
                    <div className="hidden md:flex md:col-span-2 items-center justify-center relative z-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                        className="h-4 w-4 rounded-full bg-saffron ring-4 ring-clove border-2 border-saffron shadow-[0_0_20px_rgba(255,193,7,0.6)]"
                      />
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className={`md:col-span-5 ${!right ? "md:text-left" : ""}`}>
                      {!right ? (
                        <>
                          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-saffron">{t.year}</div>
                          <h3 className="mt-2 font-display text-2xl md:text-3xl font-semibold text-white">{t.title}</h3>
                          <p className="mt-3 text-white/70 leading-relaxed">{t.copy}</p>
                        </>
                      ) : (
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 200, damping: 20 }}
                          className="relative overflow-hidden rounded-3xl aspect-[4/3] shadow-deep border border-white/10"
                        >
                          <Image src={t.image} alt={t.title} loading="lazy" className="h-full w-full object-cover ease-elfurat transition-transform duration-[1200ms] hover:scale-110" />
                          <div className="absolute inset-0 bg-gradient-to-t from-clove/40 to-transparent" />
                          <div className="absolute top-4 right-4 h-10 w-10 grid place-items-center rounded-full bg-saffron text-clove font-display font-bold shadow-float">
                            {i + 1}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Facilities grid */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-terracotta">
            Our Infrastructure
          </span>
          <h2 className="mt-4 h-fluid-display font-display font-bold max-w-3xl">
            Warehousing, milling, and packing - under one certified roof.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[HERO_IMAGES.warehouse1, HERO_IMAGES.warehouse2, HERO_IMAGES.warehouse3, HERO_IMAGES.facility1, HERO_IMAGES.facility2, HERO_IMAGES.processing, HERO_IMAGES.packaging, HERO_IMAGES.export]
            .map((src, i) => (
              <div key={i} className="relative overflow-hidden rounded-3xl aspect-[4/5] shadow-float card-lift">
                <Image src={src} alt="Facility" loading="lazy" className="h-full w-full object-cover ease-elfurat transition-transform duration-[1200ms] hover:scale-110" />
              </div>
            ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-earth-gradient py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <h2 className="h-fluid-display font-display font-bold max-w-3xl">
              Compliant with the world's{" "}
              <span className="text-spice-gradient italic">strictest food standards.</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-5">
            {CERTS.map((c) => (
              <Reveal key={c.name}>
                <div className="rounded-3xl bg-white p-8 shadow-float card-lift flex flex-col items-center text-center gap-4">
                  <Image src={c.src} alt={c.name} className="h-16 w-auto object-contain" />
                  <div className="font-display font-semibold text-clove">{c.name}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
