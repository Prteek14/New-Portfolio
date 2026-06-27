import { createElement, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
} from "react-icons/fi";

const socialLinks = [
  {
    icon: FiGithub,
    href: "https://github.com/Prteek14",
    label: "GitHub",
  },
  {
    icon: FiLinkedin,
    href: "https://linkedin.com/in/prteek-gupta",
    label: "LinkedIn",
  },
];

const contactInfo = [
  {
    icon: FiMail,
    label: "email",
    value: "prteekgupta36@gmail.com",
  },
  {
    icon: FiPhone,
    label: "phone",
    value: "+91 7398823474",
  },
  {
    icon: FiMapPin,
    label: "location",
    value: "Bareilly, U.P., India",
  },
];

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      toast.success("Message sent successfully! 🎉");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Something went wrong. Try again.");
      setForm({ name: "", email: "", subject: "", message: "" });
    }
  };
  return (
    <section
      id="contact"
      className=" min-h-[85vh] relative overflow-hidden bg-[#090f1d]  p-8"
    >
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
      {/* ── Glow balls ── */}
      <div className="absolute -top-16 -left-16 w-56 h-56 rounded-full bg-cyan-500/10 pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-44 h-44 rounded-full bg-violet-500/10 pointer-events-none" />

      {/* ── Content ── */}
      <p className="text-center text-lg font-medium bg-linear-to-r from-[#4facfe] to-[#00f2fe]  bg-clip-text text-transparent mb-5 lg:mb-22">
        What’s next? Feel free to reach out if you're looking for a developer,
        have a question, or just want to connect.
      </p>
      <div className="relative z-10 mx-auto flex flex-col lg:flex-row gap-8 sm:w-3/5 lg:w-4/5 lg:items-center lg:justify-center lg:scale-110">
        {/* Left — Contact info */}
        <div className="flex flex-col gap-4 flex-1 ">
          <div>
            <h2 className="text-2xl font-medium text-slate-100 leading-snug">
              Let&apos;s{" "}
              <span className="bg-linear-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                work together
              </span>
            </h2>
            <p className="text-sm text-slate-500 mt-1">reach out anytime</p>
          </div>

          {/* Info cards */}
          <div className="flex flex-col gap-3">
            {contactInfo.map(({ icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-4 bg-[#111827] border border-[#1e293b] rounded-xl px-4 py-3 hover:border-cyan-500/30 transition-colors duration-200"
              >
                <div className="w-9 h-9 rounded-lg bg-linear-to-br from-[#0e7490] to-[#6d28d9] flex items-center justify-center text-white shrink-0">
                  {createElement(icon, { size: 18, strokeWidth: 1.8 })}
                </div>
                <div>
                  <p className="text-[11px] text-slate-500 uppercase tracking-widest">
                    {label}
                  </p>
                  <p className="text-sm text-slate-200 font-medium">{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Social links */}
          <div className="flex gap-3 mt-1">
            {socialLinks.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-lg bg-[#1e293b] border border-[#334155] flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all duration-200"
              >
                {createElement(icon, { size: 17, strokeWidth: 1.8 })}
              </a>
            ))}
          </div>
        </div>

        {/* Right — Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 flex-[1.4]"
        >
          {/* Name + Email row */}
          <div className="flex gap-3">
            <div className="flex flex-col gap-1 flex-1">
              <label
                htmlFor="name"
                className="text-[11px] text-slate-500 uppercase tracking-widest"
              >
                name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Full Name"
                required
                autoComplete="true"
                className="bg-[#111827] border border-[#1e293b] rounded-lg px-3 py-2.5 text-sm text-slate-200 placeholder-[#334155] focus:outline-none focus:border-cyan-500/40 transition-colors w-full"
              />
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <label
                htmlFor="email"
                className="text-[11px] text-slate-500 uppercase tracking-widest"
              >
                email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                autoComplete="true"
                className="bg-[#111827] border border-[#1e293b] rounded-lg px-3 py-2.5 text-sm text-slate-200 placeholder-[#334155] focus:outline-none focus:border-cyan-500/40 transition-colors w-full"
              />
            </div>
          </div>

          {/* Subject */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="subject"
              className="text-[11px] text-slate-500 uppercase tracking-widest"
            >
              subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={form.subject}
              onChange={handleChange}
              placeholder="What's this about?"
              className="bg-[#111827] border border-[#1e293b] rounded-lg px-3 py-2.5 text-sm text-slate-200 placeholder-[#334155] focus:outline-none focus:border-cyan-500/40 transition-colors w-full"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="message"
              className="text-[11px] text-slate-500 uppercase tracking-widest"
            >
              message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Hi Prateek, I wanted to reach out about..."
              required
              rows={4}
              className="bg-[#111827] border border-[#1e293b] rounded-lg px-3 py-2.5 text-sm text-slate-200 placeholder-[#334155] focus:outline-none focus:border-cyan-500/40 transition-colors resize-none w-full"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="self-start flex items-center gap-2 bg-linear-to-r from-[#0ea5e9] to-[#8b5cf6] text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:opacity-90 active:scale-95 transition-all duration-150"
          >
            <FiSend size={15} strokeWidth={2} />
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
