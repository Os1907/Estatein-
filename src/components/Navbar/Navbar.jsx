/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useRef, useState } from 'react'
import logo from '../../assets/Home Page/Logo.png'
import { Link, NavLink } from 'react-router-dom'
import HamburgerMenu from './Hamburger/HamburgerMenu'
import NavCenter from './NavCenter/NavCenter'
import Banner from './Banner/Banner'
import { scrollSIze } from '../Context/Scroll'

export default function Navbar() {
   let {scrollPosition}= useContext(scrollSIze)
  const scrollRef=useRef() 

  useEffect(()=>{

      if (scrollPosition > 0) {
        scrollRef.current.classList.remove("relative")
        scrollRef.current.classList.add("fixed" , "top-0"  ,"lg:right-[10%]" ,"lg:w-[80%]"  ,  "lg:rounded-3xl" , "lg:mt-4" , "z-50" , "shadow" ,"shadow-md"  )
    }
    if (scrollPosition == 0){
        scrollRef.current.classList.remove("fixed" , "top-0"  ,"lg:right-[0]" ,"lg:w-[80%]"  ,  "lg:rounded-3xl" , "lg:mt-4" , "shadow" ,"shadow-md" )
    
    }
  },[scrollPosition])
  
  return (
    <>
    <Banner/>
<div ref={scrollRef}  className="navbar mainColor  text-white  my-trans  ">
  <div className="navbar-start w-full lg:w-[50%] justify-between ">
    <img src={logo} alt="" className='md:w-28 lg:ml-16 ml-5 w-28'/>
    <HamburgerMenu/>
  </div>
  <NavCenter/>
  <div className="navbar-end hidden lg:flex">
    <NavLink className="mr-4 py-2 px-4 bg-[#141414] focus:text-white    border border-[#262626] rounded-lg" to='contact'>Contact Us</NavLink>
  </div>
</div>





    
    
    
    
    </>
  )
}
