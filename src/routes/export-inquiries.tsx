import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Globe2, MessageCircle, Package, Send, ShieldCheck, Ship, Truck } from "lucide-react";
import { BRAND, CERTS, HERO_IMAGES, waUrl } from "@/lib/brand";
import { CATEGORIES } from "@/lib/products";
import { Reveal } from "@/components/site/Reveal";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const Route = createFileRoute("/export-inquiries")({
  head: () => ({
    meta: [
      { title: "Export Inquiries - B2B & Bulk Orders | Elfurat Spices" },
      { name: "description", content: "Submit an export inquiry for bulk B2B orders, private label, and contract manufacturing. Global shipping, certifications, and 72-hour sample dispatch." },
      { property: "og:title", content: "Elfurat Spices - Export & B2B Inquiries" },
      { property: "og:description", content: "Bulk orders, private label, contract manufacturing." },
      { property: "og:image", content: "https://elfuratspices.com/assets/04D.webp" },
      { property: "og:image:width", content: "1920" },
      { property: "og:image:height", content: "1080" },
      { property: "og:url", content: "https://elfuratspices.com/export-inquiries" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://elfuratspices.com/assets/04D.webp" },
    ],
  }),
  component: ExportPage,
});

function ExportPage() {
  const [form, setForm] = useState({
    name: "", company: "", country: "", email: "", phone: "",
    category: "whole-spices", volume: "1 MT", details: "",
  });
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const cat = CATEGORIES.find((c) => c.slug === form.category)?.name ?? form.category;
    const msg = `Hello Elfurat Spices, export inquiry:\n\nName: ${form.name}\nCompany: ${form.company}\nCountry: ${form.country}\nEmail: ${form.email}\nPhone: ${form.phone}\nCategory: ${cat}\nEstimated Volume: ${form.volume}\n\nDetails:\n${form.details}`;
    window.open(waUrl(msg), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMAGES.export} alt="Global export" className="h-full w-full object-cover ken-burns" />
          <div className="absolute inset-0 bg-clove/50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 text-white">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-saffron">
              B2B · Bulk · Private Label
            </span>
            <h1 className="mt-4 h-fluid-hero font-display font-bold max-w-4xl text-white drop-shadow-md">
              Export inquiries, <span className="italic text-saffron">globally handled.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/80">
              Send us your requirement - category, volume, packaging spec, and
              destination - and our export desk responds within 24 hours with a
              detailed quotation, samples timeline, and documentation package.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 -mt-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Globe2, t: "40+ Countries" },
            { icon: Ship, t: "FCL & LCL Ready" },
            { icon: ShieldCheck, t: "Full Documentation" },
            { icon: Package, t: "Private Label" },
          ].map((f) => (
            <Reveal key={f.t}>
              <div className="rounded-3xl bg-white p-6 shadow-deep flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-terracotta/10 text-terracotta grid place-items-center">
                  <f.icon className="h-6 w-6" />
                </div>
                <div className="font-display font-semibold text-clove">{f.t}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Form */}
          <Reveal className="lg:col-span-7">
            <form onSubmit={onSubmit} className="rounded-3xl bg-surface p-8 md:p-10 shadow-deep">
              <h2 className="font-display text-2xl md:text-3xl font-bold">Submit an export inquiry</h2>
              <p className="mt-2 text-clove/60 text-sm">
                Your inquiry routes directly to our sales team via WhatsApp for the fastest response.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <Field label="Full name" required>
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="input" />
                </Field>
                <Field label="Company" required>
                  <input required value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="input" />
                </Field>
                <Field label="Country" required>
                  <input required value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} className="input" />
                </Field>
                <Field label="Business email" required>
                  <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="input" />
                </Field>
                <Field label="Phone / WhatsApp">
                  <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="input" />
                </Field>
                <Field label="Category of interest">
                  <Select value={form.category} onValueChange={(val) => setForm({ ...form, category: val })}>
                    <SelectTrigger className="input flex h-[46px] w-full items-center justify-between">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {CATEGORIES.map((c) => (
                        <SelectItem key={c.slug} value={c.slug}>{c.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
                <Field label="Estimated volume">
                  <Select value={form.volume} onValueChange={(val) => setForm({ ...form, volume: val })}>
                    <SelectTrigger className="input flex h-[46px] w-full items-center justify-between">
                      <SelectValue placeholder="Select volume" />
                    </SelectTrigger>
                    <SelectContent>
                      {["500 kg", "1 MT", "5 MT", "10 MT", "1 FCL (20ft)", "1 FCL (40ft)", "Multiple FCL / Contract"].map((v) => (
                        <SelectItem key={v} value={v}>{v}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
                <Field label="Requirement details" className="sm:col-span-2">
                  <textarea rows={5} value={form.details} onChange={(e) => setForm({ ...form, details: e.target.value })} className="input resize-none" placeholder="Pack size, private label, certifications required, incoterm, destination port…" />
                </Field>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button type="submit" className="btn-magnetic inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-terracotta px-7 py-4 text-sm font-semibold text-white">
                  <Send className="h-4 w-4" />
                  {sent ? "Reopen WhatsApp" : "Send inquiry via WhatsApp"}
                </button>
                <a href={`mailto:${BRAND.emails[0]}`} className="inline-flex items-center justify-center gap-2 rounded-full border border-clove/15 bg-white px-7 py-4 text-sm font-semibold text-clove ease-elfurat transition duration-500 hover:bg-clove hover:text-white">
                  Email instead
                </a>
              </div>
            </form>
          </Reveal>

          {/* Side info */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <div className="rounded-3xl bg-spice-gradient p-8 text-white shadow-deep">
                <MessageCircle className="h-8 w-8 text-saffron" />
                <h3 className="mt-4 font-display text-2xl font-semibold">72-hour sample dispatch</h3>
                <p className="mt-2 text-white/85 text-sm">
                  On confirmation, we dispatch a curated sample kit via DHL/FedEx to your address, along with a full Certificate of Analysis.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-3xl bg-surface p-8 shadow-float">
                <Truck className="h-8 w-8 text-terracotta" />
                <h3 className="mt-4 font-display text-2xl font-semibold text-clove">Documentation package</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-clove/70">
                  <li>• Certificate of Analysis (COA)</li>
                  <li>• Phytosanitary Certificate</li>
                  <li>• Certificate of Origin</li>
                  <li>• Fumigation & MSDS on request</li>
                  <li>• Destination-country compliance docs</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="rounded-3xl bg-clove p-8 text-white shadow-float">
                <h3 className="font-display text-xl font-semibold text-white">Certifications</h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  {CERTS.map((c) => (
                    <span key={c.name} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs">
                      <img src={c.src} alt={c.name} className="h-4 w-auto" /> {c.name}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <style>{`
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
      `}</style>
    </>
  );
}

function Field({ label, required, children, className = "" }: { label: string; required?: boolean; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-xs font-semibold uppercase tracking-wider text-clove/60">
        {label} {required && <span className="text-terracotta">*</span>}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
