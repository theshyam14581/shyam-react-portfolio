
import React from "react";
import { ReactTyped } from "react-typed";

import pic from "/shyamprofile.png";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiTailwindcss,
} from "react-icons/si";

const Home = () => {
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
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  ];

  return (
    <section
      id="home"
      name="Home"
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"
    >
      <div className="flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Introduction */}
        <div className="w-full md:w-1/2 space-y-6">
          <p className="text-blue-600 font-semibold tracking-wider uppercase">
            Welcome to My Portfolio
          </p>

          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Hi, I'm Shyam Sundar Bairwa
            </h1>

            <div className="flex flex-wrap items-center gap-2 mt-3 text-2xl sm:text-3xl font-bold">
              <span className="text-gray-800">I'm a</span>

              <span className="text-blue-600">
                <ReactTyped
                  strings={[
                    "MERN Stack Developer",
                    "Frontend Developer",
                    "Web Developer",
                    "Tech Enthusiast",
                  ]}
                  typeSpeed={50}
                  backSpeed={30}
                  loop
                />
              </span>
            </div>
          </div>

          <p className="text-gray-600 text-base leading-8 text-justify">
            I'm a B.Tech Computer Science student passionate about building
            responsive and user-friendly web applications. I'm developing
            my skills in full-stack web development through training and
            hands-on projects using React, Node.js, Express.js, and MongoDB.
            I have also completed Salesforce Admin training and enjoy
            learning new technologies and solving programming problems.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="https://github.com/theshyam14581"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white
    px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              View GitHub
            </a>

            <a
              href="#about"
              className="border border-gray-300 hover:bg-gray-100
    text-gray-800 px-6 py-3 rounded-lg font-semibold
    transition-colors"
            >
              About Me
            </a>

            <a
              href="/shyam-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white
    px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              View Resume
            </a>
          </div>



          {/* Social Links */}
          <div className="pt-3">
            <h2 className="font-semibold text-gray-800 mb-3">
              Connect with me
            </h2>

            <div className="flex items-center gap-5 text-2xl text-gray-700">
              {socialLinks.map((social) =>
                social.url ? (
                  <a
                    key={social.name}
                    href={social.url}
                    target={
                      social.url.startsWith("mailto:") ? undefined : "_blank"
                    }
                    rel={
                      social.url.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    aria-label={social.name}
                    title={social.name}
                    className="hover:text-blue-600 hover:-translate-y-1
                    transition-all duration-200"
                  >
                    {social.icon}
                  </a>
                ) : (
                  <span
                    key={social.name}
                    title={`${social.name} URL not added yet`}
                    className="text-gray-400"
                  >
                    {social.icon}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="relative flex justify-center items-center">
            {/* Background Glow */}
            <div className="absolute w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-blue-200 blur-2xl opacity-50" />

            {/* Profile Image */}
            <img
              src={pic}
              alt="Shyam Sundar Bairwa"
              className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover object-top rounded-full border-4 border-white shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="mt-16 pt-8 border-t border-gray-200">
        <h2 className="text-lg font-bold text-gray-800 mb-6 text-center">
          Technologies I'm Learning and Working With
        </h2>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {technologies.map((technology) => (
            <div
              key={technology.name}
              className="flex items-center gap-2 text-gray-600
              hover:text-blue-600 transition-colors"
            >
              <span className="text-2xl">{technology.icon}</span>

              <span className="font-medium text-sm sm:text-base">
                {technology.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
