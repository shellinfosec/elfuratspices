import { motion } from "framer-motion";
import { Sprout, ShieldCheck, FlaskConical, Package, Ship, BadgeCheck } from "lucide-react";

const STEPS = [
  { icon: Sprout, title: "Sourcing", copy: "Farmer collective selection & seasonal lot booking." },
  { icon: ShieldCheck, title: "Inbound QC", copy: "Sortex, de-stoning, magnetic & metal separation." },
  { icon: FlaskConical, title: "Lab Test", copy: "Moisture, ASTA color, oil %, aflatoxin & pesticide residues." },
  { icon: Package, title: "Packaging", copy: "Lot-coded, nitrogen-flushed export-grade packaging." },
  { icon: Ship, title: "Logistics", copy: "FCL / LCL export with full compliance documentation." },
  { icon: BadgeCheck, title: "Certified Delivery", copy: "Certificate of Analysis, phytosanitary & traceability." },
];

export function QATimeline() {
  return (
    <section className="bg-earth-gradient py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-terracotta">
            Quality Assurance
          </span>
          <h2 className="mt-4 h-fluid-section font-display font-bold">
            Every lot passes through our{" "}
            <span className="text-spice-gradient italic">six-step QA gauntlet.</span>
          </h2>
        </div>

        <div className="mt-14 relative">
          {/* dotted rail */}
          <div className="hidden md:block absolute top-8 left-8 right-8 h-px">
            <svg width="100%" height="2" className="overflow-visible">
              <line
                x1="0" y1="1" x2="100%" y2="1"
                stroke="rgba(191,96,64,0.4)"
                strokeWidth="2"
                strokeDasharray="2 8"
              />
            </svg>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 grid h-16 w-16 place-items-center rounded-full bg-white shadow-float border border-terracotta/20">
                  <s.icon className="h-6 w-6 text-terracotta" />
                </div>
                <div className="mt-4 font-display text-sm font-semibold text-clove uppercase tracking-wider">
                  {i + 1}. {s.title}
                </div>
                <p className="mt-2 text-xs text-clove/60 leading-relaxed">{s.copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
