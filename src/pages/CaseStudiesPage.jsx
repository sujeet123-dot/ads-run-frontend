import React from 'react';
import { Helmet } from 'react-helmet-async';

const Metric = ({ value, label }) => (
    <div className="bg-gray-700 p-4 rounded-md text-center">
      <div className="text-3xl font-bold text-green-400">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
);

const CaseStudy = ({ client, challenge, solution, results }) => (
  <div className="bg-gray-800 rounded-lg border border-gray-700 mb-12 overflow-hidden">
    <div className="p-8">
      <h3 className="text-2xl font-bold text-white">{client}</h3>
      <div className="mt-6">
        <h4 className="font-semibold text-lg text-blue-400">The Challenge</h4>
        <p className="text-gray-300 mt-2">{challenge}</p>
      </div>
      <div className="mt-6">
        <h4 className="font-semibold text-lg text-blue-400">Our Solution</h4>
        <p className="text-gray-300 mt-2">{solution}</p>
      </div>
    </div>
    <div className="bg-gray-800/50 border-t border-gray-700 p-8">
       <h4 className="font-semibold text-lg text-blue-400 mb-4">The Results</h4>
       <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {results.map(r => <Metric key={r.label} value={r.value} label={r.label} />)}
       </div>
    </div>
  </div>
);

const CaseStudiesPage = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies | AdRun Pro</title>
        <meta name="description" content="See real-world results and success stories from our clients. Discover how AdRun Pro drives growth through strategic ad campaigns." />
      </Helmet>
       <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Proven Success</h1>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">We don't just promise results—we deliver them. Here's a look at how we've helped businesses like yours succeed.</p>
        </div>
        
        <CaseStudy 
            client="EcoWear Fashions (E-commerce)"
            challenge="Struggling with low online sales and a high cost-per-acquisition despite having a quality product."
            solution="We rebuilt their Google Shopping campaigns from the ground up, optimized product feeds, and launched a multi-layered retargeting strategy on Instagram Stories."
            results={[
                { value: '6.5x', label: 'Return on Ad Spend (ROAS)' },
                { value: '+150%', label: 'Conversion Rate Increase' },
                { value: '-35%', label: 'Cost Per Acquisition (CPA)' },
            ]}
        />

        <CaseStudy 
            client="SaaSFlow (B2B Software)"
            challenge="Needed to generate high-quality demo requests from enterprise-level clients in a competitive market."
            solution="Developed a highly-targeted LinkedIn campaign focusing on specific job titles and company sizes, combined with compelling ad copy and a streamlined lead form."
            results={[
                { value: '+210%', label: 'Qualified Leads per Month' },
                { value: '-45%', label: 'Cost Per Lead (CPL)' },
                { value: '75%', label: 'Increase in Demo Bookings' },
            ]}
        />
      </div>
    </>
  );
};

export default CaseStudiesPage;