import Image from 'next/image'

const FundraisingEngine = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Not Just a Form.
            <br />
            A Fundraising <span className="text-purple-500">Engine</span>.
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Get real feedback, insights, and funding.
          </p>
        </div>

        {/* 2x2 Grid of Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Deck Feedback */}
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <Image 
                src="/Frame 10122870 (1).svg" 
                alt="Deck Feedback"
                width={400}
                height={300}
                className="w-full max-w-md h-auto"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">Deck Feedback</h3>
            <h4 className="text-lg font-medium mb-3">Pitch deck breakdown.</h4>
            <p className="text-gray-600 text-sm">
              Receive feedback on your deck&apos;s clarity, design, and investor-
              readiness. ADIN makes sure you&apos;re ready for the room.
            </p>
          </div>

          {/* Pitch Practice */}
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <Image 
                src="/Frame 10122870.svg" 
                alt="Pitch Practice"
                width={400}
                height={300}
                className="w-full max-w-md h-auto"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">Pitch Practice</h3>
            <h4 className="text-lg font-medium mb-3">Practice with ADIN Live.</h4>
            <p className="text-gray-600 text-sm">
              Prep for a live verbal chat interface. ADIN asks real investor-
              style questions so you can practice to sharpen your story.
            </p>
          </div>

          {/* Smart Evaluation */}
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <Image 
                src="/Frame 10122870 (3).svg" 
                alt="Smart Evaluation"
                width={400}
                height={300}
                className="w-full max-w-md h-auto"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">Smart Evaluation</h3>
            <h4 className="text-lg font-medium mb-3">ADIN will analyze & rate your idea.</h4>
            <p className="text-gray-600 text-sm">
              Upload your deck, GTM, or app. ADIN returns key takeaways,
              market insights, and competitive advantages.
            </p>
          </div>

          {/* From Pitch to Capital */}
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <Image 
                src="/Frame 10122870 (2).svg" 
                alt="From Pitch to Capital"
                width={400}
                height={300}
                className="w-full max-w-md h-auto"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">From Pitch to Capital</h3>
            <h4 className="text-lg font-medium mb-3">Secure funding.</h4>
            <p className="text-gray-600 text-sm">
              Once approved, your startup enters ADIN&apos;s due room. Investors
              connect, you choose who signs the check.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FundraisingEngine
