import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        "blue-dianne": {
          50: "#f2f9f9",
          100: "#deefef",
          200: "#c1dfe0",
          300: "#95c8cb",
          400: "#63a7ad",
          500: "#478c93",
          600: "#3e737c",
          700: "#376067",
          800: "#335057",
          900: "#2e454b",
          950: "#1b2c31",
        },
        cashmere: {
          50: "#fcf6f0",
          100: "#f9e9db",
          200: "#f2cfb6",
          300: "#ecb794",
          400: "#e08557",
          500: "#d96736",
          600: "#cb502b",
          700: "#a83d26",
          800: "#873325",
          900: "#6d2b21",
          950: "#3b140f",
        },
      },
      fontFamily: {
        poppins: "Poppins",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
