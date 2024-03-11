import { Close } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import sideLogo from "../assets/sidelogo.jpeg";

export const Navbar = ({ scrollToSection, refs }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set isScrolled to true if page is scrolled more than 50 pixels
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add the event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const links = ["Home", "Cities", "Vehicles", "Services", "About", "Contact"];

  return (
    <>
      <div
        className={`py-4 px-4 fixed top-0 w-full z-50 flex items-center justify-between  transition-colors duration-300 ${
          isScrolled ? "bg-black shadow-md" : "bg-black "
        }`}
      >
        <div>
          <img className="h-20" src={sideLogo}></img>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden flex items-center gap-2">
          {/* <button className="btn btn-error text-white py-1 px-6">
            My Trips
          </button> */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <MenuOutlinedIcon className="block h-6 w-6 text-white" />
            ) : (
              <MenuOutlinedIcon className="block h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Menu content */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-50 transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
          <div className="p-8 bg-white h-full w-64">
            {/* Close Icon */}
            <button onClick={() => setIsMenuOpen(false)} className="mb-8">
              <Close className="h-6 w-6 text-black" />
            </button>
            <nav className="flex flex-col">
              <a
                href="#"
                className="text-black py-2"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(refs.homeRef);
                }}
              >
                Home
              </a>
              <a
                href="#"
                className="text-black py-2"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(refs.citiesRef);
                }}
              >
                Technology
              </a>
              <a
                href="#"
                className="text-black py-2"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(refs.vehiclesRef);
                }}
              >
                Vehicles
              </a>
              <a
                href="#"
                className="text-black py-2"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(refs.servicesRef);
                }}
              >
                Servicess
              </a>
              <a
                href="#"
                className="text-black py-2"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(refs.aboutRef);
                }}
              >
                About
              </a>
              <a
                href="#"
                className="text-black py-2"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(refs.contactRef);
                }}
              >
                Contact
              </a>
            </nav>
          </div>
        </div>

        {/* Links for larger screens */}
        <nav
          className={`hidden md:flex space-x-4 justify-center flex-1 ${
            isScrolled ? "text-[#f2b56b] text-lg" : "text-[#f2b56b] text-lg"
          }`}
        >
          <a
            href="#"
            className={`hover:text-gray-300 ${
              isScrolled ? "" : "hover:text-gray-300"
            }`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(refs.homeRef);
            }}
          >
            Home
          </a>
          <a
            href="#"
            className={`hover:text-gray-300 ${
              isScrolled ? "" : "hover:text-gray-300"
            }`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(refs.citiesRef);
            }}
          >
            Technology
          </a>
          <a
            href="#"
            className={`hover:text-gray-300 ${
              isScrolled ? "" : "hover:text-gray-300"
            }`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(refs.vehiclesRef);
            }}
          >
            Vehicles
          </a>
          <a
            href="#"
            className={`hover:text-gray-300 ${
              isScrolled ? "" : "hover:text-gray-300"
            }`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(refs.servicesRef);
            }}
          >
            Services
          </a>
          <a
            href="#"
            className={`hover:text-gray-300 ${
              isScrolled ? "" : "hover:text-gray-300"
            }`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(refs.aboutRef);
            }}
          >
            About
          </a>
          <a
            href="#"
            className={`hover:text-gray-300 ${
              isScrolled ? "" : "hover:text-gray-300"
            }`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(refs.contactRef);
            }}
          >
            Contact
          </a>
        </nav>

        {/* <button className="btn btn-error text-white py-1 px-6 hidden md:block">
          My Trips
        </button> */}
      </div>
    </>
  );
};
