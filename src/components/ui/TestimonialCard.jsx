import React from 'react';

const TestimonialCard = ({ quote, author, company }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
      <p className="text-gray-300 italic">"{quote}"</p>
      <div className="mt-4 text-right">
        <p className="font-bold text-white">{author}</p>
        <p className="text-sm text-blue-400">{company}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;