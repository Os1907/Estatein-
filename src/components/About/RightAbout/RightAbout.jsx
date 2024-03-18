// eslint-disable-next-line no-unused-vars
import React from 'react'
import build from '../../../assets/About/houes.png'
import bg from "../../../assets/Home Page/Abstract Design.png";


export default function RightAbout() {
  return (
    <>
    <div className='lg:col-span-6 col-span-12 relative -order-1  lg:order-1  lg:mx-0  p-10  lg:mt-0   '>
          <div className='relative  xl:w[75%]  mainColor  rounded-xl border border-[#242424] slideInRight  xl:mx-24'> 
          <img src={bg} alt="" className=' w-full   rounded-xl lg:rounded-none opacity-90' />
          <img src={build} alt="" className=' absolute z-10 w-full bottom-0     rounded-xl ' />
          </div>
        </div>
    
    
    </>
  )
}
