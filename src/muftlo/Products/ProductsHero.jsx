import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowRight, Check } from "lucide-react";
import Link from "@/muftlo/next/link";
import ProductVector from "@/muftlo/Products/ProductVectors";
import { products } from "@/muftlo/Products/products-data";

const CYCLE_MS = 5000;
const ease = [0.22, 1, 0.36, 1];

// where each photo sits relative to the active one
function stackPose(offset) {
  if (offset === 0) return { x: "0%", rotate: 0, scale: 1, opacity: 1, zIndex: 3 };
  if (offset === 1) return { x: "30%", rotate: 7, scale: 0.84, opacity: 0.5, zIndex: 2 };
  return { x: "-30%", rotate: -7, scale: 0.84, opacity: 0.5, zIndex: 1 };
}

function Words({ text, className = "", delay = 0 }) {
  return text.split(" ").map((w, i) => (
    <span key={`${w}-${i}`} className="inline-block overflow-hidden pb-1 align-bottom">
      <motion.span
        className={`inline-block ${className}`}
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, delay: delay + i * 0.06, ease }}
      >
        {w}&nbsp;
      </motion.span>
    </span>
  ));
}

export default function ProductsHero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = products.length;
  const current = products[active];

  useEffect(() => {
    if (paused) return undefined;
    const t = setTimeout(() => setActive((a) => (a + 1) % total), CYCLE_MS);
    return () => clearTimeout(t);
  }, [active, paused, total]);

  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      {/* crisp dot grid, fading out at the edges */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.14] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_75%)]"
        style={{
          backgroundImage: "radial-gradient(var(--color-brand-cream) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pt-32 pb-16 md:pt-40 lg:grid-cols-[1.05fr_1fr] lg:pb-24">
        {/* LEFT */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/80"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
            R&amp;D Products · {String(total).padStart(2, "0")} live
          </motion.span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl">
            <Words text="Software built to run" />
            <br className="hidden sm:block" />
            <Words text="your business." className="text-brand-orange" delay={0.25} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/65 md:text-lg"
          >
            Billing, agency work and team management — ready-made platforms from the R&amp;D team, shaped by years of real client projects.
          </motion.p>

          {/* product selector */}
          <motion.ul
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 0.55 } } }}
            className="mt-9 grid gap-3"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {products.map((p, i) => {
              const on = i === active;
              return (
                <motion.li key={p.slug} variants={{ hidden: { opacity: 0, x: -16 }, show: { opacity: 1, x: 0 } }}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className={`relative flex w-full items-center gap-4 overflow-hidden rounded-2xl px-4 py-3 text-left transition-colors duration-300 ${
                      on ? "bg-white/10 ring-1 ring-white/20" : "hover:bg-white/5"
                    }`}
                  >
                    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${on ? "bg-brand-cream" : "bg-white/10"}`}>
                      <ProductVector kind={p.vector} className="h-8 w-8" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className={`block truncate font-semibold ${on ? "text-white" : "text-white/70"}`}>{p.name}</span>
                      <span className="block truncate text-xs text-white/50">{p.tagline}</span>
                    </span>
                    <span className={`hidden text-xs font-semibold sm:block ${on ? "text-brand-orange" : "text-white/35"}`}>{p.badge}</span>
                    {on && (
                      <motion.span
                        key={`bar-${active}-${paused}`}
                        className="absolute bottom-0 left-0 h-[3px] bg-brand-orange"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: paused ? 0 : CYCLE_MS / 1000, ease: "linear" }}
                      />
                    )}
                  </button>
                </motion.li>
              );
            })}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a
              href="#all-products"
              className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              Explore products <ArrowDown className="h-4 w-4" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:border-brand-orange hover:text-brand-orange"
            >
              Book a free demo <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        {/* RIGHT — photo stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease }}
          className="relative mx-auto h-[26rem] w-full max-w-md sm:h-[34rem]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {products.map((p, i) => {
            const offset = (i - active + total) % total;
            return (
              <motion.button
                key={p.slug}
                type="button"
                aria-label={`Show ${p.name}`}
                onClick={() => setActive(i)}
                className="absolute left-1/2 top-0 h-full w-[66%] -translate-x-1/2 overflow-hidden rounded-[2rem] bg-brand-navy shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)] ring-1 ring-white/15"
                style={{ originY: 1 }}
                animate={stackPose(offset)}
                transition={{ duration: 0.8, ease }}
              >
                <img src={p.cover} alt={`${p.name} in use`} className="h-full w-full object-cover" />
                <span className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/10 to-transparent" />
                <span className="absolute bottom-5 left-5 right-5 text-left">
                  <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-brand-orange">{p.badge}</span>
                  <span className="mt-1 block text-lg font-bold leading-tight text-white">{p.name}</span>
                </span>
              </motion.button>
            );
          })}

          {/* floating vector mark */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`vec-${current.slug}`}
              initial={{ opacity: 0, scale: 0.6, rotate: -12 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.6, rotate: 12 }}
              transition={{ duration: 0.5, ease }}
              className="absolute -right-1 top-6 z-10 sm:-right-4"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="flex h-20 w-20 items-center justify-center rounded-3xl bg-brand-cream shadow-xl ring-1 ring-brand-navy/10 sm:h-24 sm:w-24"
              >
                <ProductVector kind={current.vector} className="h-14 w-14 sm:h-16 sm:w-16" />
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* floating live UI chip */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`chip-${current.slug}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, delay: 0.15, ease }}
              className="absolute -left-2 bottom-16 z-10 w-56 rounded-2xl bg-brand-cream p-4 text-brand-navy shadow-2xl sm:-left-8"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-navy/50">{current.chip.label}</p>
              <div className="mt-1 flex items-center justify-between gap-3">
                <p className="truncate text-base font-bold">{current.chip.value}</p>
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 14, delay: 0.6 }}
                  className="inline-flex shrink-0 items-center gap-1 rounded-full bg-brand-orange px-2.5 py-1 text-[11px] font-bold text-white"
                >
                  <Check className="h-3 w-3" strokeWidth={3} />
                  {current.chip.status}
                </motion.span>
              </div>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-brand-navy/10">
                <motion.div
                  className="h-full rounded-full bg-brand-navy"
                  initial={{ width: "15%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.1, delay: 0.25, ease }}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
