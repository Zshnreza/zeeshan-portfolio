import { projects } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function Projects() {
  return (
    <section id="work" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="Selected Work"
        title={
          <>
            Systems shipped to <span className="text-aurora">production.</span>
          </>
        }
        description="Each project is a full engineering story — architecture, tradeoffs, and measurable impact. Deep-dive case-study pages are coming online."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 3) * 0.06}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
