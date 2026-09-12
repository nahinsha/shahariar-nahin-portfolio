import { profile } from "../data/content.js";
import EmailLink from "./EmailLink.jsx";
import Reveal from "./Reveal.jsx";
import { GithubIcon, LinkedinIcon, MailIcon } from "./icons.jsx";

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-28 border-t border-ink-border/60">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-paper-100 tracking-tight max-w-xl">
            Let&apos;s Build Something Together
          </h2>
          <p className="mt-4 max-w-xl text-paper-500 leading-relaxed">
            I&apos;m open to software development opportunities, internships,
            collaborations, and projects where I can contribute, learn, and grow.
          </p>
        </Reveal>

        <div className="mt-14 max-w-xl">
          {/* Contact info */}
          <Reveal delay={80}>
            <div className="space-y-4">
              <EmailLink className="flex items-center gap-4 rounded-lg border border-ink-border bg-ink-800/60 px-5 py-4 hover:border-amber/40 transition-colors group">
                <span className="w-10 h-10 rounded-md bg-amber/10 border border-amber/25 flex items-center justify-center text-amber shrink-0">
                  <MailIcon className="w-5 h-5" />
                </span>
                <span>
                  <span className="block font-mono text-xs text-paper-500">Email</span>
                  <span className="block text-sm text-paper-100 group-hover:text-amber transition-colors break-all">
                    {profile.email}
                  </span>
                </span>
              </EmailLink>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-lg border border-ink-border bg-ink-800/60 px-5 py-4 hover:border-teal/40 transition-colors group"
              >
                <span className="w-10 h-10 rounded-md bg-teal/10 border border-teal/25 flex items-center justify-center text-teal shrink-0">
                  <GithubIcon className="w-5 h-5" />
                </span>
                <span>
                  <span className="block font-mono text-xs text-paper-500">GitHub</span>
                  <span className="block text-sm text-paper-100 group-hover:text-teal transition-colors break-all">
                    github.com/nahinsha
                  </span>
                </span>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-lg border border-ink-border bg-ink-800/60 px-5 py-4 hover:border-teal/40 transition-colors group"
              >
                <span className="w-10 h-10 rounded-md bg-teal/10 border border-teal/25 flex items-center justify-center text-teal shrink-0">
                  <LinkedinIcon className="w-5 h-5" />
                </span>
                <span>
                  <span className="block font-mono text-xs text-paper-500">LinkedIn</span>
                  <span className="block text-sm text-paper-100 group-hover:text-teal transition-colors break-all">
                    linkedin.com/in/md-shahariar-nahin-a5b147301
                  </span>
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
