import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import "leaflet/dist/leaflet.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Footer from "../Home/Footer";
const Contact = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="sm:col-span-7 contact__bg_item1 h-full pt-56 pb-16 sm:pb-32 px-6 sm:px-12 lg:px-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            Contact
          </h1>
          <div className="flex items-center gap-3 mt-4">
            <h3>Home</h3>
            <FaAngleRight className="text-[#820CAC]" />
            <h3>Contact</h3>
          </div>
        </div>
        <div className="sm:col-span-5 contact__bg_item2 h-40 sm:h-full"></div>
      </div>

      <div className="bg-white">
        <ContactCard />
        <ContactUs />
      </div>
      <Footer />
    </section>
  );
};

const ContactCard = () => {
  const contactDetails = [
    {
      icon: "📍",
      title: "TrustPay Office",
      description: "Karachi,Pakistam",
    },
    {
      icon: "📞",
      title: "Our Phone",
      description: "+923421237116",
    },
    {
      icon: "✉️",
      title: "Our Email",
      description: "alisiddiqui032122@gmail.com",
    },
    {
      icon: "⏰",
      title: "Working Hours",
      description: "Mon - Fri: 9:00 AM - 5:00 PM, Sun: Closed",
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="text-center mb-8 px-4">
        <h3 className="text-[#820CAC] font-semibold mb-2">Let's Contact Us</h3>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Get In Touch
        </h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 px-6 sm:px-12">
        {contactDetails.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-md rounded-xl p-6 text-center"
          >
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <span className="text-[#820CAC] text-3xl">{item.icon}</span>
            </div>
            <h4 className="text-lg font-bold text-gray-800">{item.title}</h4>
            <p className="text-gray-600 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const ContactUs = () => {
  return (
    <div className="bg-gray-100 p-6 sm:p-10">
      <div className="flex flex-col md:flex-row bg-white rounded-3xl shadow-lg overflow-hidden">
        {/* Map Section */}
        <div className="w-full md:w-1/2 h-64 md:h-auto">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924247.1417021892!2d66.49601564592707!3d25.19174065536782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh!5e0!3m2!1sen!2s!4v1732472960217!5m2!1sen!2s"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 py-8 px-6 sm:px-10">
          <h3 className="text-[#820CAC] font-semibold mb-2">Write A Message</h3>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            Leave A Message
          </h2>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#820CAC]"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#820CAC]"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#820CAC]"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-[#820CAC] text-white py-3 rounded-lg hover:bg-[#BD62E4] transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
