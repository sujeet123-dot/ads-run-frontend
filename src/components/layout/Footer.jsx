import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors border-t border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="dark:bg-gray-900 text-gray-900 dark:text-gray-100 text-sm">&copy; {currentYear} AdRun Pro. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/services" className="dark:bg-gray-900 text-gray-900 dark:text-gray-100 hover:text-gray-900 dark:hover:text-white text-sm">Services</Link>
            <Link to="/contact" className="dark:bg-gray-900 text-gray-900 dark:text-gray-100 hover:text-gray-900 dark:hover:text-white text-sm">Contact</Link>
            {/* Add social media links here */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;