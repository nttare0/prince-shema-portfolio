/**
 * Prince's portfolio data — sourced entirely from his public GitHub
 * profile (github.com/nttare0), fetched via `gh api users/nttare0`
 * on 2026-11-09. No personal data from any other source is used.
 */
import droptv from "./assets/droptv.png";
import tinyOffice from "./assets/tiny-office.png";
import stream12 from "./assets/stream12.png";
import staticLink from "./assets/static-link.png";
import document1 from "./assets/document1.png";
import skill from "./assets/skill.png";

export const projects = [
  {
    title: "droptv",
    link: "https://droptv.vercel.app",
    thumbnail: droptv,
  },
  {
    title: "tiny-office",
    link: "https://tiny-office-smoky.vercel.app",
    thumbnail: tinyOffice,
  },
  {
    title: "stream12",
    link: "https://stream12-sand.vercel.app",
    thumbnail: stream12,
  },
  {
    title: "static-link",
    link: "https://linknest-nttare.vercel.app",
    thumbnail: staticLink,
  },
  {
    title: "document1",
    link: "https://github.com/nttare0/document1",
    thumbnail: document1,
  },
  {
    title: "skill",
    link: "https://github.com/nttare0/skill",
    thumbnail: skill,
  },
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

// No employment history is published on GitHub — left intentionally empty.
export const workData: {
  logo: string;
  link: string;
  post: string;
  company: string;
  responsabilites: string[];
}[] = [];

export const technologies = [
  "TypeScript",
  "Kotlin",
  "JavaScript",
  "Python",
  "CSS",
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
