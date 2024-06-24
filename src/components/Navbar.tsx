
"use client";

import { Navbar } from "flowbite-react";
import logo from "../assets/logo.jpeg";
import type { CustomFlowbiteTheme } from "flowbite-react";

const customTheme: CustomFlowbiteTheme["navbar"] = {
    link: {
      base: "text-white font-semibold text-md",
      active: {
        on: "text-cashmere-300",
        off: "text-white hover:text-cashmere-300",
      },
    },
};

export function NavbarCustom() {
  return (
    <Navbar theme={customTheme} className="bg-blue-dianne-800 text-white rounded-none py-6 px-10">
      <Navbar.Brand href="#">
        <img src={logo} className="mr-3 h-10 w-10 rounded-full" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">SEA Salon</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">
          About
        </Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
