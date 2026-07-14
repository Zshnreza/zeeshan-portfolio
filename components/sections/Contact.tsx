"use client";

import { Calendar, Download, Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { AuroraBackground } from "@/components/ui/AuroraBackground";

export function Contact() {
  const links = [
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: Linkedin, label: "LinkedIn", value: "Connect", href: site.socials.linkedin },
    { icon: Github, label: "GitHub", value: "Follow", href: site.socials.github },
    { icon: Calendar, label: "Calendly", value: "Book a call", href: site.socials.calendly },
  ];

  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] border p-10 text-center sm:p-16">
        <AuroraBackground className="opacity-80" />
        <div className="relative z-10">
          <SectionHeading
            align="center"
            eyebrow="Contact"
            title={
              <>
                Let&apos;s build something{" "}
                <span className="text-aurora">remarkable.</span>
              </>
            }
            description="I'm open to AI Engineer, ML Engineer, and Applied AI roles — worldwide remote, relocation, and visa sponsorship. Have a hard problem? I'd love to hear it."
          />

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <MagneticButton
              href={`mailto:${site.email}`}
              className="group items-center gap-2 rounded-full bg-[var(--fg)] px-6 py-3.5 text-sm font-medium text-[var(--bg)]"
            >
              <Mail className="h-4 w-4" />
              Say hello
            </MagneticButton>
            <MagneticButton
              href={site.resumeUrl}
              className="glass items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium hover:bg-white/10"
            >
              <Download className="h-4 w-4" />
              Download résumé
            </MagneticButton>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {links.map((link, i) => (
              <Reveal key={link.label} delay={i * 0.05}>
                <a
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="glass flex flex-col items-center gap-2 rounded-2xl p-4 transition-transform hover:-translate-y-1"
                >
                  <link.icon className="h-5 w-5 text-[var(--color-accent)]" />
                  <span className="text-xs font-medium">{link.label}</span>
                  <span className="text-[11px] text-muted">{link.value}</span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
