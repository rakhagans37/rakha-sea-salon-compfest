"use client";

import { Avatar, Blockquote, Rating } from "flowbite-react";

interface ReviewCardProps {
  username: string;
  rating: number;
  comment: string;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  username,
  rating,
  comment,
}) => {
  const renderRatingStars = () => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<Rating.Star key={i} />);
    }
    for (let i = 0; i < 5 - rating; i++) {
      stars.push(<Rating.Star key={i} filled={false} />);
    }
    return stars;
  };

  return (
    <figure className="w-screen-md">
      <div className="mb-4 flex items-center">
        <Rating size="md">{renderRatingStars()}</Rating>
      </div>
      <Blockquote>
        <p className="text-2xl font-semibold text-gray-900 dark:text-white">
          "{comment}"
        </p>
      </Blockquote>
      <figcaption className="mt-6 flex items-center space-x-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-blue-dianne-200">
          <p>{username.trim().substring(0, 1)}</p>
        </div>
        <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
          <cite className="pr-3 font-medium text-gray-900 dark:text-white">
            {username}
          </cite>
        </div>
      </figcaption>
    </figure>
  );
};
