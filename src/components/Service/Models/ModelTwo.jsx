import one from '../../../assets/Service/Icon Container (8).png'
import two from '../../../assets/Service/Icon Container (9).png'
import three from '../../../assets/Service/Icon Container (10).png'
import four from '../../../assets/Service/Icon Container (11).png'
import pettern from '../../../assets/Home Page/pettern.png'
export default function ModelTwo() {
    const items = [
        {
            img: one ,
            title : "Tenant Harmony",
            text: "Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies."
        } ,
        {
            img: two ,
            title : "Maintenance Ease",
            text: "Say goodbye to property maintenance headaches. We handle all aspects of property upkeep."
        } ,
        {
            img: three ,
            title : "Financial Peace of Mind",
            text: "Managing property finances can be complex. Our financial experts take care of rent collection"
        } ,
        {
            img: four ,
            title : "Legal Guardian",
            text: "Stay compliant with property laws and regulations effortlessly."
        } ,

    ]





  return (
    <>


          {
            items.map((item , index)=>{
                return <>
                <div key={index} className='md:col-span-6  lg:col-span-4 col-span-12 2  border p-10  border-[#242424] rounded-lg    '>
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
                       <p className='p-10 text-2xl font-semibold  text-white '>Experience Effortless Property Management</p>
                       <p className=' w-[90%] mb-5 lg:mb-0 cursor-pointer lg:w-auto lg:mr-10 text-center mainColor text-white p-3 rounded-lg border border-[#242424]'>Learn More</p>
                </div>
                <div className='relative z-10 pb-10'>
                    <p className='px-10 text-[#999]'>Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.</p>
                </div>
                       <img src={pettern} alt="" className='w-full h-72 lg:h-80 xl:h-92 2xl:h-auto z-0 absolute top-0 ' />
                </div>
                
                
                


                
    
    
    
    </>
  )
}
