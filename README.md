# New Portfolio

New Portfolio is a personal developer portfolio built with React, Vite, and Tailwind CSS. It showcases Prteek Gupta's profile, technical stack, selected work, and contact details in a responsive single-page experience.

## Product Image

![New Portfolio Preview](./public/image.avif)

## About The Product

This product is a portfolio website created to present a frontend developer's identity, skills, and projects in one place. It includes a hero introduction, an about section, a skills showcase, a work section for project highlights, and a contact area for direct communication and social links.

## Features

- Fixed navbar with section-based navigation
- Intro section with profile image, role summary, and call-to-action buttons
- About section with personal background and development focus
- Skills grid with technology icons
- Work section with project cards, descriptions, images, and links
- Contact section with email, phone, location, GitHub, and LinkedIn
- Responsive UI built with Tailwind CSS
- Fast React + Vite setup for development and deployment

## Project Structure

```text
Portfolio/
|-- public/
|   |-- portfolio.avif
|   |-- main_pic.jpg
|   |-- New pic.avif
|   `-- other assets
|-- src/
|   |-- components/
|   |   |-- About.jsx
|   |   |-- Contact.jsx
|   |   |-- Intro.jsx
|   |   |-- Navbar.jsx
|   |   |-- Skills.jsx
|   |   |-- Work.jsx
|   |   `-- WorkCards/
|   |       `-- WorkCard.jsx
|   |-- App.jsx
|   |-- App.css
|   |-- index.css
|   `-- main.jsx
|-- package.json
`-- vite.config.js
```

## Main Components

- `Navbar.jsx` handles the top navigation and resume button
- `Intro.jsx` presents the hero section and primary actions
- `About.jsx` describes the developer profile and approach
- `Skills.jsx` lists tools and technologies
- `Work.jsx` stores and renders project showcase data
- `WorkCard.jsx` renders each individual project card
- `Contact.jsx` displays direct contact and social links

## Tech Stack

- React
- Vite
- Tailwind CSS
- JavaScript

## Demo Link 
[![Live Demo](https://img.shields.io/badge/Live-Demo-green?style=for-the-badge&logo=vercel)](https://prteek36.vercel.app/)


## Getting Started

```bash
npm install
npm run dev
```

## Author

Prteek Gupta
