"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="py-12 relative">
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="container relative z-10 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight hover:text-primary transition-colors"
            >
              {portfolioData.logoText}
            </Link>
            <span className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} {portfolioData.name}. All rights
              reserved.
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
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
