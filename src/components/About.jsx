
import React from "react";
import { FaGraduationCap, FaCode, FaLaptopCode, FaBullseye } from "react-icons/fa";
import { SiSalesforce } from "react-icons/si";
import { useTheme } from "../context/ThemeContext";

const About = () => {
  const { theme } = useTheme();

  const themes = {
    dark: {
      section: "bg-slate-950 text-white",
      heading: "text-white",
      muted: "text-slate-400",
      accent: "text-sky-400",
      badge: "border-sky-400/20 bg-sky-400/10 text-sky-300",
      card: "border-slate-800 bg-slate-900/70 hover:border-sky-400/40",
      softCard: "border-slate-800 bg-slate-900",
      skill: "border-slate-700 bg-slate-900 text-slate-300 hover:border-sky-400/50 hover:bg-sky-400/10 hover:text-sky-300",
      number: "bg-sky-400/10 text-sky-400",
      mission: "border border-sky-400/20 bg-gradient-to-br from-slate-900 to-sky-950",
    },
    light: {
      section: "bg-white text-slate-900",
      heading: "text-slate-950",
      muted: "text-slate-600",
      accent: "text-indigo-600",
      badge: "border-indigo-200 bg-indigo-50 text-indigo-700",
      card: "border-slate-200 bg-white hover:border-indigo-300",
      softCard: "border-indigo-100 bg-indigo-50/60",
      skill: "border-slate-200 bg-slate-50 text-slate-700 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700",
      number: "bg-indigo-100 text-indigo-700",
      mission: "border border-indigo-200 bg-gradient-to-br from-indigo-50 to-white",
    },
    aurora: {
      section: "bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white",
      heading: "text-white",
      muted: "text-purple-200/70",
      accent: "text-emerald-300",
      badge: "border-emerald-300/20 bg-emerald-300/10 text-emerald-200",
      card: "border-purple-400/20 bg-white/5 hover:border-emerald-300/40 hover:bg-white/10",
      softCard: "border-purple-400/20 bg-purple-900/20",
      skill: "border-purple-400/20 bg-white/5 text-purple-100 hover:border-emerald-300/50 hover:bg-emerald-300/10 hover:text-emerald-200",
      number: "bg-emerald-300/10 text-emerald-300",
      mission: "border border-emerald-300/20 bg-gradient-to-br from-purple-950 to-emerald-950/60",
    },
  };

  const selected = themes[theme] || themes.dark;

  const highlights = [
    {
      title: "MERN Stack Development",
      description:
        "Learning and building full-stack web applications using React, Node.js, Express.js, and MongoDB at AU Ignite Future Skills Academy.",
      icon: <FaCode />,
    },
    {
      title: "Salesforce Administration",
      description:
        "Completed training in Salesforce Administration, including platform fundamentals, object management, and automation concepts.",
      icon: <SiSalesforce />,
    },
    {
      title: "Hands-on Projects",
      description:
        "Developed projects such as AI Reviewer and Library Management System to strengthen practical development and problem-solving skills.",
      icon: <FaLaptopCode />,
    },
  ];

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git & GitHub",
    "Salesforce Admin",
    "JWT Authentication",
    "REST APIs",
  ];

  return (
    <section
      id="about"
      name="About"
      className={`relative overflow-hidden ${selected.section} transition-colors duration-500`}
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24 lg:px-12">
        {/* Heading */}
        <div className="mb-14 max-w-3xl">
          <div
            className={`mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] ${selected.badge}`}
          >
            <FaCode />
            Get to know me
          </div>

          <h1
            className={`mb-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl ${selected.heading}`}
          >
            About <span className={selected.accent}>Me.</span>
          </h1>

          <p className={`text-base leading-8 sm:text-lg ${selected.muted}`}>
            Hello, I'm{" "}
            <span className={`font-bold ${selected.heading}`}>
              Shyam Sundar Bairwa
            </span>
            , a B.Tech Computer Science student passionate about web
            development, technology, and building practical digital solutions.
            My journey is focused on turning what I learn into real projects
            and continuously improving my development skills.
          </p>
        </div>

        {/* Education */}
        <div className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <div className={`rounded-xl p-3 ${selected.number}`}>
              <FaGraduationCap className="text-xl" />
            </div>

            <h2 className={`text-2xl font-extrabold ${selected.heading}`}>
              Education
            </h2>
          </div>

          <div
            className={`group rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 ${selected.card}`}
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className={`text-xl font-bold ${selected.heading}`}>
                  Bachelor of Technology (B.Tech)
                </h3>

                <p className={`mt-2 font-semibold ${selected.accent}`}>
                  Computer Science
                </p>

                <p className={`mt-3 ${selected.muted}`}>
                  Compucom Institute of Technology and Management
                </p>

                <p className={`mt-4 max-w-2xl text-sm leading-7 ${selected.muted}`}>
                  Building a strong foundation in programming, software
                  development, and computer science concepts.
                </p>
              </div>

              <div className={`w-fit rounded-xl border px-4 py-2 text-sm font-semibold ${selected.badge}`}>
                B.Tech Student
              </div>
            </div>
          </div>
        </div>

        {/* Training */}
        <div className="mb-16">
          <div className="mb-6">
            <p className={`mb-2 text-xs font-bold uppercase tracking-[0.2em] ${selected.accent}`}>
              Continuous learning
            </p>

            <h2 className={`text-2xl font-extrabold sm:text-3xl ${selected.heading}`}>
              Training & Learning Journey
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div
              className={`group rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${selected.card}`}
            >
              <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${selected.number}`}>
                <FaCode />
              </div>

              <h3 className={`text-xl font-bold ${selected.heading}`}>
                MERN Stack Development
              </h3>

              <p className={`mt-2 font-semibold ${selected.accent}`}>
                AU Ignite Future Skills Academy
              </p>

              <p className={`mt-4 text-sm leading-7 ${selected.muted}`}>
                Developing my full-stack skills through training and practical
                coding in React, Node.js, Express.js, MongoDB, REST APIs,
                authentication, and responsive UI development.
              </p>
            </div>

            <div
              className={`group rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${selected.card}`}
            >
              <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${selected.number}`}>
                <SiSalesforce />
              </div>

              <h3 className={`text-xl font-bold ${selected.heading}`}>
                Salesforce Admin
              </h3>

              <p className={`mt-2 font-semibold ${selected.accent}`}>
                Compucom Institute of Technology and Management
              </p>

              <p className={`mt-4 text-sm leading-7 ${selected.muted}`}>
                Learning Salesforce platform administration, object
                management, automation flows, and the fundamentals of CRM
                customization.
              </p>
            </div>
          </div>
        </div>

        {/* Practical projects */}
        <div className="mb-16">
          <div className="mb-6">
            <p className={`mb-2 text-xs font-bold uppercase tracking-[0.2em] ${selected.accent}`}>
              Practical experience
            </p>

            <h2 className={`text-2xl font-extrabold sm:text-3xl ${selected.heading}`}>
              Learning Through Projects
            </h2>
          </div>

          <div className="grid gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className={`group flex gap-4 rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:gap-6 sm:p-6 ${selected.card}`}
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-xl ${selected.number}`}
                >
                  {item.icon}
                </div>

                <div>
                  <p className={`mb-1 text-xs font-bold ${selected.accent}`}>
                    0{index + 1} / EXPERIENCE
                  </p>

                  <h3 className={`text-lg font-bold ${selected.heading}`}>
                    {item.title}
                  </h3>

                  <p className={`mt-2 text-sm leading-7 ${selected.muted}`}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-16">
          <div className="mb-6">
            <p className={`mb-2 text-xs font-bold uppercase tracking-[0.2em] ${selected.accent}`}>
              My toolkit
            </p>

            <h2 className={`text-2xl font-extrabold sm:text-3xl ${selected.heading}`}>
              Skills & Technologies
            </h2>

            <p className={`mt-3 leading-7 ${selected.muted}`}>
              Technologies and tools I use while learning and developing
              applications.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className={`cursor-default rounded-full border px-4 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 ${selected.skill}`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Career goal */}
        <div
          className={`relative overflow-hidden rounded-3xl border p-7 sm:p-10 lg:p-12 ${selected.mission}`}
        >
          <div className="relative z-10 max-w-3xl">
            <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${selected.number}`}>
              <FaBullseye />
            </div>

            <p className={`mb-3 text-xs font-bold uppercase tracking-[0.2em] ${selected.accent}`}>
              My vision
            </p>

            <h2 className={`mb-5 text-3xl font-black sm:text-4xl ${selected.heading}`}>
              My Goal & Mindset
            </h2>

            <p className={`leading-8 ${selected.muted}`}>
              My goal is to become a skilled software developer by combining
              strong fundamentals, consistent practice, and real-world project
              experience. I believe progress comes from staying curious,
              learning from mistakes, solving problems independently, and
              improving every day. I'm looking forward to opportunities where
              I can contribute, learn from experienced developers, and grow
              professionally.
            </p>
          </div>

          <div className={`pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full opacity-20 blur-3xl ${selected.number}`} />
        </div>
      </div>
    </section>
  );
};

export default About;
