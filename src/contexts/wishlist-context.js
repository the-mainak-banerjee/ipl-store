import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth-context";
import { useUser } from "./user-context";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_URL } from "../utils/helperVariables";

const WishListContext = createContext();

const WishListContextProvider = ({ children }) => {
  const [myWishList, setMyWishList] = useState();

  const { isLoggedIn } = useAuth();
  const { setActiveUser, activeUser, userTocken } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (activeUser) {
      setMyWishList(activeUser.wishList);
    } else {
      setMyWishList();
    }
  }, [activeUser]);

  const addToWishList = async (product) => {
    if (isLoggedIn) {
      try {
        const response = await axios.post(
          `${API_URL}/wishlist/add-to-wishlist`,
          {
            productId: product._id,
            add: true,
          },
          {
            headers: {
              authorization: userTocken,
            },
          }
        );

        setMyWishList(response.data.wishList);
        setActiveUser((prevData) => ({
          ...prevData,
          wishList: response.data.wishList,
        }));
        localStorage.setItem(
          "iplstore-user-deatils",
          JSON.stringify({ ...activeUser, wishList: response.data.wishList })
        );
        toast.success("Added Item To Wishlist");
      } catch (err) {
        console.log(err);
      }
    } else {
      navigate("/login");
    }
  };

  const removeFromWishlist = async (productId) => {
    try {
      const response = await axios.post(
        `${API_URL}/wishlist/add-to-wishlist`,
        {
          productId: productId,
          add: false,
        },
        {
          headers: {
            authorization: userTocken,
          },
        }
      );
      setMyWishList(response.data.wishList);
      setActiveUser((prevData) => ({
        ...prevData,
        wishList: response.data.wishList,
      }));
      localStorage.setItem(
        "iplstore-user-deatils",
        JSON.stringify({ ...activeUser, wishList: response.data.wishList })
      );
      toast.success("Removed Item From Wishlist");
    } catch (err) {
      console.log(err);
    }
  };

  const productIsInWishList = (productId) => {
    if (activeUser) {
      return activeUser.wishList?.some((item) => item._id === productId);
    } else {
      return false;
    }
  };

  return (
    <WishListContext.Provider
      value={{
        addToWishList,
        myWishList,
        productIsInWishList,
        removeFromWishlist,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
};

const useWishList = () => useContext(WishListContext);

export { useWishList, WishListContextProvider };
