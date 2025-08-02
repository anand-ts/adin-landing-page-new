'use client'

import { useState } from 'react'
import { IoThumbsUpOutline, IoThumbsDownOutline, IoMailOutline, IoFolderOutline, IoTimeOutline } from 'react-icons/io5'

const BeMoreThanInvestor = () => {
  const [email, setEmail] = useState('')

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Be more than an <span className="text-orange-500">investor</span>.
              <br />
              Be a power player.
            </h2>
            <p className="text-gray-600 text-lg mb-12">
              Accelerate your decision-making. Execute cornerstone investment opportunities.
            </p>

            {/* Real-Time Voting */}
            <div className="mb-8">
              <h3 className="font-semibold mb-4">Real-Time voting.</h3>
              <p className="text-gray-600 text-sm mb-4">
                Voice your opinion and share with transparent,
                <br />
                data-driven community decisions.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">L</span>
                  </div>
                  <span className="text-sm">Lane AI</span>
                  <span className="text-xs text-gray-500">How&apos;s your rate in angel? Late 50%</span>
                </div>
                
                <div className="bg-gray-100 rounded-lg p-3 text-sm text-gray-600">
                  My take
                </div>
                
                <div className="flex space-x-2">
                  <button className="px-3 py-1 bg-gray-100 rounded text-sm flex items-center space-x-1">
                    <IoThumbsUpOutline className="w-4 h-4" />
                    <span>Agreed</span>
                  </button>
                  <button className="px-3 py-1 bg-gray-100 rounded text-sm flex items-center space-x-1">
                    <IoThumbsDownOutline className="w-4 h-4" />
                    <span>Dissent</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Expansive due diligence */}
            <div className="mb-8">
              <h3 className="font-semibold mb-4">Expansive due diligence.</h3>
              <p className="text-gray-600 text-sm mb-4">
                ADIN&apos;s agents build risk reports, technical
                <br />
                feasibility, and competitive landscaping, ensuring
                <br />
                quality and informed decision-making.
              </p>
              
              <div className="space-y-2">
                <div className="text-sm">Financial, Technical, and Business Analysis</div>
                <div className="flex items-center text-xs text-gray-500">
                  <span>⏱</span>
                  <span className="ml-1">4s under time of 5.9 Minutes</span>
                </div>
              </div>
            </div>

            {/* We handle the backend */}
            <div>
              <h3 className="font-semibold mb-4">We handle the backend.</h3>
              <p className="text-gray-600 text-sm">
                Focus on deal-making. Leave all the leg work
                <br />
                management to ADIN and its agents
                <br />
                as sourced by Tribute Labs.
              </p>
            </div>
          </div>

          {/* Right Column - Forms and Features */}
          <div>
            {/* Submit a deal form */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="font-semibold mb-4">Submit a deal, with 50% carry</h3>
              <p className="text-gray-600 text-sm mb-4">
                Everything connected with one carry at deals. 50% carry going directly.
              </p>
              
              <div className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="deal info"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                
                <div className="flex items-center space-x-2">
                  <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm">
                    Submit
                  </button>
                </div>
                
                <div className="flex space-x-4 text-xs text-gray-500">
                  <span>✓ Venture</span>
                  <span>✓ Veto</span>
                  <span>✓ Exit</span>
                  <span>✓ Preferred</span>
                </div>
              </div>
            </div>

            {/* Deals hit your inbox */}
            <div className="mb-8">
              <h3 className="font-semibold mb-4">Deals hit your inbox.</h3>
              <p className="text-gray-600 text-sm mb-4">
                Stay in the loop with real-time alerts, term sheets, and live
                <br />
                updates on your investments.
              </p>
              
              <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <IoMailOutline className="w-4 h-4 text-gray-600" />
                    <IoFolderOutline className="w-4 h-4 text-gray-600" />
                    <IoTimeOutline className="w-4 h-4 text-gray-600" />
                  </div>
                  <span className="text-gray-500">Wed Jun 19 8</span>
                </div>
              </div>
            </div>

            {/* ADIN sections with progress bars */}
            <div className="space-y-4">
              {[
                { name: 'ADIN', role: 'Deal for AI agents', progress: 100 },
                { name: 'ADIN', role: 'Machine Systems', progress: 85 },
                { name: 'ADIN', role: 'Intelligence Development', progress: 92 }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold">
                    A
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">{item.name}</div>
                    <div className="text-xs text-gray-500">{item.role}</div>
                  </div>
                  <div className="w-16 h-2 bg-gray-200 rounded-full">
                    <div 
                      className="h-2 bg-green-500 rounded-full" 
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Additional features list */}
            <div className="mt-8 space-y-2">
              {[
                'Voting and Q&A',
                'Active Capital Raise',
                'Venture',
                'TL SpaceX Term Sheet',
                'Terms Shared Document',
                'Paperwork Left'
              ].map((feature, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <span>{feature}</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BeMoreThanInvestor
