/* eslint-disable no-unused-vars */
import React from "react";
import { MdSwipeLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export default function CarusolFAQS() {
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
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  };
  const FAQS = [
    {
      ques: "How do I search for properties on Estatein?",
      ans: "Learn how to use our user-friendly search tools to find properties that match your criteria.",
    },
    {
      ques: "What documents do I need to sell my property?",
      ans: "Find out about the necessary documentation for listing your property with us.",
    },
    {
      ques: "How can I contact an Estatein agent?",
      ans: "Discover the different ways you can get in touch with our experienced agents.",
    },
    {
      ques: "How do I search for properties on Estatein?",
      ans: "Learn how to use our user-friendly search tools to find properties that match your criteria.",
    },
    {
      ques: "What documents do I need to sell my property through Estatein?",
      ans: "Find out about the necessary documentation for listing your property with us.",
    },
  ];
  return (
    <>
      <div className="slider-container overflow-hidden relative    lg:mx-16 mx-4 pb-10 border-b border-[#262626] ">
        <Slider {...settings}>
          {FAQS.map((item, index) => {
            return (
              <>
                <div className=" z-20   ">
                  <div className="mainColor shadow border border-[#262626] rounded-xl flex flex-col items-left  sm:mx-14  md:mx-5 p-5  ">
                    <div className="titles-Card ">
                      <h3 className="text-white lg:text-lg text-base text-left font-semibold line-clamp-1">
                        {item.ques}
                      </h3>
                      <p className="text-[#9999] xl:text-base text-sm">
                        {item.ans}
                      </p>
                    </div>

                    <div className="w-full flex justify-between mt-4 my-2">
                      <Link className=" py-3 px-4 text-white  my-1 bg-[#1a1a1a]  text-[10px]   rounded-lg sm:text-sm lg:text-base border border-[#262626] ">
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </Slider>
        <p className="text-center text-white lg:text-base  text-sm mt-4 z-10 relative">
          {" "}
          <MdSwipeLeft className="text-white mr-1 inline mb-1 rotate text-lg" />{" "}
          Swipe to see all {"FAQ'S"}
        </p>
      </div>
    </>
  );
}
