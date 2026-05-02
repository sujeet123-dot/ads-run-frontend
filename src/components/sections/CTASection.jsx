import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, PhoneCall } from "lucide-react";

const HEADLINE = ["Ready", "to", "Scale", "Your", "Ad", "Revenue?"];

const TRUST = [
  "long-term contracts",
  "Branding Campaigns",
  "Dedicated account manager",
  "Results in 30 days",
];

const wordVariant = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.1 + i * 0.08 },
  }),
};

const CTASection = () => (
  <section className="relative bg-gray-950 py-28 overflow-hidden">

    {/* Animated background orbs */}
    <motion.div
      animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      className="pointer-events-none absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full bg-orange-500/15 blur-[96px]"
    />
    <motion.div
      animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.35, 0.15] }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      className="pointer-events-none absolute -bottom-32 -right-20 w-[520px] h-[520px] rounded-full bg-violet-500/15 blur-[112px]"
    />
    <motion.div
      animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.25, 0.1] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full bg-orange-400/10 blur-[80px]"
    />

    {/* Dot grid */}
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    />

    {/* Content */}
    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

      {/* Eyebrow badge */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-orange-500/40 bg-orange-500/10"
      >
        <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
        <span className="text-orange-400 text-sm font-semibold tracking-wide">
          Start Today
        </span>
      </motion.div>

      {/* Headline */}
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
        {HEADLINE.map((word, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={wordVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`inline-block mr-[0.25em] ${
              word === "Scale" || word === "Revenue?" ? "text-orange-400" : ""
            }`}
          >
            {word}
          </motion.span>
        ))}
      </h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.65 }}
        className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
      >
        Let's build a winning strategy for your business. Stop guessing and
        start scaling with our data-driven approach — zero fluff, pure results.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.78 }}
        className="flex flex-wrap items-center justify-center gap-4 mb-12"
      >
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-orange-500 text-white text-[15px] font-bold hover:bg-orange-400 transition-all duration-200 shadow-lg shadow-orange-900/40 hover:-translate-y-0.5 group"
        >
          <PhoneCall size={17} />
          Book Free Strategy Call
          <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
        </Link>

        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-gray-700 text-white text-[15px] font-semibold hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-200 hover:-translate-y-0.5"
        >
          View Our Work
        </Link>
      </motion.div>

      {/* Trust strip */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.95 }}
        className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
      >
        {TRUST.map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-gray-500 text-sm">
            <CheckCircle2 size={15} className="text-orange-400 flex-shrink-0" />
            {item}
          </div>
        ))}
      </motion.div>

    </div>
  </section>
);

export default CTASection;
