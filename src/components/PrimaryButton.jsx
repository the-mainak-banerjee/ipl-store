import React from 'react'

export const PrimaryButton = ({children,onClick, disabled}) => {
  return (
    <button 
        className='bg-primary text-white px-12 py-2 rounded-lg text-xl shadow-xl hover:bg-secondary hover:text-black hover:scale-105 disabled:bg-[#909090] disabled:text-gray-600 mt-4 mb-2 flex items-center justify-center'
        onClick={onClick}    
        disabled={disabled}
    >
      {children}
    </button>
  )
}

