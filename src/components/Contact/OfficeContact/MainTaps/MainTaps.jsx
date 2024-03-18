import { useState } from "react";
import { Link } from "react-router-dom";

export default function MainTaps() {
    const [isActive, setActive] = useState(1);

  return (
    <>
    <div role="tablist" className="lg:inline-flex flex justify-center  w-auto lg:ml-20 sm:mx-32 mx-5   bg-[#1a1a1a] rounded-lg  px-4 py-3 mb-4 ">
  <Link 
  onClick={()=>{
    setActive(1)
  }}
   role="tab" 
    className={isActive == 1 ? " bg-[#703bf7] text-white  border border-[#262626] rounded-lg  px-5 py-2  mx-2 " : "  text-white mainColor  border border-[#262626] rounded-lg  px-5 py-2 mx-2  " }> 
    All 
    </Link>
    <Link 
 onClick={()=>{
    setActive(2)
  }}
   role="tab" 
    className={isActive == 2 ? " bg-[#703bf7] text-white  border border-[#262626] rounded-lg  px-5 py-2  mx-2 " : "  text-white mainColor  border border-[#262626] rounded-lg  px-5 py-2  mx-2 " }> 
    Regional 
    </Link>
    <Link 
  onClick={()=>{
    setActive(3)
  }}
   role="tab" 
    className={isActive == 3 ? " bg-[#703bf7] text-white   border border-[#262626] rounded-lg  px-5 py-2  mx-2 " : "  text-white mainColor  border border-[#262626] rounded-lg  px-5 py-2  mx-2" }> 
    International 
    </Link>
  </div>
    
    
    </>
  )
}
