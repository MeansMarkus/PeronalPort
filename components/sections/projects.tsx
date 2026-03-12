"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { projects } from "@/lib/data";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Projects() {
  const { ref, isInView } = useSectionInView();

  return (
    <section id="projects" ref={ref} className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-2">
              Projects
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-50">
              Featured work
            </h2>
            <p className="mt-4 text-zinc-500 max-w-xl mx-auto">
              A selection of projects I&apos;ve built — from real-time collaboration
              tools to AI-powered platforms.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.08 * index }}
              >
                <Card className="h-full flex flex-col hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1 hover:border-accent/25 group">
                  {/* Project image placeholder with gradient */}
                  <div className="h-44 bg-gradient-to-br from-accent-dark/10 via-violet-900/10 to-indigo-900/5 rounded-t-2xl border-b border-zinc-800/40 flex items-center justify-center relative overflow-hidden">
                    {/* Subtle grid inside card */}
                    <div
                      className="absolute inset-0 opacity-[0.06]"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(167,139,250,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.3) 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                      }}
                    />
                    <span className="text-4xl opacity-60 group-hover:scale-110 transition-transform duration-300 relative z-10">
                      {["🚀", "📊", "🔒", "🤖", "📈", "💪"][index]}
                    </span>
                  </div>

                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg group-hover:text-accent transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-[11px]">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 pt-2">
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-1.5 h-3.5 w-3.5" /> Code
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-1.5 h-3.5 w-3.5" /> Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}