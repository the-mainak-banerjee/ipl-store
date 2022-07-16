import React, { useEffect, useState } from 'react'
import { ProductCard } from './ProductCard'
import { BsList } from 'react-icons/bs'
import { BiBorderAll } from 'react-icons/bi'
import {v4 as uuidV4} from 'uuid'

export const ProductList = ({ products }) => {

  const dataLimit = 6;
  const pageLimit = 3;
  const [showBoxStyle, setShowBoxStyle] = useState(false)
  const [currentPage,setCurrentPage] = useState(1)
  
  // const [totalPages, setTotalPages] = useState()

  
  useEffect(() => {
      setCurrentPage(1)
    },[products])
    
    
    
  const totalPages =  (Math.ceil(products?.length / dataLimit))

  function getProductsForPage(num) {
    let page = num - 1;
    if(page === 0){
      return products?.slice(0,dataLimit)
    }
    
    if(page * dataLimit < products?.length){
      const startIndex = page * dataLimit
      const endIndex = 
      products?.length < startIndex + dataLimit
      ? products?.length
      : startIndex + dataLimit
      return products?.slice(startIndex,endIndex)
    }
    setCurrentPage(1)
    return products?.slice(0,dataLimit)
  }

  const getPaginatedData = getProductsForPage(currentPage)

  // function getPaginatedData(){
  //   const startIndex = (currentPage * dataLimit) - dataLimit
  //   const endIndex = startIndex + dataLimit
  //   return products?.slice(startIndex,endIndex)
  // }

  function getPaginationGroup(){
    const start = Math.floor((currentPage - 1) / pageLimit) * pageLimit

    if(currentPage > totalPages - (totalPages % pageLimit) && totalPages !== pageLimit){
      return Array.from({length: totalPages%pageLimit}, (_,idx) => start+idx+1)
    }else{
      return Array.from({length: pageLimit}, (_,idx) => start+idx+1)
    }
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  },[currentPage])

  const allProducts = getPaginatedData?.map(item => {
    return (
      <ProductCard
        key={uuidV4()}
        id={item._id}
        name= {item.name}
        description = {item.description}
        price = {item.price}
        src= {item.src}
        discount={item.discount}
        showBoxStyle = {showBoxStyle}
        rating = {item.rating}
        product={item}
      />
    )
  })


  return (
    <div className='lg:px-36 lg:flex-1'>
      <div className='flex items-center pb-4'>
        <BiBorderAll className={!showBoxStyle ? 'cursor-pointer text-primary': 'cursor-pointer'} size='30px'
          onClick={() => setShowBoxStyle(false)}
        />
        <BsList className={showBoxStyle ? 'cursor-pointer text-primary' : 'cursor-pointer'} size='30px'
          onClick={() => setShowBoxStyle(true)}
        />
        <p className='font-poppins mx-2'>{products?.length>1 ? `${products?.length} Products Found` : `${products?.length} Product Found`}</p>
      </div>

      <hr className='border-primary'/>

      {products?.length > 0 
        ? <div className='flex flex-wrap items-center justify-center'>
            {allProducts}
          </div>
        : <h3 className='text-xl font-bold font-lora py-8'>Sorry No Products Match Your Search</h3>    
      }

      {products?.length > dataLimit && <div className='my-4 flex items-center justify-center'>
        {/* previous buton */}
        <button
        className={currentPage === 1 ? 'pointer-events-none text-gray-300 mx-2' : 'mx-2'}
        onClick = {() => setCurrentPage(page => page - 1)}
        >
          prev
        </button>
        {/* Show page numbers */}
        {getPaginationGroup()?.map((item,index) => (
          <button
            key = {index}
            className = {currentPage === item ? 'bg-primary px-4 py-2 mx-1 rounded-[50%] text-white' : 'bg-white px-4 py-2 mx-1 rounded-[50%]'}
            onClick = {(event) => setCurrentPage(Number(event.target.textContent))}
          >
            <span>{item}</span>
          </button>
        ))}
        {/* after button */}
        <button
        className={currentPage === totalPages ? 'pointer-events-none text-gray-300 mx-2' : 'mx-2'}
        onClick={() => setCurrentPage(page => page + 1)}
        >
          next
        </button>
      </div>}

    </div>
  )
}



    