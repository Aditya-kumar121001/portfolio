import { LuCode, LuSparkles } from "react-icons/lu";
import { toolkit } from "../data/profile";
import Reveal from "./Reveal";
import Section from "./Section";
import SpotlightCard from "./SpotlightCard";

const Em = ({ children }: { children: React.ReactNode }) => (
  <span className="font-medium text-zinc-100">{children}</span>
);

const focusAreas = ["Speech AI & ASR", "LLMs, Agents & RAG", "Voice-driven Fintech"];

export default function Aboutme() {
  return (
    <Section id="about" index="01" title="About">
      <Reveal>
        <div className="space-y-4 leading-relaxed text-zinc-400">
          <p>
            I'm a <Em>Conversational AI Engineer</Em> and <Em>Full-Stack Developer</Em> from India,
            currently working as a Junior Research Fellow at the National Institute of Technology,
            Raipur. My work sits at the intersection of speech AI, LLMs, and fintech, building
            systems that solve real problems for real users, including low-literacy and underbanked
            populations in regional India.
          </p>
          <p>
            I fine-tuned a <Em>Wav2Vec2</Em> model for low-resource Chhattisgarhi ASR and architected
            end-to-end <Em>voice-based UPI payment</Em> workflows with Banking API integration. Beyond
            speech, I've built multi-agent customer support systems, RAG-powered database agents, and
            AI research tools using React, TypeScript, Node.js, Gemini API, and Pinecone.
          </p>
        </div>
      </Reveal>

      {/* Highlights */}
      <div className="mt-10 grid gap-4">
        <Reveal>
          <SpotlightCard>
            <div className="p-6">
              <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-500">
                <LuSparkles className="text-sm text-sky-400" />
                Focus
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                {focusAreas.map((area) => (
                  <li key={area} className="flex items-center gap-2 text-sm text-zinc-200">
                    <span className="h-1 w-1 rounded-full bg-sky-400" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </SpotlightCard>
        </Reveal>

        <Reveal delay={80}>
          <SpotlightCard>
            <div className="p-6">
              <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-500">
                <LuCode className="text-sm text-sky-400" />
                Toolkit
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {toolkit.map((tool) => (
                  <li
                    key={tool}
                    className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-sm text-zinc-300"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </SpotlightCard>
        </Reveal>
      </div>
    </Section>
  );
}
