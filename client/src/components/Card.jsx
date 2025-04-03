import React from 'react';

const Card = ({ title, price, features }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
      <h2 className="text-xl font-bold mb-4 bg-blue-800 py-5 text-white">{title}</h2>
      <p className="text-2xl font-semibold mb-4">{price}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-700">{feature}</li>
        ))}
      </ul>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Contratar
      </button>
    </div>
  );
};

export default Card;
