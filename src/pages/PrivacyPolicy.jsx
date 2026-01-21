import React from 'react';

const PrivacyPolicy = () => {
  const companyName = "Zenithum Media";
  const websiteUrl = "zenithummedia.com";
  const effectiveDate = "January 21, 2026";

  return (
    <div className="min-h-screen bg-gray-50 pt-24 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm border border-gray-100">
        <header className="border-b border-gray-200 pb-8 mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Last Updated: <span className="font-medium text-gray-700">{effectiveDate}</span>
          </p>
        </header>

        <div className="space-y-8 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Information Collection</h2>
            <p>
              At <span className="font-semibold">{companyName}</span>, accessible from {websiteUrl}, one of our main priorities is the privacy of our visitors. We collect information in the following ways:
            </p>
            <ul className="list-disc ml-6 mt-3 space-y-2">
              <li><strong>Contact Information:</strong> Name and email address when you fill out a form.</li>
              <li><strong>Log Files:</strong> We follow a standard procedure of using log files to track visitors when they visit websites.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. How We Use Data</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc ml-6 mt-3 space-y-2">
              <li>Provide, operate, and maintain our website.</li>
              <li>Improve, personalize, and expand our website.</li>
              <li>Understand and analyze how you use our website.</li>
            </ul>
          </section>

          <section className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-500">
            <h2 className="text-lg font-bold text-blue-900 mb-2">3. Data Security</h2>
            <p className="text-blue-800 text-sm">
              We use commercially acceptable means to protect your Personal Information, but remember that no method of transmission over the Internet is 100% secure.
            </p>
          </section>
        </div>

        <footer className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-400">
          <p>© 2026 {companyName}. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;