import Image from 'next/image'

const HowToEarnCarry = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              How to earn
              <br />
              your 10% carry.
            </h2>
            <p className="text-gray-600 mb-8">
              &quot;Carry&quot; is a boomer term for &quot;cash back&quot;.
            </p>

            {/* Steps */}
            <div className="space-y-8">
              {/* Step 1 */}
              <div>
                <div className="text-sm font-semibold text-gray-500 mb-2">Step 1</div>
                <h3 className="text-xl font-semibold mb-2">Spot something great.</h3>
                <p className="text-gray-600 text-sm">
                  You meet a founder or discover a startup you believe in.
                  You don&apos;t need to be an expert or just have a strong
                  conviction in the team.
                </p>
              </div>

              {/* Step 2 */}
              <div>
                <div className="text-sm font-semibold text-gray-500 mb-2">Step 2</div>
                <h3 className="text-xl font-semibold mb-2">Share the deal.</h3>
                <p className="text-gray-600 text-sm">
                  Upload the link or deck. We&apos;ll ask a few quick questions
                  (and confirm you can intro the founder if needed).
                </p>
              </div>

              {/* Step 3 */}
              <div>
                <div className="text-sm font-semibold text-gray-500 mb-2">Step 3</div>
                <h3 className="text-xl font-semibold mb-2">ADIN gets to work.</h3>
                <p className="text-gray-600 text-sm">
                  Our AI dives in—analyzing the market, product, team,
                  and traction. You&apos;ll see how your deal stacks up in real
                  time.
                </p>
              </div>

              {/* Step 4 */}
              <div>
                <div className="text-sm font-semibold text-gray-500 mb-2">Step 4</div>
                <h3 className="text-xl font-semibold mb-2">Investors vote.</h3>
                <p className="text-gray-600 text-sm">
                  Our network of sophisticated members review the deal
                  and cast a simple yes or no vote. It keeps the process
                  transparent and democratic.
                </p>
              </div>

              {/* Step 5 */}
              <div>
                <div className="text-sm font-semibold text-gray-500 mb-2">Step 5</div>
                <h3 className="text-xl font-semibold mb-2">ADIN connects.</h3>
                <p className="text-gray-600 text-sm">
                  If the deal shows strong signals, the ADIN team reaches
                  out to the founder and kicks off formal diligence.
                </p>
              </div>

              {/* Step 6 */}
              <div>
                <div className="text-sm font-semibold text-gray-500 mb-2">Step 6</div>
                <h3 className="text-xl font-semibold mb-2">Times goes by...</h3>
                <p className="text-gray-600 text-sm">
                  If the deal you submitted has an exit event (like an
                  acquisition or IPO), you get 10% of the return. Payouts
                  are made in USDC or by mailed check.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center lg:justify-end">
            <Image 
              src="/how_to_earn.svg" 
              alt="How to earn your carry"
              width={400}
              height={500}
              className="w-full max-w-md h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowToEarnCarry
