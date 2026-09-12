import { profile } from "../data/content.js";
import EmailLink from "./EmailLink.jsx";
import { GithubIcon, LinkedinIcon, MailIcon } from "./icons.jsx";

export default function Footer() {
  return (
    <footer className="border-t border-ink-border/60">
      <div className="mx-auto max-w-content px-6 lg:px-10 py-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div>
          <p className="font-display text-lg font-semibold text-paper-100">{profile.name}</p>
          <p className="text-sm text-paper-500 mt-1">
            Python & Django Developer <span className="text-paper-500/60">|</span> React Developer
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-paper-500 hover:text-amber transition-colors"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-paper-500 hover:text-amber transition-colors"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <EmailLink aria-label="Email me" className="text-paper-500 hover:text-amber transition-colors">
            <MailIcon className="w-5 h-5" />
          </EmailLink>
        </div>
      </div>

      <div className="border-t border-ink-border/60">
        <div className="mx-auto max-w-content px-6 lg:px-10 py-5">
          <p className="text-xs text-paper-500">
            © 2026 {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
