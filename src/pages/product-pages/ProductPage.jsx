import React, { useEffect } from 'react'
import { usePageTitle } from '../../hooks'
import { FilterBar, ProductList, SubNavbar } from '../../components'
import { useFilter, useProduct, useUser } from '../../contexts'


export const ProductPage = () => {

  usePageTitle('IPLStores-Products')
  const { filteredProducts } = useFilter()
  const { loading } = useProduct()
  const { activeUser, userTocken } = useUser()
  
  console.log(activeUser)
  console.log(userTocken)

  useEffect(() => {
    document.title = 'IPLStores-Products'
  },[])

  return (
    <>
      <section>
        <SubNavbar pageName='Products'/>
      </section>
      <section className='flex flex-col xl:flex-row w-full pl-10 mt-10 lg:pl-36'>
          <FilterBar />
          {loading
          ? <p>Loading Products...</p> 
          :<ProductList 
            products = {filteredProducts}
          />}
      </section>
    </>
  )
}
