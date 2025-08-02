import { Metadata } from "next";
import MembersHero from "@/components/members/MembersHero";
import MemberStats from "@/components/members/MemberStats";
import BeMoreThanMember from "@/components/members/BeMoreThanMember";
import HowToEarn from "@/components/members/HowToEarn";
import HowToEarnCarry from "@/components/members/HowToEarnCarry";
import UnifiedFAQ from "@/components/shared/UnifiedFAQ";
import UnifiedCTA from "@/components/shared/UnifiedCTA";

export const metadata: Metadata = {
  title: "Members - ADIN",
  description: "Submit Deals, Earn Carry. Members earn a 10% carry on deals they submit that ADIN approves and successfully closes.",
};

export default function MembersPage() {
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
              Members
            </span>
          </div>
        </div>

        {/* Hero Section */}
        <MembersHero />

        {/* Member Stats */}
        <MemberStats />

        {/* Become an ADIN Member - Deal Calculator */}
        <HowToEarn />

        {/* Be More Than a Member */}
        <BeMoreThanMember />

        {/* How to Earn Your 10% Carry */}
        <HowToEarnCarry />

        {/* FAQ */}
        <UnifiedFAQ />

        {/* CTA */}
        <UnifiedCTA />

        {/* Scroll Indicator */}
        <div className="flex justify-center pb-8">
          <div className="w-8 h-8 border border-gray-400 rounded-full flex items-center justify-center hover:border-gray-600 transition-colors duration-300">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </main>
  );
}
