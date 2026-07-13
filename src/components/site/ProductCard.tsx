import { Link } from "@tanstack/react-router";
import type { Product } from "@/lib/products";
import { ArrowUpRight } from "lucide-react";
import { Image } from "@/components/ui/image";

export function ProductCard({ p }: { p: Product }) {
  return (
    <Link
      to="/product/$slug"
      params={{ slug: p.slug }}
      className="card-lift group block overflow-hidden rounded-3xl bg-surface shadow-float"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-[#f2ece4]">
        <Image
          src={p.image}
          alt={p.name}
          loading="lazy"
          className="ease-elfurat transition-transform duration-[900ms] group-hover:scale-[1.06]"
        />
        <div className="absolute top-3 left-3 rounded-full bg-white/85 backdrop-blur px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-clove">
          {p.form}
        </div>
      </div>
      <div className="p-5 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="font-display text-lg font-semibold text-clove truncate">{p.name}</h3>
          <p className="text-xs text-clove/60 mt-1 truncate">{p.origin}</p>
        </div>
        <span className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-full bg-clove text-white ease-elfurat transition-all duration-500 group-hover:bg-terracotta group-hover:rotate-45">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
