"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const CAREER_START_YEAR = 2019;

export default function AboutWidget() {
  const yearsOfExperience = new Date().getFullYear() - CAREER_START_YEAR;
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[20rem_minmax(0,1fr)] lg:gap-12 items-center">

          {/* Photo */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl opacity-60" />
              <img
                src="/yusufsuhair.jpg"
                alt="Yusuf Suhair"
                className="relative rounded-2xl w-72 h-72 sm:w-80 sm:h-80 object-cover border border-white/10 shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.12 }}
            className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
                About Me
              </h2>
              <p className="text-zinc-400 text-base leading-relaxed mb-4">
                I&apos;m a software engineer and AI agent builder with {yearsOfExperience}+ years shipping secure, reliable products. From building agent automations and web platforms to deploying Web3 ecosystems and shipping 50+ mobile apps with 5M+ installs — I own the full lifecycle from implementation to production infrastructure.
              </p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
