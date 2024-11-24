import React from "react";
import { LuCircleDot } from "react-icons/lu";
import HeroLeftImg from "../../assets/Images/HeroLeft.png";
import { FaCheck } from "react-icons/fa6";
import { ReactTyped } from "react-typed";

const HeroSection = () => {
  return (
    <>
      <div className="grid sm:grid-cols-12">
        <div className="bg-[#F7F5FB] col-span-12 md:col-span-8 h-full px-4 sm:px-6 md:px-10 flex flex-col justify-center">
          <div className="py-60 pr-0 sm:pr-6 md:pr-36">
            <div className="heading flex items-center gap-3">
              <LuCircleDot className="text-[#820CAC]" />
              <h1 className="font-semibold">Introducing trustPay:</h1>
            </div>
            <div className="second__heading pt-6">
              <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl leading-normal">
                Secure One-Click{" "}
                <ReactTyped
                  strings={[
                    "Checkout Solution for Global and Regional Businesses",
                    "",
                  ]}
                  typeSpeed={20}
                  backSpeed={30}
                  loop
                />
              </h1>
            </div>
            <div className="content pt-5">
              <p className="text-base sm:text-lg">
                <b>TrustPay</b> is a payment facilitation platform that connects
                global and regional businesses with their customers. It provides
                a secure, seamless One-Click checkout solution, supporting a
                wide range of essential payment methods.
              </p>
            </div>
            <div className="buttons py-7 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <a
                href="/"
                className="btn px-6 sm:px-10 btn-lg rounded-full text-white border-none hover:scale-90 transition-all duration-200 bg-gradient-to-r from-gradientStart to-gradientEnd hover:from-gradientEnd hover:to-gradientStart"
              >
                Get Started
              </a>
              <a
                href="/"
                className="btn px-6 sm:px-10 btn-lg rounded-full bg-white hover:bg-white text-[#820CAC] hover:text-black border-none hover:scale-90 transition-all duration-200"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
        <div className="blue__bg h-full col-span-12 hidden md:block md:col-span-4">
          <div className="h-full flex flex-col justify-center">
            <div className="z-40">
              <div className="ml-0 sm:-ml-10 md:-ml-20">
                <img
                  src={HeroLeftImg}
                  alt="Hero img"
                  className="w-64 sm:w-80 md:w-96"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white pt-20 md:pt-0 pb-20 md:pb-20 px-4 sm:px-6 md:px-10 md:-mt-20">
        <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
          <div className="card__bg rounded-[35px] px-4 sm:px-6 md:px-8 shadow-2xl col-span-1 md:col-span-5">
            <div className="card-body z-[60] flex flex-col gap-4">
              <h1 className="card-title z-[60] text-white">
                trustPay's Products:
              </h1>
              <div className="z-[60] flex flex-col gap-4">
                <h1 className="text-white">Collections (Pay-In Service)</h1>
                <h3 className="flex items-center gap-3 text-white">
                  <FaCheck />
                  Mobile wallets
                </h3>
                <h3 className="flex items-center gap-3 text-white">
                  <FaCheck />
                  Debit and Credit Cards
                </h3>
              </div>
              <div className="z-[60] flex flex-col gap-4">
                <h1 className="text-white">Disbursements (Pay-Out Service)</h1>
                <h3 className="flex items-center gap-3 text-white">
                  <FaCheck />
                  Mobile wallets
                </h3>
                <h3 className="flex items-center gap-3 text-white">
                  <FaCheck />
                  IBFT
                </h3>
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-7 pt-10 flex flex-col md:flex-row gap-4 p-4 md:p-6 md:z-40 bg-white rounded-[35px] shadow-2xl border">
            <ul className="w-full md:w-[40%] flex flex-col gap-4">
              <li className="flex items-center gap-4 text-black">
                <FaCheck className="text-[#820CAC]" />
                <span>Online Payment</span>
              </li>
              <li className="flex items-center gap-4 text-black">
                <FaCheck className=" text-[#820CAC]" />
                <span>Online Payment </span>
              </li>
              <li className="flex items-center gap-4 text-black">
                <FaCheck className=" text-[#820CAC]" />
                <span>Platform Support</span>
              </li>
              <li className="flex items-center gap-4 text-black">
                <FaCheck className=" text-[#820CAC]" />
                <span>Secured Transactions</span>
              </li>
              <li className="flex items-center gap-4 text-black">
                <FaCheck className=" text-[#820CAC]" />
                <span>Responsive Web App</span>
              </li>
              <li className="flex items-center gap-4 text-black">
                <FaCheck className=" text-[#820CAC]" />
                <span>Divide Group Payments</span>
              </li>
              <li className="flex items-center gap-4 text-black">
                <FaCheck className=" text-[#820CAC]" />
                <span>Lock Protection</span>
              </li>
            </ul>
            <div className="w-full md:w-[60%] pt-6">
              <h1 className="text-black text-xl sm:text-2xl font-bold pb-5">
                trustPay’s solution:
              </h1>
              <p>
                One-Click seamless checkout solution for all sorts of
                collections and payments. We serve the following
                sectors/industries:
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
