import React from 'react'

export const ProductDetailsCard = ({ product }) => {
  return (
    <section className='flex flex-col lg:flex-row w-full items-center justify-center'>
        <div className='lg:w-[50vw] p-4 bg-ternary m-4'>
          <img src={product.src} alt={product.name} className='w-full h-full object-cover'/>
        </div>
        <div>
          <h3 className='font-lora text-3xl'>{product.name}</h3>
            <p className='mb-2 text-lg'>{product.description}</p>
            <h2 className='text-2xl'>&#8377; {product.price} <span className='text-sm font-light'>{product.discount}% Discount</span></h2>
            <button 
            className='bg-secondary mt-4 px-10 py-2 font-light w-full hover:bg-secondaryHover hover:font-semibold'>
              Add To Cart
          </button>
        </div>
    </section>
  )
}
