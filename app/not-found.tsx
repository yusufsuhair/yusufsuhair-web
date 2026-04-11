import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found | Yusuf Suhair",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center px-6">
      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-red-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative w-full max-w-lg">
        {/* Terminal window */}
        <div className="rounded-2xl bg-[#0a0a0a] border border-white/10 shadow-2xl overflow-hidden">
          {/* Title bar */}
          <div className="flex items-center px-4 py-3 border-b border-white/5 bg-[#0f0f0f]">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="mx-auto text-xs text-zinc-500 font-mono">yusuf@dev-env:~</div>
          </div>

          {/* Body */}
          <div className="p-6 font-mono text-sm space-y-4">
            <div className="space-y-1">
              <div className="flex items-start gap-2">
                <span className="text-green-400 flex-shrink-0">visitor@yusufsuhair:~$</span>
                <span className="text-white">cd {typeof window !== "undefined" ? window.location.pathname : "/this-page"}</span>
              </div>
              <p className="text-red-400 pl-0">
                bash: cd: page not found: No such file or directory
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-start gap-2">
                <span className="text-green-400 flex-shrink-0">visitor@yusufsuhair:~$</span>
                <span className="text-white">cat error.log</span>
              </div>
              <div className="pl-0 space-y-0.5 text-zinc-400">
                <p><span className="text-yellow-400">ERROR 404</span> — The page you&apos;re looking for doesn&apos;t exist.</p>
                <p className="text-zinc-600">It may have been moved, deleted, or never existed.</p>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-start gap-2">
                <span className="text-green-400 flex-shrink-0">visitor@yusufsuhair:~$</span>
                <span className="text-white">ls /home</span>
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-1 text-zinc-300">
                <span>about/</span>
                <span>projects/</span>
                <span>experience/</span>
                <span>skills/</span>
                <span>contact/</span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <span className="text-green-400">visitor@yusufsuhair:~$</span>
              <span className="animate-pulse w-2 h-4 bg-zinc-400 inline-block" />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6 text-center space-y-3">
          <p className="text-zinc-500 text-sm">Lost? Let&apos;s get you back.</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-black bg-white rounded-full hover:bg-zinc-200 hover:scale-105 transition-all duration-300"
          >
            cd ~/home
          </Link>
        </div>
      </div>
    </div>
  );
}
