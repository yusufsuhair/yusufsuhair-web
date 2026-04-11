"use client";

import { useEffect, useState } from "react";
import { Star, GitFork, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
}

interface Contribution {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface ContributionData {
  contributions: Contribution[];
  total: Record<string, number>;
}

const languageColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  Python: "#3572A5",
  Java: "#b07219",
  Kotlin: "#A97BFF",
  Dart: "#00B4AB",
  Solidity: "#AA6746",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Shell: "#89e051",
};

const levelColors = [
  "bg-white/5",        // 0 — empty
  "bg-emerald-900/70", // 1 — light
  "bg-emerald-700/80", // 2 — medium
  "bg-emerald-500/90", // 3 — high
  "bg-emerald-400",    // 4 — max
];

const GITHUB_USERNAME = "yusufsuhair";
const WEEKS = 26; // last 6 months

function ContributionGraph({ contributions }: { contributions: Contribution[] }) {
  // Take the last WEEKS * 7 days and chunk into columns of 7
  const days = contributions.slice(-(WEEKS * 7));
  const weeks: Contribution[][] = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  // Build month labels aligned to week columns
  const monthLabels: { label: string; col: number }[] = [];
  weeks.forEach((week, col) => {
    if (week[0]) {
      const d = new Date(week[0].date);
      if (d.getDate() <= 7) {
        monthLabels.push({ label: months[d.getMonth()], col });
      }
    }
  });

  return (
    <div className="overflow-x-auto">
      <div className="min-w-max">
        {/* Month labels */}
        <div className="flex gap-[3px] mb-1 pl-0">
          {weeks.map((_, col) => {
            const label = monthLabels.find((m) => m.col === col);
            return (
              <div key={col} className="w-[10px] text-[9px] text-zinc-600 font-mono">
                {label?.label ?? ""}
              </div>
            );
          })}
        </div>

        {/* Grid */}
        <div className="flex gap-[3px]">
          {weeks.map((week, col) => (
            <div key={col} className="flex flex-col gap-[3px]">
              {week.map((day) => (
                <div
                  key={day.date}
                  title={`${day.date}: ${day.count} contribution${day.count !== 1 ? "s" : ""}`}
                  className={`w-[10px] h-[10px] rounded-sm transition-opacity hover:opacity-80 ${levelColors[day.level]}`}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center gap-1.5 mt-3 justify-end">
          <span className="text-[10px] text-zinc-600">Less</span>
          {levelColors.map((cls, i) => (
            <div key={i} className={`w-[10px] h-[10px] rounded-sm ${cls}`} />
          ))}
          <span className="text-[10px] text-zinc-600">More</span>
        </div>
      </div>
    </div>
  );
}

export default function GithubWidget() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [totalThisYear, setTotalThisYear] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const year = new Date().getFullYear();

    Promise.all([
      fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6&type=public`
      ).then((r) => r.json()),
      fetch(
        `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=${year}`
      ).then((r) => r.json()),
    ])
      .then(([repoData, contribData]: [Repo[], ContributionData]) => {
        if (Array.isArray(repoData)) setRepos(repoData.slice(0, 6));
        if (contribData?.contributions) {
          setContributions(contribData.contributions);
          setTotalThisYear(contribData.total?.[String(year)] ?? null);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section id="github" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
              Open Source
            </h2>
            <p className="text-zinc-400 text-base max-w-2xl">
              Active on GitHub — building in public and contributing to open source.
            </p>
          </div>
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm text-zinc-400 border border-white/10 rounded-full hover:bg-white/5 hover:text-white transition-all"
          >
            <Github size={14} />
            View Profile
          </a>
        </div>

        {/* Contribution graph */}
        <div className="mb-8 rounded-2xl bg-[#0a0a0a] border border-white/5 p-6 overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <p className="text-xs text-zinc-600 font-mono uppercase tracking-widest">
              Contribution Activity
            </p>
            {totalThisYear !== null && (
              <p className="text-xs text-zinc-500 font-mono">
                <span className="text-white font-medium">{totalThisYear}</span> contributions this year
              </p>
            )}
          </div>

          {loading ? (
            <div className="h-24 bg-white/5 rounded-lg animate-pulse" />
          ) : contributions.length > 0 ? (
            <ContributionGraph contributions={contributions} />
          ) : (
            <p className="text-xs text-zinc-600 py-6 text-center">Could not load contribution data.</p>
          )}
        </div>

        {/* Repos grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-32 rounded-2xl bg-white/5 animate-pulse" />
            ))}
          </div>
        ) : repos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {repos.map((repo, i) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.35, ease: "easeOut" }}
                className="group p-5 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-white/15 transition-all duration-300 hover:-translate-y-1 flex flex-col gap-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <Github size={13} className="text-zinc-600 flex-shrink-0" />
                    <h3 className="text-sm font-medium text-white truncate">{repo.name}</h3>
                  </div>
                  <ExternalLink
                    size={12}
                    className="text-zinc-600 group-hover:text-zinc-400 transition-colors flex-shrink-0 mt-0.5"
                  />
                </div>

                <p className="text-xs text-zinc-500 leading-relaxed line-clamp-2 flex-1">
                  {repo.description ?? "No description"}
                </p>

                <div className="flex items-center gap-4 mt-auto pt-3 border-t border-white/5">
                  {repo.language && (
                    <div className="flex items-center gap-1.5">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ background: languageColors[repo.language] ?? "#888" }}
                      />
                      <span className="text-xs text-zinc-500">{repo.language}</span>
                    </div>
                  )}
                  {repo.stargazers_count > 0 && (
                    <div className="flex items-center gap-1 text-xs text-zinc-500">
                      <Star size={11} />
                      {repo.stargazers_count}
                    </div>
                  )}
                  {repo.forks_count > 0 && (
                    <div className="flex items-center gap-1 text-xs text-zinc-500">
                      <GitFork size={11} />
                      {repo.forks_count}
                    </div>
                  )}
                </div>
              </motion.a>
            ))}
          </div>
        ) : null}

        {/* Mobile profile link */}
        <div className="mt-8 flex md:hidden justify-center">
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm text-zinc-400 border border-white/10 rounded-full hover:bg-white/5 hover:text-white transition-all"
          >
            <Github size={14} />
            View GitHub Profile
          </a>
        </div>

      </div>
    </section>
  );
}
