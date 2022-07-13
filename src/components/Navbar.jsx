import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { FiUserMinus, FiUserPlus } from 'react-icons/fi'
import { BsList } from 'react-icons/bs'
import { SideNavBar } from './SideNavBar'

export const Navbar = () => {

  const [showSideBar,setShowSideBar] = useState(false)
  const user = true

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
            to='/products' 
            className={(navData) => navData.isActive ? 'underline font-semibold text-primary' : ''}>
            <li 
              className='mr-8 hover:text-primaryHover'>
              Products
            </li>
          </NavLink>
          {user && <NavLink 
            to='/profile' 
            className={(navData) => navData.isActive ? 'underline font-semibold text-primary' : ''}>
            <li 
              className='mr-8 hover:text-primaryHover'>
              Profile
            </li>
          </NavLink>}
        </ul>
        {user 
          ? <ul 
              className='hidden lg:flex items-center font-poppins tracking-wider text-[1.3rem]'>
              <NavLink to='/wishlist'
                className={(navData) => navData.isActive ? 'underline font-semibold text-primaryHover' : ''}>
                <li 
                  className='mr-4 hover:text-primaryHover'>
                  <AiOutlineHeart/>
                </li>
              </NavLink>
              <NavLink to='/cart'
                className={(navData) => navData.isActive ? 'underline font-semibold text-primaryHover' : ''}>
                <li 
                  className='mr-4 hover:text-primaryHover'>
                   <AiOutlineShoppingCart/>
                </li>
              </NavLink>
              <li className='mr-4 flex items-center text-[1rem] cursor-pointer '>
                <button className='flex items-center border-2 border-primary px-4 py-2 rounded-md hover:bg-primary hover:text-white transition-all'>
                  <span>Logout</span>
                  <FiUserMinus className='ml-2'/>
                </button>                  
              </li>
            </ul>
            : <NavLink to='/login'
                className={(navData) => navData.isActive ? 'underline font-semibold text-primaryHover hidden lg:block' : 'hidden lg:block'}>
                <buton 
                  className='text-xl flex items-center border-2 border-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-all'>
                  <p className='mr-2'>Login</p>
                  <FiUserPlus/>
                </buton>
              </NavLink>
            }
        <BsList 
          size='40px' 
          color='#7E74F8' 
          className='block lg:hidden cursor-pointer'
          onClick={handleSideBar}
        />
      </div>
      {showSideBar && <SideNavBar handleSideBar={handleSideBar}/>}
    </>
  )
}

