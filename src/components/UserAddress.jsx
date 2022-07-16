import React, { useEffect, useState } from 'react'
import { useAddress, useUser } from '../contexts'
import { Input } from './Input'
import { PrimaryButton } from './PrimaryButton'
import { v4 as uuid } from "uuid";
import { toast } from 'react-toastify';



export const UserAddress = () => {
    const [showAddressFrom, setShowAddressForm] = useState(false)
    const [validData, setValidData] = useState(false)
    const { userTocken } = useUser()
    const { createUserAddress, currentUserAddress, deleteAddresss } = useAddress()
    const [addressData, setAddressData] = useState({
        fName: '',
        mobile:'',
        pin: '',
        address: '',
        town:'',
        state:'',
        userTocken: userTocken,
    })

    const dummyAddress = {
        fName: 'User',
        mobile: 9876543210,
        pin: 712418,
        address: '89,Sector-V,SaltLake',
        town: 'Kolkata',
        state: 'West Bengal',
        userTocken: userTocken
    }

    const validateData = (data) => {
        return data?.length > 2
    }

    useEffect(() => {
        if(
            addressData.fName?.length > 2 &&
            addressData.mobile?.length > 9 &&
            addressData.pin?.length > 5 &&
            addressData.address?.length > 2 &&
            addressData.town?.length > 2 &&
            addressData.state?.length > 2
        ){
            setValidData(true)
        }else{
            setValidData(false)
        }
    }, [addressData])

    const addressFormHandler = (address) => {
        createUserAddress(address)
        setShowAddressForm(false)
        setAddressData({
            fName: '',
            mobile:'',
            pin: '',
            address: '',
            town:'',
            state:'',
            userTocken: userTocken,
        })
        toast.success('Address Updated Successfully')
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        addressFormHandler(addressData)
    }

    const handleDummyAddress = () => {
        addressFormHandler(dummyAddress)
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
                    <button className='bg-red-500 px-4 py-2 rounded-lg hover:scale-105' onClick={() => deleteAddresss(item.id)}>Delete Address</button>   
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
        {showAddressFrom && <div className='w-full px-4 py-8 z-50'>
            <div className='max-w-[450px] mx-auto bg-ternary rounded-xl shadow-lg shadow-primaryHover'>
                <div className='max-w-[320px] mx-auto py-8 flex flex-col items-center justify-center font-poppins'>
                    <form onSubmit={handleFormSubmit}>
                        <Input
                            required = {true}
                            label = 'Full Name'
                            type = 'text'
                            name='fName'
                            value={addressData.fName}
                            validation={validateData(addressData.fName)}
                            onChange={(e) => setAddressData(prevData => ({...prevData, fName:e.target.value}))}
                        />
                        <Input
                            required = {true}
                            label = 'Mobile'
                            type = 'number'
                            name='mobile'
                            value={addressData.mobile}
                            validation={addressData.mobile?.length > 9}
                            errMsg='Invalid Mobile Number'
                            onChange={(e) => setAddressData(prevData => ({...prevData, mobile:e.target.value}))}
                        />
                        <Input
                            required = {true}
                            label = 'Pin'
                            type = 'number'
                            name='pin'
                            value={addressData.pin}
                            validation={addressData.pin?.length > 5}
                            errMsg='Pin Length Should Be more Than 5'
                            onChange={(e) => setAddressData(prevData => ({...prevData, pin:e.target.value}))}
                        />
                        <Input
                            required = {true}
                            label = 'Address'
                            type = 'text'
                            name='address'
                            value={addressData.address}
                            validation={validateData(addressData.address)}
                            onChange={(e) => setAddressData(prevData => ({...prevData, address:e.target.value}))}
                        />
                        <Input
                            required = {true}
                            label = 'City/Town'
                            type = 'text'
                            name='town'
                            value={addressData.town}
                            validation={validateData(addressData.town)}
                            onChange={(e) => setAddressData(prevData => ({...prevData, town:e.target.value}))}
                        />
                        <Input
                            required = {true}
                            label = 'State'
                            type = 'text'
                            name='state'
                            value={addressData.state}
                            validation={validateData(addressData.state)}
                            onChange={(e) => setAddressData(prevData => ({...prevData, state:e.target.value}))}
                        />
                        <PrimaryButton disabled={!validData}>Save Address</PrimaryButton>
                        <p 
                            className='cursor-pointer text-primary text-center hover:underline' 
                            onClick={handleDummyAddress}>
                            Add Dummy Address
                        </p>
                    </form>
                </div>
            </div>
        </div>
        }
      {showAddressDetails}
    </>
  )
}
