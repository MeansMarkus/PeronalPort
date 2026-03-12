import { Project, Experience, SkillCategory, NavLink } from "@/types";

// ─── Navigation ────────────────────────────────────────────────
export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

// ─── Projects ──────────────────────────────────────────────────
export const projects: Project[] = [
  {
    title: "CloudSync",
    description:
      "Real-time collaboration platform enabling teams to edit documents, share assets, and communicate seamlessly with sub-50ms latency.",
    techStack: ["Next.js", "Socket.io", "PostgreSQL", "Redis", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "DevMetrics",
    description:
      "Developer productivity analytics dashboard with custom visualizations, PR cycle-time tracking, and team performance insights.",
    techStack: ["React", "D3.js", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "SecureVault",
    description:
      "End-to-end encrypted file storage service with zero-knowledge architecture, client-side encryption, and granular sharing controls.",
    techStack: ["Go", "AWS S3", "React", "TypeScript", "Docker"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "AIAssist",
    description:
      "AI-powered code review tool that provides contextual suggestions, detects anti-patterns, and enforces team coding standards automatically.",
    techStack: ["Python", "FastAPI", "OpenAI", "React", "PostgreSQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "TradeFlow",
    description:
      "High-frequency algorithmic trading platform with real-time market data processing, backtesting engine, and risk management dashboards.",
    techStack: ["Rust", "WebSocket", "TimescaleDB", "React", "Docker"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "HealthTrack",
    description:
      "Cross-platform health & fitness tracking app with personalized insights, workout planning, and integration with wearable devices.",
    techStack: ["React Native", "Firebase", "Node.js", "Express", "Chart.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
];

// ─── Skills ────────────────────────────────────────────────────
export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: "code",
    skills: ["TypeScript", "JavaScript", "Python", "Java", "Go", "Rust"],
  },
  {
    title: "Frameworks",
    icon: "layers",
    skills: ["React", "Next.js", "Node.js", "Express", "Django", "FastAPI"],
  },
  {
    title: "Tools",
    icon: "wrench",
    skills: ["Git", "Docker", "VS Code", "Figma", "Postman", "Webpack"],
  },
  {
    title: "Databases",
    icon: "database",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Firebase", "MySQL", "SQLite"],
  },
  {
    title: "DevOps",
    icon: "cloud",
    skills: ["AWS", "GCP", "Vercel", "GitHub Actions", "Kubernetes", "Terraform"],
  },
];

// ─── Experience ────────────────────────────────────────────────
export const experiences: Experience[] = [
  {
    role: "Senior Software Engineer",
    company: "TechCorp",
    period: "2024 — Present",
    description:
      "Leading the frontend architecture team, building scalable design systems and micro-frontends.",
    achievements: [
      "Architected a component library used across 12 product teams, reducing UI development time by 40%",
      "Led migration from REST to GraphQL, improving API response times by 60%",
      "Mentored 5 junior engineers and established code review best practices",
      "Implemented CI/CD pipelines reducing deployment time from 45min to 8min",
    ],
  },
  {
    role: "Software Engineer",
    company: "StartupXYZ",
    period: "2022 — 2024",
    description:
      "Full-stack development for a B2B SaaS platform serving 10k+ enterprise users.",
    achievements: [
      "Built real-time collaboration features using WebSockets, serving 50k concurrent users",
      "Designed and implemented a multi-tenant authorization system with RBAC",
      "Reduced page load time by 70% through code splitting and lazy loading optimizations",
      "Shipped 3 major product features from ideation to production in under 6 months",
    ],
  },
  {
    role: "Junior Developer",
    company: "DevAgency",
    period: "2020 — 2022",
    description:
      "Developed client-facing web applications for startups and mid-size businesses.",
    achievements: [
      "Delivered 15+ client projects on time and within budget across diverse industries",
      "Introduced automated testing, achieving 85% code coverage across all projects",
      "Built reusable component templates that reduced project bootstrapping time by 50%",
      "Received 'Rising Star' award for exceptional performance in first year",
    ],
  },
];