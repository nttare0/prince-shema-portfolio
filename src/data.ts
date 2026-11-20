/**
 * nttare's portfolio data — sourced entirely from the public GitHub
 * profile (github.com/nttare0), fetched via `gh api users/nttare0`
 * on 2026-11-09. No personal data from any other source is used.
 */
import zeolfLogo from "./assets/zeolf.png";
import type { WorkExperience } from "./types";

export const projects = [
  { title: "load-bearing", link: "https://load-bearing-pi.vercel.app", repo: "Load-Bearing.", preview: "live" as const, lang: "TypeScript", stars: 0, updated: "Nov 20, 2026" },
  { title: "paper-style", link: "https://paper-style.vercel.app", repo: "paper-style", preview: "live" as const, lang: "TypeScript", stars: 1, updated: "Nov 19, 2026" },
  { title: "drop", link: "https://zepvi.vercel.app", repo: "123", preview: "live" as const, lang: "TypeScript", stars: 2, updated: "Nov 18, 2026" },
  { title: "indexroom", link: "https://indexroom-psi.vercel.app", repo: "all-my-creation", preview: "live" as const, lang: "JavaScript", stars: 1, updated: "Nov 18, 2026" },
  { title: "shool", link: "https://shool-dusky.vercel.app", repo: "shool", preview: "live" as const, lang: "JavaScript", stars: 0, updated: "Nov 15, 2026" },
  { title: "tiny-office", link: "https://tiny-office-smoky.vercel.app", repo: "tiny-office", preview: "live" as const, lang: "TypeScript", stars: 0, updated: "Nov 15, 2026" },
  { title: "stream12", link: "https://stream12-sand.vercel.app", repo: "stream12", preview: "live" as const, lang: "TypeScript", stars: 0, updated: "Nov 14, 2026" },
  { title: "screen-2-screen", link: "https://screen-2-screen.vercel.app", repo: "screen-2-screen", preview: "live" as const, lang: "Go", stars: 0, updated: "Nov 13, 2026" },
  { title: "saving-404", link: "https://saving-404.vercel.app", repo: "saving-404", preview: "live" as const, lang: "TypeScript", stars: 0, updated: "Nov 12, 2026" },
  { title: "linknest", link: "https://linknest-one-rosy.vercel.app", repo: "static-link", preview: "live" as const, lang: null, stars: 0, updated: "Nov 9, 2026" },
  { title: "document1", link: "https://github.com/nttare0/document1", repo: "document1", preview: "github" as const, lang: "TypeScript", stars: 2, updated: "Nov 2026" },
  { title: "skill", link: "https://github.com/nttare0/skill", repo: "skill", preview: "github" as const, lang: "Python", stars: 2, updated: "Oct 2026" },
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
  "Go",
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
