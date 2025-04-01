import { LuBook } from "react-icons/lu";

export default function Education() {
  return (
    <>
      <section id="education" className="min-h-screen flex items-center justify-center p-6">
        <div className="w-full">
          <h2 className="text-3xl font-bold mb-6 text-white">Education</h2>
          <div className="space-y-6">
            <div className="flex items-center">
              <LuBook className="text-gray-400 mr-4 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white">
                National Institute of Technology, Raipur, Chhattisgarh
                </h3>
                <p className="text-white">M.TECH Information Technology</p>
                <p className="text-gray-400">2023-2025</p>
              </div>
            </div>

            <div className="flex items-center">
              <LuBook className="text-gray-400 mr-4 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white">
                DPG Institute of Technology & Management, Gurugram, Haryana
                </h3>
                <p className="text-white"> B.TECH Computer Science & Engineering</p>
                <p className="text-gray-400">2019-2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
