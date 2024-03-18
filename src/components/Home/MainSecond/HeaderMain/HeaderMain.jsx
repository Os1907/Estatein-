// eslint-disable-next-line no-unused-vars
import React from 'react'
import starts from '../../../../assets/Home Page/Stars.png'

export default function HeaderMain() {
  return (
    <>
    <div className='mt-20 lg:mx-20 mx-4 '>
            <img src={starts} alt="" className='w-14 h-7 mb-5' />
            <h2 className='lg:text-5xl text-3xl font-semibold text-white'>
            Featured Properties
            </h2>
            <div className='w-full flex justify-between items-center pb-10'>
                <p className='text-[#9999] lg:line-clamp-2 line-clamp-3 lg:w-[75%] lg:text-base text-sm'>
            Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click {"View Details"} for more information.
            </p>
            <p className="lg:mr-10 hidden lg:inline  py-3 px-4 font-medium bg-[#1A1A1A] text-white w-[48%] sm:w-[49%]  lg:w-auto   border border-[#262626] rounded-lg">
            View All Properties
            </p>
            </div>
            
        </div>
    
    </>
  )
}
