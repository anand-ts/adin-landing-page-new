import Image from 'next/image'

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

        {/* Features Layout */}
        <div className="space-y-12">
          {/* Top Row - Private Network (Full Width) */}
          <div className="flex justify-center">
            <div className="text-center max-w-2xl">
              <div className="mb-6 flex justify-center">
                <Image 
                  src="/private_network.svg" 
                  alt="Private Network"
                  width={500}
                  height={300}
                  className="w-full max-w-lg h-auto"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Access a hand-picked investor network.</h3>
              <p className="text-gray-600 leading-relaxed">
                Share insights and collaborate with other ADIN investors on emerging tech and trends.
              </p>
            </div>
          </div>

          {/* Bottom Row - AI Investor and Deal Flow Side by Side */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* AI Investor */}
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <Image 
                  src="/ai_investor.svg" 
                  alt="AI Investor"
                  width={400}
                  height={300}
                  className="w-full max-w-md h-auto"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">An LLM built for venture-grade signal.</h3>
              <p className="text-gray-600 leading-relaxed">
                ADIN&apos;s AI uncovers patterns in founders, markets, and deal flow helping you invest faster and smarter, grounded in data.
              </p>
            </div>

            {/* Deal Flow */}
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <Image 
                  src="/deal_flow.svg" 
                  alt="Deal Flow"
                  width={400}
                  height={300}
                  className="w-full max-w-md h-auto"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Tap into the collective edge.</h3>
              <p className="text-gray-600 leading-relaxed">
                The ADIN Member network surfaces deals from top founders, operators, and scouts you won&apos;t find anywhere else.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MachineIntelligence
