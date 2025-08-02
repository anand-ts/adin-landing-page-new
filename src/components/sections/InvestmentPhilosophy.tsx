const InvestmentPhilosophy = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Only Early.
            <br />
            Always Human.
          </h2>
          
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-4xl">
            ADIN backs bold ideas at the beginning, where conviction matters most. We invest exclusively at the 
            earliest stages, combining operator insight and intelligent systems to move faster, with greater focus.
          </p>
        </div>

        {/* Investment Stages Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Pre-Seed */}
          <div className="border border-gray-200 rounded-2xl p-8 bg-white shadow-sm">
            <div className="mb-4">
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Pre-Seed</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Backed by Belief</h3>
            <p className="text-gray-600 leading-relaxed">
              At pre-seed, conviction outweighs traction. ADIN provides governance capital and strategic support to founders with 
              deep alignment and long-term thinking.
            </p>
          </div>

          {/* Seed */}
          <div className="border border-gray-200 rounded-2xl p-8 bg-white shadow-sm">
            <div className="mb-4">
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Seed</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Culture-First Capital</h3>
            <p className="text-gray-600 leading-relaxed">
              Seed-stage founders shape ADIN&apos;s future. Our community brings cultural context and dealflow, helping us invest in 
              projects that align with our collective values.
            </p>
          </div>

          {/* A Round - Full Width */}
          <div className="md:col-span-2 border border-gray-200 rounded-2xl p-8 bg-white shadow-sm">
            <div className="mb-4">
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">A Round</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Early, Not Late</h3>
            <p className="text-gray-600 leading-relaxed">
              We don&apos;t chase momentum—we help create it. ADIN&apos;s A-round capital supports early traction and sharp execution, before the 
              noise of growth-stage hype.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InvestmentPhilosophy
