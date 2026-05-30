import { FaExternalLinkAlt } from "react-icons/fa";

export default function Aboutme() {
  return (
    <div id="home" className="min-h-screen p-6 bg-gray-800">
      <span className="text-sky-500/100 text-xl">Hi, my name is</span>
      <h1 className="text-8xl font-bold mb-5 text-white">Aditya Kumar.</h1>
      <p className="text-xl text-gray-300">
        I build AI-powered systems and full-stack applications with real-world impact.
        Currently a Junior Research Fellow at NIT Raipur, I specialize in Conversational AI,
        low-resource ASR, and voice-driven fintech turning complex problems into
        production-ready solutions.
      </p>
      <section className="mt-12">
        <div className="flex justify-between gap-10">
          <div className="w-2/3">
            <h2 className="text-lg font-semibold mb-2 text-white">About me</h2>
            <p className="text-gray-300 mb-4">
              I'm a Conversational AI Engineer and Full-Stack Developer from India,
              currently working as a Junior Research Fellow at the National Institute of
              Technology, Raipur. My work sits at the intersection of speech AI, LLMs,
              and fintech, building systems that solve real problems for real users,
              including low-literacy and underbanked populations in regional India.
            </p>
            <p className="text-gray-300 mb-4">
              I fine-tuned a Wav2Vec2 model for low-resource Chhattisgarhi ASR, achieving
              a 16% WER reduction, and architected end-to-end voice-based UPI payment
              workflows with Banking API integration. Beyond speech, I've built multi-agent
              customer support systems, RAG-powered database agents, and AI research tools
              using React, TypeScript, Node.js, Gemini API, and Pinecone.
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
