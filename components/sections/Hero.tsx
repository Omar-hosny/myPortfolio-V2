"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio";

const socialIcons: Record<string, React.ElementType> = {
  Github,
  Linkedin,
  Twitter,
  Mail,
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="absolute inset-0">
        <div className="absolute top-[10%] left-[10%] w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[10%] w-72 h-72 bg-purple-500/20 rounded-full blur-[100px] animate-pulse delay-700" />
        <div className="absolute top-[50%] left-[50%] w-48 h-48 bg-blue-500/15 rounded-full blur-[80px] animate-pulse delay-500" />
      </div>

      <div className="absolute inset-0 bg-dots opacity-30" />

      <div className="container relative z-10 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for work
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          >
            {portfolioData.name.split(" ").map((word, i) => (
              <span
                key={i}
                className={i === 1 ? "text-gradient-secondary" : ""}
              >
                {word}{" "}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl"
          >
            {portfolioData.headline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted-foreground/80 mb-10 max-w-xl"
          >
            {portfolioData.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-12"
          >
            <Button
              size="lg"
              className="rounded-full px-8 h-12 text-base glow-primary-hover"
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
              className="rounded-full px-8 h-12 text-base"
              asChild
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-4"
          >
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
                    className="rounded-full"
                    asChild
                  >
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  </Button>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [1, 0, 1], y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 rounded-full bg-primary"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
