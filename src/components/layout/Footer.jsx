import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050508] pt-20 pb-10 border-t border-white/5 text-gray-400 text-sm">
      <div className="container mx-auto px-6">
        
        {/* Top Section: 4-Column Grid */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand Info */}
          <div className="col-span-1">
            <Link to="/" className="text-2xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-400 mb-6 inline-block">
              ZenithumMedia
            </Link>
            <p className="mb-6 leading-relaxed text-gray-500">
              Professional Digital Marketing Services to Elevate Your Online Presence. We bridge the gap between brands and people.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a key={index} href="#" className="text-gray-400 hover:text-indigo-500 transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-base">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-indigo-400 transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-indigo-400 transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-indigo-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal / Extra */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-base">Legal</h4>
            <ul className="space-y-3">
              <li><Link to="/privacy" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-indigo-400 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/refund" className="hover:text-indigo-400 transition-colors">Refund Policy</Link></li>
              <li><Link to="/publishers" className="hover:text-indigo-400 transition-colors">Publishers</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-base">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-indigo-500 mt-1 shrink-0" />
                <span>N50B, Hargovind Enclave, chhatarpur, Delhi 110068</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-indigo-500 shrink-0" />
                <a href="tel:+917206991113" className="hover:text-indigo-400 transition-colors">+91 8789596859</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-indigo-500 shrink-0" />
                <a href="mailto:kishan.singla@adsonick.com" className="hover:text-indigo-400 transition-colors">shubhampandey@zenithummedia.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="text-center pt-8 border-t border-white/5 text-gray-600">
          <p>&copy; {currentYear} ZenithumMedia. All Rights Reserved. Developed by Sujeet.</p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;