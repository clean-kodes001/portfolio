import React, { useState } from 'react';
import { portfolioConfig } from '../config/portfolio';
import { Mail, MapPin, Send, Copy, Check, ArrowRight } from 'lucide-react';
import SocialLinks from './SocialLinks';

const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const contact = portfolioConfig?.contactInfo || {};
  const email = contact.email || "hello@example.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleQuickMail = () => {
    window.location.href = `mailto:${email}?subject=Collaboration Inquiry`;
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Content */}
          <div className="lg:w-1/2 space-y-5">
            <div className="inline-flex items-center gap-3">
              <span className="w-6 h-px bg-gray-300" />
              <span className="text-[10px] font-medium text-gray-400 tracking-[0.2em] uppercase">
                Contact
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light tracking-[-0.03em] text-gray-900 leading-[0.9]">
              Let's build the <span className="font-medium">future.</span>
            </h2>
            
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Have a question or proposal? Let's start a conversation.
            </p>
            
            <div className="hidden lg:block pt-4">
              <SocialLinks />
            </div>
          </div>

          {/* RIGHT: Contact Card */}
          <div className="lg:w-1/2 w-full">
            <div className="border border-gray-100 bg-white p-6 md:p-8">
              
              <div className="space-y-5">
                {/* Email */}
                <div className="flex items-center justify-between gap-4 p-4 bg-gray-50/50 border border-gray-100">
                  <div className="flex items-center gap-4 min-w-0">
                    <Mail size={16} className="text-gray-400 flex-shrink-0" strokeWidth={1.5} />
                    <div className="min-w-0">
                      <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">
                        Email
                      </p>
                      <p className="text-sm font-light text-gray-700 truncate">
                        {email}
                      </p>
                    </div>
                  </div>
                  <button 
                    onClick={handleCopy}
                    className="flex-shrink-0 p-1.5 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  >
                    {copied ? <Check size={14} strokeWidth={2} /> : <Copy size={14} strokeWidth={1.5} />}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 bg-gray-50/50 border border-gray-100">
                  <MapPin size={16} className="text-gray-400 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">
                      Location
                    </p>
                    <p className="text-sm font-light text-gray-700">
                      {contact.location || "Earth"}
                    </p>
                  </div>
                </div>

                {/* Send Message */}
                <button
                  onClick={handleQuickMail}
                  className="w-full group inline-flex items-center justify-between px-5 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 text-sm font-medium"
                >
                  <span>Send a Message</span>
                  <Send 
                    size={14} 
                    className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" 
                    strokeWidth={1.5}
                  />
                </button>
              </div>

              {/* Mobile Social */}
              <div className="lg:hidden flex justify-center pt-6 border-t border-gray-100 mt-6">
                <SocialLinks />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
