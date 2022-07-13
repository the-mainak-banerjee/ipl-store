import React, { useState } from 'react'
import { BiPencil } from 'react-icons/bi'
import { Input } from './Input'
import { PrimaryButton } from './PrimaryButton'

export const UserDetails = () => {

    const [showEditForm, setShowEditForm] = useState(false)
    const [userName, setUserName] = useState('')

    const isValidName = userName?.length > 1

    function handleEditButton() {
        setShowEditForm(true)
    }

    function handleNameSubmit(e){
        // e.preventDefault()
        console.log(userName)
        setShowEditForm(false)
    }

  return (
    <div className='w-full px-4 py-24 z-50'>
        <div className='max-w-[450px] mx-auto bg-ternary rounded-xl shadow-lg shadow-primaryHover'>
          <div className='max-w-[320px] mx-auto py-8 flex flex-col items-center justify-center font-poppins'>
            <h2 
                className='font-lora text-[2.5rem] text-center bg-secondary rounded-[50%] px-4'>
                G
            </h2>
            <p className='my-4'>Email: guest@gmail.com</p>   
            {!showEditForm && <p>Name: Guest</p>}
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
          </div>
        </div>
    </div>
  )
}

