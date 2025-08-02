import { IoFlashOutline, IoRefreshOutline, IoWalletOutline, IoStatsChartOutline } from 'react-icons/io5'

const HowToEarn = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Become an ADIN Member.
            <br />
            Earn <span className="text-green-500">5x more</span>.
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Compared to traditional Venture Capital scout programs, ADIN&apos;s payouts reward members for being apart of the network.
          </p>
        </div>

        {/* Deal Calculator */}
        <div className="bg-white rounded-3xl p-8 mb-8 shadow-sm">
          <div className="mb-8">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Deal Calculator</h3>
            <p className="text-gray-600 text-sm">Adjust the exit value to see your potential earnings.</p>
          </div>

          <div className="text-center mb-8">
            <div className="text-5xl lg:text-6xl font-bold mb-2">$54,000,000</div>
            <div className="text-gray-500">Exit Value</div>
          </div>

          {/* Slider */}
          <div className="mb-12">
            <div className="relative">
              <div className="h-2 bg-gradient-to-r from-purple-200 to-orange-200 rounded-full">
                <div className="absolute top-1/2 transform -translate-y-1/2 right-1/4">
                  <div className="w-6 h-6 bg-purple-500 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>$1M</span>
                <span>$50M</span>
                <span>$100M</span>
              </div>
            </div>
          </div>

          {/* Comparison Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Industry Standard */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="text-sm text-gray-500 mb-2">The Industry Standard</div>
              <div className="text-4xl font-bold mb-2">$780,000</div>
              <div className="text-gray-600 mb-4">Standard Earnings</div>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                    <span>Limited Carry Share</span>
                  </div>
                  <span className="text-gray-500">1% of 2.5% → 2% Pool Profits</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                    <span>Scout Perks</span>
                  </div>
                  <span className="text-gray-500">Annual Profit Participation</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                    <span>Finder Bonus</span>
                  </div>
                  <span className="text-gray-500">Bonus of $500K or All Grants</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="inline-flex items-center space-x-1 px-3 py-1 bg-gray-200 text-gray-600 rounded-full text-xs">
                  <IoFlashOutline className="w-3 h-3" />
                  <span>Limited Upside Potential</span>
                </div>
              </div>
            </div>

            {/* ADIN Exclusive */}
            <div className="bg-gradient-to-br from-green-50 to-orange-50 rounded-2xl p-6 border border-green-200">
              <div className="text-sm text-green-600 font-medium mb-2">ADIN Exclusive</div>
              <div className="text-4xl font-bold mb-2">$3,900,000</div>
              <div className="text-gray-600 mb-4">Earnings with ADIN</div>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                    <span>Premium Carry Share</span>
                  </div>
                  <span className="text-gray-500">20% of 25% → 5% Pool Profits</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                    <span>True Partnership</span>
                  </div>
                  <span className="text-gray-500">Genuine partner in the upside</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                    <span>Full Support</span>
                  </div>
                  <span className="text-gray-500">Backed by ADIN&apos;s infrastructure</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-green-200 flex space-x-2">
                <div className="inline-flex items-center space-x-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                  <IoRefreshOutline className="w-3 h-3" />
                  <span>5x More Upside</span>
                </div>
                <div className="inline-flex items-center space-x-1 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs">
                  <IoWalletOutline className="w-3 h-3" />
                  <span>Full Support</span>
                </div>
                <div className="inline-flex items-center space-x-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                  <IoStatsChartOutline className="w-3 h-3" />
                  <span>Shared Success</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowToEarn
