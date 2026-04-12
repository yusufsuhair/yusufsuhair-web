"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactWidget() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="p-[1px] rounded-3xl bg-gradient-to-b from-white/20 to-transparent relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl rounded-3xl" />

          <div className="bg-[#050505] rounded-3xl p-8 md:p-16 relative h-full w-full overflow-hidden text-center backdrop-blur-xl">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">
                Let&apos;s build something.
              </h2>
              <p className="text-zinc-400 text-base md:text-lg max-w-xl mx-auto mb-10">
                Open for new opportunities and interesting projects. Feel free to reach out if you
                want to collaborate or just say hi.
              </p>

              <a
                href="mailto:yusufmohdsuhair@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-black bg-white rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] mb-12"
              >
                <Mail size={16} />
                yusufmohdsuhair@gmail.com
              </a>

              <div className="flex items-center justify-center gap-8 border-t border-white/10 pt-8 mt-4">
                <a
                  href="https://github.com/yusufsuhair"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-sm"
                >
                  <Github size={18} />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/yusufsuhair"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-sm"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
