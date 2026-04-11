"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SEQUENCE = [
  { symbol: "➜", color: "text-zinc-500", text: "initialising portfolio..." },
  { symbol: "✓", color: "text-green-400", text: "experience loaded" },
  { symbol: "✓", color: "text-green-400", text: "skills compiled" },
  { symbol: "✓", color: "text-green-400", text: "projects deployed" },
  { symbol: "➜", color: "text-white",     text: "ready." },
];

const STEP_DELAY = 280; // ms between each line
const EXIT_DELAY = SEQUENCE.length * STEP_DELAY + 500;

export default function LoadingScreen() {
  const [step, setStep] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    SEQUENCE.forEach((_, i) => {
      timers.push(setTimeout(() => setStep(i), i * STEP_DELAY));
    });

    timers.push(setTimeout(() => setVisible(false), EXIT_DELAY));

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] bg-[#050505] flex items-center justify-center"
        >
          <div className="font-mono text-sm space-y-2 w-64">
            {SEQUENCE.slice(0, step + 1).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-3"
              >
                <span className={`flex-shrink-0 ${line.color}`}>{line.symbol}</span>
                <span className={i === step && i < SEQUENCE.length - 1 ? "text-white" : "text-zinc-400"}>
                  {line.text}
                </span>
                {i === step && i < SEQUENCE.length - 1 && (
                  <span className="w-2 h-3.5 bg-zinc-400 animate-pulse inline-block ml-0.5" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
