"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { portfolioData } from "@/data/portfolio";
import { Calendar, Award } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="container relative z-10 px-6 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-16 leading-tight"
        >
          Career <span className="text-gold">journey</span>
        </motion.h2>

        <div className="relative">
          <div className="absolute left-[1.125rem] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/50 via-gold/20 to-transparent" />

          <div className="space-y-16">
            {portfolioData.experience.map((exp, index) => (
              <ExperienceItem key={exp.id} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({
  experience,
  index,
}: {
  experience: import("@/data/portfolio").Experience;
  index: number;
}) {
  const isEven = index % 2 === 0;
  const companyInitials = experience.company
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] as const }}
      className={`relative flex flex-col md:flex-row items-start ${
        isEven ? "" : "md:flex-row-reverse"
      }`}
    >
      <div className="absolute left-4 md:left-1/2 w-[18px] h-[18px] -translate-x-1/2 z-10 mt-6">
        <div className="w-full h-full rounded-full bg-gold border-[3px] border-background" />
      </div>

      <div className="hidden md:block md:w-[calc(50%-2.5rem)]" />

      <div
        className={`ml-12 md:ml-0 md:w-[calc(50%-2.5rem)] ${
          isEven ? "md:pr-8" : "md:pl-8"
        }`}
      >
        <Card className="border-border/60 bg-card/50 group relative overflow-hidden">
          <div className="absolute -top-6 -right-6 text-[6rem] md:text-[8rem] font-heading font-bold leading-none text-primary/[0.04] select-none group-hover:text-primary/[0.07] transition-colors duration-500">
            {companyInitials}
          </div>
          <CardContent className="p-6 relative z-10">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-lg md:text-xl font-heading font-semibold">
                  {experience.role}
                </h3>
                <p className="text-gold font-medium font-sans text-sm">
                  {experience.company}
                </p>
                {experience.location && (
                  <p className="text-xs text-muted-foreground font-sans mt-0.5">
                    {experience.location}
                  </p>
                )}
              </div>
              <div className="shrink-0 flex flex-col items-end gap-1">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-sans">
                  <Calendar className="w-3 h-3" />
                  {experience.duration}
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-4 font-sans leading-relaxed">
              {experience.description}
            </p>

            <div className="space-y-2">
              {experience.achievements.map((achievement, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="flex items-start gap-2"
                >
                  <Award className="w-3.5 h-3.5 text-gold mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground font-sans">
                    {achievement}
                  </span>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}
