import React from "react";
import AboutImg from "../../assets/Images/AboutImg.jpg";
import { LuCircleDot } from "react-icons/lu";
import { DiAtom } from "react-icons/di";
import { FaHandHoldingHeart } from "react-icons/fa";
import { BiSolidCoinStack } from "react-icons/bi";

const AboutSection = () => {
  return (
    <>
      <section className="about--section bg-white py-10 flex flex-col md:flex-row gap-5">
        <div className="about-img w-full md:w-1/2">
          <img src={AboutImg} alt="About Img" className="w-full h-auto" />
        </div>
        <div className="content w-full md:w-1/2 flex flex-col gap-5 px-4 md:px-6 md:pr-10">
          <div className="heading flex items-center gap-3">
            <LuCircleDot className="text-[#820CAC]" />
            <h2 className="font-semibold text-lg">About Company</h2>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Empowering Merchants with TrustPay: Effortless One-Click Checkout
            Integration
          </h1>
          <p className="text-base md:text-lg">
            TrustPay is actively partnering with leading wallet and card service
            providers to expand its payment facilitation platform. By enabling
            compatibility with diverse collection and payment methods, TrustPay
            empowers merchants to deliver a seamless One-Click checkout
            experience to their customers.
          </p>
          <p className="text-base md:text-lg">
            Merchants have the option to connect and integrate with trustPay,
            gaining access to an all-in-one, convenient One-Click checkout
            solution.
          </p>
        </div>
      </section>
      <div className="menu__cards px-2 bg-white pb-5 grid md:grid-cols-12 gap-6">
        <div className="flex md:col-span-4 flex-col md:flex-row gap-4">
          <div className="card__logo">
            <DiAtom className="text-[#820CAC] text-4xl md:text-5xl" />
          </div>
          <div className="card__content">
            <h1 className="font-bold text-lg md:text-xl">Our Vision</h1>
            <p className="text-base md:text-lg">
              To provide a seamless and unified One-Click checkout solution for
              merchants, empowering them to manage their digital collections and
              payments with ease.
            </p>
          </div>
        </div>
        <div className="flex md:col-span-4 flex-col md:flex-row gap-4">
          <div className="card__logo">
            <FaHandHoldingHeart className="text-[#820CAC] text-4xl md:text-5xl" />
          </div>
          <div className="card__content">
            <h1 className="font-bold text-lg md:text-xl">Our Mission</h1>
            <p className="text-base md:text-lg">
              To empower our merchants, stakeholders, and partners to succeed,
              creating value for individuals and driving economic growth.
            </p>
          </div>
        </div>
        <div className="flex md:col-span-4 flex-col md:flex-row gap-4">
          <div className="card__logo">
            <BiSolidCoinStack className="text-[#820CAC] text-4xl md:text-5xl" />
          </div>
          <div className="card__content">
            <h1 className="font-bold text-lg md:text-xl">Our Values</h1>
            <p className="text-base md:text-lg">
              Our values are rooted in fundamental principles that shape our
              culture and guide our attitudes and actions. These values define
              our uniqueness and originate from our core beliefs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
