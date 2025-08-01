const AISpeedSection = () => {
  const aiAgents = [
    {
      name: "The Value Sleuth",
      description: "Scanning opinions, not the movement.",
      icon: "🦅",
      color: "bg-orange-100"
    },
    {
      name: "The Tech Oracle",
      description: "Predicting tomorrow's breakthroughs, today.",
      icon: "🔴",
      color: "bg-red-100"
    },
    {
      name: "The Monopoly Maker",
      description: "Spotting the next market dominator.",
      icon: "💎",
      color: "bg-blue-100"
    },
    {
      name: "The Unit Master",
      description: "Numbers first, growth always.",
      icon: "📊",
      color: "bg-green-100"
    },
    {
      name: "The Eddie Guy",
      description: "Seeking those gems for lasting growth.",
      icon: "💜",
      color: "bg-purple-100"
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - AI Agents */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              AI speed.
              <br />
              Human judgment.
            </h2>
            
            <p className="text-gray-600 mb-8 text-lg">
              ADIN pairs expert operators with intelligent agents to handle the heavy lifting of venture workflows. Faster 
              analysis, tighter feedback loops, and more space for high-conviction bets.
            </p>

            {/* Powered by AI Agents */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Powered by</h3>
              <h4 className="text-xl font-bold mb-6">AI Agents</h4>
              
              <div className="space-y-4">
                {aiAgents.map((agent) => (
                  <div key={agent.name} className="flex items-center space-x-4">
                    <div className={`w-10 h-10 ${agent.color} rounded-lg flex items-center justify-center text-lg`}>
                      {agent.icon}
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">{agent.name}</h5>
                      <p className="text-sm text-gray-600">{agent.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tribute Labs Project */}
            <div className="flex items-start space-x-3 p-4 bg-white rounded-lg border">
              <div className="w-6 h-6 bg-pink-500 rounded flex items-center justify-center text-white text-xs font-bold">
                T
              </div>
              <div className="flex-1">
                <h5 className="font-semibold text-gray-900">A Tribute Labs Project</h5>
                <p className="text-sm text-gray-600 mt-1">
                  Tribute Labs has supported over 70 companies, empowering more than 300 projects through technical
                  guidance, architecture, and hyperion innovations. Our venture AI systems communicate these KPIs
                  providing the tools and support they need to scale with confidence.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Human Support */}
          <div>
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Supported by</h3>
              <h4 className="text-xl font-bold mb-6">Humans</h4>
            </div>

            {/* Team Member Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-green-200 via-blue-200 to-purple-200 rounded-2xl p-8 text-center">
                <div className="relative inline-block">
                  <div className="w-48 h-48 bg-gray-300 rounded-lg mx-auto mb-4 overflow-hidden">
                    {/* Placeholder for team member photo */}
                    <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center text-white text-2xl font-bold">
                      RM
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">
                    ✓
                  </div>
                </div>
                <h5 className="font-bold text-gray-900 text-lg">Ryan Hoover ✅</h5>
                <p className="text-sm text-gray-600">Founder & Product Expert</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AISpeedSection
