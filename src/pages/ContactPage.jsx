import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from '../components/sections/ContactForm'; 

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | ZenithumMedia</title>
        <meta name="description" content="Get in touch with the Adsonick team. Visit us at Landmark Cyber Park, Gurgaon." />
      </Helmet>

      <section className="relative min-h-screen bg-[#0a0b14] pt-32 pb-20 px-6 overflow-hidden">
        
        {/* Background Animated Blobs */}
        <div className="absolute top-20 right-[-10%] w-96 h-96 bg-indigo-600 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 left-[-10%] w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* --- Left Column: Info & Map --- */}
            <div className="flex flex-col gap-8">
              
              {/* Header Text */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Let's Start a <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-400">
                    Conversation.
                  </span>
                </h1>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Have a project in mind? We are currently accepting new partnerships.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="grid gap-4">
                {/* Email */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#141625] border border-white/5 hover:border-indigo-500/30 transition-all">
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Email Us</h3>
                    <p className="text-gray-400 text-sm">shubhampandey@zenithummedia.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#141625] border border-white/5 hover:border-indigo-500/30 transition-all">
                  <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Call Us</h3>
                    <p className="text-gray-400 text-sm">+91 8789685968</p>
                  </div>
                </div>

                {/* Visit Us + Map Container */}
                <div className="overflow-hidden rounded-2xl bg-[#141625] border border-white/5 hover:border-indigo-500/30 transition-all">
                  {/* Text Header */}
                  <div className="flex items-center gap-4 p-4 border-b border-white/5">
                    <div className="p-3 rounded-xl bg-teal-500/10 text-teal-400">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Visit Us</h3>
                      <p className="text-gray-400 text-sm">N50, Hargobind Enclave, Chhatarpur Delhi, 110068</p>
                    </div>
                  </div>

                  {/* Embedded Map */}
                  <div className="h-64 w-full relative grayscale hover:grayscale-0 transition-all duration-500">
                    <iframe 
                      title="Adsonick Office Location"
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1085.8410761646342!2d77.18768123754779!3d28.49053218511437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1e2ecad8dcf1%3A0x32353872ae4e4bf!2sN%2F50A%2C%20Street%20Number%204%2C%20Rajpur%20Khurd%20Extension%2C%20Chhatarpur%2C%20New%20Delhi%2C%20Delhi%20110068!5e1!3m2!1sen!2sin!4v1764853872007!5m2!1sen!2sin"
                    ></iframe>
                    {/* Dark Overlay for map to blend in (fades out on hover) */}
                    <div className="absolute inset-0 bg-indigo-900/20 pointer-events-none mix-blend-overlay"></div>
                  </div>
                </div>

              </div>
            </div>

            {/* --- Right Column: The Form --- */}
            <div className="lg:mt-0 sticky top-24">
               <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;