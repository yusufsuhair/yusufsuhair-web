"use client";

import { MotionConfig } from "framer-motion";
import BackToTop from "@/components/BackToTop";
import Navbar from "@/components/Navbar";
import ServicesWidget from "@/components/ServicesWidget";
import TerminalModal from "@/components/TerminalModal";

export default function Services() {
  return (
    <MotionConfig reducedMotion="user">
      <div
        className="min-h-screen bg-[#f7f7f8] text-zinc-700 antialiased selection:bg-zinc-900 selection:text-white"
        style={{ fontFamily: "var(--font-inter), sans-serif", colorScheme: "light" }}
      >
        <Navbar theme="light" />

        <BackToTop theme="light" />
        <TerminalModal />
        <main className="relative pt-32">
          <ServicesWidget />

          <footer className="border-t border-zinc-200 py-8 text-center">
            <p className="font-mono text-xs text-zinc-500">
              © {new Date().getFullYear()} Yusuf Suhair. All rights reserved.
            </p>
          </footer>
        </main>
      </div>
    </MotionConfig>
  );
}
