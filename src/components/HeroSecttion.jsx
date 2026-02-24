'use client'
import { useTheme } from 'next-themes'
import { useEffect, useRef, useState } from 'react'

export default function HeroSection() {
  const statsRef = useRef(null)
     const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  if (!mounted) return null

  const isDark = resolvedTheme === 'dark'

  return (
    <section
      className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-500 ${
        isDark
          ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
  
  <div
    className={`absolute -top-40 -right-40 w-80 h-80 rounded-full filter blur-3xl opacity-30 animate-float transition-all duration-500 ${
      isDark
        ? 'bg-emerald-500/20 mix-blend-soft-light'
        : 'bg-emerald-300 mix-blend-multiply'
    }`}
  ></div>

  <div
    className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full filter blur-3xl opacity-30 animate-float animation-delay-2000 transition-all duration-500 ${
      isDark
        ? 'bg-indigo-500/20 mix-blend-soft-light'
        : 'bg-indigo-300 mix-blend-multiply'
    }`}
  ></div>

  <div
    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full filter blur-3xl opacity-20 transition-all duration-500 ${
      isDark
        ? 'bg-emerald-500/10 mix-blend-soft-light'
        : 'bg-emerald-200 mix-blend-multiply'
    }`}
  ></div>

</div>

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Content */}
          <div className="space-y-8 animate-slide-up">
  
  {/* Badge */}
  <div
    className={`inline-flex items-center px-4 py-2 backdrop-blur-sm rounded-full border ${
      isDark
        ? 'bg-gradient-to-r from-emerald-500/20 to-indigo-500/20 border-emerald-400/20'
        : 'bg-gradient-to-r from-emerald-500/10 to-indigo-500/10 border-emerald-200/20'
    }`}
  >
    <span
      className={`text-sm font-medium bg-gradient-to-r bg-clip-text text-transparent ${
        isDark
          ? 'from-emerald-400 to-indigo-400'
          : 'from-emerald-600 to-indigo-600'
      }`}
    >
      🚀 Trusted by 10,000+ retailers
    </span>
  </div>

  {/* Main Headline */}
  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
    <span
      className={`bg-gradient-to-r bg-clip-text text-transparent ${
        isDark
          ? 'from-emerald-400 to-indigo-400'
          : 'from-emerald-600 to-indigo-600'
      }`}
    >
      India's Simplest
    </span>
    <br />
    <span className={isDark ? 'text-white' : 'text-gray-900'}>
      Multi-Operator Fintech Platform
    </span>
  </h1>

  {/* Subtext */}
  <p className={`text-xl max-w-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
    One Wallet. All Services. Zero Confusion.
  </p>

  {/* CTA Buttons */}
  <div className="flex flex-wrap gap-4">
    
    <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-indigo-600 hover:from-emerald-600 hover:to-indigo-700 text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-2xl hover:scale-105 overflow-hidden">
      <span className="relative z-10 flex items-center gap-2">
        🚀 Become a Retailer
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </button>

    <button
      className={`px-8 py-4 font-semibold rounded-2xl border-2 hover:border-emerald-500 hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2 ${
        isDark
          ? 'bg-slate-800 text-white border-slate-700 hover:border-emerald-400'
          : 'bg-white text-gray-900 border-gray-200'
      }`}
    >
      🔐 Login Dashboard
    </button>

  </div>

  {/* Floating Stats */}
  <div ref={statsRef} className="grid grid-cols-3 gap-4 pt-8 opacity-0">

    <div
      className={`p-4 backdrop-blur-md rounded-2xl border hover:shadow-xl transition-all duration-300 hover:scale-105 ${
        isDark
          ? 'bg-slate-800/60 border-gray-700/30'
          : 'bg-white/60 border-gray-200/30'
      }`}
    >
      <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
        ₹1Cr+
      </p>
      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
        Transactions
      </p>
    </div>

    <div
      className={`p-4 backdrop-blur-md rounded-2xl border hover:shadow-xl transition-all duration-300 hover:scale-105 ${
        isDark
          ? 'bg-slate-800/60 border-gray-700/30'
          : 'bg-white/60 border-gray-200/30'
      }`}
    >
      <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
        10K+
      </p>
      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
        Retailers
      </p>
    </div>

    <div
      className={`p-4 backdrop-blur-md rounded-2xl border hover:shadow-xl transition-all duration-300 hover:scale-105 ${
        isDark
          ? 'bg-slate-800/60 border-gray-700/30'
          : 'bg-white/60 border-gray-200/30'
      }`}
    >
      <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
        99.9%
      </p>
      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
        Success Rate
      </p>
    </div>

  </div>

</div>

          {/* Right Side - Live UI Mockup */}
          <div className="relative animate-slide-in-right">
            {/* Main Card */}
            <div className="relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/30 dark:border-gray-700/30 p-6 transform hover:scale-105 transition-all duration-500">
              
              {/* Wallet Balance */}
              <div className="mb-6 p-4 bg-gradient-to-r from-emerald-500/10 to-indigo-500/10 dark:from-emerald-500/20 dark:to-indigo-500/20 rounded-2xl border border-emerald-200/30 dark:border-emerald-400/30">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Wallet Balance</p>
                <div className="flex items-center justify-between">
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">₹12,450</p>
                  <span className="px-2 py-1 bg-emerald-500 text-white text-xs font-semibold rounded-lg animate-pulse-slow">
                    +₹250
                  </span>
                </div>
              </div>

              {/* Transactions */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-slate-700/50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center">
                      <span className="text-white">📱</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Mobile Recharge</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Jio Prepaid</p>
                    </div>
                  </div>
                  <p className="font-semibold text-gray-900 dark:text-white">₹399</p>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-slate-700/50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-xl flex items-center justify-center">
                      <span className="text-white">📺</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">DTH Recharge</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Tata Sky</p>
                    </div>
                  </div>
                  <p className="font-semibold text-gray-900 dark:text-white">₹599</p>
                </div>
              </div>

              {/* Success Popup */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-emerald-500 to-indigo-600 text-white px-4 py-2 rounded-2xl shadow-xl animate-float">
                <div className="flex items-center gap-2">
                  <span>✅</span>
                  <span className="font-medium">Recharge Successful!</span>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-6 grid grid-cols-3 gap-2">
                {['Recharge', 'Bill Pay', 'DTH'].map((action) => (
                  <button key={action} className="p-2 bg-gray-100 dark:bg-slate-700 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all">
                    {action}
                  </button>
                ))}
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-10 -right-10 w-72 h-72 bg-gradient-to-r from-emerald-500/20 to-indigo-500/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
      <a href='#solutions'>
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-emerald-500 rounded-full mt-2 animate-bounce"></div>
        </div>
      </a>
      </div>
    </section>
  )
}