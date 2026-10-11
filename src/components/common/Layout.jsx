import React from 'react'

/**
 * Mobile-first responsive layout container.
 * Constrains width for larger screens while maintaining an edge-to-edge feel on mobile.
 * Protects against horizontal scrolling and accidental overflows.
 */
export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-ivory-white text-stone-800 flex flex-col items-center justify-start overflow-x-hidden relative selection:bg-rose-pink selection:text-white">
      {/* Subtle ambient background glow */}
      <div 
        aria-hidden="true" 
        className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      >
        <div className="absolute -top-24 -left-24 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-blush-pink/40 blur-3xl" />
        <div className="absolute top-1/3 -right-24 w-80 h-80 rounded-full bg-rose-pink/20 blur-3xl" />
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-gold-light/25 blur-3xl" />
      </div>

      {/* Main content wrapper with mobile-safe padding */}
      <main className="w-full max-w-md md:max-w-xl lg:max-w-2xl px-4 py-6 sm:px-6 relative z-10 flex flex-col flex-1">
        {children}
      </main>
    </div>
  )
}
