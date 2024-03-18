/* eslint-disable no-unused-vars */
import React from 'react'
import icon from '../../../assets/Home Page/icon.png'
import logo from '../../../assets/Home Page/Logo.png'
import { TbMessage2Heart } from "react-icons/tb";
import { BsSendCheck } from "react-icons/bs";
import { BsEmojiHeartEyes } from "react-icons/bs";

export default function MainFooter() {
  return (
    <>
    <footer className="grid grid-cols-12 p-10 mainColor gap-y-5    text-white">
        <div className=' lg:col-span-3 col-span-6 flex   items-center justify-center flex-col'>
            <img src={logo} alt="" className=' lg:w-32 w-28 ' />
            <div className='px-4 border border-[#262626] mainColor flex items-center rounded-lg mt-3 '>
            <TbMessage2Heart className='text-[#9999]'/>
            <input type="text" placeholder="Enter Your Email" className=" rounded-lg footer-Input mainColor  w-[75%] lg:mx-auto   max-w-xs py-1 px-2  text-white  placeholder:text-[#9999] text-[10px] md:text-base " />
            <BsSendCheck  className='text-white cursor-pointer text-[12px] md:text-base'/>
            </div>
            <p className='mt-2 lg:text-sm text-[8px] text-[#865aff]'>we will send to you all new {"offer's"} <BsEmojiHeartEyes className='inline mb-1 text-white ml-1'/></p>
        </div>
  <nav className=' lg:col-span-3 col-span-6 text-center'>
    <h6 className="text-white">Services</h6> 
    <p className="link link-hover text-[#9999] ">Branding</p>
    <p className="link link-hover text-[#9999] ">Design</p>
    <p className="link link-hover text-[#9999] ">Marketing</p>
    <p className="link link-hover text-[#9999] ">Advertisement</p>
  </nav> 
  <nav className=' lg:col-span-3 col-span-6 text-center'>
    <h6 className=" text-white">Company</h6> 
    <p className="link link-hover text-[#9999]">About us</p>
    <p className="link link-hover text-[#9999]">Contact</p>
    <p className="link link-hover text-[#9999]">Jobs</p>
    <p className="link link-hover text-[#9999]">Press kit</p>
  </nav> 
  <nav className='lg:col-span-3 col-span-6 text-center'>
    <h6 className=" text-white">Legal</h6> 
    <p className="link link-hover text-[#9999]">Terms of use</p>
    <p className="link link-hover text-[#9999]">Privacy policy</p>
    <p className="link link-hover text-[#9999]">Cookie policy</p>
  </nav>
</footer> 
<footer className="footer px-10 py-4 border-t bg-[#1a1a1a] text-white  border-[#262626]">
  <aside className="items-center flex flex-col lg:flex-row justify-center lg:justify-start w-full gap-y-0 ">
    <img src={icon} alt="" className='h-8 w-8 mb-2 lg:mb-0' />
    <p>@2024 Estatein. All Rights Reserved.<br/>Developed by : Osama Mohamed</p>
  </aside> 
  <nav className="  flex justify-center lg:justify-end w-full ">
    <div className="grid grid-flow-col gap-4">
      <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></p>
      <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></p>
      <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></p>
    </div>
  </nav>
</footer>
    
    
    
    
    </>
  )
}
