"use client";

import { motion } from "framer-motion";
import { certifications, education, site, timeline } from "@/lib/site";
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
            I&apos;m {site.firstName}, an ML &amp; Agentic AI Engineer based in{" "}
            {site.location}. For the last three years my work has lived where a
            promising model becomes a dependable system — agentic workflows, RAG
            pipelines, and multimodal data platforms running in production.
          </p>
          <p>
            At AWS Bedrock I built multi-agent systems on LangGraph, engineered
            ETL pipelines for multimodal LLM training across text, image, audio
            and video, and designed the quality-assurance frameworks —
            LLM-as-judge, groundedness, hallucination and safety checks — that
            decide whether a model is fit to ship.
          </p>
          <p>
            I started in operational data at BPCL and large-scale market research
            at Ayvole, which is where I learned that the hard part is rarely the
            model: it&apos;s the pipeline, the evaluation, and the decision it
            has to support. I&apos;m open to Bangalore and global opportunities.
          </p>

          <div className="pt-2">
            <div className="text-xs font-medium uppercase tracking-widest text-[var(--fg)]">
              Education
            </div>
            {education.map((e) => (
              <div key={e.degree} className="mt-2">
                <div className="text-sm font-medium text-[var(--fg)]">
                  {e.degree}
                </div>
                <div className="text-xs">
                  {e.school} · {e.period} · {e.detail}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {[
              "AWS Educate — Cloud 101",
              "2 Years on Kaggle",
              "Data Analysis with Python",
              `${certifications.length} certifications`,
            ].map((chip) => (
              <span
                key={chip}
                className="glass rounded-full px-3 py-1 text-xs text-[var(--fg)]"
              >
                {chip}
              </span>
            ))}
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
