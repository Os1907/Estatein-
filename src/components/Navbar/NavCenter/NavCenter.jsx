import { NavLink } from "react-router-dom";

export default function NavCenter() {
  return (
    <>

<div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 ">
      <li className='mr-3 focus:bg-[#141414] focus:text-white  hover:bg-[#141414] hover:border hover:border-[#262626] rounded-lg '><NavLink to='home'>Home</NavLink></li>
      <li className='mr-3 focus:bg-[#141414] focus:text-white  hover:bg-[#141414] hover:border hover:border-[#262626] rounded-lg'> <NavLink to='about'>About Us</NavLink></li>
      <li className='mr-3 focus:bg-[#141414] focus:text-white  hover:bg-[#141414] hover:border hover:border-[#262626] rounded-lg'><NavLink to='properties'>Properties</NavLink></li>
      <li className='mr-3 focus:bg-[#141414] focus:text-white  hover:bg-[#141414] hover:border hover:border-[#262626] rounded-lg'><NavLink to='service'>Services</NavLink></li>
    </ul>
  </div>
    
    
    
    
    </>
  )
}
