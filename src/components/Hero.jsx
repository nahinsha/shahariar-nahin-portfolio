import { profile, PROFILE_IMAGE_URL, RESUME_URL } from "../data/content.js";
import EmailLink from "./EmailLink.jsx";
import { GithubIcon, LinkedinIcon, ArrowRightIcon } from "./icons.jsx";

const codeLines = [
  { n: 1, tokens: [["from django.db import models", "text"]] },
  { n: 2, tokens: [] },
  { n: 3, tokens: [["class ", "kw"], ["Developer", "class"], ["(models.Model):", "text"]] },
  { n: 4, tokens: [["    name", "prop"], [" = models.CharField(max_length=100)", "text"]] },
  { n: 5, tokens: [["    stack", "prop"], [" = [\"Python\", \"Django\", \"React\"]", "text"]] },
  { n: 6, tokens: [["    focus", "prop"], [" = \"Backend & Full-Stack\"", "text"]] },
  { n: 7, tokens: [] },
  { n: 8, tokens: [["    def ", "kw"], ["is_available", "fn"], ["(self):", "text"]] },
  { n: 9, tokens: [["        return ", "kw"], ["True", "bool"] ] },
];

const tokenClass = {
  kw: "text-teal",
  class: "text-amber",
  fn: "text-amber",
  prop: "text-paper-300",
  bool: "text-teal",
  text: "text-paper-500",
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden"
    >
      <div className="mx-auto max-w-content px-6 lg:px-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-10 items-center">
        {/* Left: text */}
        <div>
          <img
            src={PROFILE_IMAGE_URL}
            alt={profile.name}
            className="w-16 h-16 rounded-full object-cover border border-ink-border mb-5"
          />
          <p className="font-mono text-sm text-teal mb-4">Hello, I&apos;m</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-paper-100 leading-[1.1]">
            {profile.name}
          </h1>
          <h2 className="mt-4 text-lg sm:text-xl text-paper-300 font-medium">
            Python & Django Developer <span className="text-paper-500">|</span> React Developer
          </h2>
          <p className="mt-6 max-w-xl text-paper-500 leading-relaxed">
            Computer Science & Engineering graduate focused on building practical web
            applications using Python, Django, React, JavaScript, SQL, and REST APIs.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-amber px-5 py-3 text-sm font-medium text-ink-950 hover:bg-amber-soft transition-colors"
            >
              View Projects
              <ArrowRightIcon className="w-4 h-4" />
            </a>
            <EmailLink className="inline-flex items-center gap-2 rounded-md border border-ink-border px-5 py-3 text-sm font-medium text-paper-100 hover:border-teal hover:text-teal transition-colors">
              Email Me
            </EmailLink>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-ink-border px-5 py-3 text-sm font-medium text-paper-100 hover:border-teal hover:text-teal transition-colors"
            >
              View Resume
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-paper-500 hover:text-paper-100 transition-colors"
            >
              <GithubIcon className="w-4.5 h-4.5 w-[18px] h-[18px]" />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-paper-500 hover:text-paper-100 transition-colors"
            >
              <LinkedinIcon className="w-[18px] h-[18px]" />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right: code-editor style visual */}
        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-to-br from-teal/10 via-transparent to-amber/10 blur-2xl -z-10" />
          <div className="rounded-xl border border-ink-border bg-ink-800 shadow-2xl shadow-black/40 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-ink-border bg-ink-700/60">
              <span className="w-3 h-3 rounded-full bg-[#F87171]/70" />
              <span className="w-3 h-3 rounded-full bg-[#FBBF24]/70" />
              <span className="w-3 h-3 rounded-full bg-[#34D399]/70" />
              <span className="ml-3 font-mono text-xs text-paper-500">developer.py</span>
            </div>
            <pre className="p-5 font-mono text-[13px] leading-relaxed overflow-x-auto">
              {codeLines.map((line) => (
                <div key={line.n} className="flex">
                  <span className="w-6 shrink-0 select-none text-paper-500/40">{line.n}</span>
                  <span>
                    {line.tokens.length === 0
                      ? "\u00A0"
                      : line.tokens.map(([text, kind], i) => (
                          <span key={i} className={tokenClass[kind] || "text-paper-300"}>
                            {text}
                          </span>
                        ))}
                  </span>
                </div>
              ))}
              <div className="flex">
                <span className="w-6 shrink-0" />
                <span className="inline-block w-2 h-4 bg-amber animate-blink align-middle" />
              </div>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
