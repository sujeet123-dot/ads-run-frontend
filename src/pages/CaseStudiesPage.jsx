import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  TrendingUp, Target, Zap, ArrowRight,
  ArrowUpRight, BarChart2, Users, Trophy,
} from 'lucide-react';
import CTASection from '../components/sections/CTASection';

const CASES = [
  {
    client: "EcoWear Fashions",
    category: "E-Commerce",
    tagline: "From struggling sales to 6.5× ROAS in 90 days",
    challenge: "Struggling with low online sales and a high cost-per-acquisition despite having a premium, sustainable product line that deserved more visibility.",
    solution: "Rebuilt Google Shopping campaigns from the ground up, optimised product feeds, and launched a multi-layered retargeting strategy across Instagram Stories and Meta.",
    results: [
      { value: "6.5×", label: "Return on Ad Spend" },
      { value: "+150%", label: "Conversion Rate"    },
      { value: "−35%",  label: "Cost Per Acquisition" },
    ],
    accent: { text: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/30", dark: "bg-blue-500" },
  },
  {
    client: "SaaSFlow",
    category: "B2B Software",
    tagline: "210% more qualified leads with lower cost per demo",
    challenge: "Needed to generate high-quality demo requests from enterprise decision-makers in a saturated market where generic ads were being ignored.",
    solution: "Developed precision-targeted LinkedIn campaigns by job title and company size, with compelling ad copy and a frictionless lead form experience.",
    results: [
      { value: "+210%", label: "Qualified Leads"  },
      { value: "−45%",  label: "Cost Per Lead"    },
      { value: "75%",   label: "Demo Bookings"    },
    ],
    accent: { text: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/30", dark: "bg-violet-500" },
  },
  {
    client: "UrbanBites Food Co.",
    category: "Food & Lifestyle",
    tagline: "Scaling a local brand to 3× monthly revenue in 60 days",
    challenge: "A fast-growing food delivery brand stuck at plateau — unable to scale paid campaigns profitably beyond their local city.",
    solution: "Implemented a geo-expansion strategy on Meta Ads, creative refresh cycles every 14 days, and dynamic product ads tied to real-time menu availability.",
    results: [
      { value: "3×",    label: "Monthly Revenue"  },
      { value: "+92%",  label: "New Customers"    },
      { value: "4.1×",  label: "ROAS"             },
    ],
    accent: { text: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/30", dark: "bg-orange-500" },
  },
  {
    client: "NexaFinance",
    category: "FinTech",
    tagline: "High-trust lead gen in a regulated industry",
    challenge: "Financial services advertising is highly restricted. They struggled to run compliant campaigns that still drove meaningful loan application volumes.",
    solution: "Built a compliant creative framework for Google and programmatic, paired with educational content funnels that built trust before asking for the lead.",
    results: [
      { value: "+180%", label: "Loan Applications" },
      { value: "−52%",  label: "Drop-off Rate"     },
      { value: "8.2×",  label: "Qualified Pipeline" },
    ],
    accent: { text: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/30", dark: "bg-emerald-500" },
  },
];

const INDUSTRIES = [
  "E-Commerce", "B2B SaaS", "MobTech", "Fashion & Retail", "FinTech",
  "Food & Lifestyle", "Healthcare", "Real Estate", "Education",
  "Travel", "Consumer Apps", "Political Campaigns", "Non-Profit",
];

const AnimatedMetric = ({ value, label, accentText, started }) => (
  <div className="text-center p-5 rounded-2xl bg-gray-800 border border-gray-700">
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={started ? { opacity: 1, scale: 1 } : {}}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className={`text-2xl sm:text-3xl font-extrabold ${accentText} mb-1 tabular-nums`}
    >
      {value}
    </motion.div>
    <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest leading-tight">{label}</p>
  </div>
);

const CaseCard = ({ client, category, tagline, challenge, solution, results, accent, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }}
      whileHover={{ y: -6, transition: { type: "spring", stiffness: 260, damping: 22 } }}
      className="group bg-gray-900 rounded-2xl border-2 border-gray-800 hover:border-gray-700 overflow-hidden hover:shadow-2xl hover:shadow-black/60 transition-all duration-300"
    >
      {/* Coloured top strip */}
      <div className={`h-1.5 w-full ${accent.dark}`} />

      <div className="grid md:grid-cols-5">

        {/* LEFT — narrative */}
        <div className="md:col-span-3 p-7 sm:p-9 flex flex-col gap-7">

          <div className="flex items-start justify-between gap-4">
            <div>
              <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest border ${accent.bg} ${accent.text} ${accent.border} mb-3`}>
                {category}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">{client}</h3>
              <p className={`text-sm font-medium mt-1 ${accent.text}`}>{tagline}</p>
            </div>
            <motion.div
              whileHover={{ rotate: 45, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`flex-shrink-0 w-9 h-9 rounded-full ${accent.bg} ${accent.text} flex items-center justify-center`}
            >
              <ArrowUpRight size={18} />
            </motion.div>
          </div>

          <div className="flex gap-4">
            <div className={`mt-0.5 shrink-0 w-9 h-9 rounded-xl ${accent.bg} ${accent.text} flex items-center justify-center`}>
              <Target size={17} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-200 mb-1.5">The Challenge</h4>
              <p className="text-sm text-gray-400 leading-relaxed">{challenge}</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className={`mt-0.5 shrink-0 w-9 h-9 rounded-xl ${accent.bg} ${accent.text} flex items-center justify-center`}>
              <Zap size={17} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-200 mb-1.5">Our Solution</h4>
              <p className="text-sm text-gray-400 leading-relaxed">{solution}</p>
            </div>
          </div>

          <Link
            to="/contact"
            className={`inline-flex items-center gap-1.5 text-sm font-semibold ${accent.text} group/link`}
          >
            Start a similar campaign
            <ArrowRight size={14} className="transition-transform duration-200 group-hover/link:translate-x-1" />
          </Link>
        </div>

        {/* RIGHT — results */}
        <div className="md:col-span-2 bg-black p-7 sm:p-9 flex flex-col justify-center gap-5 relative overflow-hidden border-l border-gray-800">

          <TrendingUp
            size={160}
            className="absolute -bottom-6 -right-6 text-white/[0.02] pointer-events-none"
          />
          <span className="absolute top-4 right-6 text-7xl font-black text-white/[0.03] select-none leading-none pointer-events-none">
            {client.charAt(0)}
          </span>

          <div className="relative">
            <div className="flex items-center gap-2 mb-5">
              <TrendingUp size={16} className="text-orange-400" />
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Key Results</h4>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {results.map((r) => (
                <AnimatedMetric
                  key={r.label}
                  value={r.value}
                  label={r.label}
                  accentText={accent.text}
                  started={inView}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

const CaseStudiesPage = () => (
  <>
    <Helmet>
      <title>Case Studies | ZenithumMedia</title>
      <meta name="description" content="Real results from real campaigns. See how ZenithumMedia drives ROAS, leads, and growth for brands across industries." />
    </Helmet>

    {/* ── Hero ── */}
    <section className="relative bg-black pt-32 pb-24 overflow-hidden">
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full bg-orange-500/15 blur-[90px]"
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
              Case Studies
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6"
            >
              Proven{" "}
              <span className="text-orange-400">Success</span>{" "}
              Stories
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22 }}
              className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg"
            >
              We don't just promise results — we deliver them. Every case study
              below is a real campaign, real spend, and real growth for a real
              business.
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
                Get Similar Results
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

          {/* Right — overview panel */}
          <motion.div
            initial={{ opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
            className="hidden lg:block"
          >
            <div className="relative bg-gray-900 border border-gray-800 rounded-2xl p-7 overflow-hidden shadow-2xl shadow-black/60">
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-orange-500/10 blur-[60px] pointer-events-none" />

              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">Campaign Overview</p>

              {[
                { icon: BarChart2, label: "Campaigns Run",    value: "300+", color: "text-blue-400"   },
                { icon: Users,     label: "Clients Served",   value: "50+",   color: "text-orange-400" },
                { icon: TrendingUp,label: "Avg. ROAS Uplift", value: "+105%",  color: "text-emerald-400"},
                { icon: Trophy,    label: "Client Retention", value: "96%",    color: "text-violet-400" },
              ].map(({ icon: Icon, label, value, color }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.45 }}
                  className="flex items-center justify-between py-4 border-b border-gray-800 last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center ${color}`}>
                      <Icon size={16} />
                    </div>
                    <span className="text-sm text-gray-400">{label}</span>
                  </div>
                  <span className={`text-lg font-extrabold ${color}`}>{value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>

    {/* ── Case Studies ── */}
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
            Real Campaigns
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Results that <span className="text-orange-400">speak for themselves</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            Four industries, four challenges, one consistent outcome — measurable,
            scalable growth.
          </p>
        </motion.div>

        <div className="flex flex-col gap-7">
          {CASES.map((c, i) => (
            <CaseCard key={c.client} {...c} index={i} />
          ))}
        </div>

      </div>
    </section>

    {/* ── Industries ── */}
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-widest mb-4">
            Industries
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            We've driven growth across{" "}
            <span className="text-orange-400">every vertical</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3">
          {INDUSTRIES.map((industry, i) => (
            <motion.span
              key={industry}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              whileHover={{ scale: 1.08, y: -2, transition: { type: "spring", stiffness: 400 } }}
              className="px-5 py-2.5 rounded-full border border-gray-800 bg-gray-900 text-gray-400 text-sm font-semibold hover:border-orange-500/50 hover:text-orange-400 transition-colors duration-200 cursor-default"
            >
              {industry}
            </motion.span>
          ))}
        </div>

      </div>
    </section>

    <CTASection />
  </>
);

export default CaseStudiesPage;
