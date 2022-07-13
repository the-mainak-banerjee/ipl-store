import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillTrashFill } from 'react-icons/bs'

export const CartItems = ({src,id,name,description,price,discount}) => {
  return (
    <div className='flex flex-wrap m-4 w-[80vw] p-4 border-2 border-ternary rounded-lg'>
        <Link to={`/products/${id}`}>
          <div>
            <img 
              src={src} 
              alt='CSK Jersy' 
              className='hover:scale-105  hover:shadow-xl hover:rounded-md transition-all w-60 h-full object-fit cursor-pointer'
            />
          </div>
        </Link>
        <div className='self-center p-4 mx-4'>
            <h3 className='font-lora text-xl'>{name}</h3>
            <p className='mb-2'>{description}</p>
            <h2 className='text-2xl'>&#8377; {price} <span className='text-sm font-light'>{discount}% Discount</span></h2>
            <div className='flex items-center my-4'>
              <div className='flex items-center mr-6 justify-between text-2xl border-ternary'>
                <button>+</button>
                <p className='mx-2'>1</p>
                <button>-</button>
              </div>
              <BsFillTrashFill size='40px' className='bg-secondary p-2 cursor-pointer'/>
            </div>
        </div>
      </div>
  )
}
