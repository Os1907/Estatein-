// eslint-disable-next-line no-unused-vars
import React from 'react'
import left from '../../../assets/Home Page/Footer/left.png'
import right from '../../../assets/Home Page/Footer/right.png'
import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <>
    <div className='relative overflow-hidden py-16 border-b border-[#242424] '>
        <div className='lg:mx-20 mx-5 flex relative flex-col lg:flex-row'>
            <div className='lg:w-[75%] w-full z-20'>
            <h2 className='text-white lg:text-4xl text-2xl items-center font-semibold '>
            Start Your Real Estate Journey Today
            </h2>
            <p className='text-[#9999] text-sm lg:line-clamp-3'>
            Your dream property is just a click away. Whether {"you're"} looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.
            </p>
            </div>
            <div className='lg:w-[25%] w-full text-center mt-4 lg:mt-0 flex items-center justify-end z-20'>
            <Link to='/properties' className="mr-0 lg:mr-4 py-3 px-4  my-1 bg-[#703BF7] text-white   rounded-lg w-full lg:w-auto">
            Explore Properties
            </Link>
            </div>
        </div>
        <img src={right} alt="" className='absolute top-0 xl:w-[35%] w-96 rotate-180 sm:rotate-0  sm:bottom-0 sm:top-auto sm:right-0' />
        <img src={left} alt="" className='absolute bottom-[0%] xl:w-[35%] w-96  right-0 lg:rotate-0 left-0' />
        </div>
    
    
    </>
  )
}
