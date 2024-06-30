"use client";

interface InputSelectProps {
  label: string;
  id: string;
  option: Array<string>;
  setService: (service: string) => void;
}

const mainTheme: CustomFlowbiteTheme["select"] = {
  base: "w-full",
  field: {
    base: "w-full",
    select: {
      base: "w-full",
      colors: {
        gray: "border-gray-300 bg-gray-50 text-blue-dianne-900 focus:border-blue-dianne-500 focus:ring-blue-dianne-500 ",
      },
    },
  },
};

import { CustomFlowbiteTheme, Label, Select } from "flowbite-react";
import React from "react";

export const InputSelect: React.FC<InputSelectProps> = ({
  id,
  label,
  option,
  setService,
}) => {
  const printOptions = () => {
    return option.map((option) => {
      return <option key={option}>{option}</option>;
    });
  };
  return (
    <div className="w-full">
      <div className="mb-2 block">
        <Label htmlFor={id} value={label} />
      </div>
      <Select
        id={id}
        theme={mainTheme}
        onChange={(e) => {
          setService(e.target.value)
        }}
        required
      >
        {printOptions()}
      </Select>
    </div>
  );
};
