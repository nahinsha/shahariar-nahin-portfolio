import { skillGroups } from "../data/content.js";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";

export default function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-28 border-t border-ink-border/60">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <Reveal>
          <SectionHeading
            index="02"
            title="Technical Skills"
            description="Technologies I use to design, build, and ship backend and full-stack web applications."
          />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 70}>
              <div className="h-full rounded-lg border border-ink-border bg-ink-800/60 p-6 hover:border-teal/40 transition-colors">
                <h3 className="font-display text-base font-semibold text-paper-100">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="font-mono text-xs px-2.5 py-1.5 rounded-md bg-ink-700/70 text-paper-300 border border-ink-border"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
