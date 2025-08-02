import Link from 'next/link'
import Image from 'next/image'
import { IoPeople, IoHeart, IoLogoLinkedin, IoLogoTwitter, IoGlobe } from 'react-icons/io5'

const Footer = () => {
  return (
    <footer className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* ADIN for Section */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <IoPeople className="w-6 h-6 text-gray-600" />
              <h3 className="text-gray-900 font-semibold">ADIN for</h3>
            </div>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/investors"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  Investors
                </Link>
              </li>
              <li>
                <Link 
                  href="/members"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  Members
                </Link>
              </li>
              <li>
                <Link 
                  href="/founders"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  Founders
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <IoHeart className="w-6 h-6 text-gray-600" />
              <h3 className="text-gray-900 font-semibold">Resources</h3>
            </div>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/terms"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacy"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Empty column for spacing */}
          <div></div>

          {/* Right side - Tribute Labs & Social */}
          <div className="flex flex-col items-end">
            {/* How to Earn SVG */}
            <div className="mb-4">
              <Image
                src="/how_to_earn.svg"
                alt="How to Earn"
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </div>
            
            {/* Tribute Labs Attribution */}
            <div className="text-right mb-6">
              <p className="text-gray-600 text-sm">
                ADIN was designed and developed
                <br />
                by Tribute Labs in Brooklyn, NY.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <Link 
                href="https://x.com/tributelabsxyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <IoLogoTwitter className="w-6 h-6" />
              </Link>
              <Link 
                href="mailto:hello@tributelabs.xyz"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2025 Tribute Labs, Inc.
            </p>
            
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <Link 
                href="https://www.linkedin.com/company/tributelabs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <IoLogoLinkedin className="w-5 h-5" />
              </Link>
              <Link 
                href="https://tributelabs.xyz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <IoGlobe className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
