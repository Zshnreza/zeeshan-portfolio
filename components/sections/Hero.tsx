"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import { heroKeywords, site, stats } from "@/lib/site";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { ParticleField } from "@/components/ui/ParticleField";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Counter } from "@/components/ui/Counter";

export function Hero() {
  const [kw, setKw] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setKw((k) => (k + 1) % heroKeywords.length),
      2200
    );
    return () => clearInterval(id);
  }, []);

  // Mouse parallax for the headline block.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), {
    stiffness: 120,
    damping: 20,
  });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), {
    stiffness: 120,
    damping: 20,
  });

  const onMove = (e: React.MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    mx.set(e.clientX / innerWidth - 0.5);
    my.set(e.clientY / innerHeight - 0.5);
  };

  return (
    <section
      onMouseMove={onMove}
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 pt-24"
    >
      <AuroraBackground />
      <ParticleField />

      <motion.div
        style={{ rotateX: rx, rotateY: ry, transformPerspective: 1200 }}
        className="relative z-10 flex max-w-4xl flex-col items-center text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="glass mb-7 flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-muted"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          {site.availability}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
          className="text-balance text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl"
        >
          <span className="text-gradient">Md Zeeshan Raza</span>
          <br />
          <span className="text-muted text-3xl font-normal sm:text-4xl md:text-5xl">
            builds intelligent systems with
          </span>
        </motion.h1>

        <div className="mt-4 flex h-[3.2rem] items-center justify-center sm:h-16">
          <AnimatePresence mode="wait">
            <motion.span
              key={heroKeywords[kw]}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="text-aurora text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            >
              {heroKeywords[kw]}
            </motion.span>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-7 max-w-xl text-pretty text-base text-muted sm:text-lg"
        >
          {site.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <MagneticButton
            href="#work"
            className="group relative items-center gap-2 overflow-hidden rounded-full bg-[var(--fg)] px-6 py-3.5 text-sm font-medium text-[var(--bg)] shadow-lg"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore my work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </MagneticButton>
          <MagneticButton
            href="#contact"
            className="glass items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-colors hover:bg-white/10"
          >
            <Sparkles className="h-4 w-4" />
            Let&apos;s talk
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-3 flex items-center gap-1.5 text-xs text-muted"
        >
          <MapPin className="h-3.5 w-3.5" />
          {site.location}
        </motion.div>
      </motion.div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.6 }}
        className="relative z-10 mt-16 grid w-full max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border md:grid-cols-4"
      >
        {stats.map((s) => (
          <div key={s.label} className="bg-elev px-5 py-6 text-center">
            <div className="text-2xl font-semibold tracking-tight sm:text-3xl">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-1 text-xs text-muted">{s.label}</div>
          </div>
        ))}
      </motion.div>

      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        <div className="flex h-9 w-5 items-start justify-center rounded-full border p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-[var(--fg)]"
          />
        </div>
      </div>
    </section>
  );
}
