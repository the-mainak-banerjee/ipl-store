import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useCart } from "./cart-context";
import { useUser } from "./user-context";

const OrderContext = createContext()

const OrderContextProvider = ({children}) => {
    const [ myOrders, setMyOrders ] = useState()
    const [orderProcessing,setOrderProcessing] = useState(null)
    const {setActiveUser, activeUser, userTocken} = useUser()
    const { myCart, removeFromCart } = useCart()


    useEffect(() => {
        if(activeUser){
            setMyOrders(activeUser.orders)
        }else{
            setMyOrders()
        }
    },[activeUser])


    const placeOrder = async (product) => { 
        try{
            setOrderProcessing(true)
            const response = await axios.post(`/api/user/order`, { product }, {
                headers: {
                    authorization: userTocken
                }
            })
            setMyOrders(response.data.orders)
            setActiveUser(prevData =>({...prevData, orders:response.data.orders}))
            toast.success(`Order Placed Successfully`)
            myCart?.forEach(item => removeFromCart(item._id,false))
        }catch(err) {
            toast.error(err)
        }finally{
            setOrderProcessing(false)
        }
    }

    return(
        <OrderContext.Provider value={{placeOrder, myOrders, orderProcessing, setOrderProcessing}}>
            {children}
        </OrderContext.Provider>
    )
}

const useOrder =  () => useContext(OrderContext)

export {OrderContextProvider, useOrder}