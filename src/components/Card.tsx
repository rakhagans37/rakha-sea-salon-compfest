"use client";
interface CardCustomProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
}

import { Card } from "flowbite-react";
import React from "react";
import type { CustomFlowbiteTheme } from "flowbite-react";

const customTheme: CustomFlowbiteTheme["card"] = {
  root:{
    "children": "flex flex-col justify-center gap-4 p-6"
  },
  img: {
    base: "w-full h-64 object-cover",
  },
};

const CardCustom: React.FC<CardCustomProps> = ({
  imgSrc,
  imgAlt,
  title,
  description,
}) => {
  return (
    <Card
      className="max-w-sm"
      imgAlt={imgAlt}
      imgSrc={imgSrc}
      theme={customTheme}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
    </Card>
  );
};

export default CardCustom;
