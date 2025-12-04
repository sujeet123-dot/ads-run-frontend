import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ to, children, primary = false, className = '' }) => {
  const baseClasses = "inline-block text-center rounded px-8 py-3 text-sm font-medium shadow focus:outline-none focus:ring transition-transform transform hover:scale-105";
  
  const primaryClasses = "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-500";
  const secondaryClasses = "border border-blue-600 text-black hover:bg-blue-600 active:bg-blue-500";

  return (
    <Link to={to} className={`${baseClasses} ${primary ? primaryClasses : secondaryClasses} ${className}`}>
      {children}
    </Link>
  );
};

export default Button;