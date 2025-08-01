const FoundersHero = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Raise Smarter.
            <br />
            Get Backed by the Network.
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            Members earn a 10% carry on deals they submit that 
            ADIN approves and successfully closes.
          </p>

          <button className="bg-black hover:bg-gray-800 text-white font-medium px-8 py-4 rounded-full transition-all duration-200 inline-flex items-center space-x-2">
            <span>Apply Now</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default FoundersHero
