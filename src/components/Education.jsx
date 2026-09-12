import { education } from "../data/content.js";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";

export default function Education() {
  return (
    <section id="education" className="py-24 lg:py-28 border-t border-ink-border/60">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <Reveal>
          <SectionHeading index="06" title="Education" />
        </Reveal>

        <ol className="relative border-l border-ink-border pl-8 space-y-8 max-w-3xl">
          {education.map((item, i) => (
            <Reveal as="li" key={item.degree} delay={i * 80} className="relative">
              <span className="absolute -left-[35px] top-1 w-3 h-3 rounded-full bg-ink-900 border-2 border-amber" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-base sm:text-lg font-semibold text-paper-100">
                  {item.degree}
                </h3>
                <span className="font-mono text-xs text-paper-500">{item.period}</span>
              </div>
              <p className="text-sm text-paper-300 mt-1">{item.institution}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
