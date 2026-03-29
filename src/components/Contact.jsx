import React from "react";

function Contact() {
  return (
    <section id="contact" className="bg-slate-900 w-full py-16 px-6">
      {/* Heading */}
      <h2 className="bg-gray-700 text-center w-fit mx-auto px-4 py-1 rounded-xl text-sm">
        Contact
      </h2>

      {/* Subtitle */}
      <p className="text-center mt-4 text-gray-400 max-w-xl mx-auto">
        What’s next? Feel free to reach out if you're looking for a developer,
        have a question, or just want to connect.
      </p>

      {/* Contact Info */}
      <div className="mt-10 space-y-6">
        {/* Email */}
        <div className="flex items-center justify-center gap-3">
          <img src="/Gmail_icon_(2020).webp" alt="email" className="w-8 h-8" />
          <p className="text-lg md:text-2xl font-medium hover:text-cyan-400 transition">
            prteekgupta36@gmail.com
          </p>
        </div>

        {/* Phone */}
        <div className="flex items-center justify-center gap-3">
          <img src="/icons8-call-50.png" alt="phone" className="w-8 h-8" />
          <p className="text-lg md:text-2xl font-medium hover:text-cyan-400 transition">
            +91 7398823474
          </p>
        </div>
        {/* Location */}
        <div className="flex items-center justify-center gap-3">
          <img src="/icons8-location-50.png" alt="phone" className="w-6 h-6" />
          <p className="text-lg md:text-xl font-medium hover:text-cyan-400 transition">
            Bareilly, U.P., India
          </p>
        </div>
      </div>

      {/* Social Section */}
      <div className="mt-12 text-center">
        <p className="text-gray-400 mb-4">
          You may also find me on these platforms
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="https://github.com/Prteek14"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2  rounded-xl border border-white/10  text-white font-base bg-linear-to-r from-cyan-500 to-blue-500 transition-all duration-300 hover:scale-105"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/prteekgupta/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2  rounded-xl border border-white/10  text-white font-base bg-linear-to-r from-cyan-500 to-blue-500 transition-all duration-300 hover:scale-105"
          >
            LinkedIn
          </a>


        </div>
      </div>
    </section>
  );
}

export default Contact;
