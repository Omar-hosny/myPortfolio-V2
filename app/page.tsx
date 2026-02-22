"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CommandMenu } from "@/components/CommandMenu";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [commandMenuOpen, setCommandMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar onOpenCommandMenu={() => setCommandMenuOpen(true)} />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>

      <Footer />

      <AnimatePresence>
        {commandMenuOpen && (
          <CommandMenu />
        )}
      </AnimatePresence>
    </div>
  );
}
