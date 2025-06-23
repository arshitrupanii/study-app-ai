"use client"
import { useState } from 'react';
import { SignInButton, SignUpButton, UserButton, useUser } from '@clerk/nextjs';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isSignedIn } = useUser();

  return (
    <header className="fixed top-5 left-0 right-0 rounded-3xl mx-auto bg-gray-900/95 backdrop-blur-sm border border-gray-800/50 z-50 w-fit shadow-2xl shadow-purple-500/10 transition-all duration-300 hover:shadow-purple-500/20">
      <div className="p-4 flex justify-between items-center max-w-7xl mx-auto w-[70vw]">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-700 rounded-md flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/25">
            <span className="text-white font-bold transition-transform duration-300 group-hover:scale-110">N</span>
          </div>
          <h1 className="text-xl font-bold text-white transition-all duration-300 group-hover:text-purple-300">
            nayzak
          </h1>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-gray-400 hover:text-white focus:outline-none transition-all duration-300 hover:bg-gray-800/50 rounded-lg"
        >
          <svg
            className={`h-6 w-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
          {['Launcher', 'Panel', 'Blog', 'Docs'].map((item) => (
            <a 
              key={item}
              href="#" 
              className="relative hover:text-white transition-all duration-300 px-3 py-2 rounded-lg hover:bg-gray-800/30 group"
            >
              {item}
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-purple-600 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {isSignedIn ? (
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-300">Welcome back!</span>
              <UserButton 
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "w-8 h-8 transition-all duration-300 hover:scale-110"
                  }
                }}
              />
            </div>
          ) : (
            <>
              <SignInButton mode="modal">
                <button className="text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 px-4 py-2 rounded-lg hover:bg-gray-800/30 relative group">
                  Login
                  <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600/0 to-purple-400/0 group-hover:from-purple-600/10 group-hover:to-purple-400/10 transition-all duration-300"></span>
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 relative overflow-hidden group">
                  <span className="relative z-10">Sign Up</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </button>
              </SignUpButton>
            </>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } md:hidden border-t border-gray-800/50 overflow-hidden transition-all duration-500 ease-in-out`}
      >
        <nav className="px-4 py-2 space-y-2">
          {['Launcher', 'Panel', 'Blog', 'Docs'].map((item) => (
            <a 
              key={item}
              href="#" 
              className="block py-3 px-2 text-gray-300 hover:text-white transition-all duration-300 rounded-lg hover:bg-gray-800/30 hover:translate-x-2"
            >
              {item}
            </a>
          ))}
          <div className="pt-4 pb-4 space-y-3 border-t border-gray-800/30 mt-4">
            {isSignedIn ? (
              <div className="flex items-center gap-3 px-2">
                <UserButton 
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox: "w-8 h-8"
                    }
                  }}
                />
                <span className="text-gray-300">Account</span>
              </div>
            ) : (
              <>
                <SignInButton mode="modal">
                  <button className="w-full text-left py-3 px-2 text-gray-300 hover:text-white transition-all duration-300 rounded-lg hover:bg-gray-800/30">
                    Login
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/25">
                    Sign Up
                  </button>
                </SignUpButton>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}