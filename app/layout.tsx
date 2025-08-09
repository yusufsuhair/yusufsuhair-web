import type { Metadata } from "next";
import { Raleway, Open_Sans } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Yusuf Suhair - Developer Portfolio",
  description: "Full-stack developer and software engineer specializing in modern web technologies, React, Next.js, TypeScript, and cloud solutions. View my projects and experience.",
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
    "cloud computing"
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
    title: "Yusuf Suhair - Developer Portfolio",
    description: "Full-stack developer and software engineer specializing in modern web technologies, React, Next.js, TypeScript, and cloud solutions.",
    siteName: "Yusuf Suhair Portfolio",
    images: [
      {
        url: "/yusufsuhair.jpeg",
        width: 1200,
        height: 630,
        alt: "Yusuf Suhair - Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yusuf Suhair - Developer Portfolio",
    description: "Full-stack developer and software engineer specializing in modern web technologies",
    images: ["/yusufsuhair.jpeg"],
    creator: "@yusufsuhair",
  },
  alternates: {
    canonical: "https://yusufsuhair.com",
  },
  category: "technology",
  classification: "portfolio",
  other: {
    "theme-color": "#000000",
    "color-scheme": "dark light",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${openSans.variable} font-open-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
