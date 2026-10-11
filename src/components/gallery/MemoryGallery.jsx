import React, { useState } from 'react'
import { Camera, Heart, Sparkles, X } from 'lucide-react'

/**
 * EXACTLY 9 MEMORY CARDS
 * - All 9 cards populated with your photographs (memory-1 through memory-9)
 */
const MEMORIES = [
  {
    id: 'memory-1',
    number: '01',
    title: 'Warmth & Joy',
    image: '/images/memories/memory-1.jpg',
    wish: 'Wishing you endless joy, bright laughter, and days filled with pure happiness!',
  },
  {
    id: 'memory-2',
    number: '02',
    title: 'Sweet Smiles',
    image: '/images/memories/memory-2.jpg',
    wish: 'May your beautiful smile always brighten up our family and everyone around you.',
  },
  {
    id: 'memory-3',
    number: '03',
    title: 'Grace & Kindness',
    image: '/images/memories/memory-3.jpg',
    wish: 'Thank you for bringing so much gentle grace and caring warmth into our home.',
  },
  {
    id: 'memory-4',
    number: '04',
    title: 'Countless Blessings',
    image: '/images/memories/memory-4.jpg',
    wish: 'May this special year shower you with good health, peace, and fulfilled dreams.',
  },
  {
    id: 'memory-5',
    number: '05',
    title: 'Heart of Gold',
    image: '/images/memories/memory-5.jpg',
    wish: 'To the kindest heart—may every day ahead be as sweet and wonderful as you are.',
  },
  {
    id: 'memory-6',
    number: '06',
    title: 'Cherished Moments',
    image: '/images/memories/memory-6.jpg',
    wish: 'Celebrating you today and always. You deserve the absolute best of everything in life!',
  },
  {
    id: 'memory-7',
    number: '07',
    title: 'Laughter & Cheer',
    image: '/images/memories/memory-7.jpg',
    wish: 'Here is to another wonderful year full of sweet celebrations, shared laughter, and cheer.',
  },
  {
    id: 'memory-8',
    number: '08',
    title: 'Family’s Treasure',
    image: '/images/memories/memory-8.jpg',
    wish: 'Having you in our family is a true blessing we cherish each and every single day.',
  },
  {
    id: 'memory-9',
    number: '09',
    title: 'Bright Tomorrow',
    image: '/images/memories/memory-9.jpg',
    wish: 'May every step of your journey ahead be surrounded by love, prosperity, and sunshine.',
  },
]

export default function MemoryGallery() {
  // Tracks which card overlay is currently tapped/revealed on mobile/touch screens
  const [activeCardId, setActiveCardId] = useState(null)

  const handleCardToggle = (id) => {
    setActiveCardId((prev) => (prev === id ? null : id))
  }

  return (
    <section 
      aria-label="Favourite Memories Gallery" 
      className="relative w-full py-10 sm:py-14"
    >
      {/* Lightweight, sparse floating decorations around the gallery */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute -top-3 left-4 animate-float-gentle text-rose-pink/70 fill-rose-pink/60"
          style={{ animationDuration: '4.8s' }}
        >
          <Heart className="w-3.5 h-3.5" />
        </div>
        <div 
          className="absolute top-1/2 -right-1 animate-float-sway text-heart-red/60 fill-heart-red/50"
          style={{ animationDuration: '5.2s' }}
        >
          <Heart className="w-3 h-3" />
        </div>
        <div 
          className="absolute -bottom-2 left-8 animate-float-bob text-soft-gold/70 fill-soft-gold/50"
          style={{ animationDuration: '4.4s' }}
        >
          <Sparkles className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Gallery Header */}
      <div className="text-center mb-8 sm:mb-10 px-2 relative z-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blush-pink/60 border border-soft-gold/30 text-stone-700 text-xs sm:text-sm font-medium tracking-wide mb-3 shadow-xs">
          <Sparkles className="w-3 h-3 text-soft-gold fill-soft-gold" />
          <span>Memories & Wishes</span>
          <Heart className="w-2.5 h-2.5 text-heart-red fill-heart-red" />
        </div>

        <h2 className="font-serif text-2xl min-[375px]:text-[1.75rem] sm:text-3xl md:text-4xl font-semibold text-stone-800 tracking-tight leading-snug max-w-md mx-auto mb-2.5">
          A Little Gallery of My Favourite Memories
        </h2>

        <p className="font-sans text-stone-600 text-xs min-[375px]:text-sm sm:text-base leading-relaxed max-w-sm mx-auto">
          Nine little moments, a thousand reasons to smile.
        </p>
      </div>

      {/* Nine-Card Gallery Grid (2 columns on mobile, 3 columns on tablet/desktop) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 min-[390px]:gap-3.5 sm:gap-4 relative z-10">
        {MEMORIES.map((item) => {
          const isRevealed = activeCardId === item.id

          return (
            <div
              key={item.id}
              id={item.id}
              onClick={() => handleCardToggle(item.id)}
              className="group relative bg-[#FFFDFB] rounded-2xl border border-soft-gold/35 shadow-sm hover:shadow-card-elevated transition-all duration-300 overflow-hidden flex flex-col aspect-[4/5] cursor-pointer"
            >
              {/* Cute Scrapbook Washi-Tape Accent at Top Center */}
              <div 
                aria-hidden="true" 
                className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-12 h-3.5 bg-blush-pink/80 border border-soft-gold/30 rounded-xs rotate-[-2deg] z-10 pointer-events-none shadow-2xs" 
              />

              {/* CARD MEDIA AREA */}
              <div className="relative w-full h-full p-2.5 sm:p-3 flex flex-col">
                {item.image ? (
                  /* Supplied Photograph with cover fit & top framing */
                  <div className="relative w-full h-full overflow-hidden rounded-xl border border-soft-gold/30 bg-stone-100">
                    <img
                      src={item.image}
                      alt={`Memory ${item.number}: ${item.title}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  /* EMPTY IMAGE PLACEHOLDER: Delicate Blush & Ivory with Gold Border */
                  <div className="w-full h-full rounded-xl bg-gradient-to-b from-[#FFFDFB] via-[#FDF2F7] to-[#F8DCE8]/40 border border-dashed border-soft-gold/45 flex flex-col items-center justify-center p-3 text-center transition-colors duration-300 group-hover:bg-[#FDF2F7]">
                    
                    {/* Decorative Camera Icon */}
                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/85 border border-soft-gold/40 shadow-xs flex items-center justify-center mb-2 text-rose-deep group-hover:scale-105 transition-transform duration-300">
                      <Camera className="w-4 h-4 sm:w-5 sm:h-5 text-soft-gold stroke-[1.75]" />
                    </div>

                    {/* Placeholder Labels */}
                    <span className="font-script text-base min-[375px]:text-lg text-rose-deep leading-none mb-1">
                      Memory {item.number}
                    </span>
                    <span className="font-sans text-[10px] sm:text-xs font-medium text-stone-500 tracking-wide uppercase">
                      {item.title}
                    </span>
                  </div>
                )}

                {/* Mobile Tap-to-Reveal Prompt Button (accessible touch target) */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleCardToggle(item.id)
                  }}
                  aria-expanded={isRevealed}
                  aria-label={`Toggle birthday wish for ${item.title}`}
                  className="mt-2 w-full py-1 px-2 rounded-lg bg-blush-pink/80 sm:bg-transparent border border-soft-gold/30 sm:border-transparent text-stone-700 text-[10px] min-[375px]:text-[11px] font-medium flex items-center justify-center gap-1 sm:hidden touch-manipulation active:scale-95 transition-transform shadow-2xs"
                >
                  <Sparkles className="w-2.5 h-2.5 text-soft-gold fill-soft-gold" />
                  <span>{isRevealed ? 'Close Wish' : 'Tap for Wish'}</span>
                  <Heart className="w-2.5 h-2.5 text-heart-red fill-heart-red" />
                </button>
              </div>

              {/* 
                BIRTHDAY WISH OVERLAY:
                - On desktop: reveals smoothly on hover (`group-hover:translate-y-0 group-hover:opacity-100`)
                - On mobile: reveals when tapped (`isRevealed` state)
              */}
              <div
                className={`absolute inset-x-0 bottom-0 bg-[#FFF9F5]/96 backdrop-blur-md border-t border-soft-gold/40 p-3 sm:p-3.5 flex flex-col justify-center rounded-b-2xl shadow-md transition-all duration-300 ease-out z-20 ${
                  isRevealed
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-full opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 pointer-events-none sm:group-hover:pointer-events-auto'
                }`}
              >
                {/* Header with Title and Mobile Close Button */}
                <div className="flex items-center justify-between gap-1 mb-1 border-b border-soft-gold/20 pb-1">
                  <div className="flex items-center gap-1">
                    <Heart className="w-2.5 h-2.5 text-heart-red fill-heart-red" />
                    <span className="font-script text-sm min-[390px]:text-base text-rose-deep leading-none">
                      {item.title}
                    </span>
                  </div>

                  {/* Close button for touch devices */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      setActiveCardId(null)
                    }}
                    aria-label="Close wish overlay"
                    className="sm:hidden p-0.5 text-stone-400 hover:text-stone-700 active:scale-90"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* The Birthday Wish Text */}
                <p className="font-sans text-[11px] min-[390px]:text-xs sm:text-[13px] text-stone-700 leading-snug">
                  {item.wish}
                </p>
              </div>

            </div>
          )
        })}
      </div>
    </section>
  )
}
