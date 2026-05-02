import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md shadow-lg shadow-black/40 border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">

        {/* Logo */}
        <Link to="/" onClick={closeMenu} className="flex-shrink-0">
          <span className="text-2xl font-bold tracking-tight text-white">
            Zenithum<span className="text-orange-400">Media</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `relative px-3 py-2 text-[15px] font-medium transition-colors group ${
                  isActive ? "text-orange-400" : "text-gray-300 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {label}
                  <span
                    className={`absolute bottom-0 left-3 right-3 h-[2px] bg-orange-400 rounded-full transition-all duration-300 origin-left ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          <Link
            to="/contact"
            className="px-5 py-2 text-[14px] font-semibold rounded-full border border-gray-600 text-gray-300 hover:border-orange-400 hover:text-orange-400 transition-all duration-200"
          >
            Let's Talk
          </Link>
          <Link
            to="/contact"
            className="px-5 py-2 text-[14px] font-semibold rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-all duration-200 shadow-md shadow-orange-900/30"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg border border-gray-700 text-gray-300 hover:bg-gray-800 transition-colors"
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isOpen ? "close" : "open"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-gray-800 bg-gray-950"
          >
            <nav className="flex flex-col px-4 py-4 gap-1">
              {NAV_LINKS.map(({ label, to }, i) => (
                <motion.div
                  key={to}
                  initial={{ x: -16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <NavLink
                    to={to}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `block px-3 py-2.5 rounded-lg text-[15px] font-medium transition-colors ${
                        isActive
                          ? "text-orange-400 bg-orange-500/10"
                          : "text-gray-300 hover:text-white hover:bg-gray-800"
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </motion.div>
              ))}

              <div className="flex gap-3 mt-3 pt-3 border-t border-gray-800">
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="flex-1 text-center py-2.5 text-[14px] font-semibold rounded-full border border-gray-600 text-gray-300 hover:border-orange-400 hover:text-orange-400 transition-all duration-200"
                >
                  Let's Talk
                </Link>
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="flex-1 text-center py-2.5 text-[14px] font-semibold rounded-full bg-violet-600 text-white hover:bg-violet-700 transition-all duration-200"
                >
                  Get Quote
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
