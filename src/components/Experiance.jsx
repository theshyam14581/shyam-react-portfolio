
import React from "react";

import html from "/html.jpg";
import css from "/css.jpg";
import js from "/javascript.jpg";
import react from "/react.jpg";
import tailwindCss from "/tailwind.jpg";
import node from "/node.jpg";
import python from "/python.jpg";
import git from "/git.jpg";

const Experiance = () => {
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

  return (
    <section
      id="experience"
      name="Experiance"
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      {/* Section Heading */}
      <div className="mb-10">
        <p className="text-blue-600 font-semibold uppercase tracking-wider mb-2">
          Skills & Learning
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Technical Skills & Training
        </h2>

        <p className="text-gray-600 text-base md:text-lg leading-7 max-w-3xl">
          I am a developer focused on building my technical skills through
          professional training, hands-on practice, and personal projects.
        </p>
      </div>

      {/* Training Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            MERN Stack Development
          </h3>

          <p className="text-blue-600 font-medium mb-3">
            AU Ignite Future Skills Academy
          </p>

          <p className="text-gray-600 leading-7 text-sm">
            Training in full-stack web development using MongoDB, Express.js,
            React.js, and Node.js, with practical work on responsive
            interfaces, REST APIs, and database integration.
          </p>
        </div>

        <div className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Salesforce Administrator Training
          </h3>

          <p className="text-blue-600 font-medium mb-3">
            Compucom Institute of Technology and Management
          </p>

          <p className="text-gray-600 leading-7 text-sm">
            Training in Salesforce administration, including object
            management, data management, declarative automation, and
            platform fundamentals.
          </p>
        </div>
      </div>

      {/* Technical Skills */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          My Technical Skills
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {skills.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center
              bg-white border border-gray-200 rounded-xl p-5
              shadow-sm hover:shadow-lg hover:-translate-y-1
              transition-all duration-300"
            >
              <img
                src={item.logo}
                alt={item.name}
                loading="lazy"
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-4"
              />

              <h4 className="text-base font-semibold text-gray-800 text-center">
                {item.name}
              </h4>

              <span className="text-xs text-gray-500 mt-2">
                {item.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiance;
