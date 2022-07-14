import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";


const ProductContext = createContext()

const ProductContextProvider = ({ children }) => {
    
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getAllProducts = async () => {
            const response = await axios.get('/api/products')
            setProducts(response.data.products)
            setLoading(false)
        }    
        getAllProducts()
    }, [])
    
    
    
    return (
        <ProductContext.Provider value={{products, loading}}>
            { children }
        </ProductContext.Provider>
    )
}

const useProduct = () => useContext(ProductContext)

export { useProduct, ProductContextProvider }