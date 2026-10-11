import React from 'react'
import { Heart, Sparkles, Feather } from 'lucide-react'

/**
 * Birthday Message Card Component
 * Dedicated to Bhabhi Jii
 * Designed as a premium handwritten birthday letter on an ivory parchment card
 * with delicate gold borders, warm cursive typography, and floating heart accents.
 */
export default function MessageCard() {
  return (
    <section 
      aria-label="Birthday Letter to Bhabhi Jii"
      className="relative w-full py-10 sm:py-16 px-1"
    >
      {/* Floating Decorative Hearts & Sparkles around the letter */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-right floating red heart */}
        <div 
          className="absolute top-4 right-5 sm:right-10 animate-float-gentle text-heart-red/80 fill-heart-red/70"
          style={{ animationDuration: '4.5s' }}
        >
          <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>

        {/* Mid-left floating rose heart */}
        <div 
          className="absolute top-1/3 -left-1 sm:left-4 animate-float-sway text-rose-deep/75 fill-rose-pink/70"
          style={{ animationDuration: '5.2s', animationDelay: '1s' }}
        >
          <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>

        {/* Bottom-right floating soft rose heart */}
        <div 
          className="absolute -bottom-2 right-8 animate-float-bob text-rose-pink fill-rose-pink/60"
          style={{ animationDuration: '4.2s', animationDelay: '0.6s' }}
        >
          <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </div>

        {/* Gold sparkles */}
        <div 
          className="absolute top-12 left-6 animate-twinkle text-soft-gold fill-soft-gold"
          style={{ animationDelay: '0.8s' }}
        >
          <Sparkles className="w-3.5 h-3.5" />
        </div>
        <div 
          className="absolute bottom-8 left-12 animate-twinkle text-gold-dark fill-soft-gold/70"
          style={{ animationDelay: '2s' }}
        >
          <Sparkles className="w-4 h-4" />
        </div>
      </div>

      {/* Premium Handwritten Birthday Letter Card */}
      <div className="relative w-full max-w-lg mx-auto bg-[#FFFDFB] rounded-3xl sm:rounded-[2.25rem] border border-soft-gold/40 shadow-gift p-6 min-[375px]:p-7 sm:p-10 overflow-hidden">
        
        {/* Subtle decorative gold corner flourishes */}
        <div aria-hidden="true" className="absolute top-3.5 left-3.5 w-5 h-5 border-t-2 border-l-2 border-soft-gold/45 rounded-tl-lg pointer-events-none" />
        <div aria-hidden="true" className="absolute top-3.5 right-3.5 w-5 h-5 border-t-2 border-r-2 border-soft-gold/45 rounded-tr-lg pointer-events-none" />
        <div aria-hidden="true" className="absolute bottom-3.5 left-3.5 w-5 h-5 border-b-2 border-l-2 border-soft-gold/45 rounded-bl-lg pointer-events-none" />
        <div aria-hidden="true" className="absolute bottom-3.5 right-3.5 w-5 h-5 border-b-2 border-r-2 border-soft-gold/45 rounded-br-lg pointer-events-none" />

        {/* Subtle warm rose ambient glow inside the card */}
        <div 
          aria-hidden="true" 
          className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-blush-pink/35 blur-3xl pointer-events-none" 
        />
        <div 
          aria-hidden="true" 
          className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-gold-light/30 blur-3xl pointer-events-none" 
        />

        {/* Card Content */}
        <div className="relative z-10 flex flex-col">
          
          {/* Header Section */}
          <div className="text-center mb-6 sm:mb-8">
            
            {/* Small Decorative Pill Label */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blush-soft border border-soft-gold/30 text-stone-700 text-[10px] min-[375px]:text-xs font-semibold tracking-wider uppercase mb-3 shadow-2xs">
              <Sparkles className="w-3 h-3 text-soft-gold fill-soft-gold" />
              <span>A LITTLE NOTE FROM THE HEART</span>
              <Heart className="w-2.5 h-2.5 text-heart-red fill-heart-red" />
            </div>

            {/* Main Editorial Heading */}
            <h2 className="font-serif text-2xl min-[375px]:text-[1.75rem] sm:text-3xl md:text-4xl font-semibold text-stone-800 tracking-tight leading-snug max-w-sm sm:max-w-md mx-auto">
              To Someone Who Makes Life Beautiful
            </h2>

            {/* Delicate Gold Line with Wax Stamp / Heart Motif */}
            <div aria-hidden="true" className="flex items-center justify-center gap-2 mt-3 sm:mt-4">
              <span className="w-10 sm:w-16 h-px bg-gradient-to-r from-transparent to-soft-gold/60" />
              <div className="w-6 h-6 rounded-full bg-blush-pink/60 border border-soft-gold/40 flex items-center justify-center shadow-2xs">
                <Feather className="w-3 h-3 text-rose-deep stroke-[1.75]" />
              </div>
              <span className="w-10 sm:w-16 h-px bg-gradient-to-l from-transparent to-soft-gold/60" />
            </div>
          </div>

          {/* Letter Body: Handwritten script styling with comfortable line height and mobile legibility */}
          <div className="relative bg-[#FFF9F5]/70 rounded-2xl p-4 min-[375px]:p-5 sm:p-7 border border-soft-gold/25 shadow-2xs mb-6">
            <p className="font-script text-xl min-[375px]:text-[1.35rem] sm:text-2xl text-stone-700 leading-[1.8] sm:leading-[1.85] tracking-wide text-left sm:text-justify selection:bg-rose-pink selection:text-white">
              Some people make a family feel even more special simply by being a part of it. Your kindness, warmth, and beautiful smile bring so much happiness to everyone around you. On your special day, I wish you endless love, peaceful days, beautiful dreams, and countless reasons to smile. May this new year of your life bring you all the happiness your heart deserves. Happy Birthday, Bhabhi Jii!{' '}
              <span className="inline-block align-middle text-heart-red">❤️</span>
            </p>
          </div>

          {/* Closing Line */}
          <div className="flex flex-col items-end text-right pt-1 pr-1 sm:pr-3">
            <p className="font-script text-2xl min-[375px]:text-[1.65rem] sm:text-3xl text-rose-deep tracking-wide">
              With lots of love &amp; warm wishes ♡
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
