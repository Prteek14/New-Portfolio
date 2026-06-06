import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/work", label: "Work" },
  { to: "/education", label: "Education" },
  { to: "/contact", label: "Contact" },
  { to: "/aiassistent", label: "AI Assistant" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const activeClass =
    "text-cyan-400 bg-cyan-400/10 border-b-2 border-cyan-400 rounded-t-md";

  const baseItemClass =
    "transition-[opacity,transform] duration-250 ease-out hover:!opacity-100 hover:scale-110 px-3 py-1.5 text-sm md:text-lg";

  return (
    <div className="flex flex-col">
      <div className="fixed z-50 top-0 w-full backdrop-blur-lg border-b border-sky-500 bg-transparent ">
        {/* ── Main bar ── */}
        <div className="flex justify-between items-center px-4 py-2 md:px-6">
          <img
            src="/P_LOGO.png"
            alt="my_logo"
            className="w-15 h-15 ring-2 ring-cyan-300 rounded-2xl animate-pulse [animation-duration:3s]"
          />

          {/* Desktop nav — hidden below md */}
          <ul className="hidden md:flex items-center gap-1 [&:hover>li>a]:opacity-50">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `${baseItemClass} ${isActive ? activeClass : "text-gray-30"}`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            {/* Resume btn — desktop only */}
            <a
              href="https://drive.google.com/file/d/1B63et37br9VJG6KYy9tqRds6e3DgQZAe/view?usp=drive_link"
              className="hidden md:block bg-gray-300 hover:bg-gray-400 text-black text-sm rounded-2xl px-3 py-1.5 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 text-gray-300 rounded-md w-9 h-9 flex items-center justify-center transition-colors duration-200"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* ── Mobile dropdown ── */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-gray-800 ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-1 px-3 py-2">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-3 py-2.5 rounded-md text-sm transition-colors duration-150 ${
                      isActive
                        ? "text-cyan-400 bg-cyan-400/10 border-l-2 border-cyan-400 pl-2.5"
                        : "text-gray-100 "
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <a
            href="https://drive.google.com/file/d/1B63et37br9VJG6KYy9tqRds6e3DgQZAe/view?usp=drive_link"
            className="block mx-3 mb-3 text-center bg-gray-300 hover:bg-gray-400 text-black text-sm rounded-2xl px-3 py-2 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            Download Resume
          </a>
        </div>
      </div>
      <main className="flex-1 pt-20 ">
        <Outlet />
      </main>
    </div>
  );
}

export default Navbar;
