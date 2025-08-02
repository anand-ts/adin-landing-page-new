const MembersHero = () => {
  return (
    <section className="pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Submit Deals,
              <br />
              Earn Carry.
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-md">
              Members earn a 10% carry on deals they submit that 
              ADIN approves and successfully closes.
            </p>

            <button className="bg-black hover:bg-gray-800 text-white font-medium px-6 py-3 rounded-full transition-all duration-200 inline-flex items-center space-x-2">
              <span>Apply Now</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Right Column - Video Player */}
          <div className="flex justify-center lg:justify-end">
            <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm max-w-md w-full">
              {/* Video Player Container */}
              <div className="relative bg-gray-100 rounded-xl overflow-hidden">
                <div className="aspect-video flex items-center justify-center">
                  {/* Play Button */}
                  <button className="w-16 h-16 bg-orange-400 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors group">
                    <svg className="w-6 h-6 text-white ml-1 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MembersHero
