'use client'

import { useEffect } from "react";
import InvestorHero from "@/components/investors/InvestorHero";
import BeMoreThanInvestor from "@/components/investors/BeMoreThanInvestor";
import MachineIntelligence from "@/components/investors/MachineIntelligence";
import FAQSection from "@/components/sections/FAQSection";
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
              
              {/* Right Column - CSS Component */}
              <div className="flex justify-center lg:justify-end">
                <motion.div
                  className="relative max-w-md w-full"
                  initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.1, 0.25, 1], filter: { duration: 0.9 } }}
                >
                  {/* CSS Investment Dashboard */}
                  <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-semibold text-lg">Investment Dashboard</h3>
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                    
                    {/* Chart Area */}
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 mb-4">
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="bg-blue-500 h-16 rounded opacity-80"></div>
                        <div className="bg-purple-500 h-20 rounded opacity-70"></div>
                        <div className="bg-pink-500 h-12 rounded opacity-60"></div>
                      </div>
                      <div className="text-sm text-gray-600 text-center">Portfolio Performance</div>
                    </div>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">$2.4M</div>
                        <div className="text-xs text-gray-500">Total Invested</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">12</div>
                        <div className="text-xs text-gray-500">Active Deals</div>
                      </div>
                    </div>
                  </div>
                  {/* LED Overlay Effect */}
                  <div className="absolute inset-0 border-2 border-purple-400 rounded-2xl shadow-lg shadow-purple-400/30 pointer-events-none"></div>
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
      <FAQSection />
      <InvestorCTA />
    </main>
  );
}
