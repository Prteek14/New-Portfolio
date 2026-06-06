import React from "react";

function WorkCard({ data, isEven }) {
  return (
    <div
      className="flex flex-col m-10 lg:flex-row w-4/5  mx-auto rounded-2xl overflow-hidden border border-white/10 mt-5
      hover:shadow-[0_0_24px_rgba(34,211,238,0.65)]
      hover:scale-105 transition-all duration-400 cursor-pointer"
    >
      {/* LEFT: Image */}
      <section
        className={`${isEven ? "bg-gray-700" : "bg-gray-800"} lg:w-1/2 flex justify-center items-center`}
      >
        <img
          src={data.image}
          alt="product"
          className="w-full h-full object-fill lg:rounded-l-2xl"
        />
      </section>

      {/* RIGHT: Content */}
      <section
        className={`${isEven ? "bg-gray-800" : "bg-gray-700"} lg:w-1/2 p-6 flex flex-col justify-center`}
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-2 bg-linear-to-r from-[#a8ff78] to-[#78ffd6] bg-clip-text text-transparent">
          {data.title}
        </h2>

        <p className="text-gray-400 mb-4 text-justify">{data.text}</p>

        <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1 ">
          {data.points.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <a
          href={data.link}
          className="w-fit px-5 py-2 rounded-lg bg-linear-to-r from-cyan-500 to-blue-500 text-white hover:scale-105 transition-all duration-300"
        >
          View Project
        </a>
      </section>
    </div>
  );
}

export default WorkCard;
