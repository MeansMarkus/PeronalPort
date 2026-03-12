"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { experiences } from "@/lib/data";

export function Experience() {
  const { ref, isInView } = useSectionInView();

  return (
    <section
      id="experience"
      ref={ref}
      className="py-24 sm:py-32 bg-zinc-900/30"
    >
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-2">
              Experience
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-50">
              Where I&apos;ve worked
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line with gradient */}
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/40 via-zinc-800 to-zinc-800" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  className="relative pl-14"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 * index }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1 flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 shadow-lg shadow-accent/5">
                    <Briefcase className="h-4 w-4 text-accent" />
                  </div>

                  {/* Content card */}
                  <div className="bg-zinc-900/60 rounded-2xl border border-zinc-800/60 p-6 hover:shadow-lg hover:shadow-accent/5 hover:border-zinc-700/60 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                      <h3 className="text-lg font-semibold text-zinc-100">
                        {exp.role}
                      </h3>
                      <span className="text-sm text-zinc-500 font-medium font-mono">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-accent font-medium text-sm mb-3">
                      {exp.company}
                    </p>
                    <p className="text-zinc-500 text-sm mb-4">
                      {exp.description}
                    </p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-zinc-400"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent/50 shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}