"use client";

import { useState, useRef, useEffect, type KeyboardEvent } from "react";
import { Terminal, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type LineKind = "input" | "output" | "error";

interface Line {
  id: number;
  kind: LineKind;
  content: React.ReactNode;
}

let _uid = 0;
const uid = () => ++_uid;

const PROMPT = "visitor@yusufsuhair:~$";

// ── Helpers ─────────────────────────────────���──────────────────────────��──────
const g = (t: string) => <span className="text-green-400">{t}</span>;
const b = (t: string) => <span className="text-blue-400">{t}</span>;
const d = (t: string) => <span className="text-zinc-500">{t}</span>;
const w = (t: string) => <span className="text-white font-medium">{t}</span>;
const r = (t: string) => <span className="text-red-400">{t}</span>;
const y = (t: string) => <span className="text-yellow-400">{t}</span>;

// ── Command registry ──────────────────────────────────────────────────────────
const CMDS: Record<string, () => React.ReactNode> = {
  help: () => (
    <div className="space-y-1">
      <p className="text-zinc-400 mb-3">Available commands:</p>
      {[
        ["whoami",     "Who is Yusuf?"],
        ["about",      "Full bio"],
        ["skills",     "Tech stack"],
        ["experience", "Work history"],
        ["projects",   "Selected work"],
        ["contact",    "Get in touch"],
        ["neofetch",   "System info"],
        ["ls",         "List directory"],
        ["git log",    "Commit history"],
        ["clear",      "Clear terminal"],
        ["exit",       "Close terminal"],
      ].map(([cmd, desc]) => (
        <div key={cmd} className="grid grid-cols-[140px_1fr] text-sm">
          {g(cmd)}
          {d(desc)}
        </div>
      ))}
    </div>
  ),

  whoami: () => (
    <div className="space-y-1 text-sm">
      {w("Yusuf Suhair")}
      <p>{d("Role      ")} Fullstack & DevSecOps Engineer</p>
      <p>{d("Location  ")} Kuala Lumpur, Malaysia</p>
      <p>{d("Company   ")} Aixelink Sàrl (Remote)</p>
      <p>{d("XP        ")} 6+ years</p>
      <p>{d("Status    ")} {g("● Available for opportunities")}</p>
    </div>
  ),

  about: () => (
    <div className="space-y-2 max-w-lg text-sm">
      <p className="text-zinc-300 leading-relaxed">
        Full-stack engineer with 6+ years building secure, reliable, and scalable systems —
        from AI-powered platforms to Web3 ecosystems and 50+ mobile apps with 5M+ installs.
      </p>
      <p className="text-zinc-500 leading-relaxed">
        Currently at Aixelink Sàrl. Previously Founding Engineer at Heifereum Technology
        and full-stack dev at SWIFT and SICPA across fintech and enterprise products.
      </p>
    </div>
  ),

  skills: () => (
    <div className="space-y-1.5 text-sm">
      {[
        ["Frontend & Mobile", "Next.js · React · TypeScript · Flutter · Kotlin · Java"],
        ["Backend & APIs",    "Spring Boot · Node.js · NestJS · Python · gRPC · Kafka"],
        ["DevOps & Cloud",    "Docker · Kubernetes · Terraform · AWS · CI/CD · Ansible"],
        ["Security",         "SonarQube · Trivy · OWASP ZAP · Snyk · SAST/DAST"],
        ["Web3 & AI",        "Solidity · Web3.js · Ethereum · GPT · Computer Vision"],
      ].map(([label, skills]) => (
        <div key={label} className="grid grid-cols-[180px_1fr]">
          {b(label)}
          <span className="text-zinc-400">{skills}</span>
        </div>
      ))}
    </div>
  ),

  experience: () => (
    <div className="space-y-2 text-sm">
      {[
        ["Apr 2026 – Present",   "Software Engineer",    "Aixelink Sàrl"],
        ["Mar 2024 – Jan 2026",  "Founding Engineer",    "Heifereum Technology"],
        ["Mar 2022 – Mar 2024",  "Full-Stack Developer", "SWIFT"],
        ["Dec 2020 – Feb 2022",  "Full-Stack Developer", "SICPA"],
        ["Aug 2019 – Present",   "Mobile Developer",     "Freelance"],
      ].map(([period, title, company]) => (
        <div key={company} className="grid grid-cols-[200px_1fr]">
          <span className="text-zinc-600 font-mono text-xs mt-0.5">{period}</span>
          <p>{w(title)}{d(` @ ${company}`)}</p>
        </div>
      ))}
    </div>
  ),

  projects: () => (
    <div className="space-y-1.5 text-sm">
      {[
        ["MooMetrics",    "Crypto analytics platform",         "https://moometrics.io"],
        ["AIFiqh",        "AI-powered Islamic Q&A platform",   "https://aifiqh.com"],
        ["BoostFundCoin", "Decentralised crypto crowdfunding", "https://boostfundcoin.org"],
        ["myClipper",     "Content creation & campaigns",      "https://myclipper.vercel.app"],
        ["Heifereum",     "Web3 tech company landing page",    "https://heifereum.com"],
      ].map(([name, desc, url]) => (
        <div key={name} className="grid grid-cols-[160px_1fr]">
          <a href={url} target="_blank" rel="noopener noreferrer"
            className="text-green-400 hover:underline hover:text-green-300 transition-colors">
            {name}
          </a>
          <span className="text-zinc-500">{desc}</span>
        </div>
      ))}
      <p className="text-zinc-600 text-xs mt-1">↑ click a name to open</p>
    </div>
  ),

  contact: () => (
    <div className="space-y-1 text-sm">
      <div className="grid grid-cols-[80px_1fr]">
        {d("Email    ")}
        <a href="mailto:yusufmohdsuhair@gmail.com"
          className="text-green-400 hover:underline">
          yusufmohdsuhair@gmail.com
        </a>
      </div>
      <div className="grid grid-cols-[80px_1fr]">
        {d("LinkedIn ")}
        <a href="https://linkedin.com/in/yusufsuhair" target="_blank" rel="noopener noreferrer"
          className="text-blue-400 hover:underline">
          linkedin.com/in/yusufsuhair
        </a>
      </div>
      <div className="grid grid-cols-[80px_1fr]">
        {d("GitHub   ")}
        <a href="https://github.com/yusufsuhair" target="_blank" rel="noopener noreferrer"
          className="text-blue-400 hover:underline">
          github.com/yusufsuhair
        </a>
      </div>
    </div>
  ),

  neofetch: () => (
    <div className="flex gap-6 text-sm font-mono">
      <pre className="text-green-400 text-xs leading-tight select-none">{
`██╗   ██╗███████╗
╚██╗ ██╔╝██╔════╝
 ╚████╔╝ ███████╗
  ╚██╔╝  ╚════██║
   ██║   ███████║
   ╚═╝   ╚══════╝`}
      </pre>
      <div className="space-y-0.5 self-center">
        <p>{g("yusuf")}{d("@")}{g("dev-env")}</p>
        <p className="text-zinc-700">──────────────────────</p>
        <p>{b("OS:       ")}<span className="text-zinc-300">Human v1.0 (Engineer Edition)</span></p>
        <p>{b("Role:     ")}<span className="text-zinc-300">Fullstack & DevSecOps</span></p>
        <p>{b("Location: ")}<span className="text-zinc-300">Kuala Lumpur, MY</span></p>
        <p>{b("Stack:    ")}<span className="text-zinc-300">TS · Spring Boot · Flutter</span></p>
        <p>{b("Uptime:   ")}<span className="text-zinc-300">6+ years</span></p>
        <p>{b("Status:   ")}{g("● Online & Available")}</p>
      </div>
    </div>
  ),

  ls: () => (
    <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm font-mono">
      {["about.txt", "experience.txt", "projects/", "skills.txt", "contact.txt", ".secrets", "README.md"].map((f) => (
        <span key={f} className={
          f.endsWith("/") ? "text-blue-400" :
          f.startsWith(".") ? "text-zinc-600" :
          "text-zinc-300"
        }>{f}</span>
      ))}
    </div>
  ),

  "cat about.txt":      () => CMDS.about(),
  "cat experience.txt": () => CMDS.experience(),
  "cat skills.txt":     () => CMDS.skills(),
  "cat contact.txt":    () => CMDS.contact(),
  "cat .secrets":       () => r("Permission denied. Some things stay secret. 🔐"),
  "cat README.md":      () => <span className="text-zinc-400 text-sm">Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.</span>,
  "cat readme.md":      () => CMDS["cat README.md"](),

  sudo:               () => r("Permission denied. You are not in the sudoers file. This incident will be reported. 😄"),
  "sudo rm -rf /":    () => r("Nice try. This isn't that kind of server."),
  "sudo rm -rf *":    () => r("Nice try. This isn't that kind of server."),

  "git log": () => (
    <div className="space-y-1 font-mono text-xs">
      {[
        ["a1b2c3d", "feat: shipped 50th app to Play Store"],
        ["e4f5g6h", "fix: solved production incident at 3am"],
        ["i7j8k9l", "refactor: rewrote everything (again)"],
        ["m1n2o3p", "chore: deployed Web3 platform to mainnet"],
        ["q4r5s6t", "init: started coding journey in 2020"],
      ].map(([hash, msg]) => (
        <p key={hash}>{y(`commit ${hash}`)} <span className="text-zinc-400">{msg}</span></p>
      ))}
    </div>
  ),

  "npm install life": () => g("✓ life installed. 6+ years of experience added to /node_modules."),

  hack: () => (
    <div className="space-y-1 text-sm">
      <p className="text-green-400">Initialising hack sequence...</p>
      <p className="text-green-400">Access granted. Welcome to the matrix.</p>
      <p className="text-zinc-500 text-xs">Just kidding. But as a DevSecOps engineer, I do find real vulnerabilities.</p>
    </div>
  ),

  pwd: () => <span className="text-zinc-300 text-sm font-mono">/home/yusuf/portfolio</span>,

  date: () => <span className="text-zinc-300 text-sm font-mono">{new Date().toString()}</span>,

  uname: () => <span className="text-zinc-300 text-sm font-mono">Portfolio OS v2026 (Next.js/TypeScript)</span>,
};

// ── Welcome banner ────────────────────────────────────────────────────────────
const WELCOME: Line[] = [
  {
    id: uid(), kind: "output", content: (
      <div className="space-y-0.5 text-sm">
        <p className="text-green-400 font-medium">Welcome to Yusuf&apos;s interactive terminal.</p>
        <p className="text-zinc-500">Type <span className="text-white">help</span> to see available commands.</p>
        <p className="text-zinc-600 text-xs">──────────────────────────────────────</p>
      </div>
    )
  },
];

// ── Component ─────────────────────────────────────────────────────────────────
export default function TerminalModal() {
  const [open, setOpen] = useState(false);
  const [lines, setLines] = useState<Line[]>(WELCOME);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto-focus input when terminal opens
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  // Scroll to bottom on new lines
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  const pushLines = (...newLines: Line[]) =>
    setLines((prev) => [...prev, ...newLines]);

  const runCommand = (raw: string) => {
    const cmd = raw.trim().toLowerCase();

    // echo input
    pushLines({ id: uid(), kind: "input", content: raw.trim() });

    if (!cmd) return;

    // update command history
    setCmdHistory((h) => [raw.trim(), ...h]);
    setHistIdx(-1);

    if (cmd === "clear") {
      setLines(WELCOME);
      return;
    }

    if (cmd === "exit") {
      setOpen(false);
      return;
    }

    const handler = CMDS[cmd];
    if (handler) {
      pushLines({ id: uid(), kind: "output", content: handler() });
    } else {
      pushLines({
        id: uid(), kind: "error",
        content: (
          <span className="text-sm">
            {r(`command not found: ${raw.trim()}`)}
            {d("  — type ")}
            <span className="text-white">help</span>
            {d(" for available commands")}
          </span>
        ),
      });
    }
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      runCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const next = Math.min(histIdx + 1, cmdHistory.length - 1);
      setHistIdx(next);
      setInput(cmdHistory[next] ?? "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = Math.max(histIdx - 1, -1);
      setHistIdx(next);
      setInput(next === -1 ? "" : cmdHistory[next]);
    } else if (e.key === "Tab") {
      e.preventDefault();
      // simple tab completion
      const match = Object.keys(CMDS).find((k) => k.startsWith(input.toLowerCase()) && k !== input.toLowerCase());
      if (match) setInput(match);
    }
  };

  return (
    <>
      {/* Floating trigger */}
      <motion.button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-2xl bg-[#0a0a0a] border border-white/10 text-zinc-400 hover:text-white hover:border-white/25 transition-all duration-300 shadow-2xl backdrop-blur-sm group"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
      >
        <Terminal size={16} className="group-hover:text-green-400 transition-colors" />
        <span className="text-sm font-mono">terminal</span>
        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            />

            {/* Terminal window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            >
              <div
                className="w-full max-w-2xl rounded-2xl bg-[#0a0a0a] border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.8)] overflow-hidden pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Title bar */}
                <div className="flex items-center px-4 py-3 border-b border-white/5 bg-[#0f0f0f]">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setOpen(false)}
                      className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors"
                    />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="mx-auto flex items-center gap-2 text-xs text-zinc-500 font-mono">
                    <Terminal size={11} />
                    visitor@yusufsuhair.dev — zsh
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="text-zinc-600 hover:text-zinc-400 transition-colors"
                  >
                    <X size={14} />
                  </button>
                </div>

                {/* Output area */}
                <div className="h-96 overflow-y-auto p-5 font-mono text-sm space-y-2 scroll-smooth">
                  {lines.map((line) => (
                    <div key={line.id}>
                      {line.kind === "input" ? (
                        <div className="flex items-start gap-2">
                          <span className="text-green-400 flex-shrink-0 select-none">{PROMPT}</span>
                          <span className="text-white">{line.content}</span>
                        </div>
                      ) : (
                        <div className="pl-0">{line.content}</div>
                      )}
                    </div>
                  ))}
                  <div ref={bottomRef} />
                </div>

                {/* Input area */}
                <div
                  className="flex items-center gap-2 px-5 py-4 border-t border-white/5 bg-[#0a0a0a]"
                  onClick={() => inputRef.current?.focus()}
                >
                  <span className="text-green-400 font-mono text-sm flex-shrink-0 select-none">{PROMPT}</span>
                  <input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={onKeyDown}
                    className="flex-1 bg-transparent text-white font-mono text-sm outline-none caret-green-400 placeholder:text-zinc-700"
                    placeholder="type a command..."
                    autoComplete="off"
                    spellCheck={false}
                  />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
