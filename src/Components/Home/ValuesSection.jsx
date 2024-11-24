import React from "react";
import { FaShieldAlt, FaUsers, FaAward, FaRocket } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { LuCircleDot } from "react-icons/lu";

const values = [
  {
    icon: <IoDiamondOutline size={30} className="text-[#820CAC]" />,
    title: "Excellence",
    description:
      "The markets we operate in are becoming increasingly competitive, offering stakeholders a wide range of choices. To achieve sustained success and growth, we must focus on delivering exceptional services, maintaining the highest quality in our products, and ensuring our facilities meet top standards.",
  },
  {
    icon: <FaShieldAlt size={30} className="text-[#820CAC]" />,
    title: "Integrity",
    description:
      "As a payment facilitation platform based in Pakistan, our success relies on empowering our merchants through outstanding services. Our stakeholders, customers, and society expect us to consistently uphold the highest ethical standards and professional excellence.",
  },
  {
    icon: <FaUsers size={30} className="text-[#820CAC]" />,
    title: "Customer Focus",
    description:
      "We must gain a comprehensive understanding of our customers' and merchants' requirements and be prepared to tailor our products and services accordingly. Our primary commitment should always be to prioritize the satisfaction of our customers and merchants.",
  },
  {
    icon: null,
    title: "",
    description: "",
  },
  {
    icon: <FaAward size={30} className="text-[#820CAC]" />,
    title: "Meritocracy",
    description:
      "We are committed to offering opportunities and benefits to our employees based on their skills and capabilities. We value recognizing achievements and providing exceptional career growth opportunities for everyone.",
  },
  {
    icon: <FaRocket size={30} className="text-[#820CAC]" />,
    title: "Progressiveness",
    description:
      "We firmly believe in driving societal progress by adopting innovative work practices, developing groundbreaking products and processes, and nurturing a culture of entrepreneurship.",
  },
];

const ValuesSection = () => {
  return (
    <section className="py-16 bg-gray-50 flex flex-col gap-10">
      <div className="heading flex items-center justify-center gap-3 px-4">
        <LuCircleDot className="text-[#820CAC]" />
        <h2 className="font-semibold text-lg sm:text-xl">
          Core Values and Principles
        </h2>
      </div>

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center px-4 md:px-36">
        Core Values and Principles: The Foundation of Our Mission and Success
      </h1>
      <p className="max-w-2xl mx-auto text-gray-600 mb-10 px-4 text-base sm:text-lg text-center">
        Driven by our commitment to excellence, integrity, and
        customer-centricity, we focus on understanding and meeting the evolving
        needs of our stakeholders. Our culture emphasizes meritocracy, fostering
        growth, celebrating individual achievements, and promoting a progressive
        mindset that inspires innovation and contributes to societal
        advancement.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-10 max-w-6xl mx-auto px-4">
        {values.map((value, index) =>
          value.icon !== null ? (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-md p-6 relative"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-100 rounded-full p-3">
                {value.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mt-8 mb-4 text-center">
                {value.title}
              </h3>
              <p className="text-gray-600 text-base sm:text-lg text-center">
                {value.description}
              </p>
            </div>
          ) : (
            <div
              key={index}
              className="bg-[#820CAC] rounded-3xl shadow-md p-6 flex items-center justify-center"
            >
              <a
                href="/"
                className="px-6 py-3 rounded-full bg-white text-[#820CAC] font-semibold hover:bg-blue-100 transition-all duration-200"
              >
                Get Started
              </a>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default ValuesSection;
