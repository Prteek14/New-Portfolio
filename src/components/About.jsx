import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  }),
};

const imgReveal = {
  hidden: { scaleY: 1 },
  visible: {
    scaleY: 0,
    transition: { duration: 0.9, ease:"easeinOut"},
  },
};

const paragraphs = [
  <>
    I'm a{" "}
    <span className="text-white font-medium">Frontend Developer</span>{" "}
    focused on building responsive, interactive, and user-centric web
    applications. I enjoy transforming ideas into clean, scalable interfaces
    using <span className="text-white">JavaScript</span> and{" "}
    <span className="text-white">React</span>, with strong attention to
    performance, maintainability, and overall user experience.
  </>,
  <>
    My approach goes beyond just UI — I focus on writing structured, efficient
    code and building systems that are easy to scale and maintain. I have a
    practical understanding of{" "}
    <span className="text-white">Data Structures & Algorithms</span> and enjoy
    applying problem-solving thinking to real frontend challenges.
  </>,
  <>
    I work with modern tools like{" "}
    <span className="text-white">
      React, Node.js, Express, MongoDB, and Git
    </span>
    , and I'm comfortable building full-stack MERN applications from scratch —
    including authentication, REST APIs, and cloud deployments on Vercel and
    Render.
  </>,
  <>
    I'm currently doing a{" "}
    <span className="text-white">Frontend internship</span> at{" "}
    <span className="text-white">Unified Mentor</span>. I've explored AI/NLP
    concepts through a research collaboration focused on resume screening and
    skill extraction — which gave me a closer look at how modern AI systems are
    actually built.
  </>,
  <>I'm continuously learning and refining my skills, staying aligned with modern development practices and evolving technologies.</>,
  <>I enjoy building things that are not just functional, but meaningful and impactful.</>,
];

function About() {
  return (
    <section id="about" className="bg-slate-900 w-full h-full p-2">
      <div className="flex flex-col lg:flex-row justify-around items-center gap-6 p-5">

        {/* Image with wipe reveal */}
        <div className="relative w-60 h-80 md:w-90 md:h-130 mt-5 shrink-0">
          <img
            src="/main_pic.jpg"
            alt="my_pic"
            className="w-full h-full object-cover pl-2 pb-2 shadow-[-25px_25px_0px_#374151]"
          />
          <motion.div
            className="absolute inset-0 bg-slate-900 origin-bottom"
            variants={imgReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
        </div>

        {/* Text content */}
        <section className="lg:w-175 py-10">

          {/* Heading */}
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            Curious about me?{" "}
            <span className="bg-linear-to-r from-[#92fe9d] to-[#00c9ff] bg-clip-text text-transparent">
              Here you have it.
            </span>
          </motion.h2>

          {/* Paragraphs */}
          <div className="space-y-5 text-gray-300 text-sm md:text-base leading-relaxed text-justify">
            {paragraphs.map((para, i) => (
              <motion.p
                key={i}
                custom={i + 1}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
              >
                {para}
              </motion.p>
            ))}
          </div>

          {/* Tagline */}
          <motion.div
            className="mt-8 text-lg md:text-xl font-semibold text-transparent bg-linear-to-r from-[#92fe9d] to-[#00c9ff] bg-clip-text"
            custom={paragraphs.length + 1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            Driven to build. Focused on impact. Always learning.
          </motion.div>

        </section>
      </div>
    </section>
  );
}

export default About;