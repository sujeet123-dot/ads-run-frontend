import React from 'react';

const TestimonialCard = ({ quote, author, company }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-300 dark:border-gray-700 transition-colors duration-300">
      <p className="text-gray-700 dark:text-gray-300 italic">"{quote}"</p>
      <div className="mt-4 text-right">
        <p className="font-bold text-gray-900 dark:text-white">{author}</p>
        <p className="text-sm text-blue-600 dark:text-blue-400">{company}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
