import { publications, academicProject } from "../data/content.js";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { ExternalLinkIcon } from "./icons.jsx";

function PublicationCard({ pub }) {
  return (
    <div className="rounded-xl border border-ink-border bg-ink-800/60 p-6 sm:p-7 hover:border-teal/40 transition-colors">
      <h3 className="font-display text-lg font-semibold text-paper-100 leading-snug">
        {pub.title}
      </h3>
      <p className="mt-2 text-sm text-paper-300">{pub.authors}</p>
      <p className="mt-1 text-sm text-teal-soft">{pub.venue}</p>
      <p className="font-mono text-xs text-paper-500 mt-1">{pub.detail}</p>
      <p className="mt-4 text-sm text-paper-300 leading-relaxed">{pub.description}</p>

      <a
        href={pub.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-amber hover:text-amber-soft transition-colors"
      >
        Read Paper
        <ExternalLinkIcon className="w-3.5 h-3.5" />
      </a>
    </div>
  );
}

export default function Research() {
  return (
    <section id="research" className="py-24 lg:py-28 border-t border-ink-border/60">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <Reveal>
          <SectionHeading
            index="05"
            title="Publications"
            description="Academic research and publications alongside my software development work, focused on machine learning and technology."
          />
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {publications.map((pub, i) => (
            <Reveal key={pub.title} delay={i * 100}>
              <PublicationCard pub={pub} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-6 rounded-xl border border-ink-border bg-ink-800/60 p-6 sm:p-7">
            <span className="inline-block font-mono text-[11px] tracking-wide text-teal bg-teal/10 border border-teal/25 rounded-full px-3 py-1 mb-4">
              {academicProject.label}
            </span>
            <h3 className="font-display text-lg font-semibold text-paper-100">
              {academicProject.name}
            </h3>
            <p className="mt-3 text-sm text-paper-300 leading-relaxed max-w-2xl">
              {academicProject.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {academicProject.points.map((point) => (
                <li
                  key={point}
                  className="font-mono text-[11px] px-2.5 py-1.5 rounded-md bg-ink-700/70 text-paper-300 border border-ink-border"
                >
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-paper-500 italic">{academicProject.note}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
