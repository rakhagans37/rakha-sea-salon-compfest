"use client";

import { Label, TextInput } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";
import React from "react";

interface InputTextProps {
  id: string;
  placeholder: string;
  required?: boolean;
  theme?: CustomFlowbiteTheme["textInput"];
  textState: any;
  setTextState: any;
  label: string;
  errorTerm: boolean;
  errorMessage: string;
}

const mainTheme: CustomFlowbiteTheme["textInput"] = {
  base: "w-full",
  field: {
    base: "w-full",
    input: {
      base: "w-full",
      sizes: {
        sm: "p-4 sm:text-xs",
        md: "p-4 text-sm",
        lg: "p-4 sm:text-base",
      },
      colors: {
        "gray": "border-gray-300 bg-gray-50 text-blue-dianne-900 focus:border-blue-dianne-500 focus:ring-blue-dianne-500 "
      }
    },
  },
};

export const InputText: React.FC<InputTextProps> = ({
  id,
  placeholder,
  required,
  theme,
  textState,
  setTextState,
  label,
  errorTerm,
  errorMessage,
}) => {
  const ErrorBanner = () => {
    if (errorTerm === true) {
      return <p className="text-red-600 text-sm">{errorMessage}</p>;
    }
  };
  return (
    <div className="flex flex-col items-start">
      <div className="mb-2 block">
        <Label htmlFor={id} value={label} />
      </div>
      <TextInput
        id={id}
        type="text"
        placeholder={placeholder}
        required={required ?? true}
        theme={theme ?? mainTheme}
        onChange={(e) => setTextState(e.target.value)}
        value={textState}
      />
      {ErrorBanner()}
    </div>
  );
};
