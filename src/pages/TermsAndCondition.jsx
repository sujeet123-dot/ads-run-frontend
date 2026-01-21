import React from 'react';

const TermsAndConditions = () => {
  const companyName = "Zenithum Media";
  const lastUpdated = "January 21, 2026";

  return (
    <div className="min-h-screen bg-white pt-24 py-16 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-widest text-gray-900 sm:text-5xl uppercase tracking-widest">
            Terms of Service
          </h1>
          <div className="mt-4 h-1 w-20 bg-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-500 italic">Effective as of {lastUpdated}</p>
        </div>

        <div className="prose prose-indigo prose-lg text-gray-600 mx-auto">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 border-l-4 border-indigo-600 pl-4 mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, 
              all applicable laws and regulations, and agree that you are responsible for compliance with any 
              applicable local laws.
            </p>
          </section>
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 border-l-4 border-indigo-600 pl-4 mb-4">
              2. Disclaimer
            </h2>
            <div className="bg-gray-100 p-6 rounded-lg text-sm font-mono">
              THE MATERIALS ON {companyName.toUpperCase()}'S WEBSITE ARE PROVIDED "AS IS". {companyName.toUpperCase()} 
              MAKES NO GUARANTEES EXPRESSED OR IMPLIED, AND HEREBY DISCLAIMS AND NEGATES ALL OTHER.
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 border-l-4 border-indigo-600 pl-4 mb-4">
              3. Limitations
            </h2>
            <p>
              In no event shall {companyName} or its suppliers be liable for any damages (including, without limitation, 
              damages for loss of data or profit) arising out of the use or inability to use the materials on our platform.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;