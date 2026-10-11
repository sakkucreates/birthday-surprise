import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/common/Layout'
import Hero from '../components/hero/Hero'
import MemoryGallery from '../components/gallery/MemoryGallery'
import MessageCard from '../components/message/MessageCard'
import { Sparkles, Heart } from 'lucide-react'

export default function HomePage() {
  return (
    <Layout>
      {/* 1. Birthday Hero Section */}
      <Hero />

      {/* 2. Nine-Card Memory Gallery */}
      <MemoryGallery />

      {/* 3. Birthday Message Card */}
      <MessageCard />

      {/* 4. Surprise Invitation Section */}
      <section 
        aria-label="Special Surprise Invitation"
        className="w-full text-center pt-2 pb-12 px-2 flex flex-col items-center"
      >
        {/* Supporting text above button */}
        <p className="font-script text-2xl min-[375px]:text-[1.65rem] sm:text-3xl text-rose-deep mb-3.5 animate-pulse-soft">
          There's one more little gift waiting for you...
        </p>

        {/* Surprise Button */}
        <Link
          to="/surprise"
          className="group inline-flex items-center justify-center gap-2.5 px-6 min-[375px]:px-8 py-3.5 min-[375px]:py-4 rounded-full bg-gradient-to-r from-rose-pink via-[#DF86A0] to-rose-pink hover:from-rose-deep hover:via-rose-pink hover:to-rose-deep text-white font-medium text-sm sm:text-base border border-soft-gold/60 shadow-gift hover:shadow-card-elevated active:scale-95 transition-all duration-300 touch-manipulation"
        >
          <Sparkles className="w-4 h-4 text-gold-light fill-gold-light group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-sans font-semibold tracking-wide">
            Open Your Special Surprise ♡
          </span>
          <Heart className="w-4 h-4 text-white fill-white group-hover:scale-110 transition-transform duration-300" />
        </Link>
      </section>
    </Layout>
  )
}
