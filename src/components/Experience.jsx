import { experience } from "../data/content.js";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";

export default function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-28 border-t border-ink-border/60">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <Reveal>
          <SectionHeading index="04" title="Experience" />
        </Reveal>

        <ol className="relative border-l border-ink-border pl-8 space-y-10 max-w-3xl">
          {experience.map((item, i) => (
            <Reveal as="li" key={item.role + item.period} delay={i * 90} className="relative">
              <span className="absolute -left-[35px] top-1 w-3 h-3 rounded-full bg-ink-900 border-2 border-teal" />

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-lg font-semibold text-paper-100">
                  {item.role}
                </h3>
                <span className="font-mono text-xs text-paper-500">{item.period}</span>
              </div>
              <p className="text-sm text-teal-soft font-medium mt-0.5">{item.org}</p>
              <span className="inline-block mt-2 font-mono text-[11px] text-paper-500 border border-ink-border rounded-full px-2.5 py-0.5">
                {item.type} experience
              </span>

              <ul className="mt-4 space-y-2">
                {item.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-paper-300 leading-relaxed">
                    <span className="mt-2 w-1 h-1 rounded-full bg-amber shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
