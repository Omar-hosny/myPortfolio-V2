"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { portfolioData } from "@/data/portfolio";
import { 
  Code2, 
  Server, 
  Wrench, 
  Palette, 
  Database, 
  Terminal,
  Figma,
  GitBranch,
  Box,
  Cpu
} from "lucide-react";

const skillIcons: Record<string, React.ElementType> = {
  "React": Code2,
  "Next.js": Box,
  "TypeScript": Terminal,
  "Tailwind CSS": Palette,
  "Framer Motion": Cpu,
  "Zustand": Box,
  "Node.js": Server,
  "Prisma": Database,
  "PostgreSQL": Database,
  "Auth.js": Server,
  "REST APIs": Server,
  "Git": GitBranch,
  "Docker": Server,
  "Vercel": Server,
  "Figma": Figma,
  "VS Code": Terminal,
};

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      <div className="container relative z-10 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-sm font-medium text-primary mb-4 block">SKILLS</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tools & <span className="text-gradient">technologies</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {portfolioData.skills.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <Card className="border-none bg-card/30 glass-hover h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <CategoryIcon name={category.name} />
                    </div>
                    <h3 className="text-lg font-semibold">{category.name}</h3>
                  </div>

                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => {
                      const Icon = skillIcons[skill.name] || Code2;
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.3, 
                            delay: categoryIndex * 0.1 + skillIndex * 0.05 
                          }}
                          className="flex items-center gap-3 group"
                        >
                          <div className="w-8 h-8 rounded-md bg-secondary/50 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                            <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                          </div>
                          <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                            {skill.name}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryIcon({ name }: { name: string }) {
  switch (name) {
    case "Frontend":
      return <Code2 className="w-5 h-5 text-primary" />;
    case "Backend":
      return <Server className="w-5 h-5 text-primary" />;
    case "Tools":
      return <Wrench className="w-5 h-5 text-primary" />;
    default:
      return <Code2 className="w-5 h-5 text-primary" />;
  }
}
