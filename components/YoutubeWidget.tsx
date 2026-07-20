"use client";

import { Play, ExternalLink, Youtube } from "lucide-react";
import { motion } from "framer-motion";

const featuredVideos = [
  {
    id: "QJ_yAGEAZTc",
    title: "apps kena suspended ... penghasilan USD XX,XXX lesap macam tu jer ..",
  },
  {
    id: "EL7Qwi1-PXY",
    title: "Aku Punya Gaming/Programming Setup Tour | Edisi Work from Home",
  },
  {
    id: "kc8o4RCIO7w",
    title: "Kenapa Programmer Banyak Pakai Macbook?",
  },
];

const CHANNEL_URL = "https://youtube.com/c/YusufSuhair";

export default function YoutubeWidget() {
  return (
    <section id="youtube" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
            On YouTube
          </h2>
          <p className="text-zinc-400 text-base max-w-2xl mx-auto">
            I also create content — tutorials, tech stories, and behind-the-scenes of building products.
          </p>
        </motion.div>

        {/* Video Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {featuredVideos.map((video, i) => (
            <motion.a
              key={video.id}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.08 }}
              href={`https://youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col rounded-2xl bg-[#0f0f0f] border border-white/5 group-hover:border-red-500/20 hover:border-white/15 transition-all duration-500 overflow-hidden hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)]"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Thumbnail Header */}
              <div className="h-44 w-full relative overflow-hidden border-b border-white/5 bg-zinc-900">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                  }}
                />
                {/* Subtle dark gradient over thumbnail */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Play size={18} className="text-white ml-0.5" fill="white" />
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col relative z-10">
                <h3 className="text-sm font-medium text-white mb-4 leading-snug line-clamp-2 flex-1">
                  {video.title}
                </h3>

                <div className="flex items-center gap-1.5 mt-auto pt-3 border-t border-white/5 text-xs text-zinc-500 group-hover:text-red-400 transition-colors">
                  <ExternalLink size={11} />
                  Watch on YouTube
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Channel CTA */}
        <div className="flex items-center justify-between rounded-2xl bg-[#0f0f0f] border border-white/5 px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center">
              <Youtube size={15} className="text-zinc-400" />
            </div>
            <p className="text-sm text-zinc-400">
              More content on my channel — subscribe to stay updated.
            </p>
          </div>
          <a
            href={CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2 text-sm font-medium text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all duration-300"
          >
            View Channel
            <ExternalLink size={13} className="opacity-60" />
          </a>
        </div>

      </div>
    </section>
  );
}
