import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  BarChart2, Megaphone, HeartHandshake, Mail,
  PieChart, Sparkles, MessageCircle,
  Search, Cpu, Rocket, TrendingUp,
  ArrowRight, CheckCircle2, ShieldCheck, Zap, Trophy,
} from 'lucide-react';
import CTASection from '../components/sections/CTASection';

const SERVICES = [
  {
    icon: Sparkles,
    slug: "branding-campaigns",
    title: "Branding Campaigns",
    desc: "Multi-channel visibility campaigns that boost brand recall and trust.",
    features: ["CPM, CPC & CPV models", "Brand recall enhancement", "Cross-channel distribution"],
    color: "text-amber-400", bg: "bg-amber-500/10", border: "group-hover:border-amber-500/50",
  },
  {
    icon: BarChart2,
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    desc: "Strategic social media growth for brands, creators, and public figures.",
    features: ["YouTube & Twitter/X campaigns", "Organic-like growth plans", "Political content services"],
    color: "text-blue-400", bg: "bg-blue-500/10", border: "group-hover:border-blue-500/50",
  },
  {
    icon: Megaphone,
    slug: "lead-generation",
    title: "Lead Generation",
    desc: "High-quality, sales-ready leads via precise targeting and proven funnels.",
    features: ["Daily / weekly / monthly lead plans", "Strong meeting conversion rates", "Multi-channel targeting"],
    color: "text-orange-400", bg: "bg-orange-500/10", border: "group-hover:border-orange-500/50",
  },
  {
    icon: HeartHandshake,
    title: "Advertiser & Publisher Relations",
    desc: "Connecting advertisers with premium publishers for maximum inventory value.",
    features: ["Premium publisher connections", "Inventory sales support", "Business development"],
    color: "text-emerald-400", bg: "bg-emerald-500/10", border: "group-hover:border-emerald-500/50",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    desc: "Personalized cold outreach and automated campaigns that convert.",
    features: ["Cold outreach sequences", "Automated drip campaigns", "Conversion rate optimization"],
    color: "text-violet-400", bg: "bg-violet-500/10", border: "group-hover:border-violet-500/50",
  },
  {
    icon: PieChart,
    title: "Media Buying & Planning",
    desc: "Google & Meta ads management with expert budget planning and ROI scaling.",
    features: ["Google & Meta management", "Expert bid optimization", "Performance scaling"],
    color: "text-pink-400", bg: "bg-pink-500/10", border: "group-hover:border-pink-500/50",
  },
  {
    icon: MessageCircle,
    title: "Online Reputation Management",
    desc: "Reputation building and protection for brands, politicians, and influencers.",
    features: ["Reputation building & protection", "Political digital strategies", "Crisis management"],
    color: "text-cyan-400", bg: "bg-cyan-500/10", border: "group-hover:border-cyan-500/50",
  },
];

const PROCESS = [
  { icon: Search,     num: "01", title: "Discovery",  desc: "We deep-dive into your market, audience, and competitive landscape to find the real opportunity." },
  { icon: Cpu,        num: "02", title: "Strategy",   desc: "We build a custom, channel-specific roadmap with clear KPIs and budget allocation." },
  { icon: Rocket,     num: "03", title: "Launch",     desc: "We deploy across all relevant channels with precision targeting and compelling creative." },
  { icon: TrendingUp, num: "04", title: "Optimise",   desc: "We track every metric and iterate continuously to squeeze maximum ROI from your spend." },
];

const APPROACH = [
  {
    num: "01",
    title: "Data-First Strategy",
    subtitle: "No guesswork, only insights",
    desc: "Every campaign begins with deep market research, audience segmentation, and competitor analysis. We build your strategy on solid data — so every rupee has a clear purpose before it's ever spent.",
    chips: ["Audience Analysis", "Competitor Research", "KPI Mapping"],
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    chipBg: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    imgSrc: "/zm2.jpg",
    imgPosition: "object-top",
    overlay: "from-blue-900/75 via-blue-900/30",
    badgeValue: "82%",
    badgeLabel: "Audience Matched",
    badgeBg: "bg-blue-500",
    accentBorder: "border-blue-500/30",
  },
  {
    num: "02",
    title: "Creative That Converts",
    subtitle: "Ad creative engineered for action",
    desc: "The best targeting in the world can't save weak creative. We craft ad copy, hooks, and visuals that stop the scroll and drive real action — because great creative is the ultimate multiplier.",
    chips: ["Ad Copywriting", "Visual Design", "A/B Testing"],
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    chipBg: "bg-orange-500/10 text-orange-400 border-orange-500/30",
    imgSrc: "/zm3.jpg",
    imgPosition: "object-center",
    overlay: "from-orange-900/75 via-orange-900/30",
    badgeValue: "A+",
    badgeLabel: "Creative Score",
    badgeBg: "bg-orange-500",
    accentBorder: "border-orange-500/30",
  },
  {
    num: "03",
    title: "Relentless Optimisation",
    subtitle: "We improve every single day",
    desc: "We don't set it and forget it. Our team actively monitors every campaign daily, making real-time bid adjustments, creative swaps, and audience refinements to keep performance climbing week after week.",
    chips: ["Daily Monitoring", "Real-time Adjustments", "Continuous Testing"],
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    chipBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    imgSrc: "/zm4.jpg",
    imgPosition: "object-bottom",
    overlay: "from-emerald-900/75 via-emerald-900/30",
    badgeValue: "+105%",
    badgeLabel: "ROAS Uplift",
    badgeBg: "bg-emerald-500",
    accentBorder: "border-emerald-500/30",
  },
];

const WHY = [
  {
    icon: ShieldCheck,
    stat: "100%",
    label: "Full Transparency",
    desc: "Real-time dashboards, zero hidden fees, and plain-English monthly reports — you always know where every rupee goes.",
    color: "text-emerald-400", bg: "bg-emerald-500/10",
  },
  {
    icon: Zap,
    stat: "30",
    statSuffix: " days",
    label: "Speed to Results",
    desc: "Most clients see measurable ROAS lift within the first 30 days. We move fast without cutting corners.",
    color: "text-orange-400", bg: "bg-orange-500/10",
  },
  {
    icon: Trophy,
    stat: "300+",
    label: "Proven at Scale",
    desc: "Over 300 campaigns across every major ad platform. We've seen it all — and we know what works.",
    color: "text-violet-400", bg: "bg-violet-500/10",
  },
];

const ServiceCard = ({ icon: Icon, slug, title, desc, features, color, bg, border, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 36 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, ease: "easeOut", delay: (index % 3) * 0.1 }}
    whileHover={{ y: -8, scale: 1.02, transition: { type: "spring", stiffness: 280, damping: 22 } }}
    className={`group relative bg-gray-900 rounded-2xl border-2 border-gray-800 ${border} p-7 flex flex-col gap-4 hover:shadow-2xl hover:shadow-black/60 overflow-hidden cursor-default`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    <div className={`absolute left-0 top-4 bottom-4 w-1 rounded-full origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ${color} opacity-60`} />
    <span className="absolute top-4 right-5 text-5xl font-black text-gray-800 select-none leading-none">
      {String(index + 1).padStart(2, "0")}
    </span>

    <div className={`relative w-12 h-12 rounded-xl ${bg} ${color} flex items-center justify-center flex-shrink-0`}>
      <Icon size={22} />
    </div>

    <div className="relative flex flex-col gap-2 flex-1">
      <h3 className="text-[17px] font-bold text-white">{title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
    </div>

    <ul className="relative space-y-2">
      {features.map((f) => (
        <li key={f} className="flex items-center gap-2 text-[13px] text-gray-400 group-hover:text-gray-300 transition-colors duration-200">
          <CheckCircle2 size={13} className={`${color} flex-shrink-0`} />
          {f}
        </li>
      ))}
    </ul>

    <Link
      to={slug ? `/services/${slug}` : '/contact'}
      className={`relative inline-flex items-center gap-1.5 text-sm font-semibold ${color} mt-1`}
    >
      {slug ? 'Learn More' : 'Get Started'}
      <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
    </Link>
  </motion.div>
);

const ServicesPage = () => {
  const lineRef = useRef(null);
  const lineInView = useInView(lineRef, { once: true, margin: "-100px" });

  return (
    <>
      <Helmet>
        <title>Our Services | ZenithumMedia</title>
        <meta name="description" content="Full-spectrum digital marketing services — social media, lead generation, media buying, branding and more. Built for ROI." />
      </Helmet>

      {/* ── Section 1: Hero ── */}
      <section className="relative bg-black pt-32 pb-24 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -top-20 -right-20 w-[440px] h-[440px] rounded-full bg-orange-500/15 blur-[80px]"
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "28px 28px" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-widest"
              >
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                Our Services
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6"
              >
                Everything You Need to{" "}
                <span className="text-orange-400">Grow Online</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.22 }}
                className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg"
              >
                We don't just run ads — we build complete growth ecosystems. From
                social media acquisition to reputation management, every service
                is built around one goal: measurable ROI for your business.
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
                  Start a Campaign
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-gray-700 text-gray-300 font-semibold text-[15px] hover:border-gray-500 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
                >
                  See Results
                </Link>
              </motion.div>
            </div>

            {/* Right — floating service icon grid */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="hidden lg:grid grid-cols-2 gap-4"
            >
              {SERVICES.slice(0, 4).map(({ icon: Icon, title, color, bg }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5, scale: 1.03, transition: { type: "spring", stiffness: 300 } }}
                  className="bg-gray-900 rounded-2xl border border-gray-800 hover:border-gray-700 shadow-sm hover:shadow-lg hover:shadow-black/40 p-5 flex flex-col gap-3 cursor-default"
                >
                  <div className={`w-10 h-10 rounded-xl ${bg} ${color} flex items-center justify-center`}>
                    <Icon size={20} />
                  </div>
                  <p className="text-sm font-semibold text-gray-200 leading-snug">{title}</p>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Section 2: Services Grid ── */}
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
              What We Offer
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Services built for <span className="text-orange-400">real results</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              Every service is performance-driven and fully managed — so you can
              focus on your business while we handle the growth.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <ServiceCard key={s.title} {...s} index={i} />
            ))}
          </div>

        </div>
      </section>

      {/* ── Section 3: Process ── */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-widest mb-4">
              Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              How we <span className="text-orange-400">scale your growth</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">
              A proven four-step methodology that turns ad spend into predictable, scalable revenue.
            </p>
          </motion.div>

          <div ref={lineRef} className="relative">

            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gray-800">
              <motion.div
                className="h-full bg-gradient-to-r from-orange-400 to-orange-600 origin-left"
                initial={{ scaleX: 0 }}
                animate={lineInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
              {PROCESS.map(({ icon: Icon, num, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.15 }}
                  className="group relative flex flex-col items-center text-center"
                >
                  {i < PROCESS.length - 1 && (
                    <div className="md:hidden absolute top-16 left-1/2 -translate-x-1/2 w-px h-10 bg-gray-800" />
                  )}

                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    className="relative z-10 w-16 h-16 rounded-2xl bg-gray-900 border-2 border-gray-800 group-hover:border-orange-400 group-hover:bg-orange-500 flex items-center justify-center text-gray-400 group-hover:text-white shadow-md transition-colors duration-300 mb-5"
                  >
                    <Icon size={22} />
                    <span className="absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full bg-orange-500 group-hover:bg-gray-900 text-white text-[10px] font-black flex items-center justify-center transition-colors duration-300">
                      {i + 1}
                    </span>
                  </motion.div>

                  <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed max-w-[180px]">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3.5: Our Approach ── */}
      <section className="py-24 bg-gray-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-20"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-widest mb-4">
              Our Approach
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              How we think, so your{" "}
              <span className="text-orange-400">campaigns win</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              Three core principles drive every decision we make — from the first
              brief to the final report.
            </p>
          </motion.div>

          <div className="relative">

            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-px bg-gray-800 overflow-hidden">
              <motion.div
                className="w-full bg-gradient-to-b from-orange-400 via-orange-500 to-orange-700 origin-top"
                style={{ height: "100%" }}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
              />
            </div>

            <div className="space-y-24">
              {APPROACH.map(({ num, title, subtitle, desc, chips, color, bg, chipBg, imgSrc, imgPosition, overlay, badgeValue, badgeLabel, badgeBg, accentBorder }, i) => {
                const isEven = i % 2 === 0;
                return (
                  <div key={num} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -56 : 56 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.65, ease: "easeOut" }}
                      className={`relative ${isEven ? "" : "lg:order-2"}`}
                    >
                      <div className={`absolute -inset-3 rounded-3xl ${bg} opacity-20 -z-10`} />

                      <div className={`relative rounded-2xl overflow-hidden border-2 ${accentBorder} shadow-2xl shadow-black/60`}>
                        <motion.div
                          whileHover="hovered"
                          initial="rest"
                          className="relative aspect-[4/3] overflow-hidden"
                        >
                          <motion.img
                            src={imgSrc}
                            alt={title}
                            loading="lazy"
                            variants={{
                              rest:    { scale: 1,    filter: "brightness(0.7)" },
                              hovered: { scale: 1.07, filter: "brightness(0.9)" },
                            }}
                            transition={{ duration: 0.55, ease: "easeOut" }}
                            className={`w-full h-full object-cover ${imgPosition}`}
                          />

                          <motion.div
                            variants={{
                              rest:    { opacity: 0.75 },
                              hovered: { opacity: 0.9 },
                            }}
                            transition={{ duration: 0.4 }}
                            className={`absolute inset-0 bg-gradient-to-t ${overlay} to-transparent`}
                          />

                          <motion.div
                            variants={{
                              rest:    { x: "-110%", opacity: 0 },
                              hovered: { x: "110%",  opacity: 0.1 },
                            }}
                            transition={{ duration: 0.65, ease: "easeInOut" }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent skew-x-12 pointer-events-none"
                          />

                          <div className="absolute bottom-0 left-0 right-0 p-5">
                            <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-1">
                              {subtitle}
                            </p>
                            <p className="text-white font-bold text-lg leading-tight">{title}</p>
                          </div>
                        </motion.div>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 16, scale: 0.85 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 18 }}
                        whileHover={{ scale: 1.07, transition: { type: "spring", stiffness: 400 } }}
                        className="absolute -bottom-5 -right-4 bg-gray-900 border border-gray-700 rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 cursor-default"
                      >
                        <div className={`w-10 h-10 rounded-xl ${badgeBg} flex items-center justify-center text-white font-black text-sm`}>
                          {badgeValue}
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white leading-tight">{badgeLabel}</p>
                          <p className="text-[10px] text-gray-500 mt-0.5">ZenithumMedia</p>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.65, duration: 0.45, ease: "easeOut" }}
                        className="absolute -top-4 -left-4 flex items-center gap-1.5 bg-gray-900 border border-gray-700 rounded-full shadow-lg px-3 py-1.5"
                      >
                        <span className={`w-2 h-2 rounded-full ${badgeBg} animate-pulse`} />
                        <span className="text-[11px] font-semibold text-gray-300">Step {num}</span>
                      </motion.div>

                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 56 : -56 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.65, ease: "easeOut", delay: 0.12 }}
                      className={`flex flex-col gap-5 ${isEven ? "" : "lg:order-1"}`}
                    >
                      <motion.div
                        initial={{ scale: 0.7, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.2 }}
                        className="inline-flex items-center gap-3 self-start"
                      >
                        <span className={`w-12 h-12 rounded-2xl ${bg} ${color} flex items-center justify-center text-lg font-black`}>
                          {num}
                        </span>
                        <span className="text-sm font-semibold text-gray-500">{subtitle}</span>
                      </motion.div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                        {title}
                      </h3>

                      <p className="text-gray-400 text-base leading-relaxed">{desc}</p>

                      <div className="flex flex-wrap gap-2">
                        {chips.map((chip) => (
                          <motion.span
                            key={chip}
                            initial={{ opacity: 0, scale: 0.85 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.35, delay: 0.4 }}
                            whileHover={{ scale: 1.06, transition: { type: "spring", stiffness: 400 } }}
                            className={`px-3 py-1.5 rounded-full text-xs font-semibold border ${chipBg} cursor-default`}
                          >
                            {chip}
                          </motion.span>
                        ))}
                      </div>

                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Why Choose Us ── */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-widest mb-4">
              Why ZenithumMedia
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              The difference is in{" "}
              <span className="text-orange-400">the details</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">
              We hold ourselves to a higher standard on every campaign we run.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            {WHY.map(({ icon: Icon, stat, statSuffix = "", label, desc, color, bg }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.12 }}
                whileHover={{ y: -6, scale: 1.02, transition: { type: "spring", stiffness: 280, damping: 20 } }}
                className="group bg-gray-900 rounded-2xl border border-gray-800 hover:border-gray-700 p-8 flex flex-col gap-4 hover:shadow-xl hover:shadow-black/50 cursor-default"
              >
                <div className={`w-12 h-12 rounded-xl ${bg} ${color} flex items-center justify-center transition-transform duration-200 group-hover:scale-110`}>
                  <Icon size={22} />
                </div>
                <div className={`text-4xl font-extrabold ${color} tabular-nums leading-none`}>
                  {stat}{statSuffix}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{label}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <CTASection />
    </>
  );
};

export default ServicesPage;
