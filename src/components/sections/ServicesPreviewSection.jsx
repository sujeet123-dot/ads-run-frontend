import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Globe,
  TrendingUp,
  Target,
  Layers,
  Megaphone,
  BarChart2,
  ArrowRight,
} from "lucide-react";

const SERVICES = [
  {
    icon: TrendingUp,
    title: "Branding Campaigns",
    desc: "We strengthens brand presence through strategically targeted impressions, meaningful user interactions, and engaging video campaigns, backed by data-driven insights from platforms like Google Marketing Platform and comscore",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "group-hover:border-orange-500/50",
  },
  {
    icon: Globe,
    title: "Social Media Marketing",
    desc: "Strategic social growth for brands, creators, and public figures — YouTube, Twitter/X trending, and organic-like engagement campaigns.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "group-hover:border-blue-500/50",
  },
  {
    icon: Target,
    title: "Lead Generation",
    desc: "Sales-ready leads via precise audience targeting. Consistent daily, weekly, or monthly lead plans with strong conversion rates.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "group-hover:border-emerald-500/50",
  },
  {
    icon: Layers,
    title: "Programmatic Advertising",
    desc: "Premium placements across the open web. Reach your audience at scale with display, native, and video programmatic buys.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "group-hover:border-violet-500/50",
  },
  {
    icon: Megaphone,
    title: "Meta & Social Ads",
    desc: "Full-funnel paid social across Facebook, Instagram, and LinkedIn — from awareness to retargeting to cart recovery.",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "group-hover:border-pink-500/50",
  },
  {
    icon: BarChart2,
    title: "Analytics & Reporting",
    desc: "Real-time dashboards, attribution modelling, and clear monthly reports so you always know exactly where your budget goes.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "group-hover:border-cyan-500/50",
  },
];

const ServiceCard = ({ icon: Icon, title, desc, color, bg, border, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 36 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.5, ease: "easeOut", delay: (index % 3) * 0.1 }}
    className={`group relative bg-gray-900 rounded-2xl border-2 border-gray-800 ${border} p-7 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 transition-all duration-300 overflow-hidden`}
  >
    {/* Card number */}
    <span className="absolute top-5 right-6 text-4xl font-black text-gray-800 select-none leading-none">
      {String(index + 1).padStart(2, "0")}
    </span>

    {/* Icon */}
    <div className={`w-12 h-12 rounded-xl ${bg} ${color} flex items-center justify-center flex-shrink-0`}>
      <Icon size={22} />
    </div>

    {/* Text */}
    <div className="flex flex-col gap-2 flex-1">
      <h3 className="text-[17px] font-bold text-white leading-snug">{title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
    </div>

    {/* Learn More link */}
    <Link
      to="/services"
      aria-label={`Learn more about ${title}`}
      className={`inline-flex items-center gap-1.5 text-sm font-semibold ${color} mt-1`}
    >
      Learn More
      <ArrowRight
        size={15}
        className="transition-transform duration-200 group-hover:translate-x-1"
      />
    </Link>
  </motion.div>
);

const ServicesPreviewSection = () => (
  <section className="py-24 bg-gray-950">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-widest mb-4">
          What We Do
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
          Full-Spectrum{" "}
          <span className="text-orange-400">Digital Marketing</span>
        </h2>
        <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
          A complete suite of performance marketing services designed to work
          together — from first impression to final conversion.
        </p>
      </motion.div>

      {/* Cards grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {SERVICES.map((s, i) => (
          <ServiceCard key={s.title} {...s} index={i} />
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-12 text-center"
      >
        <Link
          to="/services"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-orange-500 text-orange-400 font-semibold text-[15px] hover:bg-orange-500 hover:text-white transition-all duration-200 hover:-translate-y-0.5 group"
        >
          View All Services
          <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </motion.div>

    </div>
  </section>
);

export default ServicesPreviewSection;
