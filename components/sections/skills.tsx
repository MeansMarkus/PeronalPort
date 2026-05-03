"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Wrench, Database, Cloud } from "lucide-react";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { skillCategories } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const iconMap: Record<string, React.ReactNode> = {
  code: <Code2 className="h-5 w-5 text-accent" />,
  layers: <Layers className="h-5 w-5 text-accent" />,
  wrench: <Wrench className="h-5 w-5 text-accent" />,
  database: <Database className="h-5 w-5 text-accent" />,
  cloud: <Cloud className="h-5 w-5 text-accent" />,
};

export function Skills() {
  const { ref, isInView } = useSectionInView();

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 sm:py-32 bg-zinc-900/30"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-2">
              Skills
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-50">
              My Tech Toolkit
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <Card className="h-full hover:shadow-lg hover:shadow-accent/5 hover:border-accent/20 group">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 group-hover:bg-accent/15 transition-colors">
                        {iconMap[category.icon]}
                      </div>
                      <CardTitle className="text-lg">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
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