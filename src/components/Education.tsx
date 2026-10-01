import { LuGraduationCap } from "react-icons/lu";
import { education } from "../data/profile";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Education() {
  return (
    <Section id="education" index="03" title="Education">
      <ol className="relative ml-4 space-y-10 border-l border-white/10 pl-8">
        {education.map((edu, index) => (
          <li key={edu.degree} className="relative">
            <span className="absolute -left-[49px] top-0 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-zinc-950 text-sky-400">
              <LuGraduationCap />
            </span>
            <Reveal delay={index * 80}>
              <p className="font-mono text-xs uppercase tracking-wide text-zinc-500">{edu.period}</p>
              <h3 className="mt-1 font-medium text-zinc-100">{edu.degree}</h3>
              <p className="mt-1 text-sm text-zinc-400">{edu.school}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
