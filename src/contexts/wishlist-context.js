import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth-context";
import { useUser } from "./user-context";

const WishListContext = createContext()

const WishListContextProvider = ({ children }) => {

    const [myWishList, setMyWishList] = useState()

    const { isLoggedIn } = useAuth()
    const { userTocken } = useUser()
    const navigate = useNavigate()

    // useEffect(() => {
    //     const getWishListItem = async () =>{
    //         if(isLoggedIn){ 
    //             try {
    //                 const response = await axios.get(`/api/user/wishlist`, {
    //                     headers: {
    //                     authorization: userTocken
    //                 }})
    //                 setMyWishList(response.data.wishlist)
    //             } catch(err) {
    //                 console.log(err)
    //             }
    //         }
    //     }

    //     getWishListItem()
    // }, [isLoggedIn,userTocken])

    

    const addToWishList = async (product) => {
        if(isLoggedIn) {
            try{
            const response = await axios.post(`/api/user/wishlist`, { product }, {
                headers: {
                    authorization: userTocken
                }
            })
            setMyWishList(response.data.wishlist)
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
        }catch(err){
            console.log((err))
        }
    }


    const productIsInWishList = (myWishList, productId) => {
        return myWishList?.some(item => item._id === productId)
    }

    return (
        <WishListContext.Provider value={{addToWishList, myWishList ,productIsInWishList, removeFromWishlist}}>
            { children }
        </WishListContext.Provider>
    )
}

const useWishList = () => useContext(WishListContext)

export { useWishList, WishListContextProvider }