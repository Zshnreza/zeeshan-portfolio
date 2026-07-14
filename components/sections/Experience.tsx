"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { experiences } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-5xl px-6 py-28">
      <SectionHeading
        eyebrow="Experience"
        title={
          <>
            Where I&apos;ve made <span className="text-aurora">impact.</span>
          </>
        }
      />

      <div className="mt-14 space-y-4">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="glass group grid gap-6 rounded-3xl p-6 md:grid-cols-[0.8fr_1.4fr] md:p-8"
          >
            <div>
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--fg)] text-lg font-bold text-[var(--bg)]">
                  {exp.company[0]}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{exp.company}</h3>
                  <p className="text-xs text-muted">{exp.location}</p>
                </div>
              </div>
              <p className="mt-4 text-sm font-medium text-[var(--color-accent)]">
                {exp.role}
              </p>
              <p className="font-mono text-xs text-muted">{exp.period}</p>
              <p className="mt-3 text-sm text-muted">{exp.summary}</p>
            </div>

            <div>
              <ul className="space-y-3">
                {exp.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5 text-sm">
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent)]" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border px-2 py-0.5 text-[11px] text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
