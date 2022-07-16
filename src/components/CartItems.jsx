import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillTrashFill } from 'react-icons/bs'
import {AiFillHeart} from 'react-icons/ai'
import { useCart,  useWishList } from '../contexts'
import { PrimaryButton } from './PrimaryButton'

export const CartItems = ({product,src,id,name,description,price,discount,qty}) => {

  const { removeFromCart, updateCartItem } = useCart()
  const { productIsInWishList, addToWishList } = useWishList()

  const isProductInWishList = productIsInWishList(id)


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
          <div className='flex items-center'>
            <h3 className='font-lora text-xl mr-2'>{name}</h3>
            {isProductInWishList && <AiFillHeart size='20px' className='text-red-500'/>}
          </div>
            <p className='mb-2'>{description}</p>
            <h2 className='text-2xl'>&#8377; {price} <span className='text-sm font-light'>{discount}% Discount</span></h2>
            <div className='flex items-center my-4'>
              <div className='flex items-center mr-6 justify-between text-2xl'>
                <button className='bg-primary text-white px-2' onClick={() => updateCartItem(id,"increment")}>+</button>
                <p className='mx-2'>Qty: {qty}</p>
                <button 
                  className='bg-primary text-white px-2 text-center'
                  onClick={
                    () => {
                      qty===1 ? removeFromCart(id) : updateCartItem(id,"decrement")
                    }
                  }>
                  -
                </button>
              </div>
              <BsFillTrashFill size='40px' className='bg-secondary p-2 cursor-pointer' onClick={() => removeFromCart(id)}/>
            </div>
            {!isProductInWishList && <PrimaryButton
              onClick={
                () => {
                  if(!isProductInWishList){
                    removeFromCart(id)
                    addToWishList(product)
                  }
                }
              }
            >
              Move To WishList</PrimaryButton> }
        </div>
      </div>
  )
}
