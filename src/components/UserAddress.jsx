import React, { useState } from 'react'
import { useAddress, useUser } from '../contexts'
import { Input } from './Input'
import { PrimaryButton } from './PrimaryButton'
import { v4 as uuid } from "uuid";


export const UserAddress = () => {
    const [showAddressFrom, setShowAddressForm] = useState(false)
    const { userTocken } = useUser()
    const { createUserAddress, currentUserAddress } = useAddress()
    const [addressData, setAddressData] = useState({
        fName: '',
        mobile:'',
        pin: '',
        address: '',
        town:'',
        state:'',
        userTocken: userTocken
    })

    

    const validateData = (data) => {
        return data.length > 2
    }

    const handleFormData= (e) => {
        const {name, value} = e.target
        setAddressData(prevData => (
            {
                ...prevData,
                [name]: value
            }
        ))
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        createUserAddress(addressData)
        setShowAddressForm(false)
    }
    
    let showAddressDetails = currentUserAddress?.map((item,idx) => {
        return (
            <div className='w-full px-4 py-8 z-50' key={uuid()}>
                <div className='max-w-[450px] mx-auto bg-ternary rounded-xl shadow-lg shadow-primaryHover'>
                <div className='max-w-[320px] mx-auto py-4 flex flex-col items-center justify-center font-poppins'>
                    <h2 
                        className='font-lora text-[2.5rem] text-center bg-secondary px-4'>
                        Your Address {idx+1} 
                    </h2>
                    <p className='my-4'>Name: {item?.fName}</p>   
                    <p className='my-4'>Mobile: {item?.mobile}</p>   
                    <p className='my-4'>Pin: {item?.pin}</p>   
                    <p className='my-4'>Address: {item?.address}</p>   
                    <p className='my-4'>City/Town: {item?.town}</p>   
                    <p className='my-4'>State: {item?.state}</p>   
                </div>
                </div>
            </div>
        )
    })


  return (
    <>
        <div className='flex items-center justify-center'>
            <PrimaryButton 
                onClick={() => setShowAddressForm(prevState => !prevState)}>
                {showAddressFrom ? 'Cancel' : 'Add New Address'}
            </PrimaryButton>
        </div>
        {showAddressFrom && <div className='w-full px-4 py-24 z-50'>
            <div className='max-w-[450px] mx-auto bg-ternary rounded-xl shadow-lg shadow-primaryHover'>
                <div className='max-w-[320px] mx-auto py-8 flex flex-col items-center justify-center font-poppins'>
                    <form onSubmit={handleFormSubmit}>
                        <Input
                            required = {true}
                            label = 'Full Name'
                            type = 'text'
                            status =''
                            name='fName'
                            // value={addressData.fName}
                            validation={validateData(addressData.fName)}
                            onChange={handleFormData}
                        />
                        <Input
                            required = {true}
                            label = 'Mobile'
                            type = 'text'
                            status =''
                            name='mobile'
                            // value={addressData.mobile}
                            validation={validateData(addressData.mobile)}
                            onChange={handleFormData}
                        />
                        <Input
                            required = {true}
                            label = 'Pin'
                            type = 'text'
                            status =''
                            name='pin'
                            // value={addressData.pin}
                            validation={validateData(addressData.pin)}
                            onChange={handleFormData}
                        />
                        <Input
                            required = {true}
                            label = 'Address'
                            type = 'text'
                            status =''
                            name='address'
                            // value={addressData.address}
                            validation={validateData(addressData.address)}
                            onChange={handleFormData}
                        />
                        <Input
                            required = {true}
                            label = 'City/Town'
                            type = 'text'
                            status =''
                            name='town'
                            // value={addressData.town}
                            validation={validateData(addressData.town)}
                            onChange={handleFormData}
                        />
                        <Input
                            required = {true}
                            label = 'State'
                            type = 'text'
                            status =''
                            name='state'
                            // value={addressData.state}
                            validation={validateData(addressData.state)}
                            onChange={handleFormData}
                        />
                        <PrimaryButton>Save Address</PrimaryButton>
                    </form>
                </div>
            </div>
        </div>
        }
      {showAddressDetails}
    </>
  )
}
