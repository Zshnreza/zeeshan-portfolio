"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Command,
  FileText,
  Github,
  Home,
  Linkedin,
  Mail,
  Moon,
  Search,
  Sun,
  User,
} from "lucide-react";
import { navItems, site } from "@/lib/site";
import { useTheme } from "@/components/providers/ThemeProvider";

type Item = {
  id: string;
  label: string;
  hint?: string;
  icon: React.ReactNode;
  action: () => void;
  keywords?: string;
};

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const { theme, toggle } = useTheme();

  const go = useCallback((href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.location.href = href;
  }, []);

  const openExternal = useCallback((url: string) => {
    setOpen(false);
    window.open(url, "_blank", "noopener,noreferrer");
  }, []);

  const items: Item[] = useMemo(
    () => [
      {
        id: "home",
        label: "Go to top",
        icon: <Home className="h-4 w-4" />,
        action: () => go("body"),
        keywords: "start hero home",
      },
      ...navItems.map((n) => ({
        id: n.href,
        label: `Go to ${n.label}`,
        icon: <User className="h-4 w-4" />,
        action: () => go(n.href),
        keywords: n.label,
      })),
      {
        id: "theme",
        label: `Switch to ${theme === "dark" ? "light" : "dark"} mode`,
        icon: theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />,
        action: () => {
          toggle();
          setOpen(false);
        },
        keywords: "theme dark light appearance",
      },
      {
        id: "resume",
        label: "Download résumé",
        hint: "PDF",
        icon: <FileText className="h-4 w-4" />,
        action: () => openExternal(site.resumeUrl),
        keywords: "cv resume download",
      },
      {
        id: "email",
        label: "Email me",
        hint: site.email,
        icon: <Mail className="h-4 w-4" />,
        action: () => openExternal(`mailto:${site.email}`),
        keywords: "contact email",
      },
      {
        id: "github",
        label: "GitHub",
        icon: <Github className="h-4 w-4" />,
        action: () => openExternal(site.socials.github),
        keywords: "code source github",
      },
      {
        id: "linkedin",
        label: "LinkedIn",
        icon: <Linkedin className="h-4 w-4" />,
        action: () => openExternal(site.socials.linkedin),
        keywords: "linkedin social",
      },
    ],
    [go, openExternal, theme, toggle]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((i) =>
      `${i.label} ${i.keywords ?? ""}`.toLowerCase().includes(q)
    );
  }, [items, query]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
      setTimeout(() => inputRef.current?.focus(), 40);
    }
  }, [open]);

  useEffect(() => setActive(0), [query]);

  const onListKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => (a + 1) % filtered.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => (a - 1 + filtered.length) % filtered.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      filtered[active]?.action();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-start justify-center px-4 pt-[14vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command menu"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            onKeyDown={onListKey}
            className="glass relative w-full max-w-xl overflow-hidden rounded-2xl shadow-2xl"
            style={{ background: "var(--bg-elev)" }}
          >
            <div className="flex items-center gap-3 border-b px-4">
              <Search className="h-4 w-4 text-muted" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search or jump to…"
                className="w-full bg-transparent py-4 text-sm outline-none placeholder:text-muted"
              />
              <kbd className="hidden rounded-md border px-1.5 py-0.5 text-[10px] text-muted sm:block">
                ESC
              </kbd>
            </div>
            <ul className="max-h-[52vh] overflow-y-auto p-2">
              {filtered.length === 0 && (
                <li className="px-3 py-8 text-center text-sm text-muted">
                  No results.
                </li>
              )}
              {filtered.map((item, i) => (
                <li key={item.id}>
                  <button
                    onMouseEnter={() => setActive(i)}
                    onClick={item.action}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors ${
                      i === active ? "bg-white/10" : "hover:bg-white/5"
                    }`}
                  >
                    <span className="text-muted">{item.icon}</span>
                    <span className="flex-1">{item.label}</span>
                    {item.hint && (
                      <span className="text-xs text-muted">{item.hint}</span>
                    )}
                    <ArrowUpRight
                      className={`h-3.5 w-3.5 text-muted transition-opacity ${
                        i === active ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between border-t px-4 py-2.5 text-[11px] text-muted">
              <span className="flex items-center gap-1">
                <Command className="h-3 w-3" /> Command menu
              </span>
              <span>↑↓ to navigate · ↵ to select</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
