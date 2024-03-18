// eslint-disable-next-line no-unused-vars
import React from 'react'
import starts from '../../../assets/Home Page/Stars.png'




export default function LeftAbout() {
  return (
    <>
    <div className="lg:col-span-6 col-span-12 mainColor flex item-center mx-4 flex-col relative slideInLeft  lg:order-1   ">
        <div className="z-20">
          <div className='lg:mt-20 mt-5 lg:ml-20'>
            <img src={starts} alt="" className='w-14 h-7 mb-5' />
            <h2 className='lg:text-5xl text-3xl font-semibold text-white'>
            Our Journey
            </h2>
            <div className='w-full flex justify-between items-center pb-10'>
                <p className='text-[#9999] lg:line-clamp-none line-clamp-3  lg:text-base text-sm'>
                Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, {"we've"} expanded our reach, forged valuable partnerships, and gained the trust of countless clients.
            </p>
            
            </div>
            
        </div>
          
          <div className="lg:ml-20 my-4 text-white flex flex-wrap justify-evenly lg:justify-center xl:justify-start gap-2 lg:gap-y-4  ">
            <p className="lg:mr-4  py-3 px-4 font-bold bg-[#1A1A1A] focus:text-white w-[47%] sm:w-[49%]  lg:w-auto   border border-[#262626] rounded-lg">
              200+
              <span className="block  font-medium text-[#999999] text-sm lg:text-base  ">
                Happy Customers
              </span>
            </p>
            <p className="lg:mr-4 py-3 px-4 bg-[#1A1A1A] focus:text-white w-[47%] sm:w-[49%]  lg:w-auto ml-2 md:ml-0  border border-[#262626] rounded-lg">
              10K+
              <span className="block text-sm lg:text-base  font-medium text-[#999999]">
                Properties For Clients
              </span>
            </p>
            <p className="lg:mr-4 py-3 px-4 bg-[#1A1A1A] focus:text-white  w-full lg:w-auto   xl:mt-0  border border-[#262626] rounded-lg">
              16+
              <span className="block text-sm lg:text-base  font-medium text-[#999999]">
                Happy Customers
              </span>
            </p>
          </div>
        </div>
      </div>
    
    
    </>
  )
}
