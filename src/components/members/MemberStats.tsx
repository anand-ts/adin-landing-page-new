const MemberStats = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Become an ADIN Member.
            <br />
            Earn <span className="text-green-500">5x more.</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Compared to traditional Venture Capital social programs, ADIN&apos;s
            generous reward mechanics for value-add are one of the network.
          </p>
        </div>

        {/* Deal Calculator */}
        <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm mb-12">
          <h3 className="text-lg font-semibold mb-6">Deal Calculator</h3>
          <p className="text-sm text-gray-600 mb-8">
            Calculate how much you could earn based on a potential deal value.
          </p>

          <div className="text-center mb-8">
            <div className="text-4xl font-bold text-gray-900 mb-2">$54,000,000</div>
            <div className="text-sm text-gray-600">Exit Value</div>
          </div>

          {/* Slider */}
          <div className="relative mb-12">
            <div className="w-full h-2 bg-gradient-to-r from-green-400 via-yellow-400 to-red-400 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-purple-500 rounded-full border-2 border-white shadow-lg"></div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>$1M</span>
              <span>$100M</span>
              <span>$1000M</span>
            </div>
          </div>

          {/* Earnings Comparison */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Traditional VC */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-sm text-gray-600 mb-2">Traditional VC Earnings</div>
              <div className="text-2xl font-bold text-gray-900 mb-4">$780,000</div>
              <div className="text-sm text-gray-600 mb-4">Typically Earnings</div>
              
              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                  <span>Pool fee</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                  <span>Management fee</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                  <span>Carried interest</span>
                </div>
              </div>
            </div>

            {/* ADIN Earnings */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <div className="text-sm text-green-700 mb-2">ADIN Earnings</div>
              <div className="text-2xl font-bold text-green-900 mb-4">$3,900,00</div>
              <div className="text-sm text-green-700 mb-4">Member Deal Submission</div>
              
              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span>No Capital Risk Carried</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span>10% carry on deal</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span>Reward system</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MemberStats
