import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  AudioLines,
  Bot,
  Camera,
  Code2,
  Megaphone,
  Smartphone,
  Sparkle,
} from "lucide-react";
import Link from "@/muftlo/next/link";
import portrait from "@/assets/about/rakesh-portrait.webp.asset.json";
import { getSiteMedia } from "@/muftlo/site-media";

const ease = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease },
});

const glass =
  "border border-white/80 bg-white/55 backdrop-blur-xl shadow-[0_24px_50px_-24px_rgba(11,23,51,0.45)]";

/* Glass chips that float around the portrait */
const orbitChips = [
  { icon: Megaphone, title: "Marketing", sub: "Reach the right audience", pos: "left-1 top-[42%] -rotate-[6deg] sm:left-[2%] sm:top-[18%] sm:-rotate-[8deg]", delay: 0.9, float: 0 },
  { icon: Code2, title: "Web Dev", sub: "Fast, modern websites", pos: "left-[14%] top-[52%] -rotate-[4deg]", delay: 1.05, float: 1 },
  { icon: Bot, title: "AI Automation", sub: "Work smarter, not harder", pos: "right-1 top-[66%] rotate-[6deg] sm:right-[2%] sm:top-[22%] sm:rotate-[8deg]", delay: 1.2, float: 2 },
  { icon: Smartphone, title: "Apps", sub: "Android & iOS", pos: "right-[15%] top-[56%] rotate-[4deg]", delay: 1.35, float: 3 },
];

const tiles = [
  { src: getSiteMedia("video-production-crew.jpg"), pos: "left-[0%] top-[40%] -rotate-[14deg]", delay: 1.0 },
  { src: getSiteMedia("webDev.jpg"), pos: "right-[0%] top-[44%] rotate-[14deg]", delay: 1.25 },
];

const brands = ["ForceLifts.jpg", "GKB.jpg", "Pastelli.jpg", "Reliant.jpg"];

function RotatingBadge() {
  const text = "R&D • BUILD • GROW • INNOVATE • ";
  return (
    <motion.div
      {...fadeUp(0.6)}
      className="absolute right-[6%] top-28 hidden h-28 w-28 items-center justify-center lg:flex"
    >
      <motion.svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full text-brand-navy"
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
    <section className="relative isolate flex h-[100svh] min-h-[640px] flex-col overflow-hidden bg-brand-cream text-brand-navy">
      {/* soft background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[55%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-brand-orange/10 blur-[110px]" />
        <div className="absolute left-1/2 top-0 h-64 w-[900px] -translate-x-1/2 rounded-full bg-white/70 blur-3xl" />
      </div>

      <RotatingBadge />

      <div className="relative mx-auto flex max-w-7xl shrink-0 flex-col items-center px-5 pt-24 text-center md:pt-28">
        <motion.span
          {...fadeUp(0)}
          className={`mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] sm:text-xs sm:tracking-[0.2em] ${glass}`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
          About R&D Software Solutions
        </motion.span>

        <motion.h1
          {...fadeUp(0.1)}
          className="text-[clamp(2.1rem,5vw,4.25rem)] font-bold leading-[1.02] tracking-[-0.04em]"
        >
          Smarter digital work
          <br />
          <span className="font-light italic text-brand-orange">for a brighter brand.</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.25)}
          className="mt-4 max-w-xl text-sm leading-relaxed text-brand-navy/65 md:text-base"
        >
          R&D Software Solutions helps businesses grow with digital marketing,
          web & app development, AI automation and creative production — all
          under one roof.
        </motion.p>

        <motion.div {...fadeUp(0.4)} className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-brand-navy px-6 py-3 text-sm font-semibold text-brand-cream transition-colors duration-300 hover:bg-brand-orange"
          >
            Start a project
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/services"
            className={`group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-brand-navy transition-colors duration-300 hover:text-brand-orange ${glass}`}
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-navy text-brand-cream transition-colors group-hover:bg-brand-orange">
              <ArrowUpRight className="h-3 w-3" />
            </span>
            Our services
          </Link>
        </motion.div>
      </div>

      {/* side info cards (desktop) */}
      <motion.div
        {...fadeUp(0.7)}
        className={`absolute left-[5%] top-[34%] hidden w-52 rounded-3xl p-5 text-left lg:block ${glass}`}
      >
        <AudioLines className="mb-4 h-5 w-5 text-brand-orange" />
        <p className="text-lg font-semibold leading-tight">Turn ideas into real growth.</p>
        <p className="mt-2 text-xs leading-relaxed text-brand-navy/60">
          Strategy, design & development by one team.
        </p>
      </motion.div>

      <motion.div
        {...fadeUp(0.85)}
        className={`absolute right-[5%] top-[46%] hidden w-52 rounded-3xl p-5 text-left lg:block ${glass}`}
      >
        <div className="mb-4 flex items-center">
          {[Megaphone, Camera, Code2].map((Icon, i) => (
            <span
              key={i}
              className="-ml-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-brand-cream bg-brand-navy text-brand-cream first:ml-0"
            >
              <Icon className="h-3.5 w-3.5" />
            </span>
          ))}
          <span className="-ml-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-brand-cream bg-brand-orange text-xs font-bold text-brand-navy">
            +
          </span>
        </div>
        <p className="text-lg font-semibold leading-tight">Every service, one partner.</p>
        <p className="mt-2 text-xs leading-relaxed text-brand-navy/60">
          Marketing, video, web, apps & AI together.
        </p>
      </motion.div>

      {/* orbit line */}
      <svg
        className="pointer-events-none absolute left-1/2 top-[56%] hidden h-[420px] w-[1100px] -translate-x-1/2 text-brand-navy/15 lg:block"
        viewBox="0 0 1100 420"
        fill="none"
      >
        <ellipse cx="550" cy="210" rx="545" ry="150" stroke="currentColor" strokeWidth="1.2" />
      </svg>

      {/* portrait + floating chips */}
      <div className="relative mx-auto mt-4 min-h-[240px] w-full max-w-[760px] flex-1">
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.5, ease }}
          className="absolute bottom-0 left-1/2 aspect-[4/5] h-full -translate-x-1/2 overflow-hidden"
          style={{ maskImage: "linear-gradient(to bottom, black 72%, transparent 100%)" }}
        >
          <img
            src={portrait.url}
            alt="R&D Software Solutions founder"
            className="h-auto w-full"
            loading="eager"
          />
        </motion.div>

        {tiles.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
            transition={{
              opacity: { duration: 0.8, delay: t.delay },
              scale: { duration: 0.8, delay: t.delay, ease },
              y: { duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: t.delay },
            }}
            className={`absolute hidden h-32 w-24 overflow-hidden rounded-2xl border border-white/80 shadow-[0_24px_50px_-24px_rgba(11,23,51,0.5)] md:block ${t.pos}`}
          >
            <img src={t.src} alt="" className="h-full w-full object-cover" />
          </motion.div>
        ))}

        {orbitChips.map(({ icon: Icon, title, sub, pos, delay, float }) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{
              opacity: { duration: 0.7, delay },
              y: { duration: 4.5 + float * 0.6, repeat: Infinity, ease: "easeInOut", delay },
            }}
            className={`absolute ${pos} ${float % 2 === 1 ? "max-sm:hidden" : ""}`}
          >
            <div className={`flex items-center gap-2.5 rounded-2xl px-3 py-2.5 text-left sm:px-4 sm:py-3 ${glass}`}>
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-orange/15 text-brand-orange">
                <Icon className="h-4 w-4" />
              </span>
              <span>
                <span className="block text-sm font-semibold leading-tight">{title}</span>
                <span className="hidden text-[11px] text-brand-navy/55 sm:block">{sub}</span>
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* bottom corners (desktop) */}
      <motion.div
        {...fadeUp(1.2)}
        className="absolute bottom-10 left-[5%] hidden text-left xl:block"
      >
        <span className="mb-3 block h-px w-10 bg-brand-navy/30" />
        <p className="text-sm font-medium text-brand-navy/70">Trusted by growing brands</p>
        <div className="mt-3 flex items-center">
          {brands.map((b) => (
            <img
              key={b}
              src={getSiteMedia(b)}
              alt=""
              className="-ml-2 h-9 w-9 rounded-full border-2 border-brand-cream object-cover first:ml-0"
            />
          ))}
          <span className="-ml-2 flex h-9 w-9 items-center justify-center rounded-full border-2 border-brand-cream bg-brand-navy text-sm font-bold text-brand-cream">
            +
          </span>
        </div>
      </motion.div>

      <motion.div
        {...fadeUp(1.3)}
        className="absolute bottom-32 right-[5%] hidden items-start gap-3 text-right lg:flex"
      >
        <span className="mt-2 block h-px w-10 bg-brand-navy/30" />
        <div>
          <Sparkle className="mb-2 ml-auto h-5 w-5 fill-brand-navy text-brand-navy" />
          <p className="text-sm font-medium leading-snug text-brand-navy/70">
            Less guesswork.
            <br />
            More growth.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
