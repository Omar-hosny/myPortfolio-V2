"use client";

import { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { 
  Search, 
  ArrowRight,
  User,
  FolderKanban,
  Wrench,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  Twitter
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "About", href: "#about", icon: User },
  { name: "Projects", href: "#projects", icon: FolderKanban },
  { name: "Skills", href: "#skills", icon: Wrench },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Contact", href: "#contact", icon: Mail },
];

const externalLinks = [
  { name: "GitHub", url: "https://github.com", icon: Github },
  { name: "LinkedIn", url: "https://linkedin.com", icon: Linkedin },
  { name: "Twitter", url: "https://twitter.com", icon: Twitter },
];

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const filteredNavItems = navItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const filteredExternalLinks = externalLinks.filter((link) =>
    link.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay asChild>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
          />
        </Dialog.Overlay>
        <Dialog.Content asChild>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed left-1/2 top-[20%] -translate-x-1/2 z-50 w-full max-w-lg"
          >
            <div className="rounded-2xl border bg-card shadow-2xl overflow-hidden">
              <div className="flex items-center border-b px-4">
                <Search className="w-5 h-5 text-muted-foreground mr-3" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="flex-1 bg-transparent py-4 outline-none placeholder:text-muted-foreground"
                  autoFocus
                />
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <kbd className="hidden sm:inline-flex h-5 items-center gap-1 rounded-md bg-secondary px-1.5 font-mono text-[10px] font-medium">
                    ESC
                  </kbd>
                </div>
              </div>

              <div className="max-h-[400px] overflow-y-auto p-2">
                {filteredNavItems.length > 0 && (
                  <div className="mb-2">
                    <p className="px-3 py-2 text-xs font-medium text-muted-foreground">
                      Navigation
                    </p>
                    {filteredNavItems.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => {
                          setOpen(false);
                          window.location.href = item.href;
                        }}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm hover:bg-secondary/50 transition-colors"
                      >
                        <item.icon className="w-4 h-4" />
                        {item.name}
                        <ArrowRight className="w-4 h-4 ml-auto opacity-50" />
                      </button>
                    ))}
                  </div>
                )}

                {filteredExternalLinks.length > 0 && (
                  <div>
                    <p className="px-3 py-2 text-xs font-medium text-muted-foreground">
                      Links
                    </p>
                    {filteredExternalLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setOpen(false)}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm hover:bg-secondary/50 transition-colors"
                      >
                        <link.icon className="w-4 h-4" />
                        {link.name}
                        <ArrowRight className="w-4 h-4 ml-auto opacity-50" />
                      </a>
                    ))}
                  </div>
                )}

                {filteredNavItems.length === 0 && filteredExternalLinks.length === 0 && (
                  <div className="py-12 text-center text-muted-foreground">
                    <p>No results found</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export function CommandMenuTrigger({ onOpen }: { onOpen: () => void }) {
  return (
    <Button
      variant="outline"
      className="relative h-9 w-full justify-start rounded-[0.5rem] sm:pr-12 md:w-40 lg:w-64 xl:w-full text-muted-foreground text-sm sm:text-base"
      onClick={onOpen}
    >
      <Search className="mr-2 h-4 w-4" />
      <span className="hidden lg:inline-flex">Search...</span>
      <span className="inline-flex lg:hidden">Search</span>
      <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded-md bg-secondary px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
        <span className="text-xs">⌘</span>K
      </kbd>
    </Button>
  );
}
