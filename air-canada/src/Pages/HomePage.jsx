import React, { useRef } from 'react';

import { Navbar } from "../Components/NavBar";
import { HeroSection } from "../Components/HeroSection";
import { TechnologySection } from "../Components/TechnologySection";
import { Vehicles } from "../Components/VehiclesSection";
import ServicesSection from "../Components/ServicesSection";
import AboutUsSection from "../Components/AboutUsSection";
import ContactSection from "../Components/ContactSection";

const HomePage = () => {

    const homeRef = useRef(null);
  const citiesRef = useRef(null);
  const vehiclesRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <div className="overflow-x-hidden">
      <Navbar scrollToSection={scrollToSection} refs={{ homeRef, citiesRef, vehiclesRef, servicesRef, aboutRef, contactRef }} />
      <div className='mt-[110px]' ref={homeRef}><HeroSection /></div>
      <div ref={citiesRef}><TechnologySection /></div>

      <div ref={vehiclesRef}>
        <Vehicles />
      </div>
      <div ref={servicesRef}><ServicesSection /></div>
      <div ref={aboutRef}><AboutUsSection/></div>
      <div ref={contactRef}><ContactSection/></div>
    </div>
  );
};

export default HomePage;
