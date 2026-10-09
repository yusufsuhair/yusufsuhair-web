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

// colour helpers for command output
const g = (t: string) => <span className="text-green-400">{t}</span>;
const b = (t: string) => <span className="text-blue-400">{t}</span>;
const d = (t: string) => <span className="text-zinc-400">{t}</span>;
const w = (t: string) => <span className="text-white font-medium">{t}</span>;
const r = (t: string) => <span className="text-red-400">{t}</span>;
const y = (t: string) => <span className="text-yellow-400">{t}</span>;

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
      <p>{d("Role      ")} Software Engineer · AI Agent Builder · Founder, YS Academy</p>
      <p>{d("Location  ")} Kuala Lumpur, Malaysia</p>
      <p>{d("Company   ")} YS Academy / Aixelink Sàrl (Remote)</p>
      <p>{d("XP        ")} 7+ years</p>
      <p>{d("Status    ")} {g("Available for opportunities")}</p>
    </div>
  ),

  about: () => (
    <div className="space-y-2 max-w-lg text-sm">
      <p className="text-zinc-300 leading-relaxed">
        Software engineer and AI agent builder with 7+ years shipping products: agent automations,
        Web3 platforms and 50+ Android apps with 5M+ installs.
      </p>
      <p className="text-zinc-400 leading-relaxed">
        Founder of YS Academy and MudahAI, and currently Founding Engineer at Aixelink Sàrl.
        Previously CTO & Co-Founder at Heifereum Technology and full-stack developer at SWIFT and
        SICPA, across fintech and enterprise products.
      </p>
    </div>
  ),

  skills: () => (
    <div className="space-y-1.5 text-sm">
      {[
        ["Frontend & Mobile", "Next.js · React · TypeScript · Flutter · Kotlin · Java"],
        ["Backend & APIs",    "Spring Boot · Node.js · NestJS · Python · gRPC · Kafka"],
        ["DevOps & Cloud",    "Docker · Kubernetes · Terraform · AWS · CI/CD · Ansible"],
        ["Security",          "SonarQube · Trivy · OWASP ZAP · Snyk · SAST/DAST"],
        ["Web3 & AI",         "Solidity · Web3.js · Ethereum · GPT · Computer Vision"],
        ["AI Automation",     "n8n · OpenClaw · Hermes · assistant setup · workflow automation"],
      ].map(([label, skills]) => (
        <div key={label} className="grid grid-cols-[180px_1fr]">
          {b(label)}
          <span className="text-zinc-400">{skills}</span>
        </div>
      ))}
    </div>
  ),

  // keep in step with ExperienceWidget's timeline
  experience: () => (
    <div className="space-y-2 text-sm">
      {[
        ["Apr 2026 to now",      "Founding Engineer",    "Aixelink Sàrl"],
        ["Jan 2026 to now",      "Founder",              "YS Academy & MudahAI"],
        ["Mar 2024 to Jan 2026", "CTO & Co-Founder",     "Heifereum Technology"],
        ["Mar 2022 to Mar 2024", "Full-Stack Developer", "SWIFT"],
        ["Dec 2020 to Feb 2022", "Full-Stack Developer", "SICPA"],
        ["Aug 2019 to now",      "Mobile Developer",     "Independent, Google Play"],
      ].map(([period, title, company]) => (
        <div key={company} className="grid grid-cols-[200px_1fr]">
          <span className="text-zinc-400 font-mono text-xs mt-0.5">{period}</span>
          <p>{w(title)}{d(` @ ${company}`)}</p>
        </div>
      ))}
    </div>
  ),

  projects: () => (
    <div className="space-y-1.5 text-sm">
      {[
        ["AIFiqh",        "AI-powered Islamic Q&A platform",   "https://aifiqh.com"],
        ["myClipper",     "Content creation & campaigns",      "https://myclipper.vercel.app"],
        ["Heifereum",     "Web3 tech company landing page",    "https://heifereum.com"],
      ].map(([name, desc, url]) => (
        <div key={name} className="grid grid-cols-[160px_1fr]">
          <a href={url} target="_blank" rel="noopener noreferrer"
            className="text-green-400 hover:underline hover:text-green-300 transition-colors">
            {name}
          </a>
          <span className="text-zinc-400">{desc}</span>
        </div>
      ))}
      <p className="text-zinc-400 text-xs mt-1">Click a name to open it.</p>
    </div>
  ),

  contact: () => (
    <div className="space-y-1 text-sm">
      <div className="grid grid-cols-[90px_1fr]">
        {d("Email    ")}
        <a href="mailto:yusufmohdsuhair@gmail.com" className="text-green-400 hover:underline">
          yusufmohdsuhair@gmail.com
        </a>
      </div>
      <div className="grid grid-cols-[90px_1fr]">
        {d("WhatsApp ")}
        <a href="https://wa.me/601123709141" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">
          +60 11-2370 9141
        </a>
      </div>
      <div className="grid grid-cols-[90px_1fr]">
        {d("LinkedIn ")}
        <a href="https://linkedin.com/in/yusufsuhair" target="_blank" rel="noopener noreferrer"
          className="text-blue-400 hover:underline">
          linkedin.com/in/yusufsuhair
        </a>
      </div>
      <div className="grid grid-cols-[90px_1fr]">
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
      <pre className="text-green-400 text-xs leading-tight select-none" aria-hidden="true">{
`██╗   ██╗███████╗
╚██╗ ██╔╝██╔════╝
 ╚████╔╝ ███████╗
  ╚██╔╝  ╚════██║
   ██║   ███████║
   ╚═╝   ╚══════╝`}
      </pre>
      <div className="space-y-0.5 self-center">
        <p>{g("yusuf")}{d("@")}{g("dev-env")}</p>
        <p className="text-zinc-700" aria-hidden="true">──────────────────────</p>
        <p>{b("OS:       ")}<span className="text-zinc-300">Human v1.0 (Engineer Edition)</span></p>
        <p>{b("Role:     ")}<span className="text-zinc-300">Software Eng · AI Agent Builder</span></p>
        <p>{b("Location: ")}<span className="text-zinc-300">Kuala Lumpur, MY</span></p>
        <p>{b("Stack:    ")}<span className="text-zinc-300">TS · Flutter · Hermes · n8n</span></p>
        <p>{b("Uptime:   ")}<span className="text-zinc-300">7+ years</span></p>
        <p>{b("Status:   ")}{g("Open to new projects")}</p>
      </div>
    </div>
  ),

  ls: () => (
    <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm font-mono">
      {["about.txt", "experience.txt", "projects/", "skills.txt", "contact.txt", ".secrets", "README.md"].map((f) => (
        <span key={f} className={
          f.endsWith("/") ? "text-blue-400" :
          f.startsWith(".") ? "text-zinc-400 italic" :
          "text-zinc-300"
        }>{f}</span>
      ))}
    </div>
  ),

  "cat about.txt":      () => CMDS.about(),
  "cat experience.txt": () => CMDS.experience(),
  "cat skills.txt":     () => CMDS.skills(),
  "cat contact.txt":    () => CMDS.contact(),
  "cat .secrets":       () => r("Permission denied. Some things stay secret."),
  "cat README.md":      () => <span className="text-zinc-400 text-sm">Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.</span>,
  "cat readme.md":      () => CMDS["cat README.md"](),

  sudo:               () => r("Permission denied. You are not in the sudoers file. This incident will be reported."),
  "sudo rm -rf /":    () => r("Nice try. This isn't that kind of server."),
  "sudo rm -rf *":    () => r("Nice try. This isn't that kind of server."),

  "git log": () => (
    <div className="space-y-1 font-mono text-xs">
      {[
        ["a1b2c3d", "feat: shipped 50th app to Play Store"],
        ["e4f5g6h", "fix: solved production incident at 3am"],
        ["i7j8k9l", "refactor: rewrote everything (again)"],
        ["m1n2o3p", "chore: deployed Web3 platform to mainnet"],
        ["q4r5s6t", "init: started as a mobile developer in 2019"],
      ].map(([hash, msg]) => (
        <p key={hash}>{y(`commit ${hash}`)} <span className="text-zinc-400">{msg}</span></p>
      ))}
    </div>
  ),

  "npm install life": () => g("✓ life installed. 7+ years of experience added to /node_modules."),

  hack: () => (
    <div className="space-y-1 text-sm">
      <p className="text-green-400">Initialising hack sequence...</p>
      <p className="text-green-400">Access granted. Welcome to the matrix.</p>
      <p className="text-zinc-400 text-xs">Just kidding. But as a DevSecOps engineer, I do find real vulnerabilities.</p>
    </div>
  ),

  pwd: () => <span className="text-zinc-300 text-sm font-mono">/home/yusuf/portfolio</span>,

  date: () => <span className="text-zinc-300 text-sm font-mono">{new Date().toString()}</span>,

  uname: () => <span className="text-zinc-300 text-sm font-mono">Portfolio OS v2026 (Next.js/TypeScript)</span>,
};

const WELCOME: Line[] = [
  {
    id: uid(), kind: "output", content: (
      <div className="space-y-0.5 text-sm">
        <p className="text-green-400 font-medium">Welcome to Yusuf&apos;s interactive terminal.</p>
        <p className="text-zinc-400">Type <span className="text-white">help</span> to see available commands, or press Esc to close.</p>
        <p className="text-zinc-700 text-xs" aria-hidden="true">──────────────────────────────────────</p>
      </div>
    )
  },
];

export default function TerminalModal() {
  const [open, setOpen] = useState(false);
  const [lines, setLines] = useState<Line[]>(WELCOME);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  // closing hands focus back to the button that opened the terminal
  const close = () => {
    setOpen(false);
    triggerRef.current?.focus();
  };

  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => inputRef.current?.focus(), 50);
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    bottomRef.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "nearest" });
  }, [lines]);

  const pushLines = (...newLines: Line[]) =>
    setLines((prev) => [...prev, ...newLines]);

  const runCommand = (raw: string) => {
    const cmd = raw.trim().toLowerCase();

    pushLines({ id: uid(), kind: "input", content: raw.trim() });

    if (!cmd) return;

    setCmdHistory((h) => [raw.trim(), ...h]);
    setHistIdx(-1);

    if (cmd === "clear") {
      setLines(WELCOME);
      return;
    }

    if (cmd === "exit") {
      close();
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
            {d(". Type ")}
            <span className="text-white">help</span>
            {d(" for available commands.")}
          </span>
        ),
      });
    }
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // without this, "exit" moves focus to the trigger and the same Enter press clicks it open again
      e.preventDefault();
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
    } else if (e.key === "Tab" && !e.shiftKey && input.trim()) {
      // complete a partly typed command; with nothing to complete, Tab moves focus as usual
      const match = Object.keys(CMDS).find((k) => k.startsWith(input.toLowerCase()) && k !== input.toLowerCase());
      if (match) {
        e.preventDefault();
        setInput(match);
      }
    }
  };

  // keep Tab inside the open dialog
  const trapTab = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "Tab" || e.defaultPrevented) return;
    const items = [...(dialogRef.current?.querySelectorAll<HTMLElement>("a[href], button, input") ?? [])];
    if (!items.length) return;
    const i = items.indexOf(document.activeElement as HTMLElement);
    const next = e.shiftKey ? (i <= 0 ? items.length - 1 : i - 1) : (i === items.length - 1 ? 0 : i + 1);
    e.preventDefault();
    items[next].focus();
  };

  return (
    <>
      <motion.button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        className="fixed bottom-6 right-6 z-50 flex min-h-11 items-center gap-2 px-4 rounded-2xl bg-[#0a0a0a] border border-white/10 text-zinc-400 hover:text-white hover:border-white/25 transition-colors duration-300 shadow-2xl group"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
      >
        <Terminal size={16} aria-hidden="true" className="group-hover:text-green-400 transition-colors" />
        <span className="text-sm font-mono">terminal</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            >
              <div
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-label="Interactive terminal"
                onKeyDown={trapTab}
                className="w-full max-w-2xl rounded-2xl bg-[#0a0a0a] border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.8)] overflow-hidden pointer-events-auto"
              >
                <div className="flex items-center pl-4 pr-1 py-0.5 border-b border-white/5 bg-[#0f0f0f]">
                  <div className="flex items-center gap-2" aria-hidden="true">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="mx-auto flex items-center gap-2 text-xs text-zinc-400 font-mono">
                    <Terminal size={11} aria-hidden="true" />
                    visitor@yusufsuhair: zsh
                  </div>
                  <button
                    type="button"
                    onClick={close}
                    aria-label="Close terminal"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-zinc-400 hover:text-white transition-colors"
                  >
                    <X size={16} aria-hidden="true" />
                  </button>
                </div>

                <div role="log" aria-live="polite" className="h-96 overflow-y-auto p-5 font-mono text-sm space-y-2 motion-safe:scroll-smooth">
                  {lines.map((line) => (
                    <div key={line.id}>
                      {line.kind === "input" ? (
                        <div className="flex items-start gap-2">
                          <span className="text-green-400 flex-shrink-0 select-none">{PROMPT}</span>
                          <span className="text-white">{line.content}</span>
                        </div>
                      ) : (
                        <div>{line.content}</div>
                      )}
                    </div>
                  ))}
                  <div ref={bottomRef} />
                </div>

                <div
                  className="flex items-center gap-2 px-5 py-4 border-t border-white/5 bg-[#0a0a0a] focus-within:ring-1 focus-within:ring-inset focus-within:ring-green-400/50"
                  onClick={() => inputRef.current?.focus()}
                >
                  <span className="text-green-400 font-mono text-sm flex-shrink-0 select-none" aria-hidden="true">{PROMPT}</span>
                  <input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={onKeyDown}
                    aria-label="Terminal command"
                    className="flex-1 min-w-0 bg-transparent text-white font-mono text-sm outline-none caret-green-400 placeholder:text-zinc-400"
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
