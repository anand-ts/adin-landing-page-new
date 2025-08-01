import VideoButton from './VideoButton'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-bg opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-white/20 block">Investing in early</span>
            <span className="text-white/20 block">stage ideas building for</span>
            <span className="text-white/20 inline">creative tools, </span>
            <span className="text-white/20 inline">blockchain, </span>
            <span className="inline bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent font-extrabold">
              biotech
            </span>
            <span className="text-white/20 inline">, </span>
            <span className="text-white/20 inline">creative tools, and</span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            ADIN backs teams building the future of the internet
            <br />
            focusing on Seed Rounds to Series-A.
          </p>

          {/* CTA Button */}
          <VideoButton />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-xl" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-400/10 rounded-full blur-2xl" />
    </section>
  )
}

export default HeroSection
