import React, { useEffect, useState } from "react";
import { FaLaptopCode } from "react-icons/fa";
import { LuHouse, LuHotel, LuBook, LuMenu, LuX } from "react-icons/lu";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-scroll";

const navItems = [
  { to: "home", label: "Home", icon: LuHouse },
  { to: "experience", label: "Experience", icon: LuHotel },
  { to: "education", label: "Education", icon: LuBook },
  { to: "projects", label: "Projects", icon: FaLaptopCode },
];

const Brand: React.FC = () => (
  <div className="flex items-center">
    <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center mr-2">
      <span className="text-white font-bold">AK</span>
    </div>
    <h1 className="text-white font-semibold flex items-center gap-1">
      Resume{" "}
      <a
        href="https://drive.google.com/file/d/1od1Yq3x0e9fd3-ww9NaWrs3qOl_Ce6zY/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open resume"
        className="p-1"
      >
        <FaExternalLinkAlt className="text-xs" />
      </a>
    </h1>
  </div>
);

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(false);

  // Lock page scroll and allow Escape to close while the mobile menu is open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      {/* Mobile Top Bar */}
      <header className="lg:hidden fixed top-0 inset-x-0 z-40 h-14 bg-gray-900 border-b border-gray-700 flex items-center justify-between px-4">
        <Brand />
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          className="p-2 -mr-2 text-gray-300 hover:text-white"
        >
          <LuMenu className="text-2xl" />
        </button>
      </header>

      {/* Mobile Backdrop */}
      {open && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/60"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`fixed lg:sticky top-0 left-0 z-50 w-64 shrink-0 h-dvh lg:h-screen bg-gray-900 text-gray-300 flex flex-col justify-between transition-transform duration-300 lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Top Section: Logo and Title */}
        <div>
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <Brand />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="lg:hidden p-2 -mr-2 text-gray-300 hover:text-white"
            >
              <LuX className="text-xl" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mt-4">
            <ul>
              {navItems.map(({ to, label, icon: Icon }) => (
                <li key={to}>
                  <Link
                    to={to}
                    smooth={true}
                    duration={500}
                    offset={-56} // Clear the mobile top bar
                    spy={true}
                    onClick={() => setOpen(false)}
                    className="flex items-center w-full px-4 py-3 lg:py-2 hover:bg-gray-800 cursor-pointer"
                    activeClass="text-blue-400 font-semibold"
                  >
                    <Icon className="mr-3 text-gray-400" />
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Section: User Profile */}
        <div className="p-4 border-t border-gray-700">
          <div className="flex items-center min-w-0">
            <img
              src={"/avatar.png"}
              alt="User Avatar"
              className="w-12 h-12 shrink-0 rounded-full mr-3 object-center p-0.1"
            />
            <div className="min-w-0">
              <p className="text-white font-semibold">Aditya Kumar</p>
              <a href="mailto:iamaditya121001@gmail.com">
                <p className="text-xs text-gray-400 truncate">iamaditya121001@gmail.com</p>
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
