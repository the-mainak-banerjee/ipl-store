import { createContext, useContext } from "react";
import { useUser } from "./user-context";
import { toast } from "react-toastify";
import axios from "axios";
import { API_URL } from "../utils/helperVariables";

const AddressContext = createContext();

const AddressContextProvider = ({ children }) => {
  const { userTocken, setActiveUser, activeUser } = useUser();

  const createUserAddress = async (address) => {
    if (userTocken) {
      const addressData = {
        name: address.fName,
        mobile: address.mobile,
        pin: address.pin,
        address: address.address,
        city: address.town,
        state: address.state,
      };
      try {
        const response = await axios.post(
          `${API_URL}/profile/addAddress`,
          addressData,
          {
            headers: {
              authorization: userTocken,
            },
          }
        );

        setActiveUser((prevData) => ({
          ...prevData,
          address: response.data.address,
        }));
        localStorage.setItem(
          "iplstore-user-deatils",
          JSON.stringify({ ...activeUser, address: response.data.address })
        );
        toast.success("Address added successfully");
      } catch (err) {
        console.log(err);
      }
    }
  };

  const deleteAddresss = async (id) => {
    if (!id) return;
    try {
      const response = await axios.delete(
        `${API_URL}/profile/removeAddress?addressId=${id}`,
        {
          headers: {
            authorization: userTocken,
          },
        }
      );

      console.log(response);

      setActiveUser((prevData) => ({
        ...prevData,
        address: response.data.address,
      }));
      localStorage.setItem(
        "iplstore-user-deatils",
        JSON.stringify({ ...activeUser, address: response.data.address })
      );
      toast.success("Address removed successfully");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AddressContext.Provider
      value={{
        createUserAddress,
        currentUserAddress: activeUser?.address,
        deleteAddresss,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

const useAddress = () => useContext(AddressContext);

export { useAddress, AddressContextProvider };
