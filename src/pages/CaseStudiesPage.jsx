import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { TrendingUp, Target, Zap, ArrowUpRight } from 'lucide-react';

// --- Sub-Component: Individual Metric ---
const Metric = ({ value, label }) => (
  <div className="p-4 rounded-xl bg-[#0a0b14]/50 border border-white/5 text-center transition-transform hover:scale-105">
    <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500 mb-1">
      {value}
    </div>
    <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
      {label}
    </div>
  </div>
);

// --- Sub-Component: Case Study Card ---
const CaseStudyCard = ({ client, category, challenge, solution, results, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="group relative bg-[#141625] rounded-3xl border border-white/5 overflow-hidden hover:border-indigo-500/30 transition-all duration-300"
  >
    <div className="grid md:grid-cols-5 h-full">
      
      {/* LEFT PANEL: Narrative (3/5 width) */}
      <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-wider border border-indigo-500/20">
              {category}
            </span>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 group-hover:text-indigo-200 transition-colors">
            {client}
          </h3>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="mt-1 shrink-0 p-2 rounded-lg bg-rose-500/10 text-rose-400 h-fit">
                <Target size={20} />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">The Challenge</h4>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">{challenge}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 shrink-0 p-2 rounded-lg bg-amber-500/10 text-amber-400 h-fit">
                <Zap size={20} />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Our Solution</h4>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">{solution}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL: Results (2/5 width) */}
      <div className="md:col-span-2 bg-gradient-to-br from-[#1e2130] to-[#141625] p-8 md:p-10 border-t md:border-t-0 md:border-l border-white/5 flex flex-col justify-center relative overflow-hidden">
        {/* Decorative background icon */}
        <div className="absolute top-0 right-0 text-white/5 transform translate-x-1/3 -translate-y-1/3">
          <TrendingUp size={200} />
        </div>

        <div className="relative z-10">
          <h4 className="flex items-center gap-2 text-white font-semibold mb-6">
            <TrendingUp size={18} className="text-emerald-400" />
            Key Results
          </h4>
          <div className="grid grid-cols-1 gap-4">
            {results.map((r, i) => (
              <Metric key={i} value={r.value} label={r.label} />
            ))}
          </div>
        </div>
      </div>

    </div>
  </motion.div>
);

// --- Main Page Component ---
const CaseStudiesPage = () => {
  const cases = [
    {
      client: "EcoWear Fashions",
      category: "E-Commerce",
      challenge: "Struggling with low online sales and a high cost-per-acquisition (CPA) despite having a high-quality, sustainable product line.",
      solution: "We rebuilt their Google Shopping campaigns from the ground up, optimized product feeds, and launched a multi-layered retargeting strategy on Instagram Stories.",
      results: [
        { value: '6.5x', label: 'Return on Ad Spend' },
        { value: '+150%', label: 'Conversion Rate' },
        { value: '-35%', label: 'Cost Per Acquisition' },
      ]
    },
    {
      client: "SaaSFlow",
      category: "B2B Software",
      challenge: "Needed to generate high-quality demo requests from enterprise-level clients in a highly competitive market saturated with generic ads.",
      solution: "Developed a targeted LinkedIn campaign focusing on specific job titles and company sizes, combined with compelling ad copy and a streamlined lead form.",
      results: [
        { value: '+210%', label: 'Qualified Leads' },
        { value: '-45%', label: 'Cost Per Lead' },
        { value: '75%', label: 'Demo Bookings' },
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies | Adsonick</title>
        <meta name="description" content="Real-world results. Discover how Adsonick drives growth through strategic ad campaigns." />
      </Helmet>

      <section className="relative min-h-screen bg-[#0a0b14] pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute top-20 left-[-10%] w-96 h-96 bg-indigo-600 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 right-[-10%] w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Proven <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500">Success Stories</span>
            </h1>
            <p className="text-xl text-gray-400">
              We don't just promise results—we deliver them. See how we've helped businesses transform their digital presence.
            </p>
          </div>

          {/* Case Studies List */}
          <div className="flex flex-col gap-12">
            {cases.map((study, index) => (
              <CaseStudyCard key={index} {...study} index={index} />
            ))}
          </div>

          {/* CTA at bottom */}
          <div className="mt-20 text-center">
            <p className="text-gray-400 mb-6">Ready to be our next success story?</p>
            <a href="/contact" className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold hover:shadow-lg hover:shadow-indigo-500/25 transition-all">
              Start Your Campaign <ArrowUpRight className="ml-2" size={18} />
            </a>
          </div>

        </div>
      </section>
    </>
  );
};

export default CaseStudiesPage;