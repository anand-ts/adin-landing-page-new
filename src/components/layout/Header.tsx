import Image from 'next/image'
import Link from 'next/link'
import { NAV_ITEMS } from '@/lib/constants'

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/adin-logo-56x56.webp"
                alt="ADIN Logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <Image
                src="/adin_wordmark.svg"
                alt="ADIN"
                width={80}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors px-4 py-2 rounded-full hover:bg-gray-100"
              >
                <span className="flex items-center space-x-2">
                  {item.title === "About" && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 512 512">
                      <circle cx="256" cy="256" r="48"/>
                      <circle cx="256" cy="416" r="48"/>
                      <path d="m256 56-56 56h56v192h-56l56 56h112l-56-56h-56V112h56L256 56z"/>
                    </svg>
                  )}
                  {item.title === "Investors" && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 512 512">
                      <path d="M32 192a64 64 0 0064-64V64h64v64a64 64 0 00128 0V64h64v64a64 64 0 0064 64 64 64 0 0064 64v192a64 64 0 01-64 64H96a64 64 0 01-64-64V256a64 64 0 0164-64z"/>
                    </svg>
                  )}
                  {item.title === "Members" && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 512 512">
                      <path d="M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72z"/>
                      <path d="M336 304c-65.17 0-127.84 32.37-143.54 95.41-2.08 8.34 3.15 16.59 11.72 16.59h263.64c8.57 0 13.8-8.25 11.72-16.59C463.84 336.37 401.17 304 336 304z"/>
                      <path d="M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94z"/>
                      <path d="M206 306c-18.05-8.27-37.93-11.45-59-11.45-52 0-102.1 25.85-114.65 76.2-1.65 6.66 2.53 13.25 9.37 13.25H154"/>
                    </svg>
                  )}
                  {item.title === "Founders" && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 512 512">
                      <path d="M305.77 307.64l-6.84-28.69c-1.53-6.41-7.77-10.95-14.38-10.95H227.45c-6.61 0-12.85 4.54-14.38 10.95l-6.84 28.69C158.51 330.54 128 375.13 128 427v53c0 8.84 7.16 16 16 16h224c8.84 0 16-7.16 16-16v-53c0-51.87-30.51-96.46-78.23-119.36z"/>
                      <path d="M256 144c48.6 0 88-39.4 88-88S304.6-32 256-32s-88 39.4-88 88 39.4 88 88 88z"/>
                    </svg>
                  )}
                  <span>{item.title}</span>
                </span>
              </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-6 py-2 rounded-full transition-colors"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-600 hover:text-gray-900 transition-colors"
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
