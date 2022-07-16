import React from 'react'
import { Carousel, ProductList } from '../../components'
import { products } from '../../backend/db/products'
import { categories } from '../../backend/db/categories'
import { Link } from 'react-router-dom'
import { useFilter } from '../../contexts/filter-context'
import { usePageTitle, useToast } from '../../hooks'


 const HomePage = () => {

  usePageTitle('IPLStores')  
  useToast()
  const featuredProducts = products.filter(item => item.featured === true)
  const { dispatch } = useFilter()


  const popularCatagoris = categories.map(item => {
    return (
      <div key={item._id} className='w-80 sm:w-1/3 sm:h-96 mx-2 my-8 cursor-pointer hover:shadow-2xl hover:scale-105' onClick={() => dispatch({type:'CAT', payload:`${item.categoryName}`})}>
      <Link to='/products'>
          <img src={item.src} alt={item.name} className='w-full h-full '/>     
          <p className='text-center w-full bg-secondary text-xl font-poppins px-4 py-2'>{item.name}</p>    
      </Link>
      </div>
    )
  })


  return (
    <>
      <Carousel/>
      <section className='px-4 py-16 bg-white'>
        <h3 className='text-center font-lora text-3xl py-8'>Featured Product</h3>
        <ProductList products={featuredProducts}/>
      </section>
      <section className='my-16 mx-4'>
        <h3 className='text-center font-lora text-3xl py-8'>Popular Catagories</h3>
        <div className='flex flex-col md:flex-row items-center justify-evenly'>
          {popularCatagoris}
        </div>
      </section>
    </>
  )
}

export default HomePage
