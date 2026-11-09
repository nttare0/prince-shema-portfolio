import { useState } from 'react';
import {
  ArrowDown, ArrowUpRight, ArrowRight, Copy, Check, Github, Mail, Globe, Star, ExternalLink,
} from 'lucide-react';

/* ─────────────────────────────────────────────────────────────
   ALL CONTENT BELOW IS FROM PUBLIC GITHUB DATA — @nttare0
   (api.github.com/users/nttare0, fetched 2026-11-09).
   Repository list = the 22 non-fork repos on the account.
   ───────────────────────────────────────────────────────────── */

const PROFILE = {
  name: 'Ntare Shema Prince',
  login: 'nttare0',
  company: 'nttare',
  blog: 'nttare0.netlify.app',
  blogUrl: 'https://nttare0.netlify.app',
  location: 'Rwanda',
  email: 'nttare0@gmail.com',
  hireable: true,
  publicRepos: 32,
  originalRepos: 22,
  forks: 10,
  followers: 2,
  createdAt: '2025-07-21',
  github: 'https://github.com/nttare0',
  avatar: 'https://avatars.githubusercontent.com/u/222118693?v=4',
};

const LANG_COLOR: Record<string, string> = {
  TypeScript: '#3178c6',
  Kotlin: '#A97BFF',
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  CSS: '#563d7c',
};

type Repo = { name: string; lang: keyof typeof LANG_COLOR | null; stars: number; updated: string; desc?: string };

const ALL_REPOS: Repo[] = [
  { name: 'document1', lang: 'TypeScript', stars: 2, updated: 'Nov 2026' },
  { name: '123', lang: 'TypeScript', stars: 2, updated: 'Nov 2026' },
  { name: 'nttare0', lang: null, stars: 2, updated: 'Nov 2026' },
  { name: 'nasa12', lang: 'CSS', stars: 2, updated: 'Nov 2026' },
  { name: 'skill', lang: 'Python', stars: 2, updated: 'Oct 2026' },
  { name: 'konet-vision-reality', lang: 'TypeScript', stars: 2, updated: 'Oct 2026' },
  { name: 'tool-kit', lang: 'TypeScript', stars: 1, updated: 'Nov 2026' },
  { name: 'hygen-QR-code-app', lang: 'Kotlin', stars: 1, updated: 'Nov 2026', desc: 'qr code' },
  { name: 'chat0', lang: 'Kotlin', stars: 1, updated: 'Nov 2026', desc: 'chat app' },
  { name: 'note', lang: 'Kotlin', stars: 1, updated: 'Nov 2026', desc: 'txt.note' },
  { name: 'all-', lang: 'JavaScript', stars: 1, updated: 'Nov 2026' },
  { name: '-mark2.1', lang: null, stars: 1, updated: 'Nov 2026' },
  { name: 'static-link', lang: null, stars: 0, updated: 'Nov 2026' },
  { name: 'tiny-office', lang: 'TypeScript', stars: 0, updated: 'Nov 2026' },
  { name: 'stream12', lang: 'TypeScript', stars: 0, updated: 'Nov 2026' },
  { name: 'doc1', lang: 'TypeScript', stars: 1, updated: 'Oct 2026' },
  { name: 'nexs', lang: null, stars: 1, updated: 'Oct 2026' },
  { name: 'playground', lang: 'TypeScript', stars: 1, updated: 'Oct 2026' },
  { name: 'mark2-ai-system', lang: 'TypeScript', stars: 1, updated: 'Oct 2026' },
  { name: 'zeolf-', lang: 'TypeScript', stars: 1, updated: 'Oct 2026' },
  { name: 'Zeolf.DB', lang: 'TypeScript', stars: 1, updated: 'Oct 2026' },
  { name: 'prince-shema-portfolio', lang: 'TypeScript', stars: 1, updated: 'Oct 2026', desc: 'this site' },
];

const FEATURED = [
  { name: 'droptv', repo: '123', live: 'https://droptv.vercel.app', lang: 'TypeScript' as const, stars: 2, updated: 'Nov 2026' },
  { name: 'tiny-office', repo: 'tiny-office', live: 'https://tiny-office-smoky.vercel.app', lang: 'TypeScript' as const, stars: 0, updated: 'Nov 2026' },
  { name: 'stream12', repo: 'stream12', live: 'https://stream12-sand.vercel.app', lang: 'TypeScript' as const, stars: 0, updated: 'Nov 2026' },
  { name: 'static-link', repo: 'static-link', live: 'https://linknest-nttare.vercel.app', lang: null, stars: 0, updated: 'Nov 2026' },
  { name: 'document1', repo: 'document1', live: null, lang: 'TypeScript' as const, stars: 2, updated: 'Nov 2026' },
  { name: 'skill', repo: 'skill', live: null, lang: 'Python' as const, stars: 2, updated: 'Oct 2026' },
];

const LANGS = [
  { name: 'TypeScript', count: 13 },
  { name: 'Kotlin', count: 3 },
  { name: 'JavaScript', count: 1 },
  { name: 'Python', count: 1 },
  { name: 'CSS', count: 1 },
];

const editorLines: React.ReactNode[] = [
  <><span className="gp-p">{'{'}</span></>,
  <>  <span className="gp-k">"name"</span><span className="gp-p">:</span> <span className="gp-s">"Ntare Shema Prince"</span><span className="gp-p">,</span></>,
  <>  <span className="gp-k">"handle"</span><span className="gp-p">:</span> <span className="gp-s">"nttare0"</span><span className="gp-p">,</span></>,
  <>  <span className="gp-k">"role"</span><span className="gp-p">:</span> <span className="gp-s">"Software Engineer"</span><span className="gp-p">,</span></>,
  <>  <span className="gp-k">"location"</span><span className="gp-p">:</span> <span className="gp-s">"Rwanda"</span><span className="gp-p">,</span></>,
  <>  <span className="gp-k">"company"</span><span className="gp-p">:</span> <span className="gp-s">"nttare"</span><span className="gp-p">,</span></>,
  <>  <span className="gp-k">"hireable"</span><span className="gp-p">:</span> <span className="gp-b">true</span><span className="gp-p">,</span></>,
  <>  <span className="gp-k">"email"</span><span className="gp-p">:</span> <span className="gp-s">"nttare0@gmail.com"</span><span className="gp-p">,</span></>,
  <>  <span className="gp-k">"blog"</span><span className="gp-p">:</span> <span className="gp-s">"nttare0.netlify.app"</span><span className="gp-p">,</span></>,
  <>  <span className="gp-k">"public_repos"</span><span className="gp-p">:</span> <span className="gp-b">32</span><span className="gp-p">,</span></>,
  <>  <span className="gp-k">"original_projects"</span><span className="gp-p">:</span> <span className="gp-b">22</span><span className="gp-p">,</span></>,
  <>  <span className="gp-k">"top_language"</span><span className="gp-p">:</span> <span className="gp-s">"TypeScript"</span><span className="gp-p">,</span></>,
  <>  <span className="gp-k">"on_github_since"</span><span className="gp-p">:</span> <span className="gp-s">"2025-07"</span></>,
  <><span className="gp-p">{'}'}</span> <span className="gp-caret" /></>,
];

const repoUrl = (name: string) => `https://github.com/nttare0/${name}`;

function CopyEmail() {
  const [copied, setCopied] = useState(false);
  return (
    <button
      className="gp-copy-btn"
      onClick={() => {
        navigator.clipboard?.writeText(PROFILE.email);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1600);
      }}
      aria-label="Copy email address"
    >
      {copied ? <><Check size={11} style={{ display: 'inline' }} /> copied</> : <><Copy size={11} style={{ display: 'inline' }} /> copy</>}
    </button>
  );
}

export default function GitHubPortfolio() {
  return (
    <main className="gp-root">
      {/* ── Nav ─────────────────────────────────────────── */}
      <header className="gp-nav">
        <a className="gp-nav-logo" href="#top"><em>~/</em>nttare0</a>
        <nav className="gp-nav-links">
          <a href="#facts">About</a>
          <a href="#work">Work</a>
          <a href="#repos">Repos</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="gp-nav-gh" href={PROFILE.github} target="_blank" rel="noreferrer">
          <Github size={13} /> @nttare0
        </a>
      </header>

      {/* ── Hero ────────────────────────────────────────── */}
      <section id="top" className="gp-hero">
        <div>
          <span className="gp-kicker"><span className="gp-kicker-dot" /> hireable on github</span>
          <h1 className="gp-display">
            <span className="l1">Ntare</span><br />
            <span className="l2">Shema</span><br />
            <span className="l3">Prince.</span>
          </h1>
          <p className="gp-mission">I build things for the web.</p>
          <p className="gp-sub">
            Software engineer in <strong>Rwanda</strong> building for the web. No résumé fluff here —
            everything below is pulled straight from my GitHub:{' '}
            <code>gh api users/nttare0</code>,{' '}
            <a href={PROFILE.github} target="_blank" rel="noreferrer">github.com/nttare0</a>.
          </p>
          <div className="gp-cta-row">
            <a className="gp-btn" href="#work">View the work <ArrowDown size={14} /></a>
            <a className="gp-btn-ghost" href={`mailto:${PROFILE.email}`}>Email me <ArrowRight size={14} /></a>
          </div>
          <div className="gp-socials">
            <a href={PROFILE.github} target="_blank" rel="noreferrer"><Github size={13} /> GitHub</a>
            <a href={PROFILE.blogUrl} target="_blank" rel="noreferrer"><Globe size={13} /> Blog</a>
            <a href={`mailto:${PROFILE.email}`}><Mail size={13} /> Email</a>
          </div>
        </div>

        {/* Code editor — prince.json, straight from the GitHub API */}
        <div className="gp-editor" aria-label="GitHub profile as JSON">
          <div className="gp-editor-bar">
            <div className="gp-dots"><span className="gp-dot gp-dot-r" /><span className="gp-dot gp-dot-y" /><span className="gp-dot gp-dot-g" /></div>
            <span className="gp-tab"><em>prince</em>.json — ~/</span>
          </div>
          <div className="gp-editor-body">
            {editorLines.map((line, i) => (
              <div className="gp-line" key={i}>
                <span className="gp-ln">{i + 1}</span>
                <span>{line}</span>
              </div>
            ))}
          </div>
          <div className="gp-editor-status">
            <span>main* · json · utf-8</span>
            <span><em>✓</em> fetched via GitHub API — nov 2026</span>
          </div>
        </div>
      </section>

      {/* ── Stats strip ─────────────────────────────────── */}
      <div className="gp-stats" aria-label="GitHub statistics">
        <div className="gp-stat"><span className="gp-stat-num">32</span><span className="gp-stat-key">Public repos</span></div>
        <div className="gp-stat"><span className="gp-stat-num">22<em>/32</em></span><span className="gp-stat-key">Original projects (10 forks studied)</span></div>
        <div className="gp-stat"><span className="gp-stat-num">13<em> TS</em></span><span className="gp-stat-key">Repos in TypeScript</span></div>
        <div className="gp-stat"><span className="gp-stat-num">Jul<em> ’25</em></span><span className="gp-stat-key">On GitHub since</span></div>
      </div>

      {/* ── Fun facts (Annie pattern) ───────────────────── */}
      <section id="facts" className="gp-section">
        <p className="gp-label">01 — A few facts from the profile</p>
        <div className="gp-facts">
          {[
            ['Hireable, flagged on GitHub', <>The green dot on my profile is real — <em>I’m open to roles and freelance work</em>.</>],
            ['Ships live demos', <>Four projects currently deployed on Vercel — including <code>droptv.vercel.app</code>.</>],
            ['TypeScript native', <>13 of my 19 repos with a detected language are <em>TypeScript</em>; the rest in Kotlin, Python, JS &amp; CSS.</>],
            ['Android too', <><code>chat0</code>, <code>note</code> and <code>hygen-QR-code-app</code> are native <em>Kotlin</em> apps.</>],
            ['Public by default', <>Public email, public work, public blog — <code>nttare0.netlify.app</code>.</>],
            ['Joined Jul 2025', <>Two followers and counting. <em>Everyone starts at zero</em> — the graph only goes up.</>],
          ].map(([title, body], i) => (
            <div className="gp-fact" key={i}>
              <span className="gp-fact-num">0{i + 1} /</span>
              <p><strong>{title}.</strong><br />{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Selected work ───────────────────────────────── */}
      <section id="work" className="gp-section">
        <p className="gp-label">02 — Selected work · live on the internet</p>
        <div className="gp-work">
          {FEATURED.map((p) => (
            <article className="gp-card" key={p.repo}>
              <div className="gp-card-top">
                {p.live ? <span className="gp-live">Live</span> : <span>On GitHub</span>}
                <span><Star size={11} style={{ display: 'inline', verticalAlign: '-1px' }} /> {p.stars}</span>
              </div>
              <h3>{p.name}</h3>
              <p className="gp-card-host">{p.live ? new URL(p.live).host : `github.com/nttare0/${p.repo}`}</p>
              <p className="gp-card-meta">{p.lang ?? 'No language detected'} · updated {p.updated}</p>
              <div className="gp-card-links">
                {p.live && <a href={p.live} target="_blank" rel="noreferrer">Live <ExternalLink size={11} /></a>}
                <a href={repoUrl(p.repo)} target="_blank" rel="noreferrer">Code <ArrowUpRight size={11} /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── All repositories ────────────────────────────── */}
      <section id="repos" className="gp-section">
        <p className="gp-label">03 — Every original repo · {ALL_REPOS.length} non-fork projects</p>
        <div className="gp-table-wrap">
          <table className="gp-table">
            <thead>
              <tr>
                <th>Repository</th>
                <th>Language</th>
                <th className="r">Stars</th>
                <th className="r hide-sm">Updated</th>
                <th className="r" aria-label="open" />
              </tr>
            </thead>
            <tbody>
              {ALL_REPOS.map((r) => (
                <tr key={r.name}>
                  <td>
                    <a href={repoUrl(r.name)} target="_blank" rel="noreferrer">{r.name}</a>
                    {r.desc && <span style={{ color: 'var(--gh-muted)' }}> — {r.desc}</span>}
                  </td>
                  <td>
                    {r.lang
                      ? <><span className="gp-tdot" style={{ background: LANG_COLOR[r.lang] }} />{r.lang}</>
                      : <span style={{ color: 'var(--gh-muted)' }}>—</span>}
                  </td>
                  <td className="r">{r.stars > 0 ? `★ ${r.stars}` : '·'}</td>
                  <td className="r hide-sm" style={{ color: 'var(--gh-muted)' }}>{r.updated}</td>
                  <td className="r"><a href={repoUrl(r.name)} target="_blank" rel="noreferrer" aria-label={`Open ${r.name}`}><ArrowUpRight size={13} /></a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="gp-table-note">Sorted by stars, then recency · 10 forked repos (dyad, ollama, evershop, build-your-own-x…) excluded · via GitHub API, Nov 2026</p>
      </section>

      {/* ── Languages ───────────────────────────────────── */}
      <section id="languages" className="gp-section">
        <p className="gp-label">04 — Languages I actually use · from repo data</p>
        <div className="gp-langs">
          {LANGS.map((l) => (
            <div className="gp-lang-row" key={l.name}>
              <span className="gp-lang-name"><span className="gp-tdot" style={{ background: LANG_COLOR[l.name], width: '0.7rem', height: '0.7rem' }} />{l.name}</span>
              <span className="gp-lang-track"><span className="gp-lang-fill" style={{ width: `${(l.count / LANGS[0].count) * 100}%`, background: LANG_COLOR[l.name] }} /></span>
              <span className="gp-lang-count">{l.count} repo{l.count === 1 ? '' : 's'}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Marquee ─────────────────────────────────────── */}
      <div className="gp-marquee" aria-hidden="true">
        <div className="gp-marquee-track">
          {[...LANGS.map(l => l.name), ...LANGS.map(l => l.name)].map((t, i) => (
            <span className="gp-marquee-item" key={i}>{t}<span className="gp-marquee-dot" /></span>
          ))}
        </div>
      </div>

      {/* ── Contact terminal ────────────────────────────── */}
      <section id="contact" className="gp-section">
        <p className="gp-label">05 — Say hello</p>
        <div className="gp-contact-grid">
          <div>
            <h2 className="gp-contact-title">Let’s build<br /><em>together.</em></h2>
            <p className="gp-contact-sub">
              Flagged hireable on GitHub, based in Rwanda, working in web and mobile.
              Fastest route to me is email — I read everything.
            </p>
          </div>
          <div className="gp-terminal" aria-label="Contact terminal">
            <div className="gp-editor-bar">
              <div className="gp-dots"><span className="gp-dot gp-dot-r" /><span className="gp-dot gp-dot-y" /><span className="gp-dot gp-dot-g" /></div>
              <span className="gp-tab"><em>contact</em> — zsh</span>
            </div>
            <div className="gp-terminal-body">
              <div className="gp-term-line"><span className="gp-term-prompt">➜</span><span>gh api users/nttare0 --jq .email</span><CopyEmail /></div>
              <div className="gp-term-out">"<b>nttare0@gmail.com</b>"</div>
              <div className="gp-term-line" style={{ marginTop: '0.5rem' }}><span className="gp-term-prompt">➜</span><span>open github.com/nttare0</span><a href={PROFILE.github} target="_blank" rel="noreferrer" className="gp-copy-btn" style={{ marginLeft: 'auto' }}>open <ArrowUpRight size={11} style={{ display: 'inline' }} /></a></div>
              <div className="gp-term-out">32 public repos · <b>22 original</b> · hireable: <b>true</b></div>
              <div className="gp-term-line" style={{ marginTop: '0.5rem' }}><span className="gp-term-prompt">➜</span><span>open {PROFILE.blog}</span><a href={PROFILE.blogUrl} target="_blank" rel="noreferrer" className="gp-copy-btn" style={{ marginLeft: 'auto' }}>open <ArrowUpRight size={11} style={{ display: 'inline' }} /></a></div>
              <div className="gp-term-out"><b>{PROFILE.blog}</b> — blog</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────── */}
      <footer className="gp-footer">
        <span>© {new Date().getFullYear()} {PROFILE.name}</span>
        <span><a href={PROFILE.github} target="_blank" rel="noreferrer">github.com/{PROFILE.login}</a></span>
        <span>Built with React &amp; Tailwind · Data via GitHub API · <a href="https://github.com/nttare0/prince-shema-portfolio" target="_blank" rel="noreferrer">source</a></span>
      </footer>
    </main>
  );
}
