"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { Badge } from "@/components/ui/badge";

const techHighlights = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Go",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Kubernetes",
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
              Get to know me
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile image placeholder */}
            <motion.div
              className="relative mx-auto md:mx-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-3xl bg-gradient-to-br from-accent-dark/30 via-violet-900/20 to-indigo-900/10 border border-zinc-800/60 shadow-2xl shadow-accent-dark/10 flex items-center justify-center">
                <span className="text-6xl">👨‍💻</span>
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
                I&apos;m a passionate software engineer with 5+ years of experience
                building scalable web applications and distributed systems. I specialize
                in full-stack development with a focus on creating performant, accessible,
                and visually polished products.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-4">
                Currently, I&apos;m leading frontend architecture at TechCorp, where I
                build design systems and micro-frontends that serve millions of users.
                I thrive at the intersection of engineering excellence and great user
                experience.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-6">
                When I&apos;m not coding, you&apos;ll find me contributing to open-source
                projects, writing technical blog posts, or exploring the latest in AI
                and systems programming.
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