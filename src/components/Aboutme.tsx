import { FaExternalLinkAlt } from "react-icons/fa";

export default function Aboutme() {
  return (
    <div id="home" className="min-h-screen p-6 bg-gray-800">
      <span className="text-sky-500/100 text-xl">Hi, my name is</span>
      <h1 className="text-8xl font-bold mb-5 text-white">Aditya Kumar.</h1>
      <p className="text-xl text-gray-300">
        I build things for the web. I’m a full-stack developer from India. Developing concepts into fully functional web applications is my area of expertise. 
        With clear, effective code, I can assist you in realizing your vision, 
        whether you're creating a product from the bottom up or enhancing an already-existing one.
      </p>
      <section className="mt-12">
        <div className="flex justify-between gap-10">
          <div className="w-2/3">
            <h2 className="text-lg font-semibold mb-2 text-white">About me</h2>
            <p className="text-gray-300 mb-4">
              I’m a full-stack developer from India, currently pursuing a Master
              of Technology in Information Technology at the National Institute
              of Technology, Raipur. I’m passionate about turning ideas into
              functional, AI-driven web applications using modern technologies.
            </p>
            <p className="text-gray-300 mb-4">
              I’ve gained hands-on experience as a Data Analyst Intern at
              Fujitronix India Pvt. Ltd., where I honed my analytical skills.
              Through building AI agents like the Multi Agent Customer Support
              system and TalkToDB Agent, I’ve learned to integrate advanced NLP,
              LLMs, and vector databases like Pinecone, mastering the art of
              creating context-aware, efficient solutions with technologies such
              as React, TypeScript, Node.js, and Gemini API.
            </p>
          </div>

          {/* Contact Info Section */}
          <div className="w-1/3 space-y-4">
            {/* Location Card */}
            <div className="p-4 bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-sm font-semibold text-gray-400">Location</h3>
              <p className="flex items-center text-gray-300">Gurgoan, India</p>
            </div>

            {/* Website Card */}
            <div className="p-4 bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-sm font-semibold text-gray-300 flex items-center gap-1">
                Linkedin{" "}
                <a href="https://www.linkedin.com/in/aditya-kumar-0669711b4/">
                  <FaExternalLinkAlt className="ml-1 text-xs hover:text-blue-400" />
                </a>
              </h3>
            </div>

            {/* Website Card */}
            <div className="p-4 bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-sm font-semibold text-gray-300 flex items-center gap-1">
                Github{" "}
                <a href="https://www.linkedin.com/in/aditya-kumar-0669711b4/">
                  <FaExternalLinkAlt className="ml-1 text-xs hover:text-blue-400" />
                </a>
              </h3>
            </div>
            {/* Website Card */}
            <div className="p-4 bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-sm font-semibold text-gray-300 flex items-center gap-1">
                Dribbble{" "}
                <a href="https://www.linkedin.com/in/aditya-kumar-0669711b4/">
                  <FaExternalLinkAlt className="ml-1 text-xs hover:text-blue-400" />
                </a>
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
