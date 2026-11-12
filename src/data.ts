/**
 * nttare's portfolio data — sourced entirely from the public GitHub
 * profile (github.com/nttare0), fetched via `gh api users/nttare0`
 * on 2026-11-09. No personal data from any other source is used.
 */
import zeolfLogo from "./assets/zeolf.png";
import type { WorkExperience } from "./types";

export const projects = [
  { title: "droptv", link: "https://droptv.vercel.app", preview: "live" as const, lang: "TypeScript", stars: 2, updated: "Nov 2026" },
  { title: "tiny-office", link: "https://tiny-office-smoky.vercel.app", preview: "live" as const, lang: "TypeScript", stars: 0, updated: "Nov 2026" },
  { title: "stream12", link: "https://stream12-sand.vercel.app", preview: "live" as const, lang: "TypeScript", stars: 0, updated: "Nov 2026" },
  { title: "static-link", link: "https://linknest-nttare.vercel.app", preview: "live" as const, lang: null, stars: 0, updated: "Nov 2026" },
  { title: "document1", link: "https://github.com/nttare0/document1", preview: "github" as const, lang: "TypeScript", stars: 2, updated: "Nov 2026" },
  { title: "skill", link: "https://github.com/nttare0/skill", preview: "github" as const, lang: "Python", stars: 2, updated: "Oct 2026" },
];

export const navitems = [
  {
    alt: "GitHub",
    link: "https://github.com/nttare0",
    icon: "/icons/github.svg",
  },
  {
    alt: "Blog",
    link: "https://nttare0.netlify.app",
    icon: "/icons/globe.svg",
  },
  {
    alt: "Email",
    link: "mailto:nttare0@gmail.com",
    icon: "/icons/mail.svg",
  },
];

export const workData: WorkExperience[] = [
  {
    logo: zeolfLogo,
    link: "https://github.com/nttare0/Zeolf.DB",
    post: "Software Engineer",
    company: "Zeolf",
    responsabilites: [
      "Building the Zeolf platform — Zeolf.DB and zeolf- are public on GitHub",
    ],
  },
];

export const technologies = [
  "TypeScript",
  "Kotlin",
  "JavaScript",
  "Python",
  "CSS",
  "C++",
];

// No community posts are published on GitHub — left intentionally empty.
export const communityData: {
  title: string;
  date: string;
  description: string;
  img: string;
}[] = [];

// No testimonials exist — left intentionally empty.
export const feedbacks: {
  feedback: string;
  name: string;
  post: string;
}[] = [];
