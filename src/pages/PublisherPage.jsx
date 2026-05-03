import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  DollarSign, TrendingUp, BarChart2, Globe, Zap,
  Shield, Layers, ArrowRight, CheckCircle2, Users,
  MonitorPlay, Smartphone, Layout, Rss, Target,
} from 'lucide-react';
import CTASection from '../components/sections/CTASection';

const BENEFITS = [
  {
    icon: DollarSign,
    title: "Higher Revenue Per Impression",
    desc: "Access premium demand partners and header bidding to maximise your eCPM and fill every impression at the best possible price.",
    features: ["Header bidding integration", "eCPM optimisation", "Real-time price floors"],
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "group-hover:border-emerald-500/50",
  },
  {
    icon: BarChart2,
    title: "Transparent Analytics",
    desc: "Live reporting dashboards that show every impression, click, and revenue event — no black boxes, no surprises.",
    features: ["Real-time dashboards", "Revenue breakdowns", "Audience insights"],
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "group-hover:border-blue-500/50",
  },
  {
    icon: Shield,
    title: "Brand-Safe Inventory",
    desc: "Multi-layer brand safety tools keep objectionable ads off your pages, protecting your audience relationship and your reputation.",
    features: ["Category blocking", "Ad quality filters", "IAS & MOAT integration"],
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "group-hover:border-violet-500/50",
  },
  {
    icon: Zap,
    title: "Fast, Lightweight Tags",
    desc: "Our asynchronous ad tags are engineered for Core Web Vitals — your page speed stays intact while revenue climbs.",
    features: ["Async loading", "Lazy-load support", "CWV-safe implementation"],
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "group-hover:border-amber-500/50",
  },
  {
    icon: Globe,
    title: "Global Demand Network",
    desc: "Tap into thousands of direct advertisers, DSPs, and trading desks hungry for quality inventory in every geo.",
    features: ["Tier-1 DSP connections", "Direct advertiser deals", "Multi-geo demand"],
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "group-hover:border-pink-500/50",
  },
  {
    icon: Layers,
    title: "Dedicated Publisher Manager",
    desc: "A real human who knows your site, monitors your yield, and proactively surfaces optimisations — not a chatbot.",
    features: ["Personalised strategy", "Monthly review calls", "Proactive optimisation"],
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "group-hover:border-cyan-500/50",
  },
];

const AD_FORMATS = [
  { icon: MonitorPlay, label: "Display Banners",   desc: "300×250, 728×90, 320×50 & custom sizes" },
  { icon: Smartphone,  label: "Mobile & In-App",   desc: "Interstitials, banners, rewarded video" },
  { icon: Layout,      label: "Native Ads",         desc: "Content-matched placements that blend seamlessly" },
  { icon: Rss,         label: "Video Pre-Roll",     desc: "VAST/VPAID in-stream and out-stream units" },
  { icon: Target,      label: "Programmatic Direct", desc: "Private marketplace and guaranteed deals" },
  { icon: TrendingUp,  label: "High-Impact Units",  desc: "Skins, roadblocks, and rich-media executions" },
];

const STEPS = [
  {
    num: "01",
    title: "Apply & Qualify",
    desc: "Submit your site details. Our team reviews traffic quality, content category, and audience geography — approval usually within 48 hours.",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
  {
    num: "02",
    title: "Onboard & Integrate",
    desc: "We generate lightweight ad tags and walk your dev team through placement and header-bidding setup — typically live within a week.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    num: "03",
    title: "Optimise & Scale",
    desc: "Your publisher manager continuously tests floor prices, demand partners, and ad layouts to push your revenue higher month over month.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    num: "04",
    title: "Collect Your Earnings",
    desc: "Net-30 payments via bank transfer, PayPal, or wire — with a clear invoice and revenue breakdown every cycle.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
];

const STATS = [
  { value: "95%",   label: "Average Fill Rate" },
  { value: "30+",  label: "Active Publisher Partners" },
  { value: "48 hr", label: "Avg. Approval Time" },
];

const REQUIREMENTS = [
  "Minimum 100,000 monthly page views",
  "Original, regularly updated content",
  "Compliant with GDPR / CCPA and platform policies",
  "No incentivised traffic or click fraud",
  "Site accessible to ad crawlers",
  "Primary content in supported languages",
];

const PublisherPage = () => {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true });

  return (
    <>
      <Helmet>
        <title>Publisher Solutions | ZenithumMedia</title>
        <meta
          name="description"
          content="Monetise your website or app with ZenithumMedia's publisher network. Premium demand, higher eCPMs, transparent reporting, and a dedicated account manager."
        />
      </Helmet>

      {/* ── Hero ── */}
      <section className="relative bg-black pt-32 pb-24 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full bg-orange-500/20 blur-[90px]"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="pointer-events-none absolute bottom-0 -left-24 w-[360px] h-[360px] rounded-full bg-emerald-500/15 blur-[80px]"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <DollarSign size={12} />
            Publisher Solutions
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            Turn Your Traffic Into{" "}
            <span className="text-orange-400">Reliable Revenue</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-gray-400 mb-10"
          >
            Join 30+ publisher partners who trust ZenithumMedia's premium demand network,
            transparent analytics, and hands-on yield management to grow their ad revenue.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-orange-500 text-white font-semibold text-[15px] hover:bg-orange-600 transition-all duration-200 shadow-lg shadow-orange-900/30"
            >
              Apply as Publisher <ArrowRight size={16} />
            </Link>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-gray-600 text-gray-300 font-semibold text-[15px] hover:border-orange-400 hover:text-orange-400 transition-all duration-200"
            >
              How It Works
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section ref={statsRef} className="py-16 bg-gray-950 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {STATS.map(({ value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl sm:text-4xl font-extrabold text-orange-400 mb-1">{value}</p>
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
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-widest mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Everything You Need to Maximise Yield
            </h2>
            <p className="max-w-2xl mx-auto text-gray-400">
              We combine technology, premium demand, and human expertise to help publishers
              earn more from every impression — without compromising user experience.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map(({ icon: Icon, title, desc, features, color, bg, border }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -6 }}
                className={`group bg-gray-900 rounded-2xl border border-gray-800 ${border} p-6 transition-all duration-300 hover:shadow-xl hover:shadow-black/40`}
              >
                <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center mb-4`}>
                  <Icon size={22} className={color} />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{desc}</p>
                <ul className="space-y-1.5">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-gray-500">
                      <CheckCircle2 size={13} className={color} />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ad Formats ── */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-widest mb-4">
              Ad Formats
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Every Format, Every Screen
            </h2>
            <p className="max-w-xl mx-auto text-gray-400">
              From classic display to high-impact video, we support the ad formats that
              perform best on your properties.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {AD_FORMATS.map(({ icon: Icon, label, desc }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-4 bg-gray-900 rounded-xl border border-gray-800 hover:border-gray-700 p-5 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-orange-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1">{label}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-widest mb-4">
              Getting Started
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              From Sign-Up to First Payout in 4 Steps
            </h2>
            <p className="max-w-xl mx-auto text-gray-400">
              Our onboarding is fast and handled by real people — no automated queues, no
              self-serve guesswork.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map(({ num, title, desc, color, bg }, i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative bg-gray-900 rounded-2xl border border-gray-800 p-6"
              >
                <div className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center mb-4`}>
                  <span className={`text-lg font-extrabold ${color}`}>{num}</span>
                </div>
                <h3 className="text-white font-semibold text-base mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                    <ArrowRight size={16} className="text-gray-700" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Requirements ── */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900 rounded-2xl border border-gray-800 p-8 sm:p-12"
          >
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                <Users size={22} className="text-orange-400" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  Publisher Eligibility
                </h2>
                <p className="text-gray-400">
                  We partner with quality publishers across news, entertainment, lifestyle, finance,
                  and technology verticals. Here's what we look for:
                </p>
              </div>
            </div>

            <ul className="grid sm:grid-cols-2 gap-4">
              {REQUIREMENTS.map((req, i) => (
                <motion.li
                  key={req}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex items-start gap-3 text-sm text-gray-300"
                >
                  <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                  {req}
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-orange-500 text-white font-semibold text-[15px] hover:bg-orange-600 transition-all duration-200 shadow-lg shadow-orange-900/30"
              >
                Apply Now <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-gray-600 text-gray-300 font-semibold text-[15px] hover:border-orange-400 hover:text-orange-400 transition-all duration-200"
              >
                Talk to a Publisher Manager
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default PublisherPage;
