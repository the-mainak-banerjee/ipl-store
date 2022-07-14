import { createContext, useContext, useState } from "react";

const UserContext = createContext()

const UserContextProvider = ( { children }) => {

    const [activeUser, setActiveUser] = useState({})
    const [userTocken, setUserTocken]  = useState()

    const setUserAndTocken = (user,tocken) => {
            setActiveUser(user)
            setUserTocken(tocken)
    }

    return(
        <UserContext.Provider value={{ activeUser, userTocken, setUserAndTocken}}>
            { children }
        </UserContext.Provider>
    )
}

const useUser = () => useContext(UserContext);

export { useUser, UserContextProvider }