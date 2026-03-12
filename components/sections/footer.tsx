"use client";

import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@markus.dev", label: "Email" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-zinc-800/60 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a
              href="#"
              className="text-lg font-bold tracking-tight text-zinc-100"
            >
              Markus<span className="text-accent">.</span>
            </a>
            <p className="text-sm text-zinc-600 mt-1">
              Built with Next.js, Tailwind CSS &amp; Framer Motion
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-1">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={
                  link.href.startsWith("mailto")
                    ? undefined
                    : "noopener noreferrer"
                }
                aria-label={link.label}
                className="p-2.5 rounded-xl text-zinc-600 hover:text-accent hover:bg-accent/5 transition-all"
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2.5 rounded-xl border border-zinc-800 text-zinc-600 hover:text-accent hover:border-accent/30 hover:bg-accent/5 transition-all"
          >
            <ArrowUp size={18} />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-zinc-800/40 text-center">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Markus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}