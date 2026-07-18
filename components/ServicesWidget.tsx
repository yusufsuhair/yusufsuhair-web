"use client";

import type { ComponentType, ReactNode } from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ArrowUpRight, Link2, MessageCircle, Users, ChevronDown, CheckCircle2, Info } from "lucide-react";

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

type Icon = ComponentType<{ size?: number }>;

interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  iconWrapClass?: string;
  Icon?: Icon;
  iconClass: string;
  renderIcon?: () => ReactNode;
  cta: { label: string; href: string; Icon: Icon };
  caption: { label: string; Icon: Icon };
  details?: ReactNode;
}

const BrowserMockup = () => (
  <div className="w-full h-full rounded-lg overflow-hidden bg-white flex flex-col">
    <div className="h-2.5 bg-[#1c1a16]/5 flex items-center gap-0.5 px-1.5 shrink-0">
      <span className="w-1 h-1 rounded-full bg-red-400" />
      <span className="w-1 h-1 rounded-full bg-amber-400" />
      <span className="w-1 h-1 rounded-full bg-green-400" />
    </div>
    <div className="flex-1 bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 p-1.5 flex flex-col gap-1 justify-center">
      <div className="h-1 w-7 bg-white/80 rounded-full" />
      <div className="h-1 w-5 bg-white/60 rounded-full" />
    </div>
  </div>
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
  <div className="relative group h-full">
    <div className="absolute -inset-0.5 bg-gradient-to-b from-blue-400/30 to-purple-400/30 rounded-2xl blur opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
    <div className="relative rounded-2xl border border-[#1c1a16]/10 bg-white p-5 h-full flex flex-col shadow-sm">
      <h5 className="font-semibold text-base text-[#1c1a16] mb-1">{tier.name}</h5>
      <div className="text-2xl font-bold text-[#1c1a16] tracking-tight mb-4" style={mono}>
        {tier.price}
      </div>

      {tier.blurb && (
        <div className="flex items-start gap-2.5 px-3 py-2.5 rounded-xl bg-[#1c1a16]/[0.03] border border-[#1c1a16]/8 mb-4">
          <Info size={14} className="text-blue-500 shrink-0 mt-0.5" />
          <p className="text-xs font-medium text-[#4a463d] leading-relaxed">{tier.blurb}</p>
        </div>
      )}

      {tier.items.length > 0 && (
        <ul className="space-y-2.5 flex-1">
          {tier.items.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-[#4a463d]">
              <CheckCircle2 size={16} className="text-blue-500 shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
      )}

      {tier.note && (
        <p className="text-xs text-[#8a8371] italic mt-4 pt-4 border-t border-[#1c1a16]/10">
          {tier.note}
        </p>
      )}
    </div>
  </div>
);

const HermesDetails = () => (
  <div className="space-y-8">
    {pricingSheet.map((group) => (
      <div key={group.title}>
        <h4 className="text-xs font-semibold uppercase tracking-widest text-[#8a8371] mb-3" style={mono}>
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

const ComingSoonDetails = () => (
  <p className="text-sm text-[#8a8371]">Full details coming soon.</p>
);

const developmentServices: Service[] = [
  {
    id: "01",
    title: "Mobile App Development",
    description: "Native and cross-platform apps (Flutter, Kotlin, Java) from idea to Play Store launch.",
    price: "Custom quote",
    iconClass: "bg-slate-500/10",
    iconWrapClass: "w-20 h-16 rounded-xl",
    renderIcon: () => (
      <div className="flex items-center gap-2">
        <img src="/appstore-logo.png" alt="App Store" className="w-6 h-6 object-contain" />
        <img src="/playstore-logo.png" alt="Play Store" className="w-6 h-6 object-contain" />
      </div>
    ),
    cta: { label: "Get Quote", href: waLink("Hi Yusuf, I'm interested in Mobile App Development. Can you share more details?"), Icon: MessageCircle },
    caption: { label: "chat on WhatsApp", Icon: MessageCircle },
    details: <ComingSoonDetails />,
  },
  {
    id: "02",
    title: "Web Development",
    description: "Premium landing pages to full custom web platforms — payment gateways, backend logic, and everything in between.",
    price: "Starting from RM2000",
    iconClass: "border border-[#1c1a16]/10",
    iconWrapClass: "w-20 h-16 rounded-xl p-0.5",
    renderIcon: () => <BrowserMockup />,
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
    iconClass: "bg-amber-500/10 text-amber-600",
    cta: { label: "Visit YS Academy", href: "https://ysacademy.my", Icon: Link2 },
    caption: { label: "weekly live workshops", Icon: Users },
  },
  {
    id: "02",
    title: "Hermes 1-to-1 Class",
    description: "Private, hands-on session on setting up and running Hermes AI agents for your own business.",
    price: "From RM799",
    iconClass: "bg-white",
    iconWrapClass: "w-16 h-16 rounded-full overflow-hidden",
    renderIcon: () => (
      <img src="/hermes-logo.png" alt="Hermes AI" className="w-full h-full object-cover" />
    ),
    cta: { label: "Book Class", href: waLink("Hi Yusuf, I'm interested in the Hermes 1-to-1 Class (From RM799). Can you share more details?"), Icon: MessageCircle },
    caption: { label: "chat on WhatsApp", Icon: MessageCircle },
    details: <HermesDetails />,
  },
  {
    id: "03",
    title: "n8n 1-to-1 Class",
    description: "Private, hands-on session on building automated workflows with n8n for your business.",
    price: "Starting from RM799",
    iconClass: "bg-[#ea4b71]/10",
    renderIcon: () => (
      <img src="/n8n.svg" alt="n8n" className="w-9 h-9 object-contain" />
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

  return (
    <section className="relative bg-[#f3eee2] text-[#1c1a16]">
      <div className="max-w-5xl mx-auto px-6">

        {/* Profile */}
        <motion.header
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mb-16 text-center md:text-left"
        >
          <div className="w-32 h-32 md:w-36 md:h-36 rounded-2xl overflow-hidden border border-[#1c1a16]/10 shadow-sm shrink-0 bg-[#e5ddc8]">
            <img
              src="/yusufsuhair.jpg"
              alt="Yusuf Suhair"
              className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700 ease-out"
            />
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1c1a16]">
              Yusuf Suhair
            </h1>
            <p className="text-xs text-[#8a8371] mt-2" style={mono}>
              Software Engineer · AI Agent Builder · Founder, YS Academy
            </p>
            <p className="text-[#4a463d] text-sm md:text-base mt-4 max-w-[500px] leading-relaxed">
              I&apos;m a software engineer and AI agent builder with {yearsOfExperience}+ years of
              experience. I&apos;ve shipped 50+ web and mobile products, with my mobile apps
              reaching 5M+ installs. Through YS Academy, I teach people to build apps with AI,
              create AI agents and automate workflows. I also help businesses implement these
              technologies in their operations.
            </p>
            <p className="text-xs tracking-[0.15em] uppercase text-[#8a8371] mt-6" style={mono}>
              build · automate · teach
            </p>
          </div>
        </motion.header>

        {/* Service sections */}
        <div className="pb-16">
        {serviceSections.map((section, sectionIndex) => (
          <div key={section.title} className={sectionIndex > 0 ? "mt-12" : ""}>
            <h2 className="text-xl font-semibold tracking-tight text-[#1c1a16] mb-5">
              {section.title}
            </h2>
            <div className="space-y-4 md:space-y-5">
              {section.services.map((service, index) => {
                const key = `${section.title}-${service.id}`;
                const isExpanded = expandedId === key;
                return (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.06 }}
                    className="relative group bg-[#faf7ee] rounded-xl border border-[#1c1a16]/10 hover:border-[#1c1a16]/25 transition-colors duration-300 p-5 md:p-6 mt-4 md:mt-0"
                  >
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#1c1a16] text-[#faf7ee] text-xs flex items-center justify-center rounded-lg shadow-sm z-10 transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1 duration-300" style={mono}>
                      {service.id}
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                      <div className={`flex items-center justify-center shrink-0 ${service.iconWrapClass ?? "w-16 h-16 rounded-full"} ${service.iconClass}`}>
                        {service.renderIcon ? service.renderIcon() : service.Icon && <service.Icon size={28} />}
                      </div>

                      <div className="flex-1">
                        <h3 className="font-semibold text-base text-[#1c1a16]">{service.title}</h3>
                        <p className="text-sm text-[#8a8371] mt-1">{service.description}</p>
                        <div className="mt-2.5">
                          <span className="text-xs text-[#4a463d] bg-[#1c1a16]/5 px-2 py-1 rounded" style={mono}>
                            {service.price}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col items-start md:items-end mt-2 md:mt-0 shrink-0 w-full md:w-auto">
                        <a
                          href={service.cta.href}
                          target={service.cta.href.startsWith("http") ? "_blank" : undefined}
                          rel={service.cta.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="inline-flex items-center justify-center gap-2 bg-[#1c1a16] text-[#faf7ee] text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-black transition-colors w-full md:w-auto"
                        >
                          {service.cta.label}
                          <service.cta.Icon size={15} />
                        </a>
                        <div className="flex items-center gap-1.5 text-xs text-[#8a8371] mt-2.5 md:mt-2" style={mono}>
                          <service.caption.Icon size={12} />
                          {service.caption.label}
                        </div>
                      </div>
                    </div>

                    {service.details && (
                      <>
                        <button
                          onClick={() => setExpandedId(isExpanded ? null : key)}
                          className="hidden md:inline-flex items-center gap-1 text-xs text-[#1c1a16] mt-4 hover:text-[#5c574a] transition-colors"
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
                              className="hidden md:block overflow-hidden"
                            >
                              <div className="mt-4 pt-4 border-t border-[#1c1a16]/10">
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
