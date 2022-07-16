import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiUserPlus, FiUserCheck } from 'react-icons/fi'
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { ImCross } from 'react-icons/im'
import { useAuth } from '../contexts'


export const SideNavBar = (props) => {

    const { isLoggedIn, handleLogOut } = useAuth()

    const handleLogOutButton = () => {
        handleLogOut()
        props.handleSideBar();
    }

  return (
    <div className='w-full h-full fixed top-4 left-0 bg-[#F0F0F0] z-50'>
        <div className='flex justify-between px-10'>
            <h2 
                className='font-extrabold font-lora text-[2rem]'>
                IPL<span className='text-primaryHover'>Stores</span>
            </h2>  
            <ImCross 
                size='35px'
                color='#7E74F8' 
                className='block cursor-pointer'
                onClick={props.handleSideBar}
            />
        </div>
        <div>
            <ul 
                className='font-poppins tracking-wider text-lg px-10'>
                <NavLink 
                to='/' 
                className={(navData) => navData.isActive ? 'font-semibold text-secondary' : ''}>
                    <li 
                        className='mt-4 hover:p-4 hover:text-primary hover:bg-ternary transition-all'
                        onClick={props.handleSideBar}    
                    >
                        Home
                    </li>
                </NavLink>
                <NavLink 
                end
                to='/products' 
                className={(navData) => navData.isActive ? 'font-semibold text-secondary' : ''}>
                    <li 
                        className='mt-4 hover:p-4 hover:text-primary hover:bg-ternary transition-all'
                        onClick={props.handleSideBar}
                    >
                        Products
                    </li>
                </NavLink>
                {isLoggedIn && <NavLink 
                to='/profile' 
                className={(navData) => navData.isActive ? 'font-semibold text-secondary' : ''}>
                    <li 
                        className='mt-4 hover:p-4 hover:text-primary hover:bg-ternary transition-all'
                        onClick={props.handleSideBar}
                    >
                        Profile
                    </li>
                </NavLink>}
                {isLoggedIn && <li 
                    className='mt-4 hover:p-4 hover:text-primary hover:bg-ternary transition-all cursor-pointer'
                    onClick={handleLogOutButton}
                >
                    Logout
                </li>}
            </ul>
        </div>
        <div className='w-full mx-auto mt-8'>
            {isLoggedIn 
                ? <ul 
                    className='flex justify-center items-center font-poppins tracking-wider text-[1.5rem]'>
                    <NavLink to='/cart'
                        className={(navData) => navData.isActive ? 'underline font-semibold text-primaryHover' : ''}>
                        <li 
                            className='mr-4 hover:text-primaryHover flex items-center'
                            onClick={props.handleSideBar}
                        >
                            <p className='mr-2'>Cart</p>
                            <p className='relative'>
                                <AiOutlineShoppingCart/>
                                {props.cartLength>0 && <span className='bg-white rounded-[50%] px-1 text-[0.7rem] absolute top-[-5px] left-4 font-semibold text-primary'>{props.cartLength}</span>}
                            </p>
                        </li>
                    </NavLink>
                    <NavLink to='/wishlist'
                        className={(navData) => navData.isActive ? 'underline font-semibold text-primaryHover' : ''}>
                        <li 
                            className='mr-4 hover:text-primaryHover flex items-center'
                            onClick={props.handleSideBar}    
                        >
                            <p className='mr-2'>WishList</p>
                            <p className='relative'>
                                <AiOutlineHeart/>
                                {props.wishListLength>0 && <span className='bg-white rounded-[50%] px-1 text-[0.7rem] absolute top-[-5px] left-4 font-semibold text-primary'>{props.wishListLength}</span>}
                            </p>
                        </li>
                    </NavLink>
                </ul>
                : <div className='flex items-center justify-center'>
                    <NavLink to='/signup'
                        className={(navData) => navData.isActive ? 'font-semibold text-primaryHover' : ''}>
                        <button 
                            className='mr-4 flex items-center tracking-wider text-[1.5rem] border-primary border-2 px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-all'
                            onClick={props.handleSideBar}    
                        >
                            <p className='mr-2'>Signup</p>
                            <FiUserPlus/>
                        </button>
                    </NavLink>
                    <NavLink to='/login'
                        className={(navData) => navData.isActive ? 'font-semibold text-primaryHover' : ''}>
                        <button 
                            className='mr-4 flex items-center tracking-wider text-[1.5rem] border-primary border-2 px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-all'
                            onClick={props.handleSideBar}    
                        >
                            <p className='mr-2'>Login</p>
                            <FiUserCheck/>
                        </button>
                    </NavLink>
                </div>
               
            }
        </div>
    </div>
  )
}
