import starts from '../../../../assets/Home Page/Stars.png'

export default function TitleFormCo() {
  return (
    <>
    <div className='mt-20 lg:mx-20  mx-4 '>
            <img src={starts} alt="" className='w-14 h-7 mb-5' />
            <h2 className='lg:text-5xl text-3xl font-semibold text-white'>
            {"Let's"} Connect
            </h2>
            <div className='w-full flex justify-between items-center pb-10'>
                <p className='text-[#9999] lg:line-clamp-2 mt-3 line-clamp-3 lg:w-full lg:text-base text-sm'>
                {"We're"} excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether {"you're "}a prospective client, partner, or simply curious about our services, {"we're"} here to answer your questions and provide the assistance you need.
                            </p>

            </div>
            
        </div>
    
    </>
  )
}
