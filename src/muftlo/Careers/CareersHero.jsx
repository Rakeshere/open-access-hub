import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowDown, Rocket, TrendingUp, Users } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease },
});

const glass =
  "border border-brand-cream/15 bg-brand-cream/[0.06] backdrop-blur-xl shadow-[0_24px_60px_-28px_rgba(0,0,0,0.7)]";

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Fullstack Developer",
  "UI/UX Designer",
  "Marketing Executive",
  "Content Writer",
];

const perks = [
  { icon: Users, title: "Great Team", desc: "Work with talented people" },
  { icon: Rocket, title: "Real Impact", desc: "Build products that matter" },
  { icon: TrendingUp, title: "Grow Together", desc: "Accelerate your career" },
];

/* Small card that cycles through the open roles */
function NowHiring() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % roles.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <div className={`w-60 rounded-2xl px-4 py-3 ${glass}`}>
      <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-cream/55">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-orange opacity-70" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-orange" />
        </span>
        Now hiring
      </p>
      <div className="relative mt-1 h-6 overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={roles[i]}
            initial={{ y: 22, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -22, opacity: 0 }}
            transition={{ duration: 0.45, ease }}
            className="absolute inset-0 text-sm font-bold text-brand-cream"
          >
            {roles[i]}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* Vector workspace: desk, laptop, chair with swinging "We're Hiring!" sign, bulb and plant */
function Workspace() {
  return (
    <svg viewBox="0 0 590 440" className="h-auto w-full" fill="none" aria-hidden="true">
      {/* backdrop disc */}
      <circle cx="330" cy="250" r="190" className="fill-brand-cream/[0.04] stroke-brand-cream/10" />

      {/* floor line */}
      <motion.line
        x1="10" y1="402" x2="580" y2="402"
        className="stroke-brand-orange" strokeWidth="2" strokeLinecap="round"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 1.4, delay: 0.6, ease }}
      />

      {/* bulb */}
      <motion.g
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.g
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="stroke-brand-orange" strokeWidth="3" strokeLinecap="round"
        >
          <line x1="150" y1="32" x2="150" y2="20" />
          <line x1="120" y1="44" x2="111" y2="36" />
          <line x1="180" y1="44" x2="189" y2="36" />
          <line x1="108" y1="72" x2="96" y2="72" />
          <line x1="192" y1="72" x2="204" y2="72" />
        </motion.g>
        <path
          d="M150 48c-15 0-26 11-26 25 0 9 5 15 10 20 3 3 4 6 4 10h24c0-4 1-7 4-10 5-5 10-11 10-20 0-14-11-25-26-25Z"
          className="fill-brand-orange/15 stroke-brand-orange" strokeWidth="3" strokeLinejoin="round"
        />
        <path d="M142 85c3 4 5 4 8 0 3 4 5 4 8 0" className="stroke-brand-orange" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="140" y1="110" x2="160" y2="110" className="stroke-brand-orange" strokeWidth="3" strokeLinecap="round" />
        <line x1="143" y1="117" x2="157" y2="117" className="stroke-brand-orange" strokeWidth="3" strokeLinecap="round" />
      </motion.g>

      {/* desk */}
      <rect x="30" y="268" width="290" height="10" rx="3" className="fill-brand-cream/15" />
      <rect x="48" y="278" width="254" height="124" className="fill-brand-cream/[0.05] stroke-brand-cream/15" />
      <line x1="48" y1="320" x2="302" y2="320" className="stroke-brand-cream/10" />

      {/* laptop */}
      <path d="M100 262 92 176a6 6 0 0 1 6-6h104a6 6 0 0 1 6 6l-8 86Z" className="fill-brand-navy stroke-brand-cream/40" strokeWidth="2" />
      <rect x="82" y="260" width="140" height="8" rx="4" className="fill-brand-cream/30" />
      {[0, 1, 2, 3].map((n) => (
        <motion.rect
          key={n}
          x={108 + (n % 2) * 10}
          y={192 + n * 16}
          height="5"
          rx="2.5"
          className={n === 1 ? "fill-brand-orange" : "fill-brand-cream/30"}
          initial={{ width: 0 }}
          animate={{ width: [0, 60 - n * 8, 60 - n * 8, 0] }}
          transition={{ duration: 4, delay: 1 + n * 0.3, repeat: Infinity, times: [0, 0.3, 0.85, 1] }}
        />
      ))}

      {/* mug + steam */}
      <path d="M250 236h30v26a6 6 0 0 1-6 6h-18a6 6 0 0 1-6-6Z" className="fill-brand-orange" />
      <path d="M280 242h5a7 7 0 0 1 0 14h-5" className="stroke-brand-orange" strokeWidth="3" />
      {[256, 268].map((x, n) => (
        <motion.path
          key={x}
          d={`M${x} 228c-4-6 4-10 0-16`}
          className="stroke-brand-cream/40" strokeWidth="2" strokeLinecap="round"
          animate={{ opacity: [0, 1, 0], y: [4, -4, -10] }}
          transition={{ duration: 2.4, delay: n * 0.8, repeat: Infinity }}
        />
      ))}

      {/* chair */}
      <g className="stroke-brand-orange" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <rect x="372" y="118" width="116" height="176" rx="44" className="fill-brand-navy" />
        <rect x="390" y="140" width="80" height="130" rx="32" className="stroke-brand-cream/15" strokeWidth="2" />
        <path d="M352 268h22v40" />
        <path d="M508 268h-22v40" />
        <rect x="346" y="296" width="168" height="34" rx="17" className="fill-brand-navy" />
        <line x1="430" y1="330" x2="430" y2="368" />
        <path d="M430 368 378 386M430 368l52 18M430 368v22" />
      </g>
      {[378, 482, 430].map((x) => (
        <circle key={x} cx={x} cy={x === 430 ? 394 : 390} r="7" className="fill-brand-navy stroke-brand-cream/50" strokeWidth="2.5" />
      ))}

      {/* hanging sign */}
      <motion.g
        style={{ transformOrigin: "462px 104px" }}
        animate={{ rotate: [-7, 7, -7] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <circle cx="462" cy="104" r="5" className="fill-brand-orange" />
        <path d="M462 104 430 150M462 104l32 46" className="stroke-brand-orange" strokeWidth="2" />
        <rect x="416" y="146" width="92" height="58" rx="8" className="fill-brand-cream" />
        <text x="462" y="171" textAnchor="middle" className="fill-brand-navy" fontSize="17" fontWeight="800">We're</text>
        <text x="462" y="192" textAnchor="middle" className="fill-brand-navy" fontSize="17" fontWeight="800">Hiring!</text>
      </motion.g>

      {/* plant */}
      <g transform="translate(40 0)">
      <path d="M520 402h-36l-6-58h48Z" className="fill-brand-cream/10 stroke-brand-cream/25" strokeWidth="2" />
      <motion.g
        style={{ transformOrigin: "502px 344px" }}
        animate={{ rotate: [-3, 3, -3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="fill-brand-orange"
      >
        <path d="M502 344c-4-30 4-56 22-70 4 26-6 52-22 70Z" />
        <path d="M500 344c-14-20-34-26-50-22 10 18 30 26 50 22Z" className="fill-brand-orange/70" />
        <path d="M504 344c10-18 30-24 46-20-8 16-26 24-46 20Z" className="fill-brand-orange/80" />
      </motion.g>
      </g>
    </svg>
  );
}

export default function CareersHero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-navy text-brand-cream">
      {/* background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(250,247,242,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(250,247,242,0.04)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-orange/90 blur-[2px]" />
        <div className="absolute -right-40 -top-40 h-[30rem] w-[30rem] rounded-full border border-brand-cream/10" />
        <div className="absolute -bottom-28 -left-28 hidden h-64 w-64 rounded-full bg-brand-orange/80 sm:block" />
        <div className="absolute right-[30%] top-[30%] h-[420px] w-[420px] rounded-full bg-brand-orange/10 blur-[120px]" />
        <div className="absolute left-6 top-28 grid grid-cols-3 gap-2.5 opacity-40">
          {Array.from({ length: 9 }).map((_, i) => (
            <span key={i} className="h-1 w-1 rounded-full bg-brand-cream" />
          ))}
        </div>
      </div>

      <div className="mx-auto grid min-h-[calc(100svh-8.5rem)] max-w-7xl items-center gap-10 px-6 pb-6 pt-32 lg:grid-cols-[1.05fr_1fr] lg:gap-6 lg:pt-24">
        {/* left: text */}
        <div className="relative z-10 text-center lg:text-left">
          <motion.span
            {...fadeUp(0)}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-cream/80 sm:text-xs ${glass}`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
            Careers at R&D
          </motion.span>

          <motion.h1
            {...fadeUp(0.1)}
            className="mt-6 text-[clamp(2.4rem,5.6vw,4.5rem)] font-bold leading-[1.02] tracking-[-0.04em]"
          >
            <span className="whitespace-nowrap">Build Something</span>
            <br />
            <span className="relative inline-block text-brand-orange">
              Extraordinary
              <motion.svg
                viewBox="0 0 300 16"
                preserveAspectRatio="none"
                className="absolute -bottom-2 left-0 h-3 w-full"
                fill="none"
              >
                <motion.path
                  d="M4 11C70 4 180 2 296 8"
                  className="stroke-brand-orange/60"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.9, ease }}
                />
              </motion.svg>
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.25)}
            className="mx-auto mt-7 max-w-md text-base leading-relaxed text-brand-cream/65 md:text-lg lg:mx-0"
          >
            Join our talented team and help shape the future of digital innovation.
          </motion.p>

          <motion.div
            {...fadeUp(0.4)}
            className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <a
              href="#apply"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-orange px-7 py-3.5 text-sm font-semibold text-brand-navy shadow-[0_14px_40px_-12px_rgba(247,147,30,0.8)] transition-colors duration-300 hover:bg-brand-cream"
            >
              Explore Open Positions
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="#why-join" className="group inline-flex items-center gap-3 text-sm font-semibold text-brand-cream">
              <span className={`flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-300 group-hover:border-brand-orange group-hover:text-brand-orange ${glass}`}>
                <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </span>
              Why join us
            </a>
          </motion.div>
        </div>

        {/* right: illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease }}
          className="relative mx-auto w-full max-w-[580px]"
        >
          <Workspace />
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease }}
            className="absolute -left-2 bottom-[12%] hidden sm:block lg:-left-8"
          >
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
              <NowHiring />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* perks strip */}
      <motion.div {...fadeUp(0.7)} className="mx-auto max-w-5xl px-6 pb-12">
        <div className={`grid grid-cols-1 divide-y divide-brand-cream/10 rounded-3xl sm:grid-cols-3 sm:divide-x sm:divide-y-0 ${glass}`}>
          {perks.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group flex items-center gap-4 px-6 py-5 sm:justify-center">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-orange/15 text-brand-orange transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-brand-orange group-hover:text-brand-navy">
                <Icon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm font-bold">{title}</span>
                <span className="block text-xs text-brand-cream/55">{desc}</span>
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
