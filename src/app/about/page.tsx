import { Metadata } from "next";
import HeroSection from "@/components/hero/HeroSection";
import LiveReportsCard from "@/components/reports/LiveReportsCard";
import NetworkStats from "@/components/sections/NetworkStats";
import AISpeedSection from "@/components/sections/AISpeedSection";
import InvestmentPhilosophy from "@/components/sections/InvestmentPhilosophy";
import UnifiedFAQ from "@/components/shared/UnifiedFAQ";
import UnifiedCTA from "@/components/shared/UnifiedCTA";

export const metadata: Metadata = {
  title: "About ADIN - AI-Powered Venture Capital",
  description: "Learn about ADIN's approach to early-stage investing, combining AI efficiency with human judgment to back biotech, creative tools, and blockchain innovations.",
  keywords: "about adin, venture capital, AI investing, early stage, biotech funding",
};

export default function AboutPage() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Network Stats */}
      <NetworkStats />
      
      {/* AI Speed Section */}
      <AISpeedSection />
      
      {/* Investment Philosophy */}
      <InvestmentPhilosophy />
      
      {/* FAQ Section */}
      <UnifiedFAQ />
      
      {/* CTA Section */}
      <UnifiedCTA />
      
      {/* Live Reports Card - Floating Bottom Right */}
      <LiveReportsCard />
    </main>
  );
}
