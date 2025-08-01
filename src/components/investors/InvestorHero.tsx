const InvestorHero = () => {
  return (
    <div>
      <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
        AI Will be the
        <br />
        Best Investor.
      </h1>
      
      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
        ADIN and its agents automate venture, from diligence to 
        making investment decisions, with deals sourced by 
        investors and the ADIN member network.
      </p>

      <button className="bg-black hover:bg-gray-800 text-white font-medium px-6 py-3 rounded-full transition-all duration-200 inline-flex items-center space-x-2">
        <span>Apply Now</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}

export default InvestorHero
