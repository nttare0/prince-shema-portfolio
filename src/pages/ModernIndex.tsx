import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, ArrowRight, ExternalLink, Code, Database, Globe, Smartphone, Cloud, GitBranch } from "lucide-react";
import ntareProfileImage from "@/assets/ntare-profile.jpg";

// === Helper data ===
const PROFILE = {
  name: "Ntare Shema Prince",
  title: "Software Engineer & Student",
  location: "Kabuga, Rwanda",
  phoneDisplay: "0790 824 205",
  phoneIntl: "+250790824205",
  email: "nttare0@gmail.com",
  pictureAlt: "Portrait of Ntare Shema Prince",
  summary:
    "Software engineer and student with 1–2 years' experience building responsive web apps, APIs, and UI components. Passionate about clean code, performance, and delightful UX.",
  socials: {
    github: "https://github.com/ntare-prince",
    linkedin: "https://www.linkedin.com/in/ntare-shema-prince-6a287035a",
    instagram: "https://www.instagram.com/ntare_shema_prince/",
    portfolio: "#projects",
  },
};

const EXPERIENCE = [
  {
    company: "Zeolf",
    sector: "Research & Technology",
    role: "Software Engineer",
    period: "2023 – Present",
    bullets: [
      "Developing innovative software solutions focused on research and technology advancement.",
      "Working with cutting-edge technologies to build scalable applications.",
      "Implemented data analytics dashboards and RESTful API endpoints.",
    ],
  },
  {
    company: "KONET",
    sector: "Construction",
    role: "Software Developer",
    period: "2022 – 2023",
    bullets: [
      "Implemented digital solutions for construction management systems.",
      "Streamlined processes and improved operational efficiency by 40%.",
      "Built responsive web applications using React and modern technologies.",
    ],
  },
  {
    company: "Freelance Projects",
    sector: "Various Industries",
    role: "Full‑Stack Developer",
    period: "2022 – Present",
    bullets: [
      "Delivered custom web applications for diverse clients across multiple industries.",
      "Specialized in modern React applications with TypeScript and Tailwind CSS.",
      "Implemented WhatsApp integrations and contact management systems.",
    ],
  },
];

const SKILLS = [
  { 
    group: "Frontend Development", 
    icon: <Globe className="w-5 h-5" />,
    items: ["React", "TypeScript", "JavaScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3"] 
  },
  { 
    group: "Backend Development", 
    icon: <Database className="w-5 h-5" />,
    items: ["Node.js", "Python", "Express.js", "MongoDB", "PostgreSQL", "REST APIs"] 
  },
  { 
    group: "Mobile Development", 
    icon: <Smartphone className="w-5 h-5" />,
    items: ["React Native", "Flutter", "Mobile UI/UX", "App Store Deployment"] 
  },
  { 
    group: "Cloud & DevOps", 
    icon: <Cloud className="w-5 h-5" />,
    items: ["AWS", "Firebase", "Docker", "CI/CD", "Git", "Linux"] 
  },
];


const PROJECTS = [
  {
    name: "Construction Management Platform",
    description:
      "Comprehensive web application for KONET to streamline construction project management, resource allocation, and progress tracking.",
    stack: ["React", "Node.js", "MongoDB", "Express.js", "Material-UI"],
    link: "#",
  },
  {
    name: "Research Data Analytics Tool",
    description:
      "Advanced analytics platform for Zeolf to process and visualize research data, enabling better decision-making and insights.",
    stack: ["Python", "React", "PostgreSQL", "D3.js", "FastAPI"],
    link: "#",
  },
  {
    name: "E-Commerce Mobile App",
    description:
      "Cross-platform mobile application for local businesses to sell products online with integrated payment systems.",
    stack: ["React Native", "Firebase", "Stripe API", "Node.js"],
    link: "#",
  },
];

// === Small avatar component ===
const Avatar = () => (
  <div className="relative w-28 h-28 rounded-2xl overflow-hidden ring-2 ring-white/50 shadow-xl">
    <img
      src={ntareProfileImage}
      alt={PROFILE.pictureAlt}
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 via-transparent to-indigo-500/20" />
  </div>
);

// === Smooth card wrapper ===
const HoverCard = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    whileHover={{ y: -4, scale: 1.01 }}
    transition={{ type: "spring", stiffness: 260, damping: 18 }}
    className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg p-5"
  >
    {children}
  </motion.div>
);

export default function ModernResumeSite() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const gradient = "bg-gradient-to-br from-[#0f172a] via-[#0b2a2f] to-[#0b132b]";
  const accentGrad = "bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!form.name.trim()) errs.name = "Your name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Valid email required";
    if (form.message.trim().length < 10) errs.message = "Please write at least 10 characters";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const text = encodeURIComponent(
      `Hello Ntare, I'm ${form.name} (${form.email}).\n\n${form.message}`
    );
    const url = `https://wa.me/${PROFILE.phoneIntl.replace("+", "")}?text=${text}`;
    window.open(url, "_blank");
  };

  const sectionTitle = (label: string) => (
    <div className="flex items-center gap-3 mb-6">
      <div className={`${accentGrad} h-1 w-10 rounded-full`} />
      <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-white">{label}</h2>
    </div>
  );

  const chip = (txt: string) => (
    <span key={txt} className="text-xs md:text-sm px-3 py-1 rounded-full border border-white/10 bg-white/5">
      {txt}
    </span>
  );

  return (
    <div className={`min-h-screen ${gradient} text-slate-200`}>
      {/* Decorative gradient orbs */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-24 -left-16 w-72 h-72 rounded-full blur-3xl opacity-30 bg-teal-500" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-25 bg-indigo-600" />
      </div>

      {/* NAV */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/5 border-b border-white/10">
        <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#top" className="text-sm font-bold tracking-wide flex items-center gap-2">
            <span className={`${accentGrad} bg-clip-text text-transparent`}>NSP</span>
            <span className="hidden sm:inline text-slate-300">Portfolio</span>
          </a>
          <ul className="flex items-center gap-4 text-sm">
            {[
              ["About", "#about"],
              ["Experience", "#experience"],
              ["Skills", "#skills"],
              ["Projects", "#projects"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  className="px-3 py-1 rounded-full hover:bg-white/10 transition focus:outline-none focus:ring-2 focus:ring-teal-400/60"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="max-w-6xl mx-auto px-4 pt-10 md:pt-16 pb-8">
        <div className="grid md:grid-cols-[auto,1fr] items-center gap-6">
          <Avatar />
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="text-2xl md:text-4xl font-extrabold tracking-tight text-white"
            >
              {PROFILE.name}
            </motion.h1>
            <p className="mt-2 text-sm md:text-base text-slate-300">
              {PROFILE.title}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs md:text-sm">
              <span className="inline-flex items-center gap-1"><MapPin size={16}/> {PROFILE.location}</span>
              <a href={`tel:${PROFILE.phoneIntl}`} className="inline-flex items-center gap-1 hover:underline">
                <Phone size={16}/> {PROFILE.phoneDisplay}
              </a>
              <a href={PROFILE.socials.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:underline"><Instagram size={16}/> Instagram</a>
              <a href={PROFILE.socials.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:underline"><Github size={16}/> GitHub</a>
              <a href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:underline"><Linkedin size={16}/> LinkedIn</a>
            </div>
            <p className="mt-5 max-w-2xl text-sm md:text-base text-slate-300/90">{PROFILE.summary}</p>
            <div className="mt-6">
              <a
                href="#projects"
                className={`${accentGrad} text-slate-900 font-semibold inline-flex items-center gap-2 px-5 py-2 rounded-xl shadow hover:brightness-95 transition`}
              >
                View Projects <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-8">
        {sectionTitle("About Me")}
        <HoverCard>
          <p className="leading-relaxed text-slate-300 text-sm md:text-base">
            I'm a passionate software engineer and student with a strong foundation in modern web technologies. 
            With 1-2 years of hands-on experience, I've had the privilege of working with diverse companies 
            ranging from construction to research & technology. I thrive on learning new technologies and 
            applying them to solve real-world problems. When I'm not coding, I enjoy exploring new technologies, 
            contributing to open-source projects, and connecting with fellow developers in the tech community.
          </p>
        </HoverCard>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="max-w-6xl mx-auto px-4 py-8">
        {sectionTitle("Experience")}
        <div className="grid md:grid-cols-2 gap-5">
          {EXPERIENCE.map((job) => (
            <HoverCard key={job.company}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">{job.company} <span className="text-slate-400 font-normal">· {job.sector}</span></h3>
                  <p className="text-sm text-slate-300">{job.role}</p>
                </div>
                <span className="text-xs text-slate-400">{job.period}</span>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-300 list-disc pl-5">
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </HoverCard>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="max-w-6xl mx-auto px-4 py-8">
        {sectionTitle("Skills")}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SKILLS.map((s) => (
            <HoverCard key={s.group}>
              <div className="flex items-center gap-3 mb-3">
                <div className={`${accentGrad} p-2 rounded-lg text-slate-900`}>
                  {s.icon}
                </div>
                <h4 className="font-semibold text-white">{s.group}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {s.items.map((item) => chip(item))}
              </div>
            </HoverCard>
          ))}
        </div>
      </section>


      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-4 py-8">
        {sectionTitle("Projects")}
        <div className="grid md:grid-cols-3 gap-5">
          {PROJECTS.map((p) => (
            <HoverCard key={p.name}>
              <div className="flex items-start justify-between">
                <h4 className="text-white font-semibold">{p.name}</h4>
                <a href={p.link} className="text-xs inline-flex items-center gap-1 hover:underline">
                  Visit <ExternalLink size={14} />
                </a>
              </div>
              <p className="mt-2 text-sm text-slate-300">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.stack.map((t) => chip(t))}
              </div>
            </HoverCard>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-10 md:py-16">
        {sectionTitle("Contact Ntare")}
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <HoverCard>
            <h4 className="text-white font-semibold mb-2">Get in touch</h4>
            <p className="text-sm text-slate-300 mb-4">
              Prefer WhatsApp? Message <span className="font-semibold">{PROFILE.phoneDisplay}</span> directly or use the form and it will open WhatsApp with your message.
            </p>
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="block text-xs mb-1">Your Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400/60"
                  placeholder="Jane Doe"
                />
                {errors.name && <p className="text-xs text-rose-300 mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-xs mb-1">Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400/60"
                  placeholder="you@example.com"
                />
                {errors.email && <p className="text-xs text-rose-300 mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-xs mb-1">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400/60"
                  placeholder="Tell me about your project..."
                />
                {errors.message && <p className="text-xs text-rose-300 mt-1">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className={`${accentGrad} text-slate-900 font-semibold inline-flex items-center gap-2 px-5 py-2 rounded-xl shadow hover:brightness-95 transition`}
              >
                Send via WhatsApp <ArrowRight size={18} />
              </button>
            </form>
          </HoverCard>

          <div className="space-y-4">
            <HoverCard>
              <h4 className="text-white font-semibold mb-2">Details</h4>
              <ul className="text-sm text-slate-300 space-y-2">
                <li className="flex items-center gap-2"><MapPin size={16}/> {PROFILE.location}</li>
                <li className="flex items-center gap-2"><Phone size={16}/> {PROFILE.phoneDisplay} ({PROFILE.phoneIntl})</li>
                <li className="flex items-center gap-2"><Mail size={16}/> {PROFILE.email}</li>
              </ul>
            </HoverCard>
            <HoverCard>
              <h4 className="text-white font-semibold mb-2">Availability</h4>
              <p className="text-sm text-slate-300">Open to internships, part-time roles, and freelance projects.</p>
            </HoverCard>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-6 text-xs text-slate-400 flex items-center justify-between">
          <span>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</span>
          <a href="#top" className="hover:underline">Back to top</a>
        </div>
      </footer>
    </div>
  );
}