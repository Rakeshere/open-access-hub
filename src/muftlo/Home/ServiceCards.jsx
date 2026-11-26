import { useEffect, useState } from "react";
import Link from "@/muftlo/next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import webImage from "@/assets/genres/genre-web.jpg.asset.json";
import aiImage from "@/assets/genres/genre-ai.jpg.asset.json";
import marketingImage from "@/assets/genres/genre-marketing.jpg.asset.json";

const services = [
  {
    title: "Web & App Development",
    category: "DIGITAL EXPERIENCES",
    description: "Fast, thoughtful websites and software built around the way your business works.",
    image: webImage.url,
  },
  {
    title: "AI Automations",
    category: "SMARTER OPERATIONS",
    description: "Chatbots, connected workflows and CRM systems that give your team more time for meaningful work.",
    image: aiImage.url,
  },
  {
    title: "Digital Marketing",
    category: "GROWTH & VISIBILITY",
    description: "SEO, Meta ads and creative campaigns that connect your brand with the right people.",
    image: marketingImage.url,
  },
];

export function WobbleCardDemo() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActive((value) => (value + 1) % services.length), 3200);
    return () => window.clearInterval(timer);
  }, [paused]);
  return (
    <section className="py-12 md:py-16" aria-labelledby="home-services-title">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-7 flex items-end justify-between gap-4 md:mb-9">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-brand-orange">What we do</p>
            <h2 id="home-services-title" className="max-w-2xl text-3xl font-semibold leading-tight text-brand-cream md:text-4xl">
              Our Services
            </h2>
          </div>
          <Button asChild variant="outline" className="hidden shrink-0 gap-2 border-brand-cream/20 bg-brand-cream/5 text-brand-cream hover:bg-brand-cream/10 hover:text-brand-cream sm:inline-flex">
            <Link href="/services">View all services <ArrowUpRight aria-hidden="true" /></Link>
          </Button>
        </div>

        <div className="home-service-strip" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={() => setPaused(false)}>
          {services.map((service, index) => (
            <article key={service.title} data-active={active === index} className="home-service-card" onMouseEnter={() => setActive(index)}>
              <div className="home-service-copy">
                <p className="mb-3 text-[10px] font-semibold uppercase text-brand-navy/55">{service.category}</p>
                <h3 className="text-xl font-semibold leading-tight md:text-2xl">{service.title}</h3>
                <p className="home-service-description mt-3 text-sm leading-relaxed text-brand-navy/70">{service.description}</p>
                <Button asChild variant="ghost" className="mt-auto h-auto justify-start gap-3 p-0 pt-5 text-brand-navy hover:bg-transparent hover:text-brand-navy">
                  <Link href="/services">Read more <span className="grid size-8 place-items-center rounded-full bg-brand-orange"><ArrowRight aria-hidden="true" /></span></Link>
                </Button>
              </div>
              <div className="home-service-image"><img src={service.image} alt={service.title} loading="lazy" /></div>
              <Button variant="ghost" size="icon" className="absolute inset-0 h-full w-full rounded-lg hover:bg-transparent" aria-label={`Show ${service.title}`} aria-pressed={active === index} onClick={() => setActive(index)} />
            </article>
          ))}
        </div>

        <Button asChild className="mt-4 w-full gap-2 bg-brand-orange text-brand-navy hover:bg-brand-orange/90 sm:hidden">
          <Link href="/services">View all services <ArrowUpRight aria-hidden="true" /></Link>
        </Button>
      </div>
    </section>
  );
}