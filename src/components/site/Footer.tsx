import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { BRAND, CERTS, LOGOS } from "@/lib/brand";
import { CATEGORIES } from "@/lib/products";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-clove text-white/85">
      <div className="pattern-dots absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4 space-y-6">
            <img src={LOGOS.white3x1} alt="Elfurat Spices" className="h-10 w-auto" />
            <p className="text-sm leading-relaxed text-white/70 max-w-sm">
              Elfurat Spices is a global exporter of premium Indian spices, aromatics,
              nuts and pantry staples - engineered for retail brands, HORECA and
              industrial food manufacturers worldwide.
            </p>
            <div className="flex flex-wrap gap-3">
              {CERTS.map((c) => (
                <span
                  key={c.name}
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white/80"
                >
                  <img src={c.src} alt={c.name} className="h-4 w-auto" /> {c.name}
                </span>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-display font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-terracotta ease-elfurat transition duration-500">Home</Link></li>
              <li><Link to="/about" className="hover:text-terracotta ease-elfurat transition duration-500">About</Link></li>
              <li><Link to="/products" className="hover:text-terracotta ease-elfurat transition duration-500">Products</Link></li>
              <li><Link to="/export-inquiries" className="hover:text-terracotta ease-elfurat transition duration-500">Export</Link></li>
              <li><Link to="/contact" className="hover:text-terracotta ease-elfurat transition duration-500">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-white font-display font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              {CATEGORIES.map((c) => (
                <li key={c.slug}>
                  <Link
                    to="/products/$category"
                    params={{ category: c.slug }}
                    className="hover:text-terracotta ease-elfurat transition duration-500"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-white font-display font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-white/75">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-terracotta" />
                <span>{BRAND.address}</span>
              </li>
              {BRAND.phones.map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-terracotta" />
                  <a href={`tel:${p.replace(/\s/g, "")}`}>{p}</a>
                </li>
              ))}
              {BRAND.emails.map((e) => (
                <li key={e} className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-terracotta" />
                  <a href={`mailto:${e}`} className="break-all">{e}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50">
          <span>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</span>
          <span>{BRAND.domain} • Premium spices, globally shipped.</span>
        </div>
      </div>
    </footer>
  );
}
