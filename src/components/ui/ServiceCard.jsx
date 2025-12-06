import React from 'react';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="group relative h-full">
      
      <div className="
        block h-full rounded-2xl 
        bg-gradient-to-br from-red-300 to-orange-400 border border-orange/5 
        p-8 backdrop-blur-lg shadow-lg
        transition-all duration-300 ease-out
        hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10 hover:border-amber-500/30
      ">
        
        
        <div className="
          w-14 h-14 rounded-xl mb-6
          flex items-center justify-center 
          bg-indigo-500/10 text-indigo-400
          group-hover:bg-orange-600 group-hover:text-white
          transition-colors duration-300
        ">
          {/* We clone the icon to enforce size if needed, or just render it */}
          {React.isValidElement(icon) 
            ? React.cloneElement(icon, { size: 28 }) 
            : icon
          }
        </div>

        {/* 3. Title */}
        <h2 className="mt-4 text-xl font-bold text-black group-hover:text-red-700 transition-colors">
          {title}
        </h2>

        {/* 4. Description */}
        <p className="mt-3 text-sm leading-relaxed text-gray-600">
          {description}
        </p>
      </div>

      
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-300 blur-lg -z-10"></div>
    </div>
  );
};

export default ServiceCard;