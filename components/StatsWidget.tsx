"use client";

import { motion } from "framer-motion";

const CAREER_START_YEAR = 2019;
const yearsOfExperience = new Date().getFullYear() - CAREER_START_YEAR;

const stats = [
  { value: yearsOfExperience + "+", label: "Years Experience" },
  { value: "60+", label: "Apps Shipped" },
  { value: "5M+", label: "App Installs" },
];

export default function StatsWidget() {
  return (
    <section className="relative py-6 border-y border-white/5 overflow-hidden">
      {/* subtle ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4, ease: "easeOut" }}
              className="bg-[#050505] flex flex-col items-center justify-center py-8 px-4 gap-1"
            >
              <span className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs text-zinc-500 uppercase tracking-widest font-mono text-center">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
