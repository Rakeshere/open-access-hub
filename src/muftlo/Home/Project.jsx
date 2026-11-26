

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { getSiteMedia } from "@/muftlo/site-media";

const projects = [
  {
    id: 1,
    title: "Dotsquares",
    category: "Company Profile Video Production",
    image: getSiteMedia("Dots.jpg"),
    metrics: [
      {
        value: "Professional Standards",
        label: "Showcased employee excellence & dedication",
      },
      {
        value: "Transparent Process",
        label: "Highlighted customer trust & reliability",
      },
    ],
    link: "https://youtu.be/5bGOdQRwl3c?si=FdABCnPL5_qq0zPY",
  },
  {
    id: 2,
    title: "Search Abode",
    category: "Digital Marketing & Social Media Strategy",
    image: getSiteMedia("Best Digital Marketing.jpg"),
    metrics: [
      {
        value: "4x Growth",
        label: "Expanded to 8k+ genuine Instagram followers",
      },
      {
        value: "23–27 Reels/Month",
        label: "Produced high-quality, engaging real estate reels",
      },
    ],
    link: "https://www.instagram.com/searchabode?igsh=MXY5dmR2ZTB5dGh4Zw==",
  },
  {
    id: 3,
    title: "Sondaryam",
    category: "Podcast & Multi-Platform Branding",
    image: getSiteMedia("Sondaryam.jpg"),
    metrics: [
      {
        value: "4x Brand Growth",
        label: "Shifted from static posts to YouTube podcast strategy",
      },
      {
        value: "Celebrity Podcast",
        label: "Created engaging shows boosting reach & credibility",
      },
    ],
    link: "https://youtu.be/V-16bh_2FF0?si=QV96HYQ3F_L10On8",
  },
  {
    id: 4,
    title: "RNT School",
    category: "Complete Digital Marketing & Web Presence",
    image: getSiteMedia("RNT.jpg"),
    metrics: [
      {
        value: "#1 Google Rank",
        label: "Top position for 'Best School in Kuchaman City'",
      },
      {
        value: "10K Followers",
        label: "Built premium digital identity & brand trust",
      },
    ],
    link: "https://www.instagram.com/rntschool?igsh=MXVtaDc3NHBybXJ1cQ==",
  },
  {
    id: 5,
    title: "Opel Home",
    category: "Logo Design & Branding",
    image: getSiteMedia("Opel Home.jpg"),
    metrics: [
      {
        value: "Professional Logo",
        label: "Customized design as per client vision",
      },
      {
        value: "Brand Support",
        label: "Supported Dubai’s top-selling furniture brand",
      },
    ],
    link: "#",
  },
  {
    id: 6,
    title: "Pastelli",
    category: "Fashion Brand Marketing",
    image: getSiteMedia("Pastelli.jpg"),
    metrics: [
      {
        value: "91k+ Followers",
        label: "Strong digital presence on Instagram",
      },
      {
        value: "Brand Scaling",
        label: "Empowering new fashion brands with unique identities",
      },
    ],
    link: "#",
  },
  {
    id: 7,
    title: "The Antiques Furniture",
    category: "SEO & Digital Branding",
    image: getSiteMedia("The Wood A.jpg"),
    metrics: [
      {
        value: "Top Google Rank",
        label: "Best Hindu Temple Furniture in Dubai",
      },
      {
        value: "SEO Success",
        label: "Delivered consistent results across keywords",
      },
    ],
    link: "https://theantiquesfurniture.com",
  },
  {
    id: 8,
    title: "Force Lifts",
    category: "Digital Branding & Content Production",
    image: getSiteMedia("ForceLifts.jpg"),
    metrics: [
      { value: "Premium Content", label: "Reels, testimonials, infographics" },
      {
        value: "3-Month Results",
        label: "Visible digital growth in elevator industry",
      },
    ],
    link: "#",
  },
  {
    id: 9,
    title: "Reliant Housing",
    category: "Real Estate Digital Marketing",
    image: getSiteMedia("Reliant.jpg"),
    metrics: [
      {
        value: "Day-One Marketing",
        label: "Worked on premium and under-construction projects",
      },
      {
        value: "Trusted Brand",
        label: "Building recognition in Jaipur real estate",
      },
    ],
    link: "https://www.instagram.com/relianthousing?igsh=eXpzdXl0Ym51NWNo",
  },
  {
    id: 10,
    title: "Parth Sarthi Builder",
    category: "Brand Elevation & GMB Optimization",
    image: getSiteMedia("parth.png"),
    metrics: [
      {
        value: "Fresh Brand Image",
        label: "Enhanced digital presence & theme",
      },
      {
        value: "Project Management",
        label: "Handled upcoming residential projects & GMB",
      },
    ],
    link: "https://www.instagram.com/parthsarthi_jaipur?igsh=MTdxZWkxZ255aDY4dw==",
  },
  {
    id: 11,
    title: "Shubh Weddings Magazine",
    category: "Event Digital Partner",
    image: getSiteMedia("shubh Weddings.jpg"),
    metrics: [
      {
        value: "Award Show Partner",
        label: "Official digital partner for every award show",
      },
      {
        value: "Premium Coverage",
        label: "Photography & videography of Bollywood & international guests",
      },
    ],
    link: "https://www.instagram.com/shubhweddingsmagazine?igsh=em15djF1bW5yeGRp",
  },
  {
    id: 12,
    title: "GKB Group",
    category: "Builders & Developers",
    image: getSiteMedia("GKB.jpg"),
    metrics: [
      {
        value: "Brand Establishment",
        label: "",
      },
      {
        value: "Content Creation & Marketing",
        label: "",
      },
    ],
    link: "",
  },
];

export default function ProjectsShowcase() {
  const featuredProjects = [projects[0], projects[2], projects[3], projects[6], projects[8]].filter(Boolean);
  return (
    <section aria-labelledby="projects-heading" className="bg-brand-navy px-5 py-16 text-brand-cream md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase text-brand-orange">Selected work</p>
            <h2 id="projects-heading" className="text-4xl font-semibold md:text-5xl">Our Projects</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-brand-cream/65">A few partnerships, shaped into work that moves brands forward.</p>
        </div>
        <div className="home-project-stack">
          {featuredProjects.map((project, index) => (
            <article key={project.id} className="home-project-card" style={{ "--stack-index": index, "--stack-inset": `${(featuredProjects.length - index - 1) * 8}px` }}>
              <div className="home-project-copy">
                <p className="mb-4 text-[11px] font-semibold uppercase text-brand-orange">0{index + 1} / 0{featuredProjects.length} · {project.category}</p>
                <h3 className="text-3xl font-semibold leading-tight md:text-5xl">{project.title}</h3>
                <div className="mt-auto pt-5">
                  <div className="mb-4 flex flex-wrap gap-x-5 gap-y-2">
                    {project.metrics.map((metric) => <span key={metric.value} className="text-xs font-medium text-brand-cream/75">{metric.value}</span>)}
                  </div>
                  <p className="max-w-lg text-sm leading-relaxed text-brand-cream/65">{project.metrics.map((metric) => metric.label).filter(Boolean).join(" ")}</p>
                  <Button asChild variant="ghost" className="mt-4 px-0 text-brand-orange hover:bg-transparent hover:text-brand-cream">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">View project <ArrowUpRight aria-hidden="true" /></a>
                  </Button>
                </div>
              </div>
              <img className="home-project-image" src={project.image} alt={`${project.title} project`} loading="lazy" />
            </article>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button asChild className="bg-brand-orange px-6 text-brand-navy hover:bg-brand-orange/90"><Link to="/services">Explore More <ArrowRight aria-hidden="true" /></Link></Button>
        </div>
      </div>
    </section>
  );
}
