const BeMoreThanMember = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Be more than a <span className="text-green-500">Member.</span>
            <br />
            Be a deal maker.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get rewarded for the deals you bring, with 10% carry and access to a private network.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Earn 10% Carry */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Earn 10% Carry</h3>
              <p className="text-gray-600 mb-6">
                Submit great biotech, medtech, deep tech, etc. you get a 
                10% carry on the deals you bring to the table. It&apos;s only.
              </p>
              
              {/* Credit Card Mockup */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 text-white relative overflow-hidden max-w-sm">
                <div className="absolute top-4 right-4 w-8 h-8 bg-yellow-400 rounded-full"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="text-sm opacity-75 mb-1">ADIN</div>
                  <div className="text-lg font-mono">•••• •••• •••• 1234</div>
                </div>
                <div className="absolute top-4 left-4 text-xs opacity-75">MEMBER</div>
              </div>
            </div>

            {/* Access Network */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Access Network</h3>
              <p className="text-gray-600 mb-6">
                Join the exclusive biotech members.
                All your online deals get access to top-tier connections, experienced investors, mentorship, and collaborative opportunities.
              </p>

              {/* Network Card */}
              <div className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl p-6 text-white max-w-sm">
                <div className="text-sm opacity-90 mb-2">ADIN Network</div>
                <div className="text-lg font-semibold mb-4">Exclusive Access</div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                  <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                  <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                  <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                  <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                  <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Get access to exclusive events */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Get access to exclusive events.</h3>
              <p className="text-gray-600 mb-6">
                Members get access to online and offline exclusive biotech events that drive insights into the next breakthroughs.
              </p>

              {/* Event Card */}
              <div className="bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl p-6 text-white max-w-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm opacity-90">EVENT</div>
                  <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                </div>
                <div className="text-lg font-semibold mb-2">Biotech Summit 2025</div>
                <div className="text-sm opacity-90">Exclusive Member Access</div>
              </div>
            </div>

            {/* Apply Now CTA */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-3">Ready to become a member?</h3>
              <p className="text-gray-600 mb-6">
                Join our community of deal makers and start earning carry on your submissions.
              </p>
              <button className="bg-black hover:bg-gray-800 text-white font-medium px-6 py-3 rounded-full transition-all duration-200 inline-flex items-center space-x-2">
                <span>Apply Now</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BeMoreThanMember
