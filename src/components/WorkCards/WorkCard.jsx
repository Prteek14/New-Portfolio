import React from "react";

function WorkCard({ data, isEven }) {
  return (
    <div className="flex flex-col md:flex-row w-4/5 md:w-4/6 mx-auto rounded-2xl overflow-hidden shadow-lg border border-white/10 mt-5">
      {/* LEFT: Image */}
      <section
        className={`${isEven ? "bg-gray-700" : "bg-gray-800"} md:w-1/2 flex justify-center items-center p-6`}
      >
        <div>
          <img
            src={data.image}
            alt="product"
            className="w-4/5 h-3/5 object-contain transition-transform duration-500 hover:scale-110 mx-auto rounded-2xl"
          />
        </div>
      </section>

      {/* RIGHT: Content */}
      <section
        className={`${isEven ? "bg-gray-800" : "bg-gray-700"} md:w-1/2 p-6 flex flex-col justify-center`}
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">
          {data.title}
        </h2>

        <p className="text-gray-400 mb-4 ">{data.text}</p>

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
