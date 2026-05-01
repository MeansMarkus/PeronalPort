/** Project data shape */
export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
}

/** Experience/timeline entry */
export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

/** Skill category */
export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

/** Navigation link */
export interface NavLink {
  label: string;
  href: string;
}

/** Social link */
export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}