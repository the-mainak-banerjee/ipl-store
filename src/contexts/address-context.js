import { createContext, useContext, useState } from "react";
import { useUser } from "./user-context";
import { v4 as uuid } from "uuid";
import { toast } from 'react-toastify';

const AddressContext = createContext()

const AddressContextProvider = ({ children }) => {

    const [userAddress, setUserAddress] = useState([])
    const { userTocken } = useUser()


    const createUserAddress = (address) => {
        if(userTocken) {
            localStorage.setItem('iplstore-user-address', JSON.stringify({...address, id:uuid()}))
            setUserAddress(prevData => [...prevData, JSON.parse(localStorage.getItem('iplstore-user-address'))])
        }    
    }

    let currentUserAddress = userAddress?.filter(item => {
        return item.userTocken === userTocken
    })

    const deleteAddresss = (id) => {
        const filteredAddress = userAddress?.filter(item => item.id !== id)
        setUserAddress(filteredAddress)
        toast.success('Address Removed Successfully')
    }

    return (
        <AddressContext.Provider value={{ createUserAddress, currentUserAddress, deleteAddresss }}>
            { children }
        </AddressContext.Provider>
        
    )
}

const useAddress = () => useContext(AddressContext)

export { useAddress, AddressContextProvider}