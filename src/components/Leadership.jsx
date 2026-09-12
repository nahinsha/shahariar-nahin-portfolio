import { leadership } from "../data/content.js";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";

export default function Leadership() {
  return (
    <section id="leadership" className="py-24 lg:py-28 border-t border-ink-border/60">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <Reveal>
          <SectionHeading index="07" title="Leadership & Extracurricular Activities" />
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-5 max-w-3xl">
          {leadership.map((item, i) => (
            <Reveal key={item.role} delay={i * 80}>
              <div className="rounded-xl border border-ink-border bg-ink-800/60 p-6 hover:border-amber/40 transition-colors">
                <h3 className="font-display text-lg font-semibold text-paper-100">
                  {item.role}
                </h3>
                <p className="text-sm text-teal-soft font-medium mt-1">{item.org}</p>
                <p className="font-mono text-xs text-paper-500 mt-2">{item.period}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
