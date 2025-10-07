import React from 'react';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10">
      <div className="text-blue-500">{icon}</div>
      <h2 className="mt-4 text-xl font-bold text-white">{title}</h2>
      <p className="mt-1 text-sm text-gray-300">{description}</p>
    </div>
  );
};

export default ServiceCard;