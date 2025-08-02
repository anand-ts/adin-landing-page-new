import HeroSection from "@/components/hero/HeroSection";
import LiveReports from "@/components/reports/LiveReports";
import NetworkStats from "@/components/sections/NetworkStats";
import AISpeedSection from "@/components/sections/AISpeedSection";
import InvestmentPhilosophy from "@/components/sections/InvestmentPhilosophy";
import UnifiedFAQ from "@/components/shared/UnifiedFAQ";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Live Reports Sidebar */}
      <LiveReports />
      
      {/* Network Stats */}
      <NetworkStats />
      
      {/* AI Speed Section */}
      <AISpeedSection />
      
      {/* Investment Philosophy */}
      <InvestmentPhilosophy />
      
      {/* FAQ Section */}
      <UnifiedFAQ />
      
      {/* CTA Section */}
      <CTASection />
    </main>
  );
}
