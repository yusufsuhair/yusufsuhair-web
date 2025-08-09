"use client";

import { Download } from "lucide-react";

interface HomeWidgetProps {
  onViewProjects: () => void;
}

export default function HomeWidget({ onViewProjects }: HomeWidgetProps) {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 font-title">
          Hello, I'm{" "}
          <span className="gradient-text">Yusuf Suhair</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Software Engineer
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
          <a 
            href="/yusuf-suhair-cv.pdf" 
            download="Yusuf-Suhair-CV.pdf"
            className="bg-gradient-to-r from-gray-800 to-black hover:from-gray-700 hover:to-gray-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-gray-500/25 hover:shadow-xl transition-all duration-300 hover-lift text-sm sm:text-base"
          >
            <Download size={18} className="sm:w-5 sm:h-5" />
            Download CV
          </a>
          <button
            className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-800 hover:text-gray-800 px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 hover-lift text-sm sm:text-base"
            onClick={onViewProjects}
            type="button"
          >
            View Projects
          </button>
        </div>
      </div>
    </section>
  );
}
