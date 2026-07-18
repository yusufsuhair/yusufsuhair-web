"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactWidget() {
  return (
    <section id="contact" className="py-20 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="p-[1px] rounded-3xl bg-gradient-to-b from-white/20 to-transparent relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl rounded-3xl" />

          <div className="bg-[#050505] rounded-3xl px-6 py-12 sm:px-10 md:px-14 md:py-16 relative h-full w-full overflow-hidden text-center backdrop-blur-xl">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">
                Let&apos;s build something.
              </h2>
              <p className="text-zinc-400 text-base md:text-lg max-w-xl mx-auto mb-8">
                Open for new opportunities and interesting projects. Feel free to reach out if you
                want to collaborate or just say hi.
              </p>

              <a
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-black bg-white rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                View Services
                <ArrowUpRight size={16} />
              </a>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
