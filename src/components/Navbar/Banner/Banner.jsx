import { useContext, useState } from 'react';
import bgimage from '../../../assets/Home Page/upperbar.png';
import { HiMiniXMark } from "react-icons/hi2";
import { scrollSIze } from '../../Context/Scroll';
export default function Banner() {
    const [HideBar, setHideBar] = useState(true)
   let {scrollPosition}= useContext(scrollSIze)

 

  return (
    <>
{
HideBar && scrollPosition == 0 ? 
    <div className="w-full h-10 bg-[#1A1A1A] relative flex items-center justify-center ">
        <img src={bgimage} alt="" className=' h-10 w-full opacity-10 absolute'  />
        <p className='text-center text-white inline lg:text-base text-[10px] ' >
        <span className='mr-1'>✨</span> Discover Your Dream Property with Estatein
        <HiMiniXMark onClick={()=> setHideBar(false)} className='absolute top-3 cursor-pointer lg:right-28 lg:text-lg text-sm right-14 text-white border bg-[#4e4e4e] border-white rounded-full' />
        </p>
    </div> : " "

}
    </>
  )
}
