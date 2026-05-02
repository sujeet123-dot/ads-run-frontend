import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  Target, Lightbulb, TrendingUp,
  CheckCircle2, ArrowRight,
} from 'lucide-react';
import CTASection from '../components/sections/CTASection';

const STATS = [
  { value: "1+",    suffix: "",  label: "Years in Business" },
  { value: "50",   suffix: "+", label: "Happy Clients"     },
  { value: "300", suffix: "+", label: "Campaigns Run"     },
  { value: "96",    suffix: "%", label: "Client Retention"  },
];

const VALUES = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To empower businesses of all sizes to compete and win in the digital landscape through transparent, data-driven advertising strategies that deliver real, measurable ROI.",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "group-hover:border-orange-500/50",
  },
  {
    icon: Lightbulb,
    title: "Our Approach",
    text: "We don't believe in one-size-fits-all solutions. Every campaign is custom-built from the ground up, meticulously managed, and continuously optimised for performance.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "group-hover:border-blue-500/50",
  },
  {
    icon: TrendingUp,
    title: "Our Vision",
    text: "To be the growth catalyst that transforms advertising from a confusing expense into a clear, profitable investment — for every client, at every stage of their journey.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "group-hover:border-emerald-500/50",
  },
];

const TIMELINE = [
  {
    year: "2025",
    title: "ZenithumMedia Founded",
    desc: "Started with a simple mission — make digital advertising transparent and ROI-focused for every business, not just the big ones.",
    color: "bg-orange-500",
  },
  {
    year: "2026",
    title: "Scaled to 50+ Clients",
    desc: "Expanded rapidly across India and South-East Asia, managing campaigns on Google, Meta, and programmatic platforms for brands across 8 industries.",
    color: "bg-blue-500",
  },
  {
    year: "2026",
    title: "300+ Campaigns Milestone",
    desc: "Crossed 300 active campaigns, expanded service offerings to include political digital strategy and online reputation management.",
    color: "bg-violet-500",
  },
  {
    year: "2026",
    title: "50+ Clients, 96% Retention",
    desc: "Reached 300+ campaigns run. Maintained a 96% client retention rate — a testament to consistent results and genuine partnership.",
    color: "bg-emerald-500",
  },
];

const CULTURE = [
  "Transparency over promises — you always know where your budget goes",
  "Data informs every decision we make, no gut-feel guesswork",
  "Dedicated account managers, not rotating support teams",
  "Results within 30 days or we rethink the strategy — together",
];

const StatItem = ({ value, suffix, label, index, started }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={started ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="text-center"
  >
    <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1 tabular-nums">
      {value}
      <span className="text-orange-400">{suffix}</span>
    </div>
    <p className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-widest">{label}</p>
  </motion.div>
);

const AboutPage = () => {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-60px" });
  const lineRef = useRef(null);
  const lineInView = useInView(lineRef, { once: true, margin: "-80px" });

  return (
    <>
      <Helmet>
        <title>About Us | ZenithumMedia</title>
        <meta name="description" content="Meet the team behind ZenithumMedia — data-driven marketers on a mission to turn ad spend into predictable, profitable growth." />
      </Helmet>

      {/* ── Section 1: Hero ── */}
      <section className="relative bg-black pt-32 pb-20 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.14, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -top-28 -right-28 w-[500px] h-[500px] rounded-full bg-orange-500/15 blur-[96px]"
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "28px 28px" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-widest"
              >
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                About Us
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6"
              >
                We Are Your{" "}
                <span className="text-orange-400">Growth Partners</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.22 }}
                className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg"
              >
                ZenithumMedia was founded on a simple principle — advertising
                should be an investment, not a gamble. We're a collective of
                data analysts, creative strategists, and digital marketers who
                obsess over your ROI.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-orange-500 text-white font-semibold text-[15px] hover:bg-orange-600 transition-all duration-200 shadow-lg shadow-orange-900/30 hover:-translate-y-0.5 group"
                >
                  Work With Us
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-gray-700 text-gray-300 font-semibold text-[15px] hover:border-gray-500 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
                >
                  Our Services
                </Link>
              </motion.div>
            </div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, x: 48 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
              className="hidden lg:block relative"
            >
              <div className="absolute -top-8 -right-8 w-64 h-64 rounded-full bg-orange-500/5 -z-10" />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-full bg-gray-900 -z-10" />

              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="rounded-2xl overflow-hidden shadow-2xl shadow-black/70 border border-gray-800"
                >
                  <img src="/zm5.jpg" alt="ZenithumMedia team" loading="lazy" className="w-full aspect-[4/3] object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.7, type: "spring", stiffness: 260, damping: 18 }}
                  className="absolute -top-5 -right-5 bg-gray-900 rounded-2xl shadow-lg border border-gray-700 px-4 py-3 flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded-xl bg-orange-500 flex items-center justify-center text-white text-base">🏆</div>
                  <div>
                    <p className="text-xs font-bold text-white">96% Retention</p>
                    <p className="text-[10px] text-gray-500">Client satisfaction</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.9, type: "spring", stiffness: 260, damping: 18 }}
                  className="absolute -bottom-5 -left-5 bg-gray-900 border border-gray-700 rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3"
                >
                  <div className="text-xl">📈</div>
                  <div>
                    <p className="text-xs font-bold text-white">50+ Clients</p>
                    <p className="text-[10px] text-gray-500">Across 10+ industries</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </div>

          {/* Stats bar */}
          <div ref={statsRef} className="mt-16 pt-10 border-t border-gray-800">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {STATS.map((s, i) => (
                <StatItem key={s.label} {...s} index={i} started={statsInView} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Values ── */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-widest mb-4">
              What Drives Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              The principles behind{" "}
              <span className="text-orange-400">every decision</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            {VALUES.map(({ icon: Icon, title, text, color, bg, border }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.12 }}
                whileHover={{ y: -8, scale: 1.02, transition: { type: "spring", stiffness: 280, damping: 22 } }}
                className={`group bg-gray-900 rounded-2xl border-2 border-gray-800 ${border} p-8 flex flex-col gap-5 hover:shadow-2xl hover:shadow-black/50 transition-shadow duration-300 cursor-default overflow-hidden relative`}
              >
                <div className={`absolute inset-0 ${bg} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`} />
                <div className={`absolute left-0 top-4 bottom-4 w-1 rounded-full scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 ${color} opacity-60`} />

                <div className={`relative w-14 h-14 rounded-2xl ${bg} ${color} flex items-center justify-center transition-transform duration-200 group-hover:scale-110`}>
                  <Icon size={26} />
                </div>
                <div className="relative">
                  <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Timeline ── */}
      <section className="py-24 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-widest mb-4">
              Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              How we got <span className="text-orange-400">here</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">
              From a small team with a big idea to one of India's most trusted
              performance marketing agencies.
            </p>
          </motion.div>

          <div ref={lineRef} className="relative max-w-3xl mx-auto">

            {/* Vertical line */}
            <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gray-800 -translate-x-1/2 overflow-hidden">
              <motion.div
                className="w-full bg-gradient-to-b from-orange-400 to-orange-700 origin-top"
                style={{ height: "100%" }}
                initial={{ scaleY: 0 }}
                animate={lineInView ? { scaleY: 1 } : {}}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />
            </div>

            <div className="space-y-12">
              {TIMELINE.map(({ year, title, desc, color }, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={year}
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.1 }}
                    className={`relative flex items-start gap-6 sm:gap-0 ${isLeft ? "sm:flex-row" : "sm:flex-row-reverse"}`}
                  >
                    <div className={`sm:w-[calc(50%-2rem)] pl-14 sm:pl-0 ${isLeft ? "sm:pr-10 sm:text-right" : "sm:pl-10 sm:text-left"}`}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 hover:shadow-lg hover:shadow-black/40 transition-all duration-300"
                      >
                        <span className={`inline-block text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full mb-3 text-white ${color}`}>
                          {year}
                        </span>
                        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.3, type: "spring", stiffness: 300 }}
                      className={`absolute left-6 sm:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full ${color} border-4 border-black shadow-md z-10`}
                    />

                    <div className="hidden sm:block sm:w-[calc(50%-2rem)]" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Culture ── */}
      <section className="py-24 bg-gray-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -48 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute -top-6 -left-6 w-56 h-56 rounded-full bg-orange-500/5 -z-10" />

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="rounded-2xl overflow-hidden shadow-2xl shadow-black/70 border border-gray-800 group relative"
              >
                <img
                  src="/zm6.jpg"
                  alt="ZenithumMedia culture"
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover object-bottom group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <p className="text-white font-bold text-base">Data · Creativity · Results</p>
                  <p className="text-white/50 text-xs mt-0.5">The ZenithumMedia way</p>
                </div>
              </motion.div>
            </motion.div>

            <div className="flex flex-col gap-6">
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-widest"
              >
                Our Culture
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="text-3xl sm:text-4xl font-extrabold text-white leading-tight"
              >
                Driven by Data.{" "}
                <span className="text-orange-400">Fuelled by Creativity.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-400 text-base leading-relaxed"
              >
                We believe in genuine partnership. We work closely with every
                client to understand their goals, challenges, and customers —
                then build a strategy that reflects that understanding at every
                level of the campaign.
              </motion.p>

              <ul className="space-y-3.5">
                {CULTURE.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, ease: "easeOut", delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-3 group"
                  >
                    <CheckCircle2
                      size={19}
                      className="text-orange-400 flex-shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-110"
                    />
                    <span className="text-gray-300 text-[15px] leading-snug group-hover:text-white transition-colors duration-200">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex flex-wrap gap-4 pt-2"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-orange-500 text-white text-[15px] font-semibold hover:bg-orange-600 transition-all duration-200 shadow-md shadow-orange-900/30 hover:-translate-y-0.5 group"
                >
                  Join Our Journey
                  <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-gray-700 text-gray-300 text-[15px] font-semibold hover:border-gray-500 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
                >
                  See Our Work
                </Link>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default AboutPage;
