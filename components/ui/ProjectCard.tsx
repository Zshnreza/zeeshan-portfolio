"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/lib/site";

export function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [7, -7]), {
    stiffness: 150,
    damping: 18,
  });
  const ry = useSpring(useTransform(mx, [0, 1], [-7, 7]), {
    stiffness: 150,
    damping: 18,
  });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };
  const reset = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      className="group relative"
    >
      <div
        className="glass relative flex h-full flex-col overflow-hidden rounded-3xl p-6"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Spotlight */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: useTransform(
              [mx, my],
              ([x, y]) =>
                `radial-gradient(320px circle at ${(x as number) * 100}% ${(y as number) * 100}%, color-mix(in oklab, ${project.accent} 22%, transparent), transparent 60%)`
            ),
          }}
        />

        <div className="relative flex items-start justify-between">
          <span
            className="rounded-full px-3 py-1 text-xs font-medium"
            style={{
              color: project.accent,
              background: `color-mix(in oklab, ${project.accent} 14%, transparent)`,
            }}
          >
            {project.category}
          </span>
          <div className="flex gap-1.5">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} on GitHub`}
                className="grid h-8 w-8 place-items-center rounded-full border text-muted transition-colors hover:text-[var(--fg)]"
              >
                <Github className="h-4 w-4" />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live demo`}
                className="grid h-8 w-8 place-items-center rounded-full border text-muted transition-colors hover:text-[var(--fg)]"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        <h3 className="relative mt-5 text-xl font-semibold tracking-tight">
          {project.title}
        </h3>
        <p className="relative mt-2 flex-1 text-sm text-muted">
          {project.summary}
        </p>

        <div className="relative mt-5 grid grid-cols-3 gap-2">
          {project.metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-xl border px-2.5 py-2 text-center"
            >
              <div className="text-sm font-semibold">{m.value}</div>
              <div className="mt-0.5 text-[10px] text-muted">{m.label}</div>
            </div>
          ))}
        </div>

        <div className="relative mt-5 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-md bg-white/5 px-2 py-0.5 text-[11px] text-muted"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="relative mt-6 flex items-center gap-1 text-sm font-medium text-[var(--fg)] opacity-60 transition-opacity group-hover:opacity-100">
          View case study
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </motion.div>
  );
}
