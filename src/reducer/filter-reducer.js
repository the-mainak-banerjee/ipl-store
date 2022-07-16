export const filterReducer = (state,action) => {
    switch(action.type){
        case 'CAT':
            return {
                ...state,
                catagory: action.payload
            }
        
        case 'TEAM':
            return {
                ...state,
                team: action.payload
            }

        case 'PRICE':
            return {
                ...state,
                priceRange: action.payload
            }
        
        case 'SORT':
            return {
                ...state,
                sortBy: action.payload
            }

        case 'CART':
            return {
                ...state,
                sharedCart: action.payload
            }

        case 'SEARCH':
            return {
                ...state,
                searchedQuery: action.payload
            }
        
        case 'CLEAR': 
            return{
                ...state,
                catagory: 'all',
                team: 'all',
                priceRange: 2000,
                sortBy: '',
                sharedCart: []
            }
        
        default:
            return{
                ...state
            }
    }

}