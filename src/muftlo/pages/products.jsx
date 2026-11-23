import { motion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import Link from "@/muftlo/next/link";
import ProductCard from "@/muftlo/Products/ProductCard";
import ProductsHero from "@/muftlo/Products/ProductsHero";
import { products } from "@/muftlo/Products/products-data";

export default function ProductsPage() {
  return (
    <main className="relative overflow-hidden bg-brand-navy text-white">
      <ProductsHero />

      <section id="all-products" className="relative mx-auto max-w-7xl scroll-mt-24 px-6 pt-10 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-orange">All products</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">Pick the tool your team needs</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/60">Every product comes with setup help, training for your team and support from the R&amp;D crew.</p>
        </motion.div>

        <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <div key={p.slug} className="w-full max-w-sm">
              <ProductCard product={p} index={i} />
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-16 flex max-w-3xl flex-col items-center justify-between gap-6 rounded-[2rem] border border-dashed border-white/20 bg-white/[0.03] p-8 text-center md:flex-row md:text-left"
        >
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-orange text-white">
              <Plus className="h-6 w-6" />
            </span>
            <div>
              <h2 className="text-lg font-bold">More products are on the way</h2>
              <p className="mt-1 text-sm text-white/60">Need custom software for your business? We can build it for you.</p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-cream px-6 py-3 text-sm font-semibold text-brand-navy transition-colors duration-300 hover:bg-brand-orange hover:text-white"
          >
            Talk to us <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
