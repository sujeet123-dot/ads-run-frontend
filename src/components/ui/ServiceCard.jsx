import React from 'react';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="block rounded-xl border border-gray-300 dark:border-gray-800 p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10 bg-white dark:bg-gray-900">
      <div className="text-blue-600 dark:text-blue-500">{icon}</div>
      <h2 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">{title}</h2>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

export default ServiceCard;
