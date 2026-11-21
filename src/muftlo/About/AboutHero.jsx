import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Camera,
  Code2,
  Megaphone,
  Smartphone,
  Sparkle,
} from "lucide-react";
import Link from "@/muftlo/next/link";
import portrait from "@/assets/about/rakesh-portrait.webp.asset.json";

const ease = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease },
});

const glass =
  "border border-brand-cream/15 bg-brand-cream/[0.06] backdrop-blur-xl shadow-[0_24px_60px_-28px_rgba(0,0,0,0.7)]";

const services = [
  { icon: Megaphone, label: "Digital Marketing" },
  { icon: Camera, label: "Photo & Video" },
  { icon: Code2, label: "Web Development" },
  { icon: Bot, label: "AI Automation" },
  { icon: Smartphone, label: "App Development" },
];

/* Small vector sparkles for decoration */
const sparkles = [
  { pos: "left-[12%] top-[22%]", size: "h-3 w-3", delay: 0 },
  { pos: "right-[22%] top-[30%]", size: "h-2.5 w-2.5", delay: 1.2 },
  { pos: "left-[28%] bottom-[30%]", size: "h-2 w-2", delay: 0.6 },
  { pos: "right-[30%] bottom-[18%]", size: "h-3 w-3", delay: 1.8 },
];

function RotatingBadge() {
  const text = "R&D • BUILD • GROW • INNOVATE • ";
  return (
    <motion.div
      {...fadeUp(0.6)}
      className="absolute right-[6%] top-28 hidden h-28 w-28 items-center justify-center lg:flex"
    >
      <motion.svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full text-brand-cream/70"
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <defs>
          <path id="about-badge-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
        </defs>
        <text className="fill-current text-[8px] font-semibold">
          <textPath href="#about-badge-circle" textLength="234" lengthAdjust="spacing">{text}</textPath>
        </text>
      </motion.svg>
      <Sparkle className="h-6 w-6 fill-brand-orange text-brand-orange" />
    </motion.div>
  );
}

export default function AboutHero() {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-brand-navy text-brand-cream lg:h-[100svh] lg:min-h-[680px]">
      {/* background: faint grid + orange glow behind portrait */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(250,247,242,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(250,247,242,0.04)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="absolute bottom-[-10%] left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-brand-orange/20 blur-[120px]" />
      </div>

      {sparkles.map((s, i) => (
        <motion.span
          key={i}
          className={`pointer-events-none absolute hidden md:block ${s.pos}`}
          animate={{ opacity: [0.2, 0.9, 0.2], scale: [0.8, 1.1, 0.8] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: s.delay, ease: "easeInOut" }}
        >
          <Sparkle className={`${s.size} fill-brand-orange text-brand-orange`} />
        </motion.span>
      ))}

      <RotatingBadge />

      {/* heading */}
      <div className="relative mx-auto flex w-full max-w-7xl shrink-0 flex-col items-center px-5 pt-28 text-center lg:static lg:pt-28">
        <motion.span
          {...fadeUp(0)}
          className={`mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-cream/80 sm:text-xs sm:tracking-[0.2em] ${glass}`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
          About R&D Software Solutions
        </motion.span>

        <motion.h1
          {...fadeUp(0.1)}
          className="text-[clamp(2.1rem,4.4vw,3.9rem)] font-bold leading-[1.04] tracking-[-0.04em]"
        >
          Smarter digital work
          <br />
          <span className="font-light italic text-brand-orange">for a brighter brand.</span>
        </motion.h1>

        {/* intro + buttons: centered on phone, bottom-left on desktop */}
        <motion.div
          {...fadeUp(0.3)}
          className="mt-5 flex max-w-md flex-col items-center lg:absolute lg:bottom-[12%] lg:left-[5%] lg:mt-0 lg:w-[22rem] lg:items-start lg:text-left xl:left-[7%]"
        >
          <span className="mb-4 hidden h-px w-10 bg-brand-orange lg:block" />
          <p className="text-sm leading-relaxed text-brand-cream/65 md:text-base lg:max-w-xs">
            R&D Software Solutions helps businesses grow with digital marketing,
            web & app development, AI automation and creative production — all
            under one roof.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-brand-navy transition-colors duration-300 hover:bg-brand-cream"
            >
              Start a project
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className={`group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-brand-cream transition-colors duration-300 hover:text-brand-orange ${glass}`}
            >
              Our services
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* what we do card (desktop) */}
      <motion.div
        {...fadeUp(0.8)}
        className={`absolute right-[5%] top-[40%] hidden w-60 rounded-3xl p-5 lg:block xl:right-[7%] ${glass}`}
      >
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-cream/50">
          What we do
        </p>
        <ul className="space-y-3">
          {services.map(({ icon: Icon, label }, i) => (
            <motion.li
              key={label}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 + i * 0.1, ease }}
              className="flex items-center gap-3 text-sm font-medium"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-orange/15 text-brand-orange">
                <Icon className="h-4 w-4" />
              </span>
              {label}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* orbit line */}
      <svg
        className="pointer-events-none absolute bottom-[6%] left-1/2 hidden h-[360px] w-[1000px] -translate-x-1/2 text-brand-cream/10 lg:block"
        viewBox="0 0 1000 360"
        fill="none"
      >
        <ellipse cx="500" cy="180" rx="495" ry="130" stroke="currentColor" strokeWidth="1.2" />
      </svg>

      {/* portrait */}
      <div className="relative mx-auto mt-8 h-[440px] w-full max-w-[680px] sm:h-[520px] lg:mt-4 lg:h-auto lg:min-h-[360px] lg:flex-1">
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.4, ease }}
          className="absolute bottom-0 left-1/2 aspect-[4/5] h-full -translate-x-1/2 overflow-hidden"
          style={{ maskImage: "linear-gradient(to bottom, black 75%, transparent 100%)" }}
        >
          <img
            src={portrait.url}
            alt="R&D Software Solutions founder"
            className="h-auto w-full"
            loading="eager"
          />
        </motion.div>

      </div>
    </section>
  );
}
