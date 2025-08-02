'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { NAV_ITEMS } from '@/lib/constants'

const Header = () => {
  return (
    <header className="w-full bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Link href="/" className="flex items-center space-x-4">
              <Image
                src="/adin-logo-56x56.webp"
                alt="ADIN Logo"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <Image
                src="/adin_wordmark.svg"
                alt="ADIN"
                width={100}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </motion.div>

          {/* Navigation */}
          <motion.nav 
            className="hidden md:flex items-center space-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {NAV_ITEMS.map((item) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <Link 
                  href={item.href} 
                  className="text-base font-medium text-gray-600 hover:text-gray-900 transition-colors duration-300 px-6 py-3 rounded-full hover:bg-gray-50"
                >
                  <span>{item.title}</span>
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          {/* Auth Buttons */}
          <motion.div 
            className="flex items-center space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Link
              href="/login"
              className="text-base font-medium text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="bg-orange-500 hover:bg-orange-600 text-white text-base font-medium px-8 py-3 rounded-full transition-colors duration-300"
            >
              Sign Up
            </Link>
          </motion.div>

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
