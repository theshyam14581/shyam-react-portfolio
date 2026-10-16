
import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section
      id="contact"
      name="Contact"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>

      <p className="text-gray-600">
        Please fill out the form below to contact me.
      </p>

      <div className="flex flex-col items-center justify-center mt-8">
        <form
          action="https://getform.io/f/axoovmkb"
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
          className="bg-slate-100 w-full max-w-md px-6 sm:px-8 py-6 rounded-xl shadow-md"
        >
          <h2 className="text-xl font-semibold mb-6">
            Send Your Message
          </h2>

          {/* Full Name Field */}
          <div className="flex flex-col mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 mb-1"
            >
              Full Name
            </label>

            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              {...register("name", {
                required: "Full name is required",
              })}
              className="w-full shadow-sm rounded-lg border border-gray-300 py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {errors.name && (
              <span className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Email Address Field */}
          <div className="flex flex-col mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 mb-1"
            >
              Email Address
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
              {...register("email", {
                required: "Email address is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Please enter a valid email address",
                },
              })}
              className="w-full shadow-sm rounded-lg border border-gray-300 py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {errors.email && (
              <span className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Message Field */}
          <div className="flex flex-col mb-5">
            <label
              htmlFor="message"
              className="block text-gray-700 mb-1"
            >
              Message
            </label>

            <textarea
              id="message"
              rows={4}
              placeholder="Enter your query"
              {...register("message", {
                required: "Message is required",
              })}
              className="w-full shadow-sm rounded-lg border border-gray-300 py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
            />

            {errors.message && (
              <span className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-black text-white rounded-xl px-4 py-3 font-semibold hover:bg-slate-700 disabled:opacity-50 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
