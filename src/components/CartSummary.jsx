import React from 'react'
import { BsShare, BsFillBagCheckFill } from 'react-icons/bs'
import { useCart } from '../contexts'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartSummary = () => {
    
    let totalDiscount;
    const { myCart } = useCart()

    const totalQty = myCart?.reduce((acc,curr) => {
        return acc+=curr.qty
    },0)

    const actualPrice = myCart?.reduce((acc,curr) => {
        return acc= acc + (curr.price * curr.qty)
    },0)


    if(actualPrice > 1000 && actualPrice <= 3000){
        totalDiscount = (actualPrice * 20) / 100
    }else if(actualPrice > 3000 && actualPrice <= 5000){
        totalDiscount = (actualPrice * 25) / 100
    }else if(actualPrice > 5000){
        totalDiscount = (actualPrice * 30) / 100
    }else {
        totalDiscount = (actualPrice * 5) / 100
    }

    const handleShareCart = async () => {
        let shareCartItems;

        if(myCart?.length > 1){
            // let shareCartItemsArray = [];
            // for(let i=0; i<myCart?.length; i++){
            //     shareCartItemsArray.push(myCart[i].id)
            // }
            let shareCartItemsArray = myCart.map(item => item.id)
            shareCartItems = shareCartItemsArray.join(',')
        }else{
            shareCartItems = myCart[0].id
        }

        const shareCartUrl = `https://${window.location.host}/products?cart=${shareCartItems}`
        
        try{
            await navigator.clipboard.writeText(shareCartUrl)
            toast.success('Cart URL Copied To Clipboard. Share With Your Friends')
        }catch(err){
            toast.error(`Failed To Copy. ${err}`)
        }
    }


  return (
    <div className='font-poppins m-4 p-5 border-ternary border-2 rounded-lg shadow-lg'>
        <h3 className='text-center font-lora text-2xl pb-4'>Cart Summary</h3>
        <hr className='border-black'/>
        <div className='py-2'>
            <div className='py-2 flex justify-between'>
                Quantity: <span> {totalQty} </span>
            </div>      
            <div className='py-2 flex justify-between'>
                Price: <span className='text-red-500'>&#8377; {actualPrice} </span>
            </div>      
            <div className='py-2 flex justify-between'> 
                Discount: <span className='text-green-800'>- &#8377; {totalDiscount} </span>
            </div>
            <div className='py-2 flex justify-between'> 
                Delivery: <span className='text-red-500'>&#8377; 200 </span>
            </div>
        </div>
        <hr className='border-black'/>      
        <div className='py-2 flex justify-between font-bold'>
            Total: <span className='text-green-800'>&#8377; {actualPrice - totalDiscount + 200} </span>
        </div>
        <hr className='border-black'/>      
        <div className='flex flex-col'>
            <button className='flex justify-center items-center bg-secondary py-2 px-4 rounded-lg my-4 hover:bg-secondaryHover'>Checkout <BsFillBagCheckFill className='ml-2'/> </button>
            <button 
                className='flex justify-center items-center border-2 border-secondary py-2 px-4 rounded-lg my-4 hover:bg-secondary'
                onClick={handleShareCart}>
                Share This Cart 
                <BsShare className='ml-2'/> 
            </button>
        </div>
    </div>
  )
}

