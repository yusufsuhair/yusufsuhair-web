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

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-6 left-6 z-50 p-3 rounded-xl border transition-all duration-300 shadow-lg backdrop-blur-sm hover:scale-105 ${
        isLight
          ? "border-zinc-200 bg-white/90 text-zinc-600 hover:border-zinc-400 hover:text-zinc-950"
          : "border-white/10 bg-[#0a0a0a] text-zinc-400 hover:border-white/25 hover:text-white"
      }`}
    >
      <ArrowUp size={16} />
    </button>
  );
}
