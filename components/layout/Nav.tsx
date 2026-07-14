"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Command } from "lucide-react";
import { navItems, site } from "@/lib/site";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openCommand = () => {
    window.dispatchEvent(
      new KeyboardEvent("keydown", { key: "k", metaKey: true })
    );
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-4"
    >
      <nav
        className={cn(
          "flex w-full max-w-5xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500",
          scrolled ? "glass shadow-lg" : "bg-transparent"
        )}
      >
        <a href="#" className="group flex items-center gap-2.5 pl-1">
          <span className="relative grid h-8 w-8 place-items-center rounded-lg bg-[var(--color-accent)] text-sm font-bold text-white">
            Z
            <span className="absolute inset-0 rounded-lg bg-[var(--color-accent)] blur-md opacity-60 transition-opacity group-hover:opacity-90" />
          </span>
          <span className="text-sm font-semibold tracking-tight">
            {site.name}
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-1.5 text-sm text-muted transition-colors hover:bg-white/5 hover:text-[var(--fg)]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={openCommand}
            aria-label="Open command menu"
            className="glass hidden items-center gap-2 rounded-full px-3 py-2 text-xs text-muted transition-colors hover:text-[var(--fg)] sm:flex"
          >
            <Command className="h-3.5 w-3.5" />
            <span>K</span>
          </button>
          <ThemeToggle />
        </div>
      </nav>
    </motion.header>
  );
}
