# ✨ Markus — Developer Portfolio

A world-class, minimal, modern portfolio website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, **shadcn/ui**, and **Framer Motion**. Inspired by Stripe, Vercel, and Linear design systems.

![Next.js](https://img.shields.io/badge/Next.js-14+-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff69b4?logo=framer)

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+
- **npm**, **yarn**, or **pnpm**

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/portfolio.git
cd portfolio

# Install dependencies
npm install

# Install Geist font (for the font files)
npm install geist

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## 🎨 Customization

All placeholder content is centralized in **`lib/data.ts`** — update it with your own:

| Field | File |
|-------|------|
| Projects | `lib/data.ts` → `projects` |
| Experience | `lib/data.ts` → `experiences` |
| Skills | `lib/data.ts` → `skillCategories` |
| Nav links | `lib/data.ts` → `navLinks` |
| Bio / About | `components/sections/about.tsx` |
| SEO metadata | `app/layout.tsx` → `metadata` |
| Social links | `components/sections/footer.tsx`, `navbar.tsx`, `contact.tsx` |
| Resume | Replace `public/resume.pdf` |

### Accent Color

Change the accent color in `tailwind.config.ts`:

```ts
colors: {
  accent: {
    DEFAULT: "hsl(250, 89%, 62%)",  // ← Change this
    light: "hsl(250, 89%, 72%)",
    dark: "hsl(250, 89%, 52%)",
  },
},
```

## 📁 Project Structure

```
app/
├── layout.tsx          # Root layout with fonts + SEO
├── page.tsx            # Main page assembling all sections
└── globals.css         # Tailwind + custom styles
components/
├── ui/                 # shadcn/ui primitives (Button, Card, Badge, Input, Textarea)
└── sections/           # Page sections (Navbar, Hero, About, Skills, Projects, etc.)
lib/
├── utils.ts            # cn() class merge utility
└── data.ts             # All portfolio content / placeholder data
hooks/
└── use-section-in-view.ts  # IntersectionObserver hook for animations
types/
└── index.ts            # TypeScript interfaces
public/
└── resume.pdf          # Resume download (add your own)
```

## ▲ Deploy to Vercel

The fastest way to deploy:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/portfolio)

Or manually:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 🏗 Tech Stack

| Technology | Purpose |
|-----------|---------|
| Next.js 14 | App Router, SSR, file-based routing |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling |
| shadcn/ui | Accessible UI primitives |
| Framer Motion | Smooth animations |
| Lucide Icons | Beautiful icon set |
| Geist Font | Clean typography |

## ✅ Performance Targets

- **Lighthouse Performance**: >95
- **Accessibility**: >95
- **SEO**: >95
- **Best Practices**: >95

## 📄 License

MIT License — feel free to use this as a template for your own portfolio.