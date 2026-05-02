import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  Mail, Phone, MapPin,
  Facebook, Twitter, Linkedin, Instagram,
  Clock, MessageSquare, ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/sections/ContactForm';

const CONTACT_CARDS = [
  {
    icon: Mail,
    label: "Email Us",
    value: "shubham@zenithummedia.com",
    sub: "We reply within 24 hours",
    href: "mailto:shubham@zenithummedia.com",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "group-hover:border-blue-500/40",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 8789685968",
    sub: "Mon – Sat, 9 AM – 7 PM IST",
    href: "tel:+918789685968",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "group-hover:border-emerald-500/40",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Delhi, India",
    sub: "By appointment only",
    href: null,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "group-hover:border-orange-500/40",
  },
];

const SOCIALS = [
  { icon: Facebook,  href: "https://www.facebook.com/zenithummedia",            label: "Facebook"  },
  { icon: Twitter,   href: "https://twitter.com/zenithummedia",                  label: "Twitter"   },
  { icon: Linkedin,  href: "https://www.linkedin.com/company/zenithummedia/",    label: "LinkedIn"  },
  { icon: Instagram, href: "https://www.instagram.com/zenithummedia",            label: "Instagram" },
];

const REASONS = [
  "No lock-in contracts — cancel anytime",
  "Dedicated manager on every account",
  "First results visible within 30 days",
  "Weekly reports, no surprises",
];

const ContactPage = () => (
  <>
    <Helmet>
      <title>Contact Us | ZenithumMedia</title>
      <meta name="description" content="Get in touch with ZenithumMedia. Book a free strategy call and start scaling your business today." />
    </Helmet>

    {/* ── Hero ── */}
    <section className="relative bg-black pt-32 pb-20 overflow-hidden">
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-20 -left-20 w-[420px] h-[420px] rounded-full bg-orange-500/15 blur-[90px]"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="pointer-events-none absolute -bottom-20 -right-20 w-[380px] h-[380px] rounded-full bg-violet-500/10 blur-[80px]"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "28px 28px" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-bold uppercase tracking-widest"
        >
          <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
          Let's Talk
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-5"
        >
          Start a{" "}
          <span className="text-orange-400">Conversation</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.22 }}
          className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto"
        >
          Tell us about your business and goals. We'll come back with a tailored
          strategy — no fluff, no pressure, just a clear plan.
        </motion.p>
      </div>
    </section>

    {/* ── Main section ── */}
    <section className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left — info */}
          <div className="flex flex-col gap-8">

            {/* Contact cards */}
            <div className="flex flex-col gap-4">
              {CONTACT_CARDS.map(({ icon: Icon, label, value, sub, href, color, bg, border }, i) => {
                const Wrapper = href ? motion.a : motion.div;
                const wrapperProps = href ? { href, target: "_blank", rel: "noopener noreferrer" } : {};
                return (
                  <Wrapper
                    key={label}
                    {...wrapperProps}
                    initial={{ opacity: 0, x: -32 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
                    whileHover={{ x: 4, transition: { type: "spring", stiffness: 300 } }}
                    className={`group flex items-center gap-4 p-5 bg-gray-900 rounded-2xl border-2 border-gray-800 ${border} hover:shadow-lg hover:shadow-black/40 transition-all duration-300 cursor-pointer`}
                  >
                    <div className={`w-12 h-12 rounded-xl ${bg} ${color} flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110`}>
                      <Icon size={22} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-0.5">{label}</p>
                      <p className="text-[15px] font-semibold text-white truncate">{value}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{sub}</p>
                    </div>
                    {href && (
                      <ArrowRight size={16} className={`${color} opacity-0 group-hover:opacity-100 transition-all duration-200 flex-shrink-0`} />
                    )}
                  </Wrapper>
                );
              })}
            </div>

            {/* Response time badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex items-center gap-3 p-4 bg-orange-500/10 border border-orange-500/20 rounded-2xl"
            >
              <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white flex-shrink-0">
                <Clock size={18} />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Average response time</p>
                <p className="text-xs text-gray-400 mt-0.5">We reply to every enquiry within <span className="font-semibold text-orange-400">4 business hours</span></p>
              </div>
            </motion.div>

            {/* Why choose us */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare size={16} className="text-orange-400" />
                <p className="text-sm font-bold text-gray-300 uppercase tracking-widest">Why work with us</p>
              </div>
              <ul className="space-y-3">
                {REASONS.map((r, i) => (
                  <motion.li
                    key={r}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
                    className="flex items-center gap-2.5 text-sm text-gray-400"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                    {r}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Find us on</p>
              <div className="flex gap-3">
                {SOCIALS.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ y: -3, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    className="w-10 h-10 rounded-xl border border-gray-700 bg-gray-800 flex items-center justify-center text-gray-400 hover:border-orange-500/50 hover:text-orange-400 transition-colors duration-200"
                  >
                    <Icon size={16} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
            className="lg:sticky lg:top-24"
          >
            <ContactForm />
          </motion.div>

        </div>
      </div>
    </section>
  </>
);

export default ContactPage;
