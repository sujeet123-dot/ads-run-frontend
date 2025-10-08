import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkStyles = ({ isActive }) => ({
    color: isActive ? '#3b82f6' : '#d1d5db',
    fontWeight: isActive ? 'bold' : 'normal',
  });

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
        >
          AdRun Pro
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-300">
          <NavLink to="/" style={navLinkStyles} className="hover:text-blue-500 transition-colors">Home</NavLink>
          <NavLink to="/services" style={navLinkStyles} className="hover:text-blue-500 transition-colors">Services</NavLink>
          <NavLink to="/case-studies" style={navLinkStyles} className="hover:text-blue-500 transition-colors">Case Studies</NavLink>
          <NavLink to="/about" style={navLinkStyles} className="hover:text-blue-500 transition-colors">About Us</NavLink>
          <NavLink to="/contact" style={navLinkStyles} className="hover:text-blue-500 transition-colors">Contact</NavLink>
        </nav>

        {/* Desktop Button */}
        <Link
          to="/contact"
          className="hidden md:inline-block bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition-colors"
        >
          Get Quote
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-300 hover:text-white transition-colors"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <nav className="flex flex-col items-center space-y-4 py-4 text-gray-300 text-sm font-medium">
            <NavLink onClick={() => setIsOpen(false)} to="/" style={navLinkStyles}>Home</NavLink>
            <NavLink onClick={() => setIsOpen(false)} to="/services" style={navLinkStyles}>Services</NavLink>
            <NavLink onClick={() => setIsOpen(false)} to="/case-studies" style={navLinkStyles}>Case Studies</NavLink>
            <NavLink onClick={() => setIsOpen(false)} to="/about" style={navLinkStyles}>About Us</NavLink>
            <NavLink onClick={() => setIsOpen(false)} to="/contact" style={navLinkStyles}>Contact</NavLink>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
