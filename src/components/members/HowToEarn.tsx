import { IoHappyOutline } from 'react-icons/io5'

const HowToEarn = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              How to earn
              <br />
              your 10% carry.
            </h2>
            <p className="text-gray-600 mb-12">
              Simply - it&apos;s a business term for &quot;split-back&quot;.
            </p>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Find a promising deal.</h3>
                  <p className="text-gray-600 text-sm">
                    The best deals to look at is target AI and a strong 
                    commercial fit the team.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Submit the deal.</h3>
                  <p className="text-gray-600 text-sm">
                    Use our built in submission for the ADIN team if invested.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-2">ADIN gets to work.</h3>
                  <p className="text-gray-600 text-sm">
                    ADIN goes about following the complete application, closes 
                    diligence, forms opinions, closes deal when ready, all trust.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  4
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Successful exit.</h3>
                  <p className="text-gray-600 text-sm">
                    Down the road they get a successful exit or they 
                    fund sold to either a public or a cash. Online founders 
                    get paid out of returns.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  5
                </div>
                <div>
                  <h3 className="font-semibold mb-2">ADIN contracts.</h3>
                  <p className="text-gray-600 text-sm">
                    This pay your ADIN member returns, the ADIN team handling 
                    all the tax filings and level of financial diligence.
                  </p>
                </div>
              </div>

              {/* Additional Steps */}
              <div className="mt-12 p-6 bg-gray-50 rounded-xl">
                <h4 className="font-semibold mb-4">These steps by...</h4>
                <p className="text-sm text-gray-600 mb-4">
                  If the deal you submitted to the point they get a 
                  investment, is invested in your care and the net 
                  outcome, we want to get your take this.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                    <span>No fees</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                    <span>No commitment required</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                    <span>No legal constraints</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Icon Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-80 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-3xl flex items-center justify-center shadow-xl">
              <IoHappyOutline className="text-8xl text-yellow-700" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowToEarn
