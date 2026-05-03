"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { Badge } from "@/components/ui/badge";

const techHighlights = [
  "Python",
  "Java",
  "C++",
  "SQL",
  "PyTorch",
  "Transformers",
  "OpenAI API",
  "Flask",
  "PostgreSQL",
  "Git",
  "Docker",
];

export function About() {
  const { ref, isInView } = useSectionInView();

  return (
    <section id="about" ref={ref} className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section heading */}
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-2">
              About
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-50">
              Building software, systems, and AI tools
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile image */}
            <motion.div
              className="relative mx-auto md:mx-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="relative w-80 h-96 sm:w-96 sm:h-full rounded-3xl bg-gradient-to-br from-accent-dark/30 via-violet-900/20 to-indigo-900/10 border border-zinc-800/60 shadow-2xl shadow-accent-dark/10 overflow-hidden flex items-center justify-center">
                <Image
                  src="/images/avatar/avatar.png"
                  alt="Markus Means"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-accent/5 border border-accent/10 -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-xl bg-violet-900/20 -z-10" />
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-zinc-400 leading-relaxed mb-4">
                I&apos;m a Computer Science student at the University of Oklahoma who
                likes building practical software across web development, backend
                systems, and machine learning.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-4">
                My resume spans software development internships, operations work,
                and leadership roles that all sharpen the same core skills: ownership,
                communication, and shipping reliable work.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Outside class and projects, I stay active in competitive programming,
                fraternity technology leadership, and community volunteer work.
              </p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2">
                {techHighlights.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}