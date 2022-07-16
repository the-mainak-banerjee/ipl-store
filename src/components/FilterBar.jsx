import React, { useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdOutlineClear } from 'react-icons/md'
import { useSearchParams } from 'react-router-dom'
import { useFilter } from '../contexts/filter-context'
import { PrimaryButton } from './PrimaryButton'


export const FilterBar = () => {

  const [searchTerm, setSearchTerm] = useState('')
  const { state, dispatch } = useFilter()
  const [searchParams, setSearchParams] = useSearchParams()


  useEffect(() => {
    let params = searchParams.get('cart')
    if(params){
      dispatch({type:'CART', payload: params.split(',')})
    }
    
    // eslint-disable-next-line
  },[searchParams])
  
  useEffect(() => {
    dispatch({type:'SEARCH', payload: ''})
    
    // eslint-disable-next-line
  },[])


  const handleCatagories = (e) => {
    dispatch({ type: 'CAT', payload: e.target.value})
  }

  const handleTeam = (e) => {
    dispatch({ type: 'TEAM', payload: e.target.value})
  }

  const handlePriceChange = (e) => {
    dispatch({ type: 'PRICE', payload: e.target.value})
  }

  const handleSortBy = (e) => {
    dispatch({ type: 'SORT', payload: e.target.value})
  }

  const handleClear = () => {
    dispatch({ type: 'CLEAR'})
    searchParams.delete('cart')
    setSearchParams(searchParams)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    dispatch({ type: 'SEARCH', payload: searchTerm})
  }
 
  const clearSearchTerm = () => {
    setSearchTerm('')
    dispatch({ type: 'SEARCH', payload: ''})
  }


  return (
      <aside className='font-poppins lg:sticky lg:top-0 lg:h-screen mb-10'>
  
          <form onSubmit={handleSearch} className='flex items-center mb-4'>
            <div className='relative flex items-center'>
              <input 
                type='text' 
                placeholder='Search By csk or jersy' 
                value={searchTerm}
                className='outline-0 px-3 py-1 mr-1 rounded-lg'
                onChange={(e) => setSearchTerm(e.target.value.trim())}
                />
              {searchTerm?.length>0 && <button type='button' className='absolute right-4' onClick={clearSearchTerm}>
                <MdOutlineClear size='20px' className='text-red-700 cursor-pointer hover:scale-110'/>
              </button>}
            </div>
            <button>
              <AiOutlineSearch size='20px' className='text-primary cursor-pointer hover:scale-110'/>
            </button>
          </form>
        

        <div className='flex flex-col items-start mb-4'>
          <label className='mb-2 font-lora text-xl'>Catagory</label>
          <span><input type='radio' name='catagory' value='all' checked={state.catagory === 'all'} onChange={handleCatagories}/> All </span>
          <span><input type='radio' name='catagory' value='jersy' checked={state.catagory === 'jersy'} onChange={handleCatagories}/> Jersy </span>
          <span><input type='radio' name='catagory' value='cap' checked={state.catagory === 'cap'} onChange={handleCatagories}/> Cap </span>
          <span><input type='radio' name='catagory' value='mask' checked={state.catagory === 'mask'} onChange={handleCatagories}/> Mask </span>
        </div>

        <div className='flex flex-col items-start mb-4'>
          <label className='mb-2 font-lora text-xl'>Team</label>
          <select className='bg-gray-200 px-4' name='team' value={state.team} onChange={handleTeam}>
            <option value='all'>All</option>
            <option value='csk'>CSK</option>
            <option value='dc'>DC</option>
            <option value='gt'>GT</option>
            <option value='kkr'>KKR</option>
            <option value='lsg'>LSG</option>
            <option value='mi'>MI</option>
            <option value='pbks'>PBKS</option>
            <option value='rcb'>RCB</option>
            <option value='rr'>RR</option>
            <option value='srh'>SRH</option>
          </select>
        </div>

        <div className='flex flex-col items-start mb-4'>
          <label className='mb-2 font-lora text-xl' htmlFor='slide'>Price</label>
          <input type='range' max='2000' min='110' step='63' id='slide' name='priceRange' value={state.priceRange} onChange={handlePriceChange}/>
          <p>{state.priceRange}</p>
        </div>

        <div className='flex flex-col items-start mb-4'>
          <p className='mb-2 font-lora text-xl'>Sort By</p>
          <span className='flex'>
            <input type='radio' id='lth' name='sortBy' value='Low' checked={state.sortBy === 'Low'} onChange={handleSortBy}/> 
            <label htmlFor='lth'>Price- Low to High</label> 
          </span>
          <span className='flex'>
            <input type='radio' id='htl' name='sortBy' value='High' checked={state.sortBy === 'High'} onChange={handleSortBy}/> 
            <label htmlFor='htl'>Price- High to Low</label>
          </span>
          <span className='flex'>
            <input type='radio' id='atz' name='sortBy' value='A-Z' checked={state.sortBy === 'A-Z'} onChange={handleSortBy}/> 
            <label htmlFor='atz'>A-Z</label> 
          </span>
          <span className='flex'>
            <input type='radio' id='zta' name='sortBy' value='Z-A' checked={state.sortBy === 'Z-A'} onChange={handleSortBy}/> 
            <label htmlFor='zta'>Z-A</label> 
          </span>
        </div>

        <div>
          <PrimaryButton onClick={handleClear}>Clear Filter</PrimaryButton>
        </div>

      </aside>
  )
}