"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-background" />

      <div className="container relative z-10 px-6 max-w-6xl mx-auto">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-12" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex flex-col items-center md:items-start gap-3">
            <Link
              href="/"
              className="text-xl font-heading font-bold tracking-tight hover:text-primary transition-colors"
            >
              {portfolioData.logoText}
            </Link>
            <span className="text-sm text-muted-foreground font-sans">
              &copy; {new Date().getFullYear()} {portfolioData.name}. All rights
              reserved.
            </span>
          </div>

          <div className="flex items-center gap-8 text-sm text-muted-foreground font-sans">
            <Link
              href="#about"
              className="hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="hover:text-foreground transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="hover:text-foreground transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#experience"
              className="hover:text-foreground transition-colors"
            >
              Experience
            </Link>
            <Link
              href="#contact"
              className="hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
