import React from "react";
import { LuCircleDot } from "react-icons/lu";

const ContactSection = () => {
  return (
    <section className="py-8 sm:py-16 bg-gray-100 flex flex-col md:flex-row justify-center items-start md:items-center px-2">
      {/* Left Section: Contact Information */}
      <div className="text-left px-4 sm:px-6 md:w-1/2">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
          Core Values and Principles: Driving Force Behind Our Mission and
          Growth
        </h2>
        <div className="flex items-center gap-3 mb-2 sm:mb-4">
          <LuCircleDot className="text-[#820CAC]" />
          <p className="text-base sm:text-lg text-gray-700 font-semibold">
            Get In Touch
          </p>
        </div>
        <a
          href="mailto:alisiddiqui032122@gmail.com"
          className="text-gray-700 font-semibold hover:text-[#820CAC] transition-all duration-200"
        >
          alisiddiqui032122@gmail.com
        </a>
      </div>

      {/* Right Section: Contact Form */}
      <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 mt-8 md:mt-0 md:ml-8 md:w-1/2 max-w-lg w-full">
        <form className="flex flex-col gap-4 sm:gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-1 sm:mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="w-full bg-white px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#820CAC]"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-1 sm:mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 bg-white py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#820CAC]"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-1 sm:mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Message"
              rows="4"
              className="w-full px-4 bg-white py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#820CAC] resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-[#820CAC] text-white font-semibold rounded-full hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
