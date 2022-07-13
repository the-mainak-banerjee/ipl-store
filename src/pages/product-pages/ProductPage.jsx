import React, { useEffect } from 'react'
import { usePageTitle } from '../../hooks'
import { FilterBar, ProductList } from '../../components'
import { useFilter } from '../../contexts/filter-context'


export const ProductPage = () => {

  usePageTitle('IPLStores-Products')
  const { filteredProducts } = useFilter()

  useEffect(() => {
    document.title = 'IPLStores-Products'
  },[])

  return (
    <>
      {/* <section>
        <SubNavbar pageName='Products'/>
      </section> */}
      <section className='flex flex-col xl:flex-row w-full pl-10 mt-10 lg:pl-36'>
          <FilterBar />
          <ProductList 
            products = {filteredProducts}
          />
      </section>
    </>
  )
}
