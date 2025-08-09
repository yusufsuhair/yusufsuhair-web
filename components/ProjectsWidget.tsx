"use client";

import { ExternalLink, Smartphone } from "lucide-react";

interface Project {
  title: string;
  url?: string;
  description: string;
  tech: string[];
  android?: string;
  ios?: string;
}

const projectsData: Project[] = [
  {
    title: "MooMetrics",
    url: "https://moometrics.io",
    description: "Crypto portfolio tracker and analytics platform for DeFi and NFT assets.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Node.js", "Python"],
  },
  {
    title: "MooMetrics Mobile",
    url: "https://moometrics.io",
    description: "Crypto portfolio tracker and analytics platform for DeFi and NFT assets.",
    android: "https://play.google.com/store/apps/details?id=com.heifereum.moometrics_mobile&hl=en",
    ios: "https://apps.apple.com/my/app/moometrics-crypto-analytics/id6741414782",
    tech: ["Flutter"],
  },
  {
    title: "Fake Video Call Apps",
    description: "A suite of fake video call apps featuring celebrities, athletes, and public figures, amassing over 3 million installs across 50+ apps.",
    android: "https://play.google.com/store/apps/developer?id=Yusuf+Suhair",
    tech: ["Flutter"],
  },
  {
    title: "Fake Live Apps",
    description: "A popular suite of apps that simulate live video streams with celebrities, athletes, and public figures, reaching over 3 million installs across 50+ apps. Includes templates to fake live streams in the style of Twitch, Instagram, TikTok, Facebook, and more.",
    android: "https://play.google.com/store/apps/details?id=com.yusufsuhair.fake_live",
    tech: ["Flutter"],
  },
  {
    title: "Dialektika",
    url: "https://dialektika.io",
    description: "AI-powered debate and argumentation platform for structured discussions.",
    tech: ["Next.js", "NestJS", "Python", "NLP"],
  },
  {
    title: "$WALID Memecoin",
    url: "https://walid.fun",
    description: "Personal website and creative playground for interactive web experiments.",
    tech: ["Next.js", "Framer Motion", "Vercel", "TypeScript"],
  },
  {
    title: "AIFiqh",
    url: "https://aifiqh.com",
    description: "AI-powered Islamic Q&A platform for fiqh and religious queries.",
    tech: ["Next.js", "Python", "NestJS", "NLP"],
  },
  {
    title: "BoostFundCoin",
    url: "https://boostfundcoin.org",
    description: "Decentralized fundraising platform leveraging blockchain and smart contracts.",
    tech: ["Solidity", "Next.js", "Web3.js", "Ethereum"],
  },
  {
    title: "Polarythm Landing Page",
    url: "https://polarythm.com",
    description: "AI-Powered Business Intelligence Solutions",
    tech: ["React", "Tone.js", "D3.js", "TypeScript"],
  },
  {
    title: "Ejoe Swap (Discontinued)",
    url: "https://app.ejoe.network",
    description: "Decentralized crypto swap platform inspired by PancakeSwap, enabling token exchanges on Ejoe Network. (Project discontinued)",
    tech: ["React", "Solidity", "Web3.js"],
  },
  {
    title: "Ejoe NFT Marketplace (Discontinued)",
    url: "https://nft.ejoe.network",
    description: "A decentralized NFT marketplace for the Ejoe Network, allowing users to mint, buy, and sell NFTs with a familiar OpenSea-like experience. (Project discontinued)",
    tech: ["React", "Solidity", "Web3.js"],
  },
];

export default function ProjectsWidget() {
  return (
    <section className="max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center font-title">
        Projects
      </h2>

      <ul className="space-y-8">
        {projectsData.map((project, index) => (
          <li
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover-lift border border-gray-200 dark:border-gray-700 flex flex-col"
          >
            <div className="w-full h-2 bg-black" />
            <div className="p-6 flex-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 font-title">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {project.ios && project.android ? (
                <div className="flex gap-4">
                  <a
                    href={project.ios}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-medium flex items-center gap-2 transition-colors"
                  >
                    <Smartphone size={16} className="text-black dark:text-black" />
                    iOS App
                  </a>
                  <a
                    href={project.android}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-medium flex items-center gap-2 transition-colors"
                  >
                    <Smartphone size={16} className="text-black dark:text-black" />
                    Android App
                  </a>
                </div>
              ) : (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-medium flex items-center gap-2 transition-colors"
                >
                  View Project
                  <ExternalLink size={16} className="text-black dark:text-black" />
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
