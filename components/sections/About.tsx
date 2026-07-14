"use client";

import { motion } from "framer-motion";
import { site, timeline } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-5xl px-6 py-28">
      <SectionHeading
        eyebrow="About"
        title={
          <>
            An engineer obsessed with{" "}
            <span className="text-aurora">systems that think.</span>
          </>
        }
        description="I turn frontier AI research into products that ship — reliable, fast, and grounded in real evaluation. From data pipelines to autonomous agents, I care about the whole stack."
      />

      <div className="mt-16 grid gap-12 md:grid-cols-[1fr_1.1fr]">
        {/* Narrative */}
        <Reveal className="space-y-5 text-pretty text-muted">
          <p>
            I&apos;m {site.firstName}, an AI Engineer based in {site.location}. My
            work lives at the intersection of large language models, agentic
            systems, and production machine learning — the messy space where a
            great model becomes a great product.
          </p>
          <p>
            I&apos;ve built retrieval pipelines over millions of documents,
            multi-agent frameworks that reason and self-correct, and evaluation
            harnesses that keep quality honest on every deploy. I care as much
            about latency budgets and cost curves as I do about model quality.
          </p>
          <p>
            Right now I&apos;m focused on autonomous agents — systems that plan,
            act, and recover on their own — and I&apos;m open to roles worldwide,
            including relocation and visa sponsorship.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {["Certified on AWS", "Kaggle competitor", "Open-source author"].map(
              (chip) => (
                <span
                  key={chip}
                  className="glass rounded-full px-3 py-1 text-xs text-[var(--fg)]"
                >
                  {chip}
                </span>
              )
            )}
          </div>
        </Reveal>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-accent-2)] to-transparent" />
          <ul className="space-y-8">
            {timeline.map((item, i) => (
              <motion.li
                key={item.year}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-8"
              >
                <span className="absolute left-0 top-1.5 grid h-4 w-4 place-items-center rounded-full bg-[var(--bg)]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-accent)] shadow-[0_0_12px_var(--color-accent)]" />
                </span>
                <div className="text-xs font-mono uppercase tracking-widest text-[var(--color-accent)]">
                  {item.year}
                </div>
                <div className="mt-1 text-lg font-semibold">{item.title}</div>
                <p className="mt-1 text-sm text-muted">{item.detail}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
