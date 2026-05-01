"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Animated gradient orbs — violet/purple glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-dark/30 rounded-full blur-[120px] animate-float animate-pulse-glow" />
        <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-violet-800/20 rounded-full blur-[150px] animate-float-delayed" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-indigo-900/20 rounded-full blur-[100px] animate-float-slow" />

        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, #a78bfa 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="mx-auto max-w-4xl px-6 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent border border-accent/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            Computer Science Student at OU
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="mt-8 text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-zinc-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-accent via-violet-400 to-indigo-400 bg-clip-text text-transparent">
            Markus Means
          </span>
        </motion.h1>

        {/* Title */}
        <motion.p
          className="mt-4 text-xl sm:text-2xl text-zinc-400 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          AI, Full-Stack, and Backend Development
        </motion.p>

        {/* Tagline */}
        <motion.p
          className="mt-4 text-lg text-zinc-500 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          I build ML-powered tools, web apps, and backend systems that combine
          practical engineering with clean product experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button size="lg" asChild>
            <a href="#projects">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">
              <Mail className="mr-2 h-4 w-4" /> Contact Me
            </a>
          </Button>
          <Button variant="ghost" size="lg" asChild>
            <a href="/resume.pdf" download>
              <Download className="mr-2 h-4 w-4" /> Resume
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}