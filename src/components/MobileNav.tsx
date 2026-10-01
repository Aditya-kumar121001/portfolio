import React, { useEffect, useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import { profile, sections } from "../data/profile";

const MobileNav: React.FC<{ active: string }> = ({ active }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
          scrolled || open
            ? "border-b border-white/[0.06] bg-zinc-950/75 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <div className="flex h-14 items-center justify-between px-6 sm:px-12">
          <a href="#top" onClick={() => setOpen(false)} className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-sky-400 to-indigo-500 text-xs font-bold text-white">
              {profile.initials}
            </span>
            <span className="text-sm font-medium text-zinc-200">{profile.name}</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="-mr-2 p-2 text-zinc-300 hover:text-white"
          >
            {open ? <LuX className="text-xl" /> : <LuMenu className="text-xl" />}
          </button>
        </div>

        <nav
          id="mobile-menu"
          aria-label="In-page"
          className={`grid overflow-hidden transition-[grid-template-rows] duration-300 motion-reduce:transition-none ${
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <ul inert={!open} className="min-h-0 px-6 sm:px-12">
            {sections.map(({ id, label }, i) => (
              <li key={id} className={i === 0 ? "pt-2" : ""}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between border-b border-white/[0.06] py-4 text-base font-medium transition-colors ${
                    active === id ? "text-sky-400" : "text-zinc-300 hover:text-white"
                  }`}
                >
                  {label}
                  <span className="font-mono text-xs text-zinc-600">0{i + 1}</span>
                </a>
              </li>
            ))}
            <li className="pb-6 pt-4">
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center rounded-full bg-zinc-100 py-2.5 text-sm font-medium text-zinc-900"
              >
                View Resume
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-30 bg-black/50" onClick={() => setOpen(false)} />
      )}
    </div>
  );
};

export default MobileNav;
