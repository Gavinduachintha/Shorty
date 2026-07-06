import Link from 'next/link';
import React from 'react'
import HeroContent from './hero-content';

const Hero = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-10 pb-20 lg:px-8 lg:pt-20 lg:pb-28">
      <HeroContent />
    </section>
  )
}

export default Hero