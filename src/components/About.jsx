
import React from "react";

const About = () => {
  const highlights = [
    {
      title: "MERN Stack Development",
      description:
        "Learning and building full-stack web applications using React, Node.js, Express.js, and MongoDB at AU Ignite Future Skills Academy.",
    },
    {
      title: "Salesforce Administration",
      description:
        "Completed training in Salesforce Administration, including platform fundamentals, object management, and automation concepts.",
    },
    {
      title: "Hands-on Projects",
      description:
        "Developed projects such as AI Reviewer and Library Management System to strengthen my practical development and problem-solving skills.",
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
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      {/* Heading */}
      <div className="mb-10">
        <p className="text-blue-600 font-semibold uppercase tracking-wider mb-2">
          Get to Know Me
        </p>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
          About Me
        </h1>

        <p className="text-gray-600 text-base md:text-lg leading-8">
          Hello, I'm{" "}
          <span className="text-gray-900 font-semibold">
            Shyam Sundar Bairwa
          </span>
          , a B.Tech Computer Science student passionate about web
          development, technology, and building practical digital solutions.
          My journey is focused on turning what I learn into real projects
          and continuously improving my development skills.
        </p>
      </div>

      {/* Education */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Education
        </h2>

        <div className="border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">
            Bachelor of Technology (B.Tech)
          </h3>

          <p className="text-blue-600 font-medium mt-1">
            Computer Science
          </p>

          <p className="text-gray-600 mt-2">
            Compucom Institute of Technology and Management
          </p>

          <p className="text-gray-500 text-sm mt-2">
            Building a strong foundation in programming, software development,
            and computer science concepts.
          </p>
        </div>
      </div>

      {/* Training and Learning */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-5">
          Training & Learning Journey
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              MERN Stack Development
            </h3>

            <p className="text-blue-700 font-medium mb-3">
              AU Ignite Future Skills Academy
            </p>

            <p className="text-gray-700 text-sm leading-7">
              Developing my full-stack skills through training and practical
              coding in React, Node.js, Express.js, MongoDB, REST APIs,
              authentication, and responsive UI development.
            </p>
          </div>

          <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Salesforce Admin
            </h3>

            <p className="text-indigo-700 font-medium mb-3">
              Compucom Institute of Technology and Management
            </p>

            <p className="text-gray-700 text-sm leading-7">
              Learning Salesforce platform administration, object management,
              automation flows, and the fundamentals of CRM customization.
            </p>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-5">
          Practical Learning & Projects
        </h2>

        <div className="space-y-4">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="flex gap-4 border border-gray-200
              rounded-xl p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full
              bg-blue-100 text-blue-700 flex items-center
              justify-center font-bold">
                {index + 1}
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-7">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-5">
          Skills & Technologies
        </h2>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-gray-100 text-gray-700
              border border-gray-200 rounded-full text-sm
              font-medium hover:bg-blue-50 hover:text-blue-700
              hover:border-blue-200 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Personal Mission */}
      <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8">
        <h2 className="text-2xl font-bold mb-4">
          My Goal & Mindset
        </h2>

        <p className="text-gray-300 leading-8">
          My goal is to become a skilled software developer by combining
          strong fundamentals, consistent practice, and real-world project
          experience. I believe that progress comes from staying curious,
          learning from mistakes, solving problems independently, and
          putting effort into improving every day. I am looking forward to
          opportunities where I can contribute, learn from experienced
          developers, and grow professionally.
        </p>
      </div>
    </section>
  );
};

export default About;
