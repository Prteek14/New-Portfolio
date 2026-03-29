import React from "react";
import WorkCard from "./WorkCards/WorkCard";

function Work() {
  const projectData = [
    {
      title: "Metal Rate Calculator",
      text: "Modern React application providing realistic, city-wise metal price estimations for Gold, Silver, and Platinum. Includes API-based base rates, smart fluctuation logic, caching, and responsive UI.",
      image: "/Website_SS.avif",
      points: [
        "⚡ Real-Time Price Simulation",
        "Shows live updated price",
        "Works even offline due to cached data",
        "100+ users used this ",
      ],
      link: "https://gspratecalc.netlify.app/",
    },
    {
      title: "React Mini Apps",
      text: "A collection of small React projects demonstrating core frontend skills, API integration, and responsive UI design. This repository includes: ",
      image: "/React-mini-site.avif",
      points: [
        "To-Do App: Manage tasks with add, delete, and mark-complete functionality.",
        "Age Calculator: Calculate age accurately from a birthdate input.",
        "Weather App: Fetch live weather data from OpenWeatherMap API with detailed info including temperature, humidity, wind speed, sunrise/sunset times, and country.",
      ],
      link: "https://react-mini-site.netlify.app/",
    },
    {
      title: "Memories",
      text: "This is a responsive image gallery project designed to provide a smooth and engaging user experience. The gallery allows users to click on any image to view it in an overlay modal, making it easier to focus on details without navigating away from the page. It’s built using HTML, CSS, and JavaScript, and can be customized with your own images, styles, and animations.",
      image: "/website_img.avif",
      points: [
        "Responsive Layout: Works on all screen sizes.",
        "Overlay Image Viewer: Click an image to view it in a full-screen overlay.",
        "Smooth Transitions: Elegant animations when opening and closing the overlay.",
        "Customizable: Easily replace images and change styles.",
      ],
      link: "https://memories-prteek.netlify.app/",
    },
    {
      title: "New Portfolio",
      text: "This product is a portfolio website created to present a frontend developer's identity, skills, and projects in one place. It includes a hero introduction, an about section, a skills showcase, a work section for project highlights, and a contact area for direct communication and social links.",
      image: "/image.avif",
      points: [
        "Responsive personal portfolio website",
        "Interactive project showcase",
        "Reusable component-based architecture",
        "Section-based navigation",
        "Social and contact integration",
        "Animated hero experience",
      ],
      link: "prteek",
    },
    {
      title: "Portfolio",
      text: "A fully responsive personal portfolio website showcasing my skills, projects, and contact information. This project is built with HTML, CSS, and JavaScript and is designed to highlight my work as a creative and passionate web developer.",
      image: "/portfolio.avif",
      points: [
        "Responsive Design – Works perfectly on desktops, tablets, and mobile devices.",
        "Smooth Scrolling & Animations – Adds a modern and interactive feel.",
        "Navigation Menu Toggle – For mobile-friendly navigation.",
      ],
      link: "https://prteek.netlify.app/",
    },
    {
      title: "Background Color Picker",
      image: "/bg-changer.avif",
      text: "This is a simple web application that changes the background color of the page automatically every 2 seconds. It also displays the current HEX color code being applied. You can start and stop the color change process using the provided buttons.",
      points: [
        "Random HEX color generator.",
        "Background color automatically updates every 2 seconds.",
        "Displays the HEX code value of the current background.",
        "Start and Stop buttons to control color changes.",
      ],
      link: "https://color-picker-prteek.netlify.app/",
    },
    {
      title: "Authentication App",
      image: "Auth_app.avif",
      text: "A full-stack authentication web application built with the MERN stack (MongoDB, Express, React, Node.js). It supports user registration, login, protected routes, and session management using localStorage.",
      points: [
        "Interactive & User Friendly",
        "Password encryption",
        "Securly Connected Environment",
      ],
      link: "https://auth-app-frontend-d0e5.onrender.com/",
    },
  ];

  return (
    <section id="work" className="bg-slate-900 w-full py-16 px-6">
      <h2 className="bg-gray-700 text-center w-fit mx-auto px-4 py-1 rounded-xl text-sm">
        Work
      </h2>
      <p className="text-center mt-4 text-xl text-gray-400">
        Some of the noteworthy projects I have built:
      </p>
      <div>
        {projectData.map((project, index) => (
          <WorkCard data={project} key={index} isEven={index % 2 === 0} />
        ))}
      </div>
    </section>
  );
}

export default Work;
