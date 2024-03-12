import { Close } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import sideLogo from "../assets/sidelogo.jpeg";
const Button = () => {
  return (
    <button className="hover:bg-[#f2b56b] border-[#f2b56b] text-orange-200 font-semibold py-2 px-4 border  rounded shadow bg-transparent hover:text-black">
      <div className="flex items-center">
        <svg
          className="w-4 h-4 mr-2"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M2.93 17.07a10 10 0 1 1 14.14 0l-7.07-7.07-7.07 7.07z" />
        </svg>
        +1(123) 456 7890
      </div>
    </button>
  );
};

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
        className={`py-4 px-4 fixed top-0 w-full z-50 flex items-center justify-between gap-4  transition-colors duration-300 ${
          isScrolled ? "bg-[#15162C] shadow-md" : "bg-[#15162C] "
        }`}
      >
        <div >
          <img className="h-20" src={sideLogo}></img>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden flex items-center gap-2">
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
          className={`fixed inset-0 bg-[#15162C] bg-opacity-50 z-50 transform ${
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
          className={`hidden md:flex space-x-4 gap-2 items-center justify-center mx-auto  ${
            isScrolled ? "text-white text-lg" : "text-white text-lg"
          }`}
        >
         <a
  href="#"
  className="py-2  border-t-2 border-b-2 border-[#f2b56b] hover:text-gray-300 transition-all duration-100 ease-in-out"
  onClick={(e) => {
    e.preventDefault();
    scrollToSection(refs.homeRef);
  }}
>
  Home
</a>
          <a
            href="#"
            className={`  py-2 hover:border-t-2 hover:border-b-2 border-[#f2b56b] hover:text-gray-300 transition-all duration-100 ease-in-out ${
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
            className={`  py-2 hover:border-t-2 hover:border-b-2 border-[#f2b56b] hover:text-gray-300 transition-all duration-100 ease-in-out ${
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
            className={`  py-2 hover:border-t-2 hover:border-b-2 border-[#f2b56b] hover:text-gray-300 transition-all duration-100 ease-in-out ${
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
            className={`  py-2 hover:border-t-2 hover:border-b-2 border-[#f2b56b] hover:text-gray-300 transition-all duration-100 ease-in-out ${
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
            className={`  py-2 hover:border-t-2 hover:border-b-2 border-orange-300 hover:text-gray-300 transition-all duration-100 ease-in-out ${
              isScrolled ? "" : "hover:text-gray-300"
            }`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(refs.contactRef);
            }}
          >
            Contact
          </a>
          <Button />
        </nav>
      </div>
    </>
  );
};
