import { FaGithub } from "react-icons/fa6";
import { LuArrowUpRight, LuFolderGit2 } from "react-icons/lu";
import { profile, projects } from "../data/profile";
import Reveal from "./Reveal";
import Section from "./Section";
import SpotlightCard from "./SpotlightCard";
import Tag from "./Tag";

export default function Projects() {
  return (
    <Section id="projects" index="04" title="Projects">
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
        {projects.map((project, index) => (
          <li key={project.name}>
            <Reveal delay={(index % 2) * 80} className="h-full">
              <SpotlightCard className="h-full transition-transform duration-300 hover:-translate-y-0.5 motion-reduce:transform-none">
                <div className="flex h-full flex-col p-6">
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/10 text-lg text-sky-400">
                      <LuFolderGit2 />
                    </span>
                    {project.github ? (
                      <FaGithub className="text-lg text-zinc-500 transition-colors group-hover/card:text-zinc-200" />
                    ) : (
                      project.badge && (
                        <span className="rounded-full border border-white/10 px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                          {project.badge}
                        </span>
                      )
                    )}
                  </div>

                  <h3 className="mt-5 font-medium text-zinc-100">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-baseline gap-1 transition-colors group-hover/card:text-sky-300 after:absolute after:inset-0 after:content-['']"
                      >
                        {project.name}
                        <LuArrowUpRight className="shrink-0 translate-y-px text-sm transition-transform group-hover/card:-translate-y-0.5 group-hover/card:translate-x-0.5 motion-reduce:transition-none" />
                      </a>
                    ) : (
                      project.name
                    )}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
                    {project.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
                    {project.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </ul>
                </div>
              </SpotlightCard>
            </Reveal>
          </li>
        ))}
      </ul>

      <Reveal>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-zinc-200 hover:text-sky-300"
        >
          View all projects on GitHub
          <LuArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none" />
        </a>
      </Reveal>
    </Section>
  );
}
