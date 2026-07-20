import React from "react";
import WorkCard from "./WorkCards/WorkCard";
import SampleCard from "./WorkCards/SampleCard";

function Work() {
  const projectData = [
  {
    title: "Campus Placement Website",
    text: "MERN-based Campus Placement Website with JWT auth, role-based access, and real-time application tracking.",
    image: "/signup.jpg",
    features: [
      "🔐 JWT-based Authorization & RBAC (Admin/Student)",
      "⚡ RESTful API with Modular MVC Backend",
      "☁️ Cloudinary File Storage",
      "📊 Real-Time Interactive Dashboards",
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Cloudinary", "Tailwind CSS"],
    link: "https://cpms-six.vercel.app/",
  },
  {
    title: "JiraMini",
    text: "Jira-inspired task board with CRUD, priority filtering, and undo, synced via a custom browser event system.",
    image: "/JiraBoard.png",
    features: [
      "✅ Full Task CRUD with Assignee & Priority",
      "🔼🔽 Drag-free Reordering Across Columns",
      "🎯 Filter by Priority & Assignee",
      "↩️ Undo Last Edit/Delete/Reorder",
    ],
    techStack: ["React", "Tailwind CSS", "localStorage", "Custom Event System"],
    link: "https://jira-board-tau.vercel.app/",
  },
  {
    title: "Metal Rate Calculator",
    text: "React app providing city-wise metal price estimations for Gold, Silver, and Platinum with smart caching.",
    image: "/Website_SS.avif",
    features: [
      "📈 Real-Time Price Simulation",
      "🏙️ City-wise Rate Estimation",
      "💾 Offline Support via Caching",
      "👥 100+ Active Users",
    ],
    techStack: ["React", "REST API", "Caching Logic"],
    link: "https://gspratecalc.netlify.app/",
  },
  {
    title: "New Portfolio",
    text: "Personal portfolio site presenting a frontend developer's identity, skills, and projects.",
    image: "/image.avif",
    features: [
      "🧩 Reusable Component-Based Architecture",
      "🖱️ Section-Based Smooth Navigation",
      "🎬 Animated Hero Experience",
      "📬 Integrated Contact & Social Links",
    ],
    techStack: ["React", "Tailwind CSS", "AI integration"],
    link: "https://prteek36.vercel.app/",
  },
  {
    title: "React Mini Apps",
    text: "Collection of small React projects showcasing core frontend skills and API integration.",
    image: "/React-mini-site.avif",
    features: [
      "✅ To-Do App with Add/Delete/Complete",
      "🎂 Age Calculator from Birthdate",
      "🌦️ Live Weather via OpenWeatherMap API",
      "📱 Fully Responsive UI",
    ],
    techStack: ["React", "OpenWeatherMap API"],
    link: "https://react-mini-site.netlify.app/",
  },
  {
    title: "Memories",
    text: "Responsive image gallery with a smooth overlay modal viewer for focused browsing.",
    image: "/website_img.avif",
    features: [
      "🖼️ Full-Screen Overlay Image Viewer",
      "📱 Fully Responsive Layout",
      "✨ Smooth Open/Close Transitions",
      "🎨 Easily Customizable Images & Styles",
    ],
    techStack: ["HTML", "CSS", "JavaScript"],
    link: "https://memories-prteek.netlify.app/",
  },
  {
    title: "Authentication Page",
    text: "Full-stack MERN authentication app with registration, login, and protected routes.",
    image: "Auth_app.avif",
    features: [
      "🔑 User Registration & Login",
      "🔒 Password Encryption",
      "🛡️ Protected Routes",
      "💾 Session Management via localStorage",
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "localStorage"],
    link: "https://auth-app-frontend-d0e5.onrender.com/",
  },
];


  return (
    <section id="work" className="bg-gray-800/95 w-full py-10 px-6">
      <p className="text-center mb-10 text-xl font-semibold bg-linear-to-r from-[#f093fb] to-[#f5576c] bg-clip-text text-transparent">
        Some of the noteworthy projects I have built:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 m-4 p-4">
        {projectData.map((project, index) => (
          <WorkCard data={project} key={index} />
        ))}
        <SampleCard/>
      </div>
    </section>
  );
}

export default Work;
