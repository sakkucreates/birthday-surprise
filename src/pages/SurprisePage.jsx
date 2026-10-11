import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import confetti from 'canvas-confetti'
import Layout from '../components/common/Layout'
import { Camera, Heart, Sparkles, ArrowLeft } from 'lucide-react'

/**
 * SURPRISE PHOTO
 * Local asset path for the special photograph
 */
const SURPRISE_PHOTO = '/images/surprise-photo.jpg'

export default function SurprisePage() {
  const [imageError, setImageError] = useState(false)

  // Trigger joyful confetti animation on page entry
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo({ top: 0, behavior: 'instant' })

    // Respect reduced-motion accessibility preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      return
    }

    // Palette colors: Rose Pink, Soft Gold, Heart Red, Ivory White, Blush Soft
    const celebrationColors = ['#E8A0B5', '#D4AF65', '#D93652', '#FFF9F5', '#F8DCE8', '#B88F3B']

    // 1. Initial celebratory center burst
    confetti({
      particleCount: 70,
      spread: 75,
      origin: { y: 0.25 },
      colors: celebrationColors,
      disableForReducedMotion: true,
    })

    // 2. Gentle festive falling rain for 2.5 seconds (finite, lightweight)
    const end = Date.now() + 2500
    let animationFrameId

    const dropConfetti = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.15 },
        colors: celebrationColors,
      })
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.15 },
        colors: celebrationColors,
      })

      if (Date.now() < end) {
        animationFrameId = requestAnimationFrame(dropConfetti)
      }
    }

    dropConfetti()

    // Cleanup on unmount
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
      confetti.reset()
    }
  }, [])

  return (
    <Layout>
      <div className="relative w-full py-4 sm:py-8 flex flex-col items-center">
        
        {/* Top Navigation Pill: Return to main celebration */}
        <div className="w-full flex justify-start mb-4">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/80 border border-soft-gold/30 text-stone-600 hover:text-stone-900 text-xs sm:text-sm font-medium shadow-2xs hover:shadow-xs active:scale-95 transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-soft-gold" />
            <span>Back to Celebration</span>
          </Link>
        </div>

        {/* Small Decorative Intro Tag */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blush-soft border border-soft-gold/35 text-stone-700 text-[10px] min-[375px]:text-xs font-semibold tracking-wider uppercase mb-3 shadow-2xs">
          <Sparkles className="w-3 h-3 text-soft-gold fill-soft-gold" />
          <span>A SECRET BIRTHDAY SURPRISE</span>
          <Heart className="w-2.5 h-2.5 text-heart-red fill-heart-red" />
        </div>

        {/* Script flourish */}
        <h2 className="font-script text-2xl min-[375px]:text-3xl text-rose-deep mb-1 text-center">
          For Dearest Bhabhi Jii
        </h2>

        {/* 
          ONE LARGE ELEGANT IMAGE CARD
          Empty placeholder ready for future photo population
        */}
        <div 
          id="surprise-image"
          className="relative w-full max-w-[280px] min-[375px]:max-w-[310px] sm:max-w-sm my-5 sm:my-7 bg-[#FFFDFB] rounded-3xl border border-soft-gold/45 shadow-gift p-3 sm:p-4 overflow-hidden aspect-[4/5] flex flex-col"
        >
          {/* Subtle gold ribbon top accent */}
          <div 
            aria-hidden="true" 
            className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-16 h-4 bg-blush-pink/80 border border-soft-gold/35 rounded-xs rotate-[1deg] z-10 pointer-events-none shadow-2xs" 
          />

          {SURPRISE_PHOTO && !imageError ? (
            // Photo rendering area when photo is loaded
            <div className="relative w-full h-full overflow-hidden rounded-2xl border border-soft-gold/25 bg-stone-100 shadow-xs">
              <img
                src={SURPRISE_PHOTO}
                alt="Special Birthday Surprise Portrait of Bhabhi Jii"
                decoding="async"
                onError={() => setImageError(true)}
                className="w-full h-full object-cover object-top"
              />
            </div>
          ) : (
            /* EMPTY IMAGE PLACEHOLDER SURFACE: Blush-pink & ivory with gold accents */
            <div className="w-full h-full rounded-2xl bg-gradient-to-b from-[#FFFDFB] via-[#FDF2F7] to-[#F8DCE8]/50 border border-dashed border-soft-gold/50 flex flex-col items-center justify-center p-4 text-center transition-colors">
              
              {/* Decorative Circle Icon */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/90 border border-soft-gold/40 shadow-xs flex items-center justify-center mb-3 text-rose-deep">
                <Camera className="w-6 h-6 sm:w-7 sm:h-7 text-soft-gold stroke-[1.75]" />
              </div>

              {/* Placeholder text tags */}
              <span className="font-script text-2xl min-[375px]:text-3xl text-rose-deep mb-1">
                Your Special Photo
              </span>
              <p className="font-sans text-[11px] sm:text-xs text-stone-500 max-w-[200px] leading-relaxed">
                Add your favorite picture of Bhabhi Jii here
              </p>

              {/* Subtle heart accent */}
              <div className="mt-3 flex items-center gap-1 text-heart-red">
                <Heart className="w-3.5 h-3.5 fill-heart-red animate-pulse-soft" />
              </div>
            </div>
          )}
        </div>

        {/* 
          BIRTHDAY GIRL QUOTE SECTION
        */}
        <div className="text-center max-w-sm sm:max-w-md mx-auto px-2 mt-2">
          
          {/* Main Quote Heading */}
          <h1 className="font-serif text-2xl min-[375px]:text-[1.75rem] sm:text-3xl md:text-4xl font-semibold text-stone-800 tracking-tight leading-snug mb-4">
            You Make Every Moment Brighter <span className="inline-block text-heart-red align-baseline">❤️</span>
          </h1>

          {/* Exact Two Lines */}
          <div className="space-y-2 mb-6">
            <p className="font-sans text-stone-700 text-sm min-[375px]:text-base sm:text-lg leading-relaxed font-normal">
              May your smile shine a little brighter every day.
            </p>
            <p className="font-sans text-stone-700 text-sm min-[375px]:text-base sm:text-lg leading-relaxed font-normal">
              May your life always be filled with love, laughter, and happiness.
            </p>
          </div>

          {/* Delicate Divider */}
          <div aria-hidden="true" className="flex items-center justify-center gap-2 my-4">
            <span className="w-10 sm:w-16 h-px bg-gradient-to-r from-transparent to-soft-gold/60" />
            <Sparkles className="w-3.5 h-3.5 text-soft-gold fill-soft-gold" />
            <span className="w-10 sm:w-16 h-px bg-gradient-to-l from-transparent to-soft-gold/60" />
          </div>

          {/* Small Closing Line */}
          <p className="font-script text-2xl min-[375px]:text-[1.7rem] sm:text-3xl text-rose-deep tracking-wide mt-2">
            Made with love, especially for you ♡
          </p>

        </div>

      </div>
    </Layout>
  )
}
