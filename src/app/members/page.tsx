import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Members - ADIN",
  description: "Join the ADIN community of investors, operators, and founders shaping the future of technology.",
};

export default function MembersPage() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-90" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 text-white">
              Members
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto">
              Join our global network of 1,2302 humans sharing insights and knowledge 
              as investors, operators, and industry experts.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Coming Soon</h2>
            <p className="text-gray-600 text-lg">
              This page is under development. Please check back soon for information 
              about joining our community and member benefits.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
