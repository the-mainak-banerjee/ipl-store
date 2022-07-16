import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { FiUserMinus, FiUserCheck } from 'react-icons/fi'
import { BsList } from 'react-icons/bs'
import { SideNavBar } from './SideNavBar'
import { useAuth, useCart, useWishList } from '../contexts'

export const Navbar = () => {

  const [showSideBar,setShowSideBar] = useState(false)
  const { isLoggedIn, handleLogOut } = useAuth()
  const { myWishList } = useWishList()
  const { myCart } = useCart()

  function handleSideBar(){
    setShowSideBar(prevState => !prevState)
  }

  return (
    <>
      <div 
        className='lg:px-36 px-10 flex justify-between items-center h-20 w-full'>
        <NavLink to='/'>
          <h2 
            className='font-extrabold font-lora text-[2rem]'>
              IPL<span className='text-primary'>Stores</span>
          </h2>
        </NavLink>
        <ul 
          className='hidden lg:flex items-center font-poppins tracking-wider'>
          <NavLink 
            to='/' 
            className={(navData) => navData.isActive ? 'underline font-semibold text-primary' : ''}>
              <li 
                className='mr-8 hover:text-primaryHover'>
                Home
              </li>
          </NavLink>
          <NavLink 
            end
            to='/products' 
            className={(navData) => navData.isActive ? 'underline font-semibold text-primary' : ''}>
            <li 
              className='mr-8 hover:text-primaryHover'>
              Products
            </li>
          </NavLink>
          {isLoggedIn && <NavLink 
            to='/profile' 
            className={(navData) => navData.isActive ? 'underline font-semibold text-primary' : ''}>
            <li 
              className='mr-8 hover:text-primaryHover'>
              Profile
            </li>
          </NavLink>}
        </ul>
        {isLoggedIn 
          ? <ul 
              className='hidden lg:flex items-center font-poppins tracking-wider text-[1.7rem]'>
               <NavLink to='/wishlist'
                  className={(navData) => navData.isActive ? 'underline font-semibold text-primaryHover' : ''}>
                  <li 
                    className='mr-4 hover:text-primaryHover relative'>
                      <AiOutlineHeart/>
                      {myWishList?.length>0 && <span className='bg-white rounded-[50%] px-1 text-[0.7rem] absolute top-[-3px] left-4 font-semibold text-primary'>{myWishList?.length}</span>}
                  </li>
              </NavLink>
              
              <NavLink to='/cart'
                className={(navData) => navData.isActive ? 'underline font-semibold text-primaryHover' : ''}>
                <li 
                  className='mr-4 hover:text-primaryHover relative'>
                   <AiOutlineShoppingCart/>
                   {myCart?.length>0 && <span className='bg-white rounded-[50%] px-1 text-[0.7rem] absolute top-[-3px] left-4 font-semibold text-primary'>{myCart?.length}</span>}
                </li>
              </NavLink>
              <li className='mr-4 flex items-center text-[1rem] cursor-pointer '>
                <button 
                  className='flex items-center border-2 border-primary px-4 py-2 rounded-md hover:bg-primary hover:text-white transition-all'
                  onClick={handleLogOut}
                  >
                  <span>Logout</span>
                  <FiUserMinus className='ml-2'/>
                </button>                  
              </li>
            </ul>
            : <ul className='hidden lg:flex items-center font-poppins tracking-wider text-[1.3rem]'>
              <NavLink to='/signup'
                  className={(navData) => navData.isActive ? 'underline font-semibold text-primaryHover hidden lg:block' : 'hidden lg:block'}>
                  <p 
                    className='text-xl px-4 py-2 rounded-lg hover:text-primary transition-all'>
                    Signup
                  </p>
                </NavLink>
              <NavLink to='/login'
                  className={(navData) => navData.isActive ? 'underline font-semibold text-primaryHover' : ''}>
                  <button 
                    className='text-xl flex items-center border-2 border-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-all'>
                    <p className='mr-2'>Login</p>
                    <FiUserCheck/>
                  </button>
                </NavLink>
            </ul>
            }
        <BsList 
          size='40px' 
          color='#7E74F8' 
          className='block lg:hidden cursor-pointer'
          onClick={handleSideBar}
        />
      </div>
      {showSideBar && <SideNavBar 
        handleSideBar={handleSideBar} 
        wishListLength={myWishList?.length}
        cartLength={myCart?.length}
      />}
    </>
  )
}

