import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth-context";
import { useUser } from "./user-context";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartContext = createContext()

const CartContextProvider = ({ children }) => {

    const [ myCart, setMyCart ] = useState()
    const [loading,setLoading] = useState(false)
    const {setActiveUser, activeUser, userTocken} = useUser()
    const navigate = useNavigate()
    const { isLoggedIn } = useAuth()

    useEffect(() => {
        if(activeUser){
            setMyCart(activeUser.cart)
        }else{
            setMyCart()
        }
    },[activeUser])

    const addItemToCart = async (product) => {
        if(isLoggedIn){
            try{
                setLoading(true)
                const response = await axios.post(`/api/user/cart`, { product }, {
                    headers: {
                        authorization: userTocken
                    }
                })
                setMyCart(response.data.cart)
                setActiveUser(prevData =>({...prevData, cart:response.data.cart}))
                toast.success(`Added Item To Cart`)
            }catch(err) {
                console.log(err)
            }finally{
                setLoading(false)
            }
        }else{
            navigate('/login')
        }
    }

    const removeFromCart = async (productId) => {
        try{
            const response = await axios.delete(`/api/user/cart/${productId}`, {
                headers: {
                    authorization: userTocken
                }
            })
            setMyCart(response.data.cart)
            setActiveUser(prevData =>({...prevData, cart:response.data.cart}))
            toast.success(`Removed Item From Cart`)
        }catch(err){
            console.log(err)
        }
    }

    const updateCartItem = async (productId,updateType) => {
        try{
            const response = await axios.post(`/api/user/cart/${productId}`, {
                action: {
                    type: updateType
                }
            }, {
                headers: {
                    authorization: userTocken
                }
            })
            setMyCart(response.data.cart)
            setActiveUser(prevData =>({...prevData, cart:response.data.cart}))
        }catch(err){
            console.log(err)
        }
    }

    const productIsInCart = (productId) =>{ 
        if(activeUser){
            return activeUser.cart?.some(item => item._id === productId)
        }else{
            return false
        }
    }

    return (
        <CartContext.Provider value={{addItemToCart, removeFromCart, updateCartItem, myCart, productIsInCart, loading}}>
            { children }
        </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext)

export { useCart, CartContextProvider }