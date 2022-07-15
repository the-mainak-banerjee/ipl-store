import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../../contexts'

export const RestrictedRoute = () => {
    const { isLoggedIn } = useAuth()
    const location = useLocation()

    const from =location.state?.from?.pathname || '/'
  return (
    isLoggedIn ? (
        <Navigate to={from} state={{ from: location}} replace/>
    ) : (
        <Outlet/>
    )
  )
}
