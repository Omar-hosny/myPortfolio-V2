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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="container relative z-10 px-6 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 leading-tight"
            >
              Building digital experiences that{" "}
              <span className="text-gold">matter</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 max-w-prose"
            >
              {portfolioData.about.summary}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-prose"
            >
              I believe that great frontend development is about more than just
              writing code—it&apos;s about understanding users, solving problems
              creatively, and delivering solutions that exceed expectations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap gap-2"
            >
              {portfolioData.techStack.slice(0, 8).map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                >
                  <Badge
                    variant="secondary"
                    className="px-3 py-1.5 text-xs rounded-full border-border/60 cursor-default font-sans"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
              <Badge
                variant="secondary"
                className="px-3 py-1.5 text-xs rounded-full cursor-default border-border/60 font-sans"
              >
                +{portfolioData.techStack.length - 8} more
              </Badge>
            </motion.div>
          </div>

          <div className="hidden lg:block lg:col-span-1" />

          <div className="lg:col-span-4">
            <div className="relative h-full flex flex-col justify-center">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                <motion.h3
                  variants={itemVariants}
                  className="text-sm font-mono font-medium tracking-wider uppercase text-muted-foreground/60 mb-4"
                >
                  Focus Areas
                </motion.h3>
                {portfolioData.about.focus.map((focus) => {
                  const Icon = focusIcons[focus] || Zap;
                  return (
                    <motion.div key={focus} variants={itemVariants}>
                      <Card className="border-border/60 bg-card/50">
                        <CardContent className="p-4 flex items-center gap-4">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <span className="text-sm font-medium">{focus}</span>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
