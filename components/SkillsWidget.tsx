"use client";

import { Monitor, Server, Cloud, Link } from "lucide-react";

const skillGroups = [
  {
    icon: Monitor,
    label: "Frontend & Mobile",
    color: "text-blue-400",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Angular", "Flutter", "AngularJS"],
  },
  {
    icon: Server,
    label: "Backend & APIs",
    color: "text-green-400",
    skills: ["Node.js", "NestJS", "Spring Boot", "Python", "Java EE", "gRPC", "MedusaJS"],
  },
  {
    icon: Cloud,
    label: "DevOps & Cloud",
    color: "text-purple-400",
    skills: [
      "AWS",
      "ELB",
      "Terraform",
      "Kubernetes",
      "Docker",
      "Jenkins",
      "CI/CD",
      "Linux",
      "Ansible",
      "Supabase",
      "Firebase",
      "Sentry",
      "Kibana",
      "ELK",
      "Wildfly / JBoss",
    ],
  },
  {
    icon: Link,
    label: "Web3 & AI",
    color: "text-yellow-400",
    skills: ["Solidity", "Web3.js", "Ethereum", "NLP / GPT", "Computer Vision", "Deep Learning"],
  },
];

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.label}
                className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-white/10 transition-colors group"
              >
                <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                  <div className={`p-2 rounded-lg bg-white/5 ${group.color} group-hover:scale-110 transition-transform`}>
                    <Icon size={18} />
                  </div>
                  <h3 className="text-base font-medium text-white tracking-tight">{group.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-sm text-zinc-300 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.04)] transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
