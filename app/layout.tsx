import type { Metadata } from "next";
import { Inter, Raleway, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yusufsuhair.com"),
  title: "Yusuf Suhair | Software Engineer & AI Agent Builder",
  description: "Software Engineer, AI Agent Builder, and Founder of YS Academy with 7+ years shipping web, mobile, enterprise, Web3, and automation products. Builds assistants and workflows with Hermes, OpenClaw, Ollama, and n8n.",
  keywords: [
    "Yusuf Suhair",
    "Fullstack Engineer",
    "DevSecOps Engineer",
    "Software Engineer",
    "AI Agent Builder",
    "AI Automation",
    "Hermes",
    "OpenClaw",
    "Ollama",
    "n8n",
    "YS Academy",
    "Web Developer",
    "Mobile Developer",
    "Android Developer",
    "Web3 Developer",
    "Blockchain Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Spring Boot",
    "Java",
    "Kotlin",
    "Flutter",
    "Solidity",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "DevOps",
    "Security Engineer",
    "Malaysia",
    "Kuala Lumpur",
    "portfolio",
  ],
  authors: [{ name: "Yusuf Suhair", url: "https://yusufsuhair.com" }],
  creator: "Yusuf Suhair",
  publisher: "Yusuf Suhair",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yusufsuhair.com",
    title: "Yusuf Suhair | Software Engineer & AI Agent Builder",
    description: "7+ years shipping web, mobile, enterprise, and Web3 products, plus AI agent automations with Hermes, OpenClaw, Ollama, and n8n.",
    siteName: "Yusuf Suhair",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Yusuf Suhair — Software Engineer and AI Agent Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yusuf Suhair | Software Engineer & AI Agent Builder",
    description: "7+ years shipping web, mobile, enterprise, Web3, and AI agent automation products.",
    images: ["/og.png"],
    creator: "@yusufsuhair",
  },
  alternates: {
    canonical: "https://yusufsuhair.com",
  },
  category: "technology",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  other: {
    "theme-color": "#050505",
    "color-scheme": "dark",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${raleway.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
