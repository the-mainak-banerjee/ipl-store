import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Carousel = () => {
    const carousal = ['../../assets/cover/hero.jpg', '../../assets/cover/hero4.jpg', '../../assets/cover/hero2.jpg']
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((data) => {
                return data === carousal.length-1 
                ? 0
                : data + 1
            })
        }, 3000)
        
        return () => {
            clearInterval(timer)
        }
    })

   
  
  return (
    <section className='w-full h-[80vh] relative font-poppins'>  
        <img src={carousal[currentIndex]} alt='hero' className='w-full h-full object-contains border-2 border-primary'/>
        <Link to='/products'>
            <button 
                className='absolute bottom-5 left-[20%] md:left-[calc(50%-7rem)] bg-primary text-white px-12 py-2 rounded-md text-2xl shadow-2xl border-2 hover:bg-secondary hover:text-black hover:border-primary hover:scale-110 transition-all'> Shop Now 
            </button>
        </Link>
    </section>
  )
}
