import starts from '../../../../assets/Home Page/Stars.png'


export default function TitleAch() {
   
  return (
    <>
    <div className='mt-20 lg:mx-20  mx-4 border-t border-[#242424] pt-4'>
            <img src={starts} alt="" className='w-14 h-7 mb-5' />
            <h2 className='lg:text-5xl text-3xl font-semibold text-white'>
            Our Achievements
            </h2>
            <div className='w-full flex justify-between items-center pb-10'>
                <p className='text-[#9999] lg:line-clamp-2 line-clamp-3 lg:w-full lg:text-base text-sm'>
                Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.
            </p>
            </div>
            
        </div>
    
    
    </>
  )
}
