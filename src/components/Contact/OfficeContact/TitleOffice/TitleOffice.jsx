import starts from '../../../../assets/Home Page/Stars.png'

export default function TitleOffice() {
  return (
    <>
             <div className='mt-20 lg:mx-20  mx-4 '>
            <img src={starts} alt="" className='w-14 h-7 mb-5' />
            <h2 className='lg:text-5xl text-3xl font-semibold text-white'>
            Discover Our Office Locations
            </h2>
            <div className='w-full flex justify-between items-center pb-10'>
                <p className='text-[#9999] lg:line-clamp-2 mt-3 line-clamp-3 lg:w-full lg:text-base text-sm'>
                Estatein is here to serve you across multiple locations. Whether {"you're"} looking to meet our team, discuss real estate opportunities, or simply drop by for a chat, we have offices conveniently located to serve your needs. Explore the categories below to find the Estatein office nearest to you 
                            </p>

            </div>
            
        </div>
    
    
    
    </>
  )
}
