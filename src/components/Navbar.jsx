import React from "react";

function Navbar() {
  return (
    <div className="fixed z-100 top-0 flex justify-between items-center p-2 backdrop-blur-lg w-full sm:p-4 bg-transparent border-b border-gray-800">
      <img
        src="/P_LOGO.png"
        alt="my_logo"
        className="w-15 h-15  ring-2 ring-cyan-300 rounded-2xl animate-pulse [animation-duration:3s]"
      />
      <section className="flex justify-center items-center">
        <ul className="sm:flex sm:justify-center sm:items-center sm:gap-2 sm:p-2 md:gap-4 cursor-pointer hidden group  ">
          <a href="#about" className="transition-all duration-300 group-hover:opacity-50 hover:opacity-100 hover:scale-110 hover:mx-4">
            <li>About</li>
          </a>
          <a href="#skills" className="transition-all duration-300 group-hover:opacity-50 hover:opacity-100 hover:scale-110 hover:mx-4">
            <li>Skills</li>
          </a>
          <a href="#work" className="transition-all duration-300 group-hover:opacity-50 hover:opacity-100 hover:scale-110 hover:mx-4">
            <li>Work</li>
          </a>
          <a
            href="#education"
            className="transition-all duration-300 group-hover:opacity-50 hover:opacity-100 hover:scale-110 hover:mx-4"
          >
            <li>Education</li>
          </a>
          <a
            href="#contact"
            className="transition-all duration-300 group-hover:opacity-50 hover:opacity-100 hover:scale-110 hover:mx-4"
          >
            <li>Contact</li>
          </a>
        </ul>
        <div className="w-0.5 h-10 bg-gray-500 sm:block hidden"></div>
        <a href="Prteek_Gupta_Frontend_dev.pdf" className="m-2 cursor-pointer bg-gray-300 rounded-2xl p-2 text-black hover:bg-gray-400">
          Download Resume
        </a>
      </section>
    </div>
  );
}

export default Navbar;
