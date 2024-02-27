import React from "react";
import awsLogo from "../assets/aws.png"; // Replace with actual paths to your logo images
import microsoftLogo from "../assets/microsoft.png";
import googleMapsLogo from "../assets/googlemaps.png";
import openStreetMapLogo from "../assets/openstreet.png";
import twilioLogo from "../assets/twilio.png";
import openAILogo from "../assets/openai.png";

export const TechnologySection = () => {
  return (
    <div className="flex flex-col items-center justify-center my-16">
      <div className="flex items-center justify-center my-8">
        <div
          className="bg-red-500 inline-block"
          style={{ width: "50px", height: "2px" }}
        ></div>
        <h2 className="mx-4 text-3xl font-bold text-gray-800">Technology</h2>
        <div
          className="bg-red-500 inline-block"
          style={{ width: "50px", height: "2px" }}
        ></div>
      </div>
      <div className="flex flex-wrap justify-around items-center w-full space-y-4 md:space-y-0 md:space-x-28">
        <img
          src={awsLogo}
          alt="AWS Logo"
          className="h-20 grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-opacity duration-300"
        />
        <img
          src={microsoftLogo}
          alt="Microsoft Logo"
          className="h-24 grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-opacity duration-300"
        />
        <img
          src={googleMapsLogo}
          alt="Google Maps Logo"
          className="h-24 grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-opacity duration-300"
        />
        <img
          src={openStreetMapLogo}
          alt="OpenStreetMap Logo"
          className="h-24 grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-opacity duration-300"
        />
        <img
          src={twilioLogo}
          alt="Twilio Logo"
          className="h-12 grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-opacity duration-300"
        />
        <img
          src={openAILogo}
          alt="OpenAI Logo"
          className="h-12 grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-opacity duration-300"
        />
      </div>
    </div>
  );
};
