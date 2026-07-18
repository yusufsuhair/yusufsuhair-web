"use client";

import { Github, Instagram, Linkedin, Mail, Youtube } from "lucide-react";
import { FaThreads } from "react-icons/fa6";
import { TypingAnimation } from "@/components/ui/typing-animation";

const CAREER_START_YEAR = 2019;
const mono = { fontFamily: "var(--font-jetbrains-mono), monospace" };

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/yusufsuhair",
    icon: <Linkedin size={20} aria-hidden="true" />,
  },
  {
    label: "GitHub",
    href: "https://github.com/yusufsuhair",
    icon: <Github size={20} aria-hidden="true" />,
  },
  {
    label: "Threads",
    href: "https://www.threads.net/@yusufsuhair",
    icon: <FaThreads size={20} aria-hidden="true" />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/yusufsuhair",
    icon: <Instagram size={20} aria-hidden="true" />,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/c/YusufSuhair",
    icon: <Youtube size={21} aria-hidden="true" />,
  },
  {
    label: "Gmail",
    href: "mailto:yusufmohdsuhair@gmail.com",
    icon: <Mail size={20} aria-hidden="true" />,
  },
];

export default function HomeWidget() {
  const yearsOfExperience = new Date().getFullYear() - CAREER_START_YEAR;

  return (
    <section className="min-h-[78vh] flex items-center pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <TypingAnimation
            as="h1"
            typeSpeed={75}
            delay={250}
            aria-label="Hello, I'm Yusuf."
            className="min-h-[3.75rem] sm:min-h-[4.5rem] md:min-h-[5.5rem] text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight text-white leading-tight"
          >
            Hello, I&apos;m Yusuf.
          </TypingAnimation>
          <p
            className="mt-4 text-[11px] uppercase tracking-[0.18em] text-zinc-500"
            style={mono}
          >
            Software Engineer · AI Agent Builder · Founder, YS Academy
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            {socialLinks.map(({ label, href, icon }) => {
              const opensNewTab = href.startsWith("http");

              return (
                <a
                  key={label}
                  href={href}
                  target={opensNewTab ? "_blank" : undefined}
                  rel={opensNewTab ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="group relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition-colors duration-200 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  {icon}
                  <span
                    role="tooltip"
                    className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded bg-white px-2 py-1 text-xs font-medium text-black opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
                  >
                    {label}
                  </span>
                </a>
              );
            })}
          </div>

          <p className="mt-10 mx-auto max-w-[540px] text-sm md:text-base text-zinc-400 leading-relaxed">
            I&apos;m a software engineer and AI agent builder with {yearsOfExperience}+ years of
            experience. I&apos;ve shipped 50+ web and mobile products, with my mobile apps
            reaching 5M+ installs. Through YS Academy, I teach people to build apps with AI,
            create AI agents and automate workflows. I also help businesses implement these
            technologies in their operations.
          </p>
        </div>
      </div>
    </section>
  );
}
