"use client";

import BackToTop from "@/components/BackToTop";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import ResourcesWidget from "@/components/ResourcesWidget";
import TerminalModal from "@/components/TerminalModal";

export default function Resources() {
  return (
    <div
      className="min-h-screen bg-[#f7f7f8] text-zinc-700 antialiased selection:bg-zinc-900 selection:text-white"
      style={{ fontFamily: "var(--font-inter), sans-serif", colorScheme: "light" }}
    >
      <Navbar theme="light" />

      <LoadingScreen theme="light" />
      <BackToTop theme="light" />
      <TerminalModal />
      <main className="relative pt-32">
        <ResourcesWidget />

        <footer className="border-t border-zinc-200 py-8 text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            © {new Date().getFullYear()} Yusuf Suhair. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}
