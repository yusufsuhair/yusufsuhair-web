"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SiReact, SiSpringboot, SiKubernetes, SiEthereum, SiOpenai } from "react-icons/si";
import { FaShieldAlt } from "react-icons/fa";
import type { IconType } from "react-icons";

interface SkillGroup {
  id: string;
  label: string;
  Icon: IconType;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    id: "frontend-mobile",
    label: "Frontend & Mobile",
    Icon: SiReact,
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Angular", "Flutter", "Kotlin", "Java", "Android"],
  },
  {
    id: "backend-apis",
    label: "Backend & APIs",
    Icon: SiSpringboot,
    skills: ["Node.js", "NestJS", "Spring Boot", "Python", "Java EE", "gRPC", "Apache Kafka"],
  },
  {
    id: "devops-cloud",
    label: "DevOps & Cloud",
    Icon: SiKubernetes,
    skills: ["AWS", "Terraform", "Kubernetes", "Docker", "Jenkins", "GitHub Actions", "CI/CD", "Linux", "Ansible", "Supabase", "Firebase", "ELK / Kibana", "Sentry", "Wildfly / JBoss"],
  },
  {
    id: "security",
    label: "Security",
    Icon: FaShieldAlt,
    skills: ["SonarQube", "Trivy", "OWASP ZAP", "Snyk", "Vault", "SSL/TLS", "SAST / DAST", "Penetration Testing", "Secure CI/CD"],
  },
  {
    id: "web3-blockchain",
    label: "Web3 & Blockchain",
    Icon: SiEthereum,
    skills: ["Solidity", "Web3.js", "Ethereum", "Smart Contracts", "NFT", "DeFi"],
  },
  {
    id: "ai-agents-automation",
    label: "AI Agents & Automation",
    Icon: SiOpenai,
    skills: ["Hermes", "OpenClaw", "Ollama", "n8n", "OpenRouter", "MCP", "Browserbase", "Firecrawl", "Telegram Bots", "AI Agent Setup", "Workflow Automation", "Agentic Tools"],
  },
];

export default function SkillsWidget() {
  const [active, setActive] = useState(0);
  const current = skillGroups[active];

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Skills</h2>
          <p className="text-zinc-400 text-base max-w-2xl">
            Technologies and tools I use, grouped by area.
          </p>
        </div>

        <div role="group" aria-label="Skill areas" className="flex flex-wrap gap-2 mb-6">
          {skillGroups.map((group, i) => {
            const isActive = active === i;
            return (
              <button
                key={group.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActive(i)}
                className={`inline-flex min-h-11 items-center gap-2 px-4 rounded-full text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "bg-white text-black"
                    : "bg-white/5 border border-white/10 text-zinc-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                <group.Icon size={13} aria-hidden="true" />
                {group.label}
              </button>
            );
          })}
        </div>

        <motion.ul
          key={current.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          aria-label={`${current.label} skills`}
          className="flex flex-wrap gap-2 rounded-2xl bg-[#0a0a0a] border border-white/10 p-6 min-h-[140px] content-start"
        >
          {current.skills.map((skill) => (
            <li
              key={skill}
              className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-sm text-zinc-300 font-mono"
            >
              {skill}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
