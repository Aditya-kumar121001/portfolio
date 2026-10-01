export const profile = {
  name: "Aditya Kumar",
  initials: "AK",
  role: "Conversational AI Engineer & Full-Stack Developer",
  tagline:
    "I build AI-powered systems and full-stack applications with real-world impact, from low-resource speech recognition to voice-driven fintech.",
  status: "Junior Research Fellow @ NIT Raipur",
  location: "Gurugram, India",
  email: "iamaditya121001@gmail.com",
  avatar: "/avatar-sm.jpg",
  resume: "https://drive.google.com/file/d/1od1Yq3x0e9fd3-ww9NaWrs3qOl_Ce6zY/view?usp=sharing",
  github: "https://github.com/Aditya-kumar121001",
  linkedin: "https://www.linkedin.com/in/aditya-kumar-0669711b4/",
};

export const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
] as const;

export const toolkit = [
  "Python",
  "Wav2Vec2",
  "HuggingFace",
  "React",
  "TypeScript",
  "Node.js",
  "Express",
  "Gemini API",
  "Pinecone",
  "MySQL",
];

export const experiences = [
  {
    period: "Nov 2025 — Present",
    role: "Junior Research Fellow",
    company: "NIT Raipur — IBITF",
    summary:
      "Conversational AI & full-stack engineering for voice-first fintech. Fine-tuned a Wav2Vec2 model for low-resource Chhattisgarhi ASR (16% WER reduction) and architected end-to-end voice-based UPI payment workflows with Banking API integration.",
    tags: ["Python", "Wav2Vec2", "Speech AI", "Node.js", "Banking APIs"],
  },
  {
    period: "Jan — Apr 2023",
    role: "Data Analyst Intern",
    company: "Fujitronix India Pvt. Ltd.",
  },
  {
    period: "Present",
    role: "AI Full Stack Developer",
    company: "Freelance",
  },
];

export const education = [
  {
    period: "2023 — 2025",
    degree: "M.Tech, Information Technology",
    school: "National Institute of Technology, Raipur",
  },
  {
    period: "2019 — 2023",
    degree: "B.Tech, Computer Science & Engineering",
    school: "DPG Institute of Technology & Management, Gurugram",
  },
];

export const projects = [
  {
    name: "Chhattisgarhi ASR System",
    description:
      "Fine-tuned Wav2Vec2 for low-resource Chhattisgarhi speech recognition, achieving a 16% WER reduction. Integrated into a voice-first UPI payment pipeline serving low-literacy users with Banking API and deterministic intent recognition.",
    tags: ["Python", "Wav2Vec2", "HuggingFace", "Node.js", "NLP", "Speech AI"],
    badge: "Research",
  },
  {
    name: "Multi Agent Customer Support",
    description:
      "AI customer support agent that classifies and escalates queries (Technical, Billing, General) using Gemini API for contextual responses and the Natural library for sentiment-based escalation.",
    tags: ["React", "TypeScript", "Node.js", "Express", "Gemini API", "Natural"],
    github: "https://github.com/Aditya-kumar121001/Multi-Agent-Customer-Support",
  },
  {
    name: "AI Research Agent",
    description:
      "AI research agent with speech-to-text, letting users dictate queries and get insights from technical sources using Gemini API for context-aware responses.",
    tags: ["React", "Node.js", "Gemini API", "Web Speech API"],
    github: "https://github.com/Aditya-kumar121001/AI-Research-Agent",
  },
  {
    name: "TalkToDB Agent",
    description:
      "AI agent with RAG that answers natural language queries and retrieves database content via Pinecone, optimized with caching for faster responses.",
    tags: ["React", "TypeScript", "Node.js", "Gemini API", "Pinecone", "MySQL"],
    github: "https://github.com/Aditya-kumar121001/talktodb-agent",
  },
];
