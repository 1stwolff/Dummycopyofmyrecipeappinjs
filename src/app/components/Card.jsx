import React from 'react';

const Card = ({ imageSrc, authorName, recipeName }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-4 bg-blue-300">
      <img className="w-full" src={imageSrc} alt={recipeName} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{recipeName}</div>
        <p className="text-gray-500 text-base">by {authorName}</p>
      </div>
    </div>
  );
};

export default Card;
