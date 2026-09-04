"use client";

import { Play, ExternalLink, Instagram } from "lucide-react";
import { motion } from "framer-motion";

interface Reel {
  /** Full reel URL, e.g. https://www.instagram.com/reel/ABC123/ */
  url: string;
  /** Cover image in /public — screenshot the reel cover and drop it in */
  thumb: string;
  /** Hook / first line of the caption */
  title: string;
  /** View count as displayed, e.g. "412K" */
  views: string;
}

// Top reels by views. Update the numbers when they move.
const featuredReels: Reel[] = [
  {
    url: "https://www.instagram.com/yusufsuhair/reel/DcgKvbpp3rr/",
    thumb: "/reel-1.jpg",
    title: "Tanya ChatGPT — apa dia tahu pasal korang",
    views: "59.5K",
  },
  {
    url: "https://www.instagram.com/yusufsuhair/reel/DclN8urpGAF/",
    thumb: "/reel-2.jpg",
    title: "ChatGPT boleh cari keluarga lengkap korang",
    views: "30.4K",
  },
  {
    url: "https://www.instagram.com/yusufsuhair/reel/DcyYXK2JfGS/",
    thumb: "/reel-3.jpg",
    title: "ChatGPT boleh jadi interior designer",
    views: "27.6K",
  },
];

const PROFILE_URL = "https://www.instagram.com/yusufsuhair/";

export default function InstagramWidget() {
  if (featuredReels.length === 0) return null;

  return (
    <section id="instagram" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
            On Instagram
          </h2>
          <p className="text-zinc-400 text-base max-w-2xl mx-auto">
            Short-form breakdowns of AI automation, agents and building products — my most watched reels.
          </p>
        </motion.div>

        {/* Reel Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
          {featuredReels.map((reel, i) => (
            <motion.a
              key={reel.url}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.08 }}
              href={reel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col rounded-2xl bg-[#0f0f0f] border border-white/5 hover:border-white/15 transition-all duration-500 overflow-hidden hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)]"
            >
              {/* Cover ratio matches the IG grid crop these were captured at */}
              <div className="aspect-[227/320] w-full relative overflow-hidden bg-zinc-900">
                <img
                  src={reel.thumb}
                  alt={reel.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Play size={18} className="text-white ml-0.5" fill="white" />
                  </div>
                </div>

                {/* View count + hook, over the cover */}
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <div className="flex items-center gap-1.5 mb-2 text-white">
                    <Play size={12} fill="currentColor" />
                    <span className="text-sm font-medium tabular-nums">{reel.views}</span>
                    <span className="text-xs text-zinc-400">views</span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-snug line-clamp-2">
                    {reel.title}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Profile CTA */}
        <div className="flex items-center justify-between rounded-2xl bg-[#0f0f0f] border border-white/5 px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center">
              <Instagram size={15} className="text-zinc-400" />
            </div>
            <p className="text-sm text-zinc-400">@yusufsuhair</p>
          </div>
          <a
            href={PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2 text-sm font-medium text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all duration-300"
          >
            Follow
            <ExternalLink size={13} className="opacity-60" />
          </a>
        </div>

      </div>
    </section>
  );
}
