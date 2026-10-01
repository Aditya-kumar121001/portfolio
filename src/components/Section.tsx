import React from "react";
import Reveal from "./Reveal";

interface SectionProps {
  id: string;
  index: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, index, title, children }) => {
  return (
    <section id={id} aria-label={title} className="mb-24 scroll-mt-24 md:mb-32">
      <Reveal>
        <h2 className="mb-8 flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-sky-400">
          <span className="text-zinc-500">{index}</span>
          {title}
          <span aria-hidden className="h-px flex-1 bg-linear-to-r from-white/10 to-transparent" />
        </h2>
      </Reveal>
      {children}
    </section>
  );
};

export default Section;
