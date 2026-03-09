import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
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
  title: "Yusuf Suhair | Fullstack Developer",
  description: "Full-stack developer and software engineer specializing in modern web technologies, React, Next.js, TypeScript, Web3, and cloud solutions. View my projects and experience.",
  keywords: [
    "Yusuf Suhair",
    "developer",
    "software engineer",
    "full-stack developer",
    "web developer",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "portfolio",
    "frontend",
    "backend",
    "cloud computing",
    "Web3",
    "Blockchain",
    "Flutter",
  ],
  authors: [{ name: "Yusuf Suhair" }],
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
    title: "Yusuf Suhair | Fullstack Developer",
    description: "Full-stack developer specializing in Web3, AI-powered platforms, and mobile development.",
    siteName: "Yusuf Suhair Portfolio",
    images: [
      {
        url: "/yusufsuhair.jpg",
        width: 1200,
        height: 630,
        alt: "Yusuf Suhair - Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yusuf Suhair | Fullstack Developer",
    description: "Full-stack developer specializing in modern web technologies",
    images: ["/yusufsuhair.jpg"],
    creator: "@yusufsuhair",
  },
  alternates: {
    canonical: "https://yusufsuhair.com",
  },
  category: "technology",
  classification: "portfolio",
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
      </body>
    </html>
  );
}
