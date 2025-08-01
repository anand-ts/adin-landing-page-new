import HeroSection from "@/components/hero/HeroSection";
import LiveReports from "@/components/reports/LiveReports";

export default function Home() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Live Reports Sidebar */}
      <LiveReports />
    </main>
  );
}
