"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
];

interface NavbarProps {
  theme?: "dark" | "light";
}

// Two links and one action fit a 320px phone, so they stay visible at every width instead of hiding behind a menu.
export default function Navbar({ theme = "dark" }: NavbarProps) {
  const pathname = usePathname();
  const contactHref = pathname === "/" ? "#contact" : "/#contact";
  const isLight = theme === "light";

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 border-b backdrop-blur-xl ${
        isLight ? "border-zinc-200 bg-white/80" : "border-white/5 bg-[#050505]/70"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2">
        <a
          href="/"
          className={`inline-flex min-h-11 min-w-11 items-center text-xl font-medium tracking-tighter ${
            isLight ? "text-zinc-950" : "text-white"
          }`}
        >
          YS.
        </a>

        <div className="flex items-center gap-1 sm:gap-4 text-sm">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative inline-flex min-h-11 items-center px-2 transition-colors duration-200 ${
                  isActive
                    ? isLight
                      ? "text-zinc-950"
                      : "text-white"
                    : isLight
                      ? "text-zinc-600 hover:text-zinc-950"
                      : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className={`absolute bottom-2.5 left-2 right-2 h-px rounded-full ${
                      isLight ? "bg-zinc-950" : "bg-white"
                    }`}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            );
          })}

          <a
            href={contactHref}
            className={`ml-1 sm:ml-2 inline-flex min-h-11 items-center px-4 font-medium rounded-full transition-colors duration-200 ${
              isLight
                ? "bg-zinc-950 text-white hover:bg-zinc-800"
                : "bg-white text-black hover:bg-zinc-200"
            }`}
          >
            Let&apos;s talk
          </a>
        </div>
      </div>
    </nav>
  );
}
