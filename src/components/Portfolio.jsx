
import React from "react";

import aiReviewer from "/react.jpg";
import lms from "/html.jpg";
import mern from "/node.jpg";

import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Portfolio = () => {
  const { theme } = useTheme();

  const themes = {
    dark: {
      section: "bg-slate-950 text-white",
      heading: "text-white",
      muted: "text-slate-400",
      accent: "text-sky-400",
      card: "border-slate-800 bg-slate-900/80 hover:border-sky-400/50",
      imageBg: "bg-slate-800/70",
      badge: "border-sky-400/20 bg-sky-400/10 text-sky-300",
      primary:
        "bg-sky-500 text-white hover:bg-sky-400 shadow-lg shadow-sky-500/20",
      secondary:
        "border border-slate-700 text-slate-200 hover:bg-slate-800",
      divider: "border-slate-800",
    },

    light: {
      section: "bg-white text-slate-900",
      heading: "text-slate-950",
      muted: "text-slate-600",
      accent: "text-indigo-600",
      card: "border-slate-200 bg-white hover:border-indigo-300",
      imageBg: "bg-slate-100",
      badge: "border-indigo-200 bg-indigo-50 text-indigo-700",
      primary:
        "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-500/20",
      secondary:
        "border border-slate-300 text-slate-800 hover:bg-slate-100",
      divider: "border-slate-200",
    },

    aurora: {
      section:
        "bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white",
      heading: "text-white",
      muted: "text-purple-200/70",
      accent: "text-emerald-300",
      card:
        "border-purple-400/20 bg-white/5 hover:border-emerald-300/50 hover:bg-white/10",
      imageBg: "bg-purple-950/70",
      badge:
        "border-emerald-300/20 bg-emerald-300/10 text-emerald-200",
      primary:
        "bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-950 hover:from-emerald-300 hover:to-cyan-300",
      secondary:
        "border border-purple-400/30 text-purple-100 hover:bg-purple-400/10",
      divider: "border-purple-400/20",
    },
  };

  const selected = themes[theme] || themes.dark;

  const projects = [
    {
      id: 1,
      image: aiReviewer,
      category: "AI & Full Stack",
      name: "AI Reviewer",
      description:
        "A full-stack AI-powered application that generates reviews using Google Gemini AI, with secure authentication, review history, and PDF downloads.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Gemini AI"],
      github: "https://github.com/theshyam14581/AI-Reviewer",
      demo: "",
    },
    {
      id: 2,
      image: lms,
      category: "Web Application",
      name: "Library Management System",
      description:
        "A library management application designed to organize books, manage users, and provide a user-friendly interface for library operations.",
      tech: ["React", "JavaScript", "Tailwind CSS"],
      github: "",
      demo: "",
    },
    {
      id: 3,
      image: mern,
      category: "Full Stack Development",
      name: "MERN Stack Projects",
      description:
        "Web development projects focused on responsive interfaces, REST APIs, CRUD operations, authentication, and database integration.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      github: "",
      demo: "",
    },
  ];

  return (
    <section
      id="portfolio"
      name="Portfolio"
      className={`${selected.section} relative overflow-hidden transition-colors duration-500`}
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24 lg:px-12">
        {/* Section heading */}
        <div className="mb-12 max-w-3xl">
          <div
            className={`mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] ${selected.badge}`}
          >
            <FaCode />
            My work
          </div>

          <h2
            className={`text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl ${selected.heading}`}
          >
            Featured <span className={selected.accent}>Projects.</span>
          </h2>

          <p className={`mt-5 max-w-2xl text-base leading-8 sm:text-lg ${selected.muted}`}>
            Here are some of my development projects where I apply my skills
            in frontend development, backend APIs, databases, and AI
            integration.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`group flex flex-col overflow-hidden rounded-2xl border shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${selected.card}`}
            >
              {/* Project image */}
              <div
                className={`relative flex h-52 items-center justify-center overflow-hidden p-6 ${selected.imageBg}`}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className={`absolute -right-10 -top-10 h-36 w-36 rounded-full blur-3xl ${selected.badge}`} />
                </div>

                <img
                  src={project.image}
                  alt={`${project.name} project preview`}
                  loading="lazy"
                  className="relative z-10 h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />

                <span
                  className={`absolute left-4 top-4 z-20 rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-md ${selected.badge}`}
                >
                  {project.category}
                </span>
              </div>

              {/* Project details */}
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <h3
                    className={`text-xl font-extrabold leading-snug ${selected.heading}`}
                  >
                    {project.name}
                  </h3>

                  <span className={`text-sm font-bold ${selected.accent}`}>
                    0{index + 1}
                  </span>
                </div>

                <p className={`mb-6 text-sm leading-7 ${selected.muted}`}>
                  {project.description}
                </p>

                {/* Technology badges */}
                <div className="mb-7 flex flex-wrap gap-2">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${selected.badge}`}
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Project links */}
                <div className={`mt-auto flex flex-wrap gap-3 border-t pt-5 ${selected.divider}`}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 ${selected.primary}`}
                    >
                      <FaGithub className="text-base" />
                      Source Code
                      <FaExternalLinkAlt className="text-xs" />
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 ${selected.secondary}`}
                    >
                      Live Demo
                      <FaExternalLinkAlt className="text-xs" />
                    </a>
                  )}

                  {!project.github && !project.demo && (
                    <p className={`text-sm ${selected.muted}`}>
                      Project links coming soon
                    </p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom note */}
        <div className={`mt-12 border-t pt-8 text-center ${selected.divider}`}>
          <p className={`text-sm leading-7 ${selected.muted}`}>
            Always learning, building, and improving — one project at a time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
