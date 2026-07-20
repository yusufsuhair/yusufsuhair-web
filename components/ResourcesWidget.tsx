"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ChevronDown, Inbox } from "lucide-react";

const mono = { fontFamily: "var(--font-jetbrains-mono), monospace" };

const toolFilters = ["All", "Claude", "ChatGPT", "Gemini", "n8n", "Multi-Tool"] as const;
const typeFilters = ["All", "Prompts", "Guides", "Workflows", "Systems", "Tools"] as const;
const sortOptions = ["Most Popular", "Newest first", "A–Z"] as const;

const FilterGroup = ({
  label,
  options,
  active,
  onSelect,
}: {
  label: string;
  options: readonly string[];
  active: string;
  onSelect: (value: string) => void;
}) => (
  <div>
    <span
      className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-400 mb-2.5"
      style={mono}
    >
      {label}
    </span>
    <div className="flex flex-wrap gap-2">
      {options.map((option) => {
        const isActive = option === active;
        return (
          <button
            key={option}
            onClick={() => onSelect(option)}
            className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
              isActive
                ? "border-zinc-950 bg-zinc-950 text-white"
                : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-400 hover:text-zinc-950"
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  </div>
);

export default function ResourcesWidget() {
  const [activeTool, setActiveTool] = useState<string>("All");
  const [activeType, setActiveType] = useState<string>("All");
  const [sort, setSort] = useState<string>(sortOptions[0]);
  const [query, setQuery] = useState("");

  return (
    <section className="relative bg-transparent text-zinc-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Hero */}
        <motion.header
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="pb-14 mb-14 border-b border-zinc-200 text-center md:text-left"
        >
          <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500" style={mono}>
            Free & searchable
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-950 mt-2.5">
            Prompts, guides &amp; systems
          </h1>
          <p className="text-zinc-600 text-sm md:text-base mt-4 max-w-[540px] leading-relaxed mx-auto md:mx-0">
            Everything I use to build and run AI agents, workflows, and automations — free to
            browse, no signup required.
          </p>
        </motion.header>

        {/* Search + Sort */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="flex flex-col md:flex-row md:items-center gap-4 mb-8"
        >
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search resources..."
              className="w-full rounded-full border border-zinc-200 bg-white py-2.5 pl-10 pr-4 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition-colors focus:border-zinc-400"
            />
          </div>

          <div className="relative shrink-0">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="w-full md:w-auto appearance-none rounded-full border border-zinc-200 bg-white py-2.5 pl-4 pr-9 text-sm text-zinc-700 outline-none transition-colors focus:border-zinc-400"
            >
              {sortOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ChevronDown size={14} className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-10 mb-12"
        >
          <FilterGroup label="Tool" options={toolFilters} active={activeTool} onSelect={setActiveTool} />
          <FilterGroup label="Type" options={typeFilters} active={activeType} onSelect={setActiveType} />
        </motion.div>

        {/* Resource list (empty state) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="rounded-2xl border border-dashed border-zinc-300 bg-white/60 py-20 px-8 text-center mb-20"
        >
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-400">
            <Inbox size={20} />
          </div>
          <h3 className="text-base font-semibold text-zinc-950 mt-5">Nothing here yet</h3>
          <p className="text-sm text-zinc-500 mt-2 max-w-sm mx-auto leading-relaxed">
            Resources are on the way — prompts, guides, and systems will start showing up here soon.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
