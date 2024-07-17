import { createContext, useContext, useState } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const userDetails = localStorage.getItem("iplstore-user-deatils");
  const userToken = localStorage.getItem("iplstore-user-token");

  const userDetailsObject =
    userDetails !== "undefined" ? JSON.parse(userDetails) : {};

  const [activeUser, setActiveUser] = useState(userDetailsObject);
  const [userTocken, setUserTocken] = useState(userToken ?? null);

  return (
    <UserContext.Provider
      value={{ activeUser, userTocken, setActiveUser, setUserTocken }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { useUser, UserContextProvider };
