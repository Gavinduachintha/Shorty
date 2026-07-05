import Link from 'next/link';
import React from 'react'
import HeroContent from './hero-content';
import HeroPreview from './hero-preview';

const Hero = () => {
  return (
    <section className='mx-auto max-w-6xl px-4 pb-20 pt-14 sm:px-6 lg:px-8 lg:pb-28 lg:pt-18'>
      <div className='grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]'>
        <HeroContent />
        <HeroPreview />
      </div>
    </section>
  )
}

export default Hero