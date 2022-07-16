import React from 'react'
import { usePageTitle, useToast } from '../../hooks'
import { FilterBar, ProductList, SubNavbar } from '../../components'
import { useFilter, useProduct } from '../../contexts'


export const ProductPage = () => {

  usePageTitle('IPLStores-Products')
  useToast()
  const { filteredProducts } = useFilter()
  const { loading } = useProduct()
  // const { activeUser, userTocken } = useUser()
  

  return (
    <>
      <section>
        <SubNavbar pageName='Products'/>
      </section>
      <section className='flex flex-col xl:flex-row w-full pl-10 mt-10 lg:pl-36'>
          <FilterBar />
          {loading
          ? <div className='flex justify-center w-full'><p className='font-lora text-2xl font-bold text-primary'>Loading Products...</p></div> 
          :<ProductList 
            products = {filteredProducts}
          />}
      </section>
    </>
  )
}
