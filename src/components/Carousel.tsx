"use client";

import image from "../assets/photo1.jpg";
import image2 from "../assets/photo2.jpg";
import image3 from "../assets/photo4.jpg";
import { Carousel } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";

const customTheme: CustomFlowbiteTheme["carousel"] = {
  root: {
    base: "rounded-none",
  },
  control: {
    base: "d-none",
    icon: "text-transparent",
  },
};

export function CarouselCustom() {
  return (
    <div className="grid h-screen gap-4 md:h-screen">
      <Carousel theme={customTheme}>
        <img src={image3} className="h-full object-cover" alt="..." />
        <img src={image} className="h-full object-cover" alt="..." />
        <img src={image2} className="h-full object-cover" alt="..." />
      </Carousel>
    </div>
  );
}
