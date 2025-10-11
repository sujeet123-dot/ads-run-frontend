import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ to, children, primary = false, className = '' }) => {
  const baseClasses =
    "inline-block text-center rounded px-8 py-3 text-sm font-medium shadow focus:outline-none focus:ring transition-all transform hover:scale-105 duration-200";

  // Theme-aware colors
  const primaryClasses =
    "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 dark:active:bg-blue-400";

  const secondaryClasses =
    "border border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white active:bg-blue-500 active:text-white " +
    "dark:border-blue-400 dark:text-blue-300 dark:hover:bg-blue-500 dark:hover:text-white dark:active:bg-blue-400";

  return (
    <Link
      to={to}
      className={`${baseClasses} ${primary ? primaryClasses : secondaryClasses} ${className}`}
    >
      {children}
    </Link>
  );
};

export default Button;
