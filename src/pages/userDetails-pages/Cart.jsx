import React from 'react'
import { Link } from 'react-router-dom'
import { CartItems, CartSummary, PrimaryButton, SubNavbar } from '../../components'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { usePageTitle, useToast } from '../../hooks'
import { useCart } from '../../contexts'

const Cart = () => {

  const { myCart, removeFromCart } = useCart()

  usePageTitle('IPLStores-Cart')
  useToast()

  const displayCartItems = myCart?.map(item => {
    return(
      <CartItems 
        key={item._id}
        id={item._id}
        product={item}
        src={item.src}
        name={item.name}
        description = {item.description}
        price = {item.price}
        discount={item.discount}
        qty = {item.qty}
      />
    )
  })

  return (
    <>
      <section>
          <SubNavbar pageName='Cart'/>
      </section>
      {myCart?.length > 0 
        ? <section className='w-full flex flex-col items-center justify-center mt-10 lg:pl-36'>
            <div className='flex flex-col flex-1'>
            {displayCartItems}
            </div>
            <div className='mx-4 mb-10 flex flex-wrap justify-between items-center w-[80vw] font-poppins'>
              <button className='bg-secondary px-6 py-2 my-2 hover:bg-secondaryHover'><Link to='/products'>Continue Shopping</Link></button>
              <button 
                className='bg-primary text-white px-6 py-2 my-2'
                onClick={
                  () => {
                    myCart?.forEach(item => removeFromCart(item._id))
                  }
                }>
                Clear Cart</button>
            </div>
            <div className='w-[80vw] sm:w-[60vw] lg:w-[40vw]'>
              <CartSummary />
            </div>
        </section> 
        : <section className='w-full mt-10 lg:pl-36 font-poppins flex items-center justify-center'>
            <div className='h-[60vh] flex flex-col items-center justify-center'>
              <h3 className='text-2xl font-bold font-lora'>Your Cart Is Empty</h3> 
              <Link to='/products'><PrimaryButton>Fill It <AiOutlineShoppingCart className='ml-2'/></PrimaryButton></Link>
            </div>
          </section>
      }
    </>
  )
}

export default Cart

