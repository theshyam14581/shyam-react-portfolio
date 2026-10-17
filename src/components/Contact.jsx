
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import {
  FaEnvelope,
  FaUser,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";

import { useTheme } from "../context/ThemeContext";

const Contact = () => {
  const { theme } = useTheme();
  const [submitStatus, setSubmitStatus] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const themes = {
    dark: {
      section: "bg-slate-950 text-white",
      heading: "text-white",
      muted: "text-slate-400",
      accent: "text-sky-400",
      badge: "border-sky-400/20 bg-sky-400/10 text-sky-300",
      card: "border-slate-800 bg-slate-900/80",
      label: "text-slate-200",
      input:
        "border-slate-700 bg-slate-950/70 text-white placeholder:text-slate-500 focus:border-sky-400 focus:ring-sky-400/20",
      button:
        "bg-sky-500 text-white hover:bg-sky-400 shadow-lg shadow-sky-500/20",
      divider: "border-slate-800",
    },

    light: {
      section: "bg-white text-slate-900",
      heading: "text-slate-950",
      muted: "text-slate-600",
      accent: "text-indigo-600",
      badge: "border-indigo-200 bg-indigo-50 text-indigo-700",
      card: "border-slate-200 bg-white",
      label: "text-slate-700",
      input:
        "border-slate-300 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-indigo-500/20",
      button:
        "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-500/20",
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
      card: "border-purple-400/20 bg-slate-950/50",
      label: "text-purple-100",
      input:
        "border-purple-400/30 bg-purple-950/40 text-white placeholder:text-purple-200/40 focus:border-emerald-300 focus:ring-emerald-300/20",
      button:
        "bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-950 hover:from-emerald-300 hover:to-cyan-300",
      divider: "border-purple-400/20",
    },
  };

  const selected = themes[theme] || themes.dark;

  const onSubmit = async (data) => {
    setSubmitStatus("");

    try {
      const response = await fetch("https://getform.io/f/axoovmkb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Message submission failed");
      }

      setSubmitStatus("success");
      reset();
    } catch (error) {
      setSubmitStatus("error");
    }
  };

  const inputClass = `w-full rounded-xl border px-4 py-3 outline-none transition-all duration-200 focus:ring-4 ${selected.input}`;

  return (
    <section
      id="contact"
      name="Contact"
      className={`${selected.section} relative overflow-hidden transition-colors duration-500`}
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24 lg:px-12">
        {/* Section heading */}
        <div className="mb-12 text-center">
          <div
            className={`mx-auto mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] ${selected.badge}`}
          >
            <FaEnvelope />
            Get in touch
          </div>

          <h2
            className={`text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl ${selected.heading}`}
          >
            Let's Work <span className={selected.accent}>Together.</span>
          </h2>

          <p className={`mx-auto mt-5 max-w-2xl text-base leading-8 sm:text-lg ${selected.muted}`}>
            Have a project idea, opportunity, or question? Send me a message.
            I'd be happy to connect with you.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-5 lg:items-stretch">
          {/* Contact information */}
          <div className="flex flex-col justify-between gap-8 lg:col-span-2">
            <div>
              <h3 className={`text-2xl font-extrabold ${selected.heading}`}>
                Let's talk
              </h3>

              <p className={`mt-4 leading-8 ${selected.muted}`}>
                I'm interested in web development, full-stack projects,
                learning opportunities, and collaborating with other
                developers.
              </p>
            </div>

            <a
              href="mailto:shyambairwa16@gmail.com"
              className={`group flex items-center gap-4 rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 ${selected.card}`}
            >
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-xl ${selected.badge}`}>
                <FaEnvelope />
              </div>

              <div className="min-w-0">
                <p className={`text-sm ${selected.muted}`}>Email me at</p>

                <p className={`mt-1 break-all text-sm font-bold sm:text-base ${selected.heading}`}>
                  shyambairwa16@gmail.com
                </p>
              </div>
            </a>

            <div className={`rounded-2xl border p-5 ${selected.card}`}>
              <p className={`text-sm font-bold ${selected.accent}`}>
                Open to opportunities
              </p>

              <p className={`mt-2 text-sm leading-7 ${selected.muted}`}>
                Let's discuss projects, internships, and ways to build
                something useful together.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className={`rounded-3xl border p-6 shadow-xl sm:p-8 lg:col-span-3 ${selected.card}`}>
            <div className={`mb-7 border-b pb-5 ${selected.divider}`}>
              <h3 className={`text-2xl font-extrabold ${selected.heading}`}>
                Send a Message
              </h3>

              <p className={`mt-2 text-sm ${selected.muted}`}>
                Fill in the details below and I'll receive your message.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Full name */}
              <div>
                <label
                  htmlFor="name"
                  className={`mb-2 block text-sm font-semibold ${selected.label}`}
                >
                  Full Name
                </label>

                <div className="relative">
                  <FaUser className={`absolute left-4 top-1/2 -translate-y-1/2 ${selected.muted}`} />

                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Enter your full name"
                    aria-invalid={Boolean(errors.name)}
                    {...register("name", {
                      required: "Full name is required",
                      minLength: {
                        value: 2,
                        message: "Name must contain at least 2 characters",
                      },
                    })}
                    className={`${inputClass} pl-11`}
                  />
                </div>

                {errors.name && (
                  <p className="mt-2 flex items-center gap-2 text-sm text-red-500">
                    <FaExclamationCircle />
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className={`mb-2 block text-sm font-semibold ${selected.label}`}
                >
                  Email Address
                </label>

                <div className="relative">
                  <FaEnvelope className={`absolute left-4 top-1/2 -translate-y-1/2 ${selected.muted}`} />

                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    aria-invalid={Boolean(errors.email)}
                    {...register("email", {
                      required: "Email address is required",
                      pattern: {
                        value: /^\S+@\S+\.\S+$/,
                        message: "Please enter a valid email address",
                      },
                    })}
                    className={`${inputClass} pl-11`}
                  />
                </div>

                {errors.email && (
                  <p className="mt-2 flex items-center gap-2 text-sm text-red-500">
                    <FaExclamationCircle />
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className={`mb-2 block text-sm font-semibold ${selected.label}`}
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project or query..."
                  aria-invalid={Boolean(errors.message)}
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Message must contain at least 10 characters",
                    },
                  })}
                  className={`${inputClass} resize-y`}
                />

                {errors.message && (
                  <p className="mt-2 flex items-center gap-2 text-sm text-red-500">
                    <FaExclamationCircle />
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submission status */}
              {submitStatus === "success" && (
                <div className="flex items-start gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-500">
                  <FaCheckCircle className="mt-0.5 shrink-0" />
                  <p>Your message was submitted successfully!</p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-500">
                  Message could not be sent. Please try again or email me
                  directly.
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex w-full items-center justify-center gap-3 rounded-xl px-5 py-4 font-bold transition-all duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 ${selected.button}`}
              >
                {isSubmitting ? "Sending Message..." : "Send Message"}
                {!isSubmitting && <FaPaperPlane />}
              </button>

              <p className={`text-center text-xs leading-6 ${selected.muted}`}>
                Your details will be used to respond to your message.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
