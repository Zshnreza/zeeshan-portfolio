"use client";

import { useEffect, useRef } from "react";
import { skillTags } from "@/lib/site";

type P = { x: number; y: number; z: number; label: string };

/** A rotating 3D tag sphere. Auto-spins; the cursor steers it. */
export function SkillSphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let size = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let radius = 0;
    let raf = 0;

    // Fibonacci-sphere distribution of the tags.
    const n = skillTags.length;
    const points: P[] = skillTags.map((label, i) => {
      const phi = Math.acos(-1 + (2 * i) / n);
      const theta = Math.sqrt(n * Math.PI) * phi;
      return {
        x: Math.cos(theta) * Math.sin(phi),
        y: Math.sin(theta) * Math.sin(phi),
        z: Math.cos(phi),
        label,
      };
    });

    let rotX = 0.3;
    let rotY = 0;
    let velX = -0.0016;
    let velY = 0.003;
    const target = { vx: -0.0016, vy: 0.003 };

    const fg = () =>
      getComputedStyle(document.documentElement).getPropertyValue("--fg").trim() ||
      "#ededf2";
    const accent = () =>
      getComputedStyle(document.documentElement)
        .getPropertyValue("--color-accent")
        .trim() || "#7c5cff";

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      size = Math.min(rect.width, rect.height);
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      radius = size * 0.36;
    };

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      const cx = rect.width / 2;
      const cy = rect.height / 2;

      rotX += velX;
      rotY += velY;
      velX += (target.vx - velX) * 0.05;
      velY += (target.vy - velY) * 0.05;

      const sinX = Math.sin(rotX);
      const cosX = Math.cos(rotX);
      const sinY = Math.sin(rotY);
      const cosY = Math.cos(rotY);

      const projected = points.map((p) => {
        // rotate around Y then X
        let x = p.x * cosY - p.z * sinY;
        let z = p.x * sinY + p.z * cosY;
        let y = p.y * cosX - z * sinX;
        z = p.y * sinX + z * cosX;
        const scale = (z + 2) / 3; // depth 0..1
        return {
          label: p.label,
          sx: cx + x * radius,
          sy: cy + y * radius,
          scale,
        };
      });

      projected.sort((a, b) => a.scale - b.scale);
      const fgColor = fg();
      const accentColor = accent();

      for (const p of projected) {
        const alpha = 0.25 + p.scale * 0.75;
        const fontSize = 11 + p.scale * 8;
        ctx.font = `${p.scale > 0.7 ? 600 : 400} ${fontSize}px var(--font-geist-sans), sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = p.scale > 0.82 ? accentColor : fgColor;
        ctx.globalAlpha = alpha;
        ctx.fillText(p.label, p.sx, p.sy);
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const dx = (e.clientX - (rect.left + rect.width / 2)) / rect.width;
      const dy = (e.clientY - (rect.top + rect.height / 2)) / rect.height;
      target.vy = dx * 0.02;
      target.vx = -dy * 0.02;
    };
    const onLeave = () => {
      target.vx = -0.0016;
      target.vy = 0.003;
    };

    resize();
    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);

    if (reduce) {
      velX = 0;
      velY = 0;
      target.vx = 0;
      target.vy = 0;
      draw();
      cancelAnimationFrame(raf);
    } else {
      raf = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-label="Interactive sphere of skills and technologies"
      role="img"
      className="h-[360px] w-full cursor-grab active:cursor-grabbing sm:h-[420px]"
    />
  );
}
