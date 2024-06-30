"use client";

interface InputDateProps {
  id: string;
  setDateState: any;
  disabled?: boolean;
}
import { Datepicker } from "flowbite-react";
import React from "react";

export const InputDate: React.FC<InputDateProps> = ({
  id,
  setDateState,
  disabled,
}) => {
  return (
    <Datepicker
      id={id}
      onSelectedDateChanged={(e) => {
        console.log(e.getTime());
        setDateState(e.getTime());
      }}
      disabled={disabled ?? false}
      minDate={new Date()}
    />
  );
};
