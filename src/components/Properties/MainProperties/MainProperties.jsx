import pettern from '../../../assets/Home Page/Abstract Design.png'

export default function MainProperties() {
  return (
    <>
    <div className="relative lg:pt-28 pt-16 lg:pb-20 pb-14 bg-gradient-to-r overflow-hidden from-[#1a1a1a] ">
    <img src={pettern} alt=""  className='absolute top-0 w-full rotate-180 z-10 opacity-15'/>
    <div className=' lg:mx-20  mx-4 overflow-hidden  z-20  relative '>
      
            <h2 className='lg:text-5xl text-3xl font-semibold text-white'>
            Find Your Dream Property
            </h2>
            <div className='w-full flex justify-between items-center pb-10'>
                <p className='text-[#9999] lg:line-clamp-2 mt-2 line-clamp-3 lg:w-full lg:text-base text-sm'>
                Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey 
            </p>
            </div>
        </div>
        </div>
    
    
    
    </>
  )
}
