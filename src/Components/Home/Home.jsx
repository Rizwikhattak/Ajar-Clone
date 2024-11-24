import React from "react";
import "./Home.css";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ValuesSection from "./ValuesSection";
import ServicesSection from "./ServicesSection";
import ClientsSection from "./Client";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

const Home = () => {
  return (
    <section
      className="h-screen min-h-screen font-custom overflow-y-auto"
      id="/"
    >
      <HeroSection />
      <AboutSection />
      <ValuesSection />
      <ServicesSection />
      <ClientsSection />
      <ContactSection />
      <Footer />
    </section>
  );
};

export default Home;
