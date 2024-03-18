/* eslint-disable no-unused-vars */
import React from 'react'

export default function MainAchi() {
    const Achievement =[
        {
            title : "3+ Years of Excellence" ,
            text : "With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate."
        } ,
        {
            title : "Happy Clients" ,
            text : "Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do."
        } ,
        {
            title : "Industry Recognition" ,
            text : "We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence."
        } ,
    ]
  return (
    <>
    <div className="grid grid-cols-12 lg:mx-20 gap-y-3 gap-x-3">
        {
            Achievement.map((item ,index)=>{
                return <>
                <div key={index + Math.random()} className="lg:col-span-4 col-span-12 z-20   mx-2 lg:mx-0  ">
                  <div className="mainColor shadow border-4 border-[#262626] rounded-xl flex flex-col items-left  sm:mx-14  md:mx-0  p-5  ">
                    <div className="titles-Card   ">
                      <h3 className="text-white lg:text-lg text-base text-left font-semibold line-clamp-1">
                        {item.title}
                      </h3>
                      <p className="text-[#9999] xl:text-base text-sm lg:line-clamp-3 my-4">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
                </>
            })
        }
                
    </div>
    </>
  )
}
