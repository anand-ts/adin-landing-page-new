import { Metadata } from "next";
import MembersHero from "@/components/members/MembersHero";

export const metadata: Metadata = {
  title: "Members - ADIN",
  description: "Submit Deals, Earn Carry. Members earn a 10% carry on deals they submit that ADIN approves and successfully closes.",
};

export default function MembersPage() {
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
              Members
            </span>
          </div>
        </div>

        {/* Hero Section */}
        <MembersHero />

        {/* Scroll Indicator */}
        <div className="flex justify-center pb-8">
          <div className="w-8 h-8 border border-gray-400 rounded-full flex items-center justify-center animate-bounce">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </main>
  );
}
