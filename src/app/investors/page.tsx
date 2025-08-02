import { Metadata } from "next";
import InvestorHero from "@/components/investors/InvestorHero";
import VotingInterface from "@/components/investors/VotingInterface";
import BeMoreThanInvestor from "@/components/investors/BeMoreThanInvestor";
import MachineIntelligence from "@/components/investors/MachineIntelligence";
import FAQSection from "@/components/sections/FAQSection";
import InvestorCTA from "@/components/investors/InvestorCTA";

export const metadata: Metadata = {
  title: "Investors - ADIN",
  description: "AI Will be the Best Investor. ADIN and its agents automate venture, from diligence to making investment decisions, with deals sourced by investors and the ADIN member network.",
};

export default function InvestorsPage() {
  return (
    <main className="relative min-h-screen">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-bg opacity-30" />
      
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
              
              {/* Right Column - Voting Interface */}
              <div className="flex justify-center lg:justify-end">
                <VotingInterface />
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
