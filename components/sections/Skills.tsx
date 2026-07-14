"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SkillSphere } from "@/components/ui/SkillSphere";

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="Capabilities"
        title={
          <>
            A full-stack toolkit for{" "}
            <span className="text-aurora">production AI.</span>
          </>
        }
        description="From model internals to cloud infrastructure — grab the sphere and spin it."
      />

      <div className="mt-14 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="glass rounded-3xl p-2">
          <SkillSphere />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group, gi) => (
            <Reveal
              key={group.title}
              delay={gi * 0.05}
              className="glass rounded-2xl p-5"
            >
              <div className="mb-4 flex items-center gap-2">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ background: group.accent }}
                />
                <h3 className="text-sm font-semibold">{group.title}</h3>
              </div>
              <ul className="space-y-3">
                {group.skills.map((skill) => (
                  <li key={skill.name}>
                    <div className="mb-1 flex items-center justify-between text-xs">
                      <span className="text-muted">{skill.name}</span>
                      <span className="font-mono text-[10px] text-muted">
                        {skill.level}
                      </span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${group.accent}, color-mix(in oklab, ${group.accent} 40%, transparent))`,
                        }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
