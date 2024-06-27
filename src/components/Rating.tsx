import React, { useState } from 'react';

interface RatingProps {
  rating: number;
  setRating: React.Dispatch<React.SetStateAction<number>>;
}

const StarRating: React.FC<RatingProps> = ({ rating, setRating }) => {
  const [hover, setHover] = useState(0);
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => {
        const starIndex = index + 1;
        return (
          <button
            type="button"
            key={starIndex}
            className={`text-2xl ${starIndex <= hover ? "text-yellow-300" : "text-gray-300"}`}
            onClick={() => setRating(starIndex)}
            onMouseEnter={() => setHover(starIndex)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
