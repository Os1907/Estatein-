import bg from "../../../assets/Home Page/Abstract Design.png";
import starts from '../../../assets/Home Page/Stars.png'

export default function TitleModelThree() {
  return (
    <>
    <div className="xl:col-span-5 col-span-12 mainColor flex item-center mx-4 flex-col relative  lg:justify-center    ">
        <img src={bg} alt="" className="w-full absolute  opacity-15 rotate-180   ml-20 " />
        <div className="z-20">
          <div className='lg:mx-20 '>
            <img src={starts} alt="" className='w-14 h-7 mb-5 ' />
            <h2 className='lg:text-5xl text-3xl font-semibold text-white'>
            Smart Investments, Informed Decisions
            </h2>
            <div className='w-full flex justify-between items-center pb-10'>
                <p className='text-[#9999] lg:line-clamp-none line-clamp-3  lg:text-base text-sm'>
                Building a real estate portfolio requires a strategic approach. {"Estatein's"} Investment Advisory Service empowers you to make smart investments and informed decisions.
                            </p>
            
            </div>
            <div className='overflow-hidden bg-[#1a1a1a] pb-10 rounded-xl relative mb-10'>
                <div className='flex  flex-col z-10 relative  '>
                       <p className='p-10 pb-5 text-2xl font-semibold  text-white '>Unlock Your Investment Potential</p>
                    <p className='px-10 pb-5 text-white'>Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.</p>
                </div>
                       <p className=' relative z-10   lg:mb-0 cursor-pointer mx-20 text-center mainColor text-white p-3 rounded-lg border border-[#242424]'>Learn More</p>
                       <img src={bg} alt="" className=' w-full    z-0 absolute top-0 ' />
                </div>
            
        </div>
 
        </div>
      </div>
    </>
  )
}