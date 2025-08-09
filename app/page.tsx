"use client";

import {
  Github,
  Linkedin,
  Mail,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";
import AboutWidget from "../components/AboutWidget";
import ExperienceWidget from "../components/ExperienceWidget";
import HomeWidget from "../components/HomeWidget";
import ProjectsWidget from "../components/ProjectsWidget";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-60 p-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-xl border border-gray-200/50 dark:border-gray-700/50 lg:hidden"
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 h-full w-80 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-r border-gray-200/50 dark:border-gray-700/50 z-50 transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}>
        <div className="p-8">
          <div className="text-3xl font-bold gradient-text mb-12 font-title">

          </div>

          <ul className="space-y-2">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => {
                    setActiveSection(section.id);
                    closeSidebar(); // Close sidebar on mobile after selection
                  }}
                  className={`w-full text-left px-6 py-4 rounded-xl transition-all duration-300 flex items-center gap-3 group ${activeSection === section.id
                    ? "bg-gradient-to-r from-gray-800 to-black text-white shadow-lg shadow-gray-500/25 dark:from-gray-700 dark:to-gray-800"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                    }`}
                >
                  <span className="font-medium">{section.label}</span>
                  {activeSection === section.id && (
                    <div className="w-1 h-6 bg-white rounded-full ml-auto" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex space-x-4">
              <a href="mailto:yusufmohdsuhair@gmail.com" className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <Mail size={20} className="text-gray-600 dark:text-gray-300" />
              </a>
              <a href="https://github.com/yusufsuhair" className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <Github size={20} className="text-gray-600 dark:text-gray-300" />
              </a>
              <a href="https://linkedin.com/in/yusufsuhair" className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <Linkedin size={20} className="text-gray-600 dark:text-gray-300" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Main Content */}
      <main className="lg:ml-80 p-4 lg:p-8 pt-16 lg:pt-8">
        {/* Hero Section */}
        {activeSection === "home" && (
          <HomeWidget onViewProjects={() => setActiveSection("projects")} />
        )}

        {/* About Section */}
        {activeSection === "about" && (
          <AboutWidget />
        )}

        {/* Experience Section */}
        {activeSection === "experience" && (
          <ExperienceWidget />
        )}

        {/* Projects Section */}
        {activeSection === "projects" && (
          <ProjectsWidget />
        )}
      </main>
    </div>
  );
}
