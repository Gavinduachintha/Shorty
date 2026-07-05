import React from 'react'

const Header = () => {
  return (
    <>
        <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black'>
            <h1 className='text-3xl font-bold text-[#00df9a]'>Shorty</h1>
            <ul className='hidden md:flex'>
                <li className='p-4'>Home</li>
                <li className='p-4'>About</li>
                
            </ul>
            
        </div>
    </>
  )
}

export default Header