import React from 'react'
import { BsShare, BsFillBagCheckFill } from 'react-icons/bs'

export const CartSummary = () => {
  return (
    <div className='font-poppins m-4 p-5 border-ternary border-2 '>
        <h3 className='text-center font-lora text-2xl pb-4'>Cart Summary</h3>
        <hr className='border-black'/>
        <div className='py-2'>
            <div className='py-2 flex justify-between'>
                Quantity: <span> 2 </span>
            </div>      
            <div className='py-2 flex justify-between'>
                Quantity: <span> 2 </span>
            </div>      
            <div className='py-2 flex justify-between'> 
                Quantity: <span> 2 </span>
            </div>      
            <div className='py-2 flex justify-between'>
                Quantity: <span> 2 </span>
            </div>
        </div>
        <hr className='border-black'/>      
        <div className='py-2 flex justify-between font-bold'>
            Quantity: <span> 2 </span>
        </div>
        <div className='flex flex-col'>
            <button className='flex justify-center items-center bg-secondary py-2 px-4 rounded-lg my-4 hover:bg-secondaryHover'>Checkout <BsFillBagCheckFill className='ml-2'/> </button>
            <button className='flex justify-center items-center border-2 border-secondary py-2 px-4 rounded-lg my-4 hover:bg-secondary'>Share This Cart <BsShare className='ml-2'/> </button>
        </div>
    </div>
  )
}

