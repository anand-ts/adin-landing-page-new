'use client'

import { IoStatsChartOutline, IoDocumentTextOutline, IoClipboardOutline, IoFolderOutline, IoTimeOutline, IoPersonOutline } from 'react-icons/io5'

const BeMoreThanInvestor = () => {
  return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left Column */}
          <div className="space-y-16">
            {/* Main Heading */}
            <div className="text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                Be more than an <span className="text-orange-400">Investor</span>.
                <br />
                Be a power player.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Accelerate your decision-making. Execute borderless investment opportunities.
              </p>
            </div>

            {/* Real-Time Voting */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Real-Time voting.</h3>
                <p className="text-gray-600 leading-relaxed">
                  Make investment decisions faster with transparent,
                  <br />
                  community-driven voting.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-medium">
                    L
                  </div>
                  <div>
                    <div className="font-medium">Lane AI</div>
                    <div className="text-sm text-gray-500">What&apos;s your take on this investment in Lane AI?</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <input type="radio" id="for" name="vote" className="text-green-500" />
                    <label htmlFor="for" className="text-sm font-medium">For</label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input type="radio" id="against" name="vote" />
                    <label htmlFor="against" className="text-sm font-medium">Against</label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input type="radio" id="abstain" name="vote" />
                    <label htmlFor="abstain" className="text-sm font-medium">Abstain</label>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit a deal */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Submit a deal, earn 10% carry.</h3>
                <p className="text-gray-600 leading-relaxed">
                  Refer promising companies with just a link or deck. ADIN handles the rest.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="lane-ai"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                    Submit
                  </button>
                </div>
                
                <div className="mt-6 text-xs text-gray-500">
                  Ask me anything about this
                </div>
                
                <div className="flex space-x-6 text-xs text-gray-400 mt-4">
                  <span className="flex items-center space-x-1">
                    <IoStatsChartOutline className="w-3 h-3" />
                    <span>Detailed</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <IoDocumentTextOutline className="w-3 h-3" />
                    <span>Memo</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <IoClipboardOutline className="w-3 h-3" />
                    <span>Pitch</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <IoFolderOutline className="w-3 h-3" />
                    <span>Google Docs</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Expansive due diligence */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Expansive due diligence.</h3>
                <p className="text-gray-600 leading-relaxed">
                  ADIN&apos;s agents sweat the details. Technical,
                  <br />
                  business, and beyond and in just 10 minutes.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-sm font-medium mb-3">Current Phase</div>
                <div className="text-xs text-gray-500 mb-4">Product, Technical, and Business Analysis</div>
                <div className="flex items-center text-xs text-gray-400">
                  <IoTimeOutline className="w-4 h-4 mr-2" />
                  <span>1 live round takes up to 10 minutes</span>
                </div>
              </div>
            </div>

            {/* Deal Closes */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Deal Closes</h3>
              <p className="text-gray-600 leading-relaxed">
                We handle the backend.
                <br />
                Diligence, deal structuring, check writing, and updates
                <br />
                all covered by Tribute Labs.
              </p>
            </div>
          </div>

          {/* Right Column - Inbox and Deals */}
          <div className="space-y-16">
            {/* Deals hit your inbox */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Deals hit your inbox.</h3>
                <p className="text-gray-600 leading-relaxed">
                  Stay in the loop with real-time deal alerts, term sheets, and wins.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-100 to-purple-100 rounded-2xl p-8">
                <div className="space-y-4">{/* Email notifications */}
                  {/* Email notifications */}
                  <div className="bg-white rounded-xl p-4 flex items-center space-x-3">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <IoPersonOutline className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">ADIN</div>
                      <div className="text-xs text-gray-600">We&apos;re in for Axiom!</div>
                      <div className="text-xs text-gray-500">We closed a $500K investment in Axiom Series A.</div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 flex items-center space-x-3">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <IoPersonOutline className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">ADIN</div>
                      <div className="text-xs text-gray-600">Boom. Hello Porto.</div>
                      <div className="text-xs text-gray-500">Great investments like this require high-</div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 flex items-center space-x-3">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <IoPersonOutline className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">ADIN</div>
                      <div className="text-xs text-gray-600">And another one!</div>
                      <div className="text-xs text-gray-500">We&apos;re going home those wins in Binni.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Deal Pipeline */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <h4 className="font-semibold mb-6 text-lg">Active Pipeline</h4>
              <div className="space-y-4">
                {[
                  { name: 'Wiring $150,000', status: 'Complete', color: 'green' },
                  { name: 'Cactus Counter Signs', status: 'Complete', color: 'green' },
                  { name: 'TL Signs Terms Sheet', status: 'Complete', color: 'green' },
                  { name: 'Terms Sheet Reviewed', status: 'Complete', color: 'green' },
                  { name: 'Alignment Call', status: 'Complete', color: 'green' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-2">
                    <span className="text-sm font-medium">{item.name}</span>
                    <div className="flex items-center space-x-3">
                      <span className="text-xs text-gray-500 font-medium">{item.status}</span>
                      <div className={`w-3 h-3 rounded-full ${item.color === 'green' ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BeMoreThanInvestor
