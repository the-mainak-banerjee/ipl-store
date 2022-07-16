import React from 'react'
import { Link } from 'react-router-dom'

export const SubNavbar = ({pageName, param}) => {


  return (
    <div 
        className='bg-ternary pl-10 py-10 lg:px-36'
    >
      <div className={`font-poppins text-lg flex justify-around w-[25vw] lg:w-[10vw] ${param && 'lg:w-[20vw]'}`}>
          <Link to='/'>
            <p className='hover:underline'>Home</p>
          </Link>

          <p>/</p>

          {param && <Link to={`/${pageName.toLowerCase()}`}>
            <p className='hover:underline'>{pageName}</p>
          </Link>}

          {param && <p>/</p>}
          
          {param && <p className='text-primary font-bold'>{param}</p>}
          
          {!param && <p  className='text-primary font-bold'>{pageName}</p>}
      </div>
    </div>
  )
}

