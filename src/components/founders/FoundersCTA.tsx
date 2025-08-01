const FoundersCTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-purple-50 via-white to-orange-50 rounded-3xl p-12 border border-gray-200 mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            You built the company.
            <br />
            Let ADIN fund it.
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Early access for Tribute Labs Members.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-4 rounded-full transition-all duration-200 inline-flex items-center space-x-2 text-lg">
            <span>Get Started</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-500 mb-2">Not a Tribute Labs Member?</p>
          <button className="text-purple-600 hover:text-purple-700 font-medium text-sm underline">
            Join the Waitlist →
          </button>
        </div>
      </div>
    </section>
  )
}

export default FoundersCTA
