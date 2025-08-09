"use client";

import { Code, Globe, Smartphone, Cpu } from "lucide-react";

export default function AboutWidget() {
  return (
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
  );
}
