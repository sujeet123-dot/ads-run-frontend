import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Target, Users, TrendingUp, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Delivered", value: "46+" },
    { label: "Team Members", value: "7+" },
    { label: "Client Retention", value: "98%" },
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8 text-indigo-400" />,
      title: "Our Mission",
      text: "To empower businesses of all sizes to compete and win in the digital landscape through transparent, data-driven strategies."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-teal-400" />,
      title: "Our Approach",
      text: "We don't believe in one-size-fits-all. Every campaign is custom-built, meticulously managed, and continuously optimized."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-400" />,
      title: "Our Vision",
      text: "To be the catalyst for sustainable growth, transforming advertising from a confusing expense into a clear, profitable investment."
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us | ZenithumMedia</title>
        <meta name="description" content="Learn about the team, mission, and values behind Adsonick. We are digital marketing experts dedicated to your growth." />
      </Helmet>

      {/* --- Section 1: Hero / Intro --- */}
      <section className="relative pt-32 pb-20 px-6 bg-white overflow-hidden">
        {/* Background Decorative Blob */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              We Are Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-red-400">Growth Partners</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-12">
              Zenithummedia was founded on a simple principle: advertising should be an investment, not an expense. We are a collective of data analysts, creative strategists, and digital marketers.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-b border-black/25 py-10">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-black mb-2">{stat.value}</div>
                <div className="text-sm text-indigo-400 font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 2: Values Cards --- */}
      <section className="py-20 bg-white px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-orange-400 border border-white/5 p-8 rounded-2xl hover:border-indigo-500/30 transition-colors"
              >
                <div className="w-16 h-16 rounded-xl bg-blue-950/5 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 3: Team / Culture (Optional Visual) --- */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6">
              Driven by Data, <br />
              <span className="text-indigo-400">Fueled by Creativity.</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              We believe in partnership. We work closely with our clients to understand their unique goals, challenges, and customers. 
            </p>
            <p className="text-gray-600 text-lg">
              Our culture is built on transparency. You will never have to guess where your budget is going or what results you are getting. We provide clear, actionable insights every step of the way.
            </p>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              {/* Placeholder for an Office/Team Image - using a gradient block for now */}
              <div className="bg-gradient-to-br from-red-300 to-orange-400 aspect-video flex items-center justify-center group">
                 <Users size={64} className="text-gray-600 group-hover:text-indigo-500 transition-colors duration-500" />
                 <p className="absolute bottom-4 text-gray-500 text-sm">Team Collaboration</p>
              </div>
            </div>
            {/* Decorative Element behind image */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-indigo-500/20 rounded-2xl -z-0"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;