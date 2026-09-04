"use client";

import type { ComponentType, ReactNode } from "react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link2, MessageCircle, ChevronDown, Check, Minus, ClipboardCheck } from "lucide-react";

const mono = { fontFamily: "var(--font-jetbrains-mono), monospace" };

const WHATSAPP_NUMBER = "601123709141";
const YS_ACADEMY_URL = "https://ysacademy.my";
const MUDAHAI_URL = "https://mudahai.com";
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
  qualifier?: string;
  description: string;
  price: string;
  Icon?: Icon;
  renderIcon?: () => ReactNode;
  cta: { label: string; href: string; Icon: Icon };
  details?: ReactNode;
}

const MacOSBrowserPreview = () => (
  <motion.div
    whileHover={{ y: -2, scale: 1.03 }}
    transition={{ type: "spring", stiffness: 360, damping: 24 }}
    className="w-16 h-12 md:w-20 md:h-[60px] overflow-hidden rounded-md border border-zinc-300 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.12)]"
    aria-hidden="true"
  >
    <div className="flex h-3.5 md:h-4 items-center gap-1 border-b border-zinc-200 bg-zinc-100 px-1.5">
      <span className="h-1.5 w-1.5 rounded-full bg-[#ff5f57]" />
      <span className="h-1.5 w-1.5 rounded-full bg-[#febc2e]" />
      <span className="h-1.5 w-1.5 rounded-full bg-[#28c840]" />
      <span className="ml-0.5 h-1.5 flex-1 rounded-full border border-zinc-200 bg-white" />
    </div>

    <div className="h-[calc(100%-14px)] bg-white p-1.5 md:h-[calc(100%-16px)] md:p-2">
      <div className="mb-1 flex items-center justify-between">
        <span className="h-1.5 w-5 rounded-full bg-zinc-800" />
        <div className="flex gap-1">
          <span className="h-1 w-2.5 rounded-full bg-zinc-300" />
          <span className="h-1 w-2.5 rounded-full bg-zinc-300" />
        </div>
      </div>
      <div className="grid h-[calc(100%-6px)] grid-cols-[1.1fr_0.9fr] gap-1.5 rounded-sm border border-zinc-200 bg-zinc-50 p-1.5 shadow-[0_1px_3px_rgba(15,23,42,0.08)]">
        <div className="flex flex-col justify-center gap-1">
          <span className="h-1.5 w-full rounded-full bg-zinc-800" />
          <span className="h-1 w-4/5 rounded-full bg-zinc-300" />
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
  pricePrefix?: string;
  priceCadence?: string;
  bestFor?: string;
  items: string[];
  note?: string;
  popular?: boolean;
  ctaMessage: string;
}

interface PricingGroup {
  title: string;
  tiers: PricingTier[];
}

const hermesPricingSheet: PricingGroup[] = [
  {
    title: "AI Agent Coaching",
    tiers: [
      {
        name: "AI Agent Coaching",
        price: "RM500",
        priceCadence: "/90 min",
        bestFor: "Developers, business owners, or teams who want to learn how to build and use AI Agents.",
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
        ctaMessage: "Hi Yusuf, I'm interested in AI Agent Coaching (RM500/90 min). Can you share more details?",
      },
    ],
  },
];

const n8nPricingSheet: PricingGroup[] = [
  {
    title: "n8n Automation Coaching",
    tiers: [
      {
        name: "n8n 1-to-1 Coaching",
        price: "RM500",
        priceCadence: "/90 min",
        bestFor: "Developers, business owners, or teams who want to automate business workflows with n8n.",
        items: [
          "Workflow Design & Building",
          "Self-Hosting (VPS / Docker)",
          "Webhooks & API Integrations",
          "Telegram Bot Integration",
          "AI Nodes & LLM Chains",
          "Google Sheets & Airtable",
          "Error Handling & Retries",
          "Cron & Scheduled Workflows",
          "Credentials & Auth Setup",
          "Data Transformation (Code Nodes)",
          "Troubleshooting & Q&A",
        ],
        note: "You learn. You build. I guide.",
        ctaMessage: "Hi Yusuf, I'm interested in n8n 1-to-1 Coaching (RM500/90 min). Can you share more details?",
      },
    ],
  },
];

const webDevTiers: PricingTier[] = [
  {
    name: "Landing Page",
    price: "RM2000",
    priceCadence: "one-time",
    items: [
      "Single premium page design",
      "Premium & Modern UI/UX design",
      "Basic SEO",
      "No e-commerce",
      "No SSO / login systems",
      "No backend logic",
    ],
    ctaMessage: "Hi Yusuf, I'm interested in the Landing Page (RM2000). Can you share more details?",
  },
  {
    name: "Custom Web Development",
    price: "Custom pricing",
    bestFor: "Projects that need more than a landing page.",
    items: [
      "Payment gateway integration",
      "Authentication / SSO",
      "Custom backend & database",
      "Multi-page or web app",
      "Web3, Smart Contract Integration",
      "Ongoing feature development",
    ],
    note: "Final pricing depends on project scope and integrations.",
    ctaMessage: "Hi Yusuf, I'm interested in Custom Web Development. Can you share more details?",
  },
];

const TierPrice = ({ tier, large = false }: { tier: PricingTier; large?: boolean }) => (
  <div>
    {tier.pricePrefix && (
      <span className="block text-[11px] text-zinc-500 mb-1.5" style={mono}>
        {tier.pricePrefix}
      </span>
    )}
    <span
      className={`${large ? "text-3xl md:text-4xl" : "text-[28px]"} leading-none font-semibold tracking-tight text-zinc-950`}
      style={mono}
    >
      {tier.price}
    </span>
    {tier.priceCadence && (
      <span className="ml-1.5 text-xs text-zinc-500" style={mono}>
        {tier.priceCadence}
      </span>
    )}
  </div>
);

const TierCta = ({ tier }: { tier: PricingTier }) => (
  <a
    href={waLink(tier.ctaMessage)}
    target="_blank"
    rel="noopener noreferrer"
    className={`mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
      tier.popular
        ? "bg-blue-600 text-white hover:bg-blue-700"
        : "border border-zinc-300 text-zinc-700 hover:border-zinc-950 hover:text-zinc-950"
    }`}
  >
    Chat on WhatsApp
    <MessageCircle size={14} />
  </a>
);

const TierFeature = ({ item }: { item: string }) => {
  if (item.startsWith("Everything in")) {
    return <li className="text-xs font-semibold text-zinc-900 pb-0.5">{item}</li>;
  }
  const isExclusion = item.startsWith("No ");
  return (
    <li className="flex items-start gap-2 text-sm text-zinc-600">
      {isExclusion ? (
        <Minus size={14} className="text-zinc-400 shrink-0 mt-[3px]" />
      ) : (
        <Check size={14} className="text-blue-600 shrink-0 mt-[3px]" />
      )}
      {item}
    </li>
  );
};

const TierCard = ({ tier }: { tier: PricingTier }) => (
  <div
    className={`rounded-xl border bg-white p-6 h-full flex flex-col ${
      tier.popular
        ? "border-blue-600/70 ring-1 ring-blue-600/20 shadow-[0_12px_32px_rgba(37,99,235,0.10)]"
        : "border-zinc-200 shadow-sm"
    }`}
  >
    {tier.popular && (
      <span
        className="inline-flex self-start items-center rounded-full bg-blue-600 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white mb-3"
        style={mono}
      >
        Most Popular
      </span>
    )}
    <h5 className="font-semibold text-sm text-zinc-950">{tier.name}</h5>
    {tier.bestFor && (
      <p className="text-xs text-zinc-500 mt-1.5 leading-relaxed">
        <span className="font-medium text-zinc-700">Best for:</span> {tier.bestFor}
      </p>
    )}

    <div className="mt-4 mb-5 pb-5 border-b border-zinc-100">
      <TierPrice tier={tier} />
    </div>

    <ul className="space-y-2 flex-1">
      {tier.items.map((item) => (
        <TierFeature key={item} item={item} />
      ))}
    </ul>

    {tier.note && (
      <p className="text-xs text-zinc-500 mt-4 pt-4 border-t border-zinc-100">{tier.note}</p>
    )}

    <TierCta tier={tier} />
  </div>
);

const WideTierCard = ({ tier }: { tier: PricingTier }) => (
  <div className="rounded-xl border border-zinc-200 bg-white shadow-sm p-6 md:p-7 flex flex-col md:flex-row gap-6 md:gap-10">
    <div className="shrink-0 md:w-72 flex flex-col">
      <h5 className="font-semibold text-sm text-zinc-950">{tier.name}</h5>
      {tier.bestFor && (
        <p className="text-xs text-zinc-500 mt-1.5 leading-relaxed">
          <span className="font-medium text-zinc-700">Best for:</span> {tier.bestFor}
        </p>
      )}
      <div className="mt-4">
        <TierPrice tier={tier} large />
      </div>
      {tier.note && <p className="text-xs text-zinc-500 mt-3">{tier.note}</p>}
      <div className="mt-auto">
        <TierCta tier={tier} />
      </div>
    </div>

    <div className="flex-1 md:border-l md:border-zinc-100 md:pl-10">
      <p
        className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500 mb-3"
        style={mono}
      >
        Topics covered
      </p>
      <div className="flex flex-wrap gap-2">
        {tier.items.map((item) => (
          <span
            key={item}
            className="text-xs text-zinc-600 border border-zinc-200 bg-zinc-50 rounded-full px-2.5 py-1"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const PricingDetails = ({ groups }: { groups: PricingGroup[] }) => (
  <div className="space-y-8">
    {groups.map((group) => (
      <div key={group.title}>
        <h4
          className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500 mb-4"
          style={mono}
        >
          {group.title}
        </h4>
        {group.tiers.length === 1 ? (
          <WideTierCard tier={group.tiers[0]} />
        ) : (
          <div
            className={`grid grid-cols-1 gap-4 items-stretch ${
              group.tiers.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"
            }`}
          >
            {group.tiers.map((tier) => (
              <TierCard key={tier.name} tier={tier} />
            ))}
          </div>
        )}
      </div>
    ))}
  </div>
);

const developmentServices: Service[] = [
  {
    id: "01",
    title: "Mobile App Development",
    description: "Native and cross-platform apps (Flutter, Kotlin, Java) from idea to Play Store launch.",
    price: "Starting from RM3,000",
    renderIcon: () => (
      <div className="flex items-center gap-2.5">
        <img src="/appstore-logo.png" alt="App Store" className="w-8 h-8 md:w-9 md:h-9 object-contain" />
        <img src="/playstore-logo.png" alt="Play Store" className="w-8 h-8 md:w-9 md:h-9 object-contain" />
      </div>
    ),
    cta: { label: "Get Quote", href: waLink("Hi Yusuf, I'm interested in Mobile App Development (Starting from RM3,000). Can you share more details?"), Icon: MessageCircle },
  },
  {
    id: "02",
    anchor: "web",
    title: "Web Development",
    description: "Premium landing pages to full custom web platforms — payment gateways, backend logic, and everything in between.",
    price: "Starting from RM2000",
    renderIcon: () => <MacOSBrowserPreview />,
    cta: { label: "Get Started", href: waLink("Hi Yusuf, I'm interested in Web Development (Starting from RM2000). Can you share more details?"), Icon: MessageCircle },
    details: <PricingDetails groups={[{ title: "Web Development Pricing", tiers: webDevTiers }]} />,
  },
];

const coachingServices: Service[] = [
  {
    id: "01",
    title: "1-to-1 Audit, Coaching & Mentoring",
    qualifier: "You know AI should be in your business but not where to start",
    description: "Private session to audit how you work today, find where AI actually pays off, and leave with a build order you can act on. Tool-agnostic.",
    price: "RM500/90 min",
    Icon: ClipboardCheck,
    cta: { label: "Book Session", href: waLink("Hi Yusuf, I'm interested in the 1-to-1 Audit, Coaching & Mentoring session (RM500/90 min). Can you share more details?"), Icon: MessageCircle },
  },
  {
    id: "02",
    anchor: "hermes",
    title: "Hermes 1-to-1 Class",
    qualifier: "You already run a business and want AI agents working in it",
    description: "Private, hands-on session on setting up and running Hermes AI agents for your own business.",
    price: "RM500/90 min",
    renderIcon: () => (
      <img src="/hermes-logo.png" alt="Hermes AI" className="w-full h-full border-0 bg-transparent object-contain" />
    ),
    cta: { label: "Book Class", href: waLink("Hi Yusuf, I'm interested in the Hermes 1-to-1 Class (RM500/90 min). Can you share more details?"), Icon: MessageCircle },
    details: <PricingDetails groups={hermesPricingSheet} />,
  },
  {
    id: "03",
    anchor: "n8n",
    title: "n8n 1-to-1 Class",
    qualifier: "You want to learn workflow automation hands-on",
    description: "Private, hands-on session on building automated workflows with n8n for your business.",
    price: "RM500/90 min",
    renderIcon: () => (
      <img src="/n8n.svg" alt="n8n" className="w-12 h-12 md:w-14 md:h-14 object-contain" />
    ),
    cta: { label: "Book Class", href: waLink("Hi Yusuf, I'm interested in the n8n 1-to-1 Class (RM500/90 min). Can you share more details?"), Icon: MessageCircle },
    details: <PricingDetails groups={n8nPricingSheet} />,
  },
];

interface ProductLink {
  id: string;
  name: string;
  tagline: string;
  description: string;
  href: string;
  logo: string;
}

const otherProducts: ProductLink[] = [
  {
    id: "academy",
    name: "YS Academy",
    tagline: "Learn to build it yourself",
    description: "Weekly live workshops on AI-assisted development and automation. Low-ticket membership, DIY.",
    href: YS_ACADEMY_URL,
    logo: "/ys-academy-logo.png",
  },
  {
    id: "mudahai",
    name: "MudahAI",
    tagline: "Get it built for you",
    description: "Done-for-you AI agents for SMEs — bookings, reminders and follow-ups handled on WhatsApp.",
    href: MUDAHAI_URL,
    logo: "/mudahai-logo.png",
  },
];

interface ServiceSection {
  id: string;
  title: string;
  services: Service[];
}

const serviceSections: ServiceSection[] = [
  { id: "coaching", title: "Coaching & Mentoring", services: coachingServices },
  { id: "development", title: "Development", services: developmentServices },
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
    <section className="relative bg-transparent text-zinc-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Profile */}
        <motion.header
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center justify-center gap-7 md:gap-10 pb-14 mb-14 border-b border-zinc-200 text-center md:text-left"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden border border-zinc-200 shrink-0 bg-white">
            <img
              src="/hero1.jpg"
              alt="Yusuf Suhair"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-950">
              Yusuf Suhair
            </h1>
            <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500 mt-2.5" style={mono}>
              Software Engineer · AI Agent Builder · Founder, YS Academy
            </p>
            <p className="text-zinc-600 text-sm md:text-base mt-5 max-w-[540px] leading-relaxed">
              I&apos;m a software engineer and AI agent builder with {yearsOfExperience}+ years of
              experience. I&apos;ve shipped 60+ web and mobile products, with my mobile apps
              reaching 5M+ installs. Through YS Academy, I teach people to build apps with AI,
              create AI agents and automate workflows. I also help businesses implement these
              technologies in their operations.
            </p>
          </div>
        </motion.header>

        {/* Section jump-nav */}
        <motion.nav
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="flex flex-wrap items-center gap-x-8 gap-y-3 -mt-6 mb-12"
        >
          <span className="text-[11px] uppercase tracking-[0.18em] text-zinc-400" style={mono}>
            Jump to
          </span>
          {serviceSections.map((section, index) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="group inline-flex items-baseline gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500 hover:text-zinc-950 transition-colors"
              style={mono}
            >
              <span className="text-zinc-400 group-hover:text-blue-600 transition-colors">
                0{index + 1}
              </span>
              {section.title}
            </a>
          ))}
        </motion.nav>

        {/* Service sections */}
        <div className="pb-20 space-y-14">
          {serviceSections.map((section) => (
            <div key={section.title} id={section.id} className="scroll-mt-24">
              <div className="flex items-center gap-4 mb-2">
                <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500" style={mono}>
                  {section.title}
                </h2>
                <div className="h-px flex-1 bg-zinc-200" />
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
                      className="scroll-mt-24 py-7 border-b border-zinc-200 outline-none transition-colors target:bg-blue-50 target:ring-1 target:ring-inset target:ring-blue-200"
                    >
                      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                        <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 shrink-0 text-zinc-500">
                          {service.renderIcon ? service.renderIcon() : service.Icon && <service.Icon size={38} />}
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-sm text-zinc-950">{service.title}</h3>
                          {service.qualifier && (
                            <p className="text-xs font-medium text-blue-600 mt-1">{service.qualifier}</p>
                          )}
                          <p className="text-sm text-zinc-600 mt-1 leading-relaxed">{service.description}</p>
                        </div>

                        <div className="flex flex-wrap md:flex-col items-center md:items-end justify-between gap-3 shrink-0 w-full md:w-auto md:text-right">
                          <span className="text-base md:text-lg font-semibold text-zinc-950 whitespace-nowrap" style={mono}>
                            {service.price}
                          </span>
                          <a
                            href={service.cta.href}
                            target={service.cta.href.startsWith("http") ? "_blank" : undefined}
                            rel={service.cta.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="inline-flex items-center justify-center gap-2 bg-zinc-950 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-zinc-800 transition-colors"
                          >
                            {service.cta.label}
                            <service.cta.Icon size={14} />
                          </a>
                        </div>
                      </div>

                      {service.details && (
                        <>
                          <button
                            onClick={() => setExpandedId(isExpanded ? null : key)}
                            className="mt-5 md:ml-28 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3.5 py-1.5 text-xs font-medium text-zinc-500 hover:border-zinc-400 hover:text-zinc-950 transition-colors"
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
                                <div className="mt-5 pt-6 md:ml-28 border-t border-zinc-200">
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

          {/* Other businesses — brief pointers, no pricing here */}
          <motion.div
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 mb-5">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500" style={mono}>
                Also Building
              </h2>
              <div className="h-px flex-1 bg-zinc-200" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {otherProducts.map((product) => (
                <a
                  key={product.id}
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 rounded-xl border border-zinc-200 bg-white p-5 hover:border-zinc-400 transition-colors"
                >
                  {/* Tile needs a definite size — with an auto-sized box the logo
                      falls back to its intrinsic dimensions. h-16 ≈ the title+description block. */}
                  <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-zinc-100 shrink-0 overflow-hidden">
                    <img src={product.logo} alt="" className="w-11 h-11 object-contain" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-sm text-zinc-950">{product.name}</h3>
                      <span className="text-xs text-zinc-500">— {product.tagline}</span>
                    </div>
                    <p className="text-xs text-zinc-500 mt-1 leading-relaxed">{product.description}</p>
                  </div>
                  <Link2 size={14} className="ml-auto shrink-0 mt-1 text-zinc-400 group-hover:text-zinc-950 transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Closing fallback card */}
          <motion.div
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="rounded-2xl border border-zinc-200 bg-white p-8 md:p-10 text-center shadow-sm"
          >
            <h3 className="text-lg md:text-xl font-semibold tracking-tight text-zinc-950">
              Not sure which one fits?
            </h3>
            <p className="text-sm text-zinc-600 mt-2 max-w-md mx-auto leading-relaxed">
              Tell me about your project or goals — I&apos;ll point you to the right setup, class, or plan.
            </p>
            <a
              href={waLink("Hi Yusuf, I'm not sure which service fits my needs. Can you help me decide?")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 bg-zinc-950 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-zinc-800 transition-colors"
            >
              Chat with me
              <MessageCircle size={14} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
