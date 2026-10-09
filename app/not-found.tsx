import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found | Yusuf Suhair",
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#050505] flex items-center justify-center px-6 text-center">
      <div className="max-w-md">
        <p className="font-mono text-xs text-zinc-400">404</p>
        <h1 className="mt-3 text-3xl md:text-4xl font-medium tracking-tight text-white">
          This page doesn&apos;t exist.
        </h1>
        <p className="mt-4 text-zinc-400">The link may be old or mistyped. These pages do exist:</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center px-6 text-sm font-medium text-black bg-white rounded-full hover:bg-zinc-200 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="inline-flex min-h-11 items-center px-6 text-sm font-medium text-white border border-white/15 rounded-full hover:bg-white/10 transition-colors"
          >
            Services
          </Link>
        </div>
      </div>
    </main>
  );
}
