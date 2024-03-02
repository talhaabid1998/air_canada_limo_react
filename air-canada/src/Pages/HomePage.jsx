import React from "react";

import { Navbar } from "../Components/NavBar";
import { HeroSection } from "../Components/HeroSection";
import { TechnologySection } from "../Components/TechnologySection";
import { Vehicles } from "../Components/VehiclesSection";
import ServicesSection from "../Components/ServicesSection";
import AboutUsSection from "../Components/AboutUsSection";

const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TechnologySection />

      <Vehicles />
      <ServicesSection />
      <AboutUsSection/>
    </div>
  );
};

export default HomePage;
