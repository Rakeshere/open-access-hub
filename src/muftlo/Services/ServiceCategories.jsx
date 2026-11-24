import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Bot, Camera, CheckCircle2, Code2, Megaphone, Smartphone } from "lucide-react";
import Link from "@/muftlo/next/link";
import { getSiteMedia } from "@/muftlo/site-media";
import aiChatbots from "@/assets/services/ai-chatbots.jpg.asset.json";
import aiWorkflow from "@/assets/services/ai-workflow.jpg.asset.json";
import aiCrm from "@/assets/services/ai-crm.jpg.asset.json";
import aiInsights from "@/assets/services/ai-insights.jpg.asset.json";
import appNative from "@/assets/services/app-native.jpg.asset.json";
import appCross from "@/assets/services/app-cross.jpg.asset.json";
import appUiux from "@/assets/services/app-uiux.jpg.asset.json";
import appSupport from "@/assets/services/app-support.jpg.asset.json";

export const serviceCategories = [
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    eyebrow: "Growth & visibility",
    icon: Megaphone,
    intro: "We craft customized digital marketing strategies that build your brand's online presence and drive targeted engagement.",
    cover: getSiteMedia("Best Digital Marketing.jpg"),
    items: [
      {
        title: "SEO (Search Engine Optimization)",
        description: "SEO enhances your website's visibility on search engines, bringing in organic traffic and helping potential customers find you easily.",
        advantages: "Improves search rankings, increases organic reach, and enhances brand credibility by making your site more authoritative and trustworthy.",
        image: getSiteMedia("Search_Engine_Optimization.webp"),
      },
      {
        title: "SEM (Search Engine Marketing)",
        description: "SEM combines paid search ads with keyword targeting to place your brand at the top of search results.",
        advantages: "Provides instant visibility on search engines, drives qualified traffic, and generates quick results to complement long-term SEO efforts.",
        image: getSiteMedia("Cover.Search-engine-marketing.jpg"),
      },
      {
        title: "SMM (Social Media Marketing)",
        description: "SMM builds brand presence across social media platforms, fostering engagement and creating a loyal audience.",
        advantages: "Enhances brand recognition, facilitates direct interaction with your audience, and supports targeted ad campaigns for specific demographics.",
        image: getSiteMedia("blog240624044117.jpg"),
      },
      {
        title: "Google Ads",
        description: "Our team manages Google Ads campaigns to attract high-intent traffic using strategic targeting and budget optimization.",
        advantages: "Delivers measurable ROI, provides precise targeting options, and boosts visibility among ready-to-buy audiences.",
        image: getSiteMedia("google-ads-courses.png"),
      },
      {
        title: "Branding",
        description: "Branding services encompass logo design, brand strategy, and content creation to establish a cohesive identity.",
        advantages: "Builds a strong brand identity, fosters customer trust, and differentiates your business from competitors.",
        image: getSiteMedia("Pastelli.jpg"),
      },
      {
        title: "Pay-Per-Click Marketing",
        description: "PPC ads target specific keywords, placing your business in front of a relevant audience and driving immediate traffic.",
        advantages: "Offers flexible budgeting, measurable results, and drives immediate traffic that can lead to high conversions.",
        image: getSiteMedia("marketing-promotional-campaign.jpg"),
      },
    ],
  },
  {
    id: "photo-video",
    title: "Photo & Video Production",
    eyebrow: "Content & creative",
    icon: Camera,
    intro: "R&D Software Solutions's media production team creates captivating visuals that resonate with audiences and bring brands to life.",
    cover: getSiteMedia("video-production-crew.jpg"),
    items: [
      {
        title: "Product Photography",
        description: "High-quality product images that emphasize details, features, and aesthetics, ideal for e-commerce, social media, and ad campaigns.",
        image: getSiteMedia("photography-g14011171a.jpg"),
      },
      {
        title: "Real Estate Photography",
        description: "Professional property photos that showcase real estate in its best light, helping properties stand out in a competitive market.",
        image: getSiteMedia("Reliant.jpg"),
      },
      {
        title: "Corporate Photography",
        description: "Professional shoots that capture corporate events, team photos, and office environments, building a trustworthy brand image.",
        image: getSiteMedia("business-corporate-portraits.webp"),
      },
      {
        title: "Video Production",
        description: "From explainer videos to brand stories, we create compelling video content that engages audiences and drives results.",
        image: getSiteMedia("video-production-tips.webp"),
      },
      {
        title: "Social Media Content",
        description: "Custom photo and video content optimized for social media platforms, designed to engage followers and build brand presence.",
        image: getSiteMedia("The Wood A.jpg"),
      },
      {
        title: "Portfolio Photography",
        description: "Comprehensive photo sessions for personal or professional portfolios, including headshots, modeling, and creative projects.",
        image: getSiteMedia("il_fullxfull.6607106719_ha19.jpg"),
      },
    ],
  },
  {
    id: "web-development",
    title: "Web Development",
    eyebrow: "Digital experiences",
    icon: Code2,
    intro: "We develop websites that are visually appealing, highly functional, and tailored to meet your business objectives.",
    cover: getSiteMedia("Dots.jpg"),
    items: [
      {
        title: "Full-Stack Development",
        description: "Development of front-end and back-end systems for a seamless user experience.",
        advantages: "Delivers a cohesive, efficient website, provides a complete and functional digital experience, and supports future scalability.",
        image: getSiteMedia("image.png"),
      },
      {
        title: "E-Commerce Development",
        description: "Custom-built e-commerce sites that offer a user-friendly shopping experience and streamlined checkout processes.",
        advantages: "Boosts online sales, enhances customer experience, and integrates payment and inventory management solutions.",
        image: getSiteMedia("E-Commerce-Development-Bloom-IT.jpg"),
      },
      {
        title: "CMS Website Development",
        description: "Websites powered by CMS platforms like WordPress, making it easy for clients to manage their content.",
        advantages: "Simplifies content updates, reduces maintenance costs, and empowers clients to manage their website without technical expertise.",
        image: getSiteMedia("webDev.jpg"),
      },
      {
        title: "SEO Optimization",
        description: "Built-in SEO strategies to ensure your website is optimized for search engines from day one.",
        advantages: "Improves search visibility, attracts organic traffic, and strengthens your online presence.",
        image: getSiteMedia("Search_Engine_Optimization.webp"),
      },
    ],
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    eyebrow: "Smarter workflows",
    icon: Bot,
    intro: "Practical AI tools and automations that simplify everyday work, connect your systems, and give your team more time for what matters.",
    cover: aiWorkflow.url,
    items: [
      {
        title: "AI Chatbots & Assistants",
        description: "Smart assistants for your website and WhatsApp that answer questions, qualify leads, and support customers around the clock.",
        advantages: "Faster replies, fewer missed enquiries, and lower support costs without losing a personal touch.",
        image: aiChatbots.url,
      },
      {
        title: "Workflow Automation",
        description: "We connect the tools you already use so repetitive tasks like data entry, follow-ups, and reports run on their own.",
        advantages: "Saves hours every week, reduces manual errors, and keeps every team working from the same information.",
        image: aiWorkflow.url,
      },
      {
        title: "CRM & Lead Automation",
        description: "Automatic lead capture, scoring, and follow-up journeys so every enquiry reaches the right person at the right time.",
        advantages: "Higher conversion rates, a clearer sales pipeline, and no lead left waiting.",
        image: aiCrm.url,
      },
      {
        title: "AI Data Insights",
        description: "Dashboards and AI-powered reports that turn your business data into clear, timely decisions.",
        advantages: "Spot trends early, measure what works, and plan with confidence instead of guesswork.",
        image: aiInsights.url,
      },
    ],
  },
  {
    id: "app-development",
    title: "App Development",
    eyebrow: "Mobile experiences",
    icon: Smartphone,
    intro: "Useful, intuitive mobile applications shaped around the people who use them and the goals your business needs to reach.",
    cover: appNative.url,
    items: [
      {
        title: "Android & iOS Apps",
        description: "Native mobile apps built for performance, security, and a smooth experience on every device.",
        advantages: "Fast, reliable apps that feel at home on each platform and are ready for the app stores.",
        image: appNative.url,
      },
      {
        title: "Cross-Platform Apps",
        description: "One codebase for Android, iOS, and tablets, so you launch everywhere sooner and maintain less.",
        advantages: "Lower development cost, quicker launch, and consistent features across all devices.",
        image: appCross.url,
      },
      {
        title: "App UI/UX Design",
        description: "Research-led wireframes, prototypes, and polished interfaces designed around real user journeys.",
        advantages: "Apps people enjoy using, higher retention, and fewer changes after launch.",
        image: appUiux.url,
      },
      {
        title: "Maintenance & Support",
        description: "Ongoing updates, performance monitoring, and new features to keep your app healthy as you grow.",
        advantages: "Fewer crashes, up-to-date compatibility, and a dependable partner after go-live.",
        image: appSupport.url,
      },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

function CategoryNav({ activeId }) {
  const barRef = useRef(null);

  // On small screens the pill bar scrolls sideways; keep the active pill visible.
  useEffect(() => {
    const bar = barRef.current;
    const pill = bar?.querySelector(`[href="#${activeId}"]`);
    if (bar && pill) bar.scrollTo({ left: pill.offsetLeft - 16, behavior: "smooth" });
  }, [activeId]);

  return (
    <nav aria-label="Service categories" className="sticky top-24 z-30 mx-auto max-w-7xl px-5 md:px-8">
      <div ref={barRef} className="relative -mx-1 flex gap-2 overflow-x-auto rounded-full border border-brand-cream/10 bg-brand-navy/80 p-1.5 backdrop-blur-md [scrollbar-width:none] md:mx-auto md:w-max">
        {serviceCategories.map((category) => {
          const Icon = category.icon;
          const isActive = activeId === category.id;
          return (
            <a
              key={category.id}
              href={`#${category.id}`}
              aria-current={isActive ? "true" : undefined}
              className={`relative flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-colors sm:text-sm ${isActive ? "text-brand-navy" : "text-brand-cream/70 hover:text-brand-cream"}`}
            >
              {isActive && (
                <motion.span layoutId="service-nav-pill" className="absolute inset-0 -z-10 rounded-full bg-brand-orange" transition={{ type: "spring", stiffness: 380, damping: 32 }} />
              )}
              <Icon aria-hidden="true" size={15} />
              {category.title}
            </a>
          );
        })}
      </div>
    </nav>
  );
}

function ServiceCard({ item, index, compact }) {
  return (
    <motion.article
      variants={fadeUp}
      transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.08 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-brand-cream/10 bg-gradient-to-b from-brand-cream/[0.07] to-brand-cream/[0.02] transition-all duration-500 hover:-translate-y-2 hover:border-brand-orange/60 hover:shadow-[0_24px_60px_-24px] hover:shadow-brand-orange/40"
    >
      <div className={`relative overflow-hidden ${compact ? "aspect-[4/3]" : "aspect-[16/10]"}`}>
        <img src={item.image} alt={item.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
        <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/20 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-brand-cream/20 bg-brand-navy/70 px-3 py-1 text-[11px] font-semibold tracking-[0.12em] text-brand-orange backdrop-blur">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span aria-hidden="true" className="absolute right-4 top-4 grid size-9 place-items-center rounded-full bg-brand-orange text-brand-navy opacity-0 transition-all duration-500 group-hover:rotate-45 group-hover:opacity-100">
          <ArrowUpRight size={17} />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className={`font-semibold leading-snug text-brand-cream ${compact ? "text-lg" : "text-xl"}`}>{item.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-brand-cream/70">{item.description}</p>
        {item.advantages && (
          <div className="mt-auto pt-5">
            <div className="border-t border-brand-cream/10 pt-4">
              <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-orange">
                <CheckCircle2 aria-hidden="true" size={14} /> Advantages
              </p>
              <p className="mt-2 text-sm leading-relaxed text-brand-cream/60">{item.advantages}</p>
            </div>
          </div>
        )}
      </div>
      <span aria-hidden="true" className="absolute bottom-0 left-0 h-[3px] w-0 bg-brand-orange transition-all duration-500 group-hover:w-full" />
    </motion.article>
  );
}

function CategorySection({ category, number }) {
  const Icon = category.icon;
  const compact = category.items.length === 4;
  const flipped = number % 2 === 0;

  return (
    <section id={category.id} aria-labelledby={`${category.id}-title`} className="scroll-mt-40 py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mb-8 overflow-hidden rounded-3xl border border-brand-cream/10 md:mb-10"
        >
          <img src={category.cover} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
          <div aria-hidden="true" className={`absolute inset-0 ${flipped ? "bg-gradient-to-l" : "bg-gradient-to-r"} from-brand-navy via-brand-navy/90 to-brand-navy/40`} />
          <div aria-hidden="true" className="absolute inset-0 bg-brand-navy/30" />
          <div className={`relative flex flex-col gap-6 p-6 sm:p-8 md:flex-row md:items-end md:justify-between md:p-12 ${flipped ? "md:flex-row-reverse md:text-right" : ""}`}>
            <div className="max-w-xl">
              <div className={`mb-4 flex items-center gap-3 ${flipped ? "md:justify-end" : ""}`}>
                <span className="grid size-11 place-items-center rounded-xl bg-brand-orange text-brand-navy">
                  <Icon aria-hidden="true" size={20} />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-orange">
                  {String(number).padStart(2, "0")} / {category.eyebrow}
                </span>
              </div>
              <h2 id={`${category.id}-title`} className="text-3xl font-extrabold leading-[1.05] text-brand-cream sm:text-4xl md:text-5xl">
                {category.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-brand-cream/75 md:text-lg">{category.intro}</p>
            </div>
            <div className={`flex shrink-0 flex-col gap-3 ${flipped ? "md:items-start" : "md:items-end"}`}>
              <span className="text-sm text-brand-cream/60">
                <span className="text-2xl font-bold text-brand-cream">{category.items.length}</span> services
              </span>
              <Link href="/contact" className="inline-flex w-max items-center gap-2 rounded-full bg-brand-orange px-5 py-2.5 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-cream">
                Start a project <ArrowUpRight aria-hidden="true" size={16} />
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className={`grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 ${compact ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}
        >
          {category.items.map((item, index) => (
            <ServiceCard key={item.title} item={item} index={index} compact={compact} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default function ServiceCategories() {
  const [activeId, setActiveId] = useState(serviceCategories[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    serviceCategories.forEach((category) => {
      const el = document.getElementById(category.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative pt-12 md:pt-16">
      <div className="mx-auto mb-8 max-w-3xl px-5 text-center md:mb-10">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-brand-orange">What we offer</p>
        <h2 className="text-3xl font-extrabold leading-tight text-brand-cream md:text-5xl">Everything your brand needs to grow</h2>
        <p className="mt-4 text-base text-brand-cream/65 md:text-lg">Five focused teams, one partner. Pick a service to explore what we do.</p>
      </div>
      <CategoryNav activeId={activeId} />
      {serviceCategories.map((category, index) => (
        <CategorySection key={category.id} category={category} number={index + 1} />
      ))}
    </div>
  );
}
