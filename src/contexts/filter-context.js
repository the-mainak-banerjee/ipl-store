import { createContext, useContext, useReducer } from "react";
// import { products } from "../backend/db/products";
import { filterReducer } from "../reducer/filter-reducer.js";
import { getCatagoriedProduct, getPricedProducts, getSortedProducts, getTeamsProducts } from "../utils/Filters";
import { useProduct } from "./product-context";

const FilterContext = createContext()

const initialState = {
    catagory: 'all',
    team: 'all',
    priceRange: 2000,
    sortBy: ''
}

const FilterContextProvider = ({ children }) => {

    const [state,dispatch] = useReducer(filterReducer, initialState)
    const {products} = useProduct()

    const shuffleProducts = (array)=>{
        for(let i=0; i<array?.length; i++){
            const j = Math.floor(Math.random() * (i+1));
            [array[i], array[j]] = [array[j], array[i]]
        }
    }

    shuffleProducts(products)

    const catagoriedProducts = getCatagoriedProduct(state.catagory,products)
    const teamsProducts = getTeamsProducts(state.team,catagoriedProducts)
    const pricedProducts = getPricedProducts(state.priceRange, teamsProducts)
    const sortedProducts = getSortedProducts(state.sortBy,pricedProducts)

    const filteredProducts = sortedProducts

    return (
        <FilterContext.Provider value={{state,dispatch, filteredProducts}}>
            { children }
        </FilterContext.Provider>
    )
}

const useFilter = () => useContext(FilterContext)

export { FilterContextProvider, useFilter }