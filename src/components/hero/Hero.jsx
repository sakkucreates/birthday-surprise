import React from 'react'
import { Heart, Sparkles } from 'lucide-react'

/**
 * BirthdayHero Component
 * Dedicated to Bhabhi Jii
 * Features delicate gold and rose-pink accents, subtle floating hearts, and an elegant gift-card aesthetic.
 */
export default function Hero() {
  return (
    <section 
      aria-label="Birthday Greeting" 
      className="relative w-full min-h-[75svh] sm:min-h-[80svh] flex items-center justify-center py-6 px-1"
    >
      {/* Personalized Digital Birthday Gift Card */}
      <div className="relative w-full max-w-lg mx-auto bg-gradient-to-b from-[#FFF9F5] via-[#FDF2F7] to-[#F8DCE8]/60 rounded-3xl sm:rounded-[2.25rem] p-6 min-[390px]:p-8 sm:p-10 border border-soft-gold/30 shadow-gift overflow-hidden">
        
        {/* Subtle decorative gold corner flourishes */}
        <div aria-hidden="true" className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-soft-gold/50 rounded-tl-lg pointer-events-none" />
        <div aria-hidden="true" className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-soft-gold/50 rounded-tr-lg pointer-events-none" />
        <div aria-hidden="true" className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-soft-gold/50 rounded-bl-lg pointer-events-none" />
        <div aria-hidden="true" className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-soft-gold/50 rounded-br-lg pointer-events-none" />

        {/* Ambient background glow inside the card */}
        <div 
          aria-hidden="true" 
          className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-rose-pink/25 blur-2xl pointer-events-none" 
        />
        <div 
          aria-hidden="true" 
          className="absolute -bottom-16 -left-16 w-44 h-44 rounded-full bg-soft-gold/20 blur-2xl pointer-events-none" 
        />

        {/* Floating Decorative Hearts & Sparkles (behind / beside text, non-blocking) */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
          
          {/* Top-left floating red heart */}
          <div 
            className="absolute top-7 left-6 animate-float-gentle"
            style={{ animationDelay: '0s', animationDuration: '4.2s' }}
          >
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-heart-red/85 fill-heart-red/80 drop-shadow-sm" />
          </div>

          {/* Top-right floating rose heart */}
          <div 
            className="absolute top-6 right-8 animate-float-sway"
            style={{ animationDelay: '0.8s', animationDuration: '4.8s' }}
          >
            <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-rose-deep/80 fill-rose-pink/70 drop-shadow-sm" />
          </div>

          {/* Mid-left floating soft rose heart */}
          <div 
            className="absolute top-1/2 left-3 -translate-y-1/2 animate-float-bob"
            style={{ animationDelay: '1.4s', animationDuration: '3.6s' }}
          >
            <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-pink fill-rose-pink/70" />
          </div>

          {/* Mid-right floating cute red heart */}
          <div 
            className="absolute top-1/2 right-4 -translate-y-1/2 animate-float-gentle"
            style={{ animationDelay: '2.1s', animationDuration: '4.5s' }}
          >
            <Heart className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-heart-red/75 fill-heart-red/60" />
          </div>

          {/* Bottom-left small rose heart */}
          <div 
            className="absolute bottom-8 left-9 animate-float-sway"
            style={{ animationDelay: '1s', animationDuration: '5.2s' }}
          >
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-rose-deep/75 fill-rose-pink/70" />
          </div>

          {/* Bottom-right small heart */}
          <div 
            className="absolute bottom-7 right-7 animate-float-bob"
            style={{ animationDelay: '0.4s', animationDuration: '3.9s' }}
          >
            <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-heart-red/80 fill-heart-red/70" />
          </div>

          {/* Gold Sparkles */}
          <div 
            className="absolute top-12 right-1/4 animate-twinkle"
            style={{ animationDelay: '0.3s' }}
          >
            <Sparkles className="w-3.5 h-3.5 text-soft-gold fill-soft-gold/70" />
          </div>
          <div 
            className="absolute bottom-14 left-1/4 animate-twinkle"
            style={{ animationDelay: '1.6s' }}
          >
            <Sparkles className="w-4 h-4 text-gold-dark fill-soft-gold/60" />
          </div>
          <div 
            className="absolute top-1/3 left-7 animate-twinkle"
            style={{ animationDelay: '2.4s' }}
          >
            <Sparkles className="w-3 h-3 text-soft-gold fill-gold-light" />
          </div>
        </div>

        {/* Hero Content (Centered, readable, high contrast) */}
        <div className="relative z-10 flex flex-col items-center text-center">
          
          {/* Top Delicate Accent Tag */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/70 border border-soft-gold/30 shadow-xs mb-3 sm:mb-4">
            <Sparkles className="w-3 h-3 text-soft-gold fill-soft-gold" />
            <span className="font-script text-xl min-[375px]:text-2xl text-rose-deep pt-0.5">
              To Someone Truly Special
            </span>
            <Sparkles className="w-3 h-3 text-soft-gold fill-soft-gold" />
          </div>

          {/* Main Editorial Heading */}
          <h1 className="font-serif text-[1.9rem] leading-[1.22] min-[375px]:text-[2.15rem] min-[410px]:text-4xl sm:text-[2.75rem] md:text-5xl font-semibold text-stone-800 tracking-tight max-w-sm sm:max-w-md mx-auto mb-4 sm:mb-5">
            Happiest Birthday to My{' '}
            <span className="relative inline-block text-rose-deep font-bold mt-1">
              Special One
              {/* Delicate gold embellishment line under 'Special One' */}
              <span 
                aria-hidden="true" 
                className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-soft-gold to-transparent opacity-90 rounded-full" 
              />
            </span>
          </h1>

          {/* Subtle Decorative Heart Motif Divider */}
          <div aria-hidden="true" className="flex items-center justify-center gap-2 my-2 sm:my-3">
            <span className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-soft-gold/60" />
            <Heart className="w-3.5 h-3.5 text-heart-red fill-heart-red animate-pulse-soft" />
            <span className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-soft-gold/60" />
          </div>

          {/* Supporting Text */}
          <p className="font-sans text-stone-600 text-sm min-[375px]:text-base sm:text-lg leading-relaxed max-w-xs min-[390px]:max-w-sm sm:max-w-md mx-auto pt-1 font-normal">
            A little celebration for someone who makes life more beautiful.
          </p>

        </div>
      </div>
    </section>
  )
}
