const FundraisingEngine = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Not Just a Form.
            <br />
            A Fundraising <span className="text-purple-500">Engine</span>.
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Get real feedback, insights, and funding.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-12">
            {/* Deck Feedback */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Deck Feedback</h3>
              <h4 className="text-lg font-medium mb-3">Pitch deck breakdown.</h4>
              <p className="text-gray-600 mb-6 text-sm">
                Receive feedback on your deck&apos;s clarity, design, and investor-
                readiness. ADIN makes sure you&apos;re ready for the room.
              </p>
              
              {/* Deck Preview Card */}
              <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-2xl p-6 border border-pink-200">
                <div className="bg-white rounded-xl p-4 mb-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-6 h-6 bg-gray-200 rounded"></div>
                    <span className="text-sm font-medium">LaunchI - Seed Deck - v4.pdf</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="font-medium text-sm mb-1">LaunchI</div>
                      <div className="text-xs text-gray-600 mb-2">Scaling Clients and Revenue to $100M+</div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                          <span className="text-xs">ADIN Score</span>
                        </div>
                        <div className="text-xs font-medium">8.4/10</div>
                      </div>
                    </div>
                    
                    <div className="text-xs text-gray-600 space-y-1">
                      <div>• The logo from -$120k to -$410k moves your mind</div>
                      <div>• or a great set of product and marketing distribution without detailed justification.</div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button className="bg-green-500 text-white text-xs px-3 py-1 rounded-full">✓ Done</button>
                      <button className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">Read More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Smart Evaluation */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Smart Evaluation</h3>
              <h4 className="text-lg font-medium mb-3">ADIN will analyze & rate your idea.</h4>
              <p className="text-gray-600 mb-6 text-sm">
                Upload your deck, GTM, or app. ADIN returns key takeaways,
                market insights, and competitive advantages.
              </p>

              {/* Analysis Card */}
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 border border-purple-200">
                <div className="bg-white rounded-xl p-4">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full"></div>
                    <span className="font-medium">Analyzing Lane AI</span>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4">This app uses a few minutes. Just right.</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-sm">Go-to-market</span>
                      </div>
                      <span className="text-xs font-medium">✓</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-sm">Differentiated Technology</span>
                      </div>
                      <span className="text-xs font-medium">✓</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-sm">Product Market Fit Check</span>
                      </div>
                      <span className="text-xs font-medium">✓</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-sm">Reviewing competition</span>
                      </div>
                      <span className="text-xs font-medium">✓</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-3 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">75% Complete</span>
                      <span className="text-xs text-gray-500">22</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                    
                    <div className="mt-3 text-xs text-gray-600">
                      <div className="font-medium">Verified Sources</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Pitch Practice */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Pitch Practice</h3>
              <h4 className="text-lg font-medium mb-3">Practice with ADIN Live.</h4>
              <p className="text-gray-600 mb-6 text-sm">
                Prep for a live verbal chat interface. ADIN asks real investor-
                style questions so you can practice to sharpen your story.
              </p>

              {/* Chat Interface */}
              <div className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-2xl p-6 border border-green-200">
                <div className="bg-yellow-400 rounded-2xl p-6 relative">
                  <div className="absolute top-4 left-4 w-4 h-4 bg-black rounded-full"></div>
                  <div className="absolute top-4 right-4 w-4 h-4 bg-black rounded-full"></div>
                  <div className="flex justify-center space-x-2 mt-8">
                    <div className="w-4 h-4 bg-black rounded-full"></div>
                    <div className="w-4 h-4 bg-black rounded-full"></div>
                    <div className="w-4 h-4 bg-black rounded-full"></div>
                    <div className="w-4 h-4 bg-black rounded-full"></div>
                  </div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg">×</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-6">
                    <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Secure Funding */}
            <div>
              <h3 className="text-xl font-semibold mb-3">From Pitch to Capital</h3>
              <h4 className="text-lg font-medium mb-3">Secure funding.</h4>
              <p className="text-gray-600 mb-6 text-sm">
                Once approved, your startup enters ADIN&apos;s due room. Investors
                connect, you choose who signs the check.
              </p>

              {/* Investor Cards */}
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 border border-orange-200">
                <div className="space-y-4">
                  {/* Investor 1 */}
                  <div className="bg-white rounded-xl p-4 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                      <div>
                        <div className="font-medium text-sm">Ignore</div>
                        <div className="text-xs text-gray-500">$24m Investment</div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-xs text-gray-500 px-3 py-1">Ignore</button>
                      <button className="bg-black text-white text-xs px-3 py-1 rounded-full">View Offer</button>
                    </div>
                  </div>

                  {/* Investor 2 - ADIN */}
                  <div className="bg-white rounded-xl p-4 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold">A</span>
                      </div>
                      <div>
                        <div className="font-medium text-sm">ADIN</div>
                        <div className="text-xs text-gray-500">$12m Investment</div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-xs text-green-600">100% Commercial Score</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-xs text-green-600">Approved by ADIN Network</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-xs text-gray-500 px-3 py-1">Ignore</button>
                      <button className="bg-black text-white text-xs px-3 py-1 rounded-full">View Offer</button>
                    </div>
                  </div>

                  {/* Investor 3 */}
                  <div className="bg-white rounded-xl p-4 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">JD</span>
                      </div>
                      <div>
                        <div className="font-medium text-sm">Jasmin Delgado</div>
                        <div className="text-xs text-gray-500">Go Cyrus Ventures</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-green-600">Among your target investors, Low $</span>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-green-600">Invests in companies, Like $$$</span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-xs text-gray-500 px-3 py-1">Ignore</button>
                      <button className="bg-black text-white text-xs px-3 py-1 rounded-full">View Offer</button>
                    </div>
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

export default FundraisingEngine
