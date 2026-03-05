import React, { useState } from 'react';
import { portfolioConfig } from '../config/portfolio';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send, Copy, Check } from 'lucide-react';
import SocialLinks from './SocialLinks';
import {  ArrowRight } from 'lucide-react';

const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  // Safely extract contact info with fallbacks to prevent crashes
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
    <section id="contact" className="py-12 md:py-16 bg-slate-50/30 overflow-hidden relative">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-[120px] -z-10" />

      <div className="container-wide max-w-5xl">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          
          {/* LEFT: THE PITCH */}
          <div className="lg:w-1/2 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-[10px] font-bold uppercase tracking-widest text-blue-600">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              Available for Hire
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900">
              Let’s build the <span className="text-blue-600">future.</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-md">
              Have a question or a proposal? My inbox is always open. Let's start a conversation.
            </p>
            
            <div className="hidden lg:block pt-4">
               <SocialLinks />
            </div>
          </div>

          {/* RIGHT: THE INTERACTIVE HUB */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-white rounded-[2.5rem] border border-slate-200 p-6 md:p-8 shadow-xl shadow-slate-200/40">
              
              <div className="space-y-6">
                {/* EMAIL HUB */}
                <div className="group relative p-5 rounded-3xl bg-slate-900 text-white transition-transform hover:-translate-y-1 duration-300">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                        <Mail size={20} className="text-blue-400" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Email</p>
                        <p className="font-bold truncate max-w-[180px] sm:max-w-none">{email}</p>
                      </div>
                    </div>
                    <button 
                      onClick={handleCopy}
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
                    </button>
                  </div>
                </div>

                {/* DETAILS ROW */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col items-center justify-center text-center group hover:bg-white hover:border-blue-200 transition-all">
                    <Phone size={18} className="text-slate-400 mb-2 group-hover:text-blue-600" />
                    <p className="text-[9px] uppercase font-black text-slate-400 tracking-tighter">Phone</p>
                    <p className="text-sm font-bold text-slate-900">{contact.phone || "N/A"}</p>
                  </div>
                  
                  <div className="p-4 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col items-center justify-center text-center group hover:bg-white hover:border-blue-200 transition-all">
                    <MapPin size={18} className="text-slate-400 mb-2 group-hover:text-blue-600" />
                    <p className="text-[9px] uppercase font-black text-slate-400 tracking-tighter">Location</p>
                    <p className="text-sm font-bold text-slate-900">{contact.location || "Earth"}</p>
                  </div>
                </div>

                {/* CALL TO ACTION */}
                <Button 
                  onClick={handleQuickMail}
                  className="w-full h-16 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg shadow-lg shadow-blue-500/20 group"
                >
                  Message Me Directly
                  <Send size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </div>

              <div className="lg:hidden flex justify-center pt-8">
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
