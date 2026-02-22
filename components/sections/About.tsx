"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { portfolioData } from "@/data/portfolio";
import { Zap, Layers, BookTemplate, Users } from "lucide-react";

const focusIcons: Record<string, React.ElementType> = {
  "Performance Optimization": Zap,
  "Scalable Architecture": Layers,
  "Component Libraries": BookTemplate,
  "Team Leadership": Users,
};

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="container relative z-10 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-sm font-medium text-primary mb-4 block">
            ABOUT ME
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Building digital experiences that{" "}
            <span className="text-gradient">matter</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {portfolioData.about.summary}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe that great frontend development is about more than just
              writing code—it&apos;s about understanding users, solving problems
              creatively, and delivering solutions that exceed expectations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex flex-wrap gap-3">
              {portfolioData.techStack.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Badge
                    variant="secondary"
                    className="px-4 py-2 text-sm rounded-full glass-hover cursor-default"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-lg font-semibold mb-6">What I focus on</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {portfolioData.about.focus.map((focus, index) => {
              const Icon = focusIcons[focus] || Zap;
              return (
                <motion.div
                  key={focus}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="glass-hover border-none shadow-none bg-card/30">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-medium">{focus}</h4>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
