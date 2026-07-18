"use client";

import type { ComponentType, ReactNode } from "react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Link2, MessageCircle, Users, ChevronDown, CheckCircle2, Info } from "lucide-react";

const mono = { fontFamily: "var(--font-jetbrains-mono), monospace" };

const WHATSAPP_NUMBER = "601123709141";
const waLink = (message: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const CAREER_START = new Date(2019, 6, 1); // July 2019
const getYearsSince = (start: Date): number => {
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();
  if (now.getMonth() < start.getMonth()) years--;
  return years;
};

type Icon = ComponentType<{ size?: number; className?: string }>;

interface Service {
  id: string;
  anchor?: "web" | "hermes" | "n8n";
  title: string;
  description: string;
  price: string;
  Icon?: Icon;
  renderIcon?: () => ReactNode;
  cta: { label: string; href: string; Icon: Icon };
  caption: { label: string; Icon: Icon };
  details?: ReactNode;
}

const MacOSBrowserPreview = () => (
  <motion.div
    whileHover={{ y: -2, scale: 1.03 }}
    transition={{ type: "spring", stiffness: 360, damping: 24 }}
    className="w-16 h-12 md:w-20 md:h-[60px] overflow-hidden rounded-md border border-white/15 bg-[#0a0a0a] shadow-[0_8px_24px_rgba(0,0,0,0.45)]"
    aria-hidden="true"
  >
    <div className="flex h-3.5 md:h-4 items-center gap-1 border-b border-white/10 bg-[#161616] px-1.5">
      <span className="h-1.5 w-1.5 rounded-full bg-[#ff5f57]" />
      <span className="h-1.5 w-1.5 rounded-full bg-[#febc2e]" />
      <span className="h-1.5 w-1.5 rounded-full bg-[#28c840]" />
      <span className="ml-0.5 h-1.5 flex-1 rounded-full border border-white/10 bg-white/5" />
    </div>

    <div className="h-[calc(100%-14px)] bg-[#070707] p-1.5 md:h-[calc(100%-16px)] md:p-2">
      <div className="mb-1 flex items-center justify-between">
        <span className="h-1.5 w-5 rounded-full bg-zinc-200" />
        <div className="flex gap-1">
          <span className="h-1 w-2.5 rounded-full bg-zinc-700" />
          <span className="h-1 w-2.5 rounded-full bg-zinc-700" />
        </div>
      </div>
      <div className="grid h-[calc(100%-6px)] grid-cols-[1.1fr_0.9fr] gap-1.5 rounded-sm border border-white/5 bg-[#101010] p-1.5 shadow-[0_1px_3px_rgba(15,23,42,0.08)]">
        <div className="flex flex-col justify-center gap-1">
          <span className="h-1.5 w-full rounded-full bg-zinc-200" />
          <span className="h-1 w-4/5 rounded-full bg-zinc-700" />
          <span className="mt-0.5 h-2 w-5 rounded-sm bg-[#2563eb]" />
        </div>
        <div className="relative overflow-hidden rounded-sm bg-blue-500/15">
          <span className="absolute bottom-1 left-1 h-3 w-3 rounded-sm bg-blue-300/40" />
          <span className="absolute right-1 top-1 h-1.5 w-4 rounded-full bg-[#60a5fa]" />
        </div>
      </div>
    </div>
  </motion.div>
);

interface PricingTier {
  name: string;
  price: string;
  blurb?: string;
  items: string[];
  note?: string;
}

interface PricingGroup {
  title: string;
  tiers: PricingTier[];
}

const pricingSheet: PricingGroup[] = [
  {
    title: "1. AI Agent Coaching",
    tiers: [
      {
        name: "AI Agent Coaching",
        price: "RM500/hour",
        blurb: "For developers, business owners, or teams who want to learn how to build and use AI Agents.",
        items: [
          "Hermes AI",
          "Hermes Desktop Setup",
          "AI Agent Architecture",
          "Prompt Engineering",
          "OpenRouter / Ollama",
          "Browserbase",
          "Firecrawl",
          "MCP (Model Context Protocol)",
          "Telegram Integration",
          "Cron Jobs & Task Scheduling",
          "AI Workflow Design",
          "AI Automation",
          "Troubleshooting & Q&A",
        ],
        note: "You learn. You build. I guide.",
      },
    ],
  },
  {
    title: "2. AI Agent Setup & Implementation",
    tiers: [
      {
        name: "Starter Setup",
        price: "RM799",
        blurb: "Suitable for individuals or developers.",
        items: [
          "Hermes installation",
          "VPS configuration",
          "Telegram Bot integration",
          "OpenRouter / Ollama setup",
          "Basic AI profile configuration",
          "Initial testing",
        ],
      },
      {
        name: "Business Setup",
        price: "RM1,999",
        blurb: "Suitable for businesses looking to deploy AI Agents.",
        items: [
          "Full Hermes deployment",
          "Multi-profile AI Agent setup",
          "Browserbase integration",
          "Firecrawl integration",
          "Telegram integration",
          "Prompt engineering",
          "AI workflow configuration",
          "Testing & deployment",
          "Knowledge handover",
        ],
      },
      {
        name: "Custom Setup",
        price: "Starting from RM3,000",
        blurb: "Suitable for custom business solutions such as:",
        items: [
          "AI Customer Service",
          "AI Sales Assistant",
          "AI Competitor Intelligence",
          "AI Research Agent",
          "AI Marketing Agent",
          "Internal Knowledge Assistant",
          "AI Automation Workflow",
        ],
        note: "Final pricing depends on project scope and integrations.",
      },
    ],
  },
  {
    title: "Monthly Support & Retainer",
    tiers: [
      {
        name: "Basic",
        price: "RM500/month",
        items: [
          "1 hour consultation",
          "Prompt optimisation",
          "Minor improvements",
          "Bug fixes",
          "WhatsApp / Email support",
        ],
      },
      {
        name: "Business",
        price: "RM1000/month",
        items: [
          "Up to 3 hours consultation",
          "Workflow optimisation",
          "New prompt development",
          "AI performance tuning",
          "Priority support",
          "Monthly review session",
        ],
      },
      {
        name: "Enterprise",
        price: "Custom Quote",
        items: [
          "Multiple AI Agents",
          "Continuous optimisation",
          "New feature implementation",
          "Team support",
          "AI strategy & architecture consulting",
          "Priority response SLA",
        ],
      },
    ],
  },
];

const TierCard = ({ tier }: { tier: PricingTier }) => (
  <div className="rounded-2xl border border-white/5 bg-[#0a0a0a] p-5 h-full flex flex-col">
    <h5 className="font-semibold text-sm text-white mb-1">{tier.name}</h5>
    <div className="text-xl font-semibold text-white tracking-tight mb-4" style={mono}>
      {tier.price}
    </div>

    {tier.blurb && (
      <div className="flex items-start gap-2.5 px-3 py-2.5 rounded-lg bg-white/5 border border-white/5 mb-4">
        <Info size={14} className="text-blue-400 shrink-0 mt-0.5" />
        <p className="text-xs text-zinc-400 leading-relaxed">{tier.blurb}</p>
      </div>
    )}

    {tier.items.length > 0 && (
      <ul className="space-y-2.5 flex-1">
        {tier.items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-400">
            <CheckCircle2 size={16} className="text-blue-400 shrink-0 mt-0.5" />
            {item}
          </li>
        ))}
      </ul>
    )}

    {tier.note && (
      <p className="text-xs text-zinc-500 mt-4 pt-4 border-t border-white/5">
        {tier.note}
      </p>
    )}
  </div>
);

const HermesDetails = () => (
  <div className="space-y-8">
    {pricingSheet.map((group) => (
      <div key={group.title}>
        <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500 mb-3" style={mono}>
          {group.title}
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
          {group.tiers.map((tier) => (
            <TierCard key={tier.name} tier={tier} />
          ))}
        </div>
      </div>
    ))}
  </div>
);

const webDevTiers: PricingTier[] = [
  {
    name: "Landing Page",
    price: "RM2000",
    items: [
      "Single premium page design",
      "Premium & Modern UI/UX design",
      "Basic SEO",
      "No e-commerce",
      "No SSO / login systems",
      "No backend logic",
    ],
  },
  {
    name: "Custom Web Development",
    price: "Custom pricing",
    blurb: "For projects that need more than a landing page.",
    items: [
      "Payment gateway integration",
      "Authentication / SSO",
      "Custom backend & database",
      "Multi-page or web app",
      "Web3, Smart Contract Integration",
      "Ongoing feature development",
    ],
    note: "Final pricing depends on project scope and integrations.",
  },
];

const WebDevDetails = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
    {webDevTiers.map((tier) => (
      <TierCard key={tier.name} tier={tier} />
    ))}
  </div>
);

const developmentServices: Service[] = [
  {
    id: "01",
    title: "Mobile App Development",
    description: "Native and cross-platform apps (Flutter, Kotlin, Java) from idea to Play Store launch.",
    price: "Custom quote",
    renderIcon: () => (
      <div className="flex items-center gap-2.5">
        <img src="/appstore-logo.png" alt="App Store" className="w-8 h-8 md:w-9 md:h-9 object-contain" />
        <img src="/playstore-logo.png" alt="Play Store" className="w-8 h-8 md:w-9 md:h-9 object-contain" />
      </div>
    ),
    cta: { label: "Get Quote", href: waLink("Hi Yusuf, I'm interested in Mobile App Development. Can you share more details?"), Icon: MessageCircle },
    caption: { label: "chat on WhatsApp", Icon: MessageCircle },
  },
  {
    id: "02",
    anchor: "web",
    title: "Web Development",
    description: "Premium landing pages to full custom web platforms — payment gateways, backend logic, and everything in between.",
    price: "Starting from RM2000",
    renderIcon: () => <MacOSBrowserPreview />,
    cta: { label: "Get Started", href: waLink("Hi Yusuf, I'm interested in Web Development (Starting from RM2000). Can you share more details?"), Icon: MessageCircle },
    caption: { label: "chat on WhatsApp", Icon: MessageCircle },
    details: <WebDevDetails />,
  },
];

const coachingServices: Service[] = [
  {
    id: "01",
    title: "Vibe Coding & AI Automation Class",
    description: "Weekly live workshops teaching AI-assisted development and automation",
    price: "RM100/month (founding member)",
    Icon: BookOpen,
    cta: { label: "Visit YS Academy", href: "https://ysacademy.my", Icon: Link2 },
    caption: { label: "weekly live workshops", Icon: Users },
  },
  {
    id: "02",
    anchor: "hermes",
    title: "Hermes 1-to-1 Class",
    description: "Private, hands-on session on setting up and running Hermes AI agents for your own business.",
    price: "From RM799",
    renderIcon: () => (
      <img src="/hermes-logo.png" alt="Hermes AI" className="w-full h-full rounded-lg border border-white/10 object-cover grayscale brightness-200 contrast-125" />
    ),
    cta: { label: "Book Class", href: waLink("Hi Yusuf, I'm interested in the Hermes 1-to-1 Class (From RM799). Can you share more details?"), Icon: MessageCircle },
    caption: { label: "chat on WhatsApp", Icon: MessageCircle },
    details: <HermesDetails />,
  },
  {
    id: "03",
    anchor: "n8n",
    title: "n8n 1-to-1 Class",
    description: "Private, hands-on session on building automated workflows with n8n for your business.",
    price: "Starting from RM799",
    renderIcon: () => (
      <img src="/n8n.svg" alt="n8n" className="w-12 h-12 md:w-14 md:h-14 rounded-md bg-white p-1.5 object-contain" />
    ),
    cta: { label: "Book Class", href: waLink("Hi Yusuf, I'm interested in the n8n 1-to-1 Class (Starting from RM799). Can you share more details?"), Icon: MessageCircle },
    caption: { label: "chat on WhatsApp", Icon: MessageCircle },
    details: <HermesDetails />,
  },
];

interface ServiceSection {
  title: string;
  services: Service[];
}

const serviceSections: ServiceSection[] = [
  { title: "Development", services: developmentServices },
  { title: "Coaching & Mentoring", services: coachingServices },
];

export default function ServicesWidget() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const yearsOfExperience = getYearsSince(CAREER_START);

  useEffect(() => {
    let focusTimer: number | undefined;

    const openServiceFromHash = () => {
      const anchor = decodeURIComponent(window.location.hash.slice(1));
      const match = serviceSections
        .flatMap((section) =>
          section.services.map((service) => ({ sectionTitle: section.title, service })),
        )
        .find(({ service }) => service.anchor === anchor && service.details);

      if (!match || !match.service.anchor) return;

      setExpandedId(match.sectionTitle + "-" + match.service.id);
      window.clearTimeout(focusTimer);
      focusTimer = window.setTimeout(() => {
        const target = document.getElementById(match.service.anchor!);
        target?.scrollIntoView({ behavior: "auto", block: "start" });
        target?.focus({ preventScroll: true });
      }, 360);
    };

    openServiceFromHash();
    window.addEventListener("hashchange", openServiceFromHash);

    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener("hashchange", openServiceFromHash);
    };
  }, []);

  return (
    <section className="relative bg-transparent text-white">
      <div className="max-w-4xl mx-auto px-6">

        {/* Profile */}
        <motion.header
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center md:items-start gap-7 md:gap-10 pb-14 mb-14 border-b border-white/5 text-center md:text-left"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden border border-white/10 shrink-0 bg-[#0f0f0f]">
            <img
              src="/yusufsuhair.jpg"
              alt="Yusuf Suhair"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="flex flex-col items-center md:items-start md:pt-1">
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
              Yusuf Suhair
            </h1>
            <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500 mt-2.5" style={mono}>
              Software Engineer · AI Agent Builder · Founder, YS Academy
            </p>
            <p className="text-zinc-400 text-sm md:text-base mt-5 max-w-[540px] leading-relaxed">
              I&apos;m a software engineer and AI agent builder with {yearsOfExperience}+ years of
              experience. I&apos;ve shipped 50+ web and mobile products, with my mobile apps
              reaching 5M+ installs. Through YS Academy, I teach people to build apps with AI,
              create AI agents and automate workflows. I also help businesses implement these
              technologies in their operations.
            </p>
          </div>
        </motion.header>

        {/* Service sections */}
        <div className="pb-20 space-y-14">
          {serviceSections.map((section) => (
            <div key={section.title}>
              <div className="flex items-center gap-4 mb-2">
                <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500" style={mono}>
                  {section.title}
                </h2>
                <div className="h-px flex-1 bg-white/5" />
              </div>

              <div>
                {section.services.map((service, index) => {
                  const key = `${section.title}-${service.id}`;
                  const isExpanded = expandedId === key;
                  return (
                    <motion.div
                      key={key}
                      id={service.anchor}
                      tabIndex={service.anchor ? -1 : undefined}
                      initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.05 }}
                      className="scroll-mt-24 py-7 border-b border-white/5 outline-none transition-colors target:bg-white/[0.03] target:ring-1 target:ring-inset target:ring-white/10"
                    >
                      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                        <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 shrink-0 text-zinc-400">
                          {service.renderIcon ? service.renderIcon() : service.Icon && <service.Icon size={38} />}
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-sm text-white">{service.title}</h3>
                          <p className="text-sm text-zinc-400 mt-1 leading-relaxed">{service.description}</p>
                        </div>

                        <div className="flex flex-row md:flex-col items-center md:items-end justify-between gap-3 shrink-0 w-full md:w-auto md:text-right">
                          <span className="text-sm font-medium text-white whitespace-nowrap" style={mono}>
                            {service.price}
                          </span>
                          <a
                            href={service.cta.href}
                            target={service.cta.href.startsWith("http") ? "_blank" : undefined}
                            rel={service.cta.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="inline-flex items-center justify-center gap-2 bg-white text-black text-sm font-medium px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors"
                          >
                            {service.cta.label}
                            <service.cta.Icon size={14} />
                          </a>
                          <div className="hidden md:flex items-center gap-1.5 text-[11px] text-zinc-600" style={mono}>
                            <service.caption.Icon size={12} />
                            {service.caption.label}
                          </div>
                        </div>
                      </div>

                      {service.details && (
                        <>
                          <button
                            onClick={() => setExpandedId(isExpanded ? null : key)}
                            className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 mt-4 md:ml-28 hover:text-white transition-colors"
                            style={mono}
                          >
                            {isExpanded ? "Hide full pricing details" : "View full pricing details"}
                            <motion.span animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
                              <ChevronDown size={14} />
                            </motion.span>
                          </button>

                          <AnimatePresence initial={false}>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="block overflow-hidden"
                              >
                                <div className="mt-5 pt-6 md:ml-28 border-t border-white/5">
                                  {service.details}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
