import React, { useState } from 'react'
import { BiPencil } from 'react-icons/bi'
import { useUser } from '../contexts/user-context'
import { Input } from './Input'
import { PrimaryButton } from './PrimaryButton'
import { toast } from 'react-toastify';


export const UserDetails = () => {

    const [showEditForm, setShowEditForm] = useState(false)
    const [userName, setUserName] = useState('')
    const { activeUser, setActiveUser } = useUser()

    const isValidName = userName?.length > 1

    function handleEditButton() {
        setShowEditForm(true)
    }

    function handleNameSubmit(e){
        // e.preventDefault()
        setShowEditForm(false)
        setActiveUser(prevData => ({...prevData, firstName: userName}))
        toast.success(`User Name Updated To "${userName}" Successfully`)
        setUserName('')
    }


  return (
    <div className='w-full px-4 py-24 z-50'>
        <div className='max-w-[450px] mx-auto bg-ternary rounded-xl shadow-lg shadow-primaryHover'>
          <div className='max-w-[320px] mx-auto py-8 flex flex-col items-center justify-center font-poppins'>
            <h2 
                className='font-lora text-[2.5rem] text-center bg-secondary rounded-[50%] px-4'>
                {activeUser.firstName[0]}
            </h2>
            <p className='my-4'>Email: {activeUser.email}</p>   
            {!showEditForm && <p>Name: {activeUser.firstName}</p>}
            {!showEditForm && <PrimaryButton onClick={handleEditButton}>Edit <BiPencil className='ml-2' /></PrimaryButton> }
            {showEditForm && <Input 
                    required = {true}
                    label = 'name'
                    type = 'text'
                    status =''
                    validation={isValidName}
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    />}
            {showEditForm && <PrimaryButton onClick={handleNameSubmit}>Submit</PrimaryButton>}  
            {showEditForm && <p className='cursor-pointer text-red-500 hover:underline' onClick={() => setShowEditForm(false)}>Cancel</p>}  
          </div>
        </div>
    </div>
  )
}

