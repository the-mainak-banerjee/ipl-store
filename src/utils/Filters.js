const getSharedCartProducts = (sharedCart,products) => {
    if(sharedCart.length === 0) {
        return products
    }else{
        return products.filter(item => sharedCart.includes(item.id))
    }
}

const getCatagoriedProduct = (catagory,products) => {
    if(catagory === 'all'){
        return products
    }else{
        return products.filter(item => item.catagory === catagory)
    }
}


const getTeamsProducts = (teams, products) => {
    if(teams === 'all'){
        return products
    }else{
        return products.filter(item => item.team === teams)
    }
}

const getPricedProducts = (price,products) => {
    return products.filter(item => item.price <= price)
}

const getSortedProducts = (sortBy,products) => {

    if(sortBy === '') {
        return products
    }

    if(sortBy === 'Low'){
        return products.sort((a,b) => (a.price - b.price))
    }

    if(sortBy === 'High'){
        return products.sort((a,b) => (b.price - a.price))
    }

    if(sortBy === 'A-Z'){
        return products.sort((a,b) => {
            if(a.name>b.name){
                return 1
            }else if(a.name<b.name){
                return -1
            }else{
                return 0
            }
        })
    }

    if(sortBy === 'Z-A'){
        return products.sort((a,b) => {
            if(a.name>b.name){
                return -1
            }else if(a.name<b.name){
                return 1
            }else{
                return 0
            }
        })
    }
}

export { getSharedCartProducts, getCatagoriedProduct, getTeamsProducts, getPricedProducts, getSortedProducts }