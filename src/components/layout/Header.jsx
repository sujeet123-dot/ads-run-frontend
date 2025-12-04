import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to add heavier glass effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Custom active link styling logic
  const navLinkClasses = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-300 hover:text-indigo-400 ${
      isActive ? 'text-indigo-400' : 'text-gray-300'
    }`;

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/5 ${
        scrolled || isOpen ? 'backdrop-blur-md bg-[#0a0b14]/90 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-tighter uppercase bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-400"
        >
          ZenithumMedia
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className={navLinkClasses}>Home</NavLink>
          <NavLink to="/services" className={navLinkClasses}>Services</NavLink>
          <NavLink to="/case-studies" className={navLinkClasses}>Case Studies</NavLink>
          <NavLink to="/about" className={navLinkClasses}>About Us</NavLink>
          <NavLink to="/contact" className={navLinkClasses}>Contact</NavLink>
        </nav>

        {/* Desktop Button */}
        <Link
          to="/contact"
          className="hidden md:inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5 transition-all duration-200"
        >
          Get Quote
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white hover:text-indigo-400 transition-colors"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {/* Added simple animation logic for visibility */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#141625] border-b border-white/5 shadow-2xl overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col items-center space-y-6 py-8">
          <NavLink onClick={() => setIsOpen(false)} to="/" className={navLinkClasses}>Home</NavLink>
          <NavLink onClick={() => setIsOpen(false)} to="/services" className={navLinkClasses}>Services</NavLink>
          <NavLink onClick={() => setIsOpen(false)} to="/case-studies" className={navLinkClasses}>Case Studies</NavLink>
          <NavLink onClick={() => setIsOpen(false)} to="/about" className={navLinkClasses}>About Us</NavLink>
          <NavLink onClick={() => setIsOpen(false)} to="/contact" className={navLinkClasses}>Contact</NavLink>
          
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-3 rounded-full text-sm font-semibold shadow-lg"
          >
            Get Quote
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;