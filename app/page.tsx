"use client";

import AboutWidget from "@/components/AboutWidget";
import ContactWidget from "@/components/ContactWidget";
import HomeWidget from "@/components/HomeWidget";
import BackToTop from "@/components/BackToTop";
import CursorFollower from "@/components/CursorFollower";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import TerminalModal from "@/components/TerminalModal";
import ProjectsWidget from "@/components/ProjectsWidget";
import SkillsWidget from "@/components/SkillsWidget";
import StatsWidget from "@/components/StatsWidget";
import YoutubeWidget from "@/components/YoutubeWidget";

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

      <Navbar />

      <LoadingScreen />
      <CursorFollower />
      <BackToTop />
      <TerminalModal />
      <main className="relative z-10">
        <HomeWidget />
        <StatsWidget />
        <AboutWidget />
        <SkillsWidget />
        <ProjectsWidget />
        <YoutubeWidget />
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
