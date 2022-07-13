import React from 'react'
import { Link } from 'react-router-dom'

export const SubNavbar = ({pageName}) => {


  return (
    <div 
        className='bg-ternary pl-10 py-10 lg:px-36'
    >
      <div className='font-poppins text-lg flex justify-around w-[25vw] lg:w-[10vw]'>
          <Link to='/'>
            <p>Home</p>
          </Link>
          <p>/</p>
          <p  className='text-primary font-bold'>{pageName}</p>
      </div>
    </div>
  )
}

