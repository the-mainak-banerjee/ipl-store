import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../contexts'

export const ProductDetailsCard = ({ product }) => {
  const {addItemToCart, productIsInCart,  loading} = useCart()
  const navigate = useNavigate()

  const isProductInCart = productIsInCart( product._id)

  return (
    <section className='flex flex-col lg:flex-row w-full items-center justify-center'>
        <div className='lg:w-[50vw] p-4 bg-ternary m-4'>
          <img src={product.src} alt={product.name} className='w-full h-full object-cover'/>
        </div>
        <div>
          <h3 className='font-lora text-3xl'>{product.name}</h3>
            <p className='mb-2 text-lg'>{product.description}</p>
            <h2 className='text-2xl'>&#8377; {product.price} <span className='text-sm font-light'>{product.discount}% Discount</span></h2>
            {/* <button 
            className='bg-secondary mt-4 px-10 py-2 font-light w-full hover:bg-secondaryHover hover:font-semibold'>
              Add To Cart
          </button> */}
          {isProductInCart
        ? <button 
            className='bg-primary text-white mt-4 px-10 py-2 font-light w-full hover:bg-primaryHover hover:font-semibold'
            onClick={() => navigate('/cart')}
            >
            Go to Cart
          </button>
        : <button 
            className='bg-secondary mt-4 px-10 py-2 font-light w-full hover:bg-secondaryHover hover:font-semibold'
            onClick={() => addItemToCart(product)}
            disabled={loading}>
            Add To Cart
          </button>}
        </div>
    </section>
  )
}
