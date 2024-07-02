"use client";

interface InputPasswordProps {
  id: string;
  passwordState: any;
  setPasswordState: any;
  placeholder: string;
  label: string;
  errorTerm?: boolean;
  errorMessage?: string;
}
import { CustomFlowbiteTheme, Label, TextInput } from "flowbite-react";

const mainTheme: CustomFlowbiteTheme["textInput"] = {
  base: "w-full",
  field: {
    base: "w-full",
    input: {
      base: "w-full",
      colors: {
        gray: "border-gray-300 bg-gray-50 text-blue-dianne-900 focus:border-blue-dianne-500 focus:ring-blue-dianne-500 ",
      },
    },
  },
};

export const InputPassword: React.FC<InputPasswordProps> = ({
  id,
  passwordState,
  setPasswordState,
  placeholder,
  label,
  errorTerm,
  errorMessage,
}) => {
  return (
    <div>
      <div className="mb-2 block">
        <Label htmlFor={id} value={label} />
      </div>
      <TextInput
        theme={mainTheme}
        id={id}
        type="password"
        placeholder={placeholder}
        onChange={(e) => {
          setPasswordState(e.target.value);
        }}
        required
      />
      {errorTerm == true ? <p className="text-red-600 text-sm p-1">{errorMessage}</p> : null}
    </div>
  );
};
