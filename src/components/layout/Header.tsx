import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="w-full bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/adin_wordmark.svg"
                alt="Adin"
                width={80}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/about" 
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link 
              href="/investors" 
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              Investors
            </Link>
            <Link 
              href="/members" 
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              Members
            </Link>
            <Link 
              href="/founders" 
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              Founders
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="Open menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
