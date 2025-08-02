import { IoWalletOutline, IoPeopleOutline, IoTrendingUpOutline, IoStatsChartOutline, IoShieldCheckmarkOutline } from 'react-icons/io5'

const BeMoreThanMember = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Be more than a <span className="text-green-500">Member.</span>
            <br />
            Be a deal maker.
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Get rewarded for the deals you bring, with 10% carry and access to a private network.
          </p>
        </div>

        {/* Main Perks List */}
                  <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <IoWalletOutline className="text-blue-600 text-2xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-xl mb-2">10% Carry</h3>
                <p className="text-gray-600 leading-relaxed">Get a 10% carry on all deals you help source or evaluate. Your network and expertise directly contribute to your earnings.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <IoPeopleOutline className="text-blue-600 text-2xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-xl mb-2">Private Network Access</h3>
                <p className="text-gray-600 leading-relaxed">Join an exclusive community of high-net-worth individuals, entrepreneurs, and industry leaders.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <IoStatsChartOutline className="text-blue-600 text-2xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-xl mb-2">Exclusive Events</h3>
                <p className="text-gray-600 leading-relaxed">Attend private dinners, industry conferences, and networking events with other ADIN members.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <IoTrendingUpOutline className="text-blue-600 text-2xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-xl mb-2">Deal Flow Intelligence</h3>
                <p className="text-gray-600 leading-relaxed">Access our AI-powered deal sourcing platform that identifies the most promising investment opportunities.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <IoShieldCheckmarkOutline className="text-blue-600 text-2xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-xl mb-2">No Risk Investment</h3>
                <p className="text-gray-600 leading-relaxed">Invest alongside seasoned professionals with our rigorous due diligence process and risk mitigation strategies.</p>
              </div>
            </div>
          </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-200 inline-flex items-center space-x-2">
            <span>Apply to Become a Member</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default BeMoreThanMember
