import { createContext, useContext, useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom'
import axios from "axios";
import { useUser } from "./user-context";
// import { toast } from 'react-toastify';



const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [loading,setLoading] = useState()
    const {setUserAndTocken} = useUser()
    const navigate = useNavigate()
    const location = useLocation()
    const destination = location.state?.from || '/products'


    const handleSignUp = async (signUpData) => {
        try{
            setLoading(true)
            const response = await axios.post(`/api/auth/signup`, signUpData)
            localStorage.setItem('iplstore-user-token',response.data.encodedToken)
            setIsLoggedIn(true)
            setUserAndTocken(response.data.createdUser, response.data.encodedToken)
            navigate(destination, { replace: true })
        }catch(err){
            console.log(err)

            if(err.request?.status === 422){
                console.log('Email Already Exists. Please Use A Different Email')
            }
        }finally{
            setLoading(false)
        }
    }

    const handleLogin = async (loginData) => {
        try{
            setLoading(true)
            const response = await axios.post(`/api/auth/login`,loginData)
            localStorage.setItem('iplstore-user-token',response.data.encodedToken)
            setIsLoggedIn(true)
            setUserAndTocken(response.data.foundUser, response.data.encodedToken)
            navigate(destination, {replace: true})
        }catch(err){
            console.log(err)

            if(err.request?.status === 404){
                console.log('The email you entered is not Registered.')
            }

            if(err.request?.status === 401) {
                console.log('The credentials you entered are invalid')
            }

        }finally{
            setLoading(false)
        }
    }

    const handleLogOut = () => {
        localStorage.clear()
        setIsLoggedIn(false)
        navigate('/login', { replace: true })
    }

    return (
        <AuthContext.Provider value={{handleLogin, handleSignUp, handleLogOut, loading, isLoggedIn}}>
            { children }
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext)

export { useAuth, AuthContextProvider }