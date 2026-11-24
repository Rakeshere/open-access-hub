import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AppWindow, ArrowUpRight, BarChart3, Bell, Bot, Code2, Contact, Cpu, Facebook, Globe, Heart,
  Instagram, LineChart, Link2, Megaphone, MonitorSmartphone, Search, Smartphone, Sparkles, Target,
  TrendingUp, Users, Workflow,
} from "lucide-react";
import Link from "@/muftlo/next/link";
import webImg from "@/assets/genres/genre-web.jpg.asset.json";
import appImg from "@/assets/genres/genre-app.jpg.asset.json";
import aiImg from "@/assets/genres/genre-ai.jpg.asset.json";
import crmImg from "@/assets/genres/genre-crm.jpg.asset.json";
import marketingImg from "@/assets/genres/genre-marketing.jpg.asset.json";
import seoImg from "@/assets/genres/genre-seo.jpg.asset.json";
import metaImg from "@/assets/genres/genre-meta.jpg.asset.json";

// Each topic: two-line title, short line, photo, floating icons and a brand palette.
// Palettes only mix the site's navy, orange and cream (see --color-genre-* in styles.css).
const genres = [
  { key: "web", top: "Web", bottom: "Development", text: "Fast, modern websites built to load quick, rank well and turn visitors into leads.", img: webImg.url, icons: [Code2, Globe, MonitorSmartphone], bg: "var(--color-brand-cream)", blob: "var(--color-brand-orange)", ink: "navy" },
  { key: "app", top: "App", bottom: "Development", text: "Android and iOS apps your customers enjoy using, from first sketch to store launch.", img: appImg.url, icons: [Smartphone, AppWindow, Bell], bg: "var(--color-genre-peach)", blob: "var(--color-genre-navy)", ink: "cream" },
  { key: "ai", top: "AI", bottom: "Automation", text: "Chatbots and smart workflows that answer, follow up and report while you sleep.", img: aiImg.url, icons: [Bot, Sparkles, Cpu], bg: "var(--color-brand-cream)", blob: "var(--color-genre-ember)", ink: "cream" },
  { key: "crm", top: "CRM", bottom: "Systems", text: "Every lead, client and payment in one clear dashboard your whole team can use.", img: crmImg.url, icons: [Users, Contact, BarChart3], bg: "var(--color-genre-apricot)", blob: "var(--color-genre-navy)", ink: "cream" },
  { key: "marketing", top: "Digital", bottom: "Marketing", text: "Campaigns, content and creatives planned around one goal: more customers.", img: marketingImg.url, icons: [Megaphone, Target, TrendingUp], bg: "var(--color-genre-peach)", blob: "var(--color-brand-orange)", ink: "navy" },
  { key: "seo", top: "SEO &", bottom: "Search", text: "Climb Google results with technical fixes, local SEO and content that ranks.", img: seoImg.url, icons: [Search, LineChart, Link2], bg: "var(--color-brand-cream)", blob: "var(--color-genre-rust)", ink: "cream" },
  { key: "meta", top: "Meta", bottom: "Ads", text: "Facebook and Instagram ads that reach the right people and bring real enquiries.", img: metaImg.url, icons: [Instagram, Facebook, Heart], bg: "var(--color-genre-apricot)", blob: "var(--color-genre-navy)", ink: "cream" },
];

// Same command structure in every shape so the blob can morph between them.
const blobs = [
  "M0 0 H360 C420 70 330 150 380 230 C430 310 520 330 470 420 C440 480 360 520 290 520 H0 Z",
  "M0 0 H400 C450 80 360 160 400 240 C440 320 540 300 500 410 C470 490 380 520 320 520 H0 Z",
  "M0 0 H340 C400 60 350 170 410 250 C470 330 500 360 450 430 C420 490 340 520 270 520 H0 Z",
];

const iconSpots = [
  "left-[2%] top-[-4%]",
  "left-[-14%] top-[48%]",
  "right-[12%] bottom-[-6%]",
];

const DELAY = 4800;

export default function GenreShowcase() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const g = genres[index];
  const light = g.ink === "cream";

  useEffect(() => {
    if (paused) return undefined;
    const t = setTimeout(() => setIndex((i) => (i + 1) % genres.length), DELAY);
    return () => clearTimeout(t);
  }, [index, paused]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 0.68, 0, 1] }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative h-[440px] w-full overflow-hidden rounded-[28px] shadow-[0_30px_80px_-30px] shadow-brand-orange/40 ring-1 ring-brand-cream/10 sm:h-[500px]"
      style={{ background: g.bg, transition: "background 900ms ease" }}
      aria-roledescription="carousel"
      aria-label="What we build"
    >
      {/* Morphing blob */}
      <svg viewBox="0 0 600 520" preserveAspectRatio="none" className="absolute inset-0 size-full" aria-hidden="true">
        <motion.path
          initial={false}
          animate={{ d: blobs[index % blobs.length], fill: g.blob }}
          transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
        />
        <motion.circle
          initial={false}
          animate={{ cx: index % 2 ? 560 : 520, cy: index % 2 ? 540 : 560, fill: g.blob }}
          r="120"
          opacity="0.25"
          transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
        />
      </svg>

      {/* Copy */}
      <div className="absolute left-5 top-6 z-10 w-[58%] sm:left-8 sm:top-9 sm:w-[52%]">
        <p className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${light ? "text-brand-cream/70" : "text-brand-navy/70"}`}>
          {String(index + 1).padStart(2, "0")} / {String(genres.length).padStart(2, "0")} · What we build
        </p>
        <AnimatePresence mode="wait">
          <motion.div key={g.key} className="mt-3">
            <h2 className={`text-[clamp(1.6rem,4.2vw,2.9rem)] font-extrabold uppercase leading-[0.95] tracking-tight ${light ? "text-brand-cream" : "text-brand-navy"}`}>
              {[g.top, g.bottom].map((line, li) => (
                <span key={line} className="block overflow-hidden">
                  <motion.span
                    className="block"
                    initial={{ y: "100%", opacity: 0, filter: "blur(8px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: "-60%", opacity: 0, filter: "blur(8px)" }}
                    transition={{ duration: 0.55, delay: li * 0.08, ease: [0.22, 0.68, 0, 1] }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.45, delay: 0.18 }}
              className={`mt-4 max-w-[30ch] text-[13px] leading-relaxed sm:text-sm ${light ? "text-brand-cream/80" : "text-brand-navy/80"}`}
            >
              {g.text}
            </motion.p>
          </motion.div>
        </AnimatePresence>
        <Link
          href="/services"
          className={`mt-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-semibold transition-transform hover:-translate-y-0.5 ${light ? "bg-brand-cream text-brand-navy" : "bg-brand-navy text-brand-cream"}`}
        >
          Explore service <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      </div>

      {/* Photo plate */}
      <div className="absolute right-[-10%] top-[40%] z-10 aspect-square w-[56%] -translate-y-1/2 sm:right-[-6%] sm:top-1/2 sm:w-[54%]">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={g.key}
            className="absolute inset-0"
            initial={{ x: "35%", rotate: -70, scale: 0.7, opacity: 0 }}
            animate={{ x: 0, rotate: 0, scale: 1, opacity: 1 }}
            exit={{ x: "70%", rotate: 80, scale: 0.85, opacity: 0 }}
            transition={{ duration: 0.95, ease: [0.22, 0.68, 0, 1] }}
          >
            <div className="size-full overflow-hidden rounded-full border-[6px] border-brand-cream shadow-[0_25px_60px_-15px] shadow-brand-navy/60">
              <img src={g.img} alt={`${g.top} ${g.bottom}`} className="size-full object-cover" />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Floating icons */}
        <AnimatePresence>
          {g.icons.map((Icon, i) => (
            <motion.span
              key={`${g.key}-${i}`}
              className={`absolute z-20 ${iconSpots[i]}`}
              initial={{ scale: 0, opacity: 0, rotate: -40 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.35 + i * 0.1 }}
            >
              <motion.span
                className="grid size-10 place-items-center rounded-2xl bg-brand-cream text-brand-orange shadow-lg shadow-brand-navy/25 sm:size-12"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3 + i * 0.6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Icon className="size-5 sm:size-6" aria-hidden="true" />
              </motion.span>
            </motion.span>
          ))}
        </AnimatePresence>
      </div>

      {/* Topic picker */}
      <div className="absolute bottom-5 left-5 right-5 z-20 sm:bottom-8 sm:left-8 sm:right-auto">
        <div className="flex flex-wrap gap-2 sm:gap-2.5">
          {genres.map((item, i) => (
            <button
              key={item.key}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`${item.top} ${item.bottom}`}
              aria-pressed={i === index}
              className="group relative pb-2.5"
            >
              <span
                className={`block size-9 overflow-hidden rounded-full border-2 transition-all duration-300 sm:size-11 ${i === index ? "scale-110 border-brand-cream" : "border-transparent opacity-80 group-hover:opacity-100"}`}
              >
                <img src={item.img} alt="" className="size-full object-cover" />
              </span>
              {i === index && (
                <span className={`absolute bottom-0 left-1 right-1 h-[3px] overflow-hidden rounded-full ${light ? "bg-brand-cream/30" : "bg-brand-navy/20"}`}>
                  <motion.span
                    key={`${item.key}-${paused}`}
                    className={`block h-full ${light ? "bg-brand-cream" : "bg-brand-navy"}`}
                    initial={{ width: paused ? "100%" : "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: paused ? 0 : DELAY / 1000, ease: "linear" }}
                  />
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
