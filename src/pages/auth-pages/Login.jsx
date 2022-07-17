import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../../components/Input'
import { FaUserPlus } from 'react-icons/fa'
import { PrimaryButton } from '../../components'
import { usePageTitle } from '../../hooks'
import { useAuth } from '../../contexts'


export const Login = () => {

    usePageTitle('IPLStores-Login')  
    const [loginData, setLoginData] = useState({email:'', password: ''})
    const { handleLogin, loading } =  useAuth()
    const guestUserData = {
      email: "guest@user.abc",
      password: "guestuser",
    }

    const isValidEmail =loginData.email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
        ? true
        : false;

    const isValidPassword = loginData.password.length > 6

  function handleSubmit(e){
    e.preventDefault()
    handleLogin(loginData)
  }

  function handleGuestLogin() {
    setLoginData(guestUserData)
    handleLogin(guestUserData)
  }

  return (
    <>
      <main>
        <div className='w-full px-4 py-24 z-50'>
          <div className='max-w-[450px] mx-auto bg-ternary text-white rounded-xl shadow-lg shadow-primaryHover'>
            <div className='max-w-[320px] mx-auto py-16'>   
              <h1 className='text-3xl font-bold text-center text-primary'>
                Log In
              </h1>
              <form onSubmit={handleSubmit} className='w-full flex flex-col py-2'>
                {/* {err && <p className='bg-red-500 p-1 mt-1'>
                  {err}
                </p>} */}
                <Input
                  required = {true}
                  label = 'Email'
                  type = 'email'
                  value={loginData.email}
                  validation={isValidEmail}
                  onChange={(e) => setLoginData(prevData => ({...prevData, email:e.target.value}))}
                />
                <Input
                  required = {true}
                  label = 'Password'
                  type = 'password'
                  value={loginData.password}
                  validation={isValidPassword}
                  errMsg='Password Length Should Be More Than 6'
                  onChange={(e) => setLoginData(prevData => ({...prevData, password:e.target.value}))}
                />
                <div className='text-sm text-primary text-right w-full'>
                  <p 
                    className='hover:underline cursor-pointer'
                    onClick={ handleGuestLogin }
                  >
                      Use Guest Login
                  </p>
                </div>
                  <PrimaryButton disabled={!isValidEmail || !isValidPassword || loading}>
                    Log In
                  </PrimaryButton>
                <Link to='/signup' className='flex items-center justify-center text-lg font-lora text-primaryHover hover:text-primary cursor-pointer'>
                  <FaUserPlus size='20px'/>
                  <h3 className='ml-2'>Create A New Account</h3>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

