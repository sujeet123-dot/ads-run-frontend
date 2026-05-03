import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, ChevronDown, CheckCircle2 } from 'lucide-react';
import { getServiceBySlug } from '../data/services';
import CTASection from '../components/sections/CTASection';

const FaqItem = ({ q, a, isOpen, onToggle, accent }) => (
  <div className="border-b border-gray-800 last:border-0">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between gap-4 py-5 text-left group"
    >
      <span className="text-white font-medium text-[15px] group-hover:text-orange-400 transition-colors duration-200">
        {q}
      </span>
      <motion.span
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.25 }}
        className={`flex-shrink-0 ${isOpen ? accent.color : 'text-gray-500'}`}
      >
        <ChevronDown size={18} />
      </motion.span>
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.28, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <p className="pb-5 text-gray-400 text-sm leading-relaxed">{a}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const [openFaq, setOpenFaq] = useState(null);

  const service = getServiceBySlug(slug);
  if (!service) return <Navigate to="/services" replace />;

  const {
    title, tagline, description, image, imageAlt,
    accent, stats, benefits, process, faqs,
    icon: ServiceIcon,
  } = service;

  const toggleFaq = (i) => setOpenFaq((prev) => (prev === i ? null : i));

  return (
    <>
      <Helmet>
        <title>{title} | ZenithumMedia</title>
        <meta name="description" content={tagline} />
      </Helmet>

      {/* ── Hero ── */}
      <section className="relative bg-black pt-32 pb-24 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className={`pointer-events-none absolute -top-24 -right-24 w-[520px] h-[520px] rounded-full ${accent.glow} blur-[110px]`}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: 'radial-gradient(circle,#fff 1px,transparent 1px)', backgroundSize: '28px 28px' }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 mb-10 text-sm text-gray-500"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 hover:text-orange-400 transition-colors duration-200"
            >
              <ArrowLeft size={14} />
              Services
            </Link>
            <span className="text-gray-700">/</span>
            <span className={accent.color}>{title}</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left — text */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full ${accent.bg} border ${accent.border} ${accent.color} text-xs font-bold uppercase tracking-widest mb-5`}
              >
                <ServiceIcon size={12} />
                {title}
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5"
              >
                {tagline}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.2 }}
                className="text-gray-400 text-lg leading-relaxed mb-8"
              >
                {description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/contact"
                  className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full ${accent.btnBg} text-white font-semibold text-[15px] transition-all duration-200 shadow-lg ${accent.shadow} hover:-translate-y-0.5 group`}
                >
                  Get Started
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-gray-700 text-gray-300 font-semibold text-[15px] hover:border-gray-500 hover:text-white transition-all duration-200"
                >
                  All Services
                </Link>
              </motion.div>
            </div>

            {/* Right — image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className={`absolute -inset-4 rounded-3xl ${accent.bg} opacity-25 blur-2xl`} />
              <div className={`relative rounded-2xl overflow-hidden border-2 ${accent.border} shadow-2xl shadow-black/70`}>
                <img
                  src={image}
                  alt={imageAlt}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className={`text-xs font-bold uppercase tracking-widest ${accent.color} mb-1`}>ZenithumMedia</p>
                  <p className="text-white font-semibold text-base">{title}</p>
                </div>
              </div>

              {/* floating stat */}
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.85 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.65, type: 'spring', stiffness: 260, damping: 18 }}
                className="absolute -bottom-5 -left-5 bg-gray-900 border border-gray-700 rounded-2xl shadow-xl px-5 py-3 cursor-default"
              >
                <p className={`text-2xl font-black ${accent.color}`}>{stats[0].value}</p>
                <p className="text-xs text-gray-400 mt-0.5">{stats[0].label}</p>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-14 bg-gray-950 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8">
            {stats.map(({ value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <p className={`text-3xl sm:text-4xl font-extrabold ${accent.color} mb-1`}>{value}</p>
                <p className="text-sm text-gray-400">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <span className={`inline-block px-4 py-1.5 rounded-full ${accent.bg} border ${accent.border} ${accent.color} text-xs font-bold uppercase tracking-widest mb-4`}>
              What's Included
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Everything in one managed service
            </h2>
            <p className="max-w-xl mx-auto text-gray-400">
              Every deliverable is handled by our team — strategy, execution, and reporting all under one roof.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map(({ icon: BIcon, title: btitle, desc }, i) => (
              <motion.div
                key={btitle}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -5 }}
                className={`group bg-gray-900 rounded-2xl border border-gray-800 hover:${accent.border} p-7 transition-all duration-300 hover:shadow-xl hover:shadow-black/40`}
              >
                <div className={`w-12 h-12 rounded-xl ${accent.bg} flex items-center justify-center mb-4`}>
                  <BIcon size={22} className={accent.color} />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{btitle}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Image Banner ── */}
      <div className="relative h-64 sm:h-80 overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-white text-2xl sm:text-3xl font-bold max-w-lg leading-snug"
            >
              "{tagline}"
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className={`mt-3 text-sm font-semibold uppercase tracking-widest ${accent.color}`}
            >
              ZenithumMedia · {title}
            </motion.p>
          </div>
        </div>
      </div>

      {/* ── Process ── */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <span className={`inline-block px-4 py-1.5 rounded-full ${accent.bg} border ${accent.border} ${accent.color} text-xs font-bold uppercase tracking-widest mb-4`}>
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Our process from brief to results
            </h2>
            <p className="max-w-xl mx-auto text-gray-400">
              A clear four-step sequence — so you always know exactly where we are and what's coming next.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map(({ num, title: ptitle, desc }, i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative bg-gray-900 rounded-2xl border border-gray-800 p-6"
              >
                <div className={`w-11 h-11 rounded-xl ${accent.bg} flex items-center justify-center mb-4`}>
                  <span className={`text-lg font-extrabold ${accent.color}`}>{num}</span>
                </div>
                <h3 className="text-white font-semibold text-base mb-2">{ptitle}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>

                {i < process.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10 w-6 h-6 items-center justify-center">
                    <ArrowRight size={14} className="text-gray-700" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className={`inline-block px-4 py-1.5 rounded-full ${accent.bg} border ${accent.border} ${accent.color} text-xs font-bold uppercase tracking-widest mb-4`}>
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Common questions
            </h2>
            <p className="text-gray-400">
              Everything you need to know before getting started.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gray-900 rounded-2xl border border-gray-800 px-7 divide-y divide-gray-800"
          >
            {faqs.map((faq, i) => (
              <FaqItem
                key={i}
                q={faq.q}
                a={faq.a}
                isOpen={openFaq === i}
                onToggle={() => toggleFaq(i)}
                accent={accent}
              />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className={`inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full ${accent.btnBg} text-white font-semibold text-[15px] transition-all duration-200 shadow-lg ${accent.shadow} hover:-translate-y-0.5 group`}
            >
              Start This Service
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-gray-700 text-gray-300 font-semibold text-[15px] hover:border-gray-500 hover:text-white transition-all duration-200"
            >
              Browse All Services
            </Link>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default ServiceDetailPage;
