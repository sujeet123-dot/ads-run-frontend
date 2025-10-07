import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? '#3b82f6' : '#d1d5db',
      fontWeight: isActive ? 'bold' : 'normal',
    };
  };

  return (
    <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          AdRun Pro
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-300">
          <NavLink to="/" style={navLinkStyles} className="hover:text-blue-500 transition-colors">Home</NavLink>
          <NavLink to="/services" style={navLinkStyles} className="hover:text-blue-500 transition-colors">Services</NavLink>
          <NavLink to="/case-studies" style={navLinkStyles} className="hover:text-blue-500 transition-colors">Case Studies</NavLink>
          <NavLink to="/about" style={navLinkStyles} className="hover:text-blue-500 transition-colors">About Us</NavLink>
          <NavLink to="/contact" style={navLinkStyles} className="hover:text-blue-500 transition-colors">Contact</NavLink>
        </nav>
         <Link to="/contact" className="hidden md:inline-block bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition-colors">
          Get Quote
        </Link>
        {/* Add mobile menu button here if needed */}
      </div>
    </header>
  );
};

export default Header;