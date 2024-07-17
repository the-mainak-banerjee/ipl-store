import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useUser } from "./user-context";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFilter } from "./filter-context";
import { API_URL } from "../utils/helperVariables";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const userToken = localStorage.getItem("iplstore-user-token");
  const [isLoggedIn, setIsLoggedIn] = useState(!!userToken);
  const [loading, setLoading] = useState();
  const [showToast, setShowToast] = useState("");
  const { setActiveUser, setUserTocken } = useUser();
  const { dispatch } = useFilter();
  const navigate = useNavigate();
  const location = useLocation();
  const destination = location.state?.from?.pathname || "/products";

  useEffect(() => {
    if (showToast) {
      setTimeout(() => {
        setShowToast("");
      }, 1000);
    }
  }, [showToast]);

  const handleSignUp = async (signUpData) => {
    const userData = {
      name: signUpData.firstName,
      email: signUpData.email,
      password: signUpData.password,
      passwordConfirm: signUpData.confirmPassword,
    };
    try {
      setLoading(true);
      const response = await axios.post(`${API_URL}/auth/signup`, userData, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      localStorage.setItem("iplstore-user-token", response.data.token);
      localStorage.setItem(
        "iplstore-user-deatils",
        JSON.stringify(response.data.data.newUser)
      );
      setIsLoggedIn(true);
      setActiveUser(response.data.data.newUser);
      setUserTocken(response.data.token);
      setShowToast("signup");
      navigate(destination, { replace: true });
    } catch (err) {
      console.log(err);

      if (err.request?.status === 422) {
        toast.error("Email Already Exists. Please Use A Different Email");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (loginData) => {
    try {
      setLoading(true);
      const response = await axios.post(`${API_URL}/auth/login`, loginData);
      console.log("login data", response.data.data.foundUser);
      localStorage.setItem("iplstore-user-token", response.data.data.token);
      localStorage.setItem(
        "iplstore-user-deatils",
        JSON.stringify(response.data.data.foundUser)
      );

      setIsLoggedIn(true);
      setActiveUser(response.data.data.foundUser);
      setUserTocken(response.data.data.token);
      setShowToast("login");
      // dispatch({type: 'CLEAR'})
      navigate(destination, { replace: true });
    } catch (err) {
      console.log(err);

      if (err.request?.status === 404) {
        toast.error("The email you entered is not Registered.");
      }

      if (err.request?.status === 401) {
        toast.error("The credentials you entered are invalid");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogOut = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setActiveUser({});
    setUserTocken(null);
    dispatch({ type: "CLEAR" });
    navigate("/login", { replace: true });
  };

  return (
    <AuthContext.Provider
      value={{
        handleLogin,
        handleSignUp,
        handleLogOut,
        loading,
        isLoggedIn,
        showToast,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthContextProvider };
