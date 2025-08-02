import Image from 'next/image'

const BeMoreThanMember = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Be more than a <span className="text-green-500">Member.</span>
            <br />
            Be a deal maker.
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Get rewarded for the deals you bring, with 10% carry and access to a private network.
          </p>
        </div>

        {/* Top Row - Carry and Private Network Side by Side */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* 10% Carry */}
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <Image 
                src="/earn_carry.svg" 
                alt="Earn 10% Carry"
                width={300}
                height={200}
                className="w-full max-w-sm h-auto"
              />
            </div>
            <h3 className="font-semibold text-2xl mb-4">10% Carry</h3>
            <p className="text-gray-600 leading-relaxed">
              Get a 10% carry on all deals you help source or evaluate. Your network and expertise directly contribute to your earnings.
            </p>
          </div>

          {/* Private Network Access */}
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <Image 
                src="/private_network.svg" 
                alt="Private Network Access"
                width={300}
                height={200}
                className="w-full max-w-sm h-auto"
              />
            </div>
            <h3 className="font-semibold text-2xl mb-4">Private Network Access</h3>
            <p className="text-gray-600 leading-relaxed">
              Join an exclusive community of high-net-worth individuals, entrepreneurs, and industry leaders.
            </p>
          </div>
        </div>

        {/* Bottom Row - Exclusive Access Wide */}
        <div className="mb-12">
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <Image 
                src="/Exclusive Access Image.svg" 
                alt="Exclusive Access"
                width={600}
                height={300}
                className="w-full max-w-2xl h-auto"
              />
            </div>
            <h3 className="font-semibold text-2xl mb-4">Exclusive Access</h3>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Access our AI-powered deal sourcing platform, attend private events, and invest alongside seasoned professionals with our rigorous due diligence process.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BeMoreThanMember
