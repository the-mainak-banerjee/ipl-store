import React from 'react'

export const Loading = () => {
  return (
    <div className='flex items-center justify-center w-full h-screen'>
      {/* <p className='font-lora text-[1.8rem] font-bold text-primary'>Loading...</p> */}
      <h2 
        className='font-extrabold font-lora text-[2rem]'>
        IPL<span className='text-primary'>Stores</span>...
      </h2>
    </div>
  )
}

