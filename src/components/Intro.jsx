import NeuralCanvas from "./NeuralCanvas";

function Intro() {
  return (
    <section className="relative mt-23 p-2 text-center w-full flex flex-col items-center gap-2 font-mono overflow-hidden">
      {/* Background base */}
      <div className="absolute inset-0 -z-10 bg-[#020608]" />

      {/* Neural Network */}
      <NeuralCanvas />

      {/* Your Content */}
      <div className="relative z-10">
        {/* 👇 Your existing intro code */}
        <section className="mt-10 p-2 text-center w-full flex flex-col justify-center items-center gap-2 font-mono">
          <img
            src="/New pic.avif"
            alt="my pic"
            className="w-50 h-50 sm:w-70 sm:h-70 rounded-[50%] flex justify-self-center items-center object-cover border-2 border-black  shadow-[0_0_20px_rgba(0,0,0,0.15)] shadow-cyan-300 hover:scale-105 trasition duration-300"
          />
          <p className="mt-3 text-xl font-semibold bg-linear-to-r from-[#92fe9d] to-[#00c9ff] bg-clip-text text-transparent">
            Hello I'm
          </p>
          <h1 className=" text-4xl md:text-7xl font-semibold bg-linear-to-r from-[#92fe9d] to-[#00c9ff] bg-clip-text text-transparent">
            Prteek Gupta
          </h1>
          <h2 className=" text-gray-400">
            Aspiring Frontend Developer | MERN Stack | AI & Web Technologies
          </h2>
          <p className="text-wrap p-2 sm:w-2/4">
            Building scalable web applications with clean code and exploring AI
            to create smarter user experiences.
          </p>
          <div className="flex justify-center items-center gap-2 p-2 sm:w-2/4">
            {/* Ping Dot */}
            <div className="relative w-2 h-2 flex items-center justify-center">
              {/* Ping */}
              <span className="absolute inset-0 scale-125 animate-ping rounded-full bg-emerald-400 opacity-75 [animation-duration:1.5s]"></span>

              {/* Solid Dot */}
              <span className="relative w-2 h-2 rounded-full bg-emerald-500"></span>
            </div>

            {/* Text */}
            <p className="text-sm sm:text-base">Available to Work</p>
          </div>
          <br />
          <div className="flex gap-3 sm:gap-4 justify-center w-3/4">
            <a
              href="#contact"
              className="bg-[#2cddcb] p-4 rounded-2xl sm:text-lg text-gray-900 hover:shadow-[0_0_15px_(0,0,0,0.30)] shadow-cyan-300 transition duration-300"
            >
              Get in Touch
            </a>
            <a
              href="#work"
              className="bg-[#2cddcb] p-4 text-center rounded-2xl sm:text-lg text-gray-900 hover:shadow-[0_0_15px_(0,0,0,0.30)] shadow-cyan-300 transition duration-300"
            >
              View Projects
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Intro;
