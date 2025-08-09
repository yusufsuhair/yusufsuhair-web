"use client";

import { Mail, Github, Linkedin } from "lucide-react";

export default function ContactWidget() {
  return (
    <section className="max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-12 text-center font-title">
        Get In Touch
      </h2>

      <div className="text-center">
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
          Have a question or want to work together? I'd love to hear from you.
          Let's discuss your project and see how we can bring your ideas to life.
        </p>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 px-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg hover-lift border border-gray-200 dark:border-gray-700">
            <Mail className="text-gray-600 mx-auto mb-3 sm:mb-4 sm:w-8 sm:h-8" size={28} />
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 font-title">Email</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              <a
                href="mailto:yusufmohdsuhair@gmail.com"
                className="hover:underline break-all"
              >
                yusufmohdsuhair@gmail.com
              </a>
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg hover-lift border border-gray-200 dark:border-gray-700">
            <Github className="text-gray-900 dark:text-white mx-auto mb-3 sm:mb-4 sm:w-8 sm:h-8" size={28} />
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 font-title">GitHub</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
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

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg hover-lift border border-gray-200 dark:border-gray-700">
            <Linkedin className="text-gray-600 mx-auto mb-3 sm:mb-4 sm:w-8 sm:h-8" size={28} />
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 font-title">LinkedIn</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
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
  );
}
