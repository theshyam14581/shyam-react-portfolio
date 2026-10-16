
import React from "react";

import aiReviewer from "/react.jpg";
import lms from "/html.jpg";
import mern from "/node.jpg";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image: aiReviewer,
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
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      {/* Section Heading */}
      <div className="mb-10">
        <p className="text-blue-600 font-semibold mb-2">
          MY WORK
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Featured Projects
        </h2>

        <p className="text-gray-600 max-w-2xl leading-7">
          Here are some of my development projects where I apply
          my skills in frontend development, backend APIs, databases,
          and AI integration.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {projects.map((project) => (
          <article
            key={project.id}
            className="flex flex-col bg-white border border-gray-200
            rounded-xl overflow-hidden shadow-sm
            hover:shadow-lg hover:-translate-y-1
            transition-all duration-300"
          >
            {/* Project Image */}
            <div className="h-48 bg-gray-100 flex items-center justify-center p-5">
              <img
                src={project.image}
                alt={project.name}
                loading="lazy"
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Project Information */}
            <div className="flex flex-col flex-grow p-5">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {project.name}
              </h3>

              <p className="text-gray-600 text-sm leading-6 mb-5">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((technology) => (
                  <span
                    key={technology}
                    className="text-xs font-medium bg-blue-50
                    text-blue-700 px-3 py-1.5 rounded-full"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex gap-3 mt-auto">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-gray-900
                    hover:bg-gray-700 text-white text-sm
                    font-medium px-4 py-2.5 rounded-lg
                    transition-colors"
                  >
                    Source Code
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-blue-600
                    hover:bg-blue-700 text-white text-sm
                    font-medium px-4 py-2.5 rounded-lg
                    transition-colors"
                  >
                    Live Demo
                  </a>
                )}

                {!project.github && !project.demo && (
                  <p className="text-sm text-gray-500">
                    Project link coming soon
                  </p>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
