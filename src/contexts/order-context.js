import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useCart } from "./cart-context";
import { useUser } from "./user-context";
import { API_URL } from "../utils/helperVariables";

const OrderContext = createContext();

const OrderContextProvider = ({ children }) => {
  const [myOrders, setMyOrders] = useState([]);
  const [orderProcessing, setOrderProcessing] = useState(null);
  const { setActiveUser, activeUser, userTocken } = useUser();
  const { removeFromCart } = useCart();

  useEffect(() => {
    const getOrders = async () => {
      if (!userTocken) {
        return null;
      }
      try {
        const response = await axios.get(`${API_URL}/order`, {
          headers: {
            authorization: userTocken,
          },
        });
        setMyOrders(response.data.data.orders);
        setActiveUser((prevData) => ({
          ...prevData,
          orders: response.data.data.orders,
        }));
        localStorage.setItem(
          "iplstore-user-deatils",
          JSON.stringify({
            ...activeUser,
            orders: response.data.data.orders,
          })
        );
      } catch (e) {
        console.log(e);
      }
    };
    getOrders();
  }, []);

  const placeOrder = async (product, address) => {
    try {
      setOrderProcessing(true);
      const orderItems = product.products.map((item) => {
        return {
          product: item.product._id,
          qty: item.qty,
        };
      });
      const orderDetails = {
        orderPrice: product.totalAmount,
        customer: activeUser._id,
        address: address._id,
        status: "PENDING",
        orderItems: orderItems,
      };
      const response = await axios.post(
        `${API_URL}/order/create-order`,
        orderDetails,
        {
          headers: {
            authorization: userTocken,
          },
        }
      );

      setMyOrders((prevState) => {
        return [...prevState, response.data.data.order];
      });
      setActiveUser((prevData) => ({
        ...prevData,
        cartItems: [],
        orders: prevData.orders
          ? [...prevData.orders, response.data.data.order]
          : [response.data.data.order],
      }));
      localStorage.setItem(
        "iplstore-user-deatils",
        JSON.stringify({
          ...activeUser,
          cartItems: [],
          orders: activeUser.orders
            ? [...activeUser.orders, response.data.data.order]
            : [response.data.data.order],
        })
      );
      toast.success(`Order Placed Successfully`);
      removeFromCart(false, false);
    } catch (err) {
      toast.error(err);
    } finally {
      setOrderProcessing(false);
    }
  };

  return (
    <OrderContext.Provider
      value={{ placeOrder, myOrders, orderProcessing, setOrderProcessing }}
    >
      {children}
    </OrderContext.Provider>
  );
};

const useOrder = () => useContext(OrderContext);

export { OrderContextProvider, useOrder };
