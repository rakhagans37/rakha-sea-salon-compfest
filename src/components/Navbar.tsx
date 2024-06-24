"use client";

import { Navbar } from "flowbite-react";
import logo from "../assets/logo.jpeg";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { useEffect, useState } from "react";

const customTheme: CustomFlowbiteTheme["navbar"] = {
  root: {
    base: "bg-transparent text-blue-dianne-900 rounded-none py-6 px-10 md:absolute top-0 z-50 w-full transition-all duration-300 ease-in-out",
  },
  link: {
    base: "text-blue-dianne-900 font-semibold text-md",
    active: {
      on: "text-cashmere-300",
      off: "text-blue-dianne-900 hover:text-cashmere-300",
    },
  },
};

const customThemeScrolled: CustomFlowbiteTheme["navbar"] = {
  root: {
    base: "bg-blue-dianne-800 text-white rounded-none py-6 px-10 fixed top-0 z-50 w-full transition-all duration-300 ease-in-out shadow-md",
  },
  link: {
    base: "text-white font-semibold text-md",
    active: {
      on: "text-cashmere-300",
      off: "text-white hover:text-cashmere-300",
    },
  },
};

export function NavbarCustom() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar theme={scrolled == true ? customThemeScrolled : customTheme}>
        <Navbar.Brand href="#">
          <img
            src={logo}
            className="mr-3 h-10 w-10 rounded-full"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-extrabold">
            SEA Salon
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#about">About</Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
