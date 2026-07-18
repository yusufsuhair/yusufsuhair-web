"use client";

import BackToTop from "@/components/BackToTop";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import ServicesWidget from "@/components/ServicesWidget";
import TerminalModal from "@/components/TerminalModal";

export default function Services() {
  return (
    <div
      className="min-h-screen bg-[#f3eee2] text-[#1c1a16] antialiased"
      style={{ fontFamily: "var(--font-inter), sans-serif" }}
    >
      <Navbar />

      <LoadingScreen />
      <BackToTop />
      <TerminalModal />
      <main className="relative z-10 pt-32">
        <ServicesWidget />

        <footer className="py-8 border-t border-[#1c1a16]/10 text-center">
          <p className="text-xs text-[#8a8371] font-mono uppercase tracking-widest">
            © {new Date().getFullYear()} Yusuf Suhair. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}
