/* eslint-disable no-unused-vars */
import React from "react";
import { MdSwipeLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import stars from "../../../../assets/Home Page/client/Stars.png";
import one from "../../../../assets/Home Page/client/one.png";
import two from "../../../../assets/Home Page/client/two.png";
import three from "../../../../assets/Home Page/client/three.png";
import four from "../../../../assets/Home Page/client/four.webp";
import five from "../../../../assets/Home Page/client/five.png";
import sex from "../../../../assets/Home Page/client/sex.png";

export default function CarusolStory() {
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
  const story = [
    {
      tite: "Exceptional Service!",
      text: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
      name: "Wade Warren",
      country: "USA, California",
      profile: one,
    },
    {
      tite: "Efficient and Reliable",
      text: "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
      name: "Emelie Thomson",
      country: "USA, Florida",
      profile: three,
    },
    {
      tite: "Trusted Advisors",
      text: "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
      name: "John Mans",
      country: "USA, Nevada",
      profile: two,
    },
    {
      tite: "Efficient and Reliable",
      text: "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
      name: "Angila Rodrego",
      country: "USA, Texas",
      profile: sex,
    },
    {
      tite: "Grateful !",
      text: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
      name: "Jousef Sam",
      country: "USA, Georgia",
      profile: four,
    },
    {
      tite: "Trusted Advisors",
      text: "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
      name: "Sara Thomas",
      country: "USA, Lowa",
      profile: five,
    },
  ];
  return (
    <>
      <div className="slider-container overflow-hidden relative    lg:mx-16 mx-4 pb-10 border-b border-[#262626] ">
        <Slider {...settings}>
          {story.map((item, index) => {
            return (
              <>
                <div key={index} className=" z-20   ">
                  <div className="mainColor shadow border border-[#262626] rounded-xl flex flex-col items-left  sm:mx-14  md:mx-5 p-5  ">
                    
                    <div className="titles-Card ">
                        <img src={stars} alt="" className="w-44 mb-2" />
                      <h3 className="text-white lg:text-lg text-base text-left font-semibold ">
                        {item.tite}
                      </h3>
                      <p className="text-[#9999] xl:text-base text-sm line-clamp-3">
                        {item.text}
                      </p>
                    </div>
                    <div className="w-full flex items-center mt-4 my-2 justify-left ">
                      <img
                        src={item.profile}
                        alt=""
                        className="size-20 bg-[#1a1a1a] rounded-full border border-[#262626]"
                      />
                      <div className="text-white ml-3">
                        <p>{item.name}</p>
                        <p className="text-sm text-[#9999]">{item.country}</p>
                      </div>
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
          Swipe to see all Testimonials
        </p>
      </div>
    </>
  );
}
