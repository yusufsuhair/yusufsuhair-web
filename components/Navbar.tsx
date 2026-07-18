"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
];

interface NavbarProps {
  theme?: "dark" | "light";
}

export default function Navbar({ theme = "dark" }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const contactHref = pathname === "/" ? "#contact" : "/#contact";
  const isLight = theme === "light";

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 border-b backdrop-blur-xl ${
        isLight ? "border-zinc-200 bg-white/80" : "border-white/5 bg-[#050505]/70"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <a
          href="/"
          className={`text-xl font-medium tracking-tighter ${
            isLight ? "text-zinc-950" : "text-white"
          }`}
        >
          YS.
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative transition-colors duration-200 ${
                  isActive
                    ? isLight
                      ? "text-zinc-950"
                      : "text-white"
                    : isLight
                      ? "text-zinc-500 hover:text-zinc-950"
                      : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className={`absolute -bottom-0.5 left-0 right-0 h-px rounded-full ${
                      isLight ? "bg-zinc-950" : "bg-white"
                    }`}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={contactHref}
            className={`hidden md:inline-flex px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
              isLight
                ? "bg-zinc-950 text-white hover:bg-zinc-800"
                : "bg-white text-black hover:bg-zinc-200"
            }`}
          >
            Let&apos;s talk
          </a>

          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className={`md:hidden p-2 transition-colors ${
              isLight
                ? "text-zinc-600 hover:text-zinc-950"
                : "text-zinc-400 hover:text-white"
            }`}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mobileOpen ? "close" : "open"}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.15 }}
                className="block"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className={`md:hidden overflow-hidden border-t backdrop-blur-xl ${
              isLight
                ? "border-zinc-200 bg-white/95"
                : "border-white/5 bg-[#050505]/95"
            }`}
          >
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    className={`px-3 py-3 rounded-lg text-sm transition-colors ${
                      isActive
                        ? isLight
                          ? "bg-zinc-100 text-zinc-950"
                          : "bg-white/5 text-white"
                        : isLight
                          ? "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950"
                          : "text-zinc-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              <a
                href={contactHref}
                onClick={handleLinkClick}
                className={`mt-2 px-4 py-3 text-sm font-medium rounded-lg text-center transition-colors ${
                  isLight
                    ? "bg-zinc-950 text-white hover:bg-zinc-800"
                    : "bg-white text-black hover:bg-zinc-200"
                }`}
              >
                Let&apos;s talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
