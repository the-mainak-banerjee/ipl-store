import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { API_URL } from "../utils/helperVariables";

const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await axios.get(`${API_URL}/products`);
        setProducts(response.data.data.products);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    getAllProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);

export { useProduct, ProductContextProvider };
