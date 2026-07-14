# Md Zeeshan Raza — AI Engineer Portfolio

A cinematic, production-grade portfolio built to feel like a product, not a résumé.
Next.js 15 · React 19 · TypeScript · Tailwind v4 · Framer Motion · Lenis.

![Portfolio](./app/opengraph-image.tsx)

---

## ✨ What's inside (Pass 1 — the core)

- **Cinematic hero** — animated aurora mesh gradients, a live interactive
  neural-network particle canvas (repels the cursor), mouse parallax, rotating
  AI keywords, and animated stat counters.
- **About** — narrative + an animated, glowing career timeline.
- **Skills** — an interactive **3D tag sphere** (canvas, cursor-steered) plus
  animated mastery bars grouped by domain.
- **Selected Work** — tilt-and-spotlight project cards with metrics and tags.
- **Experience** — Amazon · Ayvole · BPCL, with highlights and tech.
- **Contact** — aurora CTA card with email, LinkedIn, GitHub, Calendly, résumé.
- **Global craft** — glassmorphism, cursor glow, magnetic buttons, ⌘K command
  menu, scroll progress bar, Lenis smooth scrolling, dark/light theme (no FOUC),
  noise texture, reduced-motion support.
- **SEO / PWA** — dynamic metadata, JSON-LD (Person), sitemap, robots, web
  manifest, dynamically generated favicon + Open Graph image.

## 🧠 Editing your content

**All copy, links, projects, skills, experience, and metrics live in one file:**
[`lib/site.ts`](lib/site.ts).

The numbers and job details there are **realistic placeholders** — swap in your
real dates, metrics, GitHub/LinkedIn handles, and project write-ups. Also:

- Drop your CV at `public/resume.pdf` (the résumé buttons point to `/resume.pdf`).
- Update `site.url` and the social links in `lib/site.ts`.
- Set `NEXT_PUBLIC_SITE_URL` in `.env` (copy from `.env.example`).

## 🚀 Getting started

```bash
npm install
npm run dev          # http://localhost:3000
```

Other scripts:

```bash
npm run build        # production build
npm run start        # serve the production build
npm run typecheck    # tsc --noEmit
```

## 🗺️ Roadmap (upcoming passes)

These are scaffolded/planned and land in later passes:

- **AI Lab** — live "chat with my AI", PDF summariser, prompt runners
  (needs `OPENAI_API_KEY` / `ANTHROPIC_API_KEY`).
- **Contact form** — Resend-powered send (needs `RESEND_API_KEY`).
- **MDX blog** & long-form **case-study** project pages.
- **Live GitHub stats**, achievements/certifications, interactive globe.
- **Voice assistant**, background music, richer Three.js / Spline scenes.

Environment placeholders for all of the above are in [`.env.example`](.env.example).

## 📁 Structure

```
app/                 # routes, layout, metadata, sitemap/robots/manifest/OG
components/
  layout/            # Nav, Footer
  providers/         # ThemeProvider, SmoothScroll (Lenis)
  sections/          # Hero, About, Skills, Projects, Experience, Contact
  ui/                # CommandMenu, CursorGlow, MagneticButton, SkillSphere, …
lib/
  site.ts            # ← all editable content
  utils.ts
```

## 🛠️ Tech

Next.js 15 · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion · Lenis ·
lucide-react. Deploys cleanly to Vercel.

---

Built with intent. © Md Zeeshan Raza.
