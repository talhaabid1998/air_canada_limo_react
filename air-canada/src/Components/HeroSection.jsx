import React from "react";
import img from "../assets/mainimg.jpg";
import { useNavigate } from 'react-router-dom';

export const HeroSection = () => {



  let navigate = useNavigate();

  const navigateToOrderPage = () => {
    navigate('/about'); // Change '/orderpage' to your order page's path
  };
  return (
    <div className="relative ">
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
      <img src={img} alt="Background" className=" w-full h-full " />
      {/* Content - adjust the top, left and padding for different screen sizes */}
      <div className="absolute z-20 top-1/2 right-4 md:right-10 lg:right-16 transform -translate-y-1/2 p-4 md:p-8">
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
          AIR CANADA LIMO
        </h1>
        <p className="text-white text-base md:text-lg lg:text-xl mb-4 md:mb-6">
          Exquisite Chauffeur Services in Over 1,200 Cities Worldwide, Locally
          Connected.
        </p>
        <button onClick={navigateToOrderPage} className="btn btn-error text-white btn-md md:btn-lg">
          Book Now
        </button>
      </div>
    </div>
  );
};
