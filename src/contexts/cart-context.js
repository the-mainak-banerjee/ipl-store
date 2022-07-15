import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth-context";
import { useUser } from "./user-context";

const CartContext = createContext()

const CartContextProvider = ({ children }) => {

    const [ myCart, setMyCart ] = useState()
    const [loading,setLoading] = useState(false)
    const navigate = useNavigate()
    const { isLoggedIn } = useAuth()
    const { userTocken } = useUser()

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
        }catch(err){
            console.log(err)
        }
    }

    const productIsInCart = (myCart,productId) =>{ 
        return myCart?.some(item => item._id === productId)
    }

    return (
        <CartContext.Provider value={{addItemToCart, removeFromCart, updateCartItem, myCart, productIsInCart, loading}}>
            { children }
        </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext)

export { useCart, CartContextProvider }