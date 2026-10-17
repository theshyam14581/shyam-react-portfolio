
import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebook,
  FaGithub,
  FaArrowUp,
} from "react-icons/fa";

import { Link } from "react-scroll";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();

  const themes = {
    dark: {
      section: "bg-slate-950 text-white",
      muted: "text-slate-400",
      accent: "text-sky-400",
      border: "border-slate-800",
      icon: "border-slate-700 bg-slate-900 text-slate-300 hover:border-sky-400 hover:bg-sky-400/10 hover:text-sky-400",
      topButton: "bg-sky-500 text-white hover:bg-sky-400",
    },

    light: {
      section: "bg-white text-slate-900",
      muted: "text-slate-600",
      accent: "text-indigo-600",
      border: "border-slate-200",
      icon: "border-slate-200 bg-slate-50 text-slate-600 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600",
      topButton: "bg-indigo-600 text-white hover:bg-indigo-700",
    },

    aurora: {
      section:
        "bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white",
      muted: "text-purple-200/70",
      accent: "text-emerald-300",
      border: "border-purple-400/20",
      icon: "border-purple-400/20 bg-white/5 text-purple-100 hover:border-emerald-300/50 hover:bg-emerald-300/10 hover:text-emerald-300",
      topButton:
        "bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-950 hover:from-emerald-300 hover:to-cyan-300",
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
      name: "Instagram",
      url: "https://www.instagram.com/",
      icon: <FaInstagram />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/shyam-bairwa",
      icon: <FaLinkedinIn />,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/",
      icon: <FaFacebook />,
    },
  ];

  return (
    <footer
      className={`${selected.section} border-t ${selected.border} transition-colors duration-500`}
    >
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center text-center">
          {/* Brand */}
          <Link
            to="home"
            smooth
            duration={500}
            offset={-70}
            className="cursor-pointer"
          >
            <span className={`text-2xl font-black tracking-tight ${selected.accent}`}>
              Shyam<span className={selected.muted}>.dev</span>
            </span>
          </Link>

          <p className={`mt-3 max-w-md text-sm leading-7 ${selected.muted}`}>
            Building, learning, and growing through web development and
            real-world projects.
          </p>

          {/* Social links */}
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                title={social.name}
                className={`flex h-11 w-11 items-center justify-center rounded-xl border text-lg transition-all duration-300 hover:-translate-y-1.5 ${selected.icon}`}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Back to top */}
          <Link
            to="home"
            smooth
            duration={500}
            offset={-70}
            className={`mt-8 inline-flex cursor-pointer items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-all duration-300 hover:-translate-y-1 ${selected.topButton}`}
          >
            Back to Top <FaArrowUp />
          </Link>
        </div>

        {/* Copyright */}
        <div
          className={`mt-10 flex flex-col items-center justify-between gap-3 border-t pt-6 text-center sm:flex-row ${selected.border}`}
        >
          <p className={`text-sm ${selected.muted}`}>
            © {new Date().getFullYear()} Shyam Sundar Bairwa. All rights reserved.
          </p>

          <p className={`text-sm ${selected.muted}`}>
            Made with <span className="text-red-500">♥</span> by{" "}
            <span className={`font-bold ${selected.accent}`}>Shyam</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
