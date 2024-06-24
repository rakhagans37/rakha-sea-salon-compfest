import logo from "../assets/logo.jpeg";
"use client";

export function FooterCustom() {
  return (
    <footer className="flex flex-col items-center justify-center bg-primary text-primary-content p-14 bg-blue-dianne-900">
      <aside className="flex flex-col items-center justify-center gap text-white gap-3">
        <img src={logo} alt="" className="h-16 w-16 rounded-full" />
        <p className="font-bold text-center">
          SEA Salon
          <br />
          Providing reliable salon since 2024
        </p>
        <p className="text-center">Copyright © ${new Date().getFullYear()} - All right reserved</p>
      </aside>
    </footer>
  );
}
