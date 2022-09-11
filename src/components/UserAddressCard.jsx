import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'

export const UserAddressCard = ({ item,handleDeliveryAddress,isSelected }) => {
  return (
    <div className='m-4 p-4 z-50' onClick={() => handleDeliveryAddress(item.id)}>
      <div className='mx-auto bg-ternary rounded-xl shadow-lg shadow-primaryHover relative'>
      <div className='mx-auto py-4 flex flex-col items-center justify-center font-poppins'>
          <p className='my-4'>Name: {item?.fName}</p>   
          <p className='my-4'>Mobile: {item?.mobile}</p>   
          <p className='my-4'>Pin: {item?.pin}</p>   
          <p className='my-4'>Address: {item?.address}</p>   
          <p className='my-4'>City/Town: {item?.town}</p>   
          <p className='my-4'>State: {item?.state}</p>
      </div>
      {isSelected && <AiFillCheckCircle size='25px' color='green' className='absolute top-2 right-2'/>}
      </div>
    </div>
  )
}

