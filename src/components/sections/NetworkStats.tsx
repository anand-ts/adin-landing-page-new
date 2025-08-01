const NetworkStats = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Network Stats */}
        <div className="mb-16">
          <p className="text-lg text-gray-600 leading-relaxed">
            ADIN is a global network of{" "}
            <span className="font-bold text-gray-900">1,2302 humans</span>
            <br />
            sharing insights and knowledge as Investors,
            <br />
            Members, & Founders.
          </p>
          
          {/* Progress dots */}
          <div className="flex justify-center items-center space-x-2 mt-8">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NetworkStats
