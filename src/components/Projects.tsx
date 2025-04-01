import React from "react";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

interface ProjectCardProps {
  name: string;
  description: string;
  technologies: string[];
  github: string;
  live: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, technologies, github, live }) => {
  return (
    <div className="bg-gray-700 text-white p-6 rounded-2xl w-92 shadow-lg border border-gray-700">
      <h3 className="text-lg font-semibold text-blue-400 mb-2">{name}</h3>
      <p className="text-gray-300 text-sm mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span key={index} className="bg-gray-800 text-white text-xs px-3 py-1 rounded-lg">{tech}</span>
        ))}
      </div>
      <div className="flex items-center justify-between text-gray-400 text-sm">
        <a href={github} className="flex items-center gap-2 hover:text-white">
          <FaGithub /> GitHub
        </a>
        <a href={live} className="flex items-center gap-2 hover:text-white">
          <TbWorld /> Live
        </a>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
    const projects = [
      {
        name: "Multi Agent Customer Support",
        description:
          "Developed an AI customer support agent to classify and escalate queries (Technical, Billing, General) using Gemini API for contextual responses and Natural library for sentiment-based escalation.",
        technologies: ["React.js", "TypeScript", "Node.js", "Express.js", "Gemini API", "Natural"],
        github: "https://github.com/Aditya-kumar121001/Multi-Agent-Customer-Support",
        live: "#",
      },
      {
        name: "AI Research Agent",
        description:
          "Created an AI research agent with speech-to-text, allowing users to dictate queries and get insights from technical sources using Gemini API for context-aware responses.",
        technologies: ["React.js", "Node.js", "Gemini API", "Web Speech API"],
        github: "https://github.com/Aditya-kumar121001/AI-Research-Agent",
        live: "#",
      },
      {
        name: "TalkToDB Agent",
        description:
          "Built an AI agent with RAG to handle natural language queries and retrieve database content via Pinecone, optimized with caching for faster responses.",
        technologies: ["React.js", "TypeScript", "Node.js", "Gemini API", "Pinecone", "MySQL"],
        github: "https://github.com/Aditya-kumar121001/talktodb-agent",
        live: "#",
      },
    ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center p-6 bg-gray-800 text-white">
      <div className="w-full">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;