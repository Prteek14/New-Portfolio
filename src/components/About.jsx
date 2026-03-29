import React from "react";

function About() {
  return (
    <section id="about" className="bg-slate-900 w-full h-full mt-2 p-10">
      <h2 className="bg-gray-500 text-center w-fit mx-auto p-2 mt-2 rounded-2xl">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row justify-around items-center gap-6 p-5">
        <img
          src="/main_pic.jpg"
          alt="my_pic"
          className="pl-2 pb-2 md:w-90 md:h-130 shadow-[-25px_25px_0px_#374151] mt-5 "
        />

        <section className="md:w-175 py-16">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Curious about me?
            <span> </span>
            <span className="bg-linear-to-r from-[#92fe9d] to-[#00c9ff] bg-clip-text text-transparent">
              Here you have it.
            </span>
          </h2>

          {/* Content */}
          <div className="space-y-5 text-gray-300 text-sm md:text-base leading-relaxed">
            <p>
              I’m a{" "}
              <span className="text-white font-medium">Frontend Developer</span>{" "}
              focused on building responsive, interactive, and user-centric web
              applications. I enjoy transforming ideas into clean, scalable
              interfaces using <span className="text-white">JavaScript</span>{" "}
              and <span className="text-white">React</span>, with strong
              attention to performance, maintainability, and overall user
              experience.
            </p>

            <p>
              My approach goes beyond just UI — I focus on writing structured,
              efficient code and building systems that are easy to scale and
              maintain. I have a solid foundation in{" "}
              <span className="text-white">Data Structures & Algorithms</span>{" "}
              and a practical understanding of system design concepts.
            </p>

            <p>
              I work with modern tools like{" "}
              <span className="text-white">
                React, Redux, React Query, and Git
              </span>
              , and I’m comfortable collaborating in structured development
              environments. I also explore{" "}
              <span className="text-white">AI & Generative AI</span> to build
              smarter solutions.
            </p>

            <p>
              I’m continuously learning and refining my skills, staying aligned
              with modern development practices and evolving technologies.
            </p>

            <p>
              I enjoy building things that are not just functional, but
              meaningful and impactful.
            </p>
          </div>

          {/* Bottom Tagline */}
          <div className="mt-8 text-lg md:text-xl font-semibold text-transparent bg-linear-to-r from-[#92fe9d] to-[#00c9ff] bg-clip-text">
            Driven to build. Focused on impact. Always learning.
          </div>
        </section>
      </div>
    </section>
  );
}

export default About;
