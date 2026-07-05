import React from 'react';

const quickTags = ['Secure auth', 'Custom domains', 'Share-ready'];

const HeroPreview = () => {
  return (
    <div className='relative mx-auto w-full max-w-xl'>
      <div className='absolute -left-8 top-10 h-28 w-28 rounded-full bg-[#5D29F0]/35 blur-3xl' />
      <div className='absolute -right-6 bottom-8 h-32 w-32 rounded-full bg-white/15 blur-3xl' />

      <div className='relative overflow-hidden rounded-4xl border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.06))] p-4 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl'>
        <div className='rounded-[28px] border border-white/10 bg-[#0f0f12]/85 p-5'>
          <div className='flex items-center justify-between border-b border-white/8 pb-4'>
            <div>
              <p className='text-sm text-white/55'>Dashboard preview</p>
              <h2 className='mt-1 text-xl font-semibold text-white'>Link Shortener</h2>
            </div>
            <div className='rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300'>
              Active
            </div>
          </div>

          <div className='mt-5 space-y-4'>
            <div className='rounded-3xl border border-white/10 bg-white/6 p-4'>
              <div className='text-xs uppercase tracking-[0.28em] text-white/45'>Paste your URL</div>
              <div className='mt-3 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-4'>
                <div className='h-3 w-3 rounded-full bg-[#5D29F0]' />
                <div className='min-w-0 flex-1 text-sm text-white/70'>
                  https://www.example.com/your-very-long-link-here
                </div>
                <button className='rounded-full bg-[#5D29F0] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#4f15ee]'>
                  Shorten
                </button>
              </div>
            </div>

            <div className='grid gap-4 sm:grid-cols-[1.15fr_0.85fr]'>
              <div className='rounded-3xl border border-white/10 bg-[#16161b] p-4'>
                <div className='flex items-center justify-between text-sm text-white/70'>
                  <span>shorty.app/launch</span>
                  <span className='text-[#bcaaff]'>Copied</span>
                </div>
                <div className='mt-4 rounded-2xl bg-white/6 p-4 text-sm text-white/60'>
                  Analytics overview, branded links, and conversion tracking in one place.
                </div>
              </div>

              <div className='space-y-4'>
                <div className='rounded-3xl border border-white/10 bg-white/6 p-4'>
                  <div className='text-xs text-white/45'>Clicks today</div>
                  <div className='mt-2 text-3xl font-semibold text-white'>2.4k</div>
                </div>
                <div className='rounded-3xl border border-white/10 bg-white/6 p-4'>
                  <div className='text-xs text-white/45'>Avg. speed</div>
                  <div className='mt-2 text-3xl font-semibold text-white'>0.2s</div>
                </div>
              </div>
            </div>

            <div className='flex flex-wrap gap-3'>
              {quickTags.map((label) => (
                <span
                  key={label}
                  className='rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs font-medium text-white/75'
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPreview;