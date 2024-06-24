"use client";
interface ClipboardCustomProps {
    text: string;
}

import { Clipboard } from "flowbite-react"

export const ClipboardCustom: React.FC<ClipboardCustomProps> = ({ text }) => {
  return (
    <div className="grid w-full max-w-64">
      <div className="relative">
        <label htmlFor={text} className="sr-only">
          Label
        </label>
        <input
          id={text}
          type="text"
          className="col-span-6 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          value={text}
          disabled
          readOnly
        />
        <Clipboard.WithIcon valueToCopy={text} />
      </div>
    </div>
  )
}
