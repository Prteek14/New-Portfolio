import React, { useState } from "react";

function WorkCard({ data }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const visiblePoints = isExpanded ? data.features : data.features.slice(0, 2);
  const keyTech = isExpanded? data.techStack : [];

  return (
    <div className="group flex h-fit w-full flex-col overflow-hidden rounded-2xl border border-cyan-100/15 bg-slate-900 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-lg hover:shadow-cyan-400/20">
      {/* Image */}
      <section className="aspect-video w-full overflow-hidden bg-slate-800">
        <img
          src={data.image}
          alt={`${data.title} project preview`}
          className="h-full w-full object-fit transition-transform duration-500 group-hover:scale-105"
        />
      </section>

      {/* Content */}
      <section className="relative flex min-h-70 flex-col overflow-hidden bg-slate-900 p-6 text-slate-200 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_1px_1px,rgba(148,163,184,0.14)_1px,transparent_0)] before:bg-size-[16px_16px] before:opacity-70">
        <div className="relative z-10 flex h-full flex-col">
          <h2 className="mb-2 bg-linear-to-r from-cyan-300 to-emerald-300 bg-clip-text text-2xl font-semibold text-transparent md:text-3xl">
            {data.title}
          </h2>

          <p
            className={`mb-4 text-justify text-wrap leading-6 text-slate-300 ${isExpanded ? "" : "line-clamp-3"}`}
          >
            {data.text}
          </p>

          <ul className="list-none mb-5 list-inside  space-y-1 text-sm leading-5 text-slate-300">
            {visiblePoints.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

           <div className="mb-5 flex flex-wrap justify-center items-center gap-3">
            {keyTech.map((item, index) => (
              <span
                key={index}
                className="px-4 py-1.5 text-sm font-medium text-white rounded-full bg-linear-to-r from-[#00c6ff] to-[#0072ff] shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300 cursor-default"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setIsExpanded((expanded) => !expanded)}
              aria-expanded={isExpanded}
              className="rounded-lg border border-cyan-300/30 px-4 py-2 text-sm font-medium text-cyan-200 transition-colors hover:bg-cyan-300/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              {isExpanded ? "Show less" : "Know more"}
            </button>
            <a
              href={data.link}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-linear-to-r from-cyan-500 to-blue-500 px-4 py-2 text-sm font-medium text-white transition-transform duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              View project
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WorkCard;
