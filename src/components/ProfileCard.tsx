"use client";

interface ProfileCardProps {
    imgSrc: string;
    imgAlt: string;
    username: string;
    phoneNumber: string;
    role: string;
}
import { Card } from "flowbite-react";
import { ClipboardCustom } from "./Clipboard";

export const ProfileCard: React.FC<ProfileCardProps> = ({ imgSrc, imgAlt, username, phoneNumber, role }) => {
  return (
    <Card className="max-w-sm">
      <div className="flex flex-col items-center p-8">
        <img
          alt={imgAlt}
          src={imgSrc}
          className="mb-3 h-24 w-24 object-cover rounded-full shadow-lg"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{username}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400 mb-3">{role}</span>
        <ClipboardCustom text={phoneNumber} />
      </div>
    </Card>
  );
};
