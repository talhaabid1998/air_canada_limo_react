import React from "react";
import img from "../assets/mainimg.jpg";

export const HeroSection = () => {
  return (
    <div className="relative w-screen h-screen">
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 10,
        }}
      />
      {/* Background image */}
      <img
        src={img}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Content - adjust the top, left and padding for different screen sizes */}
      <div className="absolute z-20 top-1/4 md:top-1/2 left-4 md:left-10 lg:left-16 transform md:-translate-y-1/2 p-4 md:p-8">
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
          Ultimate Chauffeur Craftsmanship
        </h1>
        <p className="text-white text-base md:text-lg lg:text-xl mb-4 md:mb-6">
          Exquisite Chauffeur Services in Over 1,200 Cities Worldwide, Locally Connected.
        </p>
        <button className="btn btn-error text-white btn-md md:btn-lg">
          SCHEDULE A RIDE
        </button>
      </div>
    </div>
  );
};
