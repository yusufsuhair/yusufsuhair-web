"use client";

import {
  Calendar,
  Code,
  Cpu,
  Download,
  ExternalLink,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Smartphone,
  X
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
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
      <nav className={`fixed top-0 left-0 h-full w-80 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-r border-gray-200/50 dark:border-gray-700/50 z-50 transition-transform duration-300 ease-in-out ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
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
          <section className="min-h-screen flex items-center justify-center">
            <div className="text-center max-w-4xl">
              <h1 className="text-7xl font-bold text-gray-900 dark:text-white mb-6 font-title">
                Hello, I'm{" "}
                <span className="gradient-text">Yusuf Suhair</span>
              </h1>

              <p className="text-2xl text-gray-600 dark:text-gray-300 mb-8">
                Software Engineer
              </p>

              <div className="flex gap-4 justify-center">
                <a 
                  href="/yusuf-suhair-cv.pdf" 
                  download="Yusuf-Suhair-CV.pdf"
                  className="bg-gradient-to-r from-gray-800 to-black hover:from-gray-700 hover:to-gray-800 text-white px-8 py-4 rounded-xl flex items-center gap-2 shadow-lg shadow-gray-500/25 hover:shadow-xl transition-all duration-300 hover-lift"
                >
                  <Download size={20} />
                  Download CV
                </a>
                <button
                  className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-800 hover:text-gray-800 px-8 py-4 rounded-xl transition-all duration-300 hover-lift"
                  onClick={() => setActiveSection("projects")}
                  type="button"
                >
                  View Projects
                </button>
              </div>
            </div>
          </section>
        )}

        {/* About Section */}
        {activeSection === "about" && (
          <section className="max-w-6xl mx-auto flex flex-col items-center justify-center">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center font-title">
              About Me
            </h2>

            <div className="flex flex-col items-center justify-center gap-12 w-full">
              <div className="flex justify-center">
                <img
                  src="/yusufsuhair.jpeg"
                  alt="Yusuf Suhair"
                  className="rounded-2xl shadow-lg w-80 h-80 object-cover border-4 border-gray-200 dark:border-gray-700"
                />
              </div>

              <div className="space-y-6 max-w-2xl text-center">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  I'm a passionate full-stack developer with a love for creating beautiful, functional, and scalable applications.
                  With expertise in modern web technologies, I bring ideas to life through clean code and intuitive user experiences.
                </p>

                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  My journey in software development has been driven by curiosity and a desire to solve complex problems.
                  I specialize in React, Node.js, Python, and cloud technologies, always staying current with industry best practices.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 justify-center">
                  <div className="flex items-center gap-3 justify-center">
                    <Code className="text-gray-600" size={20} />
                    <span className="text-gray-700 dark:text-gray-300">Full-Stack Development</span>
                  </div>
                  <div className="flex items-center gap-3 justify-center">
                    <Globe className="text-gray-600" size={20} />
                    <span className="text-gray-700 dark:text-gray-300">Web 3.0 & Blockchain</span>
                  </div>
                  <div className="flex items-center gap-3 justify-center">
                    <Smartphone className="text-gray-600" size={20} />
                    <span className="text-gray-700 dark:text-gray-300">Mobile Development</span>
                  </div>
                  <div className="flex items-center gap-3 justify-center">
                    <Cpu className="text-gray-600" size={20} />
                    <span className="text-gray-700 dark:text-gray-300">DevSecOps</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Experience Section */}
        {activeSection === "experience" && (
          <section className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center font-title">
              Experience
            </h2>

            <div className="space-y-8">
              {[
                {
                  title: "Co-Founder & CTO",
                  company: "Heifereum Technology Sdn Bhd",
                  period: "March 2024 - Present",
                  location: "Kuala Lumpur, Malaysia",
                  description: [
                    "Developed and deployed multiple Web3 applications including NFT marketplace, Layer 2 features, memecoin launch, and staking systems using Solidity and Next.js",
                    "Built AlFiqh.com, an AI-powered platform for Islamic knowledge using Python, Next.js, and NestJS with GPT and NLP integration",
                    "Engineered MooMetrics.io, a crypto analytics platform with real-time data and AI-based market insights using Python, Next.js, and Node.js",
                    "Contributed to Dialektika.io, an AI tool that analyzes social content and sentiment for data-driven decision-making using Python, Next.js, and NestJS",
                    "Built an e-commerce system from scratch using MedusaJS and Next.js with multi-vendor and custom admin panel support",
                    "Developed BoostFundCoin.org, a crypto-based crowdfunding platform with Web3 integration using Next.js",
                    "Created AI-powered face recognition for NuuhaBeauty.com to detect acne and recommend skincare using computer vision and deep learning",
                    "Managed CI/CD pipelines and server infrastructure for smooth deployment and operational stability across all projects"
                  ],
                  tech: ["Python", "Solidity", "JavaScript", "Next.js", "NestJS", "GPT", "NLP", "Node.js", "MedusaJS", "Web3", "Computer Vision", "Deep Learning", "CI/CD"]
                },
                {
                  title: "Full-Stack Developer",
                  company: "SWIFT",
                  period: "March 2022 - March 2024",
                  location: "Bangsar, Malaysia",
                  description: [
                    "Maintained SWIFT website having active users of over 11,000 banks, financial institutions, and corporations in more than 200 countries and territories",
                    "Developed full-stack web applications (JavaEE, Spring MVC, Spring Boot, AngularJS, Angular) including unit testings",
                    "Worked on CI/CD such as Jenkins, AWS, SSL, Linux, and Ansible"
                  ],
                  tech: ["JavaEE", "Spring MVC", "Spring Boot", "AngularJS", "Angular", "Jenkins", "AWS", "SSL", "Linux", "Ansible"]
                },
                {
                  title: "Mobile Developer",
                  company: "Google Play Store",
                  period: "August 2019 - Present",
                  location: "Remote",
                  description: [
                    "Designed UI/UX using Adobe XD",
                    "Developed mobile applications based on client requirements using architecture patterns such as MVVM, MVC, and MVP",
                    "Published 50+ Android applications on Google Play Store with 5M+ installations",
                    "Worked on various freelancing mobile applications, one of the clients was Education Malaysia Indonesia developing a mobile app to promote Malaysian colleges",
                    "Android using Java & Kotlin, cross-platform using Flutter"
                  ],
                  tech: ["Java", "Kotlin", "Flutter", "Adobe XD", "MVVM", "MVC", "MVP", "Android"]
                },
                {
                  title: "Full-Stack Developer",
                  company: "SICPA",
                  period: "December 2020 - February 2022",
                  location: "Cyberjaya, Malaysia",
                  description: [
                    "Developed full-stack web applications using various technologies such as Apache Kafka, gRPC, Spring Boot, Angular, Oracle, and Docker",
                    "Worked on both monolithic and microservice applications",
                    "Managed on deployments using Docker, Jenkins, Wildfly, JBoss"
                  ],
                  tech: ["Apache Kafka", "gRPC", "Spring Boot", "Angular", "Oracle", "Docker", "Jenkins", "Wildfly", "JBoss", "Microservices"]
                }
              ].map((job, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover-lift border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 font-title">
                        {job.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 font-medium text-lg">
                        {job.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-600 dark:text-gray-300 flex items-center gap-1">
                        <Calendar size={16} />
                        {job.period}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 flex items-center gap-1">
                        <MapPin size={16} />
                        {job.location}
                      </p>
                    </div>
                  </div>

                  <ul className="text-gray-600 dark:text-gray-300 mb-4 space-y-2">
                    {job.description.map((desc, descIndex) => (
                      <li key={descIndex} className="flex items-start gap-2 leading-relaxed">
                        <span className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects Section */}
        {activeSection === "projects" && (
          <section className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center font-title">
              Projects
            </h2>

            <ul className="space-y-8">
              {[
                {
                  title: "MooMetrics",
                  url: "https://moometrics.io",
                  description: "Crypto portfolio tracker and analytics platform for DeFi and NFT assets.",
                  tech: ["Next.js", "TypeScript", "Tailwind", "Node.js", "Python"],
                },
                {
                  title: "MooMetrics Mobile",
                  url: "https://moometrics.io",
                  description: "Crypto portfolio tracker and analytics platform for DeFi and NFT assets.",
                  android: "https://play.google.com/store/apps/details?id=com.heifereum.moometrics_mobile&hl=en",
                  ios: "https://apps.apple.com/my/app/moometrics-crypto-analytics/id6741414782",
                  tech: ["Flutter"],
                },
                {
                  title: "Dialektika",
                  url: "https://dialektika.io",
                  description: "AI-powered debate and argumentation platform for structured discussions.",
                  tech: ["Next.js", "NestJS", "Python", "NLP"],
                },
                {
                  title: "$WALID Memecoin",
                  url: "https://walid.fun",
                  description: "Personal website and creative playground for interactive web experiments.",
                  tech: ["Next.js", "Framer Motion", "Vercel", "TypeScript"],
                },
                {
                  title: "AIFiqh",
                  url: "https://aifiqh.com",
                  description: "AI-powered Islamic Q&A platform for fiqh and religious queries.",
                  tech: ["Next.js", "Python", "NestJS", "NLP"],
                },
                {
                  title: "BoostFundCoin",
                  url: "https://boostfundcoin.org",
                  description: "Decentralized fundraising platform leveraging blockchain and smart contracts.",
                  tech: ["Solidity", "Next.js", "Web3.js", "Ethereum"],
                },
                {
                  title: "Polarythm Landing Page",
                  url: "https://polarythm.com",
                  description: "AI-Powered Business Intelligence Solutions",
                  tech: ["React", "Tone.js", "D3.js", "TypeScript"],
                },
                {
                  title: "Ejoe Swap (Discontinued)",
                  url: "https://app.ejoe.network",
                  description: "Decentralized crypto swap platform inspired by PancakeSwap, enabling token exchanges on Ejoe Network. (Project discontinued)",
                  tech: ["React", "Solidity", "Web3.js"],
                },
                {
                  title: "Ejoe NFT Marketplace (Discontinued)",
                  url: "https://nft.ejoe.network",
                  description: "A decentralized NFT marketplace for the Ejoe Network, allowing users to mint, buy, and sell NFTs with a familiar OpenSea-like experience. (Project discontinued)",
                  tech: ["React", "Solidity", "Web3.js"],
                },
              ].map((project, index) => (
                <li
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover-lift border border-gray-200 dark:border-gray-700 flex flex-col"
                >
                  <div className="w-full h-2 bg-black" />
                  <div className="p-6 flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 font-title">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {project.ios && project.android ? (
                      <div className="flex gap-4">
                        <a
                          href={project.ios}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-medium flex items-center gap-2 transition-colors"
                        >
                          <Smartphone size={16} className="text-black dark:text-black" />
                          iOS App
                        </a>
                        <a
                          href={project.android}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-medium flex items-center gap-2 transition-colors"
                        >
                          <Smartphone size={16} className="text-black dark:text-black" />
                          Android App
                        </a>
                      </div>
                    ) : (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-medium flex items-center gap-2 transition-colors"
                      >
                        View Project
                        <ExternalLink size={16} className="text-black dark:text-black" />
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === "contact" && (
          <section className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center font-title">
              Get In Touch
            </h2>

            <div className="text-center">
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                Have a question or want to work together? I'd love to hear from you.
                Let's discuss your project and see how we can bring your ideas to life.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover-lift border border-gray-200 dark:border-gray-700">
                  <Mail className="text-gray-600 mx-auto mb-4" size={32} />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 font-title">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    <a
                      href="mailto:yusufmohdsuhair@gmail.com"
                      className="hover:underline break-all"
                    >
                      yusufmohdsuhair@gmail.com
                    </a>
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover-lift border border-gray-200 dark:border-gray-700">
                  <Github className="text-gray-900 dark:text-white mx-auto mb-4" size={32} />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 font-title">GitHub</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    <a
                      href="https://github.com/yusufsuhair"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      @yusufsuhair
                    </a>
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover-lift border border-gray-200 dark:border-gray-700">
                  <Linkedin className="text-gray-600 mx-auto mb-4" size={32} />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 font-title">LinkedIn</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    <a
                      href="https://linkedin.com/in/yusufsuhair"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      @yusufsuhair
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
