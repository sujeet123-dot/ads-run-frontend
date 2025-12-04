import React from 'react';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="group relative h-full">
      
      <div className="
        block h-full rounded-2xl 
        bg-[#141625] border border-white/5 
        p-8 
        transition-all duration-300 ease-out
        hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-indigo-500/30
      ">
        
        
        <div className="
          w-14 h-14 rounded-xl mb-6
          flex items-center justify-center 
          bg-indigo-500/10 text-indigo-400
          group-hover:bg-indigo-600 group-hover:text-white
          transition-colors duration-300
        ">
          {/* We clone the icon to enforce size if needed, or just render it */}
          {React.isValidElement(icon) 
            ? React.cloneElement(icon, { size: 28 }) 
            : icon
          }
        </div>

        {/* 3. Title */}
        <h2 className="mt-4 text-xl font-bold text-white group-hover:text-indigo-200 transition-colors">
          {title}
        </h2>

        {/* 4. Description */}
        <p className="mt-3 text-sm leading-relaxed text-gray-400">
          {description}
        </p>
      </div>

      
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-300 blur-lg -z-10"></div>
    </div>
  );
};

export default ServiceCard;