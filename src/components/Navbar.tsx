"use client";

import { Navbar } from "flowbite-react";
import logo from "../assets/logo.jpeg";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { useEffect, useState } from "react";

// NavbarProps interface
interface NavbarProps {
  route: string;
  scrollable?: boolean;
}

// Custom theme for the navbar
const mainTheme: CustomFlowbiteTheme["navbar"] = {
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

// Custom theme for the navbar when the user has scrolled
const scrolledTheme: CustomFlowbiteTheme["navbar"] = {
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

const nonScrollableTheme: CustomFlowbiteTheme["navbar"] = {
  root: {
    base: "bg-blue-dianne-800 text-white rounded-none py-6 px-10 z-50 w-full transition-all duration-300 ease-in-out shadow-md",
  },
  link: {
    base: "text-white font-semibold text-md",
    active: {
      on: "text-cashmere-300",
      off: "text-white hover:text-cashmere-300",
    },
  },
};

export const NavbarCustom: React.FC<NavbarProps> = ({ route, scrollable }) => {
  const [scrolled, setScrolled] = useState(false);

  // Logic if the user has scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Navbar component
  if (localStorage.getItem("user") == null) {
    return (
      <div>
        <Navbar
          theme={
            scrollable == false
              ? nonScrollableTheme
              : scrolled == false
                ? mainTheme
                : scrolledTheme
          }
        >
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
            <Navbar.Link href="/" active={route === "/"}>
              Home
            </Navbar.Link>
            <Navbar.Link href="/reviews" active={route === "/reviews"}>
              Reviews
            </Navbar.Link>
            <Navbar.Link href="/reservation" active={route === "/reservation"}>
              Reservation
            </Navbar.Link>
            <Navbar.Link href="/login" active={route === "/login"}>
              Login
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  } else if(JSON.parse(localStorage.getItem("user") as string).role === "Customer"){
    return (
      <div>
        <Navbar
          theme={
            scrollable == false
              ? nonScrollableTheme
              : scrolled == false
                ? mainTheme
                : scrolledTheme
          }
        >
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
            <Navbar.Link href="/" active={route === "/"}>
              Home
            </Navbar.Link>
            <Navbar.Link href="/reviews" active={route === "/reviews"}>
              Reviews
            </Navbar.Link>
            <Navbar.Link href="/reservation" active={route === "/reservation"}>
              Reservation
            </Navbar.Link>
            <Navbar.Link href="/logout" active={route === "/logout"}>
              Logout
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  } else {
    return (
      <div>
        <Navbar
          theme={
            scrollable == false
              ? nonScrollableTheme
              : scrolled == false
                ? mainTheme
                : scrolledTheme
          }
        >
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
            <Navbar.Link href="/admin" active={route === "/admin"}>
              Admin
            </Navbar.Link>
            <Navbar.Link href="/logout" active={route === "/logout"}>
              Logout
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
};
