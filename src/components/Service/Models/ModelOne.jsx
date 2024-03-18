import one from '../../../assets/Service/Icon (1).png'
import two from '../../../assets/Service/Icon (4).png'
import three from '../../../assets/Service/Icon (3).png'
import four from '../../../assets/Service/Icon (2).png'
import pettern from '../../../assets/Home Page/pettern.png'
export default function ModelOne() {
    const items = [
        {
            img: one ,
            title : "Valuation Mastery",
            text: "Discover the true worth of your property with our expert valuation services."
        } ,
        {
            img: two ,
            title : "Strategic Marketing",
            text: "Selling a property requires more than just a listing; it demands a strategic marketing approach."
        } ,
        {
            img: three ,
            title : "Negotiation Wizardry",
            text: "Negotiating the best deal is an art, and our negotiation experts are masters of it."
        } ,
        {
            img: four ,
            title : "Closing Success",
            text: "A successful sale is not complete until the closing. We guide you through the intricate closing process."
        } ,

    ]





  return (
    <>


          {
            items.map((item , index)=>{
                return <>
                <div key={index} className='md:col-span-6  lg:col-span-4 col-span-12  border p-10  border-[#242424] rounded-lg    '>
                    <div className="flex items-center ">
                        <img src={item.img} alt="" className='w-16' />
                        <p className='text-white ml-2 font-semibold text-xl'>{item.title}</p>
                    </div>
                    <div className='my-2'>
                        <p className='text-[#9999]'>{item.text}</p>
                    </div>
                </div>
                </>
            })
          }
                
                
            <div className='lg:col-span-8 col-span-12 overflow-hidden bg-[#1a1a1a] rounded-xl relative'>
                <div className='flex  items-center justify-between z-10 relative lg:flex-row flex-col'>
                       <p className='p-10 text-2xl font-semibold  text-white '>Unlock the Value of Your Property Today</p>
                       <p className=' w-[90%] mb-5 lg:mb-0 cursor-pointer lg:w-auto lg:mr-10 text-center mainColor text-white p-3 rounded-lg border border-[#242424]'>Learn More</p>
                </div>
                <div className='relative z-10 pb-10'>
                    <p className='px-10 text-[#999]'>Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset.</p>
                </div>
                       <img src={pettern} alt="" className='w-full h-72 lg:h-80 xl:h-92 2xl:h-auto z-0 absolute top-0 ' />
                </div>
                
                
                


                
    
    
    
    </>
  )
}
