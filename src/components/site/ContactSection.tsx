import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { BRAND, waUrl, LOGOS } from "@/lib/brand";
import { CATEGORIES } from "@/lib/products";
import { Reveal } from "@/components/site/Reveal";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Image } from "@/components/ui/image";

export function ContactSection() {
  const [form, setForm] = useState({
    name: "", company: "", country: "", email: "", phone: "",
    category: "whole-spices", volume: "1 MT", details: "",
  });
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const cat = CATEGORIES.find((c) => c.slug === form.category)?.name ?? form.category;
    const msg = `Hello Elfurat Spices, inquiry:\n\nName: ${form.name}\nCompany: ${form.company}\nCountry: ${form.country}\nEmail: ${form.email}\nPhone: ${form.phone}\nCategory: ${cat}\nEstimated Volume: ${form.volume}\n\nDetails:\n${form.details}`;
    window.open(waUrl(msg), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <section className="py-24 lg:py-32 overflow-hidden bg-surface relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 items-stretch">
          
          {/* Left Side: Text and Logo */}
          <div className="flex flex-col justify-between">
            <Reveal>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-clove">Contact Us</h2>
              <h3 className="mt-4 text-2xl font-semibold text-terracotta">Get in touch with our team.</h3>
              <p className="mt-6 text-lg text-clove/70">
                Fill out the form below and our export specialists will get back to you within 4 business hours.
              </p>
            </Reveal>

            <Reveal delay={200} className="mt-12 lg:mt-auto flex-1 flex flex-col justify-end items-center">
              {/* Image that dynamically stretches/fills the space left */}
              <div className="w-full flex items-center justify-center p-8 bg-white/50 rounded-3xl shadow-sm border border-black/5 h-full min-h-[200px]">
                <Image src={LOGOS.color3x1} alt="Elfurat Spices" className="w-full max-w-sm object-contain" />
              </div>
            </Reveal>
          </div>

          {/* Right Side: Form */}
          <Reveal delay={100}>
            <form onSubmit={onSubmit} className="rounded-3xl bg-white p-8 md:p-10 shadow-float border border-black/5 h-full flex flex-col justify-between">
              
              <div className="grid gap-4 sm:grid-cols-2">
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
                  <textarea rows={4} value={form.details} onChange={(e) => setForm({ ...form, details: e.target.value })} className="input resize-none" placeholder="Pack size, private label, certifications required, incoterm, destination port…" />
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
        </div>
      </div>

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
        .input:focus, .input[data-state="open"] { outline: none; border-color: #bf6040; box-shadow: 0 0 0 3px rgba(191,96,64,0.15); background: #fff; }
      `}</style>
    </section>
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
