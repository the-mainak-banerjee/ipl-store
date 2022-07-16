import { createContext, useContext, useReducer } from "react";
// import { products } from "../backend/db/products";
import { filterReducer } from "../reducer/filter-reducer.js";
import { getCatagoriedProduct, getPricedProducts, getSortedProducts, getTeamsProducts, getSharedCartProducts, getSearchedProducts } from "../utils/Filters";
import { useProduct } from "./product-context";

const FilterContext = createContext()

const initialState = {
    sharedCart: [],
    catagory: 'all',
    team: 'all',
    priceRange: 2000,
    sortBy: '',
    searchedQuery: ''
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


    const sharedCartProducts = getSharedCartProducts(state.sharedCart,products)
    const searchedProducts = getSearchedProducts(state.searchedQuery,sharedCartProducts)
    const catagoriedProducts = getCatagoriedProduct(state.catagory,searchedProducts)
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