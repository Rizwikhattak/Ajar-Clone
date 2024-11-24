import React from "react";
import { LuCircleDot } from "react-icons/lu";
import ServicesImg from "../../assets/Images/ServicesImg.png";

const ServicesSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center py-8 sm:py-16 px-4 sm:px-6 bg-white">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
        <img
          src={ServicesImg}
          alt="Mobile app screenshot"
          className="w-full max-w-sm sm:max-w-md lg:max-w-full"
        />
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-1/2 lg:pl-10 text-left">
        <div className="heading flex items-center gap-3 mb-4">
          <LuCircleDot className="text-[#820CAC]" />
          <h2 className="text-lg sm:text-xl font-semibold">
            Trust with TrustPay
          </h2>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          Collections for
        </h1>
        <p className="text-gray-600 mb-8 text-base sm:text-lg">
          Digital sellers who intend to secure their collection can seamlessly
          integrate with us for a One-Click checkout solution.
        </p>

        {/* Vertical Steps using DaisyUI */}
        <ul className="steps steps-vertical mb-8">
          <li data-content="" className="step step-secondary !text-left">
            <p className="text-gray-700 ml-4 text-sm sm:text-base">
              Educational institutes, e.g., schools, colleges, universities,
              tuition centers for collection of fee, and other charges.
            </p>
          </li>
          <li data-content="" className="step step-secondary !text-left">
            <p className="text-gray-700 ml-4 text-sm sm:text-base">
              Digital gaming platforms and applications offering digital goods.
            </p>
          </li>
          <li data-content="" className="step step-secondary !text-left">
            <p className="text-gray-700 ml-4 text-sm sm:text-base">
              e-Commerce platforms and applications offering clothing,
              groceries, etc.
            </p>
          </li>
          <li data-content="" className="step step-secondary !text-left">
            <p className="text-gray-700 ml-4 text-sm sm:text-base">
              Marketplaces offering services.
            </p>
          </li>
          <li data-content="" className="step step-secondary !text-left">
            <p className="text-gray-700 ml-4 text-sm sm:text-base">
              Social media platforms offering subscriptions and e-goods.
            </p>
          </li>
        </ul>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          Disbursements for
        </h1>
        <ul className="steps steps-vertical">
          <li data-content="" className="step step-secondary !text-left">
            <p className="text-gray-700 ml-4 text-sm sm:text-base">
              Payrolls, commissions, vendors, and refunds for any entity.
            </p>
          </li>
          <li data-content="" className="step step-secondary !text-left">
            <p className="text-gray-700 ml-4 text-sm sm:text-base">
              Refunds and reimbursements.
            </p>
          </li>
          <li data-content="" className="step step-secondary !text-left">
            <p className="text-gray-700 ml-4 text-sm sm:text-base">
              Digital services, e.g., web designing, freelancing, and content
              development, etc.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ServicesSection;
