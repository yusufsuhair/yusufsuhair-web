"use client";

import { ExternalLink, Globe, Smartphone, Link, Cpu, Code2 } from "lucide-react";
import { useState } from "react";

interface Project {
  title: string;
  url?: string;
  description: string;
  tech: string[];
  android?: string;
  ios?: string;
  image?: string;
  category: "web" | "mobile" | "crypto" | "ai";
  storesOnly?: boolean;
}

const projectsData: Project[] = [
  {
    title: "$REMBUYANG Memecoin",
    url: "https://rembuyang.vercel.app",
    description:
      "The biggest Roti John restaurant memecoin: a decentralized, community-owned $REMBUYANG experience with an on-chain ecosystem, tokenomics, and live market stats.",
    tech: ["Next.js", "TypeScript", "Solidity", "Web3.js"],
    category: "crypto",
    image: "/screenshot-rembuyang.jpg",
  },
  {
    title: "MooMetrics - Crypto Analytics Platform",
    url: "https://moometrics.io",
    description: "Advanced crypto portfolio tracker and analytics platform for DeFi and NFT assets with real-time insights.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Node.js", "Python"],
    image: "/screenshot-moometrics.jpg",
    category: "web",
  },
  {
    title: "myClipper - Content Creation Platform",
    url: "https://myclipper.vercel.app/",
    description: "Run campaigns or apply to them. Get paid per views. Business owners set commission per 1k views; clippers apply and get paid when views are delivered — one platform for both.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    image: "/screenshot-myclipper.png",
    category: "web",
  },
  {
    title: "MooMetrics Mobile",
    description: "Native mobile app for crypto portfolio tracking with advanced analytics and real-time alerts.",
    android: "https://play.google.com/store/apps/details?id=com.heifereum.moometrics_mobile&hl=en",
    ios: "https://apps.apple.com/my/app/moometrics-crypto-analytics/id6741414782",
    tech: ["Flutter"],
    category: "mobile",
    storesOnly: true,
  },
  {
    title: "Memecoin Launchpad Projects",
    url: "https://walid.fun",
    description: "Series of community-driven memecoin launches including $WALID and $TSI (Trump Survive Index) — each with dedicated landing pages, tokenomics, staking mechanics, and on-chain integrations.",
    tech: ["Next.js", "TypeScript", "Framer Motion", "Solidity", "Web3.js"],
    image: "/screenshot-walid.jpg",
    category: "crypto",
  },
  {
    title: "AIFiqh",
    url: "https://aifiqh.com",
    description: "AI-powered Islamic Q&A platform providing accurate fiqh and religious guidance.",
    tech: ["Next.js", "Python", "NestJS", "NLP"],
    image: "/screenshot-aifiqh.jpg",
    category: "ai",
  },
  {
    title: "Celebrity Video Call Entertainment Apps",
    description: "Entertainment suite of celebrity video call simulation apps, reaching 5M+ installs across 50+ published titles.",
    android: "https://play.google.com/store/apps/developer?id=Yusuf+Suhair",
    tech: ["Flutter", "Java", "Kotlin"],
    category: "mobile",
    storesOnly: true,
  },
  {
    title: "Live Streaming Simulation Apps",
    description: "Mobile apps simulating live streaming experiences featuring celebrities, with 3M+ installs and reusable platform templates.",
    android: "https://play.google.com/store/apps/details?id=com.yusufsuhair.fake_live",
    tech: ["Flutter", "Java"],
    category: "mobile",
    storesOnly: true,
  },
  {
    title: "BoostFundCoin - Crypto Crowdfunding Platform",
    url: "https://boostfundcoin.org",
    description:
      "BoostFundCoin is a decentralized crypto crowdfunding platform powered by blockchain and smart contracts, enabling transparent fundraising, automated contributions, and on-chain project delivery.",
    tech: ["Solidity", "Next.js", "Web3.js", "Ethereum"],
    image: "/screenshot-boostfundcoin.jpg",
    category: "crypto",
  },
  {
    title: "Heifereum Landing Page",
    url: "https://heifereum.com",
    description: "Technology company landing page showcasing innovative solutions and services.",
    tech: ["React", "Tone.js", "D3.js", "TypeScript"],
    image: "/screenshot-heifereum.jpg",
    category: "web",
  },
  {
    title: "Ejoe Swap (PancakeSwap Clone)",
    url: "https://ejoe-swap-pancakeswap.vercel.app",
    description: "Decentralized crypto swap platform inspired by PancakeSwap on Ejoe Network.",
    tech: ["React", "Solidity", "Web3.js"],
    image: "/screenshot-ejoe-swap.jpg",
    category: "crypto",
  },
  {
    title: "Ejoe NFT Marketplace",
    url: "https://ejoe-nft.vercel.app",
    description: "OpenSea-style NFT marketplace for Ejoe Network with minting and trading features.",
    tech: ["React", "Solidity", "Web3.js"],
    image: "/screenshot-ejoe-nft.jpg",
    category: "crypto",
  },
];

const categories = [
  { id: "all", label: "All" },
  { id: "web", label: "Web Apps" },
  { id: "mobile", label: "Mobile" },
  { id: "crypto", label: "Crypto / Web3" },
  { id: "ai", label: "AI / ML" },
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
  ai: {
    icon: Cpu,
    color: "text-emerald-400",
    bg: "from-emerald-500/15 to-emerald-600/5",
    border: "group-hover:border-emerald-500/30",
  },
};

export default function ProjectsWidget() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredProjects =
    selectedCategory === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
            Selected Work
          </h2>
          <p className="text-zinc-400 text-base max-w-2xl">
            A collection of systems, platforms, and tools I&apos;ve architected and shipped — from
            Web3 protocols to AI-driven apps and mobile products.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
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
              <div
                key={index}
                className={`group relative flex flex-col rounded-2xl bg-[#0f0f0f] border border-white/5 ${config.border} hover:border-white/15 transition-all duration-500 overflow-hidden hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)]`}
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
                        Live
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
              </div>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-zinc-600 text-sm">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
