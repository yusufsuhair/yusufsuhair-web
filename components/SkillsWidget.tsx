"use client";

import { motion } from "framer-motion";
import { SiReact, SiSpringboot, SiKubernetes, SiEthereum, SiOpenai } from "react-icons/si";
import { FaShieldAlt } from "react-icons/fa";
import type { IconType } from "react-icons";

interface SkillGroup {
  Icon: IconType;
  label: string;
  beamColor: string;
  iconColor: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    Icon: SiReact,
    label: "Frontend & Mobile",
    beamColor: "#60a5fa",
    iconColor: "#60a5fa",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Angular", "Flutter", "Kotlin", "Java", "Android"],
  },
  {
    Icon: SiSpringboot,
    label: "Backend & APIs",
    beamColor: "#4ade80",
    iconColor: "#4ade80",
    skills: ["Node.js", "NestJS", "Spring Boot", "Python", "Java EE", "gRPC", "Apache Kafka"],
  },
  {
    Icon: SiKubernetes,
    label: "DevOps & Cloud",
    beamColor: "#a78bfa",
    iconColor: "#a78bfa",
    skills: [
      "AWS", "Terraform", "Kubernetes", "Docker", "Jenkins",
      "GitHub Actions", "CI/CD", "Linux", "Ansible",
      "Supabase", "Firebase", "ELK / Kibana", "Sentry", "Wildfly / JBoss",
    ],
  },
  {
    Icon: FaShieldAlt,
    label: "Security (DevSecOps)",
    beamColor: "#f87171",
    iconColor: "#f87171",
    skills: ["SonarQube", "Trivy", "OWASP ZAP", "Snyk", "Vault", "SSL/TLS", "SAST / DAST", "Penetration Testing", "Secure CI/CD"],
  },
  {
    Icon: SiEthereum,
    label: "Web3 & Blockchain",
    beamColor: "#fbbf24",
    iconColor: "#fbbf24",
    skills: ["Solidity", "Web3.js", "Ethereum", "Smart Contracts", "NFT", "DeFi"],
  },
  {
    Icon: SiOpenai,
    label: "AI / ML",
    beamColor: "#34d399",
    iconColor: "#34d399",
    skills: ["NLP / GPT", "Computer Vision", "Deep Learning", "Python (ML)", "TensorFlow", "OpenAI API"],
  },
];

function SkillCard({ item }: { item: SkillGroup }) {
  return (
    <motion.div
      className="relative p-[1px] rounded-2xl overflow-hidden"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {/* Rotating border beam */}
      <motion.div
        className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2 pointer-events-none"
        style={{
          background: `conic-gradient(from 0deg at 50% 50%, transparent 0%, transparent 65%, ${item.beamColor} 75%, transparent 85%)`,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* Card surface */}
      <div className="relative rounded-2xl bg-[#0a0a0a] p-6 h-full">
        <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
          {/* Icon with glow */}
          <div className="relative p-2.5 rounded-xl bg-white/5">
            <div
              className="absolute inset-0 rounded-xl blur-md opacity-50"
              style={{ background: item.beamColor }}
            />
            <item.Icon size={18} style={{ color: item.iconColor }} className="relative z-10" />
          </div>
          <h3 className="text-base font-medium text-white tracking-tight">{item.label}</h3>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {item.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-sm text-zinc-300 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.04)] transition-all cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function SkillsWidget() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
            Technical Arsenal
          </h2>
          <p className="text-zinc-400 text-base max-w-2xl mx-auto">
            Technologies and tools I use to build robust digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((item) => (
            <SkillCard key={item.label} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
