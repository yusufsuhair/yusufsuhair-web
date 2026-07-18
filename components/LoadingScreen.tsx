"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SEQUENCE = [
  { symbol: "➜", text: "initialising portfolio..." },
  { symbol: "✓", text: "experience loaded" },
  { symbol: "✓", text: "skills compiled" },
  { symbol: "✓", text: "projects deployed" },
  { symbol: "➜", text: "ready." },
];

const STEP_DELAY = 90;
const EXIT_DELAY = SEQUENCE.length * STEP_DELAY + 200;

interface LoadingScreenProps {
  theme?: "dark" | "light";
}

export default function LoadingScreen({ theme = "dark" }: LoadingScreenProps) {
  const [step, setStep] = useState(0);
  const [visible, setVisible] = useState(true);
  const isLight = theme === "light";

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
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className={`fixed inset-0 z-[200] flex items-center justify-center ${
            isLight ? "bg-[#f7f7f8]" : "bg-[#050505]"
          }`}
        >
          <div className="font-mono text-sm space-y-2 w-64">
            {SEQUENCE.slice(0, step + 1).map((line, i) => {
              const isCurrent = i === step && i < SEQUENCE.length - 1;
              const symbolColor =
                line.symbol === "✓"
                  ? isLight
                    ? "text-green-600"
                    : "text-green-400"
                  : isLight
                    ? "text-zinc-700"
                    : i === SEQUENCE.length - 1
                      ? "text-white"
                      : "text-zinc-500";

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-3"
                >
                  <span className={`flex-shrink-0 ${symbolColor}`}>{line.symbol}</span>
                  <span
                    className={
                      isCurrent
                        ? isLight
                          ? "text-zinc-950"
                          : "text-white"
                        : isLight
                          ? "text-zinc-600"
                          : "text-zinc-400"
                    }
                  >
                    {line.text}
                  </span>
                  {isCurrent && (
                    <span
                      className={`ml-0.5 inline-block h-3.5 w-2 animate-pulse ${
                        isLight ? "bg-zinc-700" : "bg-zinc-400"
                      }`}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
