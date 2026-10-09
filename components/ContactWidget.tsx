"use client";

import { Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_URL = `https://wa.me/601123709141?text=${encodeURIComponent("Hi Yusuf, I found you through yusufsuhair.xyz.")}`;
const EMAIL = "yusufmohdsuhair@gmail.com";

export default function ContactWidget() {
  return (
    <section id="contact" className="py-20 md:py-24 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="rounded-3xl border border-white/10 bg-[#0a0a0a] px-6 py-12 sm:px-10 md:px-14 md:py-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">
            Have a project or a role in mind?
          </h2>
          <p className="text-zinc-400 text-base md:text-lg max-w-xl mx-auto mb-8">
            Message me on WhatsApp or email. I&apos;m open to new projects, coaching and roles.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 px-6 text-sm font-medium text-black bg-white rounded-full hover:bg-zinc-200 transition-colors"
            >
              <MessageCircle size={16} aria-hidden="true" />
              Chat on WhatsApp
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex min-h-11 items-center justify-center gap-2 px-6 text-sm font-medium text-white border border-white/15 rounded-full hover:bg-white/10 transition-colors"
            >
              <Mail size={16} aria-hidden="true" />
              {EMAIL}
            </a>
          </div>

          <a
            href="/services"
            className="mt-6 inline-flex min-h-11 items-center text-sm text-zinc-400 underline decoration-white/30 underline-offset-4 hover:text-white hover:decoration-white"
          >
            See services and pricing
          </a>
        </motion.div>
      </div>
    </section>
  );
}
