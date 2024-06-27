"use client";

import { Label, Textarea } from "flowbite-react";

interface TextareaCustomProps {
  id: string;
  placeholder: string;
  required?: boolean;
  textAreaState: any;
  setTextAreaState: any;
  label: string;
  errorTerm: boolean;
  errorMessage: string;
}
export const TextareaCustom: React.FC<TextareaCustomProps> = ({
  id,
  placeholder,
  required,
  label,
  textAreaState,
  setTextAreaState,
  errorTerm,
  errorMessage,
}) => {
  const ErrorBanner = () => {
    if(errorTerm === true) {
      return <p className="text-red-600 text-sm">{errorMessage}</p>;
    }
  };
  return (
    <div className="flex w-full flex-col items-start">
      <div className="mb-2 block">
        <Label htmlFor={id} value={label} />
      </div>
      <Textarea
        id={id}
        placeholder={placeholder}
        required={required ?? true}
        value={textAreaState}
        onChange={(event) => setTextAreaState(event.target.value)}
        rows={4}
        className=" border-gray-300 bg-gray-50 text-blue-dianne-900 focus:border-blue-dianne-500 focus:ring-blue-dianne-500"
      />
      <ErrorBanner />
    </div>
  );
};
