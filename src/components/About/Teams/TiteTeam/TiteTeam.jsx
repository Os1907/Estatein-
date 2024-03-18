import stars from "../../../../assets/Home Page/Stars.png"
export default function TiteTeam() {
  return (
    <>
    <div className='mt-20 lg:mx-20  mx-4 border-t border-[#242424] pt-4'>
            <img src={stars} alt="" className='w-14 h-7 mb-5' />
            <h2 className='lg:text-5xl text-3xl font-semibold text-white'>
            Meet the Estatein Team
            </h2>
            <div className='w-full flex justify-between items-center pb-10'>
                <p className='text-[#9999] mt-1 lg:line-clamp-2 line-clamp-3 lg:w-full lg:text-base text-sm'>
                At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality.
            </p>
            </div>
            
        </div>
    
    
    
    </>
  )
}
