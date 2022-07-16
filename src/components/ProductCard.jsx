import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {AiOutlineHeart, AiFillStar, AiFillHeart} from 'react-icons/ai'
import { useCart, useWishList } from '../contexts'
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ProductCard = ({product,id,name,description,price,src,discount,rating, showBoxStyle}) => {
  
  const { addToWishList, removeFromWishlist, productIsInWishList } = useWishList()
  const {addItemToCart, productIsInCart,  loading} = useCart()
  const navigate = useNavigate()

  const isProductInWishList = productIsInWishList(id)
  const isProductInCart = productIsInCart( id)

  const addItemToWishlist = () => {
    addToWishList(product)
  }

  const removeItemFromWishlist = () => {
    removeFromWishlist(id)
  }

  return (
    <>
      {!showBoxStyle && <div className='mr-4 mt-4 w-96 sm:w-60 font-poppins transition-all'>
        <Link to={`/products/${id}`}>
          <div 
            className='h-auto sm:h-80 flex items-center justify-center bg-ternary p-2'>
            <img 
              src={src} 
              alt={name}
              className='transition-all w-full h-full object-fit cursor-pointer hover:scale-125 hover:shadow-xl hover:rounded-md'  
            />
          </div>
        </Link>

        <div className='px-2 pb-4 pt-2 bg-white border-x-2 border-ternary'>
          <div className='flex items-center justify-between pb-4'>
            {isProductInWishList 
              ? <AiFillHeart size='30px' className='text-red-500 cursor-pointer' onClick={removeItemFromWishlist}/> 
              : <AiOutlineHeart size='30px' className='text-red-500 cursor-pointer' onClick={addItemToWishlist}/>
            }
            <span className='flex items-center bg-primary text-white px-2 rounded'>{rating} <AiFillStar/></span>
          </div>

          <h3 className='font-lora text-xl'>{name}</h3>
          <p className='sm:h-20'>{description}</p>
          <h2 className='text-2xl'>&#8377; {price} <span className='text-sm font-light'>{discount}% Discount</span></h2>
        </div>

        {isProductInCart
        ? <button 
            className='bg-primary text-white px-8 py-2 font-light w-full hover:bg-primaryHover hover:font-semibold'
            onClick={() => navigate('/cart')}
            >
            Go to Cart
          </button>
        : <button 
            className='bg-secondary px-8 py-2 font-light w-full hover:bg-secondaryHover hover:font-semibold'
            onClick={() => addItemToCart(product)}
            disabled={loading}
            >
            Add To Cart
          </button>}
      </div>}


      {showBoxStyle && <div className='flex flex-wrap m-4 w-full p-4 border-2 border-ternary rounded-lg '>
        <Link to={`/products/${id}`}>
          <div>
            <img 
              src={src} 
              alt={name} 
              className='hover:scale-105  hover:shadow-xl hover:rounded-md transition-all w-60 h-full object-fit cursor-pointer'
            />
          </div>
        </Link>
        <div className='self-center p-4 mx-4'>
            <div className='flex items-center'>

              <h3 className='font-lora text-xl mr-2'>{name}</h3>

              {isProductInWishList 
              ? <AiFillHeart size='20px' className='text-red-500 cursor-pointer' onClick={removeItemFromWishlist}/>
              : <AiOutlineHeart size='20px' className='text-red-500 cursor-pointer' onClick={addItemToWishlist}/>
              }
            </div>

            <p className='mb-2'>{description}</p>

            <div className='flex items-center'>
              <h2 className='text-2xl mr-2'>&#8377; {price} <span className='text-sm font-light'>{discount}% Discount</span></h2>
              <span className='flex items-center bg-primary text-white px-2 rounded'>{rating} <AiFillStar/></span>
            </div>

            {isProductInCart 
            ? <button 
              className='bg-primary mt-4 px-10 py-2 text-white  font-light hover:bg-primaryHover hover:font-semibold'
              onClick={() => navigate('/cart')}
              >
              Go To Cart
              </button>
            : <button 
              disabled={loading}
              className='bg-secondary mt-4 px-10 py-2 font-light hover:bg-secondaryHover hover:font-semibold disabled:bg-ternary'
              onClick={() => addItemToCart(product)}
              >
              Add To Cart
              </button>}
        </div>
      </div>}
    </>
  )
}


