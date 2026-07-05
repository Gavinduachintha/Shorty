import Link from 'next/link';
import React from 'react';

const heroStats = [
  ['99.9%', 'link reliability'],
  ['1 click', 'copy and share'],
  ['Clerk', 'clean auth-ready feel'],
];

const HeroContent = () => {
  return (
    <div className='max-w-2xl'>
      <span className='inline-flex items-center rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur'>
        Built for clean, fast link sharing
      </span>

      <h1 className='mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl'>
        Shorten links with a
        <span className='block bg-linear-to-r from-[#f3ecff] via-[#c9b7ff] to-[#5D29F0] bg-clip-text text-transparent'>
          polished Clerk-style experience.
        </span>
      </h1>

      <p className='mt-6 max-w-xl text-lg leading-8 text-white/72 sm:text-xl'>
        Shorty turns long URLs into crisp, share-ready links with a modern
        workflow, subtle glass surfaces, and a visual system that feels
        premium from the first click.
      </p>

      <div className='mt-8 flex flex-col gap-4 sm:flex-row'>
        <Link
          href='/register'
          className='inline-flex items-center justify-center rounded-full bg-[#5D29F0] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(93,41,240,0.35)] transition hover:-translate-y-0.5 hover:bg-[#4f15ee]'
        >
          Get Started
        </Link>
        <Link
          href='/login'
          className='inline-flex items-center justify-center rounded-full border border-white/15 bg-white/8 px-7 py-3.5 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/12 hover:text-white'
        >
          See the workflow
        </Link>
      </div>

      <div className='mt-10 grid gap-4 sm:grid-cols-3'>
        {heroStats.map(([value, label]) => (
          <div
            key={label}
            className='rounded-3xl border border-white/10 bg-white/8 p-4 backdrop-blur'
          >
            <div className='text-2xl font-semibold text-white'>{value}</div>
            <div className='mt-1 text-sm text-white/60'>{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroContent;