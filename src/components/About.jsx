import { aboutCards, aboutParagraphs } from "../data/content.js";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-28 border-t border-ink-border/60">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <Reveal>
          <SectionHeading index="01" title="About Me" />
        </Reveal>

        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16">
          <Reveal delay={80}>
            <div className="space-y-5">
              {aboutParagraphs.map((p, i) => (
                <p key={i} className="text-paper-300 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="grid sm:grid-cols-1 gap-4">
              {aboutCards.map((card) => (
                <div
                  key={card.label}
                  className="rounded-lg border border-ink-border bg-ink-800/60 px-5 py-4"
                >
                  <p className="font-mono text-xs text-teal">{card.label}</p>
                  <p className="mt-1.5 text-sm text-paper-100 font-medium">{card.value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
