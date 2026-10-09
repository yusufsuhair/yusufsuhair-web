"use client";

import { MotionConfig } from "framer-motion";
import ContactWidget from "@/components/ContactWidget";
import HomeWidget from "@/components/HomeWidget";
import BackToTop from "@/components/BackToTop";
import Navbar from "@/components/Navbar";
import TerminalModal from "@/components/TerminalModal";
import ProjectsWidget from "@/components/ProjectsWidget";
import SkillsWidget from "@/components/SkillsWidget";
import YoutubeWidget from "@/components/YoutubeWidget";
import InstagramWidget from "@/components/InstagramWidget";
import ExperienceWidget from "@/components/ExperienceWidget";

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <div
        className="min-h-screen bg-[#050505] text-zinc-300 antialiased selection:bg-white/20 selection:text-white"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        <Navbar />

        <BackToTop />
        <TerminalModal />
        <main className="relative z-10">
          <HomeWidget />
          <SkillsWidget />
          <ExperienceWidget />
          <ProjectsWidget />
          <YoutubeWidget />
          <InstagramWidget />
          <ContactWidget />

          <footer className="py-8 border-t border-white/5 text-center">
            <p className="text-xs text-zinc-400 font-mono">
              © {new Date().getFullYear()} Yusuf Suhair. All rights reserved.
            </p>
          </footer>
        </main>
      </div>
    </MotionConfig>
  );
}
