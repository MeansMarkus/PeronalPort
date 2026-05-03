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
    title: "Watchly",
    description:
      "Full-stack movie recommendation platform built around TMDB data, secure auth, and a PostgreSQL-backed pipeline for personalized watchlists.",
    techStack: ["Python", "Flask", "TMDB API", "Firebase Auth", "PostgreSQL", "Railway"],
    githubUrl: "https://github.com/MeansMarkus/MoviePicker",
    image: "/images/projects/watchly.png",
  },
  {
    title: "Japanese AI Tutor",
    description:
      "AI-powered language learning platform with adaptive conversation practice, spaced repetition, OpenAI GPT-3.5 Turbo integration, and a T5-based translation pipeline.",
    techStack: ["Python", "SQL", "PyTorch", "Transformers (T5)", "OpenAI API", "Streamlit"],
    githubUrl: "https://github.com/MeansMarkus/AI-ML-Japanese-Tutor",
    image: "/images/projects/japtutor.png",
  },
];

// ─── Skills ────────────────────────────────────────────────────
export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: "code",
    skills: ["Python", "Java", "C++", "JavaScript", "SQL", "HTML/CSS"],
  },
  {
    title: "Machine Learning / AI",
    icon: "layers",
    skills: [
      "PyTorch",
      "Transformers (T5)",
      "OpenAI API",
      "Model Fine-tuning",
      "LLM Integration",
      "Streamlit",
    ],
  },
  {
    title: "Web & Backend",
    icon: "wrench",
    skills: [
      "Flask",
      "Node.js",
      "REST APIs",
      "Firebase Authentication",
      "PostgreSQL",
      "Vercel",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: "database",
    skills: ["Git", "Docker", "CI/CD Pipelines", "Railway", "Linux", "Firebase"],
  },
  {
    title: "Data & Deployment",
    icon: "cloud",
    skills: ["PostgreSQL", "OpenStreetMap API", "TMDB API", "Vercel", "Railway", "GitHub Actions"],
  },
];

// ─── Experience ────────────────────────────────────────────────
export const experiences: Experience[] = [
  {
    role: "Software Developer Intern",
    company: "AVO LLC",
    period: "Jun 2025 — Dec 2025",
    description:
      "Worked on backend and deployment workflows for a property-measurement pipeline and customer quote automation.",
    achievements: [
      "Spearheaded a website revitalization that cut customer quote turnaround time by ~50% through engineering and automation",
      "Designed and deployed an OpenStreetMap API pipeline with a PostgreSQL backend to compute property measurements and dynamic cost estimates in real time",
      "Owned the project lifecycle from requirements gathering through Vercel deployment while coordinating with stakeholders to meet delivery milestones",
    ],
  },
  {
    role: "Operations Foreman",
    company: "Moore Girls Softball Association",
    period: "Aug 2020 — Oct 2024",
    description:
      "Managed athletic facilities and event operations supporting large seasonal schedules and volunteer coordination.",
    achievements: [
      "Supported 300+ games annually while coordinating scheduling, logistics, and quality control across multiple simultaneous events",
      "Built a reputation for consistent ownership, reliability, and judgment over a 4-year tenure",
      "Developed leadership, time management, and cross-functional coordination skills in a high-pressure environment",
    ],
  },
  {
    role: "Director of Technology",
    company: "Tau Kappa Omega Fraternity",
    period: "2025 — Present",
    description:
      "Architecting and maintaining chapter technology infrastructure for a 50+ member organization.",
    achievements: [
      "Migrated the chapter to a more modern internal tooling setup and improved communication efficiency",
      "Managed onboarding, deployment, and member support while reducing administrative overhead",
      "Maintained dependable infrastructure for chapter-wide technology operations",
    ],
  },
  {
    role: "Competitive Programmer",
    company: "ICPC Competitive Programming Club",
    period: "2025 — Present",
    description:
      "Practice-focused role centered on advanced algorithms, data structures, and contest preparation.",
    achievements: [
      "Regularly solve problems involving segment trees, tries, union-find, Dijkstra, BFS/DFS, and topological sorting",
      "Strengthened algorithmic thinking through team-based contest practice and peer review",
    ],
  },
  {
    role: "Volunteer",
    company: "Courage League",
    period: "2017 — Present",
    description:
      "Community outreach and event support for a special needs baseball league.",
    achievements: [
      "Volunteered in outreach programs supporting players, families, and event operations",
      "Coordinated activities, fundraising, and logistics with teammates and organizers",
    ],
  },
];