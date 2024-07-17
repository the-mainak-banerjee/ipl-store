import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth-context";
import { useUser } from "./user-context";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_URL } from "../utils/helperVariables";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [myCart, setMyCart] = useState();
  const [loading, setLoading] = useState(false);
  const { setActiveUser, activeUser, userTocken } = useUser();
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (activeUser) {
      setMyCart(activeUser.cartItems);
    } else {
      setMyCart();
    }
  }, [activeUser]);

  const addItemToCart = async (product, qty = 1) => {
    const cartPayload = {
      productId: product._id,
      qty: qty,
    };
    if (isLoggedIn) {
      try {
        setLoading(true);
        const response = await axios.post(
          `${API_URL}/cart/update`,
          cartPayload,
          {
            headers: {
              authorization: userTocken,
            },
          }
        );
        setMyCart(response.data.cartItems);
        setActiveUser((prevData) => ({
          ...prevData,
          cartItems: response.data.cartItems,
        }));
        localStorage.setItem(
          "iplstore-user-deatils",
          JSON.stringify({ ...activeUser, cartItems: response.data.cartItems })
        );
        toast.success(`Updated Cart Details`);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    } else {
      navigate("/login");
    }
  };

  const removeFromCart = async (showToast, upateLocale = true) => {
    try {
      const response = await axios.delete(`${API_URL}/cart/clear`, {
        headers: {
          authorization: userTocken,
        },
      });
      setMyCart(response.data.cart);

      if (upateLocale) {
        setActiveUser((prevData) => ({
          ...prevData,
          cartItems: response.data.cartItems,
        }));
        localStorage.setItem(
          "iplstore-user-deatils",
          JSON.stringify({ ...activeUser, cartItems: response.data.cartItems })
        );
      }

      if (showToast) {
        toast.success(`Removed Item From Cart`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const updateCartItem = async (productId, updateType) => {
    try {
      const response = await axios.post(
        `/api/user/cart/${productId}`,
        {
          action: {
            type: updateType,
          },
        },
        {
          headers: {
            authorization: userTocken,
          },
        }
      );
      setMyCart(response.data.cart);
      setActiveUser((prevData) => ({ ...prevData, cart: response.data.cart }));
    } catch (err) {
      console.log(err);
    }
  };

  const productIsInCart = (productId) => {
    if (activeUser?.cartItems?.length > 0) {
      return activeUser.cartItems?.some(
        (item) => item?.product?._id === productId
      );
    } else {
      return false;
    }
  };

  return (
    <CartContext.Provider
      value={{
        addItemToCart,
        removeFromCart,
        updateCartItem,
        myCart,
        productIsInCart,
        loading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartContextProvider };
