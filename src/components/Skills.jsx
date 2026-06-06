import React from "react";

const skills = [
  { name: "JavaScript", icon: "/JS.png" },
  { name: "TypeScript", icon: "/TS.png" },
  { name: "React", icon: "/react.png" },
  { name: "Tailwind", icon: "/tailwind.png" },
  { name: "Redux", icon: "/redux-logo.svg" },
  { name: "React Query", icon: "/react query.webp" },
  { name: "Bootstrap", icon: "/bootstrap.png" },
  { name: "HTML", icon: "/html.png" },
  { name: "CSS", icon: "/css.png" },
  { name: "MySQL", icon: "/mysql-logo.svg" },
  { name: "Jest", icon: "/jest.svg" },
  { name: "Node.js", icon: "/node.svg" },
  { name: "Express", icon: "/express.svg" },
  { name: "MongoDB", icon: "/mongo.svg" },
  { name: "Git", icon: "/git.svg" },
];

function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-900 w-full  px-6 min-h-[82vh] pt-5 "
    >
      <p className="text-center mt-4 text-xl font-semibold bg-linear-to-r from-[#c808f3] to-[#da07b6] bg-clip-text text-transparent">
        The skills, tools and technologies I am really good at:
      </p>

      <div className="flex justify-around items-center flex-wrap gap-4 mt-4 p-6">
        {/* ── Card 1: React (Frontend) ── */}
        <div
          className="relative w-44 h-44 bg-slate-800 rounded-2xl flex flex-col
          justify-center items-center overflow-hidden p-4 border-2
          border-cyan-500 hover:border-cyan-300
          hover:shadow-[0_0_24px_rgba(34,211,238,0.65)]
          hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          <svg
            className="absolute inset-0 w-full h-full -rotate-90"
            viewBox="0 0 160 160"
          >
            <defs>
              <linearGradient id="g-react" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
            <circle
              cx="80"
              cy="80"
              r="68"
              fill="none"
              stroke="#334155"
              strokeWidth="6"
            />
            <circle
              cx="80"
              cy="80"
              r="68"
              fill="none"
              stroke="url(#g-react)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray="427"
              strokeDashoffset="85"
            />
          </svg>
          <img
            src="/react.png"
            alt="React"
            width={55}
            height={55}
            className="animate-[spin_5s_linear_infinite] z-10"
          />
          <p className="z-10 mt-2 text-white text-sm">Frontend</p>
        </div>

        {/* ── Card 2: Express (Backend) ── */}
        <div
          className="relative w-44 h-44 bg-slate-800 rounded-2xl flex flex-col
          justify-center items-center overflow-hidden p-4 border-2
          border-slate-400 hover:border-slate-100
          hover:shadow-[0_0_24px_rgba(226,232,240,0.5)]
          hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          <svg
            className="absolute inset-0 w-full h-full -rotate-90"
            viewBox="0 0 160 160"
          >
            <defs>
              <linearGradient
                id="g-express"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#94a3b8" />
                <stop offset="100%" stopColor="#e2e8f0" />
              </linearGradient>
            </defs>
            <circle
              cx="80"
              cy="80"
              r="68"
              fill="none"
              stroke="#334155"
              strokeWidth="6"
            />
            <circle
              cx="80"
              cy="80"
              r="68"
              fill="none"
              stroke="url(#g-express)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray="427"
              strokeDashoffset="140"
            />
          </svg>
          <img
            src="/express.svg"
            alt="Express"
            width={55}
            height={55}
            className="z-10"
          />
          <p className="z-10 mt-2 text-white text-sm">Backend</p>
        </div>

        {/* ── Card 3: MongoDB (Database) ── */}
        <div
          className="relative w-44 h-44 bg-slate-800 rounded-2xl flex flex-col
  justify-center items-center overflow-hidden p-4 border-2
  border-[#175918] hover:border-[#46f049]
  hover:shadow-[0_0_24px_rgba(70,240,73,0.5)]
  hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          <svg
            className="absolute inset-0 w-full h-full -rotate-90"
            viewBox="0 0 160 160"
          >
            <defs>
              <linearGradient id="g-mongo" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#175918" />
                <stop offset="100%" stopColor="#46f049" />
              </linearGradient>
            </defs>
            <circle
              cx="80"
              cy="80"
              r="68"
              fill="none"
              stroke="#334155"
              strokeWidth="6"
            />
            <circle
              cx="80"
              cy="80"
              r="68"
              fill="none"
              stroke="url(#g-mongo)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray="427"
              strokeDashoffset="108"
            />
          </svg>
          <img
            src="/mongo.svg"
            alt="MongoDB"
            width={40}
            height={40}
            className="z-10 "
          />
          <p className="z-10 mt-2 text-white text-sm">Database</p>
        </div>

        {/* ── Card 4: Node.js (Runtime) ── */}
        <div
          className="relative w-44 h-44 bg-slate-800 rounded-2xl flex flex-col
          justify-center items-center overflow-hidden p-4 border-2
         border-[#339933] hover:border-[#5fac5f]
          hover:shadow-[0_0_24px_rgba(95,172,95,0.5)]
          hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          <svg
            className="absolute inset-0 w-full h-full -rotate-90"
            viewBox="0 0 160 160"
          >
            <defs>
              <linearGradient id="g-node" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#339933" />
                <stop offset="100%" stopColor="#5fac5f" />
              </linearGradient>
            </defs>
            <circle
              cx="80"
              cy="80"
              r="68"
              fill="none"
              stroke="#334155"
              strokeWidth="6"
            />
            <circle
              cx="80"
              cy="80"
              r="68"
              fill="none"
              stroke="url(#g-node)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray="427"
              strokeDashoffset="120"
            />
          </svg>
          <img
            src="/node.svg"
            alt="Node.js"
            width={55}
            height={55}
            className="z-10"
          />
          <p className="z-10 mt-2 text-white text-sm">Runtime</p>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 pb-10">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center gap-2 group">
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-12 h-12 object-contain transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(0,255,200,0.6)]"
            />
            <p className="text-sm text-gray-400 group-hover:text-white transition">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
