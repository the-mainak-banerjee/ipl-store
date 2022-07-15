import React, { useState } from 'react'
import { SubNavbar, UserDetails, UserAddress } from '../../components'
import { usePageTitle } from '../../hooks'


export const Profile = () => {

    usePageTitle('IPLStores-Profile')

    const [displayCard, setDisplayCard] = useState(0)

    const button_style = 'tracking-wider px-6 py-2 m-4 rounded-lg hover:scale-105 hover:bg-primary hover:text-white'

    const button_active = 'bg-primary text-white shadow-xl scale-105 font-semibold'

   
  return (
    <>
        <section>
          <SubNavbar pageName='Profile'/>
        </section>
        <section 
            className='px-10 my-10 lg:px-36 flex flex-wrap items-center justify-center font-poppins'
        >
            <button 
                className={`${button_style} ${displayCard === 0 ? button_active : 'bg-secondary text-black'}`}
                onClick={() => setDisplayCard(0)}
            >About You</button>
            <button 
                className={`${button_style} ${displayCard === 1 ? button_active : 'bg-secondary text-black'}`}
                onClick={() => setDisplayCard(1)}
            >Your Address</button>
            <button 
                className={`${button_style} ${displayCard === 2 ? button_active : 'bg-secondary text-black'}`}
                onClick={() => setDisplayCard(2)}
            >Your Orders</button>
        </section>
        <section className='px-10 my-10 lg:px-36'>
            {displayCard === 0 && <UserDetails/>}
            {displayCard === 1 && <UserAddress/>}
            {displayCard === 2 && <p>Order Info Goes Here</p>}
        </section>
    </>

  )
}

