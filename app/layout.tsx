import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const SITE_URL = "https://yusufsuhair.xyz";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Yusuf Suhair | Software Engineer & AI Agent Builder",
  description: "Software Engineer, AI Agent Builder and Founder of YS Academy, with HRD Corp Train-the-Trainer completed and 7+ years shipping web, mobile, enterprise, Web3, and automation products. Builds assistants and workflows with Hermes, OpenClaw, Ollama, and n8n.",
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
    "HRD Corp Train-the-Trainer",
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
  authors: [{ name: "Yusuf Suhair", url: SITE_URL }],
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
    url: SITE_URL,
    title: "Yusuf Suhair | Software Engineer & AI Agent Builder",
    description: "Software engineer with HRD Corp Train-the-Trainer completed and 7+ years shipping web, mobile, enterprise, and Web3 products, plus AI agent automations with Hermes, OpenClaw, Ollama, and n8n.",
    siteName: "Yusuf Suhair",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Yusuf Suhair, Software Engineer and AI Agent Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yusuf Suhair | Software Engineer & AI Agent Builder",
    description: "Software engineer with HRD Corp Train-the-Trainer completed and 7+ years shipping web, mobile, enterprise, Web3, and AI agent automation products.",
    images: ["/og.png"],
    creator: "@yusufsuhair",
  },
  alternates: {
    canonical: SITE_URL,
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

// Without JavaScript, scroll reveals never fire and toggles can't open, so show everything.
const NO_SCRIPT_STYLES = `
  [style*="opacity:0"] { opacity: 1 !important; transform: none !important; }
  .phone-collapsed { display: flex !important; }
  .js-only { display: none !important; }
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="motion-safe:scroll-smooth dark">
      <head>
        <noscript>
          <style dangerouslySetInnerHTML={{ __html: NO_SCRIPT_STYLES }} />
        </noscript>
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-2.5 focus:z-[100] focus:inline-flex focus:min-h-11 focus:items-center focus:rounded-full focus:bg-white focus:px-4 focus:text-sm focus:font-medium focus:text-black focus:ring-2 focus:ring-black"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
