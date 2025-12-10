import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Smartphone, Globe, Mail, Layers, BarChart2, 
  Cpu, Search, Rocket, TrendingUp, ArrowRight, Megaphone,
  HeartHandshake,
  PieChart,
  Sparkles,
  MessageCircle
} from 'lucide-react';

// Import Components
import ServiceCard from '../components/ui/ServiceCard';
import Button from '../components/ui/Button';

const ServicesPage = () => {
  
  // 1. Detailed Services Data
  const services = [
    
    {
      icon: <BarChart2 />,
      title: "Social Media Marketing",
      desc: "Strategic social media growth for brands, creators, and public figures. Includes YouTube views, organic-like growth plans, political content services, and Twitter/X trending campaigns."
    },
    {
      icon: <Megaphone />,
      title: "Lead Generation",
      desc: "High-quality, sales-ready leads delivered through precise targeting. Consistent daily, weekly, or monthly lead plans with strong meeting conversion rates."
    }, 
    {
      icon: <HeartHandshake />,
      title: "Advertiser & Publisher Relations",
      desc: "Connecting advertisers with premium publishers. We also help publishers with business development and inventory sales."
    },
    {
      icon: <Mail />,
      title: "Email Marketing",
      desc: "Personalized cold outreach and automated email campaigns to increase conversions and drive predictable business results."
    },
    {
      icon: <PieChart />,
      title: "Media Buying & Planning",
      desc: "Google & Meta ads management with expert optimization, budget planning, and performance scaling for maximum ROI."
    },
    {
      icon: <Sparkles />,
      title: "Branding Campaigns",
      desc: "Visibility-boosting branding campaigns using CPM, CPC, and CPV models designed to enhance brand recall and trust."
    },
    {
      icon: <MessageCircle />,
      title: "Online Reputation Management",
      desc: "Reputation building and protection for politicians, influencers, and public personalities, including election-focused digital strategies."
    }
    
  ];

  // 2. Process Steps Data
  const processSteps = [
    { icon: <Search size={24} />, title: "Discovery", desc: "We analyze your market gap." },
    { icon: <Cpu size={24} />, title: "Strategy", desc: "We build a custom roadmap." },
    { icon: <Rocket size={24} />, title: "Launch", desc: "We deploy across channels." },
    { icon: <TrendingUp size={24} />, title: "Optimize", desc: "We refine for max ROI." },
  ];

  return (
    <>
      <Helmet>
        <title>Our Services | ZenithumMedia</title>
        <meta name="description" content="Explore Adsonick's expert ad management services: Mobile, Web, Social, and Display advertising designed to maximize your ROI." />
      </Helmet>

      {/* --- Section 1: Hero --- */}
      <section className="relative pt-32 pb-20 px-6 bg-white overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto text-center relative z-10 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Comprehensive <br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-400">
              Digital Solutions
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 leading-relaxed"
          >
            We don't just run ads; we build ecosystems. From mobile acquisition to desktop retention, 
            we have the tools and expertise to scale your brand globally.
          </motion.p>
        </div>
      </section>

      {/* --- Section 2: Services Grid --- */}
      <section className="py-20 bg-white px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ServiceCard 
                  icon={service.icon} 
                  title={service.title} 
                  description={service.desc} 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 3: Our Process (Visual Roadmap) --- */}
      <section className="py-24 px-6 bg-white border-t border-white/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">How We Scale Growth</h2>
            <p className="text-gray-600">Our proven methodology for consistent results.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop Only) */}
            <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-indigo-500/50 to-teal-400/50 -z-0"></div>

            {processSteps.map((step, index) => (
              <div key={index} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-2xl bg-[#141625] border border-white/10 flex items-center justify-center text-indigo-400 mb-6 group-hover:border-orange-500 group-hover:text-white group-hover:bg-orange-600 transition-all duration-300 shadow-lg">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 4: CTA --- */}
      <section className="py-10 px-6 bg-gradient-to-b bg-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to dominate your market?</h2>
          <p className="text-gray-600 mb-8">
            Join the 500+ partners who trust ZenithumMedia to deliver high-quality traffic and conversions.
          </p>
          <Button to="/contact" primary className="px-10 py-4 text-lg bg-orange-600">
            Start Your Campaign <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;