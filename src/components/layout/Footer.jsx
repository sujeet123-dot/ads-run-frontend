import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {currentYear} AdRun Pro. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/services" className="text-gray-400 hover:text-white text-sm">Services</Link>
            <Link to="/contact" className="text-gray-400 hover:text-white text-sm">Contact</Link>
            {/* Add social media links here */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;