"use client";

import { Calendar, MapPin } from "lucide-react";

interface Job {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  tech: string[];
}

const experienceData: Job[] = [
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
];

export default function ExperienceWidget() {
  return (
    <section className="max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-12 text-center font-title">
        Experience
      </h2>

      <div className="space-y-8">
        {experienceData.map((job, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover-lift border border-gray-200 dark:border-gray-700"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 font-title">
                  {job.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 font-medium text-base sm:text-lg">
                  {job.company}
                </p>
              </div>
              <div className="text-right text-sm sm:text-base">
                <p className="text-gray-600 dark:text-gray-300 flex items-center gap-1">
                  <Calendar size={14} className="sm:w-4 sm:h-4" />
                  {job.period}
                </p>
                <p className="text-gray-600 dark:text-gray-300 flex items-center gap-1">
                  <MapPin size={14} className="sm:w-4 sm:h-4" />
                  {job.location}
                </p>
              </div>
            </div>

                              <ul className="text-gray-600 dark:text-gray-300 mb-4 space-y-2 text-sm sm:text-base">
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
                        className="px-2 sm:px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs sm:text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
          </div>
        ))}
      </div>
    </section>
  );
}
