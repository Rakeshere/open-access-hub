import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "@/muftlo/next/link";

export default function ProductCard({ product, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -10 }}
      className={`group relative flex h-[30rem] w-full flex-col overflow-hidden rounded-[2.25rem] ${product.tint.solid} text-white shadow-[0_24px_60px_-20px_rgba(11,23,51,0.55)] ring-1 ring-white/10 transition-shadow duration-500 hover:shadow-[0_36px_80px_-24px_rgba(247,147,30,0.45)]`}
    >
      {/* image */}
      <div className="absolute inset-x-0 top-0 h-[62%] overflow-hidden">
        <img
          src={product.cover}
          alt={`${product.name} preview`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-b ${product.tint.overlay}`} />
      </div>

      {/* badge top-left */}
      <span className="absolute left-5 top-5 z-10 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] backdrop-blur-md ring-1 ring-white/20">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-orange" />
        Live
      </span>

      {/* content */}
      <div className="relative z-10 mt-auto flex flex-col gap-3 p-5 pb-5">
        <div className="flex items-center justify-center gap-1.5">
          <span className="h-1.5 w-4 rounded-full bg-white" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
        </div>

        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-bold leading-tight tracking-tight">{product.name}</h3>
          <span className="shrink-0 rounded-full bg-brand-navy/70 px-3 py-1 text-xs font-semibold text-brand-orange ring-1 ring-white/10">
            {product.badge}
          </span>
        </div>

        <p className="line-clamp-3 text-sm leading-relaxed text-white/70">{product.summary}</p>

        <div className="flex flex-wrap gap-2">
          {product.tags.map((t) => (
            <span key={t} className="rounded-full bg-white/12 px-3 py-1 text-xs font-medium text-white/90 ring-1 ring-white/15">
              {t}
            </span>
          ))}
        </div>

        <Link
          href={`/products/${product.slug}`}
          className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-cream py-3 text-sm font-semibold text-brand-navy transition-colors duration-300 hover:bg-brand-orange hover:text-white"
        >
          Explore product
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </motion.article>
  );
}
