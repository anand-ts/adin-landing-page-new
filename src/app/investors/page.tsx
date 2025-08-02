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
                  {/* Voting Interface Dashboard */}
                  <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm">
                    {/* Header with Lane AI Progress */}
                    <div className="relative bg-gray-800 rounded-xl p-4 mb-6 text-white">
                      <div className="flex items-center justify-between mb-2">
                        <div className="bg-yellow-400 text-black text-xs px-2 py-1 rounded font-medium">
                          100%
                        </div>
                        <button className="text-gray-300 hover:text-white transition-colors">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white font-medium text-sm">
                          L
                        </div>
                        <div>
                          <h3 className="font-medium">Lane AI</h3>
                          <p className="text-gray-300 text-sm">Machine Learning</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Voting Options */}
                    <div className="space-y-3">
                      {/* Scribe - For */}
                      <div className="flex items-center justify-between p-3 rounded-lg border border-gray-100">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
                            S
                          </div>
                          <span className="font-medium text-gray-900">Scribe</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-600">For</span>
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Lane AI - For */}
                      <div className="flex items-center justify-between p-3 rounded-lg border border-gray-100">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
                            L
                          </div>
                          <span className="font-medium text-gray-900">Lane AI</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-600">For</span>
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Sona - Against */}
                      <div className="flex items-center justify-between p-3 rounded-lg border border-gray-100">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-medium text-sm">
                            S
                          </div>
                          <span className="font-medium text-gray-900">Sona</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-600">Against</span>
                          <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                        </div>
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
