/* eslint-disable no-unused-vars */
import React from "react";
import icon from "../../../assets/Home Page/Icon Container.png";
import icon1 from "../../../assets/Home Page/Icon ContainerOne.png";
import icon2 from "../../../assets/Home Page/Icon ContainerTwo.png";
import icon3 from "../../../assets/Home Page/Icon ContainerThree.png";
import { MdArrowOutward } from "react-icons/md";

export default function BottomHero() {
  const Card = [
    {
      img: icon,
      p: "Find Your Dream Home",
      id : 20
    },
    {
      img: icon1,
      p: "Unlock Property Value",
      id : 22

    },
    {
      img: icon2,
      p: "Effortless Property Management",
      id : 24
    },
    {
      img: icon3,
      p: "Smart Investments, Informed Decisions",
      id: 26
    },
  ];
  return (
    <>
      <div className="col-span-12  mainColor grid grid-cols-12  border-y-8 border-[#1a1a1a] lg:gap-2 lg:order-3">
        {Card.map((item) => {
          return (
            <>
              <div key={item.id} className="lg:col-span-3 col-span-6 text-center bg-[#1a1a1a] flex items-center border border-[#262626] flex-col justify-center m-2 p-5 rounded-xl relative">
                <img src={item.img} alt="" className="size-16" />
                <p className="text-white font-medium mt-2 text-sm lg:text-base">{item.p}</p>
                <MdArrowOutward className="absolute top-2 right-3 text-[#4D4D4D] text-2xl" />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
