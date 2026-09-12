import { projects } from "../data/content.js";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { GithubIcon, ArrowRightIcon } from "./icons.jsx";

function ProjectCard({ project }) {
  return (
    <div
      className={`h-full rounded-xl border bg-ink-800/60 p-6 sm:p-8 transition-colors ${
        project.featured
          ? "border-amber/30 hover:border-amber/60"
          : "border-ink-border hover:border-teal/40"
      }`}
    >
      {project.featured && (
        <span className="inline-block font-mono text-[11px] tracking-wide text-amber bg-amber/10 border border-amber/25 rounded-full px-3 py-1 mb-4">
          Featured Project
        </span>
      )}

      <h3 className="font-display text-xl font-semibold text-paper-100">{project.name}</h3>
      <p className="mt-3 text-sm text-paper-300 leading-relaxed">{project.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="font-mono text-[11px] px-2 py-1 rounded bg-ink-700/70 text-teal-soft border border-ink-border"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6">
        <p className="font-mono text-xs text-paper-500 mb-2">Key Features</p>
        <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-1.5">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-paper-300">
              <span className="mt-2 w-1 h-1 rounded-full bg-teal shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {(project.github || project.live) && (
        <div className="mt-7 flex flex-wrap gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-ink-border px-4 py-2 text-sm text-paper-100 hover:border-teal hover:text-teal transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-amber px-4 py-2 text-sm font-medium text-ink-950 hover:bg-amber-soft transition-colors"
            >
              Live Demo
              <ArrowRightIcon className="w-4 h-4" />
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-28 border-t border-ink-border/60">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <Reveal>
          <SectionHeading
            index="03"
            title="Projects"
            description="A selection of full-stack and backend applications I've built end to end."
          />
        </Reveal>

        <div className="grid gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 100}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
