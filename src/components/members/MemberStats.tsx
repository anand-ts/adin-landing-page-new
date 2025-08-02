const MemberStats = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Join 700+ active members
            <br />
            earning with <span className="text-purple-600">ADIN</span>.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our members are making real money through deal submissions and network participation.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">700+</div>
            <div className="text-gray-600">Active Members</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">$2.4M</div>
            <div className="text-gray-600">Paid to Members</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">150+</div>
            <div className="text-gray-600">Deals Submitted</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">10%</div>
            <div className="text-gray-600">Average Carry</div>
          </div>
        </div>

        {/* Member Benefits */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <div className="w-6 h-6 bg-purple-600 rounded"></div>
            </div>
            <h3 className="text-xl font-bold mb-4">Submit Deals</h3>
            <p className="text-gray-600">
              Find promising startups and submit them for ADIN review. Earn 10% carry on successful investments.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
              <div className="w-6 h-6 bg-green-600 rounded"></div>
            </div>
            <h3 className="text-xl font-bold mb-4">Network Access</h3>
            <p className="text-gray-600">
              Connect with other investors, founders, and industry experts in our exclusive member network.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
              <div className="w-6 h-6 bg-orange-600 rounded"></div>
            </div>
            <h3 className="text-xl font-bold mb-4">AI Insights</h3>
            <p className="text-gray-600">
              Get access to ADIN&apos;s AI-powered deal analysis and market intelligence tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MemberStats
