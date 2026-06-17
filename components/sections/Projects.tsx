"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { portfolioData } from "@/data/portfolio";
import { Github, ExternalLink, FolderKanban } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Projects() {
  const hasProjects = portfolioData.projects.length > 0;

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="container relative z-10 px-6 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-16 leading-tight"
        >
          Featured <span className="text-gold">work</span>
        </motion.h2>

        {!hasProjects ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -top-12 -right-12 text-[12rem] md:text-[16rem] font-heading font-bold leading-none text-primary/[0.03] select-none pointer-events-none">
              work
            </div>
            <div className="relative z-10 flex flex-col items-center text-center py-16 md:py-24">
              <div className="w-20 h-20 rounded-2xl bg-gold/10 flex items-center justify-center mb-6">
                <FolderKanban className="w-10 h-10 text-gold" />
              </div>
              <h3 className="text-2xl md:text-3xl font-heading font-semibold mb-4">
                Explore My Work
              </h3>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto font-sans">
                Check out my GitHub profile to see my latest projects, open
                source contributions, and code samples.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  className="bg-gold text-gold-foreground hover:bg-gold/90"
                  asChild
                >
                  <a
                    href={
                      portfolioData.socials.find((s) => s.name === "GitHub")
                        ?.url
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View GitHub
                  </a>
                </Button>
                <Button
                  variant="outline"
                  asChild
                >
                  <a href="#contact">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Let&apos;s Discuss Your Project
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}

import { Badge } from "@/components/ui/badge";

function ProjectCard({
  project,
  index,
}: {
  project: import("@/data/portfolio").Project;
  index: number;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Card className="group relative overflow-hidden border-border/60 bg-card/50 h-full">
        <div className="aspect-[4/3] relative overflow-hidden rounded-t-lg">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-gold/10 group-hover:from-primary/30 group-hover:to-gold/20 transition-all duration-500" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-2xl bg-card/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <FolderKanban className="w-10 h-10 text-primary" />
            </div>
          </div>
          <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-300" />
        </div>

        <CardContent className="p-6">
          <h3 className="text-lg font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2 font-sans">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-[10px] rounded-md font-sans"
              >
                {tag}
              </Badge>
            ))}
            {project.tags.length > 3 && (
              <Badge
                variant="secondary"
                className="text-[10px] rounded-md font-sans"
              >
                +{project.tags.length - 3}
              </Badge>
            )}
          </div>

          <div className="flex items-center gap-3">
            {project.github && (
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                asChild
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                </a>
              </Button>
            )}
            {project.demo && (
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                asChild
              >
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
