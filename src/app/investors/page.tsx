'use client'

import { useEffect } from "react";
import Image from 'next/image';
import InvestorHero from "@/components/investors/InvestorHero";
import BeMoreThanInvestor from "@/components/investors/BeMoreThanInvestor";
import MachineIntelligence from "@/components/investors/MachineIntelligence";
import UnifiedFAQ from "@/components/shared/UnifiedFAQ";
import InvestorCTA from "@/components/investors/InvestorCTA";
import { motion } from "framer-motion";

export default function InvestorsPage() {
  useEffect(() => {
    document.title = "Investors - ADIN";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'AI Will be the Best Investor. ADIN and its agents automate venture, from diligence to making investment decisions, with deals sourced by investors and the ADIN member network.');
    }
  }, []);
  return (
    <main className="relative min-h-screen bg-white">
      {/* Enhanced LED Strip Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top LED Strip */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg shadow-blue-500/50" 
             style={{
               filter: 'brightness(1.5) saturate(1.8)',
             }}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-pulse"></div>
        </div>
        
        {/* Bottom LED Strip */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 shadow-lg shadow-purple-500/50"
             style={{
               filter: 'brightness(1.5) saturate(1.8)',
             }}>
          <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 animate-pulse"></div>
        </div>
        
        {/* Left LED Strip */}
        <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-green-500 via-blue-500 to-purple-500 shadow-lg shadow-green-500/50"
             style={{
               filter: 'brightness(1.5) saturate(1.8)',
             }}>
          <div className="absolute inset-0 bg-gradient-to-b from-green-400 via-blue-400 to-purple-400 animate-pulse"></div>
        </div>
        
        {/* Right LED Strip */}
        <div className="absolute top-0 bottom-0 right-0 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-green-500 shadow-lg shadow-purple-500/50"
             style={{
               filter: 'brightness(1.5) saturate(1.8)',
             }}>
          <div className="absolute inset-0 bg-gradient-to-b from-purple-400 via-blue-400 to-green-400 animate-pulse"></div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10">
        {/* Breadcrumb */}
        <div className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <span className="inline-block px-4 py-2 bg-gray-100 text-gray-600 text-sm rounded-full">
              Investors
            </span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Hero Content */}
              <InvestorHero />
              
              {/* Right Column - SVG Images */}
              <div className="relative flex justify-center lg:justify-end">
                <motion.div
                  className="relative w-full max-w-lg h-96"
                  initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.1, 0.25, 1], filter: { duration: 0.9 } }}
                >
                  {/* Lane AI Card - Background */}
                  <div className="absolute top-0 left-0 w-72 h-52 z-10">
                    <Image 
                      src="/investors_hero_lane.svg" 
                      alt="Lane AI Logistics"
                      fill
                      className="object-contain"
                    />
                  </div>
                  
                  {/* Voting Interface - Overlapping from right edge */}
                  <div className="absolute top-20 right-0 w-64 h-72 z-20">
                    <Image 
                      src="/investors_hero_votes.svg" 
                      alt="Investor Voting Interface"
                      fill
                      className="object-contain"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Scroll Indicator */}
        <div className="flex justify-center pb-8">
          <div className="w-8 h-8 border border-gray-400 rounded-full flex items-center justify-center hover:border-gray-600 transition-colors duration-300">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <BeMoreThanInvestor />
      <MachineIntelligence />
      <UnifiedFAQ />
      <InvestorCTA />
    </main>
  );
}
