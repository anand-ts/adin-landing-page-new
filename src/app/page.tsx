import HeroSection from "@/components/hero/HeroSection";
import NetworkStats from "@/components/sections/NetworkStats";
import AISpeedSection from "@/components/sections/AISpeedSection";
import InvestmentPhilosophy from "@/components/sections/InvestmentPhilosophy";
import UnifiedFAQ from "@/components/shared/UnifiedFAQ";
import UnifiedCTA from "@/components/shared/UnifiedCTA";

export default function Home() {
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
    </main>
  );
}
