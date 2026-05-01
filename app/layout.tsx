import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


const geistSans = localFont({
  src: [
    {
      path: "../node_modules/geist/dist/fonts/geist-sans/Geist-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../node_modules/geist/dist/fonts/geist-sans/Geist-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../node_modules/geist/dist/fonts/geist-sans/Geist-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../node_modules/geist/dist/fonts/geist-sans/Geist-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-geist-sans",
  display: "swap",
  fallback: ["system-ui", "arial"],
});

const geistMono = localFont({
  src: [
    {
      path: "../node_modules/geist/dist/fonts/geist-mono/GeistMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-geist-mono",
  display: "swap",
  fallback: ["monospace"],
});

export const metadata: Metadata = {
  title: "Markus Means — Computer Science Student & Software Developer",
  description:
    "Portfolio of Markus Means, a University of Oklahoma computer science student building AI tools, full-stack apps, and backend systems with Python, Java, C++, Flask, PostgreSQL, and PyTorch.",
  keywords: [
    "Markus Means",
    "University of Oklahoma",
    "software engineer",
    "computer science student",
    "full-stack developer",
    "machine learning",
    "AI",
    "React",
    "Python",
    "TypeScript",
    "portfolio",
  ],
  authors: [{ name: "Markus Means" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/MeansMarkus",
    title: "Markus Means — Computer Science Student & Software Developer",
    description:
      "Building AI tools, full-stack apps, and backend systems for school, work, and personal projects.",
    siteName: "Markus Means Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Markus Means — Computer Science Student & Software Developer",
    description:
      "Building AI tools, full-stack apps, and backend systems for school, work, and personal projects.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased noise-overlay">{children}</body>
    </html>
  );
}