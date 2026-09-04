"use client";

import { motion } from "framer-motion";

interface Job {
  title: string;
  company: string;
  period: string;
  location: string;
  summary?: string;
  description: string[];
  tech: string[];
}

const experienceData: Job[] = [
  {
    title: "Founding Engineer (Mobile, Web, AI, DevOps)",
    company: "Aixelink Sàrl",
    period: "April 2026 — Present",
    location: "Remote",
    description: [
      "Architected and deployed the full infrastructure stack including Nginx static serving, Cloudflare Tunnel/ngrok public exposure, and Android WebView bridge integration connecting native device APIs to a web-based UI.",
    ],
    tech: ["Mobile", "Web", "AI", "DevOps", "Nginx", "Cloudflare Tunnel", "Android WebView"],
  },
  {
    title: "Founder",
    company: "YS Academy & MudahAI",
    period: "January 2026 — Present",
    location: "Malaysia · Remote",
    summary: "Built two complementary AI businesses: YS Academy teaches individuals to build apps, agents and automations, while MudahAI delivers managed AI agents for business operations.",
    description: [
      "Run live AI-assisted development and automation programmes through YS Academy",
      "Design, deploy and maintain production AI agents through MudahAI",
      "Build WhatsApp booking, reminder, follow-up and business workflow systems",
      "Lead product development, infrastructure, client delivery and technical strategy",
    ],
    tech: ["AI Agents", "Automation", "n8n", "WhatsApp API", "Education", "SaaS", "DevOps"],
  },
  {
    title: "Mobile Developer",
    company: "Google Play Store",
    period: "August 2019 — Present",
    location: "Remote",
    description: [
      "Designed UI/UX using Adobe XD",
      "Developed mobile applications based on client requirements using architecture patterns such as MVVM, MVC, and MVP",
      "Published 50+ Android applications on Google Play Store with 5M+ installations",
      "Worked on various freelancing mobile applications, one of the clients was Education Malaysia Indonesia developing a mobile app to promote Malaysian colleges",
    ],
    tech: ["Java", "Kotlin", "Flutter", "Adobe XD", "MVVM", "Android"],
  },
  {
    title: "CTO & Co-Founder (Mobile, Web, Blockchain)",
    company: "Heifereum Technology Sdn Bhd",
    period: "March 2024 — January 2026",
    location: "Kuala Lumpur, Malaysia",
    description: [
      "Developed and deployed multiple Web3 applications including NFT marketplace, Layer 2 features, memecoin launch, and staking systems using Solidity and Next.js",
      "Built AIFiqh.com, an AI-powered platform for Islamic knowledge using Python, Next.js, and NestJS with GPT and NLP integration",
      "Engineered MooMetrics.io, a crypto analytics platform with real-time data and AI-based market insights using Python, Next.js, and Node.js",
      "Contributed to Dialektika.io, an AI tool that analyzes social content and sentiment for data-driven decision-making using Python, Next.js, and NestJS",
      "Built an e-commerce system from scratch using MedusaJS and Next.js with multi-vendor and custom admin panel support",
      "Created AI-powered face recognition for NuuhaBeauty.com to detect acne and recommend skincare using computer vision and deep learning",
      "Managed CI/CD pipelines and server infrastructure for smooth deployment and operational stability across all projects",
    ],
    tech: ["Python", "Solidity", "Next.js", "NestJS", "GPT", "NLP", "Node.js", "MedusaJS", "Web3", "Computer Vision", "CI/CD"],
  },
  {
    title: "Full-Stack Developer",
    company: "SWIFT",
    period: "March 2022 — March 2024",
    location: "Bangsar, Malaysia",
    description: [
      "Contributed to web platforms supporting SWIFT's network of 11,000+ financial institutions and corporations across 200+ countries and territories",
      "Developed full-stack web applications (JavaEE, Spring MVC, Spring Boot, AngularJS, Angular) including unit testings",
      "Worked on CI/CD such as Jenkins, AWS, SSL, Linux, and Ansible",
    ],
    tech: ["JavaEE", "Spring MVC", "Spring Boot", "AngularJS", "Angular", "Jenkins", "AWS", "Linux", "Ansible"],
  },
  {
    title: "Full-Stack Developer",
    company: "SICPA",
    period: "December 2020 — February 2022",
    location: "Cyberjaya, Malaysia",
    description: [
      "Developed full-stack web applications using Apache Kafka, gRPC, Spring Boot, Angular, Oracle, and Docker",
      "Worked on both monolithic and microservice applications",
      "Managed deployments using Docker, Jenkins, Wildfly, JBoss",
    ],
    tech: ["Apache Kafka", "gRPC", "Spring Boot", "Angular", "Oracle", "Docker", "Jenkins", "Microservices"],
  },
];

export default function ExperienceWidget() {
  const CAREER_START_YEAR = 2019;
  const yearsOfExperience = new Date().getFullYear() - CAREER_START_YEAR;

  return (
    <section id="experience" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
            Experience
          </h2>
          <p className="text-zinc-400 text-base">
            {yearsOfExperience}+ years across fintech, Web3, enterprise, and mobile — from startup founding engineer to global institutions.
          </p>
        </motion.div>

        <div className="relative border-l border-white/10 ml-3 md:ml-0">
          {experienceData.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.07 }}
              className="mb-12 ml-8 relative group">
              <div className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full bg-zinc-600 ring-4 ring-[#050505] group-hover:bg-white group-hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] transition-all duration-300" />

              <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 group-hover:border-white/10 transition-colors backdrop-blur-sm">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-lg font-medium text-white tracking-tight">{job.title}</h3>
                    <div className="text-sm text-zinc-400 mt-1">{job.company}</div>
                  </div>
                  <div className="sm:text-right flex-shrink-0">
                    <span className="text-xs text-zinc-500 font-mono bg-white/5 px-2 py-1 rounded whitespace-nowrap">
                      {job.period}
                    </span>
                    <div className="text-xs text-zinc-600 mt-1.5">{job.location}</div>
                  </div>
                </div>

                {job.summary && (
                  <p className="text-sm text-zinc-400 leading-relaxed mb-4">{job.summary}</p>
                )}
                <ul className="space-y-2 text-sm text-zinc-400 mb-5 list-none">
                  {job.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-zinc-600 mt-0.5 flex-shrink-0">→</span>
                      {desc}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-x-3 gap-y-1 pt-4 border-t border-white/5">
                  {job.tech.map((tech, i) => (
                    <span key={i} className="text-xs text-zinc-400">
                      {tech}
                      {i < job.tech.length - 1 && (
                        <span className="ml-3 text-zinc-700">·</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
