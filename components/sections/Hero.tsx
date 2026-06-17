"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio";

const socialIcons: Record<string, React.ElementType> = {
  Github,
  Linkedin,
  Mail,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.3 },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -10 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const nameWords = portfolioData.name.split(" ");

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div
          className="absolute top-[-20%] right-[-10%] w-[60%] h-[80%] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, oklch(0.72 0.20 75 / 0.15), transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[60%] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, oklch(0.38 0.20 265 / 0.1), transparent 70%)",
          }}
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container relative z-10 px-6 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[70vh]">
          <div className="lg:col-span-7 lg:pr-12">
            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold -tracking-[0.02em] mb-6"
            >
              {nameWords.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-[0.15em]">
                  <motion.span
                    variants={wordVariants}
                    className={`inline-block ${i === 1 ? "text-gold" : ""}`}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
              className="text-lg md:text-xl text-muted-foreground mb-4 max-w-xl leading-relaxed"
            >
              {portfolioData.headline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75, ease: [0.22, 1, 0.36, 1] as const }}
              className="text-base text-muted-foreground/70 mb-10 max-w-lg leading-relaxed"
            >
              {portfolioData.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12"
            >
              <Button
                size="lg"
                className="px-8 h-12 text-base bg-gold text-gold-foreground hover:bg-gold/90"
                asChild
              >
                <a href="#projects">
                  View Work
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 h-12 text-base"
                asChild
              >
                <a href="#contact">Get in Touch</a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="flex items-center gap-4"
            >
              <span className="text-xs font-mono font-medium tracking-wider uppercase text-muted-foreground/50">
                Find me on
              </span>
              <div className="h-px w-8 bg-border" />
              {portfolioData.socials.map((social) => {
                const Icon = socialIcons[social.icon] || ArrowRight;
                return (
                  <motion.div
                    key={social.name}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full text-muted-foreground/60 hover:text-foreground"
                      asChild
                    >
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    </Button>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="relative h-full min-h-[50vh] flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
                className="relative z-10 text-center"
              >
                <div className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-gold/10 flex items-center justify-center mx-auto">
                  <div className="w-32 h-32 md:w-44 md:h-44 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-gold/20 flex items-center justify-center">
                    <span className="text-2xl md:text-3xl font-heading font-bold text-primary">
                      {portfolioData.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-gold text-sm font-medium border border-gold/20">
                    <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                    Available for work
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
