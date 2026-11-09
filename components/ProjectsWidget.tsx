"use client";

import { ExternalLink, Smartphone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Project {
  name: string;
  title: string;
  role: string;
  url: string;
  description: string;
  tech: string[];
  android?: string;
  /** Slug of the pair of files built by `npm run optimize:images`. */
  image: string;
  /** Link text, when "Visit {name}" isn't the right verb. */
  cta?: string;
  category: "web" | "mobile" | "widget" | "games" | "crypto" | "ecommerce";
}

const projectsData: Project[] = [
  {
    name: "MudahAI",
    title: "MudahAI: Managed AI Agents for Businesses",
    role: "Founder / AI Agent Builder",
    url: "https://mudahai.com",
    description:
      "A done-for-you AI operations system that handles WhatsApp enquiries, bookings, reminders, rescheduling and follow-ups, with human escalation built into the workflow.",
    tech: ["AI Agents", "n8n", "WhatsApp Cloud API", "OpenAI", "Supabase", "DevOps"],
    category: "web",
    image: "mudahai",
  },
  {
    name: "LepakMamak",
    title: "LepakMamak: Malaysian Multiplayer Browser Game",
    role: "Creator / Full-Stack Engineer",
    url: "https://lepakmamak.my",
    description:
      "A free multiplayer browser game set in a miniature Kuala Lumpur, where players can explore the city, ride around, meet friends at the mamak and chat through live text and voice.",
    tech: ["Three.js", "WebGL", "Supabase", "Multiplayer", "Voice Chat"],
    category: "games",
    image: "lepakmamak",
    cta: "Play LepakMamak",
  },
  {
    name: "Slipstream",
    title: "Slipstream: Interactive F1 Field Guide",
    role: "Creator / 3D Web Engineer",
    url: "https://f1.yusufsuhair.xyz",
    description:
      "A 3D study site for the 2026 Formula 1 season: hands-on lessons on the cars, active aero, power units, tyres, circuits, race starts, flags and the steering wheel, plus a quiz, with a physically modelled engine and crowd soundtrack.",
    tech: ["Three.js", "WebGL", "Web Audio", "Blender", "Cloudflare Workers"],
    category: "web",
    image: "slipstream",
    cta: "Open Slipstream",
  },
  {
    name: "YS Academy",
    title: "YS Academy: Kelas AI Online",
    role: "Founder / Full-Stack Engineer",
    url: "https://ysacademy.my",
    description: "A subscription learning platform with live workshops, member accounts, Stripe billing, lesson progress, access expiry and Telegram community integration.",
    tech: ["Next.js", "Supabase", "Stripe", "Telegram", "AI Education"],
    category: "web",
    image: "ys-academy",
  },
  {
    name: "Alafasy",
    title: "Alafasy: Official App of Sheikh Mishary Rashid Alafasy",
    role: "Product & Mobile Engineer",
    url: "https://www.alafasy.co/",
    description:
      "A Muslim companion app with a Qur'an reader, prayer times, Qiblah, dhikr and nasheeds. Worked on it from idea to launch, and proposed its AI checking for tasmi' and tahsin recitation and its blockchain tracking for badal umrah. More than 68,000 users since launching in September 2025.",
    android: "https://play.google.com/store/apps/details?id=com.alafasy.app",
    tech: ["iOS", "Android", "AI Recitation Checking", "Blockchain"],
    category: "mobile",
    image: "alafasy",
  },
  {
    name: "AI Balance",
    title: "AI Balance: Credit Tracker",
    role: "Founder / Mobile Developer",
    url: "https://aibalance.pages.dev/",
    description:
      "A mobile dashboard for AI API credits: balances and monthly spend from nine providers, including OpenAI, Claude, DeepSeek and OpenRouter, with balance history, low-balance alerts, model usage reports and home-screen widgets. Keys stay on the phone.",
    tech: ["Flutter", "Dart", "iOS", "Android", "WidgetKit"],
    category: "mobile",
    image: "ai-balance",
  },
  {
    name: "Shotivo",
    title: "Shotivo: Screenshot & Video Mockup Studio",
    role: "Founder / Mobile Developer",
    url: "https://shotivo.pages.dev/",
    description:
      "A mobile studio for turning screenshots and screen recordings into device mockups, with customizable frames and backgrounds, saved styles, batch image exports and on-device video processing for iOS and Android.",
    tech: ["Flutter", "Dart", "iOS", "Android"],
    category: "mobile",
    image: "shotivo",
  },
  {
    name: "Ganti Solat",
    title: "Ganti Solat: Missed Prayer & Fast Tracker",
    role: "Founder / Mobile Developer",
    url: "https://gantisolat.pages.dev/",
    description:
      "A private Malay app for making up missed prayers and fasts, with a balance for each prayer time, a daily qada target, sourced reminders and home-screen widgets. No account; records stay on the phone.",
    tech: ["Flutter", "Dart", "iOS", "Android", "WidgetKit"],
    category: "mobile",
    image: "ganti-solat",
  },
  {
    name: "Teleprompter",
    title: "Teleprompter: Floating Scripts & Video Recording",
    role: "Founder / Mobile Developer",
    url: "https://teleprompter-float.pages.dev/",
    description:
      "An iPhone and iPad teleprompter with floating scripts over TikTok, Instagram, Camera and Zoom, plus built-in video recording. Adjustable scrolling, text styling and camera controls keep lines close to the lens, with scripts saved locally and recordings sent to Photos.",
    tech: ["iOS", "iPadOS", "Picture in Picture", "Video Recording"],
    category: "mobile",
    image: "teleprompter",
  },
  {
    name: "Petal",
    title: "Petal: Period & Cycle Tracker",
    role: "Founder / Mobile Developer",
    url: "https://petalcycle.pages.dev/",
    description:
      "An iOS period and cycle tracker with visual check-ins for flow, symptoms, mood and daily notes, a cycle overview and journal history. Entries stay on the device, with journal export and deletion controls. Coming to iOS.",
    tech: ["iOS", "Cycle Tracking", "Visual Journaling", "On-device Storage"],
    category: "mobile",
    image: "petal",
  },
  {
    name: "Tiny Stats",
    title: "Tiny Stats: Mac Performance Monitor",
    role: "Creator / macOS Developer",
    url: "https://tiny-stats.pages.dev/",
    description:
      "A lightweight Mac menu bar monitor for CPU, RAM and GPU, with memory pressure, top processes and five-minute usage history. Built natively for Apple silicon, with performance readings kept on your Mac.",
    tech: ["Swift", "AppKit", "macOS", "Apple Silicon"],
    category: "widget",
    image: "tiny-stats",
  },
  {
    name: "Fynecta",
    title: "Fynecta: The Intelligent Terminal for Global Market",
    role: "Full-Stack Engineer",
    url: "https://www.fynecta.io/",
    description:
      "A trading terminal for crypto and commodities, with live price feeds, portfolio performance tracking and real-time trade signals, and algorithmic strategies running the managed portfolios.",
    tech: ["Next.js", "React", "Tailwind", "Real-time Data", "Trading"],
    category: "crypto",
    image: "fynecta",
  },
  {
    name: "Dalbass",
    title: "Dalbass: Platform Sinyal XAUUSD",
    role: "Full-Stack Engineer",
    url: "https://dalbass.com",
    description:
      "A gold (XAUUSD) trading signal platform: scalping and intraday signals with entry, stop loss and TP1 to TP3 levels, an automatic lot calculator, open performance recaps and Telegram delivery.",
    tech: ["Next.js", "React", "Tailwind", "Telegram", "Trading"],
    category: "crypto",
    image: "dalbass",
  },
  {
    name: "Fake Live",
    title: "Fake Live: Livestream Simulator",
    role: "Founder / Mobile Developer",
    url: "https://fake-live-prank.pages.dev/",
    description: "An Android entertainment app for simulated livestreams, with eight platform styles, celebrity guests, comments and reactions. Published on Google Play with more than 50,000 downloads.",
    android: "https://play.google.com/store/apps/details?id=com.yusufsuhair.fake_live",
    tech: ["Android", "Livestream Simulation", "Google Play"],
    category: "mobile",
    image: "fake-live",
  },
  {
    name: "Fake Celebs",
    title: "Fake Celebs: Call Prank App",
    role: "Founder / Mobile Developer",
    url: "https://fake-celebs-call.pages.dev/",
    description: "Simulated celebrity video calls, voice calls, AI chat and livestreams. On Google Play with more than 5,000 downloads.",
    android: "https://play.google.com/store/apps/details?id=com.yusufsuhair.fake_video_call",
    tech: ["Android", "Video Calls", "AI Chat", "Google Play"],
    category: "mobile",
    image: "fake-celebs",
  },
  {
    name: "InsuransKu",
    title: "InsuransKu: Car Insurance Admin",
    role: "Full-Stack Engineer",
    url: "https://insuransku.broadcast-studio.workers.dev/",
    description: "A dashboard for car insurance brokers and ops teams that tracks every policy, flags missing or expired documents and sends renewal reminders before cover lapses.",
    tech: ["Cloudflare Workers", "Dashboard", "Document Tracking", "SaaS"],
    category: "ecommerce",
    image: "insuransku",
  },
  {
    name: "Supra.ai",
    title: "Supra.ai: AI Workspace for MT5 Traders",
    role: "Full-Stack Engineer",
    url: "https://supra-ai.broadcast-studio.workers.dev/",
    description: "A concept for a desktop workspace that puts market research, Telegram signals, order review and a risk budget in one view, with an interactive demo and early-access sign-up.",
    tech: ["Cloudflare Workers", "AI", "MetaTrader 5", "Landing Page"],
    category: "web",
    image: "supra-ai",
  },
  {
    name: "Ling",
    title: "Ling: AI Assistant for Sales and Service Teams",
    role: "Full-Stack Engineer",
    url: "https://ling-web.broadcast-studio.workers.dev/",
    description: "A landing page for a multi-agent AI assistant for sales and service teams, with a product preview, feature sections and a demo booking call to action.",
    tech: ["Cloudflare Workers", "AI Agents", "Landing Page"],
    category: "web",
    image: "ling",
  },
  {
    name: "myClipper",
    title: "myClipper: Content Creation Platform",
    role: "Full-Stack Engineer",
    url: "https://myclipper.vercel.app/",
    description: "A marketplace where businesses run campaigns and creators earn based on views delivered.",
    tech: ["Next.js", "TypeScript", "Tailwind", "SaaS"],
    category: "web",
    image: "myclipper",
  },
  {
    name: "$EJOE",
    title: "$EJOE NFT Marketplace",
    role: "CTO / Lead Web3 Engineer",
    url: "http://ejoe-nft.vercel.app/",
    description: "An NFT marketplace with wallet connect, search and price filters, backed by smart contracts.",
    tech: ["Solidity", "Next.js", "React", "Web3.js", "DevOps"],
    category: "crypto",
    image: "ejoe-nft",
  },
  {
    name: "$WALID",
    title: "$WALID Memecoin Landing Page",
    role: "Full-Stack Engineer",
    url: "https://walid-memecoin-website.vercel.app/",
    description: "A token landing page with a how-to-buy walkthrough, a pump.fun buy flow and in-page mini games.",
    tech: ["Next.js", "React", "Tailwind", "Solana", "pump.fun"],
    category: "crypto",
    image: "walid",
  },
  {
    name: "$REMBUYANG",
    title: "$REMBUYANG Memecoin Landing Page",
    role: "Full-Stack Engineer",
    url: "https://rembuyang.vercel.app/",
    description: "A community token page with wallet connect, live price, a buy flow and a built-in anthem player.",
    tech: ["Next.js", "React", "Tailwind", "Web3", "Wallet Connect"],
    category: "crypto",
    image: "rembuyang",
  },
  {
    name: "Kasoot",
    title: "Kasoot: Shoe Store",
    role: "Full-Stack Engineer",
    url: "https://kasoot-storefront.broadcast-studio.workers.dev/my",
    description: "An online store for running, trail, court and everyday shoes, delivering across Malaysia with payment by FPX, card or e-wallet.",
    tech: ["Next.js", "Cloudflare Workers", "FPX", "E-commerce"],
    category: "ecommerce",
    image: "kasoot",
  },
  {
    name: "Maison",
    title: "Maison: Fine Jewellery and Watches",
    role: "Full-Stack Engineer",
    url: "https://maison-storefront.broadcast-studio.workers.dev/my",
    description: "An online store for fine jewellery and watches, delivering across Malaysia with payment by FPX, card or e-wallet.",
    tech: ["Next.js", "Cloudflare Workers", "FPX", "E-commerce"],
    category: "ecommerce",
    image: "maison",
  },
];

// Three full rows of the two-column grid.
const PAGE_SIZE = 6;

const categories = [
  { id: "all", label: "All" },
  { id: "web", label: "Web Apps" },
  { id: "mobile", label: "Mobile" },
  { id: "widget", label: "Widget" },
  { id: "games", label: "Games" },
  { id: "crypto", label: "Crypto / Web3" },
  { id: "ecommerce", label: "E-commerce" },
];

const MEDIA_SIZES = "(min-width: 1280px) 600px, (min-width: 768px) 50vw, 100vw";

function ProjectImage({ project }: { project: Project }) {
  return (
    <img
      src={`/projects/${project.image}-960.webp`}
      srcSet={`/projects/${project.image}-480.webp 480w, /projects/${project.image}-960.webp 960w`}
      sizes={MEDIA_SIZES}
      alt=""
      loading="lazy"
      decoding="async"
      className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
    />
  );
}

function ProjectLinks({ project, className }: { project: Project; className: string }) {
  return (
    <>
      <a href={project.url} target="_blank" rel="noopener noreferrer" className={className}>
        <ExternalLink size={12} aria-hidden="true" />
        {project.cta ?? `Visit ${project.name}`}
      </a>
      {project.android && (
        <a href={project.android} target="_blank" rel="noopener noreferrer" className={className}>
          <Smartphone size={12} aria-hidden="true" />
          {project.name} on Google Play
        </a>
      )}
    </>
  );
}

const linkClass = "inline-flex min-h-11 min-w-11 items-center gap-1.5 text-sm text-zinc-200 hover:text-white transition-colors";

interface ProjectCardProps {
  project: Project;
  index: number;
  collapsed: boolean;
  revealDelay: number;
}

function ProjectCard({ project, index, collapsed, revealDelay }: ProjectCardProps) {
  return (
    <motion.div
      data-index={index}
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, ease: "easeOut", delay: revealDelay }}
      className={`group relative flex-col rounded-2xl bg-surface-raised border border-white/5 hover:border-white/15 transition-all duration-500 overflow-hidden hover:-translate-y-1 hover:shadow-lift ${
        collapsed ? "phone-collapsed hidden" : "flex"
      }`}
    >
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={-1}
        aria-hidden="true"
        className="w-full relative overflow-hidden border-b border-white/5 bg-surface block aspect-[2/1]"
      >
        <ProjectImage project={project} />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-raised via-transparent to-transparent opacity-60" />
      </a>

      <div className="flex-1 flex flex-col relative z-10 p-5 md:p-6">
        <div className="mb-2 text-[11px] font-medium uppercase tracking-[0.12em] text-zinc-400">
          {project.role}
        </div>
        <h3 className="font-medium text-white mb-2 tracking-tight text-xl md:text-2xl">
          {project.title}
        </h3>
        <p className="text-zinc-400 mb-4 flex-1 leading-relaxed text-sm md:text-base">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tech.slice(0, 4).map((tech) => (
            <span key={tech} className="px-2 py-0.5 text-xs text-zinc-300 bg-white/5 rounded border border-white/5">
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2 py-0.5 text-xs text-zinc-400 bg-white/5 rounded border border-white/5">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-x-4 mt-auto border-t border-white/5">
          <ProjectLinks project={project} className={linkClass} />
        </div>
      </div>
    </motion.div>
  );
}

/** The top of the next row, fading into the page, so a long list reads as continuing. */
function NextRowPeek({ projects }: { projects: Project[] }) {
  return (
    <div
      aria-hidden="true"
      inert
      className="js-only pointer-events-none relative mt-6 h-28 md:h-36 overflow-hidden [mask-image:linear-gradient(to_bottom,black,transparent)]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <div
            key={project.title}
            className={`rounded-2xl border border-white/5 bg-surface-raised overflow-hidden ${i > 0 ? "hidden md:block" : ""}`}
          >
            <div className="aspect-[2/1] bg-surface">
              <ProjectImage project={project} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const pagerButtonClass =
  "inline-flex min-h-11 items-center px-6 rounded-full text-sm font-medium text-zinc-200 bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

export default function ProjectsWidget() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const gridRef = useRef<HTMLDivElement>(null);
  const pagerRef = useRef<HTMLButtonElement>(null);
  // Where focus goes after the list changes: a card index, the pager, or nowhere.
  const focusTargetRef = useRef<number | "pager" | null>(null);

  const filteredProjects =
    selectedCategory === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  const total = filteredProjects.length;
  const shown = Math.min(visibleCount, total);
  const remaining = total - shown;
  const nextRow = filteredProjects.slice(shown, shown + 2);

  // "Show more" focuses the first new card. "Show fewer" focuses the pager, which
  // scrolls the page to where the shortened list now ends instead of leaving the
  // reader far below it.
  useEffect(() => {
    const target = focusTargetRef.current;
    if (target === null) return;
    focusTargetRef.current = null;
    if (target === "pager") {
      pagerRef.current?.focus();
      pagerRef.current?.scrollIntoView({ block: "center" });
      return;
    }
    gridRef.current
      ?.querySelector<HTMLAnchorElement>(`[data-index="${target}"] a:not([tabindex="-1"])`)
      ?.focus({ preventScroll: true });
  }, [visibleCount]);

  const showMore = () => {
    focusTargetRef.current = shown;
    setVisibleCount(shown + PAGE_SIZE);
  };

  const showFewer = () => {
    focusTargetRef.current = "pager";
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <section id="projects" className="py-24 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-10">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
            Selected Work
          </h2>
          <p className="text-zinc-400 text-base max-w-2xl">
            AI businesses, products and systems I&apos;ve built, plus earlier work in mobile, SaaS and Web3.
          </p>
        </motion.div>

        <div role="group" aria-label="Filter projects by category" className="js-only flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => { setSelectedCategory(cat.id); setVisibleCount(PAGE_SIZE); }}
                className={`inline-flex min-h-11 items-center px-4 rounded-full text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "bg-white text-black"
                    : "bg-white/5 border border-white/10 text-zinc-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              collapsed={index >= shown}
              revealDelay={(index % 2) * 0.07}
            />
          ))}
        </div>

        {remaining > 0 && <NextRowPeek projects={nextRow} />}

        {total > PAGE_SIZE && (
          <div className="js-only mt-8 flex flex-col items-center gap-4">
            <div className="flex flex-col items-center gap-2" aria-live="polite">
              <span className="font-mono text-xs text-zinc-400">
                {shown} of {total} projects
              </span>
              <span className="block h-0.5 w-32 rounded-full bg-white/10 overflow-hidden" aria-hidden="true">
                <span
                  className="block h-full bg-white/60 transition-[width] duration-500 ease-out"
                  style={{ width: `${(shown / total) * 100}%` }}
                />
              </span>
            </div>
            {remaining > 0 ? (
              <button ref={pagerRef} type="button" onClick={showMore} className={pagerButtonClass}>
                Show {Math.min(PAGE_SIZE, remaining)} more
              </button>
            ) : (
              <button ref={pagerRef} type="button" onClick={showFewer} className={pagerButtonClass}>
                Show fewer
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
