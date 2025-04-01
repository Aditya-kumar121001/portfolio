import { FaBuilding } from "react-icons/fa";

export default function Experience() {
  return (
    <>
        <section id="experience" className="min-h-screen flex items-center justify-center p-6">
        <div className="w-full">
        <h2 className="text-3xl font-bold mb-2 text-white">Work Experience</h2>
        <p className="text-gray-400 mb-8">All my professional experiences</p>
        <div className="space-y-6">
            {/* Fujitronix India Pvt. Ltd. */}
            <div className="flex items-center">
                <FaBuilding className="text-gray-400 mr-4 mt-1" />
                <div>
                    <h3 className="text-lg font-semibold text-white">Fujitronix India Pvt. Ltd.</h3>
                    <p className="text-white">Data Analyst Intern</p>
                    <p className="text-gray-400">Jan 2023 - Apr 2023</p>
                </div>
            </div>

            {/* Freelance */}
            <div className="flex items-center">
                <FaBuilding className="text-gray-400 mr-4 mt-1" />
                <div>
                    <h3 className="text-lg font-semibold text-white">Freelance</h3>
                    <p className="text-white">AI Full Stack Developer</p>
                    <p className="text-gray-400">Present</p>
                </div>
            </div>
        </div>
        </div>
    </section>
  </>
  )
}
