"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

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
      className="fixed bottom-6 left-6 z-50 p-3 rounded-2xl bg-[#0a0a0a] border border-white/10 text-zinc-400 hover:text-white hover:border-white/25 transition-all duration-300 shadow-2xl backdrop-blur-sm hover:scale-105"
    >
      <ArrowUp size={16} />
    </button>
  );
}
