
"use client";

import { Button, CustomFlowbiteTheme, FlowbiteTheme } from "flowbite-react";

interface ButtonCustomProps {
    theme?: CustomFlowbiteTheme["button"];
    text: string;
    type?: "button" | "submit" | "reset";
}

const mainTheme: CustomFlowbiteTheme["button"] = {
    base: "bg-gradient-to-br from-blue-dianne-300 to-blue-dianne-500 text-white font-semibold text-md py-2 px-4 rounded-md text-center",
    inner: {
        base: "flex items-center justify-center",
    },
};

export const ButtonCustom: React.FC<ButtonCustomProps> = ({text, theme, type}) => {
  return (
    <>
      <Button theme={mainTheme ?? theme} type={type ?? 'button'}>{text}</Button>
    </>
  );
}
