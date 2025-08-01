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

        {/* Colorful dots visualization */}
        <div className="flex justify-center mb-16">
          <div className="grid grid-cols-5 gap-4">
            {/* Row 1 */}
            <div className="w-16 h-16 bg-green-400 rounded-full"></div>
            <div className="w-16 h-16 bg-orange-400 rounded-full"></div>
            <div className="w-16 h-16 bg-red-400 rounded-full"></div>
            <div className="w-16 h-16 bg-transparent"></div>
            <div className="w-16 h-16 bg-transparent"></div>
            
            {/* Row 2 */}
            <div className="w-16 h-16 bg-purple-500 rounded-full"></div>
            <div className="w-16 h-16 bg-orange-500 rounded-full"></div>
            <div className="w-16 h-16 bg-red-500 rounded-full"></div>
            <div className="w-16 h-16 bg-transparent"></div>
            <div className="w-16 h-16 bg-transparent"></div>
            
            {/* Row 3 */}
            <div className="w-16 h-16 bg-green-500 rounded-full"></div>
            <div className="w-16 h-16 bg-purple-400 rounded-full"></div>
            <div className="w-16 h-16 bg-transparent"></div>
            <div className="w-16 h-16 bg-transparent"></div>
            <div className="w-16 h-16 bg-transparent"></div>
          </div>
        </div>

        {/* Two column content */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Private Network */}
          <div>
            <h3 className="text-xl font-bold mb-4">Private Network</h3>
            <h4 className="text-lg font-semibold mb-4">Access a hand-picked investor network.</h4>
            <p className="text-gray-600 mb-8">
              Our network is a collection of our vetted investors on
              <br />
              the collective. With 700+ members and growing.
            </p>

            {/* AI Agents List */}
            <div className="bg-green-100 rounded-2xl p-6">
              <h5 className="font-semibold mb-4">An LLM built for venture-grade signal.</h5>
              <p className="text-sm text-gray-600 mb-6">
                Our custom training systems to leverage, compare, and read
                <br />
                bias feeding any hyper-linear and event-info grounded in
                <br />
                financial datasets.
              </p>
              
              <div className="space-y-3">
                {[
                  { name: 'The Network Hunter', color: 'bg-green-500' },
                  { name: 'The Tech Oracle', color: 'bg-orange-500' },
                  { name: 'The Monopoly Maker', color: 'bg-red-500' },
                  { name: 'The Unit Master', color: 'bg-blue-500' },
                  { name: 'The Value Guy', color: 'bg-purple-500' }
                ].map((agent, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-4 h-4 ${agent.color} rounded-full`}></div>
                    <span className="text-sm font-medium">{agent.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Collective Edge */}
          <div>
            <h3 className="text-xl font-bold mb-4">Collective Edge</h3>
            <h4 className="text-lg font-semibold mb-4">Tap into the collective edge.</h4>
            <p className="text-gray-600 mb-8">
              Our key ADIN human network markets about best live
              <br />
              founders, operators, and scouts you aren&apos;t, find anywhere
              <br />
              else.
            </p>

            {/* Voting Interface */}
            <div className="bg-orange-100 rounded-2xl p-6">
              <div className="bg-black rounded-lg p-4 text-white relative">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <span className="text-black text-xs font-bold">L</span>
                  </div>
                  <span className="text-sm">Lane AI</span>
                </div>
                
                <div className="text-xs text-gray-300 mb-3">
                  Is it early enough?
                </div>
                
                <div className="bg-gray-800 rounded p-2 text-xs mb-3">
                  Pre
                </div>
                
                <div className="flex justify-between items-center text-xs">
                  <span>99%</span>
                  <div className="bg-yellow-400 text-black px-2 py-1 rounded text-xs font-bold">
                    ✓
                  </div>
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
