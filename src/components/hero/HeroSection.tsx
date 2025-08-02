import VideoButton from './VideoButton'
import AnimatedText from './AnimatedText'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-gray-900 block">Investing in early</span>
            <span className="text-gray-900 block">stage ideas building for</span>
            <div className="block">
              <AnimatedText />
              <span className="text-gray-900">.</span>
            </div>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            ADIN backs teams building the future of the internet
            <br />
            focusing on Seed Rounds to Series-A.
          </p>

          {/* CTA Button */}
          <VideoButton />
        </div>
      </div>

      {/* Bottom Gradient Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-200 via-pink-200 to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-r from-green-200 via-yellow-200 to-purple-200 opacity-30" />
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-8 h-8 border border-gray-400 rounded-full flex items-center justify-center animate-bounce">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
