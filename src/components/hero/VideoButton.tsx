const VideoButton = () => {
  return (
    <button className="inline-flex items-center space-x-2 bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-6 py-3 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg">
      <svg 
        className="w-5 h-5" 
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path 
          fillRule="evenodd" 
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" 
          clipRule="evenodd" 
        />
      </svg>
      <span>Watch the Video</span>
    </button>
  )
}

export default VideoButton
