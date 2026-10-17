
import React from "react";
import { ReactTyped } from "react-typed";
import pic from "/shyamprofile.png";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";

import { FaReact } from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiTailwindcss,
} from "react-icons/si";

import { useTheme } from "../context/ThemeContext";

const Home = () => {
  const { theme } = useTheme();

  const themes = {
    dark: {
      section: "bg-slate-950 text-white",
      muted: "text-slate-400",
      heading: "text-white",
      accent: "text-sky-400",
      badge: "border-sky-400/20 bg-sky-400/10 text-sky-300",
      primary:
        "bg-sky-500 text-white hover:bg-sky-400 shadow-lg shadow-sky-500/20",
      secondary:
        "border border-slate-700 text-slate-200 hover:bg-slate-800",
      card: "border-slate-800 bg-slate-900/70 text-slate-300 hover:border-sky-400/50 hover:bg-slate-900",
      imageBorder: "border-slate-800",
      glow: "bg-sky-500/20",
      divider: "border-slate-800",
    },

    light: {
      section: "bg-white text-slate-900",
      muted: "text-slate-600",
      heading: "text-slate-950",
      accent: "text-indigo-600",
      badge: "border-indigo-200 bg-indigo-50 text-indigo-700",
      primary:
        "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-500/20",
      secondary:
        "border border-slate-300 text-slate-800 hover:bg-slate-100",
      card: "border-slate-200 bg-white text-slate-600 hover:border-indigo-300 hover:bg-indigo-50/50",
      imageBorder: "border-white",
      glow: "bg-indigo-200/70",
      divider: "border-slate-200",
    },

    aurora: {
      section:
        "bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white",
      muted: "text-purple-200/70",
      heading: "text-white",
      accent: "text-emerald-300",
      badge:
        "border-emerald-300/20 bg-emerald-300/10 text-emerald-200",
      primary:
        "bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-950 hover:from-emerald-300 hover:to-cyan-300 shadow-lg shadow-emerald-400/20",
      secondary:
        "border border-purple-400/30 text-purple-100 hover:bg-purple-400/10",
      card: "border-purple-400/20 bg-white/5 text-purple-100 hover:border-emerald-300/50 hover:bg-white/10",
      imageBorder: "border-purple-300/30",
      glow: "bg-purple-500/25",
      divider: "border-purple-400/20",
    },
  };

  const selected = themes[theme] || themes.dark;

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/theshyam14581",
      icon: <FaGithub />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/shyam-bairwa",
      icon: <FaLinkedin />,
    },
    {
      name: "Email",
      url: "mailto:shyambairwa16@gmail.com",
      icon: <FaEnvelope />,
    },
  ];

  const technologies = [
    { name: "React", icon: <FaReact />, color: "text-cyan-400" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-500" },
    { name: "Express.js", icon: <SiExpress />, color: selected.accent },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      color: "text-cyan-400",
    },
  ];

  return (
    <section
      id="home"
      name="Home"
      className={`relative isolate overflow-hidden ${selected.section} transition-colors duration-500`}
    >
      {/* Decorative background glow */}
      <div
        className={`pointer-events-none absolute -left-32 top-20 -z-10 h-72 w-72 rounded-full ${selected.glow} blur-3xl`}
      />

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
          {/* Introduction */}
          <div className="order-2 space-y-7 lg:order-1">
            <div
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] ${selected.badge}`}
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Welcome to my portfolio
            </div>

            <div className="space-y-4">
              <p className={`text-lg font-medium ${selected.muted}`}>
                Hello, I'm
              </p>

              <h1
                className={`text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl ${selected.heading}`}
              >
                Shyam Sundar{" "}
                <span className={selected.accent}>Bairwa</span>
              </h1>

              <div
                className={`flex min-h-16 flex-wrap items-center gap-x-3 gap-y-1 text-xl font-bold sm:text-2xl lg:text-3xl ${selected.heading}`}
              >
                <span className={selected.muted}>I'm a</span>

                <span className={selected.accent}>
                  <ReactTyped
                    strings={[
                      "MERN Stack Developer",
                      "Frontend Developer",
                      "Web Developer",
                      "Tech Enthusiast",
                    ]}
                    typeSpeed={50}
                    backSpeed={30}
                    backDelay={1200}
                    loop
                  />
                </span>
              </div>
            </div>

            <p
              className={`max-w-2xl text-base leading-8 sm:text-lg ${selected.muted}`}
            >
              I'm a B.Tech Computer Science student passionate about building
              responsive and user-friendly web applications. I work with React,
              Node.js, Express.js, and MongoDB to develop full-stack projects.
              I have also completed Salesforce Admin training and enjoy
              learning new technologies and solving programming problems.
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://github.com/theshyam14581"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-bold transition-all duration-300 hover:-translate-y-1 ${selected.primary}`}
              >
                View GitHub <FaArrowRight />
              </a>

              <a
                href="#about"
                className={`inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-bold transition-all duration-300 hover:-translate-y-1 ${selected.secondary}`}
              >
                About Me
              </a>

              <a
                href="/shyam-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-bold transition-all duration-300 hover:-translate-y-1 ${selected.secondary}`}
              >
                <FaDownload /> View Resume
              </a>
            </div>

            {/* Social links */}
            <div className="space-y-4 pt-3">
              <p className={`text-sm font-semibold ${selected.muted}`}>
                LET'S CONNECT
              </p>

              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target={social.url.startsWith("mailto:") ? undefined : "_blank"}
                    rel={
                      social.url.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    aria-label={social.name}
                    title={social.name}
                    className={`flex h-12 w-12 items-center justify-center rounded-xl border text-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 ${selected.card}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Profile image */}
          <div className="order-1 flex justify-center lg:order-2">
            <div className="group relative">
              <div
                className={`absolute -inset-5 rounded-full ${selected.glow} blur-3xl transition duration-500 group-hover:scale-110`}
              />

              <div
                className={`absolute -inset-2 rounded-full border ${selected.imageBorder} opacity-70 transition-transform duration-700 group-hover:rotate-6`}
              />

              <div
                className={`relative h-64 w-64 overflow-hidden rounded-full border-4 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] sm:h-80 sm:w-80 lg:h-[26rem] lg:w-[26rem] ${selected.imageBorder}`}
              >
                <img
                  src={pic}
                  alt="Shyam Sundar Bairwa - MERN Stack Developer"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <div
                className={`absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-2xl border px-5 py-3 shadow-xl backdrop-blur-xl ${selected.card}`}
              >
                <p className="text-sm font-bold">Full Stack Development</p>
                <p className={`mt-1 text-center text-xs ${selected.muted}`}>
                  React · Node.js · MongoDB
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Technology stack */}
        <div className={`mt-24 border-t pt-10 ${selected.divider}`}>
          <div className="mb-8 text-center">
            <p
              className={`text-xs font-bold uppercase tracking-[0.25em] ${selected.accent}`}
            >
              My Tech Stack
            </p>

            <h2
              className={`mt-3 text-2xl font-extrabold sm:text-3xl ${selected.heading}`}
            >
              Technologies I Work With
            </h2>

            <p className={`mt-3 text-sm ${selected.muted}`}>
              Tools I use to turn ideas into real applications.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((technology) => (
              <div
                key={technology.name}
                className={`flex items-center gap-3 rounded-2xl border px-5 py-4 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${selected.card}`}
              >
                <span className={`text-2xl ${technology.color}`}>
                  {technology.icon}
                </span>

                <span className="text-sm font-bold sm:text-base">
                  {technology.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
