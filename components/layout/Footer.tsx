import { Calendar, Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    { icon: Github, href: site.socials.github, label: "GitHub" },
    { icon: Linkedin, href: site.socials.linkedin, label: "LinkedIn" },
    { icon: Calendar, href: site.socials.calendly, label: "Book a call" },
    { icon: Mail, href: `mailto:${site.email}`, label: "Email" },
  ];

  return (
    <footer className="relative border-t px-6 py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-sm font-medium">{site.name}</p>
          <p className="text-xs text-muted">
            © {year} · Designed &amp; built with intent.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="glass grid h-10 w-10 place-items-center rounded-full text-muted transition-colors hover:text-[var(--fg)]"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
