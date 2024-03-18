
import starts from '../../../../assets/Home Page/Stars.png'
export default function HeaderNavigation() {
  return (
    <>
    <div className='mt-20 lg:mx-20  mx-4 border-t border-[#242424] pt-4'>
            <img src={starts} alt="" className='w-14 h-7 mb-5' />
            <h2 className='lg:text-5xl text-3xl font-semibold text-white'>
            Navigating the Estatein Experience
            </h2>
            <div className='w-full flex justify-between items-center pb-10'>
                <p className='text-[#9999] mt-1 lg:line-clamp-2 line-clamp-3 lg:w-full lg:text-base text-sm'>
                At Estatein, {"we've"} designed a straightforward process to help you find and purchase your dream property with ease. {"Here's"} a step-by-step guide to how it all works.
            </p>
            </div>
            
        </div>
    
    
    </>
  )
}
