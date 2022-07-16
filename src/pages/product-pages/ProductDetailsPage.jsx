import React from 'react'
import { useParams } from 'react-router-dom'
import { usePageTitle } from '../../hooks';
import { ProductDetailsCard, ProductList, SubNavbar } from '../../components';
import { useFilter } from '../../contexts';

export const ProductDetailsPage = () => {
    const params = useParams();
    const { filteredProducts } = useFilter()
    const product = filteredProducts.find(item => item._id === params.productId)
    const relatedProducts = filteredProducts.filter(item => item.catagory === product?.catagory)
    const productIndex = relatedProducts.findIndex(item => item._id === params.productId)
    relatedProducts.splice(productIndex,1)
    
    usePageTitle(`IPLStores-Products || ${product?.name}`)  

  return (
    <>
      <section>
        <SubNavbar pageName='Products' param={product?.name}/>
      </section>
      {product ? <ProductDetailsCard
        product={product}
      /> : <p className='text-center font-lora text-xl'>No Product Found</p>}
      {product && <section className='py-10 px-4'>
        <h3 className='text-center font-lora text-3xl'>Related Products</h3>
        <ProductList
          products={relatedProducts.slice(0,4)}
        />
      </section>}
    </>
  )
}
