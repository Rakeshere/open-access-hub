import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import Link from "@/muftlo/next/link";
import { useParams } from "@/muftlo/next/navigation";
import ProductCard from "@/muftlo/Products/ProductCard";
import ProductVector from "@/muftlo/Products/ProductVectors";
import { getProduct, products } from "@/muftlo/Products/products-data";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = getProduct(slug);

  if (!product) {
    return (
      <main className="flex min-h-[70vh] flex-col items-center justify-center bg-brand-navy px-6 pt-32 text-center text-white">
        <h1 className="text-3xl font-bold">Product not found</h1>
        <p className="mt-3 text-white/60">This product may have moved or is coming soon.</p>
        <Link href="/products" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-orange px-6 py-3 font-semibold text-white">
          <ArrowLeft className="h-4 w-4" /> All products
        </Link>
      </main>
    );
  }

  const others = products.filter((p) => p.slug !== product.slug);

  return (
    <main className="relative overflow-hidden bg-brand-navy text-white">
      {/* HERO */}
      <section className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pt-36 pb-20 md:pt-44 lg:grid-cols-2">
        
        <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.1 } } }} className="relative">
          <motion.div variants={fadeUp}>
            <Link href="/products" className="inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-brand-orange">
              <ArrowLeft className="h-4 w-4" /> All products
            </Link>
          </motion.div>
          <motion.span variants={fadeUp} className="mt-6 inline-flex rounded-full bg-brand-orange/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-orange ring-1 ring-brand-orange/30">
            {product.badge}
          </motion.span>
          <motion.h1 variants={fadeUp} className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl">
            {product.name}
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-4 text-xl font-medium text-brand-orange md:text-2xl">
            {product.tagline}
          </motion.p>
          <motion.p variants={fadeUp} className="mt-5 max-w-xl text-base leading-relaxed text-white/70">
            {product.description}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-orange/30 transition-transform duration-300 hover:-translate-y-0.5">
              Request a demo <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="#features" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:border-brand-orange hover:text-brand-orange">
              See features
            </a>
          </motion.div>

          <motion.dl variants={fadeUp} className="mt-10 grid max-w-lg grid-cols-3 gap-4">
            {product.stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <dt className="text-xs text-white/55">{s.label}</dt>
                <dd className="mt-1 text-xl font-bold text-brand-orange md:text-2xl">{s.value}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className={`overflow-hidden rounded-[2.5rem] ${product.tint.solid} shadow-[0_40px_90px_-30px_rgba(0,0,0,0.8)] ring-1 ring-white/10`}>
            <img src={product.cover} alt={`${product.name} in use`} className="aspect-[3/4] w-full object-cover" />
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-3 top-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-brand-cream shadow-xl ring-1 ring-brand-navy/10 md:-right-8"
          >
            <ProductVector kind={product.vector} className="h-16 w-16" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute -bottom-6 -left-4 w-56 rounded-2xl bg-brand-cream p-4 text-brand-navy shadow-2xl md:-left-10"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-navy/50">{product.chip.label}</p>
            <div className="mt-1 flex items-center justify-between gap-3">
              <p className="truncate text-base font-bold">{product.chip.value}</p>
              <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-brand-orange px-2.5 py-1 text-[11px] font-bold text-white">
                <Check className="h-3 w-3" strokeWidth={3} />
                {product.chip.status}
              </span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section id="features" className="relative scroll-mt-28 border-t border-white/5 py-24">
        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={fadeUp} className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-orange">Features</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">Everything you need, nothing you don't</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {product.features.map(({ icon: Icon, title, text }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="group rounded-3xl bg-white/[0.04] p-7 ring-1 ring-white/10 transition-colors duration-300 hover:bg-white/[0.07] hover:ring-brand-orange/40"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-orange/15 text-brand-orange ring-1 ring-brand-orange/30 transition-colors duration-300 group-hover:bg-brand-orange group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-10 rounded-[2.5rem] bg-white/5 p-8 ring-1 ring-white/10 md:p-14 lg:grid-cols-2">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-orange">Who it's for</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Made for teams like yours</h2>
            <p className="mt-4 text-white/65">Not sure if {product.name} fits your business? Book a free walkthrough and we'll show you around.</p>
            <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5">
              Book a free demo <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {product.audience.map((a, i) => (
              <motion.li
                key={a}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-center gap-3 rounded-2xl bg-brand-navy/60 p-4 ring-1 ring-white/10"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-orange/20 text-brand-orange">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium">{a}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* OTHER PRODUCTS */}
      {others.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 pb-28">
          <h2 className="text-center text-2xl font-bold md:text-3xl">Explore our other products</h2>
          <div className="mt-12 grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((p, i) => (
              <div key={p.slug} className="w-full max-w-sm">
                <ProductCard product={p} index={i} />
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
