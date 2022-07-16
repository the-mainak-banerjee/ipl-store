import React, { useState } from 'react'
import { MdOutlineMarkEmailRead } from 'react-icons/md'
import { AiFillCloseSquare, AiFillCheckSquare } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'
import { FaUserCheck } from 'react-icons/fa'

export const Input = ({label, type, value, validation, onChange, name, errMsg }) => {
    
    const [focus,setFocus] = useState(null)

    return (
    <div className='my-1'>
      <label htmlFor={label} className={`flex justify-between items-center px-4 text-black relative top-2 ${focus && 'text-blue-700'}`}>
        <span className={`bg-ternary px-2 ${!validation ? value ? 'text-red-700' : '' : 'text-green-700'}`}>{label}</span>
        {value && <span className='bg-ternary px-2 py-1'>
            {type === 'email' ? (
                validation ? (
                    <MdOutlineMarkEmailRead className={validation ? 'text-green-700' : ''}/>
                ) : (
                    <AiFillCloseSquare className={validation ? '' : 'text-red-700'}/>
                )
            ) : type === 'password' ? (
                validation ? (
                    <RiLockPasswordLine className={validation ? 'text-green-700' : ''}/>
                ) : (
                    <AiFillCloseSquare className={validation ? '' : 'text-red-700'}/>
                )
            ) : label === 'Name' ? (
                validation ? (
                    <FaUserCheck className={validation ? 'text-green-700' : ''}/>
                ) : (
                    <AiFillCloseSquare className={validation ? '' : 'text-red-700'}/>
                )
            ) : 
                validation ? (
                    <AiFillCheckSquare className={validation ? 'text-green-700' : ''}/>
                ) : (
                    <AiFillCloseSquare className={validation ? '' : 'text-red-700'}/>
                )
            }
        </span>}
      </label>
      <input
        id={label}
        className={`p-3 bg-ternary outline-0 border-2 border-black rounded-lg w-full text-black  ${!validation ? value ? 'border-red-700' : 'focus:outline-2 focus:outline-blue-700' : 'border-green-700'}`}
        type={type}
        required
        value={value}
        name={name}
        onChange={onChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        />
        <p className={`text-red-800 text-xs font-bold ${!validation && value ? 'block' : 'hidden'}`}>{errMsg}</p>
    </div>
  )
}



