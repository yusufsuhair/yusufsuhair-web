"use client";

import AboutWidget from "@/components/AboutWidget";
import ContactWidget from "@/components/ContactWidget";
import ExperienceWidget from "@/components/ExperienceWidget";
import HomeWidget from "@/components/HomeWidget";
import ProjectsWidget from "@/components/ProjectsWidget";
import SkillsWidget from "@/components/SkillsWidget";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-[#050505] text-zinc-300 antialiased selection:bg-white/20 selection:text-white"
      style={{ fontFamily: "var(--font-inter), sans-serif" }}
    >
      {/* Background Ambient Glow */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-500/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-[#050505]/70 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-medium tracking-tighter text-white">
            YS.
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#about" className="text-zinc-400 hover:text-white transition-colors">
              About
            </a>
            <a href="#projects" className="text-zinc-400 hover:text-white transition-colors">
              Projects
            </a>
            <a href="#experience" className="text-zinc-400 hover:text-white transition-colors">
              Experience
            </a>
            <a href="#skills" className="text-zinc-400 hover:text-white transition-colors">
              Skills
            </a>
          </div>
          <a
            href="#contact"
            className="px-4 py-2 text-sm font-medium text-black bg-white rounded-full hover:scale-105 transition-transform duration-300"
          >
            Let&apos;s talk
          </a>
        </div>
      </nav>

      <main className="relative z-10">
        <HomeWidget />
        <AboutWidget />
        <ProjectsWidget />
        <ExperienceWidget />
        <SkillsWidget />
        <ContactWidget />

        <footer className="py-8 border-t border-white/5 text-center">
          <p className="text-xs text-zinc-600 font-mono uppercase tracking-widest">
            © {new Date().getFullYear()} Yusuf Suhair. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}
