import React from 'react';
import { portfolioConfig } from '../config/portfolio';
import { ArrowRight, MapPin, GraduationCap, Mail, Calendar } from 'lucide-react';
import SocialLinks from './SocialLinks';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          
          {/* LEFT: PHOTO */}
          <div className="lg:w-[420px] order-1">
            <div className="relative">
              {/* Geometric accents */}
              <div className="absolute -top-6 -left-6 w-20 h-20 border-t-2 border-l-2 border-gray-200 rounded-tl-2xl" />
              <div className="absolute -bottom-6 -right-6 w-20 h-20 border-b-2 border-r-2 border-gray-200 rounded-br-2xl" />
              
              {/* Photo container - Round */}
              <div className="relative w-72 h-72 md:w-[400px] md:h-[400px] rounded-full overflow-hidden border border-gray-100/80 bg-gray-50">
                <img
                  src="/myprofilepic.jpeg"
                  alt={
