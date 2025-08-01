const InvestmentPhilosophy = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Only Early.
              <br />
              Always Human.
            </h2>
            
            <p className="text-gray-600 text-lg mb-12">
              ADIN backs bold ideas at the beginning, where conviction matters most. We invest exclusively at the 
              earliest stages, combining operator insight and intelligent systems to move faster, with greater focus.
            </p>

            {/* Investment Categories */}
            <div className="space-y-8">
              {/* Pre-Seed */}
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-sm font-semibold text-gray-500">Pre-Seed</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Backed by Belief</h3>
                <p className="text-gray-600">
                  At pre-seed, conviction outweighs traction. ADIN provides 
                  operational capital and strategic support to founders with 
                  bold visions that drive long-term thinking.
                </p>
              </div>

              {/* Seed */}
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-sm font-semibold text-gray-500">Seed</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Culture-First Capital</h3>
                <p className="text-gray-600">
                  Seed-stage founders shape ADIN&apos;s future. Our community 
                  brings cultural capital and idea flow, helping us invest in 
                  founders that align with our collective vision.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="space-y-8">
              {/* Series A */}
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-sm font-semibold text-gray-500">A Round</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Early, Not Late</h3>
                <p className="text-gray-600">
                  We don&apos;t chase momentum—we help create it. ADIN&apos;s A-round 
                  capital supports early-stage execution and sharp execution, before the 
                  world of growth-minded hype.
                </p>
              </div>

              {/* Statistics or additional content could go here */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h4 className="text-lg font-bold mb-4">Our Focus Areas</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-gray-700">Biotech & Life Sciences</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-gray-700">Creative Tools & Media</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-gray-700">Blockchain & Web3</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-gray-700">AI & Machine Learning</span>
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

export default InvestmentPhilosophy
