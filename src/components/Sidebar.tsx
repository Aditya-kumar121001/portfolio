import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { LuHouse, LuHotel, LuBook } from "react-icons/lu";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-scroll";

const Sidebar: React.FC = () => {
  const userAvatar = "https://drive.google.com/file/d/1o_-gwW1smoTDbRpN-3E3uwOKeWKNeSac/view?usp=sharing";
  return (
    <div className="w-64 h-screen bg-gray-900 text-gray-300 flex flex-col justify-between sticky top-0">
      {/* Top Section: Logo and Title */}
      <div>
        <div className="flex items-center p-4 border-b border-gray-700">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center mr-2">
            <span className="text-white font-bold">AK</span>
          </div>
          <div>
            <h1 className="text-white font-semibold flex items-center gap-1">
              Resume{" "}
              <a href="https://drive.google.com/file/d/1DX8aLnOQq789euW5rIjftnbvXh6pWvLx/view?usp=sharing">
                <FaExternalLinkAlt className="ml-1 text-xs" />
              </a>
            </h1>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="mt-4">
          <ul>
            <li className="flex items-center px-4 py-2 hover:bg-gray-800 cursor-pointer">
              <LuHouse className="mr-3 text-gray-400" />
              <Link
                to="home"
                smooth={true}
                duration={500}
                offset={-80} // Adjust for padding or fixed header
                className="w-full"
                activeClass="text-blue-400 font-semibold"
              >
                <span>Home</span>
              </Link>
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-800 cursor-pointer">
              <LuHotel className="mr-3 text-gray-400" />
              <Link
                to="experience"
                smooth={true}
                duration={500}
                className="w-full"
                activeClass="text-blue-400 font-semibold"
              >
                <span>Experience</span>
              </Link>
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-800 cursor-pointer">
              <LuBook className="mr-3 text-gray-400" />
              <Link
                to="education"
                smooth={true}
                duration={500}
                className="w-full"
                activeClass="text-blue-400 font-semibold"
              >
                <span>Education</span>
              </Link>
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-800 cursor-pointer">
              <FaLaptopCode className="mr-3 text-gray-400" />
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="w-full"
                activeClass="text-blue-400 font-semibold"
              >
                <span>Projects</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Bottom Section: User Profile */}
      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center">
          <img
            src={userAvatar}
            alt="User Avatar"
            className="w-10 h-10 rounded-full mr-3 object-cover"
          />
          <div>
            <p className="text-white font-semibold">Aditya Kumar</p>
            <a href="mailto:iamaditya121001@gmail.com">
              <p className="text-xs text-gray-400">iamaditya121001@gmail.com</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;