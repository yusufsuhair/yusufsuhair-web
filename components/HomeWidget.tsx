"use client";

import { Github, Linkedin } from "lucide-react";

const CAREER_START_YEAR = 2020;

export default function HomeWidget() {
  const yearsOfExperience = new Date().getFullYear() - CAREER_START_YEAR;
  return (
    <section className="min-h-screen flex items-center pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

          {/* Left: Content */}
          <div className="flex flex-col items-start space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-400 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Available for new opportunities
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.1]">
                Fullstack & DevSecOps Engineer crafting{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-600">
                  scalable systems
                </span>
                .
              </h1>
              <p className="text-lg md:text-xl text-zinc-400 max-w-lg leading-relaxed">
                {yearsOfExperience}+ years building secure, reliable systems — from Web3 protocols and AI platforms to mobile apps and enterprise backends. I own the full lifecycle: architecture, implementation, and deployment.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="https://linkedin.com/in/yusufsuhair"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-black bg-white rounded-full hover:bg-zinc-200 hover:scale-[1.02] transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                <Linkedin size={16} />
                Contact me on LinkedIn
              </a>
              <a
                href="https://github.com/yusufsuhair"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>
          </div>

          {/* Right: Terminal Visual */}
          <div className="relative lg:ml-auto w-full max-w-lg group">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-50" />

            <div className="relative rounded-2xl bg-[#0a0a0a] border border-white/10 shadow-2xl overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center px-4 py-3 border-b border-white/5 bg-[#0f0f0f]">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="mx-auto text-xs text-zinc-500 font-mono">yusuf@dev-env:~</div>
              </div>

              {/* Terminal Body */}
              <div className="p-6 font-mono text-sm space-y-3">
                <div>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">developer</span>{" "}
                  <span className="text-purple-400">=</span> {"{"}
                </div>
                <div className="pl-4 space-y-1">
                  <div>
                    <span className="text-zinc-400">name:</span>{" "}
                    <span className="text-green-400">&apos;Yusuf Suhair&apos;</span>,
                  </div>
                  <div>
                    <span className="text-zinc-400">role:</span>{" "}
                    <span className="text-green-400">&apos;Fullstack & DevSecOps Engineer&apos;</span>,
                  </div>
                  <div>
                    <span className="text-zinc-400">stack:</span> [
                  </div>
                  <div className="pl-4">
                    <span className="text-green-400">&apos;TypeScript&apos;</span>,{" "}
                    <span className="text-green-400">&apos;Spring Boot&apos;</span>,{" "}
                    <span className="text-green-400">&apos;Python&apos;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-green-400">&apos;Flutter&apos;</span>,{" "}
                    <span className="text-green-400">&apos;Kotlin&apos;</span>,{" "}
                    <span className="text-green-400">&apos;Java&apos;</span>,{" "}
                    <span className="text-green-400">&apos;Solidity&apos;</span>,
                  </div>
                  <div>],</div>
                  <div>
                    <span className="text-zinc-400">devops:</span> [
                  </div>
                  <div className="pl-4">
                    <span className="text-green-400">&apos;Docker&apos;</span>,{" "}
                    <span className="text-green-400">&apos;Kubernetes&apos;</span>,{" "}
                    <span className="text-green-400">&apos;Terraform&apos;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-green-400">&apos;CI/CD&apos;</span>,{" "}
                    <span className="text-green-400">&apos;Jenkins&apos;</span>,{" "}
                    <span className="text-green-400">&apos;Ansible&apos;</span>,{" "}
                    <span className="text-green-400">&apos;Trivy&apos;</span>
                  </div>
                  <div>],</div>
                  <div>
                    <span className="text-zinc-400">focus:</span> [
                    <span className="text-green-400">&apos;Web Dev&apos;</span>,{" "}
                    <span className="text-green-400">&apos;Web3&apos;</span>,{" "}
                    <span className="text-green-400">&apos;AI/ML&apos;</span>,{" "}
                    <span className="text-green-400">&apos;Mobile&apos;</span>,{" "}
                    <span className="text-green-400">&apos;DevSecOps&apos;</span>],
                  </div>
                  <div>
                    <span className="text-zinc-400">location:</span>{" "}
                    <span className="text-green-400">&apos;Kuala Lumpur, MY&apos;</span>
                  </div>
                </div>
                <div>{"}"}</div>
                <div className="flex items-center gap-2 pt-2">
                  <span className="text-green-400">➜</span>
                  <span className="text-blue-400">~</span>
                  <span className="animate-pulse w-2 h-4 bg-zinc-400 inline-block" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
