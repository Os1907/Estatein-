/* eslint-disable no-unused-vars */
import React from 'react'
import bg from '../../../assets/Home Page/Abstract Design.png'
import build from '../../../assets/Home Page/Building.png'
import marker from '../../../assets/Home Page/marker.png'

export default function RightHero() {
  return (
    <>

<div className='lg:col-span-6 col-span-12 relative     lg:order-2 mx-4 lg:mx-0  mt-5 lg:mt-0 '>
          <div className='relative bg-[#1a1a1a]  rounded-xl border border-[#262626] lg:border-[0px] lg:rounded-none'> 
          <img src={bg} alt="" className='w-full  rounded-xl lg:rounded-none' />
          <img src={build} alt="" className=' absolute z-10 top-0 w-full slideInRight  rounded-xl lg:rounded-none' />
          <img src={marker} alt="" className=' absolute z-10 lg:top-[15%]  rotate-90-cw  lg:left-[-10%] size-28 bottom-[-5%]' />
          </div>
        </div>
    
    
    
    </>
  )
}
