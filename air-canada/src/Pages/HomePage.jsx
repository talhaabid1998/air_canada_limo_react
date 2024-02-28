import React from "react";

import { Navbar } from "../Components/NavBar";
import { HeroSection } from "../Components/HeroSection";
import { TechnologySection } from "../Components/TechnologySection";
import { Vehicles } from "../Components/VehiclesSection";

const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TechnologySection />

      <Vehicles />
    </div>
  );
};

export default HomePage;
