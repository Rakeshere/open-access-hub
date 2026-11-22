import { motion } from "framer-motion";
import { ArrowRight, Plus, Sparkles } from "lucide-react";
import Link from "@/muftlo/next/link";
import ProductCard from "@/muftlo/Products/ProductCard";
import { products } from "@/muftlo/Products/products-data";

export default function ProductsPage() {
  return (
    <main className="relative overflow-hidden bg-brand-cream text-brand-navy">
      {/* soft decorative glows */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-brand-orange/15 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute top-[40%] -left-40 h-80 w-80 rounded-full bg-brand-navy/10 blur-3xl" />

      <section className="relative mx-auto max-w-7xl px-6 pt-36 pb-12 text-center md:pt-44">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-brand-navy/10 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-navy/70 backdrop-blur"
        >
          <Sparkles className="h-3.5 w-3.5 text-brand-orange" />
          Our Products
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mx-auto mt-6 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl"
        >
          Software we build to make{" "}
          <span className="relative inline-block text-brand-orange">
            business simpler
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="absolute -bottom-1 left-0 h-1.5 w-full origin-left rounded-full bg-brand-orange/30"
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-navy/65 md:text-lg"
        >
          Ready-to-use platforms from the R&amp;D team — born from real client work, built to save you time every single day.
        </motion.p>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 pb-28">
        <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <div key={p.slug} className="w-full max-w-sm">
              <ProductCard product={p} index={i} />
            </div>
          ))}
        </div>

        {/* more coming */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-16 flex max-w-3xl flex-col items-center justify-between gap-6 rounded-[2rem] border-2 border-dashed border-brand-navy/15 bg-white/60 p-8 text-center backdrop-blur md:flex-row md:text-left"
        >
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-navy text-brand-orange">
              <Plus className="h-6 w-6" />
            </span>
            <div>
              <h2 className="text-lg font-bold">More products are on the way</h2>
              <p className="mt-1 text-sm text-brand-navy/60">Need custom software for your business? We can build it for you.</p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-navy px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-brand-orange"
          >
            Talk to us <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>

      {/* soft fade into the footer */}
      <div aria-hidden="true" className="pointer-events-none h-24 bg-gradient-to-b from-transparent to-brand-navy" />
    </main>
  );
}
