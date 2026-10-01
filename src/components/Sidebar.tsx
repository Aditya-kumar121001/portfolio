import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { LuArrowUpRight, LuFileText, LuMail, LuMapPin } from "react-icons/lu";
import { profile, sections } from "../data/profile";
import Reveal from "./Reveal";

const socials = [
  { href: profile.github, label: "GitHub", icon: FaGithub },
  { href: profile.linkedin, label: "LinkedIn", icon: FaLinkedinIn },
  { href: `mailto:${profile.email}`, label: "Email", icon: LuMail },
];

const Sidebar: React.FC<{ active: string }> = ({ active }) => {
  return (
    <header className="pt-24 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[46%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <Reveal>
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src={profile.avatar}
                alt={profile.name}
                width={64}
                height={64}
                className="h-16 w-16 rounded-full object-cover ring-2 ring-white/10"
              />
              <span className="absolute bottom-0.5 right-0.5 h-3.5 w-3.5 rounded-full border-2 border-zinc-950 bg-emerald-400" />
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-300 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {profile.status}
            </span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-8 bg-linear-to-br from-white via-zinc-200 to-zinc-500 bg-clip-text text-5xl font-semibold tracking-tight text-transparent sm:text-6xl">
            {profile.name}
          </h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-zinc-200 sm:text-xl">
            {profile.role}
          </h2>
          <p className="mt-4 max-w-sm leading-relaxed text-zinc-400">{profile.tagline}</p>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-white"
            >
              <LuFileText className="text-base" />
              Resume
              <LuArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-zinc-200 transition-colors hover:border-white/20 hover:bg-white/5"
            >
              <LuMail className="text-base" />
              Get in touch
            </a>
          </div>
        </Reveal>

        {/* Desktop Navigation */}
        <nav aria-label="In-page" className="hidden lg:block">
          <ul className="mt-16 w-max">
            {sections.map(({ id, label }) => {
              const isActive = active === id;
              return (
                <li key={id}>
                  <a href={`#${id}`} className="group flex items-center py-3">
                    <span
                      className={`mr-4 h-px transition-all duration-300 group-hover:w-16 group-hover:bg-zinc-200 motion-reduce:transition-none ${
                        isActive ? "w-16 bg-sky-400" : "w-8 bg-zinc-600"
                      }`}
                    />
                    <span
                      className={`text-xs font-semibold uppercase tracking-widest transition-colors group-hover:text-zinc-200 ${
                        isActive ? "text-zinc-100" : "text-zinc-500"
                      }`}
                    >
                      {label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <Reveal delay={240}>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          <ul className="flex items-center gap-2" aria-label="Social media">
            {socials.map(({ href, label, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-colors hover:border-white/20 hover:bg-white/5 hover:text-zinc-100"
                >
                  <Icon className="text-[17px]" />
                </a>
              </li>
            ))}
          </ul>
          <span className="flex items-center gap-1.5 text-sm text-zinc-500">
            <LuMapPin />
            {profile.location}
          </span>
        </div>
      </Reveal>
    </header>
  );
};

export default Sidebar;
