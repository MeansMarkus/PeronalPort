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
  title: "Markus — Software Engineer",
  description:
    "Portfolio of Markus, a software engineer building elegant solutions to complex problems. Specializing in full-stack development with React, Next.js, TypeScript, and cloud infrastructure.",
  keywords: [
    "software engineer",
    "full-stack developer",
    "React",
    "Next.js",
    "TypeScript",
    "portfolio",
  ],
  authors: [{ name: "Markus" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://markus.dev",
    title: "Markus — Software Engineer",
    description:
      "Building elegant solutions to complex problems. Full-stack engineer specializing in React, Next.js, and cloud infrastructure.",
    siteName: "Markus Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Markus — Software Engineer",
    description:
      "Building elegant solutions to complex problems. Full-stack engineer specializing in React, Next.js, and cloud infrastructure.",
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