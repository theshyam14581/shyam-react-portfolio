
import React, { useState } from "react";
import {
  IoMenuSharp,
  IoClose,
  IoMoon,
  IoSunny,
  IoSparkles,
  IoCheckmark,
  IoChevronDown,
} from "react-icons/io5";
import { Link } from "react-scroll";
import { useTheme } from "../context/ThemeContext";

const pic = "/naveenprofile.jpg";

const navItems = [
  { id: 1, text: "Home", to: "home" },
  { id: 2, text: "About", to: "about" },
  { id: 3, text: "Portfolio", to: "portfolio" },
  { id: 4, text: "Experience", to: "experience" },
  { id: 5, text: "Contact", to: "contact" },
];

const themes = [
  {
    id: "dark",
    name: "Dark Pro",
    icon: IoMoon,
    gradient: "from-violet-500 to-indigo-500",
  },
  {
    id: "light",
    name: "Light Pro",
    icon: IoSunny,
    gradient: "from-sky-400 to-blue-600",
  },
  {
    id: "aurora",
    name: "Aurora Glow",
    icon: IoSparkles,
    gradient: "from-fuchsia-500 to-cyan-400",
  },
];

const palettes = {
  dark: {
    nav: "bg-slate-950/80 text-white border-white/10",
    muted: "text-slate-400",
    accent: "text-violet-400",
    hover: "hover:bg-violet-500/10 hover:text-violet-300",
    active: "bg-violet-500/15 text-violet-300",
    panel: "bg-slate-900/95 border-white/10",
    trigger: "bg-slate-800/80 border-white/10 hover:border-violet-400/60",
    avatar: "border-violet-400 shadow-violet-500/30",
    divider: "border-white/10",
  },

  light: {
    nav: "bg-white/85 text-slate-900 border-slate-200",
    muted: "text-slate-500",
    accent: "text-blue-600",
    hover: "hover:bg-blue-50 hover:text-blue-700",
    active: "bg-blue-50 text-blue-700",
    panel: "bg-white/95 border-slate-200",
    trigger: "bg-slate-50 border-slate-200 hover:border-blue-400",
    avatar: "border-blue-500 shadow-blue-500/20",
    divider: "border-slate-200",
  },

  aurora: {
    nav: "bg-[#10071f]/85 text-white border-fuchsia-300/20",
    muted: "text-purple-200/70",
    accent: "text-fuchsia-300",
    hover: "hover:bg-fuchsia-400/10 hover:text-fuchsia-200",
    active: "bg-fuchsia-400/15 text-fuchsia-200",
    panel: "bg-[#190d2c]/95 border-fuchsia-300/20",
    trigger: "bg-fuchsia-400/10 border-fuchsia-300/20 hover:border-fuchsia-300/60",
    avatar: "border-fuchsia-400 shadow-fuchsia-500/30",
    divider: "border-fuchsia-300/15",
  },
};

function Navbar() {
  const { theme, setTheme } = useTheme();

  const [menu, setMenu] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);

  const colors = palettes[theme] || palettes.dark;
  const selectedTheme = themes.find((item) => item.id === theme) || themes[0];
  const SelectedIcon = selectedTheme.icon;

  const closeMenus = () => {
    setMenu(false);
    setThemeOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b shadow-lg backdrop-blur-2xl transition-all duration-500 ${colors.nav}`}
    >
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-10">
        <div className="flex h-[76px] items-center justify-between gap-3">

          {/* Brand */}
          <a
            href="#home"
            onClick={closeMenus}
            className="group flex shrink-0 items-center gap-3"
          >
            <img
              src={pic}
              alt="Profile"
              className={`h-11 w-11 rounded-full border-2 object-cover shadow-lg transition duration-500 group-hover:rotate-6 group-hover:scale-110 sm:h-12 sm:w-12 ${colors.avatar}`}
            />

            <div>
              <h1 className="text-lg font-extrabold tracking-tight sm:text-xl">
                The<span className={colors.accent}>shya</span>m
              </h1>
              <p className={`mt-1 text-[10px] tracking-[0.2em] ${colors.muted}`}>
                WEB DEVELOPER
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.to}
                smooth
                spy
                duration={500}
                offset={-80}
                activeClass="nav-current"
                className={`group relative cursor-pointer py-2 text-sm font-medium transition-colors duration-300 ${colors.muted} ${
                  theme === "dark"
                    ? "hover:text-violet-400"
                    : theme === "light"
                      ? "hover:text-blue-600"
                      : "hover:text-fuchsia-300"
                }`}
              >
                {item.text}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-gradient-to-r ${selectedTheme.gradient} transition-transform duration-300 group-hover:scale-x-100`}
                />
              </Link>
            ))}
          </nav>

          {/* Theme Switcher */}
          <div className="relative flex shrink-0 items-center gap-2">

            <button
              type="button"
              onClick={() => {
                setThemeOpen((open) => !open);
                setMenu(false);
              }}
              aria-label="Choose website theme"
              aria-expanded={themeOpen}
              className={`group flex items-center gap-2 rounded-full border px-3 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 sm:px-4 ${colors.trigger}`}
            >
              <span className={`flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br text-white shadow-md ${selectedTheme.gradient}`}>
                <SelectedIcon size={16} />
              </span>

              <span className="hidden sm:inline">Theme</span>

              <IoChevronDown
                size={14}
                className={`transition-transform duration-300 ${themeOpen ? "rotate-180" : ""}`}
              />
            </button>

            {themeOpen && (
              <div
                className={`absolute right-0 top-[calc(100%+14px)] w-60 origin-top-right animate-in fade-in slide-in-from-top-2 rounded-2xl border p-2 shadow-2xl duration-200 ${colors.panel}`}
              >
                <p className={`px-3 pb-2 pt-2 text-[10px] font-bold uppercase tracking-[0.2em] ${colors.muted}`}>
                  Choose Appearance
                </p>

                {themes.map(({ id, name, icon: Icon, gradient }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => {
                      setTheme(id);
                      setThemeOpen(false);
                    }}
                    aria-pressed={theme === id}
                    className={`group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-all duration-300 hover:translate-x-1 ${
                      theme === id ? colors.active : colors.hover
                    }`}
                  >
                    <span className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-white shadow-lg transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110`}>
                      <Icon size={20} />
                    </span>

                    <span className="flex-1 text-sm font-semibold">
                      {name}
                    </span>

                    {theme === id && (
                      <IoCheckmark size={19} className={colors.accent} />
                    )}
                  </button>
                ))}
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => {
                setMenu((open) => !open);
                setThemeOpen(false);
              }}
              aria-label={menu ? "Close navigation" : "Open navigation"}
              aria-expanded={menu}
              className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 hover:scale-105 lg:hidden ${colors.trigger}`}
            >
              {menu ? <IoClose size={24} /> : <IoMenuSharp size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menu && (
          <div className={`mb-4 origin-top animate-in fade-in slide-in-from-top-2 rounded-2xl border p-3 shadow-2xl duration-200 lg:hidden ${colors.panel}`}>
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.to}
                  smooth
                  spy
                  duration={500}
                  offset={-80}
                  onClick={closeMenus}
                  className={`cursor-pointer rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300 hover:translate-x-1 ${colors.muted} ${colors.hover}`}
                >
                  {item.text}
                </Link>
              ))}
            </nav>

            <div className={`my-3 border-t ${colors.divider}`} />

            <p className={`px-2 pb-3 text-[10px] font-bold uppercase tracking-[0.2em] ${colors.muted}`}>
              Select Theme
            </p>

            <div className="grid grid-cols-3 gap-2">
              {themes.map(({ id, name, icon: Icon, gradient }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setTheme(id)}
                  aria-pressed={theme === id}
                  className={`flex min-w-0 flex-col items-center gap-2 rounded-xl border border-transparent px-1 py-3 transition-all duration-300 hover:-translate-y-1 ${
                    theme === id ? colors.active : colors.hover
                  }`}
                >
                  <span className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-white`}>
                    <Icon size={19} />
                  </span>

                  <span className="text-center text-[10px] font-semibold sm:text-xs">
                    {name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
