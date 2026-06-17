"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { portfolioData } from "@/data/portfolio";
import { Code2, Server, Wrench } from "lucide-react";

const skillCategoryIcons: Record<string, React.ElementType> = {
  "Languages & Frameworks": Code2,
  "State Management": Server,
  "Backend & Tools": Wrench,
};

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="container relative z-10 px-6 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-16 leading-tight"
        >
          Tools & <span className="text-gold">technologies</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {portfolioData.skills.map((category, categoryIndex) => {
            const CategoryIcon = skillCategoryIcons[category.name] || Code2;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: categoryIndex * 0.15,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
              >
                <Card className="border-border/60 bg-card/50 h-full group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                        <CategoryIcon className="w-6 h-6 text-primary group-hover:text-gold transition-colors duration-300" />
                      </div>
                      <div>
                        <h3 className="text-base font-heading font-semibold">
                          {category.name}
                        </h3>
                        <p className="text-xs text-muted-foreground font-sans">
                          {category.skills.length} technologies
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.3,
                            delay:
                              categoryIndex * 0.15 + skillIndex * 0.04,
                          }}
                          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/5 transition-colors"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
                          <span className="text-sm text-muted-foreground font-sans">
                            {skill.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
