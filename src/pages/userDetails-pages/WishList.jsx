import React from 'react'
import { Link } from 'react-router-dom'
import { PrimaryButton, ProductList, SubNavbar } from '../../components'
import { AiOutlineHeart } from 'react-icons/ai'
import { usePageTitle, useToast } from '../../hooks'
import { useWishList } from '../../contexts'


const WishList = () => {

    usePageTitle('IPLStores-Wishlist')
    useToast()
    const { myWishList } = useWishList()


  return (
    <>
        <section>
          <SubNavbar pageName='Wishlist'/>
        </section>
        {myWishList?.length>0 
          ? <section className='my-8 px-4'>
                <ProductList products={myWishList}/>
            </section> 
          : <section 
              className='w-full mt-10 lg:pl-36 font-poppins flex items-center justify-center'>
              <div className='h-[60vh] flex flex-col items-center justify-center'>
                  <h3 className='text-2xl font-bold font-lora'>Your Wishlist Is Empty</h3> 
                  <Link to='/products'><PrimaryButton>Fill It <AiOutlineHeart className='ml-2'/></PrimaryButton></Link>
              </div> 
            </section>
        }
        
    </>
  )
}

export default WishList