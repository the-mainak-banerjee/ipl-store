import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { SubNavbar, UserDetails, UserAddress } from '../../components'
import UserOrders from '../../components/UserOrders'
import { usePageTitle, useToast } from '../../hooks'


const Profile = () => {

    usePageTitle('IPLStores-Profile')
    useToast()
    const [searchParams,setSearchParams] = useSearchParams()

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
                className={`${button_style} ${(searchParams.get('type') === 'user' || searchParams.get('type') === null) ? button_active : 'bg-secondary text-black'}`}
                onClick={() => setSearchParams({type: 'user'})}
            >About You</button>
            <button 
                className={`${button_style} ${searchParams.get('type') === 'address' ? button_active : 'bg-secondary text-black'}`}
                onClick={() => setSearchParams({type: 'address'})}
            >Your Address</button>
            <button 
                className={`${button_style} ${searchParams.get('type') === 'orders' ? button_active : 'bg-secondary text-black'}`}
                onClick={() => setSearchParams({type: 'orders'})}
            >Your Orders</button>
        </section>
        <section className='px-10 my-10 lg:px-36 min-h-[60vh]'>
            {(searchParams.get('type') === 'user' || searchParams.get('type') === null) && <UserDetails/>}
            {searchParams.get('type') === 'address' && <UserAddress/>}
            {searchParams.get('type') === 'orders' && <UserOrders/>}
        </section>
    </>

  )
}

export default Profile