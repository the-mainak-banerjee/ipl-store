import React from 'react'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className='bg-ternary text-gray-500 mt-5 md:px-10 lg:px-36 md:py-10 px-4 pb-5 pt-5'>
        <div className='flex flex-row justify-between items-center text-center w-full'>
            <div>
                <h3 
                    className='font-extrabold font-lora text-2xl'>
                IPL<span className='text-primary'>Stores</span>
                </h3>
                <ul className='text-left list-none flex flex-col justify-around'>
                    <li className='cursor-pointer hover:text-primary hover:underline'>
                        <p>About Us</p>
                    </li>
                    <li className='cursor-pointer hover:text-primary hover:underline'>
                        <p>Contact Us</p>
                    </li>
                    <li className='cursor-pointer hover:text-primary hover:underline'>
                        <p>Career</p>
                    </li>
                </ul>
            </div>
            <div>
            <h4 className='text-lg text-black text-left'>Menu</h4>
                <ul className='text-left list-none flex flex-col justify-around'>
                    <li className='cursor-pointer hover:text-primary hover:underline'>
                        <NavLink className={(navData) => navData.isActive ? 'text-primary underline' : ''} to='/'>Home</NavLink>
                    </li>
                    <li className='cursor-pointer hover:text-primary hover:underline'>
                        <NavLink className={(navData) => navData.isActive ? 'text-primary underline' : ''} to='/products'>Products</NavLink>
                    </li>
                    <li className='cursor-pointer hover:text-primary hover:underline'>
                        <NavLink className={(navData) => navData.isActive ? 'text-primary underline' : ''} to='/cart'>Cart</NavLink>
                    </li>
                </ul>
            </div>
        <div>
            <h4 className='text-lg text-black text-left'>Social</h4>
            <ul className='text-left list-none flex flex-col justify-around'>
                <li className='cursor-pointer hover:text-primary hover:underline'>
                    <a href='linkedIn.com/in/themainakb/'> 
                        LinkedIn 
                    </a>
                </li>
                <li className='cursor-pointer hover:text-primary hover:underline'>
                    <a href='https://twitter.com/themainakb'> 
                        Twitter 
                    </a>
                </li>
                <li className='cursor-pointer hover:text-primary hover:underline'>
                    <a href='https://github.com/the-mainak-banerjee'> 
                        Github 
                    </a>
                </li>
            </ul>
            </div>
        </div>
    </div>
  )
}

