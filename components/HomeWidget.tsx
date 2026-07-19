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

const photoFrames = [
  {
    rotation: "-rotate-6",
    desktopPosition: "left-2 top-[7%]",
    imagePosition: "center 18%",
    imageScale: "scale-[1.08]",
  },
  {
    rotation: "rotate-5",
    desktopPosition: "left-14 bottom-[3%]",
    imagePosition: "42% 32%",
    imageScale: "scale-[1.16]",
  },
  {
    rotation: "rotate-6",
    desktopPosition: "right-2 top-[9%]",
    imagePosition: "58% 20%",
    imageScale: "scale-[1.1]",
  },
  {
    rotation: "-rotate-5",
    desktopPosition: "right-14 bottom-[2%]",
    imagePosition: "center 36%",
    imageScale: "scale-[1.18]",
  },
];

interface PhotoPrintProps {
  compact?: boolean;
  desktopPosition: string;
  imagePosition: string;
  imageScale: string;
  rotation: string;
}

function PhotoPrint({
  compact = false,
  desktopPosition,
  imagePosition,
  imageScale,
  rotation,
}: PhotoPrintProps) {
  return (
    <div
      aria-hidden="true"
      className={`${
        compact
          ? "relative w-full p-1 pb-3"
          : `absolute hidden w-32 p-2 pb-7 xl:block 2xl:w-36 ${desktopPosition}`
      } ${rotation} rounded-sm bg-white shadow-[0_18px_45px_rgba(0,0,0,0.35)] ring-1 ring-black/10`}
    >
      <div className="aspect-[4/5] overflow-hidden bg-zinc-100">
        <img
          src="/yusufsuhair.jpg"
          alt=""
          className={`h-full w-full object-cover ${imageScale}`}
          style={{ objectPosition: imagePosition }}
        />
      </div>
    </div>
  );
}

export default function HomeWidget() {
  const yearsOfExperience = new Date().getFullYear() - CAREER_START_YEAR;

  return (
    <section className="relative min-h-[78vh] overflow-hidden pt-28 pb-20 flex items-center">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        {photoFrames.map((frame) => (
          <PhotoPrint key={frame.desktopPosition} {...frame} />
        ))}

        <div className="relative z-10 max-w-4xl mx-auto text-center">
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

          <div className="mx-auto mt-8 grid max-w-md grid-cols-4 items-center gap-2 px-1 xl:hidden">
            {photoFrames.map((frame) => (
              <PhotoPrint key={frame.desktopPosition} compact {...frame} />
            ))}
          </div>

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
