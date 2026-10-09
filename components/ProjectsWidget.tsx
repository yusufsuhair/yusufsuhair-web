"use client";

import { ExternalLink, Globe, Smartphone, Link, Code2, ShoppingBag, Gamepad2 } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  role: string;
  url?: string;
  description: string;
  tech: string[];
  android?: string;
  ios?: string;
  image?: string;
  cta?: string;
  category: "web" | "mobile" | "games" | "crypto" | "ecommerce";
  storesOnly?: boolean;
}

const projectsData: Project[] = [
  {
    title: "MudahAI: Managed AI Agents for Businesses",
    role: "Founder / AI Agent Builder",
    url: "https://mudahai.com",
    description:
      "A done-for-you AI operations system that handles WhatsApp enquiries, bookings, reminders, rescheduling and follow-ups, with human escalation built into the workflow.",
    tech: ["AI Agents", "n8n", "WhatsApp Cloud API", "OpenAI", "Supabase", "DevOps"],
    category: "web",
    image: "https://mudahai.com/opengraph-image?b83510d8ccd8f3df",
    cta: "Visit MudahAI",
  },
  {
    title: "LepakMamak: Malaysian Multiplayer Browser Game",
    role: "Creator / Full-Stack Engineer",
    url: "https://lepakmamak.my",
    description:
      "A free multiplayer browser game set in a miniature Kuala Lumpur, where players can explore the city, ride around, meet friends at the mamak and chat through live text and voice.",
    tech: ["Three.js", "WebGL", "Supabase", "Multiplayer", "Voice Chat"],
    category: "games",
    image: "https://lepakmamak.my/og.png",
    cta: "Play LepakMamak",
  },
  {
    title: "Slipstream: Interactive F1 Field Guide",
    role: "Creator / 3D Web Engineer",
    url: "https://f1.yusufsuhair.xyz",
    description:
      "A 3D study site for the 2026 Formula 1 season: hands-on lessons on the cars, active aero, power units, tyres, circuits, race starts, flags and the steering wheel, plus a quiz, with a physically modelled engine and crowd soundtrack.",
    tech: ["Three.js", "WebGL", "Web Audio", "Blender", "Cloudflare Workers"],
    category: "web",
    image: "/screenshot-slipstream-f1.png",
    cta: "Open Slipstream",
  },
  {
    title: "YS Academy: Kelas AI Online",
    role: "Founder / Full-Stack Engineer",
    url: "https://ysacademy.my",
    description: "A subscription learning platform with live workshops, member accounts, Stripe billing, lesson progress, access expiry and Telegram community integration.",
    tech: ["Next.js", "Supabase", "Stripe", "Telegram", "AI Education"],
    category: "web",
    image: "/screenshot-ys-academy.png",
    cta: "Visit YS Academy",
  },
  {
    title: "Shotivo: Screenshot & Video Mockup Studio",
    role: "Founder / Mobile Developer",
    url: "https://shotivo.pages.dev/",
    description:
      "A mobile studio for turning screenshots and screen recordings into device mockups, with customizable frames and backgrounds, saved styles, batch image exports and on-device video processing for iOS and Android.",
    tech: ["Flutter", "Dart", "iOS", "Android"],
    category: "mobile",
    image: "/projects/08-shotivo.webp",
    cta: "Explore Shotivo",
  },
  {
    title: "Fynecta: The Intelligent Terminal for Global Market",
    role: "Full-Stack Engineer",
    url: "https://www.fynecta.io/",
    description:
      "A trading terminal for crypto and commodities, with live price feeds, portfolio performance tracking and real-time trade signals, and algorithmic strategies running the managed portfolios.",
    tech: ["Next.js", "React", "Tailwind", "Real-time Data", "Trading"],
    image: "/screenshot-fynecta.png",
    category: "crypto",
  },
  {
    title: "Dalbass: Platform Sinyal XAUUSD",
    role: "Full-Stack Engineer",
    url: "https://dalbass.com",
    description:
      "A gold (XAUUSD) trading signal platform: scalping and intraday signals with entry, stop loss and TP1 to TP3 levels, an automatic lot calculator, open performance recaps and Telegram delivery.",
    tech: ["Next.js", "React", "Tailwind", "Telegram", "Trading"],
    image: "/screenshot-dalbass.png",
    category: "crypto",
  },
  {
    title: "Consumer Mobile App Portfolio",
    role: "Founder / Mobile Developer",
    description: "Built and published entertainment apps across Android, with the portfolio contributing to more than 5 million installs. Ronaldo Fake Chat & Video Call: 4.0★ · 1M+ downloads.",
    android: "https://play.google.com/store/apps/details?id=com.yusufsuhair.ronaldofakevideocall&hl=en",
    tech: ["Android", "Flutter", "Java", "Kotlin", "Google Play"],
    category: "mobile",
    storesOnly: true,
  },
  {
    title: "myClipper: Content Creation Platform",
    role: "Full-Stack Engineer",
    url: "https://myclipper.vercel.app/",
    description: "A SaaS platform where businesses run campaigns and creators earn based on views delivered, with commission-based workflows for both sides of the marketplace.",
    tech: ["Next.js", "TypeScript", "Tailwind", "SaaS"],
    image: "/screenshot-myclipper.png",
    category: "web",
  },
  {
    title: "$EJOE NFT Marketplace",
    role: "CTO / Lead Web3 Engineer",
    url: "http://ejoe-nft.vercel.app/",
    description: "An NFT marketplace for discovering, collecting and selling NFTs, with wallet connect, search and filtering by item type, sale type and price range, backed by smart contracts and Web3 infrastructure.",
    tech: ["Solidity", "Next.js", "React", "Web3.js", "DevOps"],
    image: "/screenshot-ejoe-nft.png",
    category: "crypto",
  },
  {
    title: "$WALID Memecoin Landing Page",
    role: "Full-Stack Engineer",
    url: "https://walid-memecoin-website.vercel.app/",
    description:
      "A meme-native landing page for the $WALID token, with viral lore, a how-to-buy walkthrough, contract address copy, a pump.fun buy flow and in-page mini games.",
    tech: ["Next.js", "React", "Tailwind", "Solana", "pump.fun"],
    image: "/screenshot-walid.png",
    category: "crypto",
  },
  {
    title: "$REMBUYANG Memecoin Landing Page",
    role: "Full-Stack Engineer",
    url: "https://rembuyang.vercel.app/",
    description:
      "A community memecoin landing page with wallet connect, live price and 24h change, buy flow and a built-in anthem player running as a persistent bottom bar.",
    tech: ["Next.js", "React", "Tailwind", "Web3", "Wallet Connect"],
    image: "/screenshot-rembuyang.png",
    category: "crypto",
  },
  {
    title: "NuuhaBeauty: Halal Korean Skincare Store",
    role: "AI / Computer Vision Engineer",
    url: "https://nuuhabeauty.com/",
    description:
      "A Shopify storefront for a halal Korean skincare brand, with an AI face-recognition feature that detects acne from a selfie and recommends products using computer vision and deep learning.",
    tech: ["Shopify", "Computer Vision", "Deep Learning", "Python", "E-commerce"],
    image: "/screenshot-nuuhabeauty.png",
    category: "ecommerce",
  },
];

const MOBILE_LIMIT = 6;

const categories = [
  { id: "all", label: "All" },
  { id: "web", label: "Web Apps" },
  { id: "mobile", label: "Mobile" },
  { id: "games", label: "Games" },
  { id: "crypto", label: "Crypto / Web3" },
  { id: "ecommerce", label: "E-commerce" },
];

// fallback glyph for a card with no screenshot
const categoryIcon = { web: Globe, mobile: Smartphone, games: Gamepad2, crypto: Link, ecommerce: ShoppingBag };

const PlayStoreGlyph = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="currentColor" aria-hidden>
    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.302 2.302-8.636-8.635z" />
  </svg>
);

const AppStoreGlyph = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor" aria-hidden>
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

function StoreBadge({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center group-hover:bg-white/15 group-hover:border-white/25 transition-colors duration-300">
        {children}
      </div>
      <span className="text-[11px] font-medium text-zinc-400">{label}</span>
    </div>
  );
}

function CardMedia({ project }: { project: Project }) {
  const Icon = categoryIcon[project.category];
  if (project.storesOnly) {
    return (
      <>
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] to-white/[0.02]" />
        <div className="absolute inset-0 flex items-center justify-center gap-5">
          {project.android && <StoreBadge label="Play Store"><PlayStoreGlyph /></StoreBadge>}
          {project.ios && <StoreBadge label="App Store"><AppStoreGlyph /></StoreBadge>}
        </div>
      </>
    );
  }
  if (project.image) {
    return (
      <>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent opacity-60" />
      </>
    );
  }
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-white/[0.03]">
      <Icon size={44} className="text-zinc-400 opacity-60" />
    </div>
  );
}

const cardLinkClass = "inline-flex min-h-11 min-w-11 items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors";

export default function ProjectsWidget() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects =
    selectedCategory === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-10">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
            Selected Work
          </h2>
          <p className="text-zinc-400 text-base max-w-2xl">
            AI businesses, products and systems I&apos;ve built, plus earlier work in mobile, SaaS and Web3.
          </p>
        </motion.div>

        <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => { setSelectedCategory(cat.id); setShowAll(false); }}
                className={`inline-flex min-h-11 items-center px-4 rounded-full text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "bg-white text-black"
                    : "bg-white/5 border border-white/10 text-zinc-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => {
            const projectLink = project.url || project.android || project.ios;
            const mediaClass = "h-44 w-full relative overflow-hidden border-b border-white/5 bg-[#0a0a0a] block";

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, ease: "easeOut", delay: (index % 3) * 0.07 }}
                className={`group relative flex flex-col rounded-2xl bg-[#0f0f0f] border border-white/5 hover:border-white/15 transition-all duration-500 overflow-hidden hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)] ${index >= MOBILE_LIMIT && !showAll ? "hidden md:flex" : ""}`}
              >
                {projectLink ? (
                  <a href={projectLink} target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden="true" className={mediaClass}>
                    <CardMedia project={project} />
                  </a>
                ) : (
                  <div className={mediaClass}>
                    <CardMedia project={project} />
                  </div>
                )}

                <div className="p-5 flex-1 flex flex-col relative z-10">
                  <div className="mb-2 text-[11px] font-medium uppercase tracking-[0.12em] text-zinc-400">
                    {project.role}
                  </div>
                  <h3 className="text-base font-medium text-white mb-2 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-zinc-400 mb-4 flex-1 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span key={tech} className="px-2 py-0.5 text-xs text-zinc-300 bg-white/5 rounded border border-white/5">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-0.5 text-xs text-zinc-400 bg-white/5 rounded border border-white/5">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-x-4 mt-auto border-t border-white/5">
                    {project.url && (
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className={cardLinkClass}>
                        <ExternalLink size={12} aria-hidden="true" />
                        {project.cta || "Live"}
                      </a>
                    )}
                    {project.android && (
                      <a href={project.android} target="_blank" rel="noopener noreferrer" className={cardLinkClass}>
                        <Smartphone size={12} aria-hidden="true" />
                        Android
                      </a>
                    )}
                    {project.ios && (
                      <a href={project.ios} target="_blank" rel="noopener noreferrer" className={cardLinkClass}>
                        <Code2 size={12} aria-hidden="true" />
                        iOS
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Show more, mobile only */}
        {!showAll && filteredProjects.length > MOBILE_LIMIT && (
          <div className="mt-8 flex justify-center md:hidden">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="inline-flex min-h-11 items-center px-6 text-sm font-medium text-zinc-300 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:text-white transition-colors duration-300"
            >
              Show {filteredProjects.length - MOBILE_LIMIT} more projects
            </button>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-zinc-400 text-sm">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
