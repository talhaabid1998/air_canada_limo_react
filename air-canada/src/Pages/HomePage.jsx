import React from "react";


import { Navbar } from "../Components/NavBar";
import { HeroSection } from "../Components/HeroSection";
import { TechnologySection } from "../Components/TechnologySection";

const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TechnologySection/>
      <TechnologySection/>
    </div>
  );
};




export default HomePage;
