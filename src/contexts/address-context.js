import { createContext, useContext, useState } from "react";
import { useUser } from "./user-context";

const AddressContext = createContext()

const AddressContextProvider = ({ children }) => {

    const [userAddress, setUserAddress] = useState([])
    const { userTocken } = useUser()


    const createUserAddress = (address) => {
        if(userTocken) {
            localStorage.setItem('iplstore-user-address', JSON.stringify(address))
            setUserAddress(prevData => [...prevData, JSON.parse(localStorage.getItem('iplstore-user-address'))])
        }    
    }

    let currentUserAddress = userAddress?.filter(item => {
        return item.userTocken === userTocken
    })

    return (
        <AddressContext.Provider value={{ createUserAddress, currentUserAddress }}>
            { children }
        </AddressContext.Provider>
        
    )
}

const useAddress = () => useContext(AddressContext)

export { useAddress, AddressContextProvider}