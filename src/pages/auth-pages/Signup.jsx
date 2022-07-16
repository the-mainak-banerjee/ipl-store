import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaUserCheck } from 'react-icons/fa'
import { PrimaryButton, Input } from '../../components';
import { usePageTitle } from '../../hooks';
import { useAuth } from '../../contexts';



export const Signup = () => {

    usePageTitle('IPLStores-Signup')  
    const [signUpData, setSignUpData] = useState({email:'', password: '', firstName:''})
    const {handleSignUp, loading} = useAuth()

    const isValidEmail =signUpData.email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
        ? true
        : false;

    const isValidPassword = signUpData.password.length > 6
    const isValidName = signUpData.firstName.length > 1


    function handleSubmit(e){
        e.preventDefault()
        handleSignUp(signUpData)
    }

  return (
    <>
      <main>
        <div className='w-full px-4 py-24 z-50'>
          <div className='max-w-[450px] mx-auto bg-ternary text-white rounded-xl shadow-lg shadow-primaryHover'>
            <div className='max-w-[320px] mx-auto py-16'>   
              <h1 className='text-3xl font-bold text-center text-primary'>
                Sign Up
              </h1>
              <form onSubmit={handleSubmit} className='w-full flex flex-col py-2'>
                {/* {err && <p className='bg-red-500 p-1 mt-1'>
                  {err}
                </p>} */}
                <Input
                  required = {true}
                  label = 'Name'
                  type = 'text'
                  status =''
                  validation={isValidName}
                  value={signUpData.firstName}
                  onChange={(e) => setSignUpData(prevData => ({...prevData, firstName:e.target.value}))}
                />
                <Input
                  required = {true}
                  label = 'Email'
                  type = 'email'
                  status =''
                  validation={isValidEmail}
                  value={signUpData.email}
                  onChange={(e) => setSignUpData(prevData => ({...prevData, email:e.target.value}))}
                />
                <Input
                  required = {true}
                  label = 'Password'
                  type = 'password'
                  status =''
                  validation={isValidPassword}
                  value={signUpData.password}
                  errMsg='Password Length Should Be More Than 6'
                  onChange={(e) => setSignUpData(prevData => ({...prevData, password:e.target.value}))}
                />
                <PrimaryButton disabled={!isValidEmail || !isValidPassword || !isValidName || loading} >
                  Sign Up
                </PrimaryButton>
                <Link to='/login' className='flex items-center justify-center text-lg font-lora text-primaryHover hover:text-primary cursor-pointer'>
                  <FaUserCheck size='20px'/>
                  <h3 className='ml-2'>Already Have An Account?</h3>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
