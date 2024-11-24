import React from "react";
import client_1 from "../../assets/Images/client-1.png";
import client_2 from "../../assets/Images/freshBasket.png";

const clientLogos = [
  { src: client_1, alt: "OdeonPay", url: "https://odeonpay.com/" },
  { src: client_2, alt: "fresh basket", url: "https://freshbasket.cloud" },
];

const ClientsSection = () => {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-2xl sm:text-6xl font-bold text-gray-800 mb-12">
        Our Clients
      </h2>

      <div className="flex flex-col md:flex-row gap-8 justify-center items-center w-full">
        {clientLogos.map((client, index) => (
          <div key={index} className="flex justify-center">
            <a href={client.url} target="_blank">
              <img
                src={client.src}
                alt={client.alt}
                className="w-16 sm:w-20 md:w-24 h-auto object-contain"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientsSection;
