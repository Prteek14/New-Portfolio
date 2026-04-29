import React from "react";

function Education() {
  return (
    <section id="education" className="bg-slate-950 w-full py-16 px-6">
      <h2 className="bg-gray-700 text-center w-fit mx-auto px-4 py-1 rounded-xl text-sm">
        Education
      </h2>
      <p className="text-center mt-4 text-xl text-gray-400">
        My academic backgrond
      </p>
      <div className="flex flex-col md:flex-row gap-8 m-5 w-4/5 mx-auto">
        {/* Card 1 */}
        <section className="flex-1 border border-gray-600 bg-slate-800 p-6 rounded-2xl  transition-all duration-300 hover:scale-105 hover:shadow-[10px_10px_8px_#374151]">
          <h2 className="text-2xl font-semibold bg-linear-to-r from-[#92fe9d] to-[#00c9ff] bg-clip-text text-transparent">
            High School
          </h2>
          <p>A.B.V. Inter College, Shahjahanpur, U.P.</p>
          <p>2019-2020</p>
          <p>86 %</p>
        </section>

        {/* Card 2 */}
        <section className="flex-1 border border-gray-600 bg-slate-800 p-6 rounded-2xl  transition-all duration-300 hover:scale-105 hover:shadow-[10px_10px_8px_#374151]">
          <h2 className="text-2xl font-semibold bg-linear-to-r from-[#92fe9d] to-[#00c9ff] bg-clip-text text-transparent">
            Intermediate
          </h2>
          <p>A.B.V. Inter College, Shahjahanpur, U.P.</p>
          <p>2021-2022</p>
          <p>76 %</p>
        </section>

        {/* Card 3 */}
        <section className="flex-1 border border-gray-600 bg-slate-800 p-6 rounded-2xl  transition-all duration-300 hover:scale-105 hover:shadow-[10px_10px_8px_#374151]">
          <h2 className="text-2xl font-semibold bg-linear-to-r from-[#92fe9d] to-[#00c9ff] bg-clip-text text-transparent">Bachelor of Computer Applications</h2>
          <p>Invertis University, Bareilly, U.P.</p>
          <p>2023-2026</p>
          <p>77.56 % (Aggregate)</p>
        </section>
      </div>

      <div className="flex flex-col md:flex-row gap-8 m-5 w-4/5 mx-auto mt-8">
        {/* Card 1 */}
        <section
          className="flex-1 border border-gray-700 bg-slate-800 p-6 rounded-2xl
    transition-all duration-300
    hover:scale-[1.03]
    hover:shadow-[12px_12px_20px_#111827]"
        >
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center bg-linear-to-r from-[#92fe9d] to-[#00c9ff] bg-clip-text text-transparent">
            Web Full Stack Virtual Internship By EduSkills
          </h2>

          <div className="overflow-hidden rounded-xl">
            <img
              src="/internship.avif"
              alt="certificate"
              className="w-full h-80 object-contain transition-transform duration-500 hover:scale-110"
            />
          </div>
        </section>

        {/* Card 2 */}
        <section
          className="flex-1 border border-gray-700 bg-slate-800 p-6 rounded-2xl
    transition-all duration-300
    hover:scale-[1.03]
    hover:shadow-[12px_12px_20px_#111827]"
        >
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center bg-linear-to-r from-[#92fe9d] to-[#00c9ff] bg-clip-text text-transparent">
            React Mastery Course By Code Compile
          </h2>

          <div className="overflow-hidden rounded-xl">
            <img
              src="/certificate.avif"
              alt="certificate"
              className="w-full h-80 object-contain transition-transform duration-500 hover:scale-110"
            />
          </div>
        </section>
      </div>
    </section>
  );
}

export default Education;
