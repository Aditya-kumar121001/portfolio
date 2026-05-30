import { FaBuilding, FaFlask, FaLaptopCode } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      icon: <FaFlask className="text-gray-400 mr-4 mt-1" />,
      company: "NIT Raipur — IBITF",
      role: "Junior Research Fellow (JRF) — Conversational AI & Full-Stack Engineer",
      period: "Nov 2025 – Present",
    },
    {
      icon: <FaBuilding className="text-gray-400 mr-4 mt-1" />,
      company: "Fujitronix India Pvt. Ltd.",
      role: "Data Analyst Intern",
      period: "Jan 2023 – Apr 2023",
    },
    {
      icon: <FaLaptopCode className="text-gray-400 mr-4 mt-1" />,
      company: "Freelance",
      role: "AI Full Stack Developer",
      period: "Present",
    }
  ];
  return (
    <section id="experience" className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full">
        <h2 className="text-3xl font-bold mb-2 text-white">Work Experience</h2>
        <p className="text-gray-400 mb-8">All my professional experiences</p>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="flex items-start">
              {exp.icon}
              <div>
                <h3 className="text-lg font-semibold text-white">{exp.company}</h3>
                <p className="text-white">{exp.role}</p>
                <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}