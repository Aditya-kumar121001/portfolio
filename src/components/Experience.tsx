import { experiences } from "../data/profile";
import Reveal from "./Reveal";
import Section from "./Section";
import Tag from "./Tag";

export default function Experience() {
  return (
    <Section id="experience" index="02" title="Experience">
      <ol className="group/list space-y-10 lg:space-y-2">
        {experiences.map((exp, index) => (
          <li
            key={exp.company}
            className="transition-opacity duration-300 lg:group-hover/list:opacity-50 lg:hover:opacity-100!"
          >
            <Reveal delay={index * 80}>
              {/* Negative margin keeps text aligned while the hover background extends outward */}
              <div className="group grid gap-2 sm:grid-cols-8 sm:gap-6 lg:-mx-5 lg:rounded-xl lg:p-5 lg:transition-colors lg:hover:bg-white/[0.03] lg:hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
                <p className="mt-1 font-mono text-xs uppercase tracking-wide text-zinc-500 sm:col-span-2">
                  {exp.period}
                </p>
                <div className="sm:col-span-6">
                  <h3 className="font-medium leading-snug text-zinc-100">
                    <span className="transition-colors group-hover:text-sky-300">{exp.role}</span>
                    <span className="text-zinc-600"> · </span>
                    <span className="text-zinc-400">{exp.company}</span>
                  </h3>
                  {exp.summary && (
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">{exp.summary}</p>
                  )}
                  {exp.tags && (
                    <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technologies used">
                      {exp.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
