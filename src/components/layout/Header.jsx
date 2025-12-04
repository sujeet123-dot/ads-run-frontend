import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClasses = ({ isActive }) =>
    `text-[17px] font-medium transition-colors ${
      isActive
        ? "text-orange-600"
        : "text-slate-600 hover:text-slate-900"
    }`;

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${
        scrolled || isOpen
          ? "bg-white/95 border-b border-slate-200 shadow-sm"
          : "bg-white border-b border-slate-200/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-2 h-14 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-semibold tracking-tight text-slate-900"
        >
          Zenithum<span className="text-orange-600">Media</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={navLinkClasses}>
            Home
          </NavLink>
          <NavLink to="/services" className={navLinkClasses}>
            Services
          </NavLink>
          <NavLink to="/case-studies" className={navLinkClasses}>
            Case Studies
          </NavLink>
          <NavLink to="/about" className={navLinkClasses}>
            About Us
          </NavLink>
          <NavLink to="/contact" className={navLinkClasses}>
            Contact
          </NavLink>
        </nav>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="hidden md:inline-flex items-center justify-center rounded-full px-4 py-1.5 text-[13px] font-medium text-white bg-orange-500 hover:bg-orange-600 transition-colors"
        >
          Get Quote
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden inline-flex items-center justify-center rounded-md p-1.5 border border-slate-200 bg-white text-slate-800"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden border-b border-slate-200 bg-white transition-all duration-200 ${
          isOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-3 px-4 pb-4 pt-3 text-sm">
          <NavLink
            to="/"
            className={navLinkClasses}
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={navLinkClasses}
            onClick={() => setIsOpen(false)}
          >
            Services
          </NavLink>
          <NavLink
            to="/case-studies"
            className={navLinkClasses}
            onClick={() => setIsOpen(false)}
          >
            Case Studies
          </NavLink>
          <NavLink
            to="/about"
            className={navLinkClasses}
            onClick={() => setIsOpen(false)}
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={navLinkClasses}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-full px-4 py-2 text-[13px] font-medium text-white bg-orange-500 hover:bg-orange-600 transition-colors"
          >
            Get Quote
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
