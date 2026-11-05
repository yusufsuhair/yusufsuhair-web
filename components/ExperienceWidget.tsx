"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { getYearsOfExperience } from "@/lib/career";
import { ArrowRight, ChevronDown, ExternalLink, FileText } from "lucide-react";

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
    period: "April 2026 to present",
    location: "Remote",
    description: [
      "Architected and deployed the full infrastructure stack including Nginx static serving, Cloudflare Tunnel/ngrok public exposure, and Android WebView bridge integration connecting native device APIs to a web-based UI.",
    ],
    tech: ["Mobile", "Web", "AI", "DevOps", "Nginx", "Cloudflare Tunnel", "Android WebView"],
  },
  {
    title: "Founder",
    company: "YS Academy & MudahAI",
    period: "January 2026 to present",
    location: "Malaysia · Remote",
    summary: "Built two complementary AI businesses: YS Academy teaches individuals to build apps, agents and automations, while MudahAI delivers managed AI agents for business operations.",
    description: [
      "Run live AI-assisted development and automation programmes through YS Academy, having completed HRD Corp Train-the-Trainer",
      "Design, deploy and maintain production AI agents through MudahAI",
      "Build WhatsApp booking, reminder, follow-up and business workflow systems",
      "Lead product development, infrastructure, client delivery and technical strategy",
    ],
    tech: ["AI Agents", "Automation", "n8n", "WhatsApp API", "Education", "SaaS", "DevOps"],
  },
  {
    title: "Mobile Developer",
    company: "Independent developer on Google Play",
    period: "August 2019 to present",
    location: "Remote",
    description: [
      "Published 70+ Android applications on Google Play Store with 6M+ installations",
      "Developed mobile applications based on client requirements using architecture patterns such as MVVM, MVC, and MVP",
      "Designed UI/UX using Adobe XD",
      "Worked on various freelancing mobile applications, one of the clients was Education Malaysia Indonesia developing a mobile app to promote Malaysian colleges",
    ],
    tech: ["Java", "Kotlin", "Flutter", "Adobe XD", "MVVM", "Android"],
  },
  {
    title: "CTO & Co-Founder (Mobile, Web, Blockchain)",
    company: "Heifereum Technology Sdn Bhd",
    period: "March 2024 to January 2026",
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
    period: "March 2022 to March 2024",
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
    period: "December 2020 to February 2022",
    location: "Cyberjaya, Malaysia",
    description: [
      "Developed full-stack web applications using Apache Kafka, gRPC, Spring Boot, Angular, Oracle, and Docker",
      "Worked on both monolithic and microservice applications",
      "Managed deployments using Docker, Jenkins, Wildfly, JBoss",
    ],
    tech: ["Apache Kafka", "gRPC", "Spring Boot", "Angular", "Oracle", "Docker", "Jenkins", "Microservices"],
  },
];

interface Credential {
  name: string;
  issuer: string;
  date?: string;
  /** Slug of the files in public/certificates, built by `npm run optimize:images`. */
  image: string;
  verify?: { label: string; href: string };
}

const credentials: Credential[] = [
  {
    name: "HRD Corp Train-the-Trainer, Certificate of Completion",
    issuer: "Success Edge Academy PLT",
    date: "2026",
    image: "hrd-corp-ttt",
    verify: {
      label: "Verify on HRD Corp",
      href: "https://trainers.hrdcorp.gov.my/ecert/8c0ad960-d40c-11f1-8def-b3e10509e932/8e1f3e60-d40c-11f1-9586-456471949960",
    },
  },
  {
    name: "Google AI Professional Certificate",
    issuer: "Google via Coursera",
    date: "2026",
    image: "google-ai",
    verify: {
      label: "Verify on Coursera",
      href: "https://coursera.org/verify/professional-cert/RYQXZ5K66JSM",
    },
  },
  {
    name: "AI Security & Governance Course Certificate",
    issuer: "Securiti",
    image: "securiti-ai-governance",
  },
  {
    name: "Certified Blockchain Developer",
    issuer: "Blockchain Council",
    date: "2026, valid to 2028",
    image: "blockchain-developer",
  },
];

const credentialLinkClass =
  "inline-flex min-h-11 items-center gap-1.5 text-xs text-zinc-300 hover:text-white transition-colors";

// Phones see the two strongest points per role; the rest sit behind the role's toggle.
const PHONE_BULLET_LIMIT = 2;

export default function ExperienceWidget() {
  const [expandedRoles, setExpandedRoles] = useState<number[]>([]);
  const yearsOfExperience = getYearsOfExperience();

  return (
    <section id="experience" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
            Experience
          </h2>
          <p className="text-zinc-400 text-base max-w-2xl">
            {yearsOfExperience}+ years across fintech, Web3, enterprise and mobile, at startups and at global institutions like SWIFT.
          </p>
        </motion.div>

        <div className="relative border-white/10 md:border-l">
          {experienceData.map((job, index) => {
            const isExpanded = expandedRoles.includes(index);
            const toggleLabel = isExpanded ? "Show less" : "Show all details";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.07 }}
                className="mb-6 md:mb-12 md:ml-8 relative group">
                <div className="absolute -left-[37px] top-1.5 hidden h-3 w-3 rounded-full bg-zinc-600 ring-4 ring-page group-hover:bg-white transition-colors duration-300 md:block" />

                <div className="p-4 sm:p-6 rounded-2xl bg-surface border border-white/5 group-hover:border-white/10 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-2">
                    <div className="min-w-0">
                      <h3 className="text-lg font-medium text-white tracking-tight">{job.title}</h3>
                      <div className="text-sm text-zinc-400 mt-1">{job.company}</div>
                    </div>
                    <div className="sm:text-right flex-shrink-0">
                      <span className="inline-block text-xs text-zinc-400 font-mono bg-white/5 px-2 py-1 rounded">
                        {job.period}
                      </span>
                      <div className="text-xs text-zinc-400 mt-1.5">{job.location}</div>
                    </div>
                  </div>

                  {job.summary && (
                    <p className="text-sm text-zinc-400 leading-relaxed mb-4">{job.summary}</p>
                  )}
                  <ul className="space-y-2 text-sm text-zinc-400 mb-3 md:mb-5 list-none">
                    {job.description.map((desc, i) => (
                      <li
                        key={i}
                        className={`items-start gap-2 ${
                          i >= PHONE_BULLET_LIMIT && !isExpanded ? "phone-collapsed hidden md:flex" : "flex"
                        }`}
                      >
                        <ArrowRight size={14} aria-hidden="true" className="mt-[3px] shrink-0 text-zinc-600" />
                        <span className="min-w-0">{desc}</span>
                      </li>
                    ))}
                  </ul>

                  <div
                    className={`flex-wrap gap-x-3 gap-y-1 pt-4 border-t border-white/5 ${
                      isExpanded ? "flex" : "phone-collapsed hidden md:flex"
                    }`}
                  >
                    {job.tech.map((tech, i) => (
                      <span key={i} className="text-xs text-zinc-400">
                        {tech}
                        {i < job.tech.length - 1 && (
                          <span aria-hidden="true" className="ml-3 text-zinc-700">·</span>
                        )}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    aria-label={`${toggleLabel} for ${job.title} at ${job.company}`}
                    onClick={() =>
                      setExpandedRoles((roles) =>
                        isExpanded ? roles.filter((role) => role !== index) : [...roles, index]
                      )
                    }
                    className="js-only inline-flex min-h-11 items-center gap-1.5 text-xs text-zinc-300 hover:text-white transition-colors md:hidden"
                  >
                    {toggleLabel}
                    <ChevronDown
                      size={14}
                      aria-hidden="true"
                      className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div id="certifications" className="mt-10 scroll-mt-24 md:mt-0 md:ml-8">
          <h3 className="text-lg font-medium text-white tracking-tight mb-3">Credentials</h3>
          <ul className="grid grid-cols-1 border-t border-white/5 md:grid-cols-2 md:gap-x-10">
            {credentials.map((credential) => {
              const certificateHref = `/certificates/${credential.image}.webp`;

              return (
                <li key={credential.name} className="flex flex-wrap gap-4 border-b border-white/5 py-4">
                  <a
                    href={certificateHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={-1}
                    aria-hidden="true"
                    className="block h-16 w-20 shrink-0 overflow-hidden rounded-md bg-white p-0.5"
                  >
                    <img
                      src={`/certificates/${credential.image}-thumb.webp`}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-contain"
                    />
                  </a>

                  <div className="min-w-0 flex-1 basis-40">
                    <div className="text-sm text-zinc-300">{credential.name}</div>
                    <div className="mt-1 text-xs text-zinc-400 font-mono">
                      {credential.issuer}
                      {credential.date && <span>, {credential.date}</span>}
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4">
                      <a
                        href={certificateHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View certificate: ${credential.name}`}
                        className={credentialLinkClass}
                      >
                        <FileText size={12} aria-hidden="true" />
                        View certificate
                      </a>
                      {credential.verify && (
                        <a
                          href={credential.verify.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={credentialLinkClass}
                        >
                          <ExternalLink size={12} aria-hidden="true" />
                          {credential.verify.label}
                        </a>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
