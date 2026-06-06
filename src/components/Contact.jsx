import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";

const socialLinks = [
  { icon: "github", href: "https://github.com/Prteek14", label: "GitHub" },
  {
    icon: "linkedin",
    href: "https://linkedin.com/in/prateek-gupta",
    label: "LinkedIn",
  },
];

const contactInfo = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    label: "email",
    value: "prteekgupta36@gmail.com",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 5.61 5.61l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: "phone",
    value: "+91 7398823474",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "location",
    value: "Bareilly, U.P., India",
  },
];

const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="17"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="17"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const socialIcons = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
};

const SendIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
);
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
                  {icon}
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
            {socialLinks.map(({ icon, href, label }) => {
              const Icon = socialIcons[icon];
              return (
                <a
                  key={icon}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-[#1e293b] border border-[#334155] flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all duration-200"
                >
                  <Icon />
                </a>
              );
            })}
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
            <SendIcon />
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
