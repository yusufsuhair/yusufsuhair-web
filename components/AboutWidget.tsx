"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const specializations = [
  "Full-Stack Development",
  "Web3 & Blockchain",
  "Mobile Development (Flutter, Kotlin, Java)",
  "AI/ML Integration",
  "DevSecOps & CI/CD",
  "Smart Contracts (Solidity)",
];

const CAREER_START_YEAR = 2020;

export default function AboutWidget() {
  const yearsOfExperience = new Date().getFullYear() - CAREER_START_YEAR;
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

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
                I&apos;m a full-stack engineer with {yearsOfExperience}+ years building secure, reliable, and scalable
                systems. From architecting AI-powered platforms to deploying Web3 ecosystems and
                shipping 50+ mobile apps with 5M+ installs — I own the full stack from implementation
                to production infrastructure.
              </p>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Software Engineer (Web, Mobile, DevOps) at Aixelink Sàrl. Previously Founding Engineer
                at Heifereum Technology and a full-stack developer at SWIFT and SICPA, working across
                fintech, enterprise, and consumer-facing products in Malaysia and globally.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {specializations.map((skill) => (
                <div key={skill} className="flex items-center gap-2 text-sm text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 flex-shrink-0" />
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
