import { createContext, useContext, useState } from "react";

const UserContext = createContext()

const UserContextProvider = ( { children }) => {

    const [activeUser, setActiveUser] = useState({})
    const [userTocken, setUserTocken]  = useState(null)

    return(
        <UserContext.Provider value={{ activeUser, userTocken, setActiveUser, setUserTocken}}>
            { children }
        </UserContext.Provider>
    )
}

const useUser = () => useContext(UserContext);

export { useUser, UserContextProvider }