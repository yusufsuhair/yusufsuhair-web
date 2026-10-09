"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

interface BackToTopProps {
  theme?: "dark" | "light";
}

export default function BackToTop({ theme = "dark" }: BackToTopProps) {
  const [visible, setVisible] = useState(false);
  const isLight = theme === "light";

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  const toTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <button
      onClick={toTop}
      aria-label="Back to top"
      className={`fixed bottom-6 left-6 z-50 inline-flex h-11 w-11 items-center justify-center rounded-xl border shadow-lg transition-colors duration-300 ${
        isLight
          ? "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-400 hover:text-zinc-950"
          : "border-white/10 bg-[#0a0a0a] text-zinc-400 hover:border-white/25 hover:text-white"
      }`}
    >
      <ArrowUp size={16} />
    </button>
  );
}
