"use client";

import { ExternalLink, Globe, Smartphone, Link, Code2, ShoppingBag } from "lucide-react";
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
  category: "web" | "mobile" | "crypto" | "ecommerce";
  storesOnly?: boolean;
}

const projectsData: Project[] = [
  {
    title: "MudahAI - Managed AI Agents for Businesses",
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
    title: "YS Academy - Kelas AI Online",
    role: "Founder / Full-Stack Engineer",
    url: "https://ysacademy.my",
    description: "A subscription learning platform with live workshops, member accounts, Stripe billing, lesson progress, access expiry and Telegram community integration.",
    tech: ["Next.js", "Supabase", "Stripe", "Telegram", "AI Education"],
    category: "web",
    image: "/screenshot-ys-academy.png",
    cta: "Visit YS Academy",
  },
  {
    title: "Fynecta - The Intelligent Terminal for Global Market",
    role: "Full-Stack Engineer",
    url: "https://www.fynecta.io/",
    description:
      "A trading terminal for crypto and commodities — live price feeds, portfolio performance tracking and real-time trade signals, with algorithmic strategies running the managed portfolios.",
    tech: ["Next.js", "React", "Tailwind", "Real-time Data", "Trading"],
    image: "/screenshot-fynecta.png",
    category: "crypto",
  },
  {
    title: "Dalbass - Platform Sinyal XAUUSD",
    role: "Full-Stack Engineer",
    url: "https://dalbass.com",
    description:
      "A gold (XAUUSD) trading signal platform — scalping and intraday signals with entry, stop loss and TP1–TP3 levels, an automatic lot calculator, open performance recaps and Telegram delivery.",
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
    title: "myClipper — Content Creation Platform",
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
    description: "An NFT marketplace for discovering, collecting and selling NFTs — wallet connect, search and filtering by item type, sale type and price range, backed by smart contracts and Web3 infrastructure.",
    tech: ["Solidity", "Next.js", "React", "Web3.js", "DevOps"],
    image: "/screenshot-ejoe-nft.png",
    category: "crypto",
  },
  {
    title: "$WALID Memecoin Landing Page",
    role: "Full-Stack Engineer",
    url: "https://walid-memecoin-website.vercel.app/",
    description:
      "A meme-native landing page for the $WALID token — viral lore, how-to-buy walkthrough, contract address copy, pump.fun buy flow and in-page mini games.",
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
    title: "NuuhaBeauty — Halal Korean Skincare Store",
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
  { id: "crypto", label: "Crypto / Web3" },
  { id: "ecommerce", label: "E-commerce" },
];

const categoryConfig = {
  web: {
    icon: Globe,
    color: "text-blue-400",
    bg: "from-blue-500/15 to-blue-600/5",
    border: "group-hover:border-blue-500/30",
  },
  mobile: {
    icon: Smartphone,
    color: "text-purple-400",
    bg: "from-purple-500/15 to-purple-600/5",
    border: "group-hover:border-purple-500/30",
  },
  crypto: {
    icon: Link,
    color: "text-orange-400",
    bg: "from-orange-500/15 to-orange-600/5",
    border: "group-hover:border-orange-500/30",
  },
  ecommerce: {
    icon: ShoppingBag,
    color: "text-rose-400",
    bg: "from-rose-500/15 to-rose-600/5",
    border: "group-hover:border-rose-500/30",
  },
};

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
          className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
            Selected Work
          </h2>
          <p className="text-zinc-400 text-base max-w-2xl mx-auto">
            AI businesses, products and systems I&apos;ve built — supported by a track record across
            mobile, SaaS and Web3.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setSelectedCategory(cat.id); setShowAll(false); }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === cat.id
                  ? "bg-white text-black"
                  : "bg-white/5 border border-white/10 text-zinc-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => {
            const config = categoryConfig[project.category];
            const Icon = config.icon;
            const projectLink = project.url || project.android || project.ios;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, ease: "easeOut", delay: (index % 3) * 0.07 }}
                className={`group relative flex flex-col rounded-2xl bg-[#0f0f0f] border border-white/5 ${config.border} hover:border-white/15 transition-all duration-500 overflow-hidden hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)] ${index >= MOBILE_LIMIT && !showAll ? "hidden md:flex" : ""}`}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Card Header - clickable when project has a link */}
                {projectLink ? (
                  <a
                    href={projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`h-44 w-full relative overflow-hidden border-b border-white/5 bg-[#0a0a0a] block cursor-pointer`}
                  >
                  {project.storesOnly ? (
                    <>
                      <div className={`absolute inset-0 bg-gradient-to-br ${config.bg}`} />
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:20px_20px]" />
                      <div className="absolute inset-0 flex items-center justify-center gap-5">
                        {project.android && (
                          <div className="flex flex-col items-center gap-2">
                            <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center shadow-lg group-hover:bg-white/15 group-hover:border-white/25 transition-all duration-300">
                              <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="currentColor" aria-hidden>
                                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.302 2.302-8.636-8.635z" />
                              </svg>
                            </div>
                            <span className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider">Play Store</span>
                          </div>
                        )}
                        {project.ios && (
                          <div className="flex flex-col items-center gap-2">
                            <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center shadow-lg group-hover:bg-white/15 group-hover:border-white/25 transition-all duration-300">
                              <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor" aria-hidden>
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                              </svg>
                            </div>
                            <span className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider">App Store</span>
                          </div>
                        )}
                      </div>
                    </>
                  ) : project.image ? (
                    <>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent opacity-60" />
                    </>
                  ) : (
                    <>
                      <div className={`absolute inset-0 bg-gradient-to-br ${config.bg}`} />
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon
                          size={44}
                          className={`${config.color} opacity-40 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500`}
                        />
                      </div>
                    </>
                  )}
                  </a>
                ) : (
                  <div className={`h-44 w-full relative overflow-hidden border-b border-white/5 bg-[#0a0a0a]`}>
                    {project.storesOnly ? (
                      <>
                        <div className={`absolute inset-0 bg-gradient-to-br ${config.bg}`} />
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:20px_20px]" />
                        <div className="absolute inset-0 flex items-center justify-center gap-5">
                          {project.android && (
                            <div className="flex flex-col items-center gap-2">
                              <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center shadow-lg">
                                <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="currentColor" aria-hidden>
                                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.302 2.302-8.636-8.635z" />
                                </svg>
                              </div>
                              <span className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider">Play Store</span>
                            </div>
                          )}
                          {project.ios && (
                            <div className="flex flex-col items-center gap-2">
                              <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center shadow-lg">
                                <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor" aria-hidden>
                                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                </svg>
                              </div>
                              <span className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider">App Store</span>
                            </div>
                          )}
                        </div>
                      </>
                    ) : project.image ? (
                      <>
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top opacity-90" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent opacity-60" />
                      </>
                    ) : (
                      <>
                        <div className={`absolute inset-0 bg-gradient-to-br ${config.bg}`} />
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Icon size={44} className={`${config.color} opacity-40`} />
                        </div>
                      </>
                    )}
                  </div>
                )}

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col relative z-10">
                  <div className="mb-2 text-[10px] font-medium uppercase tracking-widest text-zinc-500">
                    {project.role}
                  </div>
                  <h3 className="text-base font-medium text-white mb-2 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-zinc-400 mb-4 flex-1 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 text-xs text-zinc-300 bg-white/5 rounded border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-0.5 text-xs text-zinc-500 bg-white/5 rounded border border-white/5">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mt-auto pt-1 border-t border-white/5">
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:${config.color} transition-colors`}
                      >
                        <ExternalLink size={12} />
                        {project.cta || "Live"}
                      </a>
                    )}
                    {project.android && (
                      <a
                        href={project.android}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:${config.color} transition-colors`}
                      >
                        <Smartphone size={12} />
                        Android
                      </a>
                    )}
                    {project.ios && (
                      <a
                        href={project.ios}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:${config.color} transition-colors`}
                      >
                        <Code2 size={12} />
                        iOS
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Show more — mobile only */}

        {!showAll && filteredProjects.length > MOBILE_LIMIT && (
          <div className="mt-8 flex justify-center md:hidden">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-3 text-sm font-medium text-zinc-400 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:text-white transition-all duration-300"
            >
              Show {filteredProjects.length - MOBILE_LIMIT} more projects
            </button>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-zinc-600 text-sm">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
