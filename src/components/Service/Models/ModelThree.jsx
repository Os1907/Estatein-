import one from '../../../assets/Service/vector (5).png'
import two from '../../../assets/Service/vector (4).png'
import three from '../../../assets/Service/vector (3).png'
import four from '../../../assets/Service/vector (2).png'

export default function ModelThree() {

    const items = [
        {
            img: one ,
            title : "Market Insight",
            text: "Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions"
        } ,
        {
            img: two ,
            title : "ROI Assessment",
            text: "Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments"
        } ,
        {
            img: three ,
            title : "Customized Strategies",
            text: "Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs"
        } ,
        {
            img: four ,
            title : "Diversification Mastery",
            text: "Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations"
        } ,

    ]





  return (
    <>
    <div className='xl:col-span-7 col-span-12 relative   lg:p-16 px-2  lg:mt-0   '>
          <div className='grid grid-cols-12   xl:w[75%]  lg:bg-[#1A1A1A]  rounded-2xl   xl:mx-4 p-2 gap-2  '> 


          {
            items.map((item , index)=>{
                return <>
                <div key={index} className='md:col-span-6 col-span-12 p-10 border-2 mainColor   border-[#242424] rounded-xl     '>
                    <div className="flex items-center ">
                        <img src={item.img} alt="" className='w-14' />
                        <p className='text-white ml-2 text-lg font-semibold'>{item.title}</p>
                    </div>
                    <div className='my-2'>
                        <p className='text-[#9999]'>{item.text}</p>
                    </div>
                </div>
                </>
            })
          }
                
                
                
                
                
                


                
          </div>
        </div>
    
    
    
    </>
  )
}
