import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://yusufsuhair.com"),
  title: "Yusuf Suhair | Fullstack & DevSecOps Engineer",
  description: "Fullstack & DevSecOps Engineer with 6+ years building secure, scalable systems — Web3 protocols, AI platforms, 50+ mobile apps with 5M+ installs, and enterprise backends. Based in Kuala Lumpur.",
  keywords: [
    "Yusuf Suhair",
    "Fullstack Engineer",
    "DevSecOps Engineer",
    "Software Engineer",
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
    title: "Yusuf Suhair | Fullstack & DevSecOps Engineer",
    description: "6+ years building secure, scalable systems — Web3, AI platforms, 50+ mobile apps with 5M+ installs, and enterprise backends at SWIFT & SICPA.",
    siteName: "Yusuf Suhair",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Yusuf Suhair — Fullstack & DevSecOps Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yusuf Suhair | Fullstack & DevSecOps Engineer",
    description: "6+ years building secure, scalable systems — Web3, AI platforms, 50+ mobile apps with 5M+ installs.",
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
        className={`${inter.variable} ${raleway.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
