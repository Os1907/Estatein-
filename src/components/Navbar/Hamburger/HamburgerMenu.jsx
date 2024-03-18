/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Sling as Hamburger } from 'hamburger-react'
import { Link } from 'react-router-dom'
import icon from '../../../assets/Home Page/icon.png'

export default function HamburgerMenu() {
  const [isOpen, setOpen] = useState(false)
    const [display, setdisplay] = useState(true)
    
    function hidePage(params) {
      setOpen(false)
    }
  return (
    <>

    <div onClick={()=>setdisplay(false)} className=' w-full flex justify-end lg:hidden z-50  '>

    <Hamburger toggled={isOpen} toggle={setOpen}  size={20}  />
    </div>
    {
        isOpen? 
        <div className='bg-[#141414] w-full  h-screen absolute top-0 left-0 z-40 flex justify-center items-center scale-in-hor-right flex-col'>
            <ul className="menu menu-vertical px-1 text-xl text-center mt-24">
      <li 
      onClick={()=>{
        hidePage()
      }}
       className='mr-3 my-4 focus:bg-[#141414] focus:text-white  hover:bg-[#141414] hover:border hover:border-[#262626] rounded-lg'><Link to='home'>Home</Link></li>
      <li 
      onClick={()=>{
        hidePage()
      }}
       className='mr-3 my-4 focus:bg-[#141414] focus:text-white  hover:bg-[#141414] hover:border hover:border-[#262626] rounded-lg'> <Link to='about'>About Us</Link></li>
      <li 
      onClick={()=>{
        hidePage()
      }} 
      className='mr-3 my-4 focus:bg-[#141414] focus:text-white  hover:bg-[#141414] hover:border hover:border-[#262626] rounded-lg'><Link to='properties'>Properties</Link></li>
      <li 
      onClick={()=>{
        hidePage()
      }} 
      className='mr-3 my-4 focus:bg-[#141414] focus:text-white  hover:bg-[#141414] hover:border hover:border-[#262626] rounded-lg'><Link to='service'>Services</Link></li>
    </ul>
    <div className=' flex items-end mt-28 '>

    <img src={icon} alt="" className='w-10 ' />
    </div>

    </div> : <div className={display ? 'hidden':'bg-[#141414] w-full h-screen absolute top-0 left-0 z-40 flex justify-center items-center slide-out-right flex-col'}>
            <ul className="menu menu-vertical px-1 text-xl text-center  mt-24">
      <li className='mr-3 my-4 focus:bg-[#141414] focus:text-white  hover:bg-[#141414] hover:border hover:border-[#262626] rounded-lg'><Link to='home'>Home</Link></li>
      <li className='mr-3 my-4 focus:bg-[#141414] focus:text-white  hover:bg-[#141414] hover:border hover:border-[#262626] rounded-lg'> <Link to='about'>About Us</Link></li>
      <li className='mr-3 my-4 focus:bg-[#141414] focus:text-white  hover:bg-[#141414] hover:border hover:border-[#262626] rounded-lg'><Link to='properties'>Properties</Link></li>
      <li className='mr-3 my-4 focus:bg-[#141414] focus:text-white  hover:bg-[#141414] hover:border hover:border-[#262626] rounded-lg'><Link to='service'>Services</Link></li>
    </ul>
    <div className=' flex items-end mt-28 '>

    <img src={icon} alt="" className='w-10 ' />
    </div>

    </div> 
    }
    
    
    
    
    </>
  )
}
