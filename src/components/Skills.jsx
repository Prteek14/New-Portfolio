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
    <section id="skills" className="bg-slate-950 w-full py-16 px-6">

      {/* Heading */}
      <h2  className="bg-gray-700 text-center w-fit mx-auto px-4 py-1 rounded-xl text-sm">
        Skills
      </h2>

      <p className="text-center mt-4 text-xl text-gray-400">
        The skills, tools and technologies I am really good at:
      </p>

      {/* Grid */}
      <div className="max-w-5xl mx-auto mt-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8">

        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 group"
          >
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