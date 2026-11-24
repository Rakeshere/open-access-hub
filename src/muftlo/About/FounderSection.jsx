import { motion } from "framer-motion";
import { ArrowUpRight, Quote, Star } from "lucide-react";
import Link from "@/muftlo/next/link";
import founder from "@/assets/about/rakesh-founder.webp.asset.json";

const ease = [0.22, 1, 0.36, 1];

const reveal = (delay = 0, y = 30) => ({
  initial: { opacity: 0, y },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.8, delay, ease },
});

function LeftInfo({ className = "" }) {
  return (
    <motion.div {...reveal(0.5)} className={className}>
      <Quote className="mb-4 h-8 w-8 rotate-180 fill-brand-cream text-brand-cream" />
      <p className="max-w-xs text-sm leading-relaxed text-brand-cream/75 md:text-base">
        I build products that solve real business problems: clear strategy,
        smart technology and a team that treats your growth like its own.
      </p>
      <p className="mt-10 text-3xl font-bold tracking-tight text-brand-cream md:text-4xl">
        50<span className="text-brand-orange">+</span>
      </p>
      <p className="mt-1 text-sm text-brand-cream/70 md:text-base">Clients Served</p>
    </motion.div>
  );
}

function RightInfo({ className = "" }) {
  return (
    <motion.div {...reveal(0.6)} className={className}>
      <div className="flex gap-1 md:justify-end">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.8 + i * 0.1, type: "spring", stiffness: 300 }}
          >
            <Star className="h-5 w-5 fill-brand-orange text-brand-orange" />
          </motion.span>
        ))}
      </div>
      <p className="mt-3 text-3xl font-bold tracking-tight text-brand-cream md:text-4xl">5 Years</p>
      <p className="mt-2 text-base font-medium text-brand-cream/70 md:text-lg">Product Management</p>
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 1, ease }}
        className="mt-5 block h-[3px] w-40 origin-left bg-brand-cream md:w-52 md:ml-auto md:origin-right"
      />
    </motion.div>
  );
}

export default function FounderSection() {
  return (
    <section id="founder" className="relative overflow-hidden bg-brand-navy px-4 pt-16 md:pt-24">
      {/* heading */}
      <div className="relative z-0 mx-auto max-w-6xl text-center">
        <motion.div {...reveal(0, 16)} className="relative mx-auto mb-3 inline-block">
          <span className="inline-block rounded-full border-2 border-brand-cream/80 px-5 py-1.5 text-sm font-medium text-brand-cream md:text-base">
            Hello!
          </span>
          {/* little spark lines */}
          <svg className="absolute -right-5 -top-4 h-6 w-6 text-brand-orange" viewBox="0 0 24 24" fill="none">
            <path d="M4 20 L9 13 M12 21 L13 12 M18 18 L21 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" transform="rotate(180 12 15)" />
          </svg>
        </motion.div>

        <motion.h2
          {...reveal(0.1)}
          className="text-[clamp(2.2rem,6.5vw,5.25rem)] font-bold leading-[1.08] tracking-[-0.03em] text-brand-cream"
        >
          I’m <span className="text-brand-orange">Rakesh Kumar,</span>
          <br />
          Founder & CEO
        </motion.h2>
      </div>

      {/* portrait stage */}
      <div className="relative mx-auto -mt-6 max-w-6xl md:-mt-16">
        <LeftInfo className="absolute left-0 top-[18%] z-20 hidden text-left md:block lg:left-4" />
        <RightInfo className="absolute right-0 top-[22%] z-20 hidden text-right md:block lg:right-4" />

        <div className="relative mx-auto h-[400px] w-full max-w-[560px] sm:h-[480px] md:h-[560px]">
          {/* orange half circle */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.2, ease }}
            className="absolute bottom-0 left-1/2 aspect-[2/1] w-[118%] -translate-x-1/2 origin-bottom rounded-t-full bg-brand-orange"
          />

          {/* portrait */}
          <motion.img
            src={founder.url}
            alt="Rakesh Kumar, Founder & CEO of R&D Software Solutions"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.35, ease }}
            className="absolute bottom-0 left-1/2 z-10 h-[94%] w-auto max-w-none -translate-x-1/2 object-contain object-bottom"
          />

          {/* outline star */}
          <motion.span
            initial={{ opacity: 0, rotate: -90, scale: 0 }}
            whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 1, ease }}
            className="absolute right-[18%] top-[48%] z-20"
          >
            <Star className="h-7 w-7 text-brand-cream" strokeWidth={1.5} />
          </motion.span>

          {/* curved arrow pointing at buttons */}
          <motion.svg
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="absolute bottom-6 left-[-14%] z-20 hidden h-24 w-20 text-brand-cream sm:block"
            viewBox="0 0 80 96"
            fill="none"
          >
            <motion.path
              d="M10 4 C 2 40, 14 74, 62 80"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.1, ease }}
            />
            <path d="M54 70 L64 80 L52 88" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </motion.svg>

          {/* buttons */}
          <motion.div
            {...reveal(0.9, 20)}
            className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 rounded-full border border-brand-cream/30 bg-brand-navy/80 p-1.5 backdrop-blur-md sm:bottom-8"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-brand-orange px-5 py-2.5 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-cream sm:px-7 sm:py-3 sm:text-base"
            >
              Let’s Talk
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/services"
              className="whitespace-nowrap rounded-full border-2 border-brand-cream/80 px-5 py-2 text-sm font-semibold text-brand-cream transition-colors hover:border-brand-orange hover:text-brand-orange sm:px-7 sm:py-2.5 sm:text-base"
            >
              Our Work
            </Link>
          </motion.div>
        </div>
      </div>

      {/* phone: info below portrait */}
      <div className="mx-auto grid max-w-md grid-cols-1 gap-10 py-12 sm:grid-cols-2 md:hidden">
        <LeftInfo />
        <RightInfo />
      </div>
    </section>
  );
}
