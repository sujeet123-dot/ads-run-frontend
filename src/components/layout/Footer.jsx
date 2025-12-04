import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-slate-50 via-white to-white pt-16 pb-8 border-t border-slate-200/70 text-slate-600 text-sm">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: 4-Column Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Column 1: Brand Info */}
          <div className="space-y-5">
            <Link
              to="/"
              className="text-2xl font-extrabold uppercase bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-sky-500 to-teal-400 tracking-tight inline-block"
            >
              ZenithumMedia
            </Link>
            <p className="leading-relaxed text-slate-500 text-sm">
              Professional Digital Marketing Services to elevate your online
              presence. We bridge the gap between brands and people with ROI-
              driven campaigns.
            </p>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-3 mt-2">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm hover:shadow-md hover:-translate-y-[2px] transition-all duration-200 hover:border-indigo-300 hover:text-indigo-500 text-slate-500"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-slate-900 font-semibold mb-5 text-base">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:text-indigo-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-indigo-500 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-indigo-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-indigo-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal / Extra */}
          <div>
            <h4 className="text-slate-900 font-semibold mb-5 text-base">
              Legal
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-indigo-500 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-indigo-500 transition-colors"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/refund"
                  className="hover:text-indigo-500 transition-colors"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/publishers"
                  className="hover:text-indigo-500 transition-colors"
                >
                  Publishers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-slate-900 font-semibold mb-5 text-base">
              Contact Info
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 shrink-0">
                  <MapPin size={18} />
                </div>
                <span className="text-slate-600">
                  N50B, Hargovind Enclave, Chhatarpur, Delhi 110068
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 shrink-0">
                  <Phone size={18} />
                </div>
                <a
                  href="tel:+917206991113"
                  className="hover:text-indigo-500 transition-colors"
                >
                  +91 8789596859
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 shrink-0">
                  <Mail size={18} />
                </div>
                <a
                  href="mailto:kishan.singla@adsonick.com"
                  className="hover:text-indigo-500 transition-colors break-all"
                >
                  shubhampandey@zenithummedia.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-6 border-t border-slate-200/70">
          <p className="text-center text-xs sm:text-sm text-slate-500">
            &copy; {currentYear} ZenithumMedia. All Rights Reserved.{" "}
            <span className="text-slate-400">
              Developed by <span className="font-medium">Sujeet</span>.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
