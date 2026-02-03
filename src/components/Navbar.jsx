import { useState } from 'react'
import aiLogo from '../assets/AI_logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-900 backdrop-blur-md bg-opacity-95 border-b border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 py-2">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2 text-white hover:text-blue-300 transition-colors">
              <img src={aiLogo} alt="AI Logo" className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-lg filter brightness-110" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('features')
              }}
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('how-it-works')
              }}
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              How It Works
            </a>
            <a
              href="#pricing"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('pricing')
              }}
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Pricing
            </a>
            <button
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('how-it-works')
              }}
              className="px-4 py-2 text-navy-900 bg-white rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              See How It Works
            </button>
            <button
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('pricing')
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Start Building Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3 mt-4">
              <a
                href="#features"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('features')
                }}
                className="text-gray-300 hover:text-white transition-colors px-2 py-1"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('how-it-works')
                }}
                className="text-gray-300 hover:text-white transition-colors px-2 py-1"
              >
                How It Works
              </a>
              <a
                href="#pricing"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('pricing')
                }}
                className="text-gray-300 hover:text-white transition-colors px-2 py-1"
              >
                Pricing
              </a>
              <button
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('pricing')
                }}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-left"
              >
                Start Building Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
