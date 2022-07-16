import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth-context";
import { useUser } from "./user-context";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WishListContext = createContext()

const WishListContextProvider = ({ children }) => {

    const [myWishList, setMyWishList] = useState()

    const { isLoggedIn } = useAuth()
    const { setActiveUser, activeUser, userTocken } = useUser()
    const navigate = useNavigate()    

    useEffect(() => {
        if(activeUser){
            setMyWishList(activeUser.wishlist)
        }else{
            setMyWishList()
        }
        
    },[activeUser])

    const addToWishList = async (product) => {
        if(isLoggedIn) {
            try{
            const response = await axios.post(`/api/user/wishlist`, { product }, {
                headers: {
                    authorization: userTocken
                }
            })
            setMyWishList(response.data.wishlist)
            setActiveUser(prevData => ({...prevData, wishlist:response.data.wishlist}))
            toast.success('Added Item To Wishlist')
            }catch(err){
                console.log(err)
            }
        }else {
            navigate('/login')
        }
    } 

    const removeFromWishlist = async (productId) => {
        try{
            const response = await axios.delete(`/api/user/wishlist/${productId}`, {
                headers: {
                    authorization: userTocken
                }
            })
            setMyWishList(response.data.wishlist)
            setActiveUser(prevData => ({...prevData, wishlist:response.data.wishlist}))
            toast.success('Removed Item From Wishlist')
        }catch(err){
            console.log((err))
        }
    }


    const productIsInWishList = (productId) => {
        if(activeUser){
            return activeUser.wishlist?.some(item => item._id === productId)
        }else{
            return false
        }
    }

    return (
        <WishListContext.Provider value={{addToWishList, myWishList ,productIsInWishList, removeFromWishlist}}>
            { children }
        </WishListContext.Provider>
    )
}

const useWishList = () => useContext(WishListContext)

export { useWishList, WishListContextProvider }