// eslint-disable-next-line no-unused-vars
import React from 'react'
import bg from "../../../../assets/Home Page/Abstract Design.png";
import starts from '../../../../assets/Home Page/Stars.png'

export default function LeftValue() {
  return (
    <>
    <div className="lg:col-span-6 col-span-12 mainCo lor flex item-center mx-4 flex-col relative  lg:justify-center    ">
        <img src={bg} alt="" className="w-full absolute  opacity-15 rotate-180   ml-20 " />
        <div className="z-20">
          <div className='mt-20 lg:mx-20'>
            <img src={starts} alt="" className='w-14 h-7 mb-5 ' />
            <h2 className='lg:text-5xl text-3xl font-semibold text-white'>
            Our Value
            </h2>
            <div className='w-full flex justify-between items-center pb-10'>
                <p className='text-[#9999] lg:line-clamp-none line-clamp-3  lg:text-base text-sm'>
                Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.
            </p>
            
            </div>
            
        </div>
 
        </div>
      </div>
    
    
    
    
    
    </>
  )
}
