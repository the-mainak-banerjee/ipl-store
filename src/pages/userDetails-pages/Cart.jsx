import React from 'react'
import { Link } from 'react-router-dom'
import { CartItems, CartSummary, PrimaryButton, SubNavbar } from '../../components'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { usePageTitle } from '../../hooks'

export const Cart = () => {

  const cartItems = [
    //   {
    //     id: 10,
    //     name: "CSK Jersy ",
    //     description:"Official Match Jersy Of Chennai Super Kings",
    //     price: 1299,
    //     team: 'csk',
    //     catagory: 'jersy',
    //     rating: 4.8,
    //     discount: 25,
    //     src: '../../assets/images/csk/jersy.jpg'
    // },
    // {
    //     id: 12,
    //     name: "DC Jersy ",
    //     description:"Official Match Jersy Of Delhi Capitals",
    //     price: 1999,
    //     team: 'dc',
    //     catagory: 'jersy',
    //     rating: 4.8,
    //     discount: 20,
    //     src: '../../assets/images/dc/jersy.jpg'
    // }
  ]

  usePageTitle('IPLStores-Cart')

  const displayCartItems = cartItems.map(item => {
    return(
      <CartItems 
        key={item.id}
        id={item.id}
        src={item.src}
        name={item.name}
        description = {item.description}
        price = {item.price}
      />
    )
  })

  return (
    <>
      <section>
          <SubNavbar pageName='Cart'/>
      </section>
      {cartItems?.length > 0 
        ? <section className='w-full pl-10 mt-10 lg:pl-36'>
            <div className='flex flex-col flex-1'>
            {displayCartItems}
            </div>
            <div className='mx-4 mb-10 flex flex-wrap justify-between items-center w-[80vw] font-poppins'>
              <button className='bg-secondary px-6 py-2 my-2 hover:bg-secondaryHover'><Link to='/products'>Continue Shopping</Link></button>
              <button className='bg-primary text-white px-6 py-2 my-2'>Clear Cart</button>
            </div>
            <div className='w-[80vw] sm:w-[60vw] lg:w-[40vw]'>
              <CartSummary />
            </div>
        </section> 
        : <section className='w-full pl-10 mt-10 lg:pl-36 font-poppins'>
            <div className='h-[60vh] flex flex-col items-center justify-center'>
              <h3 className='text-2xl font-bold font-lora'>Your Cart Is Empty</h3> 
              <Link to='/products'><PrimaryButton>Fill It <AiOutlineShoppingCart className='ml-2'/></PrimaryButton></Link>
            </div>
          </section>
      }
    </>
  )
}

