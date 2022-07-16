import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom'
import axios from "axios";
import { useUser } from "./user-context";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFilter } from "./filter-context";



const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [loading,setLoading] = useState()
    const [showToast,setShowToast] = useState('')
    const {setActiveUser,setUserTocken} = useUser()
    const { dispatch } = useFilter()
    const navigate = useNavigate()
    const location = useLocation()
    const destination = location.state?.from?.pathname || '/products'

    useEffect(() => {
        if(showToast){
            setTimeout(() => {
                setShowToast('')
            }, 1000)
        }
    }, [showToast])

    const handleSignUp = async (signUpData) => {
        try{
            setLoading(true)
            const response = await axios.post(`/api/auth/signup`, signUpData)
            localStorage.setItem('iplstore-user-token',response.data.encodedToken)
            setIsLoggedIn(true)
            setActiveUser(response.data.createdUser)
            setUserTocken(response.data.encodedToken)
            setShowToast('signup')
            // dispatch({type: 'CLEAR'})
            navigate(destination, { replace: true })
        }catch(err){
            console.log(err)

            if(err.request?.status === 422){
                toast.error('Email Already Exists. Please Use A Different Email')
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
            setActiveUser(response.data.foundUser)
            setUserTocken(response.data.encodedToken)
            setShowToast('login')
            // dispatch({type: 'CLEAR'})
            navigate(destination, {replace: true})
        }catch(err){
            console.log(err)

            if(err.request?.status === 404){
                toast.error('The email you entered is not Registered.')
            }

            if(err.request?.status === 401) {
                toast.error('The credentials you entered are invalid')
            }

        }finally{
            setLoading(false)
        }
    }

    const handleLogOut = () => {
        localStorage.clear()
        setIsLoggedIn(false)
        setActiveUser({})
        setUserTocken(null)
        dispatch({type: 'CLEAR'})
        navigate('/login', { replace: true })
    }

    return (
        <AuthContext.Provider value={{handleLogin, handleSignUp, handleLogOut, loading, isLoggedIn, showToast}}>
            { children }
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext)

export { useAuth, AuthContextProvider }