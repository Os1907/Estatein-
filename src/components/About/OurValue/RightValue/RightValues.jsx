// eslint-disable-next-line no-unused-vars
import React from 'react'
import one from '../../../../assets/About/valueone.png'
import two from '../../../../assets/About/valuetwo.png'
import three from '../../../../assets/About/valuethree.png'

export default function RightValues() {

    const items = [
        {
            img: one ,
            title : "Trust",
            text: "Trust is the cornerstone of every successful real estate transaction."
        } ,
        {
            img: two ,
            title : "Excellence",
            text: "We set the bar high for ourselves. From the properties we list to the services we provide."
        } ,
        {
            img: three ,
            title : "Client-Centric",
            text: "Your dreams and needs are at the center of our universe. We listen, understand."
        } ,
        {
            img: one ,
            title : "Our Commitment",
            text: "We are dedicated to providing you with the highest level of service, professionalism, and support."
        } ,

    ]





  return (
    <>
    <div className='lg:col-span-6 col-span-12 relative   lg:p-10 px-2  lg:mt-0   '>
          <div className='grid grid-cols-12  xl:w[75%]  mainColor  rounded-xl border-4 border-[#242424]   xl:mx-5  '> 


          {
            items.map((item , index)=>{
                return <>
                <div key={index} className='md:col-span-6 col-span-12  border-t mt-[-1px] pt-4 border-[#242424] border-l ml-[-1px] pl-5  m-4  lg:border-b-0 mr-2  '>
                    <div className="flex items-center ">
                        <img src={item.img} alt="" className='w-14' />
                        <p className='text-white ml-2 font-semibold'>{item.title}</p>
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
