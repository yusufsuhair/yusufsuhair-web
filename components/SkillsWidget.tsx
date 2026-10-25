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
  iconColor: string;
  command: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    id: "frontend-mobile",
    label: "frontend-mobile",
    Icon: SiReact,
    iconColor: "#60a5fa",
    command: "cat frontend-mobile.txt",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Angular", "Flutter", "Kotlin", "Java", "Android"],
  },
  {
    id: "backend-apis",
    label: "backend-apis",
    Icon: SiSpringboot,
    iconColor: "#4ade80",
    command: "cat backend-apis.txt",
    skills: ["Node.js", "NestJS", "Spring Boot", "Python", "Java EE", "gRPC", "Apache Kafka"],
  },
  {
    id: "devops-cloud",
    label: "devops-cloud",
    Icon: SiKubernetes,
    iconColor: "#a78bfa",
    command: "cat devops-cloud.txt",
    skills: ["AWS", "Terraform", "Kubernetes", "Docker", "Jenkins", "GitHub Actions", "CI/CD", "Linux", "Ansible", "Supabase", "Firebase", "ELK / Kibana", "Sentry", "Wildfly / JBoss"],
  },
  {
    id: "security",
    label: "security",
    Icon: FaShieldAlt,
    iconColor: "#f87171",
    command: "cat security.txt",
    skills: ["SonarQube", "Trivy", "OWASP ZAP", "Snyk", "Vault", "SSL/TLS", "SAST / DAST", "Penetration Testing", "Secure CI/CD"],
  },
  {
    id: "web3-blockchain",
    label: "web3-blockchain",
    Icon: SiEthereum,
    iconColor: "#fbbf24",
    command: "cat web3-blockchain.txt",
    skills: ["Solidity", "Web3.js", "Ethereum", "Smart Contracts", "NFT", "DeFi"],
  },
  {
    id: "ai-agents-automation",
    label: "ai-agents-automation",
    Icon: SiOpenai,
    iconColor: "#22d3ee",
    command: "cat ai-agents-automation.txt",
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
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
            Skills
          </h2>
          <p className="text-zinc-400 text-base max-w-2xl">
            Technologies and tools I use, grouped by area.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="rounded-2xl bg-[#0a0a0a] border border-white/10 overflow-hidden">
          <div className="flex items-center px-4 py-3 border-b border-white/5 bg-[#0f0f0f]">
            <div aria-hidden="true" className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="mx-auto text-xs text-zinc-400 font-mono">
              yusuf@dev-env: ~/skills
            </div>
          </div>
          <div role="group" aria-label="Skill areas" className="flex border-b border-white/5 bg-[#0c0c0c] overflow-x-auto scrollbar-none">
            {skillGroups.map((group, i) => {
              const isActive = active === i;
              return (
                <button
                  key={group.id}
                  type="button"
                  aria-pressed={isActive}
                  aria-controls="skills-output"
                  onClick={() => setActive(i)}
                  className={`flex min-h-11 shrink-0 items-center gap-2 px-4 py-3 text-xs focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-white font-mono whitespace-nowrap border-r border-white/5 transition-colors duration-150 ${
                    isActive
                      ? "bg-[#0a0a0a] text-white border-t-2 border-t-[var(--tab-color)]"
                      : "text-zinc-400 hover:text-zinc-300 hover:bg-white/5 border-t-2 border-t-transparent"
                  }`}
                  style={{ "--tab-color": group.iconColor } as React.CSSProperties}
                >
                  <group.Icon aria-hidden="true" size={12} style={{ color: isActive ? group.iconColor : undefined }} />
                  {group.label}
                </button>
              );
            })}
          </div>
          <div id="skills-output" className="p-4 sm:p-6 font-mono text-sm min-h-[260px]">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-6">
              <span className="text-green-400 flex-shrink-0">yusuf@dev-env:~/skills$</span>
              <span className="text-white break-all">{current.command}</span>
            </div>
            <div className="flex flex-wrap items-center gap-2 mb-4 text-zinc-400 text-xs">
              <current.Icon aria-hidden="true" size={11} style={{ color: current.iconColor }} />
              <span style={{ color: current.iconColor }}>{current.id}</span>
              <span aria-hidden="true">/</span>
              <span>{current.skills.length} skills</span>
            </div>
            <ul aria-label={`${current.label} skills`} className="flex flex-wrap gap-2">
              {current.skills.map((skill) => (
                <li
                  key={skill}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-sm text-zinc-300 font-mono hover:bg-white/10 hover:text-white transition-colors duration-150 cursor-default"
                >
                  {skill}
                </li>
              ))}
            </ul>
            <div aria-hidden="true" className="flex items-center gap-2 mt-8">
              <span className="text-green-400">yusuf@dev-env:~/skills$</span>
              <span className="w-2 h-4 bg-zinc-400 inline-block" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
