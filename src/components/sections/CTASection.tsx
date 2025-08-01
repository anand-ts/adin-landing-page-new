const CTASection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-8">
          Invest with ADIN.
        </h2>
        
        <p className="text-gray-600 text-lg mb-12">
          Join our network for Tribute Labs Members.
        </p>

        <button className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-200 hover:scale-105 hover:shadow-lg">
          Get Started →
        </button>

        <p className="text-sm text-gray-500 mt-8">
          Only for qualified limited partners and accredited investors.
        </p>
      </div>
    </section>
  )
}

export default CTASection
