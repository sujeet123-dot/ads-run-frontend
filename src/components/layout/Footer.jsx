import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";

const QUICK_LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const SERVICES_LINKS = [
  { label: "Branding Campaigns", to: "/services" },
  { label: "Social Media Marketing", to: "/services" },
  { label: "Google & Search Ads", to: "/services" },
  { label: "Lead Generation", to: "/services" },
  { label: "Programmatic Advertising", to: "/services" },
  { label: "Analytics & Reporting", to: "/services" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms & Conditions", to: "/terms" },
];

const SOCIALS = [
  { icon: Facebook, url: "https://www.facebook.com/zenithummedia", label: "Facebook" },
  { icon: Twitter, url: "https://twitter.com/zenithummedia", label: "Twitter" },
  { icon: Linkedin, url: "https://www.linkedin.com/company/zenithummedia/", label: "LinkedIn" },
  { icon: Instagram, url: "https://www.instagram.com/zenithummedia", label: "Instagram" },
];

const columnVariant = {
  hidden: { opacity: 0, y: 32 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut", delay: i * 0.1 },
  }),
};

const FooterLink = ({ to, label }) => (
  <li>
    <Link
      to={to}
      className="group inline-flex items-center gap-1.5 text-gray-400 text-sm hover:text-orange-400 transition-colors duration-200"
    >
      <ArrowRight
        size={12}
        className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-orange-400"
      />
      {label}
    </Link>
  </li>
);

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-gray-400">

      {/* ── Main grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-14">

          {/* Col 1 — Brand */}
          <motion.div
            custom={0}
            variants={columnVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-5 sm:col-span-2 lg:col-span-1"
          >
            <Link to="/" className="inline-block">
              <span className="text-2xl font-extrabold tracking-tight text-white">
                Zenithum<span className="text-orange-500">Media</span>
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
              Performance marketing agency delivering ROI-driven campaigns
              across Meta, Google, and programmatic — for brands that want
              real, measurable growth.
            </p>

            {/* Social icons */}
            <div className="flex gap-2.5 pt-1">
              {SOCIALS.map(({ icon: Icon, url, label }) => (
                <motion.a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className="w-9 h-9 rounded-lg border border-slate-700 bg-slate-800 flex items-center justify-center text-gray-400 hover:border-orange-500 hover:text-orange-400 hover:bg-orange-500/10 transition-colors duration-200"
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Col 2 — Quick Links */}
          <motion.div
            custom={1}
            variants={columnVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((l) => (
                <FooterLink key={l.to} {...l} />
              ))}
            </ul>
          </motion.div>

          {/* Col 3 — Services */}
          <motion.div
            custom={2}
            variants={columnVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {SERVICES_LINKS.map((l) => (
                <FooterLink key={l.label} {...l} />
              ))}
            </ul>
          </motion.div>

          {/* Col 4 — Contact */}
          <motion.div
            custom={3}
            variants={columnVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-0.5 w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-orange-400 flex-shrink-0">
                  <MapPin size={14} />
                </div>
                <span className="text-sm text-gray-400 leading-snug">Delhi, India</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-orange-400 flex-shrink-0">
                  <Phone size={14} />
                </div>
                <a
                  href="tel:+918789685968"
                  className="text-sm text-gray-400 hover:text-orange-400 transition-colors duration-200"
                >
                  +91 8789685968
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-orange-400 flex-shrink-0">
                  <Mail size={14} />
                </div>
                <a
                  href="mailto:shikha@zenithummedia.com"
                  className="text-sm text-gray-400 hover:text-orange-400 transition-colors duration-200 break-all"
                >
                  shubham@zenithummedia.com
                </a>
              </li>
            </ul>

            {/* Legal links inside contact col */}
            <div className="mt-6 pt-6 border-t border-slate-800">
              <ul className="space-y-3">
                {LEGAL_LINKS.map((l) => (
                  <FooterLink key={l.label} {...l} />
                ))}
              </ul>
            </div>
          </motion.div>

        </div>

        {/* ── Bottom bar ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <p className="text-xs text-gray-500 text-center sm:text-left">
            &copy; {year} ZenithumMedia. All Rights Reserved.
          </p>
          <p className="text-xs text-gray-500">
            Crafted with ❤️ by{" "}
            <span className="text-gray-400 font-medium">Sujeet</span>
          </p>
        </motion.div>
      </div>

    </footer>
  );
};

export default Footer;
