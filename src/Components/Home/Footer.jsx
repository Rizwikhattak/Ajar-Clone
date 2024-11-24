import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoMdMail, IoIosCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-[#820CAC] text-white py-12 pt-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* About Company Section */}
        <div
          className=" p-6 rounded-3xl shadow-lg text-gray-900"
          style={{ backgroundColor: "rgb(189 98 228)" }}
        >
          <h3 className="text-lg sm:text-xl font-semibold mb-4 text-white">
            About Company
          </h3>
          <p className="text-sm sm:text-base text-white">
            TrustPay Platform is dedicated to delivering a state-of-the-art
            digital checkout solution designed specifically for e-commerce
            merchants and digital platforms in Pakistan. Acting as a seamless
            link between payment gateways and merchants, the platform provides a
            secure, efficient, and user-friendly experience for customers to
            complete their digital purchases.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col">
          <h3 className="text-lg sm:text-xl text-white font-semibold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-white hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:underline">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links Section */}
        <div className="flex flex-col items-start">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 text-white">
            Social Links
          </h3>
          <div className="flex flex-col">
            <a
              href="mailto:alisiddiqui032122@gmail.com"
              aria-label="Gmail"
              className="text-white p-2 rounded-full hover:bg-gray-200 hover:text-[#820CAC] transition-all duration-200 flex items-center gap-3"
            >
              <span>
                <IoMdMail />
              </span>
              <span>alisiddiqui032122@gmail.com</span>
            </a>
            <a
              href="tel:+923421237116"
              aria-label="Call"
              className="text-white p-2 rounded-full hover:bg-gray-200 hover:text-[#820CAC] transition-all duration-200 flex items-center gap-3"
            >
              <span>
                <IoIosCall />
              </span>
              <span>+923421237116</span>
            </a>
            <a
              href="https://www.google.com/maps?q=Karachi+Pakistan"
              aria-label="Location"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white p-2 rounded-full hover:bg-gray-200 hover:text-[#820CAC] transition-all duration-200 flex items-center gap-3"
            >
              <span>
                <FaLocationDot />
              </span>
              <span>Karachi Pakistan</span>
            </a>

            {/* <a
              href="#"
              aria-label="Instagram"
              className="bg-white text-[#455595] p-2 rounded-full hover:bg-gray-200 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="bg-white text-[#455595] p-2 rounded-full hover:bg-gray-200 transition"
            >
              <FaLinkedinIn />
            </a> */}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="p-6 sm:p-10">
        <hr className="border-gray-400" />
        <div className="text-center mt-4 sm:mt-8 text-sm">
          <p className="text-white">
            © Copyright – TRUSTPAY 2023. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
