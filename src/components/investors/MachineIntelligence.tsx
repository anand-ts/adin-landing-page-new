const MachineIntelligence = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            The precision of a machine.
            <br />
            The instincts of a community.
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            ADIN combines machine intelligence with the power of an expert hive mind.
          </p>
        </div>

        {/* Two column content */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Private Network */}
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-500 mb-2">Private Network</h3>
              <h4 className="text-2xl font-bold mb-4">Access a hand-picked investor network.</h4>
              <p className="text-gray-600">
                Share insights and collaborate with other ADIN investors on emerging tech and trends.
              </p>
            </div>

            {/* Investor Network Avatars */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                {/* Top row */}
                <div className="flex space-x-4 mb-4 justify-center">
                  <div className="w-12 h-12 bg-green-400 rounded-full"></div>
                  <div className="w-12 h-12 bg-orange-400 rounded-full"></div>
                  <div className="w-12 h-12 bg-red-400 rounded-full"></div>
                  <div className="w-12 h-12 bg-green-500 rounded-full"></div>
                </div>
                
                {/* Middle row */}
                <div className="flex space-x-4 mb-4 justify-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-full"></div>
                  <div className="w-12 h-12 bg-orange-500 rounded-full"></div>
                  <div className="w-12 h-12 bg-red-500 rounded-full"></div>
                  <div className="w-12 h-12 bg-green-400 rounded-full"></div>
                </div>
                
                {/* Bottom row */}
                <div className="flex space-x-4 justify-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full"></div>
                  <div className="w-12 h-12 bg-purple-400 rounded-full"></div>
                  <div className="w-12 h-12 bg-orange-400 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* AI LLM Section */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-500 mb-2">AI Investor</h4>
              <h5 className="text-xl font-bold mb-4">An LLM built for venture-grade signal.</h5>
              <p className="text-gray-600 text-sm mb-6">
                ADIN&apos;s AI uncovers patterns in founders, markets, and deal flow helping you invest faster and smarter, grounded in data.
              </p>
            </div>
            
            {/* AI Agents Cards */}
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-6">
              <div className="space-y-3">
                {[
                  { name: 'The Network Hunter', color: 'bg-green-500' },
                  { name: 'The Tech Oracle', color: 'bg-orange-500' },
                  { name: 'The Monopoly Maker', color: 'bg-red-500' },
                  { name: 'The Unit Master', color: 'bg-purple-500' },
                  { name: 'The Value Guy', color: 'bg-orange-600' }
                ].map((agent, index) => (
                  <div key={index} className="bg-white rounded-lg px-4 py-3 flex items-center space-x-3 shadow-sm">
                    <div className={`w-3 h-3 ${agent.color} rounded-full`}></div>
                    <span className="text-sm font-medium text-gray-800">{agent.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Deal Flow */}
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-500 mb-2">Deal Flow</h3>
              <h4 className="text-2xl font-bold mb-4">Tap into the collective edge.</h4>
              <p className="text-gray-600">
                The ADIN Member network surfaces deals from top founders, operators, and scouts you won&apos;t find anywhere else.
              </p>
            </div>

            {/* Deal Card with Voting Interface */}
            <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-2xl p-6">
              <div className="bg-gray-900 rounded-2xl p-6 text-white relative overflow-hidden">
                {/* Lane AI Logo/Image placeholder */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center">
                  <div className="w-8 h-8 bg-blue-500 rounded"></div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <span className="text-black text-xs font-bold">L</span>
                    </div>
                    <span className="font-semibold">Lane AI</span>
                  </div>
                  
                  <p className="text-sm text-gray-300 mb-4">
                    AI-native tools that take teams from recruiting and onboarding insights to day-to-day grind management, all in one.
                  </p>
                  
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-2xl font-bold">99%</span>
                  </div>
                </div>
                
                <div className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium inline-block">
                  320 x 356 Hug
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MachineIntelligence
