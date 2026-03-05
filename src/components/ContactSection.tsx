import React, { useState } from 'react';
import { portfolioConfig } from '../config/portfolio';
import { Mail, Phone, MapPin, Copy, Check, ExternalLink } from 'lucide-react';
import SocialLinks from './SocialLinks';

const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioConfig.contactInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="container-wide max-w-6xl mx-auto px-4">
        
        {/* MAIN CONTAINER: Flex-col on mobile, Grid on desktop */}
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          
          {/* LEFT SIDE: THE PUNCHLINE */}
          <div className="lg:w-1/2 flex flex-col justify-between py-2">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Available for projects
              </div>
              
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 leading-[0.9] mb-8">
                Ready to <br />
                <span className="text-blue-600 italic">collaborate?</span>
              </h2>
              
              <p className="text-xl text-slate-500 max-w-md leading-relaxed">
                Whether you have a specific project in mind or just want to chat about tech, I'm always open to new connections.
              </p>
            </div>

            <div className="mt-12 lg:mt-0 pt-8 border-t border-slate-100 flex items-center gap-8">
               <SocialLinks />
            </div>
          </div>

          {/* RIGHT SIDE: THE INTERACTIVE HUB */}
          <div className="lg:w-1/2">
            <div className="relative p-1 bg-slate-100 rounded-[2.5rem]">
              <div className="bg-white rounded-[2.3rem] p-8 md:p-10 shadow-2xl shadow-slate-200/50">
                
                <div className="space-y-10">
                  {/* EMAIL BLOCK - High Interaction */}
                  <div className="group">
                    <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-3">Principal Contact</p>
                    <div className="flex items-center justify-between gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 group-hover:border-blue-200 transition-all">
                      <div className="flex items-center gap-4 min-w-0">
                        <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0">
                          <Mail size={18} />
                        </div>
                        <span className="text-lg font-bold text-slate-900 truncate">{portfolioConfig.contactInfo.email}</span>
                      </div>
                      <button 
                        onClick={copyEmail}
                        className="shrink-0 p-3 rounded-xl bg-white border border-slate-200 text-slate-400 hover:text-blue-600 hover:border-blue-200 transition-all active:scale-95"
                      >
                        {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                      </button>
                    </div>
                  </div>

                  {/* OTHER DETAILS - Sleek Rows */}
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-slate-400 mb-2">
                        <Phone size={14} />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Phone</span>
                      </div>
                      <a href={`tel:${portfolioConfig.contactInfo.phone}`} className="text-slate-900 font-bold hover:text-blue-600 transition-colors flex items-center gap-2">
                        {portfolioConfig.contactInfo.phone} <ExternalLink size={14} className="opacity-0 group-hover:opacity-100" />
                      </a>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-slate-400 mb-2">
                        <MapPin size={14} />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Location</span>
                      </div>
                      <p className="text-slate-900 font-bold">{portfolioConfig.contactInfo.location}</p>
                    </div>
                  </div>

                  {/* FAST ACTION BUTTON */}
                  <a 
                    href={`mailto:${portfolioConfig.contactInfo.email}`}
                    className="flex items-center justify-center w-full py-5 rounded-2xl bg-slate-900 text-white font-bold text-lg hover:bg-blue-600 transition-all group"
                  >
                    Launch Mailbox
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
