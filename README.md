# ISHACK S — Developer Portfolio

Premium cyberpunk developer portfolio built with Next.js 16, TypeScript, and Tailwind CSS 4.

## Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 + Custom CSS design system
- **Fonts**: Space Grotesk + JetBrains Mono (via Google Fonts)
- **Icons**: Lucide React + Custom SVGs

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

---

## CV download

The configured CV PDF is available at `public/ISHACK-S-CV.pdf`. Download links
are shown in the navigation, contact section, and footer.

---

## 🗂️ File Structure

```
app/
  layout.tsx       — Root layout, fonts, metadata
  page.tsx         — Main page assembling all sections
  globals.css      — Design system: colors, fonts, animations

components/
  Navbar.tsx       — Fixed navigation bar
  Hero.tsx         — Hero section with orbital visualization
  About.tsx        — Profile and education section
  FeaturedProjects.tsx  — Top 3 projects with editorial cards
  ProjectArchive.tsx    — Additional project grid
  Skills.tsx       — Technical skills by category
  Achievements.tsx — Hackathon results + certifications
  Contact.tsx      — Contact links section
  Footer.tsx       — Site footer

lib/
  site-data.ts     — ⭐ Central content file — edit this to update all content

public/
  ISHACK-S-CV.pdf  — ← Place your CV PDF here
  favicon.ico
```

---

## ✏️ Updating Content

All portfolio content is centralized in [`lib/site-data.ts`](./lib/site-data.ts):

| What to update | Where |
|---|---|
| Name, email, GitHub, LinkedIn | `SITE_CONFIG` |
| CV PDF path | `SITE_CONFIG.cvPath` |
| Featured projects | `FEATURED_PROJECTS` |
| Additional projects | `ARCHIVE_PROJECTS` |
| Skills | `SKILLS` |
| Achievements | `ACHIEVEMENTS` |
| Certifications | `CERTIFICATIONS` |

---

## 🚀 Deploying to Vercel

### One-click deploy

1. Push the repo to GitHub
2. Visit [vercel.com/new](https://vercel.com/new) and import the repo
3. Vercel auto-detects Next.js — click **Deploy**

### Manual deploy

```bash
npm install -g vercel
vercel
```

**Before deploying:**
- Ensure `ISHACK-S-CV.pdf` is in `public/` (or set `cvPath: null`)
- Verify all project links in `lib/site-data.ts`
- Update the `url` field in `SITE_CONFIG` to your Vercel domain

---

## 📋 Content Verification Checklist

Before publishing, verify these items against your actual CV:

- [ ] CGPA: currently shown as 8.61/10.0
- [ ] Project repository URLs are accessible
- [ ] Achievement names and placements are accurate
- [ ] Certification names and issuers are correct
- [ ] Email and social links are correct
- [ ] LinkedIn URL is correct
- [ ] GitHub URL is correct

---

## Design System

The design system is defined in [`app/globals.css`](./app/globals.css):

| Token | Value |
|---|---|
| `--bg-main` | `#07090B` |
| `--accent-green` | `#A3FF65` |
| `--accent-violet` | `#9D8BFF` |
| `--text-primary` | `#F3F5F2` |
| `--text-secondary` | `#98A39D` |
| `--border-color` | `#29342D` |
| `--font-sans` | Space Grotesk |
| `--font-mono` | JetBrains Mono |
