"use client";
import React from "react";
import Link from "next/link";
import { Star, ExternalLink, Github } from "lucide-react";

export type Project = {
  title: string;
  link: string;
  /** "live" → interactive iframe preview of the deployed site; "github" → GitHub OG card */
  preview: "live" | "github";
  lang: string | null;
  stars: number;
  updated: string;
};

const LANG_COLOR: Record<string, string> = {
  TypeScript: "#3178c6",
  Kotlin: "#A97BFF",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  CSS: "#563d7c",
};

export const HeroParallax = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="antialiased relative flex flex-col py-16 lg:py-24 max-w-[90%] lg:max-w-6xl mx-auto w-full">
      <header className="text-center lg:text-start py-10 lg:px-1">
        <h1 className="text-4xl md:text-7xl font-bold text-white">
          Things I&apos;ve<br />shipped
        </h1>
        <p className="max-w-2xl text-base md:text-xl mt-6 text-neutral-200">
          Real, live previews of what I&apos;ve built — deployed on Vercel and
          open on my GitHub.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group rounded-2xl overflow-hidden border border-white/10 bg-neutral-950 flex flex-col transition-all duration-300 hover:border-green-400/40 hover:-translate-y-1.5 hover:shadow-[0_25px_60px_-20px_rgba(63,185,80,0.25)]"
          >
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${p.title}`}
              className="relative block aspect-[16/10] overflow-hidden bg-neutral-900 border-b border-white/10"
            >
              {p.preview === "live" ? (
                <iframe
                  src={p.link}
                  title={`${p.title} — live preview`}
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin"
                  className="absolute inset-0 w-full h-full border-0 pointer-events-none scale-[1.02]"
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={`https://opengraph.githubassets.com/1/nttare0/${p.title}`}
                  alt={`${p.title} repository on GitHub`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
              <span
                className={`absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[10px] tracking-widest uppercase backdrop-blur-md border ${
                  p.preview === "live"
                    ? "bg-black/60 text-green-400 border-green-400/30"
                    : "bg-black/60 text-sky-400 border-sky-400/30"
                }`}
              >
                {p.preview === "live" && (
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                )}
                {p.preview === "live" ? "Live" : "Repo"}
              </span>
            </a>

            <div className="p-4 flex flex-col gap-1.5 flex-1">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-white font-bold text-lg tracking-tight truncate">
                  {p.title}
                </h3>
                <span className="flex items-center gap-1 text-yellow-400 text-xs font-mono shrink-0">
                  <Star size={12} strokeWidth={2} /> {p.stars}
                </span>
              </div>
              <p className="text-neutral-500 text-[11px] font-mono flex items-center gap-2">
                {p.lang ? (
                  <>
                    <span
                      className="inline-block w-2.5 h-2.5 rounded-full"
                      style={{ background: LANG_COLOR[p.lang] ?? "#8b949e" }}
                    />
                    {p.lang}
                  </>
                ) : (
                  "no language detected"
                )}
                <span>·</span> updated {p.updated}
              </p>
              <div className="mt-auto pt-3 flex items-center justify-between">
                <a
                  href={`https://github.com/nttare0/${p.title}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11px] text-neutral-400 hover:text-white font-mono flex items-center gap-1.5 transition-colors"
                >
                  <Github size={12} /> code
                </a>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11px] text-green-400 hover:text-green-300 font-mono flex items-center gap-1.5 transition-colors"
                >
                  visit <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
