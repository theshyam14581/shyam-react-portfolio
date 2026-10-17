
import React from "react";

import html from "/html.jpg";
import css from "/css.jpg";
import js from "/javascript.jpg";
import react from "/react.jpg";
import tailwindCss from "/tailwind.jpg";
import node from "/node.jpg";
import python from "/python.jpg";
import git from "/git.jpg";

import { FaCode, FaGraduationCap } from "react-icons/fa";
import { SiSalesforce } from "react-icons/si";
import { useTheme } from "../context/ThemeContext";

const Experiance = () => {
  const { theme } = useTheme();

  const themes = {
    dark: {
      section: "bg-slate-950 text-white",
      heading: "text-white",
      muted: "text-slate-400",
      accent: "text-sky-400",
      badge: "border-sky-400/20 bg-sky-400/10 text-sky-300",
      card: "border-slate-800 bg-slate-900/70 hover:border-sky-400/40",
      logoBg: "bg-slate-800/70",
      category: "text-slate-400",
      divider: "border-slate-800",
    },

    light: {
      section: "bg-white text-slate-900",
      heading: "text-slate-950",
      muted: "text-slate-600",
      accent: "text-indigo-600",
      badge: "border-indigo-200 bg-indigo-50 text-indigo-700",
      card: "border-slate-200 bg-white hover:border-indigo-300",
      logoBg: "bg-slate-50",
      category: "text-slate-500",
      divider: "border-slate-200",
    },

    aurora: {
      section:
        "bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white",
      heading: "text-white",
      muted: "text-purple-200/70",
      accent: "text-emerald-300",
      badge:
        "border-emerald-300/20 bg-emerald-300/10 text-emerald-200",
      card:
        "border-purple-400/20 bg-white/5 hover:border-emerald-300/40 hover:bg-white/10",
      logoBg: "bg-purple-950/50",
      category: "text-purple-200/60",
      divider: "border-purple-400/20",
    },
  };

  const selected = themes[theme] || themes.dark;

  const skills = [
    { id: 1, logo: html, name: "HTML5", category: "Frontend" },
    { id: 2, logo: css, name: "CSS3", category: "Frontend" },
    { id: 3, logo: js, name: "JavaScript", category: "Frontend" },
    { id: 4, logo: react, name: "React.js", category: "Frontend" },
    { id: 5, logo: tailwindCss, name: "Tailwind CSS", category: "Frontend" },
    { id: 6, logo: node, name: "Node.js", category: "Backend" },
    { id: 7, logo: python, name: "Python", category: "Programming" },
    { id: 8, logo: git, name: "Git & GitHub", category: "Tools" },
  ];

  const training = [
    {
      id: 1,
      title: "MERN Stack Development",
      institute: "AU Ignite Future Skills Academy",
      description:
        "Training in full-stack web development using MongoDB, Express.js, React.js, and Node.js, with practical work on responsive interfaces, REST APIs, and database integration.",
      icon: <FaCode />,
      tags: ["React", "Node.js", "Express.js", "MongoDB"],
    },
    {
      id: 2,
      title: "Salesforce Administrator Training",
      institute: "Compucom Institute of Technology and Management",
      description:
        "Training in Salesforce administration, including object management, data management, declarative automation, and platform fundamentals.",
      icon: <SiSalesforce />,
      tags: ["CRM", "Object Management", "Automation"],
    },
  ];

  return (
    <section
      id="experience"
      name="Experiance"
      className={`${selected.section} transition-colors duration-500`}
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24 lg:px-12">
        {/* Section heading */}
        <div className="mb-12 max-w-3xl">
          <div
            className={`mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] ${selected.badge}`}
          >
            <FaGraduationCap />
            Skills & Learning
          </div>

          <h2
            className={`text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl ${selected.heading}`}
          >
            Technical Skills{" "}
            <span className={selected.accent}>& Training.</span>
          </h2>

          <p className={`mt-5 text-base leading-8 sm:text-lg ${selected.muted}`}>
            I am a developer focused on building my technical skills through
            professional training, hands-on practice, and personal projects.
          </p>
        </div>

        {/* Training cards */}
        <div className="mb-16 grid gap-6 md:grid-cols-2">
          {training.map((item) => (
            <article
              key={item.id}
              className={`group rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 ${selected.card}`}
            >
              <div
                className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${selected.badge}`}
              >
                {item.icon}
              </div>

              <h3 className={`text-xl font-extrabold sm:text-2xl ${selected.heading}`}>
                {item.title}
              </h3>

              <p className={`mt-3 font-semibold ${selected.accent}`}>
                {item.institute}
              </p>

              <p className={`mt-4 text-sm leading-7 ${selected.muted}`}>
                {item.description}
              </p>

              <div className={`mt-6 flex flex-wrap gap-2 border-t pt-5 ${selected.divider}`}>
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${selected.badge}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Technical skills heading */}
        <div className={`mb-8 border-t pt-10 ${selected.divider}`}>
          <p className={`mb-3 text-xs font-bold uppercase tracking-[0.2em] ${selected.accent}`}>
            Technologies & Tools
          </p>

          <h3 className={`text-2xl font-extrabold sm:text-3xl ${selected.heading}`}>
            My Technical Skills
          </h3>

          <p className={`mt-3 max-w-2xl leading-7 ${selected.muted}`}>
            Technologies I am learning and using to build responsive
            interfaces, web applications, and full-stack projects.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-5">
          {skills.map((item, index) => (
            <article
              key={item.id}
              className={`group relative flex min-h-52 flex-col items-center justify-center overflow-hidden rounded-2xl border p-5 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${selected.card}`}
            >
              <span className={`absolute right-3 top-3 text-xs font-bold ${selected.category}`}>
                0{index + 1}
              </span>

              <div
                className={`mb-5 flex h-20 w-20 items-center justify-center rounded-2xl p-3 transition-transform duration-300 group-hover:scale-110 ${selected.logoBg}`}
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </div>

              <h4 className={`text-sm font-bold sm:text-base ${selected.heading}`}>
                {item.name}
              </h4>

              <span className={`mt-2 text-xs font-medium ${selected.category}`}>
                {item.category}
              </span>
            </article>
          ))}
        </div>

        {/* Bottom note */}
        <div className={`mt-12 border-t pt-7 text-center ${selected.divider}`}>
          <p className={`text-sm leading-7 ${selected.muted}`}>
            Consistent practice. Practical projects. Continuous improvement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experiance;
