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
}

const projectsData: Project[] = [
  {
    title: "MooMetrics",
    url: "https://moometrics.io",
    description: "Advanced crypto portfolio tracker and analytics platform for DeFi and NFT assets with real-time insights.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Node.js", "Python"],
    category: "web",
  },
  {
    title: "MooMetrics Mobile",
    description: "Native mobile app for crypto portfolio tracking with advanced analytics and real-time alerts.",
    android: "https://play.google.com/store/apps/details?id=com.heifereum.moometrics_mobile&hl=en",
    ios: "https://apps.apple.com/my/app/moometrics-crypto-analytics/id6741414782",
    tech: ["Flutter"],
    category: "mobile",
  },
  {
    title: "Dialektika",
    url: "https://dialektika.io",
    description: "AI-powered debate platform for structured discussions and argumentation analysis.",
    tech: ["Next.js", "NestJS", "Python", "NLP"],
    category: "ai",
  },
  {
    title: "$WALID Memecoin",
    url: "https://walid.fun",
    description: "Community-driven memecoin project with engaging platform and staking rewards.",
    tech: ["Next.js", "Framer Motion", "Vercel", "TypeScript"],
    category: "crypto",
  },
  {
    title: "$TSI Memecoin — Trump Survive Index",
    url: "https://trump-survive.vercel.app",
    description: "Political memecoin with unique survival index mechanics and gamified trading.",
    tech: ["Next.js", "Framer Motion", "Vercel", "TypeScript"],
    category: "crypto",
  },
  {
    title: "AIFiqh",
    url: "https://aifiqh.com",
    description: "AI-powered Islamic Q&A platform providing accurate fiqh and religious guidance.",
    tech: ["Next.js", "Python", "NestJS", "NLP"],
    category: "ai",
  },
  {
    title: "Fake Video Call Apps",
    description: "Entertainment suite with celebrity video calls, reaching 3M+ installs across 50+ apps.",
    android: "https://play.google.com/store/apps/developer?id=Yusuf+Suhair",
    tech: ["Flutter"],
    category: "mobile",
  },
  {
    title: "Fake Live Apps",
    description: "Live streaming simulation apps featuring celebrities, 3M+ installs with platform templates.",
    android: "https://play.google.com/store/apps/details?id=com.yusufsuhair.fake_live",
    tech: ["Flutter"],
    category: "mobile",
  },
  {
    title: "BoostFundCoin",
    url: "https://boostfundcoin.org",
    description: "Decentralized fundraising platform leveraging blockchain and smart contracts.",
    tech: ["Solidity", "Next.js", "Web3.js", "Ethereum"],
    category: "crypto",
  },
  {
    title: "Polarythm Landing Page",
    url: "https://polarythm.com",
    description: "AI-powered business intelligence solutions landing page with interactive elements.",
    tech: ["React", "Tone.js", "D3.js", "TypeScript"],
    category: "web",
  },
  {
    title: "Heifereum Landing Page",
    url: "https://heifereum.com",
    description: "Technology company landing page showcasing innovative solutions and services.",
    tech: ["React", "Tone.js", "D3.js", "TypeScript"],
    category: "web",
  },
  {
    title: "Ejoe Swap (Discontinued)",
    url: "https://ejoe-swap-pancakeswap.vercel.app",
    description: "Decentralized crypto swap platform inspired by PancakeSwap on Ejoe Network.",
    tech: ["React", "Solidity", "Web3.js"],
    category: "crypto",
  },
  {
    title: "Ejoe NFT Marketplace",
    url: "https://ejoe-nft.vercel.app",
    description: "OpenSea-style NFT marketplace for Ejoe Network with minting and trading features.",
    tech: ["React", "Solidity", "Web3.js"],
    image: "/ejoe-nft-screenshot.svg",
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

            return (
              <div
                key={index}
                className={`group relative flex flex-col rounded-2xl bg-[#0f0f0f] border border-white/5 ${config.border} hover:border-white/15 transition-all duration-500 overflow-hidden hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)]`}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Card Header */}
                <div className={`h-36 w-full bg-gradient-to-br ${config.bg} relative overflow-hidden border-b border-white/5`}>
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-60"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon
                      size={44}
                      className={`${config.color} opacity-40 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500`}
                    />
                  </div>
                </div>

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
