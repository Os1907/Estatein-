import stars from '../../../assets/Home Page/Stars.png'
export default function TitleForm(){

    return (
    <>
    <div className='mt-20 lg:mx-20  mx-4 pt-4'>
            <img src={stars} alt="" className='w-14 h-7 mb-5' />
            <h2 className='lg:text-5xl text-3xl font-semibold text-white'>
            {"Let's"} Make it Happen
            </h2>
            <div className='w-full flex justify-between items-center pb-10 mt-2'>
                <p className='text-[#9999] lg:line-clamp-2 line-clamp-3 lg:w-full lg:text-base text-sm'>
                Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. {"Don't "}wait; {"let's"} embark on this exciting journey together.
            </p>
            </div>
            
        </div>
    
    
    
    </>
    )
}