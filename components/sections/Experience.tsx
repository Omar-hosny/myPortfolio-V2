"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { portfolioData, type Experience } from "@/data/portfolio";
import { Calendar, Award } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      <div className="container relative z-10 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-sm font-medium text-primary mb-4 block">EXPERIENCE</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Career <span className="text-gradient">journey</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          <div className="space-y-12">
            {portfolioData.experience.map((exp, index) => (
              <ExperienceItem key={exp.id} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ experience, index }: { experience: import("@/data/portfolio").Experience; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative flex items-center ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary -translate-x-1/2 z-10`}>
        <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
      </div>

      <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${isEven ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"}`}>
        <Card className="border-none bg-card/30 glass-hover">
          <CardContent className="p-6">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-lg font-semibold">{experience.role}</h3>
                <p className="text-primary font-medium">{experience.company}</p>
                {experience.location && (
                  <p className="text-sm text-muted-foreground">{experience.location}</p>
                )}
              </div>
              <Badge 
                variant={experience.type === "remote" ? "secondary" : "default"}
                className="rounded-full whitespace-nowrap"
              >
                {experience.type}
              </Badge>
            </div>

            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
              <Calendar className="w-4 h-4" />
              {experience.duration}
            </div>

            <p className="text-muted-foreground mb-4">{experience.description}</p>

            <div className="space-y-2">
              {experience.achievements.map((achievement, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <Award className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}
