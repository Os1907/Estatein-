// eslint-disable-next-line no-unused-vars
import React from "react";
import Slider from "react-slick";
import pettern from '../../../../assets/Home Page/Abstract Design.png'
import build1 from '../../../../assets/Home Page/Building/Image.png' 
import build2 from '../../../../assets/Home Page/Building/Image2.png' 
import build3 from '../../../../assets/Home Page/Building/Image3.png' 
import bedroom from '../../../../assets/Home Page/Building/Icons/bedroom.png'
import bathroom from '../../../../assets/Home Page/Building/Icons/bathroom.png'
import villa from '../../../../assets/Home Page/Building/Icons/villa.png'
import { MdSwipeLeft } from "react-icons/md";
import { Link } from "react-router-dom";

export default function CarusolProduct() {
     var settings = {
          infinite: false,
          speed: 1000,
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
          responsive: [
            {
              breakpoint: 1280,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
              }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2
              }
            }
          ] ,
        };
    
    const CardInfo = [
        {
            image : build1,
            Title:"Seaside Serenity Villa" ,
            Desc :"A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood..." ,
            Bedroom: 4 , 
            Bathroom : 3 , 
            type:"villa"
        } ,
        {
            image : build2,
            Title:"Metropolitan Haven" ,
            Desc :"A chic and fully-furnished 2-bedroom apartment with panoramic city views..." ,
            Bedroom: 2 , 
            Bathroom : 2 , 
            type:"villa"
        },
        {
            image : build3,
            Title:"Rustic Retreat Cottage" ,
            Desc :"An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community..." ,
            Bedroom: 5 , 
            Bathroom : 3 , 
            type:"villa"
        },{
            image : build1,
            Title:"Seaside Serenity Villa" ,
            Desc :"A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood..." ,
            Bedroom: 4 , 
            Bathroom : 3 , 
            type:"villa"
        } ,
        {
            image : build2,
            Title:"Metropolitan Haven" ,
            Desc :"A chic and fully-furnished 2-bedroom apartment with panoramic city views..." ,
            Bedroom: 2 , 
            Bathroom : 2 , 
            type:"villa"
        },
        {
            image : build3,
            Title:"Rustic Retreat Cottage" ,
            Desc :"An elegant 5-bedroom, 3-bathroom townhouse in a gated community..." ,
            Bedroom: 5 , 
            Bathroom : 3 , 
            type:"villa"
        }

    ]
       
        return (
          <div className="slider-container overflow-hidden relative   lg:mx-16 mx-4 pb-10 border-b border-[#262626] ">
            <img src={pettern} alt="" className="absolute  My-OpacitY" />
            <Slider {...settings} >

                {
                    CardInfo.map((item ,index)=>{
                        return <>
                        <div key={index} className=" z-20   ">
                    <div className="mainColor shadow border   border-[#262626] rounded-xl flex flex-col items-center  sm:mx-1  md:mx-5 p-5  ">
                      <Link to='/product'>  <img src={item.image} alt="" className="sm:w-96  sm:h-72 w-80 h-44   my-4 border border-[#262626] rounded-xl" /> </Link>
                        <div className="titles-Card">
                           <h3 className="text-white lg:text-lg text-base text-left font-semibold">
                           {item.Title}
                        </h3> 
                        <p className="text-[#9999] xl:text-base text-sm">
                        {item.Desc} <span  className="font-semibold cursor-pointer">Read More</span> 
                        </p>
                        </div>
                        <div className="my-3 flex lg:justify-start justify-center w-full flex-wrap gap-y-1   ">
                            <div className="flex border border-[#262626] rounded-3xl items-center px-5 sm:px-3 mx-1 py-1 bg-[#1a1a1a] flex-wrap">
                                <img src={bedroom} alt="" className="size-3" />
                                <p className="xl:text-sm text-[12px]  sm:ml-2 ml-1 text-white"> {item.Bedroom}-Bedroom </p>
                            </div>
                            <div className="flex border border-[#262626] rounded-3xl items-center px-5 sm:px-3 mx-1 py-1 bg-[#1a1a1a]">
                                <img src={bathroom} alt="" className="size-3" />
                                <p className="lg:text-sm text-[12px] sm:ml-2 ml-1 text-white"> {item.Bathroom}-bathroom </p>
                            </div>
                            <div className="flex border border-[#262626] rounded-3xl items-center px-5 sm:px-3 mx-1 py-1 bg-[#1a1a1a]">
                                <img src={villa} alt="" className="size-3" />
                                <p className="lg:text-sm text-[12px] sm:ml-2 ml-1 text-white"> {item.type} </p>
                            </div>
                        </div>
                            <div className="w-full flex justify-between">
                                <div>
                                    <p className="text-[#9999] text-[12px]   sm:text-sm ">price</p>
                                    <p className="text-white    text-sm font-medium">$550,000</p>
                                </div>
                                <Link to='/product' className=" py-3 px-4 text-white  my-1 bg-[#703BF7]  text-[10px]  lg:rounded-xl rounded-lg sm:text-sm lg:text-base ">
                                View Property Details
                                </Link>
                            </div>
                
                    </div>

              </div>
                        </>
                    })
                }
                
              
             
              
            </Slider>
              <p className="text-center text-white lg:text-base  text-sm mt-4 z-10 relative"> <MdSwipeLeft className="text-white mr-1 inline mb-1 rotate text-lg" /> Swipe to see all product</p>
            
          </div>
        );
      
}
