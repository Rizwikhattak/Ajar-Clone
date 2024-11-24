import React, { useState } from "react";
// import NavLogo from "../../assets/Images/MainLogo.png";
import NavLogo from "../../assets/Images/trustpay-logo.png";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const [navToggler, setNavToggler] = useState(false);

  return (
    <header className="w-full fixed top-10 left-0 z-50 px-10 ">
      <nav className="flex justify-between md:justify-normal items-center bg-white shadow-lg rounded-full py-4 px-10">
        {/* Logo */}
        <div className="logo">
          <img src={NavLogo} alt="Logo" className=" w-16 sm:w-20" />
        </div>

        {/* Desktop Menu */}
        <div className="menu__items hidden flex-grow justify-center md:flex items-center gap-6">
          <Link
            to="/"
            className={`${
              location.pathname === "/" ? "text-[#820CAC]" : "text-black"
            } hover:text-[#820CAC] transition-all duration-200 font-semibold`}
          >
            Home
          </Link>
          <Link
            to="/Contact"
            className={`${
              location.pathname === "/Contact" ? "text-[#820CAC]" : "text-black"
            } hover:text-[#820CAC] transition-all duration-200 font-semibold`}
          >
            Contact
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            className="text-2xl focus:outline-none"
            onClick={() => {
              console.log("Clickeeeeed");
              setNavToggler(true);
            }}
          >
            <FaBars />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed z-[60] inset-0 bg-black bg-opacity-50 transform ${
          navToggler ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:hidden`}
        onClick={() => setNavToggler(false)}
      >
        <div
          className="fixed top-0 right-0 w-3/4 max-w-xs h-full bg-white shadow-lg p-6"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-6">
            <img src={NavLogo} alt="Logo" className="w-16" />
            <button
              className="text-2xl focus:outline-none"
              onClick={() => setNavToggler(false)}
            >
              <FaTimes />
            </button>
          </div>
          <nav className="flex flex-col gap-4">
            <Link
              to="/"
              className={`${
                location.pathname === "/" ? "text-blue-500" : "text-black"
              } hover:text-blue-500 transition-all duration-200 font-semibold`}
              onClick={() => setNavToggler(false)}
            >
              Home
            </Link>
            <Link
              to="/Contact"
              className={`${
                location.pathname === "/Contact"
                  ? "text-blue-500"
                  : "text-black"
              } hover:text-blue-500 transition-all duration-200 font-semibold`}
              onClick={() => setNavToggler(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
