'use client'

import Image from 'next/image'

const BeMoreThanInvestor = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Be more than an <span className="text-orange-400">Investor</span>.
            <br />
            Be a power player.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Accelerate your decision-making. Execute borderless investment opportunities.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Real-Time Voting */}
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <Image 
                src="/inv_1.svg" 
                alt="Real-Time Voting"
                width={300}
                height={250}
                className="w-full max-w-sm h-auto"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">Real-Time voting.</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Make investment decisions faster with transparent, community-driven voting.
            </p>
          </div>

          {/* Submit a Deal */}
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <Image 
                src="/inv_2.svg" 
                alt="Submit a Deal, Earn 10% Carry"
                width={300}
                height={250}
                className="w-full max-w-sm h-auto"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">Submit a deal, earn 10% carry.</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Refer promising companies with just a link or deck. ADIN handles the rest.
            </p>
          </div>

          {/* Expansive Due Diligence */}
          <div className="text-center md:col-span-2 lg:col-span-1">
            <div className="mb-6 flex justify-center">
              <Image 
                src="/inv_3.svg" 
                alt="Expansive Due Diligence"
                width={300}
                height={250}
                className="w-full max-w-sm h-auto"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">Expansive due diligence.</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              ADIN&apos;s agents sweat the details. Technical, business, and beyond in just 10 minutes.
            </p>
          </div>
        </div>

        {/* Bottom Row - Centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Deals Hit Your Inbox */}
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <Image 
                src="/inv_4.svg" 
                alt="Deals Hit Your Inbox"
                width={300}
                height={250}
                className="w-full max-w-sm h-auto"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">Deals hit your inbox.</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Stay in the loop with real-time deal alerts, term sheets, and wins.
            </p>
          </div>

          {/* Deal Closes */}
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <Image 
                src="/inv_5.svg" 
                alt="Deal Closes"
                width={300}
                height={250}
                className="w-full max-w-sm h-auto"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">Deal closes.</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We handle the backend. Diligence, deal structuring, check writing, and updates all covered.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BeMoreThanInvestor
